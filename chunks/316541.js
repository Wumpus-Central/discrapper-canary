n.d(t, { A: () => Z, u: () => x }), n(321073);
var l,
    i = n(311907),
    r = n(73153),
    s = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(383501),
    h = n(222823),
    g = n(543465),
    I = n(287809),
    f = n(977997),
    A = n(927813),
    E = n(661191),
    m = n(914853),
    S = n(41984),
    p = n(956753),
    N = n(833551),
    T = n(42589),
    _ = n(406595),
    C = n(240516),
    y = n(652215),
    x = (((l = {}).Text = "TEXT"), (l.Voice = "VOICE"), l);
class M {
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
        for (let [n, l] of this._channelsByChannelId.entries()) {
            let i = e(l);
            i > 0 && t.push({ channelId: n, score: i });
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
let v = !1,
    D = null,
    R = !1,
    U = new M(100),
    O = new M(100);
function G() {
    return N.default.isAnyOverlayRendering();
}
function b(e) {
    return (!!e || !R) && v !== e && ((v = e), !0);
}
function w() {
    let e = c.A.getChannelId();
    if (null == e) return null;
    let t = u.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function F(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: l, providers: i } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != D && e === D) return !0;
                let n = w();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > C.u.MINIMUM_GUILD_AFFINITY;
            })(n, i)
        ) || !!(null != l && i.getNormalizedUserAffinity(l) > C.u.MINIMUM_USER_AFFINITY)
    );
}
function L(e) {
    let t = o.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        let l = t[e].score ?? 0;
        l > n && (n = l);
    }
    return (
        n <= 0 && (n = 1),
        {
            getNormalizedGuildAffinity: (e) => {
                let t = (o.A.getGuildAffinity(e)?.score ?? 0) / n;
                return t <= 0 ? 0 : t >= 1 ? 1 : t;
            },
            getNormalizedUserAffinity: (t) => {
                let n = s.A.getUserAffinity(t);
                if (n?.isFriend) return C.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let l = n?.communicationProbability ?? 0,
                    i = e.includeVcProbability ? Math.max(l, n?.vcProbability ?? 0) : l;
                return i <= 0 ? 0 : i >= 1 ? 1 : i;
            },
        }
    );
}
function k(e, t) {
    let n = (0, T.aU)(e.candidate, { voiceGuildId: w(), mostRecentGuildId: D });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === T.G.DirectMessage || e.candidate.kind === T.G.GroupDM ? 1 : 1 + (0, T.EB)(e.candidate, t))
    );
}
function P() {
    let e = L({ includeVcProbability: !1 }),
        t = L({ includeVcProbability: !0 });
    U.rebuildSortedIndexIfDirty((t) => k(t, e)), O.rebuildSortedIndexIfDirty((e) => k(e, t));
}
function j() {
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
function V() {
    return {
        ...j(),
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
    let [l] = _.A.isFavorite(m.x.MESSAGES, e);
    if (l || n.isPrivate?.()) return !1;
    let i = n.getGuildId?.() ?? null;
    return (
        !(null == i || g.Ay.isGuildOrCategoryOrChannelMuted(i, n.id)) &&
        !!d.A.can(y.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, a.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function Y(e, t, n) {
    if (!H(e, "TEXT")) return null;
    let l = u.A.getChannel(e);
    if (null == l) return null;
    let i = (0, T.o5)({
        id: l.id,
        getGuildId: () => l.getGuildId?.() ?? null,
        isDM: () => l.isDM?.() ?? !1,
        isGroupDM: () => l.isGroupDM?.() ?? !1,
        isMultiUserDM: () => l.isMultiUserDM?.() ?? !1,
        recipients: l.recipients ?? [],
        isVocal: () => l.isVocal?.() ?? !1,
    });
    if (null == i || i.kind !== T.G.GuildText) return null;
    let r = U.getChannel(e);
    if (null != r) return r;
    let s = new T.Qb(i, t, n);
    return U.upsert(s), s;
}
function W(e, t, n) {
    if (!H(e, "VOICE")) return null;
    let l = u.A.getChannel(e);
    if (null == l) return null;
    let i = (0, T.o5)({
        id: l.id,
        getGuildId: () => l.getGuildId?.() ?? null,
        isDM: () => l.isDM?.() ?? !1,
        isGroupDM: () => l.isGroupDM?.() ?? !1,
        isMultiUserDM: () => l.isMultiUserDM?.() ?? !1,
        recipients: l.recipients ?? [],
        isVocal: () => l.isVocal?.() ?? !1,
    });
    if (null == i || i.kind !== T.G.GuildVoice) return null;
    let r = O.getChannel(e);
    if (null != r) return r;
    let s = new T.Qb(i, t, n);
    return O.upsert(s), s;
}
let z = 30 * A.A.Millis.MINUTE;
function $() {
    let e = Date.now(),
        t = e - z,
        n = o.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
        l = w();
    null == l || n.includes(l) || n.push(l);
    let i = L({ includeVcProbability: !1 }),
        r = L({ includeVcProbability: !0 });
    for (let l of n) {
        let n = u.A.getMutableGuildChannelsForGuild(l);
        for (let l in n) {
            let s = n[l];
            if (null != s) {
                if ((0, a.ke)(s.type)) {
                    let e = s.lastMessageId;
                    if (null == e) continue;
                    let n = E.default.extractTimestamp(e);
                    if (n < t || null != U.getChannel(l)) continue;
                    let r = j();
                    (r.lastMessageAtMs = n),
                        (r.unread = h.Ay.hasUnread(l)),
                        (r.mentionCount = h.Ay.getMentionCount(l)),
                        r.unread && (r.lastUnreadAtMs = n),
                        r.mentionCount > 0 && (r.lastDirectMentionAtMs = n),
                        Y(l, r, i);
                }
                if (s.isVocal()) {
                    if (null != O.getChannel(l)) continue;
                    let t = Object.entries(f.A.getVoiceStatesForChannel(l));
                    if (0 === t.length) continue;
                    let n = new Map();
                    for (let [l] of t) n.set(l, e);
                    W(l, { ...V(), voiceUsersWithJoinTimestampMs: n, lastVoiceJoinAtMs: e }, r);
                }
            }
        }
    }
    P();
}
function B(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !g.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let l = null != U.getChannel(e),
        i = null != O.getChannel(e);
    return l && U.delete(e), i && O.delete(e), l || i;
}
class K extends i.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(u.A, o.A, _.A, N.default, d.A, h.Ay, c.A, s.A, I.default, g.Ay, f.A);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? U.getChannel(e) : O.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? O.getSortedChannels() : U.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? O.getSortedChannelIds() : U.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? O.hasSortedChannelId(n) : U.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = U.getChannel(e) ?? O.getChannel(e);
        if (null == t) return null;
        let n = L({ includeVcProbability: t.candidate.kind === T.G.GuildVoice });
        return k(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = U.getChannel(e) ?? O.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === T.G.GuildVoice ? "VOICE" : "TEXT",
            l = L({ includeVcProbability: t.candidate.kind === T.G.GuildVoice }),
            i = (0, T.aU)(t.candidate, { voiceGuildId: w(), mostRecentGuildId: D }),
            r = t.candidate.kind === T.G.DirectMessage || t.candidate.kind === T.G.GroupDM,
            s = r ? 0 : (0, T.EB)(t.candidate, l),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: i,
            guildAffinity: null != t.candidate.guildId ? l.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + i) * (r ? 1 : 1 + s),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
let X = (e) => (0, p.v$)(e, "OverlayActiveNowStore"),
    Z = new K(
        r.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: X(function (e) {
                      if (e.tab !== m.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != U.getChannel(t),
                              n = null != O.getChannel(t);
                          return e && U.delete(t), n && O.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: X(function (e) {
                      return b(!0), $(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: X(function (e) {
                      let { overlayMethod: t } = e;
                      return t === S.Ue.OutOfProcess || t === S.Ue.OutOfProcessLimitedInteraction
                          ? (b(!0), P(), !0)
                          : !G() && b(!1);
                  }),
                  OVERLAY_CRASHED: X(function (e) {
                      return !G() && b(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: X(function (e) {
                      return !e.locked && (b(!0), P(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: X(function () {
                      return (R = !0), b(!0), $(), !0;
                  }),
                  MESSAGE_CREATE: X(function (e) {
                      if (!v || e.optimistic) return !1;
                      let t = I.default.getCurrentUser()?.id ?? null,
                          n = e.message?.author?.id ?? null;
                      if (null == t || null == n || n === t) return !1;
                      let l = u.A.getChannel(e.channelId);
                      if (null == l || l.isPrivate() || !(0, a.ke)(l.type)) return !1;
                      let i = (function (e) {
                              let t = e.timestamp;
                              if (null == t) return Date.now();
                              let n = new Date(t).getTime();
                              return Number.isFinite(n) ? n : Date.now();
                          })(e.message),
                          r = L({ includeVcProbability: !1 }),
                          s = l.getGuildId?.() ?? null;
                      if (
                          !F({
                              isAlreadyTracked: null != U.getChannel(e.channelId),
                              guildId: s,
                              updatingUserId: n,
                              providers: r,
                          })
                      )
                          return !1;
                      let o = Y(e.channelId, j(), r);
                      if (null == o) return !1;
                      let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                          c = e.message?.mention_roles,
                          h = Array.isArray(c) && c.length > 0,
                          g = o.prepareForUpdate(i),
                          f = new Map(g.recentMessageAuthorIds);
                      f.set(n, i);
                      let A = {
                          lastMessageAtMs: i,
                          unread: !0,
                          lastUnreadAtMs: i,
                          recentMessageAuthorId: n,
                          recentMessageAuthorIds: f,
                      };
                      return (
                          (d || h) &&
                              ((A.mentionCount = Math.max(g.mentionCount, +!!d + +!!h)),
                              d && (A.lastDirectMentionAtMs = i),
                              h && (A.lastRoleMentionAtMs = i)),
                          o.updateSignalsAndRescore(A, i),
                          o.prunable && U.delete(e.channelId),
                          P(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: X(function (e) {
                      if (!v) return !1;
                      let t = U.getChannel(e.channelId);
                      if (null == t) return !1;
                      let n = Date.now(),
                          l = { unread: !1, lastUnreadAtMs: null };
                      return (
                          null != e.newMentionCount &&
                              (e.newMentionCount > 0
                                  ? ((l.mentionCount = e.newMentionCount),
                                    null == t.signals.lastDirectMentionAtMs && (l.lastDirectMentionAtMs = n))
                                  : ((l.mentionCount = 0),
                                    (l.lastDirectMentionAtMs = null),
                                    (l.lastRoleMentionAtMs = null))),
                          t.updateSignalsAndRescore(l, n),
                          t.prunable && U.delete(e.channelId),
                          P(),
                          !0
                      );
                  }),
                  TYPING_START: X(function (e) {
                      if (!v) return !1;
                      let t = I.default.getCurrentUser()?.id ?? null;
                      if (null == t || e.userId === t) return !1;
                      let n = u.A.getChannel(e.channelId);
                      if (null == n || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
                      let l = Date.now(),
                          i = L({ includeVcProbability: !1 }),
                          r = n.getGuildId?.() ?? null;
                      if (
                          !F({
                              isAlreadyTracked: null != U.getChannel(e.channelId),
                              guildId: r,
                              updatingUserId: e.userId,
                              providers: i,
                          })
                      )
                          return !1;
                      let s = Y(e.channelId, j(), i);
                      if (null == s) return !1;
                      let o = new Map(s.prepareForUpdate(l).typingUserIdsWithTimestampMs);
                      o.set(e.userId, l);
                      let d = Array.from(o.keys());
                      return (
                          s.updateSignalsAndRescore(
                              { typingUserIdsWithTimestampMs: o, typingUserIds: d, isTyping: d.length > 0 },
                              l,
                          ),
                          s.prunable && U.delete(e.channelId),
                          P(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: X(function (e) {
                      if (!v) return !1;
                      let t = Date.now(),
                          n = L({ includeVcProbability: !0 }),
                          l = !1;
                      return (
                          O.applyBatch(() => {
                              for (let i of e.voiceStates) {
                                  let e = i.userId,
                                      r = i.channelId ?? null,
                                      s = i.oldChannelId ?? null,
                                      a = (n) => {
                                          let i = O.getChannel(n);
                                          if (null == i) return;
                                          let r = i.signals,
                                              s = new Map(r.voiceUsersWithJoinTimestampMs);
                                          s.delete(e);
                                          let a = new Map(r.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let u = new Map(r.videoUsersWithTimestampMs);
                                          u.delete(e);
                                          let o = new Map(r.lastUnmuteActivityAtMs);
                                          o.delete(e);
                                          let d = new Map(r.lastUndeafenActivityAtMs);
                                          d.delete(e),
                                              i.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: s,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: u,
                                                      lastUnmuteActivityAtMs: o,
                                                      lastUndeafenActivityAtMs: d,
                                                  },
                                                  t,
                                              ),
                                              i.prunable && O.delete(n),
                                              (l = !0);
                                      };
                                  if ((null != s && s !== r && a(s), null != r)) {
                                      let a = u.A.getChannel(r),
                                          o = a?.getGuildId?.() ?? null;
                                      if (
                                          !F({
                                              isAlreadyTracked: null != O.getChannel(r),
                                              guildId: o,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let d = W(r, V(), n);
                                      if (null == d) continue;
                                      let c = d.prepareForUpdate(t),
                                          h = null == s || s !== r,
                                          g = new Map(c.voiceUsersWithJoinTimestampMs);
                                      h && !g.has(e) && g.set(e, t);
                                      let I = new Map(c.streamUsersWithTimestampMs);
                                      i.selfStream ? I.has(e) || I.set(e, t) : I.delete(e);
                                      let f = new Map(c.videoUsersWithTimestampMs);
                                      i.selfVideo ? f.has(e) || f.set(e, t) : f.delete(e);
                                      let A = new Map(c.lastUnmuteActivityAtMs);
                                      if (!i.selfMute && !i.mute) {
                                          let n = A.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && A.set(e, t);
                                      }
                                      let E = new Map(c.lastUndeafenActivityAtMs);
                                      if (!i.selfDeaf && !i.deaf) {
                                          let n = E.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && E.set(e, t);
                                      }
                                      d.updateSignalsAndRescore(
                                          {
                                              voiceUsersWithJoinTimestampMs: g,
                                              lastVoiceJoinAtMs: h ? t : c.lastVoiceJoinAtMs,
                                              streamUsersWithTimestampMs: I,
                                              videoUsersWithTimestampMs: f,
                                              lastUnmuteActivityAtMs: A,
                                              lastUndeafenActivityAtMs: E,
                                          },
                                          t,
                                      ),
                                          d.prunable && O.delete(r),
                                          (l = !0);
                                  }
                              }
                          }),
                          l && P(),
                          l
                      );
                  }),
                  VOICE_CHANNEL_SELECT: X(function (e) {
                      return P(), !0;
                  }),
                  RTC_CONNECTION_STATE: X(function (e) {
                      return P(), !0;
                  }),
                  CHANNEL_SELECT: X(function (e) {
                      let { channelId: t } = e;
                      if (null == t) return !1;
                      let n = u.A.getChannel(t);
                      return !(null == n || n.isPrivate()) && ((D = n.getGuildId?.() ?? null), P(), !0);
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: X(function (e) {
                      return B(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: X(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of U.getSortedChannels())
                          e.candidate.guildId === t && (n = B(e.candidate.channelId) || n);
                      for (let e of O.getSortedChannels())
                          e.candidate.guildId === t && (n = B(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: X(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of U.getSortedChannels())
                          e.candidate.guildId === t && (n = B(e.candidate.channelId) || n);
                      for (let e of O.getSortedChannels())
                          e.candidate.guildId === t && (n = B(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: X(function () {
                      let e = U.size > 0 || O.size > 0;
                      return U.clear(), O.clear(), (v = !1), (R = !1), (D = null), e;
                  }),
              },
    );
