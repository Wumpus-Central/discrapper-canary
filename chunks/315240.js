n.d(t, { A: () => ea, u: () => G }), n(321073);
var i,
    l,
    r = n(17928),
    s = n(228366),
    a = n(427358),
    o = n(95701),
    u = n(734057),
    d = n(776096),
    c = n(576705),
    h = n(763827),
    g = n(573163),
    f = n(543465),
    A = n(287809),
    E = n(977997),
    p = n(927813),
    m = n(935208),
    I = n(914853),
    S = n(41984),
    C = n(956753),
    _ = n(296027),
    N =
        (((i = {}).GuildText = "GUILD_TEXT"),
        (i.GuildVoice = "GUILD_VOICE"),
        (i.DirectMessage = "DIRECT_MESSAGE"),
        (i.GroupDM = "GROUP_DM"),
        i);
function T(e, t, n, i) {
    let l = 0;
    for (let [r, s] of e.entries()) {
        let e = i(r);
        if (e <= 0) continue;
        let a = e * M(s, t, n);
        a > l && (l = a);
    }
    return l;
}
class v {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    constructor(e, t) {
        (this.signals = e), (this.providers = t), (this.lastActivityAtMs = Date.now());
    }
    _computeMentionScore(e) {
        if (this.signals.mentionCount <= 0) return 0;
        let t = M(this.signals.lastDirectMentionAtMs, e, 6e5);
        this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
        let n = M(this.signals.lastRoleMentionAtMs, e, 6e5);
        return (
            (this.scoreInfo.rawSignalsScore.lastRoleMentionAtMs = n),
            2 * Math.min(this.signals.mentionCount, 3) * Math.max(t, n)
        );
    }
    _computeMessageScore(e) {
        let t;
        if (
            ((t =
                0 +
                (function (e, t) {
                    if (null == e) return 0;
                    let n = t - e;
                    return n <= 0 || n <= 18e4 ? 0.8 : n >= 6e5 ? 0 : 0.8 * (1 - (n - 18e4) / 42e4);
                })(this.signals.lastMessageAtMs, e)),
            this.signals.unread)
        ) {
            let n = M(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
        }
        let n = T(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n), (t += 1.2 * n);
    }
    _computeActivityScore(e) {
        if (!this.signals.isTyping) return 0;
        let t = T(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.typingUserIdsWithTimestampMs = t), 1.5 * t;
    }
    getScoreWithoutPenalty(e) {
        let t = this._computeActivityScore(e),
            n = this._computeMentionScore(e),
            i = this._computeMessageScore(e);
        return (
            (this.scoreInfo.activityScore = t),
            (this.scoreInfo.mentionScore = n),
            (this.scoreInfo.messageScore = i),
            t + n + i
        );
    }
    computeScore(e) {
        let t = x(e, this.lastActivityAtMs);
        return (this.scoreInfo.penalty = t), this.getScoreWithoutPenalty(e) * (1 - t);
    }
    pruneSignals(e) {
        if (this.signals.typingUserIdsWithTimestampMs.size > 0) {
            let t = new Map();
            for (let [n, i] of this.signals.typingUserIdsWithTimestampMs.entries()) e - i <= 15e3 && t.set(n, i);
            let n = Array.from(t.keys());
            this.signals = {
                ...this.signals,
                typingUserIdsWithTimestampMs: t,
                typingUserIds: n,
                isTyping: n.length > 0,
            };
        }
        if (this.signals.recentMessageAuthorIds.size > 0) {
            let t = new Map();
            for (let [n, i] of this.signals.recentMessageAuthorIds.entries()) e - i <= 6e5 && t.set(n, i);
            let n =
                null != this.signals.recentMessageAuthorId && t.has(this.signals.recentMessageAuthorId)
                    ? this.signals.recentMessageAuthorId
                    : null;
            this.signals = { ...this.signals, recentMessageAuthorIds: t, recentMessageAuthorId: n };
        }
    }
    updateSignals(e, t) {
        (this.lastActivityAtMs = t), (this.signals = e);
    }
}
class y {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    _textualScore;
    constructor(e, t) {
        (this.signals = e),
            (this.providers = t),
            (this._textualScore = new v(e, t)),
            (this.lastActivityAtMs = Date.now());
    }
    _computeTextualScore(e) {
        let t = this._textualScore.getScoreWithoutPenalty(e);
        return (
            (this.scoreInfo = {
                ...this.scoreInfo,
                ...this._textualScore.scoreInfo,
                rawSignalsScore: { ...this.scoreInfo.rawSignalsScore, ...this._textualScore.scoreInfo.rawSignalsScore },
            }),
            D(t, 2)
        );
    }
    _computeVoiceUsersScore(e) {
        if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
        let t = T(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t), 1.25 * t;
    }
    _computeVoiceActivityScore(e) {
        let t = 0;
        null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, M(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
        let n = T(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
        return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
                n,
                T(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
        );
    }
    _computeStreamUsersScore(e) {
        let t = T(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
        let n = T(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n), 2 * (t + n);
    }
    computeScore(e) {
        let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            i = this._computeVoiceActivityScore(e),
            l = this._computeStreamUsersScore(e),
            r = x(e, this.lastActivityAtMs);
        return (
            (this.scoreInfo.penalty = r),
            (this.scoreInfo.voiceUsersScore = n),
            (this.scoreInfo.voiceActivityScore = i),
            (this.scoreInfo.streamUsersScore = l),
            (t + n + i + l) * (1 - r)
        );
    }
    pruneSignals(e) {
        function t(t) {
            if (0 === t.size) return t;
            let n = new Map();
            for (let [i, l] of t.entries()) e - l <= 12e4 && n.set(i, l);
            return n;
        }
        this._textualScore.pruneSignals(e),
            (this.signals = {
                ...this.signals,
                lastUnmuteActivityAtMs: t(this.signals.lastUnmuteActivityAtMs),
                lastUndeafenActivityAtMs: t(this.signals.lastUndeafenActivityAtMs),
            });
    }
    updateSignals(e, t) {
        this._textualScore.updateSignals(e, t), (this.signals = e), (this.lastActivityAtMs = t);
    }
}
function M(e, t, n) {
    if (null == e) return 0;
    let i = t - e;
    return i <= 0 ? 1 : i >= n ? 0 : 1 - i / n;
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e <= 0 ? 0 : e >= t ? t : e;
}
function R(e) {
    let t = e.getGuildId?.() ?? null;
    if (e.isDM?.()) {
        let t = e.getRecipientId?.() ?? null;
        return { channelId: e.id, kind: "DIRECT_MESSAGE", guildId: null, recipientIds: null != t ? [t] : [] };
    }
    return e.isGroupDM?.() || e.isMultiUserDM?.()
        ? { channelId: e.id, kind: "GROUP_DM", guildId: null, recipientIds: e.recipients ?? [] }
        : null != t
          ? { channelId: e.id, kind: e.isVocal?.() ? "GUILD_VOICE" : "GUILD_TEXT", guildId: t, recipientIds: [] }
          : null;
}
function x(e, t) {
    let n = e - t;
    return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
}
function O(e, t) {
    let n = e.guildId;
    if (null == n) return 0;
    let i = 0;
    return (
        null != t.voiceGuildId && n === t.voiceGuildId && (i += 1),
        null != t.mostRecentGuildId && n === t.mostRecentGuildId && (i += 0.4),
        i
    );
}
function U(e, t) {
    return 0.8 * (null != e.guildId ? D(t.getNormalizedGuildAffinity(e.guildId)) : 0);
}
class w {
    candidate;
    signals;
    _activeNowScoreSource;
    _score = 0;
    constructor(e, t, n) {
        (this.candidate = e),
            (this.signals = t),
            "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind
                ? (this._activeNowScoreSource = new y(t, n))
                : (this._activeNowScoreSource = new v(t, n)),
            this.recomputeScore(Date.now());
    }
    get score() {
        return this._score;
    }
    get lastScoreInfo() {
        return this._activeNowScoreSource.scoreInfo;
    }
    get prunable() {
        return this._score <= 0;
    }
    recomputeScore(e) {
        return (this._score = this._activeNowScoreSource.computeScore(e)), this._score;
    }
    prepareForUpdate(e) {
        return (
            this.candidate.kind,
            this._activeNowScoreSource.pruneSignals(e),
            (this.signals = this._activeNowScoreSource.signals),
            this.signals
        );
    }
    updateSignalsAndRescore(e, t) {
        return (
            this.prepareForUpdate(t),
            (this.signals = { ...this.signals, ...e }),
            this.candidate.kind,
            this._activeNowScoreSource.updateSignals(this.signals, t),
            this.recomputeScore(t)
        );
    }
}
var P = n(406595),
    L = n(240516),
    b = n(652215),
    G = (((l = {}).Text = "TEXT"), (l.Voice = "VOICE"), l);
class F {
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
            let l = e(i);
            l > 0 && t.push({ channelId: n, score: l });
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
let j = !1,
    V = null,
    k = !1,
    H = new F(100),
    B = new F(100);
function Y() {
    return _.default.isAnyOverlayRendering();
}
function W(e) {
    return (!!e || !k) && j !== e && ((j = e), !0);
}
function z() {
    let e = h.A.getChannelId();
    if (null == e) return null;
    let t = u.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function J(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: i, providers: l } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != V && e === V) return !0;
                let n = z();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > L.u.MINIMUM_GUILD_AFFINITY;
            })(n, l)
        ) || !!(null != i && l.getNormalizedUserAffinity(i) > L.u.MINIMUM_USER_AFFINITY)
    );
}
function Z(e) {
    let t = d.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        let i = t[e].score ?? 0;
        i > n && (n = i);
    }
    return (
        n <= 0 && (n = 1),
        {
            getNormalizedGuildAffinity: (e) => {
                let t = (d.A.getGuildAffinity(e)?.score ?? 0) / n;
                return t <= 0 ? 0 : t >= 1 ? 1 : t;
            },
            getNormalizedUserAffinity: (t) => {
                let n = a.A.getUserAffinity(t);
                if (n?.isFriend) return L.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let i = n?.communicationProbability ?? 0,
                    l = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
                return l <= 0 ? 0 : l >= 1 ? 1 : l;
            },
        }
    );
}
function $(e, t) {
    let n = O(e.candidate, { voiceGuildId: z(), mostRecentGuildId: V });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === N.DirectMessage || e.candidate.kind === N.GroupDM ? 1 : 1 + U(e.candidate, t))
    );
}
function K() {
    let e = Z({ includeVcProbability: !1 }),
        t = Z({ includeVcProbability: !0 });
    H.rebuildSortedIndexIfDirty((t) => $(t, e)), B.rebuildSortedIndexIfDirty((e) => $(e, t));
}
function q() {
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
function X() {
    return {
        ...q(),
        voiceUsersWithJoinTimestampMs: new Map(),
        lastVoiceJoinAtMs: null,
        lastUnmuteActivityAtMs: new Map(),
        lastUndeafenActivityAtMs: new Map(),
        streamUsersWithTimestampMs: new Map(),
        videoUsersWithTimestampMs: new Map(),
    };
}
function Q(e, t) {
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    let [i] = P.A.isFavorite(I.x.MESSAGES, e);
    if (i || n.isPrivate?.()) return !1;
    let l = n.getGuildId?.() ?? null;
    return (
        !(null == l || f.Ay.isGuildOrCategoryOrChannelMuted(l, n.id)) &&
        !!c.A.can(b.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, o.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function ee(e, t, n) {
    if (!Q(e, "TEXT")) return null;
    let i = u.A.getChannel(e);
    if (null == i) return null;
    let l = R({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == l || l.kind !== N.GuildText) return null;
    let r = H.getChannel(e);
    if (null != r) return r;
    let s = new w(l, t, n);
    return H.upsert(s), s;
}
function et(e, t, n) {
    if (!Q(e, "VOICE")) return null;
    let i = u.A.getChannel(e);
    if (null == i) return null;
    let l = R({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == l || l.kind !== N.GuildVoice) return null;
    let r = B.getChannel(e);
    if (null != r) return r;
    let s = new w(l, t, n);
    return B.upsert(s), s;
}
let en = 30 * p.A.Millis.MINUTE;
function ei() {
    let e = Date.now(),
        t = e - en,
        n = d.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
        i = z();
    null == i || n.includes(i) || n.push(i);
    let l = Z({ includeVcProbability: !1 }),
        r = Z({ includeVcProbability: !0 });
    for (let i of n) {
        let n = u.A.getMutableGuildChannelsForGuild(i);
        for (let i in n) {
            let s = n[i];
            if (null != s) {
                if ((0, o.ke)(s.type)) {
                    let e = s.lastMessageId;
                    if (null == e) continue;
                    let n = m.default.extractTimestamp(e);
                    if (n < t || null != H.getChannel(i)) continue;
                    let r = q();
                    (r.lastMessageAtMs = n),
                        (r.unread = g.Ay.hasUnread(i)),
                        (r.mentionCount = g.Ay.getMentionCount(i)),
                        r.unread && (r.lastUnreadAtMs = n),
                        r.mentionCount > 0 && (r.lastDirectMentionAtMs = n),
                        ee(i, r, l);
                }
                if (s.isVocal()) {
                    if (null != B.getChannel(i)) continue;
                    let t = Object.entries(E.A.getVoiceStatesForChannel(i));
                    if (0 === t.length) continue;
                    let n = new Map();
                    for (let [i] of t) n.set(i, e);
                    et(i, { ...X(), voiceUsersWithJoinTimestampMs: n, lastVoiceJoinAtMs: e }, r);
                }
            }
        }
    }
    K();
}
function el(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !f.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let i = null != H.getChannel(e),
        l = null != B.getChannel(e);
    return i && H.delete(e), l && B.delete(e), i || l;
}
class er extends r.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(u.A, d.A, P.A, _.default, c.A, g.Ay, h.A, a.A, A.default, f.Ay, E.A);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? H.getChannel(e) : B.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? B.getSortedChannels() : H.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? B.getSortedChannelIds() : H.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? B.hasSortedChannelId(n) : H.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = H.getChannel(e) ?? B.getChannel(e);
        if (null == t) return null;
        let n = Z({ includeVcProbability: t.candidate.kind === N.GuildVoice });
        return $(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = H.getChannel(e) ?? B.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === N.GuildVoice ? "VOICE" : "TEXT",
            i = Z({ includeVcProbability: t.candidate.kind === N.GuildVoice }),
            l = O(t.candidate, { voiceGuildId: z(), mostRecentGuildId: V }),
            r = t.candidate.kind === N.DirectMessage || t.candidate.kind === N.GroupDM,
            s = r ? 0 : U(t.candidate, i),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: l,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + l) * (r ? 1 : 1 + s),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
function es(e) {
    return (0, C.v$)(e, "OverlayActiveNowStore");
}
let ea = new er(
    s.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: es(function (e) {
                  if (e.tab !== I.x.MESSAGES) return !1;
                  let t = e.targetId;
                  if (e.isFavorite) {
                      let e = null != H.getChannel(t),
                          n = null != B.getChannel(t);
                      return e && H.delete(t), n && B.delete(t), e || n;
                  }
                  return !1;
              }),
              OVERLAY_MOUNTED: es(function (e) {
                  return W(!0), ei(), !0;
              }),
              OVERLAY_UPDATE_OVERLAY_METHOD: es(function (e) {
                  let { overlayMethod: t } = e;
                  return t === S.Ue.OutOfProcess || t === S.Ue.OutOfProcessLimitedInteraction
                      ? (W(!0), K(), !0)
                      : !Y() && W(!1);
              }),
              OVERLAY_CRASHED: es(function (e) {
                  return !Y() && W(!1);
              }),
              OVERLAY_SET_INPUT_LOCKED: es(function (e) {
                  return !e.locked && (W(!0), K(), !0);
              }),
              FRIENDS_LIST_POPOUT_MOUNTED: es(function () {
                  return (k = !0), W(!0), ei(), !0;
              }),
              MESSAGE_CREATE: es(function (e) {
                  if (!j || e.optimistic) return !1;
                  let t = A.default.getCurrentUser()?.id ?? null,
                      n = e.message?.author?.id ?? null;
                  if (null == t || null == n || n === t) return !1;
                  let i = u.A.getChannel(e.channelId);
                  if (null == i || i.isPrivate() || !(0, o.ke)(i.type)) return !1;
                  let l = (function (e) {
                          let t = e.timestamp;
                          if (null == t) return Date.now();
                          let n = new Date(t).getTime();
                          return Number.isFinite(n) ? n : Date.now();
                      })(e.message),
                      r = Z({ includeVcProbability: !1 }),
                      s = i.getGuildId?.() ?? null;
                  if (
                      !J({
                          isAlreadyTracked: null != H.getChannel(e.channelId),
                          guildId: s,
                          updatingUserId: n,
                          providers: r,
                      })
                  )
                      return !1;
                  let a = ee(e.channelId, q(), r);
                  if (null == a) return !1;
                  let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                      c = e.message?.mention_roles,
                      h = Array.isArray(c) && c.length > 0,
                      g = a.prepareForUpdate(l),
                      f = new Map(g.recentMessageAuthorIds);
                  f.set(n, l);
                  let E = {
                      lastMessageAtMs: l,
                      unread: !0,
                      lastUnreadAtMs: l,
                      recentMessageAuthorId: n,
                      recentMessageAuthorIds: f,
                  };
                  return (
                      (d || h) &&
                          ((E.mentionCount = Math.max(g.mentionCount, +!!d + +!!h)),
                          d && (E.lastDirectMentionAtMs = l),
                          h && (E.lastRoleMentionAtMs = l)),
                      a.updateSignalsAndRescore(E, l),
                      a.prunable && H.delete(e.channelId),
                      K(),
                      !0
                  );
              }),
              MESSAGE_ACK: es(function (e) {
                  if (!j) return !1;
                  let t = H.getChannel(e.channelId);
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
                      t.prunable && H.delete(e.channelId),
                      K(),
                      !0
                  );
              }),
              TYPING_START: es(function (e) {
                  if (!j) return !1;
                  let t = A.default.getCurrentUser()?.id ?? null;
                  if (null == t || e.userId === t) return !1;
                  let n = u.A.getChannel(e.channelId);
                  if (null == n || n.isPrivate() || !(0, o.ke)(n.type)) return !1;
                  let i = Date.now(),
                      l = Z({ includeVcProbability: !1 }),
                      r = n.getGuildId?.() ?? null;
                  if (
                      !J({
                          isAlreadyTracked: null != H.getChannel(e.channelId),
                          guildId: r,
                          updatingUserId: e.userId,
                          providers: l,
                      })
                  )
                      return !1;
                  let s = ee(e.channelId, q(), l);
                  if (null == s) return !1;
                  let a = new Map(s.prepareForUpdate(i).typingUserIdsWithTimestampMs);
                  a.set(e.userId, i);
                  let d = Array.from(a.keys());
                  return (
                      s.updateSignalsAndRescore(
                          { typingUserIdsWithTimestampMs: a, typingUserIds: d, isTyping: d.length > 0 },
                          i,
                      ),
                      s.prunable && H.delete(e.channelId),
                      K(),
                      !0
                  );
              }),
              VOICE_STATE_UPDATES: es(function (e) {
                  if (!j) return !1;
                  let t = Date.now(),
                      n = Z({ includeVcProbability: !0 }),
                      i = !1;
                  return (
                      B.applyBatch(() => {
                          for (let l of e.voiceStates) {
                              let e = l.userId,
                                  r = l.channelId ?? null,
                                  s = l.oldChannelId ?? null;
                              if (
                                  (null != s &&
                                      s !== r &&
                                      (function (n) {
                                          let l = B.getChannel(n);
                                          if (null == l) return;
                                          let r = l.signals,
                                              s = new Map(r.voiceUsersWithJoinTimestampMs);
                                          s.delete(e);
                                          let a = new Map(r.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let o = new Map(r.videoUsersWithTimestampMs);
                                          o.delete(e);
                                          let u = new Map(r.lastUnmuteActivityAtMs);
                                          u.delete(e);
                                          let d = new Map(r.lastUndeafenActivityAtMs);
                                          d.delete(e),
                                              l.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: s,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: o,
                                                      lastUnmuteActivityAtMs: u,
                                                      lastUndeafenActivityAtMs: d,
                                                  },
                                                  t,
                                              ),
                                              l.prunable && B.delete(n),
                                              (i = !0);
                                      })(s),
                                  null != r)
                              ) {
                                  let a = u.A.getChannel(r),
                                      o = a?.getGuildId?.() ?? null;
                                  if (
                                      !J({
                                          isAlreadyTracked: null != B.getChannel(r),
                                          guildId: o,
                                          updatingUserId: e,
                                          providers: n,
                                      })
                                  )
                                      continue;
                                  let d = et(r, X(), n);
                                  if (null == d) continue;
                                  let c = d.prepareForUpdate(t),
                                      h = null == s || s !== r,
                                      g = new Map(c.voiceUsersWithJoinTimestampMs);
                                  h && !g.has(e) && g.set(e, t);
                                  let f = new Map(c.streamUsersWithTimestampMs);
                                  l.selfStream ? f.has(e) || f.set(e, t) : f.delete(e);
                                  let A = new Map(c.videoUsersWithTimestampMs);
                                  l.selfVideo ? A.has(e) || A.set(e, t) : A.delete(e);
                                  let E = new Map(c.lastUnmuteActivityAtMs);
                                  if (!l.selfMute && !l.mute) {
                                      let n = E.get(e) ?? null;
                                      (null == n || t - n >= 15e3) && E.set(e, t);
                                  }
                                  let p = new Map(c.lastUndeafenActivityAtMs);
                                  if (!l.selfDeaf && !l.deaf) {
                                      let n = p.get(e) ?? null;
                                      (null == n || t - n >= 15e3) && p.set(e, t);
                                  }
                                  d.updateSignalsAndRescore(
                                      {
                                          voiceUsersWithJoinTimestampMs: g,
                                          lastVoiceJoinAtMs: h ? t : c.lastVoiceJoinAtMs,
                                          streamUsersWithTimestampMs: f,
                                          videoUsersWithTimestampMs: A,
                                          lastUnmuteActivityAtMs: E,
                                          lastUndeafenActivityAtMs: p,
                                      },
                                      t,
                                  ),
                                      d.prunable && B.delete(r),
                                      (i = !0);
                              }
                          }
                      }),
                      i && K(),
                      i
                  );
              }),
              VOICE_CHANNEL_SELECT: es(function (e) {
                  return K(), !0;
              }),
              RTC_CONNECTION_STATE: es(function (e) {
                  return K(), !0;
              }),
              CHANNEL_SELECT: es(function (e) {
                  let { channelId: t } = e;
                  if (null == t) return !1;
                  let n = u.A.getChannel(t);
                  return !(null == n || n.isPrivate()) && ((V = n.getGuildId?.() ?? null), K(), !0);
              }),
              USER_GUILD_SETTINGS_CHANNEL_UPDATE: es(function (e) {
                  return el(e.channelId);
              }),
              USER_GUILD_SETTINGS_GUILD_UPDATE: es(function (e) {
                  let t = e.guildId,
                      n = !1;
                  for (let e of H.getSortedChannels())
                      e.candidate.guildId === t && (n = el(e.candidate.channelId) || n);
                  for (let e of B.getSortedChannels())
                      e.candidate.guildId === t && (n = el(e.candidate.channelId) || n);
                  return n;
              }),
              USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: es(function (e) {
                  let t = e.guildId,
                      n = !1;
                  for (let e of H.getSortedChannels())
                      e.candidate.guildId === t && (n = el(e.candidate.channelId) || n);
                  for (let e of B.getSortedChannels())
                      e.candidate.guildId === t && (n = el(e.candidate.channelId) || n);
                  return n;
              }),
              LOGOUT: es(function () {
                  let e = H.size > 0 || B.size > 0;
                  return H.clear(), B.clear(), (j = !1), (k = !1), (V = null), e;
              }),
          },
);
