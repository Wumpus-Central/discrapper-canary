n.d(t, { A: () => X, u: () => y }), n(321073);
var i,
    r = n(311907),
    s = n(73153),
    l = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(383501),
    h = n(222823),
    I = n(543465),
    g = n(287809),
    f = n(977997),
    A = n(927813),
    E = n(661191),
    S = n(914853),
    _ = n(41984),
    M = n(956753),
    p = n(833551),
    N = n(42589),
    T = n(406595),
    m = n(240516),
    C = n(652215),
    y = (((i = {}).Text = "TEXT"), (i.Voice = "VOICE"), i);
class D {
    _maxItems;
    _channelsByChannelId = new Map();
    _sortedScoreIndex = [];
    _sortedChannelIdSet = new Set();
    _isDirty = !1;
    constructor(e) {
        this._maxItems = e;
    }
    get size() {
        return this._channelsByChannelId.size;
    }
    getChannel(e) {
        return this._channelsByChannelId.get(e) ?? null;
    }
    upsert(e) {
        this._channelsByChannelId.set(e.candidate.channelId, e), (this._isDirty = !0);
    }
    delete(e) {
        this._channelsByChannelId.has(e) && (this._channelsByChannelId.delete(e), (this._isDirty = !0));
    }
    applyBatch(e) {
        e(), (this._isDirty = !0);
    }
    rebuildSortedIndexIfDirty(e) {
        if (!this._isDirty) return;
        let t = [];
        for (let [n, i] of this._channelsByChannelId.entries()) {
            let r = e(i);
            r > 0 && t.push({ channelId: n, score: r });
        }
        t.sort((e, t) => (e.score !== t.score ? t.score - e.score : e.channelId < t.channelId ? -1 : 1));
        let n = t.slice(0, this._maxItems);
        (this._sortedScoreIndex = n),
            (this._sortedChannelIdSet = new Set(n.map((e) => e.channelId))),
            (this._isDirty = !1);
    }
    getSortedChannels() {
        let e = [];
        for (let { channelId: t } of this._sortedScoreIndex) {
            let n = this._channelsByChannelId.get(t);
            null != n && e.push(n);
        }
        return e;
    }
    getSortedChannelIds() {
        return this._sortedScoreIndex.map((e) => e.channelId);
    }
    hasSortedChannelId(e) {
        return this._sortedChannelIdSet.has(e);
    }
    clear() {
        this._channelsByChannelId.clear(),
            (this._sortedScoreIndex = []),
            this._sortedChannelIdSet.clear(),
            (this._isDirty = !1);
    }
}
let U = !1,
    O = null,
    v = !1,
    G = new D(100),
    R = new D(100);
