n.d(t, { A: () => H, u: () => T }), n(321073);
var l,
    i = n(311907),
    r = n(73153),
    s = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(383501),
    h = n(543465),
    g = n(287809),
    I = n(914853),
    f = n(41984),
    A = n(956753),
    E = n(833551),
    m = n(42589),
    S = n(406595),
    p = n(240516),
    N = n(652215),
    T = (((l = {}).Text = "TEXT"), (l.Voice = "VOICE"), l);
class _ {
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
let C = !1,
    y = null,
    x = !1,
    v = new _(100),
    M = new _(100);
function D() {
    return E.default.isAnyOverlayRendering();
}
function R(e) {
    return (!!e || !x) && C !== e && ((C = e), !0);
}
function U() {
    let e = c.A.getChannelId();
    if (null == e) return null;
    let t = u.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function O(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: l, providers: i } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != y && e === y) return !0;
                let n = U();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > p.u.MINIMUM_GUILD_AFFINITY;
            })(n, i)
        ) || !!(null != l && i.getNormalizedUserAffinity(l) > p.u.MINIMUM_USER_AFFINITY)
    );
}
function G(e) {
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
                if (n?.isFriend) return p.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let l = n?.communicationProbability ?? 0,
                    i = e.includeVcProbability ? Math.max(l, n?.vcProbability ?? 0) : l;
                return i <= 0 ? 0 : i >= 1 ? 1 : i;
            },
        }
    );
}
function b(e, t) {
    let n = (0, m.aU)(e.candidate, { voiceGuildId: U(), mostRecentGuildId: y });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === m.G.DirectMessage || e.candidate.kind === m.G.GroupDM ? 1 : 1 + (0, m.EB)(e.candidate, t))
    );
}
function w() {
    let e = G({ includeVcProbability: !1 }),
        t = G({ includeVcProbability: !0 });
    v.rebuildSortedIndexIfDirty((t) => b(t, e)), M.rebuildSortedIndexIfDirty((e) => b(e, t));
}
function L() {
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
function F(e, t) {
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    let [l] = S.A.isFavorite(I.x.MESSAGES, e);
    if (l || n.isPrivate?.()) return !1;
    let i = n.getGuildId?.() ?? null;
    return (
        !(null == i || h.Ay.isGuildOrCategoryOrChannelMuted(i, n.id)) &&
        !!d.A.can(N.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, a.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function k(e, t, n) {
    if (!F(e, "TEXT")) return null;
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
    let r = v.getChannel(e);
    if (null != r) return r;
    let s = new m.Qb(i, t, n);
    return v.upsert(s), s;
}
function P(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !h.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let l = null != v.getChannel(e),
        i = null != M.getChannel(e);
    return l && v.delete(e), i && M.delete(e), l || i;
}
class j extends i.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(u.A, o.A, S.A, E.default, d.A, c.A, s.A, g.default, h.Ay);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? v.getChannel(e) : M.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? M.getSortedChannels() : v.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? M.getSortedChannelIds() : v.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? M.hasSortedChannelId(n) : v.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = v.getChannel(e) ?? M.getChannel(e);
        if (null == t) return null;
        let n = G({ includeVcProbability: t.candidate.kind === m.G.GuildVoice });
        return b(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = v.getChannel(e) ?? M.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === m.G.GuildVoice ? "VOICE" : "TEXT",
            l = G({ includeVcProbability: t.candidate.kind === m.G.GuildVoice }),
            i = (0, m.aU)(t.candidate, { voiceGuildId: U(), mostRecentGuildId: y }),
            r = t.candidate.kind === m.G.DirectMessage || t.candidate.kind === m.G.GroupDM,
            s = r ? 0 : (0, m.EB)(t.candidate, l),
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
let V = (e) => (0, A.v$)(e, "OverlayActiveNowStore"),
    H = new j(
        r.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: V(function (e) {
                      if (e.tab !== I.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != v.getChannel(t),
                              n = null != M.getChannel(t);
                          return e && v.delete(t), n && M.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: V(function (e) {
                      return R(!0), w(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: V(function (e) {
                      let { overlayMethod: t } = e;
                      return t === f.Ue.OutOfProcess || t === f.Ue.OutOfProcessLimitedInteraction
                          ? (R(!0), w(), !0)
                          : !D() && R(!1);
                  }),
                  OVERLAY_CRASHED: V(function (e) {
                      return !D() && R(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: V(function (e) {
                      return !e.locked && (R(!0), w(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: V(function () {
                      return (x = !0), R(!0), w(), !0;
                  }),
                  MESSAGE_CREATE: V(function (e) {
                      if (!C || e.optimistic) return !1;
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
                          r = G({ includeVcProbability: !1 }),
                          s = l.getGuildId?.() ?? null;
                      if (
                          !O({
                              isAlreadyTracked: null != v.getChannel(e.channelId),
                              guildId: s,
                              updatingUserId: n,
                              providers: r,
                          })
                      )
                          return !1;
                      let o = k(e.channelId, L(), r);
                      if (null == o) return !1;
                      let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                          c = e.message?.mention_roles,
                          h = Array.isArray(c) && c.length > 0,
                          I = o.prepareForUpdate(i),
                          f = new Map(I.recentMessageAuthorIds);
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
                              ((A.mentionCount = Math.max(I.mentionCount, +!!d + +!!h)),
                              d && (A.lastDirectMentionAtMs = i),
                              h && (A.lastRoleMentionAtMs = i)),
                          o.updateSignalsAndRescore(A, i),
                          o.prunable && v.delete(e.channelId),
                          w(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: V(function (e) {
                      if (!C) return !1;
                      let t = v.getChannel(e.channelId);
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
                          t.prunable && v.delete(e.channelId),
                          w(),
                          !0
                      );
                  }),
                  TYPING_START: V(function (e) {
                      if (!C) return !1;
                      let t = g.default.getCurrentUser()?.id ?? null;
                      if (null == t || e.userId === t) return !1;
                      let n = u.A.getChannel(e.channelId);
                      if (null == n || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
                      let l = Date.now(),
                          i = G({ includeVcProbability: !1 }),
                          r = n.getGuildId?.() ?? null;
                      if (
                          !O({
                              isAlreadyTracked: null != v.getChannel(e.channelId),
                              guildId: r,
                              updatingUserId: e.userId,
                              providers: i,
                          })
                      )
                          return !1;
                      let s = k(e.channelId, L(), i);
                      if (null == s) return !1;
                      let o = new Map(s.prepareForUpdate(l).typingUserIdsWithTimestampMs);
                      o.set(e.userId, l);
                      let d = Array.from(o.keys());
                      return (
                          s.updateSignalsAndRescore(
                              { typingUserIdsWithTimestampMs: o, typingUserIds: d, isTyping: d.length > 0 },
                              l,
                          ),
                          s.prunable && v.delete(e.channelId),
                          w(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: V(function (e) {
                      if (!C) return !1;
                      let t = Date.now(),
                          n = G({ includeVcProbability: !0 }),
                          l = !1;
                      return (
                          M.applyBatch(() => {
                              for (let i of e.voiceStates) {
                                  let e = i.userId,
                                      r = i.channelId ?? null,
                                      s = i.oldChannelId ?? null,
                                      a = (n) => {
                                          let i = M.getChannel(n);
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
                                              i.prunable && M.delete(n),
                                              (l = !0);
                                      };
                                  if ((null != s && s !== r && a(s), null != r)) {
                                      let a = u.A.getChannel(r),
                                          o = a?.getGuildId?.() ?? null;
                                      if (
                                          !O({
                                              isAlreadyTracked: null != M.getChannel(r),
                                              guildId: o,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let d = (function (e, t, n) {
                                          if (!F(e, "VOICE")) return null;
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
                                          let r = M.getChannel(e);
                                          if (null != r) return r;
                                          let s = new m.Qb(i, t, n);
                                          return M.upsert(s), s;
                                      })(
                                          r,
                                          {
                                              ...L(),
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
                                          d.prunable && M.delete(r),
                                          (l = !0);
                                  }
                              }
                          }),
                          l && w(),
                          l
                      );
                  }),
                  VOICE_CHANNEL_SELECT: V(function (e) {
                      return w(), !0;
                  }),
                  RTC_CONNECTION_STATE: V(function (e) {
                      return w(), !0;
                  }),
                  CHANNEL_SELECT: V(function (e) {
                      let { channelId: t } = e;
                      if (null == t) return !1;
                      let n = u.A.getChannel(t);
                      return !(null == n || n.isPrivate()) && ((y = n.getGuildId?.() ?? null), w(), !0);
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: V(function (e) {
                      return P(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: V(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of v.getSortedChannels())
                          e.candidate.guildId === t && (n = P(e.candidate.channelId) || n);
                      for (let e of M.getSortedChannels())
                          e.candidate.guildId === t && (n = P(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: V(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of v.getSortedChannels())
                          e.candidate.guildId === t && (n = P(e.candidate.channelId) || n);
                      for (let e of M.getSortedChannels())
                          e.candidate.guildId === t && (n = P(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: V(function () {
                      let e = v.size > 0 || M.size > 0;
                      return v.clear(), M.clear(), (C = !1), (x = !1), (y = null), e;
                  }),
              },
    );
