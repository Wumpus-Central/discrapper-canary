"use strict";
n.d(t, { A: () => el, u: () => x }), n(321073);
var i,
    r,
    a = n(17928),
    s = n(228366),
    l = n(427358),
    o = n(95701),
    d = n(734057),
    c = n(776096),
    u = n(576705),
    _ = n(763827),
    E = n(568548),
    A = n(543465),
    h = n(287809),
    I = n(977997),
    f = n(927813),
    p = n(935208),
    T = n(914853),
    m = n(41984),
    g = n(956753),
    S = n(296027),
    N =
        (((i = {}).GuildText = "GUILD_TEXT"),
        (i.GuildVoice = "GUILD_VOICE"),
        (i.DirectMessage = "DIRECT_MESSAGE"),
        (i.GroupDM = "GROUP_DM"),
        i);
function C(e, t, n, i) {
    let r = 0;
    for (let [a, s] of e.entries()) {
        let e = i(a);
        if (e <= 0) continue;
        let l = e * L(s, t, n);
        l > r && (r = l);
    }
    return r;
}
class O {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    constructor(e, t) {
        (this.signals = e), (this.providers = t), (this.lastActivityAtMs = Date.now());
    }
    _computeMentionScore(e) {
        if (this.signals.mentionCount <= 0) return 0;
        let t = L(this.signals.lastDirectMentionAtMs, e, 6e5);
        this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
        let n = L(this.signals.lastRoleMentionAtMs, e, 6e5);
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
            let n = L(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
        }
        let n = C(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n), (t += 1.2 * n);
    }
    _computeActivityScore(e) {
        if (!this.signals.isTyping) return 0;
        let t = C(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
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
        let t = v(e, this.lastActivityAtMs);
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
class R {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    _textualScore;
    constructor(e, t) {
        (this.signals = e),
            (this.providers = t),
            (this._textualScore = new O(e, t)),
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
        let t = C(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t), 1.25 * t;
    }
    _computeVoiceActivityScore(e) {
        let t = 0;
        null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, L(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
        let n = C(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
        return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
                n,
                C(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
        );
    }
    _computeStreamUsersScore(e) {
        let t = C(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
        let n = C(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n), 2 * (t + n);
    }
    computeScore(e) {
        let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            i = this._computeVoiceActivityScore(e),
            r = this._computeStreamUsersScore(e),
            a = v(e, this.lastActivityAtMs);
        return (
            (this.scoreInfo.penalty = a),
            (this.scoreInfo.voiceUsersScore = n),
            (this.scoreInfo.voiceActivityScore = i),
            (this.scoreInfo.streamUsersScore = r),
            (t + n + i + r) * (1 - a)
        );
    }
    pruneSignals(e) {
        function t(t) {
            if (0 === t.size) return t;
            let n = new Map();
            for (let [i, r] of t.entries()) e - r <= 12e4 && n.set(i, r);
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
function L(e, t, n) {
    if (null == e) return 0;
    let i = t - e;
    return i <= 0 ? 1 : i >= n ? 0 : 1 - i / n;
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e <= 0 ? 0 : e >= t ? t : e;
}
function y(e) {
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
function v(e, t) {
    let n = e - t;
    return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
}
function b(e, t) {
    let n = e.guildId;
    if (null == n) return 0;
    let i = 0;
    return (
        null != t.voiceGuildId && n === t.voiceGuildId && (i += 1),
        null != t.mostRecentGuildId && n === t.mostRecentGuildId && (i += 0.4),
        i
    );
}
function M(e, t) {
    return 0.8 * (null != e.guildId ? D(t.getNormalizedGuildAffinity(e.guildId)) : 0);
}
class P {
    candidate;
    signals;
    _activeNowScoreSource;
    _score = 0;
    constructor(e, t, n) {
        (this.candidate = e),
            (this.signals = t),
            "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind
                ? (this._activeNowScoreSource = new R(t, n))
                : (this._activeNowScoreSource = new O(t, n)),
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
var U = n(406595),
    w = n(240516),
    G = n(652215),
    x = (((r = {}).Text = "TEXT"), (r.Voice = "VOICE"), r);
class k {
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
let F = !1,
    V = null,
    B = !1,
    H = new k(100),
    j = new k(100);
function W() {
    return S.default.isAnyOverlayRendering();
}
function Y(e) {
    return (!!e || !B) && F !== e && ((F = e), !0);
}
function K() {
    let e = _.A.getChannelId();
    if (null == e) return null;
    let t = d.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function $(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: i, providers: r } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != V && e === V) return !0;
                let n = K();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > w.u.MINIMUM_GUILD_AFFINITY;
            })(n, r)
        ) || !!(null != i && r.getNormalizedUserAffinity(i) > w.u.MINIMUM_USER_AFFINITY)
    );
}
function z(e) {
    let t = c.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        let i = t[e].score ?? 0;
        i > n && (n = i);
    }
    return (
        n <= 0 && (n = 1),
        {
            getNormalizedGuildAffinity: (e) => {
                let t = (c.A.getGuildAffinity(e)?.score ?? 0) / n;
                return t <= 0 ? 0 : t >= 1 ? 1 : t;
            },
            getNormalizedUserAffinity: (t) => {
                let n = l.A.getUserAffinity(t);
                if (n?.isFriend) return w.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let i = n?.communicationProbability ?? 0,
                    r = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
                return r <= 0 ? 0 : r >= 1 ? 1 : r;
            },
        }
    );
}
function q(e, t) {
    let n = b(e.candidate, { voiceGuildId: K(), mostRecentGuildId: V });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === N.DirectMessage || e.candidate.kind === N.GroupDM ? 1 : 1 + M(e.candidate, t))
    );
}
function Z() {
    let e = z({ includeVcProbability: !1 }),
        t = z({ includeVcProbability: !0 });
    H.rebuildSortedIndexIfDirty((t) => q(t, e)), j.rebuildSortedIndexIfDirty((e) => q(e, t));
}
function X() {
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
function Q() {
    return {
        ...X(),
        voiceUsersWithJoinTimestampMs: new Map(),
        lastVoiceJoinAtMs: null,
        lastUnmuteActivityAtMs: new Map(),
        lastUndeafenActivityAtMs: new Map(),
        streamUsersWithTimestampMs: new Map(),
        videoUsersWithTimestampMs: new Map(),
    };
}
function J(e, t) {
    let n = d.A.getChannel(e);
    if (null == n) return !1;
    let [i] = U.A.isFavorite(T.x.MESSAGES, e);
    if (i || n.isPrivate?.()) return !1;
    let r = n.getGuildId?.() ?? null;
    return (
        !(null == r || A.Ay.isGuildOrCategoryOrChannelMuted(r, n.id)) &&
        !!u.A.can(G.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, o.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function ee(e, t, n) {
    if (!J(e, "TEXT")) return null;
    let i = d.A.getChannel(e);
    if (null == i) return null;
    let r = y({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == r || r.kind !== N.GuildText) return null;
    let a = H.getChannel(e);
    if (null != a) return a;
    let s = new P(r, t, n);
    return H.upsert(s), s;
}
function et(e, t, n) {
    if (!J(e, "VOICE")) return null;
    let i = d.A.getChannel(e);
    if (null == i) return null;
    let r = y({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == r || r.kind !== N.GuildVoice) return null;
    let a = j.getChannel(e);
    if (null != a) return a;
    let s = new P(r, t, n);
    return j.upsert(s), s;
}
let en = 30 * f.A.Millis.MINUTE;
function ei() {
    let e = Date.now(),
        t = e - en,
        n = c.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
        i = K();
    null == i || n.includes(i) || n.push(i);
    let r = z({ includeVcProbability: !1 }),
        a = z({ includeVcProbability: !0 });
    for (let i of n) {
        let n = d.A.getMutableGuildChannelsForGuild(i);
        for (let i in n) {
            let s = n[i];
            if (null != s) {
                if ((0, o.ke)(s.type)) {
                    let e = s.lastMessageId;
                    if (null == e) continue;
                    let n = p.default.extractTimestamp(e);
                    if (n < t || null != H.getChannel(i)) continue;
                    let a = X();
                    (a.lastMessageAtMs = n),
                        (a.unread = E.Ay.hasUnread(i)),
                        (a.mentionCount = E.Ay.getMentionCount(i)),
                        a.unread && (a.lastUnreadAtMs = n),
                        a.mentionCount > 0 && (a.lastDirectMentionAtMs = n),
                        ee(i, a, r);
                }
                if (s.isVocal()) {
                    if (null != j.getChannel(i)) continue;
                    let t = Object.entries(I.A.getVoiceStatesForChannel(i));
                    if (0 === t.length) continue;
                    let n = new Map();
                    for (let [i] of t) n.set(i, e);
                    et(i, { ...Q(), voiceUsersWithJoinTimestampMs: n, lastVoiceJoinAtMs: e }, a);
                }
            }
        }
    }
    Z();
}
function er(e) {
    let t = d.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !A.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let i = null != H.getChannel(e),
        r = null != j.getChannel(e);
    return i && H.delete(e), r && j.delete(e), i || r;
}
class ea extends a.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(d.A, c.A, U.A, S.default, u.A, E.Ay, _.A, l.A, h.default, A.Ay, I.A);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? H.getChannel(e) : j.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? j.getSortedChannels() : H.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? j.getSortedChannelIds() : H.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? j.hasSortedChannelId(n) : H.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = H.getChannel(e) ?? j.getChannel(e);
        if (null == t) return null;
        let n = z({ includeVcProbability: t.candidate.kind === N.GuildVoice });
        return q(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = H.getChannel(e) ?? j.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === N.GuildVoice ? "VOICE" : "TEXT",
            i = z({ includeVcProbability: t.candidate.kind === N.GuildVoice }),
            r = b(t.candidate, { voiceGuildId: K(), mostRecentGuildId: V }),
            a = t.candidate.kind === N.DirectMessage || t.candidate.kind === N.GroupDM,
            s = a ? 0 : M(t.candidate, i),
            l = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: l,
            contextBoost: r,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: l * (1 + r) * (a ? 1 : 1 + s),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
function es(e) {
    return (0, g.v$)(e, "OverlayActiveNowStore");
}
let el = new ea(
    s.h,
    __OVERLAY__
        ? {}
        : {
              OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: es(function (e) {
                  if (e.tab !== T.x.MESSAGES) return !1;
                  let t = e.targetId;
                  if (e.isFavorite) {
                      let e = null != H.getChannel(t),
                          n = null != j.getChannel(t);
                      return e && H.delete(t), n && j.delete(t), e || n;
                  }
                  return !1;
              }),
              OVERLAY_MOUNTED: es(function (e) {
                  return Y(!0), ei(), !0;
              }),
              OVERLAY_UPDATE_OVERLAY_METHOD: es(function (e) {
                  let { overlayMethod: t } = e;
                  return t === m.Ue.OutOfProcess || t === m.Ue.OutOfProcessLimitedInteraction
                      ? (Y(!0), Z(), !0)
                      : !W() && Y(!1);
              }),
              OVERLAY_CRASHED: es(function (e) {
                  return !W() && Y(!1);
              }),
              OVERLAY_SET_INPUT_LOCKED: es(function (e) {
                  return !e.locked && (Y(!0), Z(), !0);
              }),
              FRIENDS_LIST_POPOUT_MOUNTED: es(function () {
                  return (B = !0), Y(!0), ei(), !0;
              }),
              MESSAGE_CREATE: es(function (e) {
                  if (!F || e.optimistic) return !1;
                  let t = h.default.getCurrentUser()?.id ?? null,
                      n = e.message?.author?.id ?? null;
                  if (null == t || null == n || n === t) return !1;
                  let i = d.A.getChannel(e.channelId);
                  if (null == i || i.isPrivate() || !(0, o.ke)(i.type)) return !1;
                  let r = (function (e) {
                          let t = e.timestamp;
                          if (null == t) return Date.now();
                          let n = new Date(t).getTime();
                          return Number.isFinite(n) ? n : Date.now();
                      })(e.message),
                      a = z({ includeVcProbability: !1 }),
                      s = i.getGuildId?.() ?? null;
                  if (
                      !$({
                          isAlreadyTracked: null != H.getChannel(e.channelId),
                          guildId: s,
                          updatingUserId: n,
                          providers: a,
                      })
                  )
                      return !1;
                  let l = ee(e.channelId, X(), a);
                  if (null == l) return !1;
                  let c = (e.message?.mentions ?? []).some((e) => e?.id === t),
                      u = e.message?.mention_roles,
                      _ = Array.isArray(u) && u.length > 0,
                      E = l.prepareForUpdate(r),
                      A = new Map(E.recentMessageAuthorIds);
                  A.set(n, r);
                  let I = {
                      lastMessageAtMs: r,
                      unread: !0,
                      lastUnreadAtMs: r,
                      recentMessageAuthorId: n,
                      recentMessageAuthorIds: A,
                  };
                  return (
                      (c || _) &&
                          ((I.mentionCount = Math.max(E.mentionCount, +!!c + +!!_)),
                          c && (I.lastDirectMentionAtMs = r),
                          _ && (I.lastRoleMentionAtMs = r)),
                      l.updateSignalsAndRescore(I, r),
                      l.prunable && H.delete(e.channelId),
                      Z(),
                      !0
                  );
              }),
              MESSAGE_ACK: es(function (e) {
                  if (!F) return !1;
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
                      Z(),
                      !0
                  );
              }),
              TYPING_START: es(function (e) {
                  if (!F) return !1;
                  let t = h.default.getCurrentUser()?.id ?? null;
                  if (null == t || e.userId === t) return !1;
                  let n = d.A.getChannel(e.channelId);
                  if (null == n || n.isPrivate() || !(0, o.ke)(n.type)) return !1;
                  let i = Date.now(),
                      r = z({ includeVcProbability: !1 }),
                      a = n.getGuildId?.() ?? null;
                  if (
                      !$({
                          isAlreadyTracked: null != H.getChannel(e.channelId),
                          guildId: a,
                          updatingUserId: e.userId,
                          providers: r,
                      })
                  )
                      return !1;
                  let s = ee(e.channelId, X(), r);
                  if (null == s) return !1;
                  let l = new Map(s.prepareForUpdate(i).typingUserIdsWithTimestampMs);
                  l.set(e.userId, i);
                  let c = Array.from(l.keys());
                  return (
                      s.updateSignalsAndRescore(
                          { typingUserIdsWithTimestampMs: l, typingUserIds: c, isTyping: c.length > 0 },
                          i,
                      ),
                      s.prunable && H.delete(e.channelId),
                      Z(),
                      !0
                  );
              }),
              VOICE_STATE_UPDATES: es(function (e) {
                  if (!F) return !1;
                  let t = Date.now(),
                      n = z({ includeVcProbability: !0 }),
                      i = !1;
                  return (
                      j.applyBatch(() => {
                          for (let r of e.voiceStates) {
                              let e = r.userId,
                                  a = r.channelId ?? null,
                                  s = r.oldChannelId ?? null;
                              if (
                                  (null != s &&
                                      s !== a &&
                                      (function (n) {
                                          let r = j.getChannel(n);
                                          if (null == r) return;
                                          let a = r.signals,
                                              s = new Map(a.voiceUsersWithJoinTimestampMs);
                                          s.delete(e);
                                          let l = new Map(a.streamUsersWithTimestampMs);
                                          l.delete(e);
                                          let o = new Map(a.videoUsersWithTimestampMs);
                                          o.delete(e);
                                          let d = new Map(a.lastUnmuteActivityAtMs);
                                          d.delete(e);
                                          let c = new Map(a.lastUndeafenActivityAtMs);
                                          c.delete(e),
                                              r.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: s,
                                                      streamUsersWithTimestampMs: l,
                                                      videoUsersWithTimestampMs: o,
                                                      lastUnmuteActivityAtMs: d,
                                                      lastUndeafenActivityAtMs: c,
                                                  },
                                                  t,
                                              ),
                                              r.prunable && j.delete(n),
                                              (i = !0);
                                      })(s),
                                  null != a)
                              ) {
                                  let l = d.A.getChannel(a),
                                      o = l?.getGuildId?.() ?? null;
                                  if (
                                      !$({
                                          isAlreadyTracked: null != j.getChannel(a),
                                          guildId: o,
                                          updatingUserId: e,
                                          providers: n,
                                      })
                                  )
                                      continue;
                                  let c = et(a, Q(), n);
                                  if (null == c) continue;
                                  let u = c.prepareForUpdate(t),
                                      _ = null == s || s !== a,
                                      E = new Map(u.voiceUsersWithJoinTimestampMs);
                                  _ && !E.has(e) && E.set(e, t);
                                  let A = new Map(u.streamUsersWithTimestampMs);
                                  r.selfStream ? A.has(e) || A.set(e, t) : A.delete(e);
                                  let h = new Map(u.videoUsersWithTimestampMs);
                                  r.selfVideo ? h.has(e) || h.set(e, t) : h.delete(e);
                                  let I = new Map(u.lastUnmuteActivityAtMs);
                                  if (!r.selfMute && !r.mute) {
                                      let n = I.get(e) ?? null;
                                      (null == n || t - n >= 15e3) && I.set(e, t);
                                  }
                                  let f = new Map(u.lastUndeafenActivityAtMs);
                                  if (!r.selfDeaf && !r.deaf) {
                                      let n = f.get(e) ?? null;
                                      (null == n || t - n >= 15e3) && f.set(e, t);
                                  }
                                  c.updateSignalsAndRescore(
                                      {
                                          voiceUsersWithJoinTimestampMs: E,
                                          lastVoiceJoinAtMs: _ ? t : u.lastVoiceJoinAtMs,
                                          streamUsersWithTimestampMs: A,
                                          videoUsersWithTimestampMs: h,
                                          lastUnmuteActivityAtMs: I,
                                          lastUndeafenActivityAtMs: f,
                                      },
                                      t,
                                  ),
                                      c.prunable && j.delete(a),
                                      (i = !0);
                              }
                          }
                      }),
                      i && Z(),
                      i
                  );
              }),
              VOICE_CHANNEL_SELECT: es(function (e) {
                  return Z(), !0;
              }),
              RTC_CONNECTION_STATE: es(function (e) {
                  return Z(), !0;
              }),
              CHANNEL_SELECT: es(function (e) {
                  let { channelId: t } = e;
                  if (null == t) return !1;
                  let n = d.A.getChannel(t);
                  return !(null == n || n.isPrivate()) && ((V = n.getGuildId?.() ?? null), Z(), !0);
              }),
              USER_GUILD_SETTINGS_CHANNEL_UPDATE: es(function (e) {
                  return er(e.channelId);
              }),
              USER_GUILD_SETTINGS_GUILD_UPDATE: es(function (e) {
                  let t = e.guildId,
                      n = !1;
                  for (let e of H.getSortedChannels())
                      e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                  for (let e of j.getSortedChannels())
                      e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                  return n;
              }),
              USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: es(function (e) {
                  let t = e.guildId,
                      n = !1;
                  for (let e of H.getSortedChannels())
                      e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                  for (let e of j.getSortedChannels())
                      e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                  return n;
              }),
              LOGOUT: es(function () {
                  let e = H.size > 0 || j.size > 0;
                  return H.clear(), j.clear(), (F = !1), (B = !1), (V = null), e;
              }),
          },
);
