n.d(t, { A: () => ea, u: () => V }), n(321073);
var i,
    s,
    r = n(17928),
    l = n(228366),
    a = n(427358),
    u = n(95701),
    o = n(734057),
    d = n(776096),
    c = n(576705),
    h = n(763827),
    I = n(222823),
    g = n(543465),
    f = n(287809),
    A = n(977997),
    E = n(927813),
    S = n(935208),
    _ = n(914853),
    M = n(41984),
    p = n(956753),
    N = n(833551),
    T =
        (((i = {}).GuildText = "GUILD_TEXT"),
        (i.GuildVoice = "GUILD_VOICE"),
        (i.DirectMessage = "DIRECT_MESSAGE"),
        (i.GroupDM = "GROUP_DM"),
        i);
function m(e, t, n, i) {
    let s = 0;
    for (let [r, l] of e.entries()) {
        let e = i(r);
        if (e <= 0) continue;
        let a = e * D(l, t, n);
        a > s && (s = a);
    }
    return s;
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
        let t = D(this.signals.lastDirectMentionAtMs, e, 6e5);
        this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
        let n = D(this.signals.lastRoleMentionAtMs, e, 6e5);
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
            let n = D(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
        }
        let n = m(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n), (t += 1.2 * n);
    }
    _computeActivityScore(e) {
        if (!this.signals.isTyping) return 0;
        let t = m(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
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
        let t = R(e, this.lastActivityAtMs);
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
            U(t, 2)
        );
    }
    _computeVoiceUsersScore(e) {
        if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
        let t = m(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t), 1.25 * t;
    }
    _computeVoiceActivityScore(e) {
        let t = 0;
        null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, D(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
        let n = m(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
        return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
                n,
                m(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
        );
    }
    _computeStreamUsersScore(e) {
        let t = m(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
        let n = m(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n), 2 * (t + n);
    }
    computeScore(e) {
        let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            i = this._computeVoiceActivityScore(e),
            s = this._computeStreamUsersScore(e),
            r = R(e, this.lastActivityAtMs);
        return (
            (this.scoreInfo.penalty = r),
            (this.scoreInfo.voiceUsersScore = n),
            (this.scoreInfo.voiceActivityScore = i),
            (this.scoreInfo.streamUsersScore = s),
            (t + n + i + s) * (1 - r)
        );
    }
    pruneSignals(e) {
        this._textualScore.pruneSignals(e);
        let t = (t) => {
            if (0 === t.size) return t;
            let n = new Map();
            for (let [i, s] of t.entries()) e - s <= 12e4 && n.set(i, s);
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
function D(e, t, n) {
    if (null == e) return 0;
    let i = t - e;
    return i <= 0 ? 1 : i >= n ? 0 : 1 - i / n;
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e <= 0 ? 0 : e >= t ? t : e;
}
function O(e) {
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
function R(e, t) {
    let n = e - t;
    return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
}
function v(e, t) {
    let n = e.guildId;
    if (null == n) return 0;
    let i = 0;
    return (
        null != t.voiceGuildId && n === t.voiceGuildId && (i += 1),
        null != t.mostRecentGuildId && n === t.mostRecentGuildId && (i += 0.4),
        i
    );
}
function G(e, t) {
    return 0.8 * (null != e.guildId ? U(t.getNormalizedGuildAffinity(e.guildId)) : 0);
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
var L = n(406595),
    F = n(240516),
    P = n(652215),
    V = (((s = {}).Text = "TEXT"), (s.Voice = "VOICE"), s);
class x {
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
            let s = e(i);
            s > 0 && t.push({ channelId: n, score: s });
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
let b = !1,
    k = null,
    Y = !1,
    H = new x(100),
    W = new x(100);
function $() {
    return N.default.isAnyOverlayRendering();
}
function z(e) {
    return (!!e || !Y) && b !== e && ((b = e), !0);
}
function B() {
    let e = h.A.getChannelId();
    if (null == e) return null;
    let t = o.A.getChannel(e);
    return t?.getGuildId?.() ?? null;
}
function J(e) {
    let { isAlreadyTracked: t, guildId: n, updatingUserId: i, providers: s } = e;
    return (
        !!(
            t ||
            (function (e, t) {
                if (null == e) return !1;
                if (null != k && e === k) return !0;
                let n = B();
                return (null != n && e === n) || t.getNormalizedGuildAffinity(e) > F.u.MINIMUM_GUILD_AFFINITY;
            })(n, s)
        ) || !!(null != i && s.getNormalizedUserAffinity(i) > F.u.MINIMUM_USER_AFFINITY)
    );
}
function K(e) {
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
                if (n?.isFriend) return F.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
                let i = n?.communicationProbability ?? 0,
                    s = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
                return s <= 0 ? 0 : s >= 1 ? 1 : s;
            },
        }
    );
}
function X(e, t) {
    let n = v(e.candidate, { voiceGuildId: B(), mostRecentGuildId: k });
    return (
        e.score *
        (1 + n) *
        (e.candidate.kind === T.DirectMessage || e.candidate.kind === T.GroupDM ? 1 : 1 + G(e.candidate, t))
    );
}
function j() {
    let e = K({ includeVcProbability: !1 }),
        t = K({ includeVcProbability: !0 });
    H.rebuildSortedIndexIfDirty((t) => X(t, e)), W.rebuildSortedIndexIfDirty((e) => X(e, t));
}
function Q() {
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
function Z() {
    return {
        ...Q(),
        voiceUsersWithJoinTimestampMs: new Map(),
        lastVoiceJoinAtMs: null,
        lastUnmuteActivityAtMs: new Map(),
        lastUndeafenActivityAtMs: new Map(),
        streamUsersWithTimestampMs: new Map(),
        videoUsersWithTimestampMs: new Map(),
    };
}
function q(e, t) {
    let n = o.A.getChannel(e);
    if (null == n) return !1;
    let [i] = L.A.isFavorite(_.x.MESSAGES, e);
    if (i || n.isPrivate?.()) return !1;
    let s = n.getGuildId?.() ?? null;
    return (
        !(null == s || g.Ay.isGuildOrCategoryOrChannelMuted(s, n.id)) &&
        !!c.A.can(P.xBc.READ_MESSAGE_HISTORY, n) &&
        ("TEXT" === t ? (0, u.ke)(n.type) : n.isVocal?.() === !0)
    );
}
function ee(e, t, n) {
    if (!q(e, "TEXT")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let s = O({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == s || s.kind !== T.GuildText) return null;
    let r = H.getChannel(e);
    if (null != r) return r;
    let l = new w(s, t, n);
    return H.upsert(l), l;
}
function et(e, t, n) {
    if (!q(e, "VOICE")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let s = O({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1,
    });
    if (null == s || s.kind !== T.GuildVoice) return null;
    let r = W.getChannel(e);
    if (null != r) return r;
    let l = new w(s, t, n);
    return W.upsert(l), l;
}
let en = 30 * E.A.Millis.MINUTE;
function ei() {
    let e = Date.now(),
        t = e - en,
        n = d.A.affinities
            .filter((e) => (e.score ?? 0) > 0)
            .slice(0, 3)
            .map((e) => e.guildId),
        i = B();
    null == i || n.includes(i) || n.push(i);
    let s = K({ includeVcProbability: !1 }),
        r = K({ includeVcProbability: !0 });
    for (let i of n) {
        let n = o.A.getMutableGuildChannelsForGuild(i);
        for (let i in n) {
            let l = n[i];
            if (null != l) {
                if ((0, u.ke)(l.type)) {
                    let e = l.lastMessageId;
                    if (null == e) continue;
                    let n = S.default.extractTimestamp(e);
                    if (n < t || null != H.getChannel(i)) continue;
                    let r = Q();
                    (r.lastMessageAtMs = n),
                        (r.unread = I.Ay.hasUnread(i)),
                        (r.mentionCount = I.Ay.getMentionCount(i)),
                        r.unread && (r.lastUnreadAtMs = n),
                        r.mentionCount > 0 && (r.lastDirectMentionAtMs = n),
                        ee(i, r, s);
                }
                if (l.isVocal()) {
                    if (null != W.getChannel(i)) continue;
                    let t = Object.entries(A.A.getVoiceStatesForChannel(i));
                    if (0 === t.length) continue;
                    let n = new Map();
                    for (let [i] of t) n.set(i, e);
                    et(i, { ...Z(), voiceUsersWithJoinTimestampMs: n, lastVoiceJoinAtMs: e }, r);
                }
            }
        }
    }
    j();
}
function es(e) {
    let t = o.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !g.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let i = null != H.getChannel(e),
        s = null != W.getChannel(e);
    return i && H.delete(e), s && W.delete(e), i || s;
}
class er extends r.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(o.A, d.A, L.A, N.default, c.A, I.Ay, h.A, a.A, f.default, g.Ay, A.A);
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? H.getChannel(e) : W.getChannel(e);
    }
    getActiveNowChannels(e) {
        let { kind: t } = e;
        return "VOICE" === t ? W.getSortedChannels() : H.getSortedChannels();
    }
    getActiveNowChannelIds(e) {
        let { kind: t } = e;
        return "VOICE" === t ? W.getSortedChannelIds() : H.getSortedChannelIds();
    }
    hasActiveNowChannelId(e) {
        let { kind: t, channelId: n } = e;
        return "VOICE" === t ? W.hasSortedChannelId(n) : H.hasSortedChannelId(n);
    }
    getScoreForChannelId(e) {
        let t = H.getChannel(e) ?? W.getChannel(e);
        if (null == t) return null;
        let n = K({ includeVcProbability: t.candidate.kind === T.GuildVoice });
        return X(t, n);
    }
    getScoreBreakdownForChannelId(e) {
        let t = H.getChannel(e) ?? W.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === T.GuildVoice ? "VOICE" : "TEXT",
            i = K({ includeVcProbability: t.candidate.kind === T.GuildVoice }),
            s = v(t.candidate, { voiceGuildId: B(), mostRecentGuildId: k }),
            r = t.candidate.kind === T.DirectMessage || t.candidate.kind === T.GroupDM,
            l = r ? 0 : G(t.candidate, i),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: s,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + s) * (r ? 1 : 1 + l),
            scoreInfo: t.lastScoreInfo,
        };
    }
}
let el = (e) => (0, p.v$)(e, "OverlayActiveNowStore"),
    ea = new er(
        l.h,
        __OVERLAY__
            ? {}
            : {
                  OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: el(function (e) {
                      if (e.tab !== _.x.MESSAGES) return !1;
                      let t = e.targetId;
                      if (e.isFavorite) {
                          let e = null != H.getChannel(t),
                              n = null != W.getChannel(t);
                          return e && H.delete(t), n && W.delete(t), e || n;
                      }
                      return !1;
                  }),
                  OVERLAY_MOUNTED: el(function (e) {
                      return z(!0), ei(), !0;
                  }),
                  OVERLAY_UPDATE_OVERLAY_METHOD: el(function (e) {
                      let { overlayMethod: t } = e;
                      return t === M.Ue.OutOfProcess || t === M.Ue.OutOfProcessLimitedInteraction
                          ? (z(!0), j(), !0)
                          : !$() && z(!1);
                  }),
                  OVERLAY_CRASHED: el(function (e) {
                      return !$() && z(!1);
                  }),
                  OVERLAY_SET_INPUT_LOCKED: el(function (e) {
                      return !e.locked && (z(!0), j(), !0);
                  }),
                  FRIENDS_LIST_POPOUT_MOUNTED: el(function () {
                      return (Y = !0), z(!0), ei(), !0;
                  }),
                  MESSAGE_CREATE: el(function (e) {
                      if (!b || e.optimistic) return !1;
                      let t = f.default.getCurrentUser()?.id ?? null,
                          n = e.message?.author?.id ?? null;
                      if (null == t || null == n || n === t) return !1;
                      let i = o.A.getChannel(e.channelId);
                      if (null == i || i.isPrivate() || !(0, u.ke)(i.type)) return !1;
                      let s = (function (e) {
                              let t = e.timestamp;
                              if (null == t) return Date.now();
                              let n = new Date(t).getTime();
                              return Number.isFinite(n) ? n : Date.now();
                          })(e.message),
                          r = K({ includeVcProbability: !1 }),
                          l = i.getGuildId?.() ?? null;
                      if (
                          !J({
                              isAlreadyTracked: null != H.getChannel(e.channelId),
                              guildId: l,
                              updatingUserId: n,
                              providers: r,
                          })
                      )
                          return !1;
                      let a = ee(e.channelId, Q(), r);
                      if (null == a) return !1;
                      let d = (e.message?.mentions ?? []).some((e) => e?.id === t),
                          c = e.message?.mention_roles,
                          h = Array.isArray(c) && c.length > 0,
                          I = a.prepareForUpdate(s),
                          g = new Map(I.recentMessageAuthorIds);
                      g.set(n, s);
                      let A = {
                          lastMessageAtMs: s,
                          unread: !0,
                          lastUnreadAtMs: s,
                          recentMessageAuthorId: n,
                          recentMessageAuthorIds: g,
                      };
                      return (
                          (d || h) &&
                              ((A.mentionCount = Math.max(I.mentionCount, +!!d + +!!h)),
                              d && (A.lastDirectMentionAtMs = s),
                              h && (A.lastRoleMentionAtMs = s)),
                          a.updateSignalsAndRescore(A, s),
                          a.prunable && H.delete(e.channelId),
                          j(),
                          !0
                      );
                  }),
                  MESSAGE_ACK: el(function (e) {
                      if (!b) return !1;
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
                          j(),
                          !0
                      );
                  }),
                  TYPING_START: el(function (e) {
                      if (!b) return !1;
                      let t = f.default.getCurrentUser()?.id ?? null;
                      if (null == t || e.userId === t) return !1;
                      let n = o.A.getChannel(e.channelId);
                      if (null == n || n.isPrivate() || !(0, u.ke)(n.type)) return !1;
                      let i = Date.now(),
                          s = K({ includeVcProbability: !1 }),
                          r = n.getGuildId?.() ?? null;
                      if (
                          !J({
                              isAlreadyTracked: null != H.getChannel(e.channelId),
                              guildId: r,
                              updatingUserId: e.userId,
                              providers: s,
                          })
                      )
                          return !1;
                      let l = ee(e.channelId, Q(), s);
                      if (null == l) return !1;
                      let a = new Map(l.prepareForUpdate(i).typingUserIdsWithTimestampMs);
                      a.set(e.userId, i);
                      let d = Array.from(a.keys());
                      return (
                          l.updateSignalsAndRescore(
                              { typingUserIdsWithTimestampMs: a, typingUserIds: d, isTyping: d.length > 0 },
                              i,
                          ),
                          l.prunable && H.delete(e.channelId),
                          j(),
                          !0
                      );
                  }),
                  VOICE_STATE_UPDATES: el(function (e) {
                      if (!b) return !1;
                      let t = Date.now(),
                          n = K({ includeVcProbability: !0 }),
                          i = !1;
                      return (
                          W.applyBatch(() => {
                              for (let s of e.voiceStates) {
                                  let e = s.userId,
                                      r = s.channelId ?? null,
                                      l = s.oldChannelId ?? null,
                                      a = (n) => {
                                          let s = W.getChannel(n);
                                          if (null == s) return;
                                          let r = s.signals,
                                              l = new Map(r.voiceUsersWithJoinTimestampMs);
                                          l.delete(e);
                                          let a = new Map(r.streamUsersWithTimestampMs);
                                          a.delete(e);
                                          let u = new Map(r.videoUsersWithTimestampMs);
                                          u.delete(e);
                                          let o = new Map(r.lastUnmuteActivityAtMs);
                                          o.delete(e);
                                          let d = new Map(r.lastUndeafenActivityAtMs);
                                          d.delete(e),
                                              s.updateSignalsAndRescore(
                                                  {
                                                      voiceUsersWithJoinTimestampMs: l,
                                                      streamUsersWithTimestampMs: a,
                                                      videoUsersWithTimestampMs: u,
                                                      lastUnmuteActivityAtMs: o,
                                                      lastUndeafenActivityAtMs: d,
                                                  },
                                                  t,
                                              ),
                                              s.prunable && W.delete(n),
                                              (i = !0);
                                      };
                                  if ((null != l && l !== r && a(l), null != r)) {
                                      let a = o.A.getChannel(r),
                                          u = a?.getGuildId?.() ?? null;
                                      if (
                                          !J({
                                              isAlreadyTracked: null != W.getChannel(r),
                                              guildId: u,
                                              updatingUserId: e,
                                              providers: n,
                                          })
                                      )
                                          continue;
                                      let d = et(r, Z(), n);
                                      if (null == d) continue;
                                      let c = d.prepareForUpdate(t),
                                          h = null == l || l !== r,
                                          I = new Map(c.voiceUsersWithJoinTimestampMs);
                                      h && !I.has(e) && I.set(e, t);
                                      let g = new Map(c.streamUsersWithTimestampMs);
                                      s.selfStream ? g.has(e) || g.set(e, t) : g.delete(e);
                                      let f = new Map(c.videoUsersWithTimestampMs);
                                      s.selfVideo ? f.has(e) || f.set(e, t) : f.delete(e);
                                      let A = new Map(c.lastUnmuteActivityAtMs);
                                      if (!s.selfMute && !s.mute) {
                                          let n = A.get(e) ?? null;
                                          (null == n || t - n >= 15e3) && A.set(e, t);
                                      }
                                      let E = new Map(c.lastUndeafenActivityAtMs);
                                      if (!s.selfDeaf && !s.deaf) {
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
                                          d.prunable && W.delete(r),
                                          (i = !0);
                                  }
                              }
                          }),
                          i && j(),
                          i
                      );
                  }),
                  VOICE_CHANNEL_SELECT: el(function (e) {
                      return j(), !0;
                  }),
                  RTC_CONNECTION_STATE: el(function (e) {
                      return j(), !0;
                  }),
                  CHANNEL_SELECT: el(function (e) {
                      let { channelId: t } = e;
                      if (null == t) return !1;
                      let n = o.A.getChannel(t);
                      return !(null == n || n.isPrivate()) && ((k = n.getGuildId?.() ?? null), j(), !0);
                  }),
                  USER_GUILD_SETTINGS_CHANNEL_UPDATE: el(function (e) {
                      return es(e.channelId);
                  }),
                  USER_GUILD_SETTINGS_GUILD_UPDATE: el(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of H.getSortedChannels())
                          e.candidate.guildId === t && (n = es(e.candidate.channelId) || n);
                      for (let e of W.getSortedChannels())
                          e.candidate.guildId === t && (n = es(e.candidate.channelId) || n);
                      return n;
                  }),
                  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: el(function (e) {
                      let t = e.guildId,
                          n = !1;
                      for (let e of H.getSortedChannels())
                          e.candidate.guildId === t && (n = es(e.candidate.channelId) || n);
                      for (let e of W.getSortedChannels())
                          e.candidate.guildId === t && (n = es(e.candidate.channelId) || n);
                      return n;
                  }),
                  LOGOUT: el(function () {
                      let e = H.size > 0 || W.size > 0;
                      return H.clear(), W.clear(), (b = !1), (Y = !1), (k = null), e;
                  }),
              },
    );