function w() {
    return p.default.isAnyOverlayRendering();
}
function L(e) {
    return (!!e || !v) && U !== e && ((U = e), !0);
}
function F() {
    let e = c.A.getChannelId();
    if (null == e) return null;
    let t = u.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function P(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: i, providers: r } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != O && e === O) return !0;
                let n = F();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > m.u.MINIMUM_GUILD_AFFINITY;
            })(n, r)
        ) || !!(null != i && r.getNormalizedUserAffinity(i) > m.u.MINIMUM_USER_AFFINITY)
    );
}
function V(e) {
    let t = o.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        let i = t[e].score ?? 0;
        i > n && (n = i);
    }
    return (
        n <= 0 && (n = 1),
        {
            getNormalizedGuildAffinity: (e) => {
                let t = (o.A.getGuildAffinity(e)?.score ?? 0) / n;
                return t <= 0 ? 0 : t >= 1 ? 1 : t;
            },
            getNormalizedUserAffinity: (t) => {
                let n = l.A.getUserAffinity(t);
                if (n?.isFriend) return m.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let i = n?.communicationProbability ?? 0,
                    r = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
                return r <= 0 ? 0 : r >= 1 ? 1 : r;
            },
        }
    );
}
function x(e, t) {
    let n = (0, N.aU)(e.candidate, { voiceGuildId: F(), mostRecentGuildId: O });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === N.G.DirectMessage || e.candidate.kind === N.G.GroupDM ? 1 : 1 + (0, N.EB)(e.candidate, t))
    );
}
function b() {
    let e = V({ includeVcProbability: !1 }),
        t = V({ includeVcProbability: !0 });
    G.rebuildSortedIndexIfDirty((t) => x(t, e)), R.rebuildSortedIndexIfDirty((e) => x(e, t));
}
function k() {
    return {
        mentionCount: 0,
        lastDirectMentionAtMs: null,
        lastRoleMentionAtMs: null,
        unread: !1,
        lastUnreadAtMs: null,
        lastMessageAtMs: null,
        recentMessageAuthorIds: new Map(),
        recentMessageAuthorId: null,
        typingUserIdsWithTimestampMs: new Map(),
        typingUserIds: [],
        isTyping: !1,
        unreadOrMentionAgeMs: null,
    };
}
function Y() {
    return {
        ...k(),
        voiceUsersWithJoinTimestampMs: new Map(),
        lastVoiceJoinAtMs: null,
        lastUnmuteActivityAtMs: new Map(),
        lastUndeafenActivityAtMs: new Map(),
        streamUsersWithTimestampMs: new Map(),
        videoUsersWithTimestampMs: new Map(),
    };
}
function H(e, t) {
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    let [i] = T.A.isFavorite(S.x.MESSAGES, e);
    if (i || n.isPrivate?.()) return !1;
    let r = n.getGuildId?.() ?? null;
    return (
        !(null == r || I.Ay.isGuildOrCategoryOrChannelMuted(r, n.id)) &&
        !!d.A.can(C.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, a.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function W(e, t, n) {
    if (!H(e, "TEXT")) return null;
    let i = u.A.getChannel(e);
    if (null == i) return null;
    let r = (0, N.o5)({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == r || r.kind !== N.G.GuildText) return null;
    let s = G.getChannel(e);
    if (null != s) return s;
    let l = new N.Qb(r, t, n);
    return G.upsert(l), l;
}
function $(e, t, n) {
    if (!H(e, "VOICE")) return null;
    let i = u.A.getChannel(e);
    if (null == i) return null;
    let r = (0, N.o5)({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == r || r.kind !== N.G.GuildVoice) return null;
    let s = R.getChannel(e);
    if (null != s) return s;
    let l = new N.Qb(r, t, n);
    return R.upsert(l), l;
}
let z = 30 * A.A.Millis.MINUTE;
function B() {
    let e = Date.now(),
        t = e - z,
        n = o.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
        i = F();
    null == i || n.includes(i) || n.push(i);
    let r = V({ includeVcProbability: !1 }),
        s = V({ includeVcProbability: !0 });
    for (let i of n) {
        let n = u.A.getMutableGuildChannelsForGuild(i);
        for (let i in n) {
            let l = n[i];
            if (null != l) {
                if ((0, a.ke)(l.type)) {
                    let e = l.lastMessageId;
                    if (null == e) continue;
                    let n = E.default.extractTimestamp(e);
                    if (n < t || null != G.getChannel(i)) continue;
                    let s = k();
                    (s.lastMessageAtMs = n),
                        (s.unread = h.Ay.hasUnread(i)),
                        (s.mentionCount = h.Ay.getMentionCount(i)),
                        s.unread && (s.lastUnreadAtMs = n),
                        s.mentionCount > 0 && (s.lastDirectMentionAtMs = n),
                        W(i, s, r);
                }
                if (l.isVocal()) {
                    if (null != R.getChannel(i)) continue;
                    let t = Object.entries(f.A.getVoiceStatesForChannel(i));
                    if (0 === t.length) continue;
                    let n = new Map();
                    for (let [i] of t) n.set(i, e);
                    $(i, { ...Y(), voiceUsersWithJoinTimestampMs: n, lastVoiceJoinAtMs: e }, s);
                }
            }
        }
    }
    b();
}
function J(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !I.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let i = null != G.getChannel(e),
        r = null != R.getChannel(e);
    return i && G.delete(e), r && R.delete(e), i || r;
}
class K extends r.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(u.A, o.A, T.A, p.default, d.A, h.Ay, c.A, l.A, g.default, I.Ay, f.A);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? G.getChannel(e) : R.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? R.getSortedChannels() : G.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? R.getSortedChannelIds() : G.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? R.hasSortedChannelId(n) : G.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = G.getChannel(e) ?? R.getChannel(e);
        if (null == t) return null;
        let n = V({ includeVcProbability: t.candidate.kind === N.G.GuildVoice });
        return x(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = G.getChannel(e) ?? R.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === N.G.GuildVoice ? "VOICE" : "TEXT",
            i = V({ includeVcProbability: t.candidate.kind === N.G.GuildVoice }),
            r = (0, N.aU)(t.candidate, { voiceGuildId: F(), mostRecentGuildId: O }),
            s = t.candidate.kind === N.G.DirectMessage || t.candidate.kind === N.G.GroupDM,
            l = s ? 0 : (0, N.EB)(t.candidate, i),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: r,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + r) * (s ? 1 : 1 + l),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
let j = (e) => (0, M.v$)(e, "OverlayActiveNowStore"),
    X = new K(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: j(function (e) {
                      if (e.tab !== S.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != G.getChannel(t),
                              n = null != R.getChannel(t);
                          return e && G.delete(t), n && R.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: j(function (e) {
                      return L(!0), B(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: j(function (e) {
                      let { overlayMethod: t } = e;
                      return t === _.Ue.OutOfProcess || t === _.Ue.OutOfProcessLimitedInteraction
                          ? (L(!0), b(), !0)
                          : !w() && L(!1);
                  }),
                  OVERLAY_CRASHED: j(function (e) {
                      return !w() && L(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: j(function (e) {
                      return !e.locked && (L(!0), b(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: j(function () {
                      return (v = !0), L(!0), B(), !0;
                  }),
                  MESSAGE_CREATE: j(function (e) {
                      if (!U || e.optimistic) return !1;
                      let t = g.default.getCurrentUser()?.id ?? null,
                          n = e.message?.author?.id ?? null;
                      if (null == t || null == n || n === t) return !1;
                      let i = u.A.getChannel(e.channelId);
                      if (null == i || i.isPrivate() || !(0, a.ke)(i.type)) return !1;
                      let r = (function (e) {
                              let t = e.timestamp;
                              if (null == t) return Date.now();
                              let n = new Date(t).getTime();
                              return Number.isFinite(n) ? n : Date.now();
                          })(e.message),
                          s = V({ includeVcProbability: !1 }),
                          l = i.getGuildId?.() ?? null;
                      if (
                          !P({
                              isAlreadyTracked: null != G.getChannel(e.channelId),
                              guildId: l,
                              updatingUserId: n,
                              providers: s,
                          })
                      )
                          return !1;
                      let o = W(e.channelId, k(), s);
                      if (null == o) return !1;
                      let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                          c = e.message?.mention_roles,
                          h = Array.isArray(c) && c.length > 0,
                          I = o.prepareForUpdate(r),
                          f = new Map(I.recentMessageAuthorIds);
                      f.set(n, r);
                      let A = {
                          lastMessageAtMs: r,
                          unread: !0,
                          lastUnreadAtMs: r,
                          recentMessageAuthorId: n,
                          recentMessageAuthorIds: f,
                      };
                      return (
                          (d || h) &&
                              ((A.mentionCount = Math.max(I.mentionCount, +!!d + +!!h)),
                              d && (A.lastDirectMentionAtMs = r),
                              h && (A.lastRoleMentionAtMs = r)),
                          o.updateSignalsAndRescore(A, r),
                          o.prunable && G.delete(e.channelId),
                          b(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: j(function (e) {
                      if (!U) return !1;
                      let t = G.getChannel(e.channelId);
                      if (null == t) return !1;
                      let n = Date.now(),
                          i = { unread: !1, lastUnreadAtMs: null };
                      return (
                          null != e.newMentionCount &&
                              (e.newMentionCount > 0
                                  ? ((i.mentionCount = e.newMentionCount),
                                    null == t.signals.lastDirectMentionAtMs && (i.lastDirectMentionAtMs = n))
                                  : ((i.mentionCount = 0),
                                    (i.lastDirectMentionAtMs = null),
                                    (i.lastRoleMentionAtMs = null))),
                          t.updateSignalsAndRescore(i, n),
                          t.prunable && G.delete(e.channelId),
                          b(),
                          !0
                      );
                  }),
                  TYPING_START: j(function (e) {
                      if (!U) return !1;
                      let t = g.default.getCurrentUser()?.id ?? null;
                      if (null == t || e.userId === t) return !1;
                      let n = u.A.getChannel(e.channelId);
                      if (null == n || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
                      let i = Date.now(),
                          r = V({ includeVcProbability: !1 }),
                          s = n.getGuildId?.() ?? null;
                      if (
                          !P({
                              isAlreadyTracked: null != G.getChannel(e.channelId),
                              guildId: s,
                              updatingUserId: e.userId,
                              providers: r,
                          })
                      )
                          return !1;
                      let l = W(e.channelId, k(), r);
                      if (null == l) return !1;
                      let o = new Map(l.prepareForUpdate(i).typingUserIdsWithTimestampMs);
                      o.set(e.userId, i);
                      let d = Array.from(o.keys());
                      return (
                          l.updateSignalsAndRescore(
                              { typingUserIdsWithTimestampMs: o, typingUserIds: d, isTyping: d.length > 0 },
                              i,
                          ),
                          l.prunable && G.delete(e.channelId),
                          b(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: j(function (e) {
                      if (!U) return !1;
                      let t = Date.now(),
                          n = V({ includeVcProbability: !0 }),
                          i = !1;
                      return (
                          R.applyBatch(() => {
                              for (let r of e.voiceStates) {
                                  let e = r.userId,
                                      s = r.channelId ?? null,
                                      l = r.oldChannelId ?? null,
                                      a = (n) => {
                                          let r = R.getChannel(n);
                                          if (null == r) return;
                                          let s = r.signals,
                                              l = new Map(s.voiceUsersWithJoinTimestampMs);
                                          l.delete(e);
                                          let a = new Map(s.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let u = new Map(s.videoUsersWithTimestampMs);
                                          u.delete(e);
                                          let o = new Map(s.lastUnmuteActivityAtMs);
                                          o.delete(e);
                                          let d = new Map(s.lastUndeafenActivityAtMs);
                                          d.delete(e),
                                              r.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: l,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: u,
                                                      lastUnmuteActivityAtMs: o,
                                                      lastUndeafenActivityAtMs: d,
                                                  },
                                                  t,
                                              ),
                                              r.prunable && R.delete(n),
                                              (i = !0);
                                      };
                                  if ((null != l && l !== s && a(l), null != s)) {
                                      let a = u.A.getChannel(s),
                                          o = a?.getGuildId?.() ?? null;
                                      if (
                                          !P({
                                              isAlreadyTracked: null != R.getChannel(s),
                                              guildId: o,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let d = $(s, Y(), n);
                                      if (null == d) continue;
                                      let c = d.prepareForUpdate(t),
                                          h = null == l || l !== s,
                                          I = new Map(c.voiceUsersWithJoinTimestampMs);
                                      h && !I.has(e) && I.set(e, t);
                                      let g = new Map(c.streamUsersWithTimestampMs);
                                      r.selfStream ? g.has(e) || g.set(e, t) : g.delete(e);
                                      let f = new Map(c.videoUsersWithTimestampMs);
                                      r.selfVideo ? f.has(e) || f.set(e, t) : f.delete(e);
                                      let A = new Map(c.lastUnmuteActivityAtMs);
                                      if (!r.selfMute && !r.mute) {
                                          let n = A.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && A.set(e, t);
                                      }
                                      let E = new Map(c.lastUndeafenActivityAtMs);
                                      if (!r.selfDeaf && !r.deaf) {
                                          let n = E.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && E.set(e, t);
                                      }
                                      d.updateSignalsAndRescore(
                                          {
                                              voiceUsersWithJoinTimestampMs: I,
                                              lastVoiceJoinAtMs: h ? t : c.lastVoiceJoinAtMs,
                                              streamUsersWithTimestampMs: g,
                                              videoUsersWithTimestampMs: f,
                                              lastUnmuteActivityAtMs: A,
                                              lastUndeafenActivityAtMs: E,
                                          },
                                          t,
                                      ),
                                          d.prunable && R.delete(s),
                                          (i = !0);
                                  }
                              }
                          }),
                          i && b(),
                          i
                      );
                  }),
                  VOICE_CHANNEL_SELECT: j(function (e) {
                      return b(), !0;
                  }),
                  RTC_CONNECTION_STATE: j(function (e) {
                      return b(), !0;
                  }),
                  CHANNEL_SELECT: j(function (e) {
                      let { channelId: t } = e;
                      if (null == t) return !1;
                      let n = u.A.getChannel(t);
                      return !(null == n || n.isPrivate()) && ((O = n.getGuildId?.() ?? null), b(), !0);
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: j(function (e) {
                      return J(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: j(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of G.getSortedChannels())
                          e.candidate.guildId === t && (n = J(e.candidate.channelId) || n);
                      for (let e of R.getSortedChannels())
                          e.candidate.guildId === t && (n = J(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: j(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of G.getSortedChannels())
                          e.candidate.guildId === t && (n = J(e.candidate.channelId) || n);
                      for (let e of R.getSortedChannels())
                          e.candidate.guildId === t && (n = J(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: j(function () {
                      let e = G.size > 0 || R.size > 0;
                      return G.clear(), R.clear(), (U = !1), (v = !1), (O = null), e;
                  }),
              },
    );
