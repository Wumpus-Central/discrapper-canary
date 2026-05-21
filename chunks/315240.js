"use strict";
n.d(t, { A: () => eo, u: () => k }), n(321073);
var i,
    r,
    s = n(17928),
    a = n(228366),
    o = n(427358),
    l = n(95701),
    u = n(734057),
    c = n(776096),
    d = n(576705),
    _ = n(763827),
    f = n(222823),
    h = n(543465),
    p = n(287809),
    E = n(977997),
    m = n(927813),
    g = n(935208),
    A = n(914853),
    I = n(41984),
    T = n(956753),
    S = n(296027),
    N =
        (((i = {}).GuildText = "GUILD_TEXT"),
        (i.GuildVoice = "GUILD_VOICE"),
        (i.DirectMessage = "DIRECT_MESSAGE"),
        (i.GroupDM = "GROUP_DM"),
        i);
function y(e, t, n, i) {
    let r = 0;
    for (let [s, a] of e.entries()) {
        let e = i(s);
        if (e <= 0) continue;
        let o = e * O(a, t, n);
        o > r && (r = o);
    }
    return r;
}
class C {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    constructor(e, t) {
        (this.signals = e), (this.providers = t), (this.lastActivityAtMs = Date.now());
    }
    _computeMentionScore(e) {
        if (this.signals.mentionCount <= 0) return 0;
        let t = O(this.signals.lastDirectMentionAtMs, e, 6e5);
        this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
        let n = O(this.signals.lastRoleMentionAtMs, e, 6e5);
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
            let n = O(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
        }
        let n = y(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n), (t += 1.2 * n);
    }
    _computeActivityScore(e) {
        if (!this.signals.isTyping) return 0;
        let t = y(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
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
        let t = D(e, this.lastActivityAtMs);
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
class v {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    _textualScore;
    constructor(e, t) {
        (this.signals = e),
            (this.providers = t),
            (this._textualScore = new C(e, t)),
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
            R(t, 2)
        );
    }
    _computeVoiceUsersScore(e) {
        if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
        let t = y(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t), 1.25 * t;
    }
    _computeVoiceActivityScore(e) {
        let t = 0;
        null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, O(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
        let n = y(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
        return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
                n,
                y(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
        );
    }
    _computeStreamUsersScore(e) {
        let t = y(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
        let n = y(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n), 2 * (t + n);
    }
    computeScore(e) {
        let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            i = this._computeVoiceActivityScore(e),
            r = this._computeStreamUsersScore(e),
            s = D(e, this.lastActivityAtMs);
        return (
            (this.scoreInfo.penalty = s),
            (this.scoreInfo.voiceUsersScore = n),
            (this.scoreInfo.voiceActivityScore = i),
            (this.scoreInfo.streamUsersScore = r),
            (t + n + i + r) * (1 - s)
        );
    }
    pruneSignals(e) {
        this._textualScore.pruneSignals(e);
        let t = (t) => {
            if (0 === t.size) return t;
            let n = new Map();
            for (let [i, r] of t.entries()) e - r <= 12e4 && n.set(i, r);
            return n;
        };
        this.signals = {
            ...this.signals,
            lastUnmuteActivityAtMs: t(this.signals.lastUnmuteActivityAtMs),
            lastUndeafenActivityAtMs: t(this.signals.lastUndeafenActivityAtMs),
        };
    }
    updateSignals(e, t) {
        this._textualScore.updateSignals(e, t), (this.signals = e), (this.lastActivityAtMs = t);
    }
}
function O(e, t, n) {
    if (null == e) return 0;
    let i = t - e;
    return i <= 0 ? 1 : i >= n ? 0 : 1 - i / n;
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e <= 0 ? 0 : e >= t ? t : e;
}
function b(e) {
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
function D(e, t) {
    let n = e - t;
    return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
}
function L(e, t) {
    let n = e.guildId;
    if (null == n) return 0;
    let i = 0;
    return (
        null != t.voiceGuildId && n === t.voiceGuildId && (i += 1),
        null != t.mostRecentGuildId && n === t.mostRecentGuildId && (i += 0.4),
        i
    );
}
function w(e, t) {
    return 0.8 * (null != e.guildId ? R(t.getNormalizedGuildAffinity(e.guildId)) : 0);
}
class M {
    candidate;
    signals;
    _activeNowScoreSource;
    _score = 0;
    constructor(e, t, n) {
        (this.candidate = e),
            (this.signals = t),
            "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind
                ? (this._activeNowScoreSource = new v(t, n))
                : (this._activeNowScoreSource = new C(t, n)),
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
    x = n(240516),
    U = n(652215),
    k = (((r = {}).Text = "TEXT"), (r.Voice = "VOICE"), r);
class G {
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
    H = new G(100),
    j = new G(100);
function Y() {
    return S.default.isAnyOverlayRendering();
}
function W(e) {
    return (!!e || !B) && F !== e && ((F = e), !0);
}
function K() {
    let e = _.A.getChannelId();
    if (null == e) return null;
    let t = u.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function z(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: i, providers: r } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != V && e === V) return !0;
                let n = K();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > x.u.MINIMUM_GUILD_AFFINITY;
            })(n, r)
        ) || !!(null != i && r.getNormalizedUserAffinity(i) > x.u.MINIMUM_USER_AFFINITY)
    );
}
function $(e) {
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
                let n = o.A.getUserAffinity(t);
                if (n?.isFriend) return x.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let i = n?.communicationProbability ?? 0,
                    r = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
                return r <= 0 ? 0 : r >= 1 ? 1 : r;
            },
        }
    );
}
function q(e, t) {
    let n = L(e.candidate, { voiceGuildId: K(), mostRecentGuildId: V });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === N.DirectMessage || e.candidate.kind === N.GroupDM ? 1 : 1 + w(e.candidate, t))
    );
}
function Z() {
    let e = $({ includeVcProbability: !1 }),
        t = $({ includeVcProbability: !0 });
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
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    let [i] = P.A.isFavorite(A.x.MESSAGES, e);
    if (i || n.isPrivate?.()) return !1;
    let r = n.getGuildId?.() ?? null;
    return (
        !(null == r || h.Ay.isGuildOrCategoryOrChannelMuted(r, n.id)) &&
        !!d.A.can(U.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, l.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function ee(e, t, n) {
    if (!J(e, "TEXT")) return null;
    let i = u.A.getChannel(e);
    if (null == i) return null;
    let r = b({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == r || r.kind !== N.GuildText) return null;
    let s = H.getChannel(e);
    if (null != s) return s;
    let a = new M(r, t, n);
    return H.upsert(a), a;
}
function et(e, t, n) {
    if (!J(e, "VOICE")) return null;
    let i = u.A.getChannel(e);
    if (null == i) return null;
    let r = b({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == r || r.kind !== N.GuildVoice) return null;
    let s = j.getChannel(e);
    if (null != s) return s;
    let a = new M(r, t, n);
    return j.upsert(a), a;
}
let en = 30 * m.A.Millis.MINUTE;
function ei() {
    let e = Date.now(),
        t = e - en,
        n = c.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
        i = K();
    null == i || n.includes(i) || n.push(i);
    let r = $({ includeVcProbability: !1 }),
        s = $({ includeVcProbability: !0 });
    for (let i of n) {
        let n = u.A.getMutableGuildChannelsForGuild(i);
        for (let i in n) {
            let a = n[i];
            if (null != a) {
                if ((0, l.ke)(a.type)) {
                    let e = a.lastMessageId;
                    if (null == e) continue;
                    let n = g.default.extractTimestamp(e);
                    if (n < t || null != H.getChannel(i)) continue;
                    let s = X();
                    (s.lastMessageAtMs = n),
                        (s.unread = f.Ay.hasUnread(i)),
                        (s.mentionCount = f.Ay.getMentionCount(i)),
                        s.unread && (s.lastUnreadAtMs = n),
                        s.mentionCount > 0 && (s.lastDirectMentionAtMs = n),
                        ee(i, s, r);
                }
                if (a.isVocal()) {
                    if (null != j.getChannel(i)) continue;
                    let t = Object.entries(E.A.getVoiceStatesForChannel(i));
                    if (0 === t.length) continue;
                    let n = new Map();
                    for (let [i] of t) n.set(i, e);
                    et(i, { ...Q(), voiceUsersWithJoinTimestampMs: n, lastVoiceJoinAtMs: e }, s);
                }
            }
        }
    }
    Z();
}
function er(e) {
    let t = u.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !h.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let i = null != H.getChannel(e),
        r = null != j.getChannel(e);
    return i && H.delete(e), r && j.delete(e), i || r;
}
class es extends s.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(u.A, c.A, P.A, S.default, d.A, f.Ay, _.A, o.A, p.default, h.Ay, E.A);
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
        let n = $({ includeVcProbability: t.candidate.kind === N.GuildVoice });
        return q(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = H.getChannel(e) ?? j.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === N.GuildVoice ? "VOICE" : "TEXT",
            i = $({ includeVcProbability: t.candidate.kind === N.GuildVoice }),
            r = L(t.candidate, { voiceGuildId: K(), mostRecentGuildId: V }),
            s = t.candidate.kind === N.DirectMessage || t.candidate.kind === N.GroupDM,
            a = s ? 0 : w(t.candidate, i),
            o = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: o,
            contextBoost: r,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: o * (1 + r) * (s ? 1 : 1 + a),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
let ea = (e) => (0, T.v$)(e, "OverlayActiveNowStore"),
    eo = new es(
        a.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: ea(function (e) {
                      if (e.tab !== A.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != H.getChannel(t),
                              n = null != j.getChannel(t);
                          return e && H.delete(t), n && j.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: ea(function (e) {
                      return W(!0), ei(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: ea(function (e) {
                      let { overlayMethod: t } = e;
                      return t === I.Ue.OutOfProcess || t === I.Ue.OutOfProcessLimitedInteraction
                          ? (W(!0), Z(), !0)
                          : !Y() && W(!1);
                  }),
                  OVERLAY_CRASHED: ea(function (e) {
                      return !Y() && W(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: ea(function (e) {
                      return !e.locked && (W(!0), Z(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: ea(function () {
                      return (B = !0), W(!0), ei(), !0;
                  }),
                  MESSAGE_CREATE: ea(function (e) {
                      if (!F || e.optimistic) return !1;
                      let t = p.default.getCurrentUser()?.id ?? null,
                          n = e.message?.author?.id ?? null;
                      if (null == t || null == n || n === t) return !1;
                      let i = u.A.getChannel(e.channelId);
                      if (null == i || i.isPrivate() || !(0, l.ke)(i.type)) return !1;
                      let r = (function (e) {
                              let t = e.timestamp;
                              if (null == t) return Date.now();
                              let n = new Date(t).getTime();
                              return Number.isFinite(n) ? n : Date.now();
                          })(e.message),
                          s = $({ includeVcProbability: !1 }),
                          a = i.getGuildId?.() ?? null;
                      if (
                          !z({
                              isAlreadyTracked: null != H.getChannel(e.channelId),
                              guildId: a,
                              updatingUserId: n,
                              providers: s,
                          })
                      )
                          return !1;
                      let o = ee(e.channelId, X(), s);
                      if (null == o) return !1;
                      let c = (e.message?.mentions ?? []).some((e) => e?.id === t),
                          d = e.message?.mention_roles,
                          _ = Array.isArray(d) && d.length > 0,
                          f = o.prepareForUpdate(r),
                          h = new Map(f.recentMessageAuthorIds);
                      h.set(n, r);
                      let E = {
                          lastMessageAtMs: r,
                          unread: !0,
                          lastUnreadAtMs: r,
                          recentMessageAuthorId: n,
                          recentMessageAuthorIds: h,
                      };
                      return (
                          (c || _) &&
                              ((E.mentionCount = Math.max(f.mentionCount, +!!c + +!!_)),
                              c && (E.lastDirectMentionAtMs = r),
                              _ && (E.lastRoleMentionAtMs = r)),
                          o.updateSignalsAndRescore(E, r),
                          o.prunable && H.delete(e.channelId),
                          Z(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: ea(function (e) {
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
                  TYPING_START: ea(function (e) {
                      if (!F) return !1;
                      let t = p.default.getCurrentUser()?.id ?? null;
                      if (null == t || e.userId === t) return !1;
                      let n = u.A.getChannel(e.channelId);
                      if (null == n || n.isPrivate() || !(0, l.ke)(n.type)) return !1;
                      let i = Date.now(),
                          r = $({ includeVcProbability: !1 }),
                          s = n.getGuildId?.() ?? null;
                      if (
                          !z({
                              isAlreadyTracked: null != H.getChannel(e.channelId),
                              guildId: s,
                              updatingUserId: e.userId,
                              providers: r,
                          })
                      )
                          return !1;
                      let a = ee(e.channelId, X(), r);
                      if (null == a) return !1;
                      let o = new Map(a.prepareForUpdate(i).typingUserIdsWithTimestampMs);
                      o.set(e.userId, i);
                      let c = Array.from(o.keys());
                      return (
                          a.updateSignalsAndRescore(
                              { typingUserIdsWithTimestampMs: o, typingUserIds: c, isTyping: c.length > 0 },
                              i,
                          ),
                          a.prunable && H.delete(e.channelId),
                          Z(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: ea(function (e) {
                      if (!F) return !1;
                      let t = Date.now(),
                          n = $({ includeVcProbability: !0 }),
                          i = !1;
                      return (
                          j.applyBatch(() => {
                              for (let r of e.voiceStates) {
                                  let e = r.userId,
                                      s = r.channelId ?? null,
                                      a = r.oldChannelId ?? null,
                                      o = (n) => {
                                          let r = j.getChannel(n);
                                          if (null == r) return;
                                          let s = r.signals,
                                              a = new Map(s.voiceUsersWithJoinTimestampMs);
                                          a.delete(e);
                                          let o = new Map(s.streamUsersWithTimestampMs);
                                          o.delete(e);
                                          let l = new Map(s.videoUsersWithTimestampMs);
                                          l.delete(e);
                                          let u = new Map(s.lastUnmuteActivityAtMs);
                                          u.delete(e);
                                          let c = new Map(s.lastUndeafenActivityAtMs);
                                          c.delete(e),
                                              r.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: a,
                                                      streamUsersWithTimestampMs: o,
                                                      videoUsersWithTimestampMs: l,
                                                      lastUnmuteActivityAtMs: u,
                                                      lastUndeafenActivityAtMs: c,
                                                  },
                                                  t,
                                              ),
                                              r.prunable && j.delete(n),
                                              (i = !0);
                                      };
                                  if ((null != a && a !== s && o(a), null != s)) {
                                      let o = u.A.getChannel(s),
                                          l = o?.getGuildId?.() ?? null;
                                      if (
                                          !z({
                                              isAlreadyTracked: null != j.getChannel(s),
                                              guildId: l,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let c = et(s, Q(), n);
                                      if (null == c) continue;
                                      let d = c.prepareForUpdate(t),
                                          _ = null == a || a !== s,
                                          f = new Map(d.voiceUsersWithJoinTimestampMs);
                                      _ && !f.has(e) && f.set(e, t);
                                      let h = new Map(d.streamUsersWithTimestampMs);
                                      r.selfStream ? h.has(e) || h.set(e, t) : h.delete(e);
                                      let p = new Map(d.videoUsersWithTimestampMs);
                                      r.selfVideo ? p.has(e) || p.set(e, t) : p.delete(e);
                                      let E = new Map(d.lastUnmuteActivityAtMs);
                                      if (!r.selfMute && !r.mute) {
                                          let n = E.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && E.set(e, t);
                                      }
                                      let m = new Map(d.lastUndeafenActivityAtMs);
                                      if (!r.selfDeaf && !r.deaf) {
                                          let n = m.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && m.set(e, t);
                                      }
                                      c.updateSignalsAndRescore(
                                          {
                                              voiceUsersWithJoinTimestampMs: f,
                                              lastVoiceJoinAtMs: _ ? t : d.lastVoiceJoinAtMs,
                                              streamUsersWithTimestampMs: h,
                                              videoUsersWithTimestampMs: p,
                                              lastUnmuteActivityAtMs: E,
                                              lastUndeafenActivityAtMs: m,
                                          },
                                          t,
                                      ),
                                          c.prunable && j.delete(s),
                                          (i = !0);
                                  }
                              }
                          }),
                          i && Z(),
                          i
                      );
                  }),
                  VOICE_CHANNEL_SELECT: ea(function (e) {
                      return Z(), !0;
                  }),
                  RTC_CONNECTION_STATE: ea(function (e) {
                      return Z(), !0;
                  }),
                  CHANNEL_SELECT: ea(function (e) {
                      let { channelId: t } = e;
                      if (null == t) return !1;
                      let n = u.A.getChannel(t);
                      return !(null == n || n.isPrivate()) && ((V = n.getGuildId?.() ?? null), Z(), !0);
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: ea(function (e) {
                      return er(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: ea(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of H.getSortedChannels())
                          e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                      for (let e of j.getSortedChannels())
                          e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ea(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of H.getSortedChannels())
                          e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                      for (let e of j.getSortedChannels())
                          e.candidate.guildId === t && (n = er(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: ea(function () {
                      let e = H.size > 0 || j.size > 0;
                      return H.clear(), j.clear(), (F = !1), (B = !1), (V = null), e;
                  }),
              },
    );
