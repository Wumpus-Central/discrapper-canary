n.d(t, { A: () => V, u: () => N }), n(321073);
var l,
    i = n(311907),
    s = n(73153),
    r = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(383501),
    h = n(543465),
    g = n(287809),
    I = n(914853),
    E = n(41984),
    A = n(956753),
    f = n(833551),
    m = n(42589),
    S = n(406595),
    p = n(652215),
    N = (((l = {}).Text = "TEXT"), (l.Voice = "VOICE"), l);
class T {
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
let _ = !1,
    y = null,
    C = !1,
    x = new T(100),
    v = new T(100);
function M() {
    return f.default.isAnyOverlayRendering();
}
function D(e) {
    return (!!e || !C) && _ !== e && ((_ = e), !0);
}
function R() {
    let e = c.A.getChannelId();
    if (null == e) return null;
    let t = u.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function U(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: l, providers: i } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != y && e === y) return !0;
                let n = R();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > 0.001;
            })(n, i)
        ) || !!(null != l && i.getNormalizedUserAffinity(l) > 0.0028)
    );
}
function O(e) {
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
                let n = r.A.getUserAffinity(t);
                if (n?.isFriend) return 0.4;
                let l = n?.communicationProbability ?? 0,
                    i = e.includeVcProbability ? Math.max(l, n?.vcProbability ?? 0) : l;
                return i <= 0 ? 0 : i >= 1 ? 1 : i;
            },
        }
    );
}
function G(e, t) {
    let n = (0, m.aU)(e.candidate, { voiceGuildId: R(), mostRecentGuildId: y });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === m.G.DirectMessage || e.candidate.kind === m.G.GroupDM ? 1 : 1 + (0, m.EB)(e.candidate, t))
    );
}
function b() {
    let e = O({ includeVcProbability: !1 }),
        t = O({ includeVcProbability: !0 });
    x.rebuildSortedIndexIfDirty((t) => G(t, e)), v.rebuildSortedIndexIfDirty((e) => G(e, t));
}
function w() {
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
function L(e, t) {
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    let [l] = S.A.isFavorite(I.x.MESSAGES, e);
    if (l || n.isPrivate?.()) return !1;
    let i = n.getGuildId?.() ?? null;
    return (
        !(null == i || h.Ay.isGuildOrCategoryOrChannelMuted(i, n.id)) &&
        !!d.A.can(p.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, a.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function k(e, t, n) {
    if (!L(e, "TEXT")) return null;
    let l = u.A.getChannel(e);
    if (null == l) return null;
    let i = (0, m.o5)({
        id: l.id,
        getGuildId: () => l.getGuildId?.() ?? null,
        isDM: () => l.isDM?.() ?? !1,
        isGroupDM: () => l.isGroupDM?.() ?? !1,
        isMultiUserDM: () => l.isMultiUserDM?.() ?? !1,
        recipients: l.recipients ?? [],
        isVocal: () => l.isVocal?.() ?? !1,
    });
    if (null == i || i.kind !== m.G.GuildText) return null;
    let s = x.getChannel(e);
    if (null != s) return s;
    let r = new m.Qb(i, t, n);
    return x.upsert(r), r;
}
function F(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !h.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let l = null != x.getChannel(e),
        i = null != v.getChannel(e);
    return l && x.delete(e), i && v.delete(e), l || i;
}
class P extends i.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(u.A, o.A, S.A, f.default, d.A, c.A, r.A, g.default, h.Ay);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? x.getChannel(e) : v.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? v.getSortedChannels() : x.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? v.getSortedChannelIds() : x.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? v.hasSortedChannelId(n) : x.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = x.getChannel(e) ?? v.getChannel(e);
        if (null == t) return null;
        let n = O({ includeVcProbability: t.candidate.kind === m.G.GuildVoice });
        return G(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = x.getChannel(e) ?? v.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === m.G.GuildVoice ? "VOICE" : "TEXT",
            l = O({ includeVcProbability: t.candidate.kind === m.G.GuildVoice }),
            i = (0, m.aU)(t.candidate, { voiceGuildId: R(), mostRecentGuildId: y }),
            s = t.candidate.kind === m.G.DirectMessage || t.candidate.kind === m.G.GroupDM,
            r = s ? 0 : (0, m.EB)(t.candidate, l),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: i,
            guildAffinity: null != t.candidate.guildId ? l.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + i) * (s ? 1 : 1 + r),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
let j = (e) => (0, A.v$)(e, "OverlayActiveNowStore"),
    V = new P(
        s.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: j(function (e) {
                      if (e.tab !== I.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != x.getChannel(t),
                              n = null != v.getChannel(t);
                          return e && x.delete(t), n && v.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: j(function (e) {
                      return D(!0), b(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: j(function (e) {
                      let { overlayMethod: t } = e;
                      return t === E.Ue.OutOfProcess || t === E.Ue.OutOfProcessLimitedInteraction
                          ? (D(!0), b(), !0)
                          : !M() && D(!1);
                  }),
                  OVERLAY_CRASHED: j(function (e) {
                      return !M() && D(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: j(function (e) {
                      return !e.locked && (D(!0), b(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: j(function () {
                      return (C = !0), D(!0), b(), !0;
                  }),
                  MESSAGE_CREATE: j(function (e) {
                      if (!_ || e.optimistic) return !1;
                      let t = g.default.getCurrentUser()?.id ?? null,
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
                          s = O({ includeVcProbability: !1 }),
                          r = l.getGuildId?.() ?? null;
                      if (
                          !U({
                              isAlreadyTracked: null != x.getChannel(e.channelId),
                              guildId: r,
                              updatingUserId: n,
                              providers: s,
                          })
                      )
                          return !1;
                      let o = k(e.channelId, w(), s);
                      if (null == o) return !1;
                      let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                          c = e.message?.mention_roles,
                          h = Array.isArray(c) && c.length > 0,
                          I = o.prepareForUpdate(i),
                          E = new Map(I.recentMessageAuthorIds);
                      E.set(n, i);
                      let A = {
                          lastMessageAtMs: i,
                          unread: !0,
                          lastUnreadAtMs: i,
                          recentMessageAuthorId: n,
                          recentMessageAuthorIds: E,
                      };
                      return (
                          (d || h) &&
                              ((A.mentionCount = Math.max(I.mentionCount, +!!d + +!!h)),
                              d && (A.lastDirectMentionAtMs = i),
                              h && (A.lastRoleMentionAtMs = i)),
                          o.updateSignalsAndRescore(A, i),
                          o.prunable && x.delete(e.channelId),
                          b(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: j(function (e) {
                      if (!_) return !1;
                      let t = x.getChannel(e.channelId);
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
                          t.prunable && x.delete(e.channelId),
                          b(),
                          !0
                      );
                  }),
                  TYPING_START: j(function (e) {
                      if (!_) return !1;
                      let t = g.default.getCurrentUser()?.id ?? null;
                      if (null == t || e.userId === t) return !1;
                      let n = u.A.getChannel(e.channelId);
                      if (null == n || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
                      let l = Date.now(),
                          i = O({ includeVcProbability: !1 }),
                          s = n.getGuildId?.() ?? null;
                      if (
                          !U({
                              isAlreadyTracked: null != x.getChannel(e.channelId),
                              guildId: s,
                              updatingUserId: e.userId,
                              providers: i,
                          })
                      )
                          return !1;
                      let r = k(e.channelId, w(), i);
                      if (null == r) return !1;
                      let o = new Map(r.prepareForUpdate(l).typingUserIdsWithTimestampMs);
                      o.set(e.userId, l);
                      let d = Array.from(o.keys());
                      return (
                          r.updateSignalsAndRescore(
                              { typingUserIdsWithTimestampMs: o, typingUserIds: d, isTyping: d.length > 0 },
                              l,
                          ),
                          r.prunable && x.delete(e.channelId),
                          b(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: j(function (e) {
                      if (!_) return !1;
                      let t = Date.now(),
                          n = O({ includeVcProbability: !0 }),
                          l = !1;
                      return (
                          v.applyBatch(() => {
                              for (let i of e.voiceStates) {
                                  let e = i.userId,
                                      s = i.channelId ?? null,
                                      r = i.oldChannelId ?? null,
                                      a = (n) => {
                                          let i = v.getChannel(n);
                                          if (null == i) return;
                                          let s = i.signals,
                                              r = new Map(s.voiceUsersWithJoinTimestampMs);
                                          r.delete(e);
                                          let a = new Map(s.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let u = new Map(s.videoUsersWithTimestampMs);
                                          u.delete(e);
                                          let o = new Map(s.lastUnmuteActivityAtMs);
                                          o.delete(e);
                                          let d = new Map(s.lastUndeafenActivityAtMs);
                                          d.delete(e),
                                              i.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: r,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: u,
                                                      lastUnmuteActivityAtMs: o,
                                                      lastUndeafenActivityAtMs: d,
                                                  },
                                                  t,
                                              ),
                                              i.prunable && v.delete(n),
                                              (l = !0);
                                      };
                                  if ((null != r && r !== s && a(r), null != s)) {
                                      let a = u.A.getChannel(s),
                                          o = a?.getGuildId?.() ?? null;
                                      if (
                                          !U({
                                              isAlreadyTracked: null != v.getChannel(s),
                                              guildId: o,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let d = (function (e, t, n) {
                                          if (!L(e, "VOICE")) return null;
                                          let l = u.A.getChannel(e);
                                          if (null == l) return null;
                                          let i = (0, m.o5)({
                                              id: l.id,
                                              getGuildId: () => l.getGuildId?.() ?? null,
                                              isDM: () => l.isDM?.() ?? !1,
                                              isGroupDM: () => l.isGroupDM?.() ?? !1,
                                              isMultiUserDM: () => l.isMultiUserDM?.() ?? !1,
                                              recipients: l.recipients ?? [],
                                              isVocal: () => l.isVocal?.() ?? !1,
                                          });
                                          if (null == i || i.kind !== m.G.GuildVoice) return null;
                                          let s = v.getChannel(e);
                                          if (null != s) return s;
                                          let r = new m.Qb(i, t, n);
                                          return v.upsert(r), r;
                                      })(
                                          s,
                                          {
                                              ...w(),
                                              voiceUsersWithJoinTimestampMs: new Map(),
                                              lastVoiceJoinAtMs: null,
                                              lastUnmuteActivityAtMs: new Map(),
                                              lastUndeafenActivityAtMs: new Map(),
                                              streamUsersWithTimestampMs: new Map(),
                                              videoUsersWithTimestampMs: new Map(),
                                          },
                                          n,
                                      );
                                      if (null == d) continue;
                                      let c = d.prepareForUpdate(t),
                                          h = null == r || r !== s,
                                          g = new Map(c.voiceUsersWithJoinTimestampMs);
                                      h && !g.has(e) && g.set(e, t);
                                      let I = new Map(c.streamUsersWithTimestampMs);
                                      i.selfStream ? I.has(e) || I.set(e, t) : I.delete(e);
                                      let E = new Map(c.videoUsersWithTimestampMs);
                                      i.selfVideo ? E.has(e) || E.set(e, t) : E.delete(e);
                                      let A = new Map(c.lastUnmuteActivityAtMs);
                                      if (!i.selfMute && !i.mute) {
                                          let n = A.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && A.set(e, t);
                                      }
                                      let f = new Map(c.lastUndeafenActivityAtMs);
                                      if (!i.selfDeaf && !i.deaf) {
                                          let n = f.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && f.set(e, t);
                                      }
                                      d.updateSignalsAndRescore(
                                          {
                                              voiceUsersWithJoinTimestampMs: g,
                                              lastVoiceJoinAtMs: h ? t : c.lastVoiceJoinAtMs,
                                              streamUsersWithTimestampMs: I,
                                              videoUsersWithTimestampMs: E,
                                              lastUnmuteActivityAtMs: A,
                                              lastUndeafenActivityAtMs: f,
                                          },
                                          t,
                                      ),
                                          d.prunable && v.delete(s),
                                          (l = !0);
                                  }
                              }
                          }),
                          l && b(),
                          l
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
                      return !(null == n || n.isPrivate()) && ((y = n.getGuildId?.() ?? null), b(), !0);
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: j(function (e) {
                      return F(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: j(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of x.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      for (let e of v.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: j(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of x.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      for (let e of v.getSortedChannels())
                          e.candidate.guildId === t && (n = F(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: j(function () {
                      let e = x.size > 0 || v.size > 0;
                      return x.clear(), v.clear(), (_ = !1), (C = !1), (y = null), e;
                  }),
              },
    );
