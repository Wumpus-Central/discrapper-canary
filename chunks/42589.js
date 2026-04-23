n.d(t, { EB: () => I, G: () => r, Qb: () => g, aU: () => h, o5: () => d }), n(321073);
var i,
    r =
        (((i = {}).GuildText = "GUILD_TEXT"),
        (i.GuildVoice = "GUILD_VOICE"),
        (i.DirectMessage = "DIRECT_MESSAGE"),
        (i.GroupDM = "GROUP_DM"),
        i);
function s(e, t, n, i) {
    let r = 0;
    for (let [s, l] of e.entries()) {
        let e = i(s);
        if (e <= 0) continue;
        let a = e * u(l, t, n);
        a > r && (r = a);
    }
    return r;
}
class l {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    constructor(e, t) {
        (this.signals = e), (this.providers = t), (this.lastActivityAtMs = Date.now());
    }
    _computeMentionScore(e) {
        if (this.signals.mentionCount <= 0) return 0;
        let t = u(this.signals.lastDirectMentionAtMs, e, 6e5);
        this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
        let n = u(this.signals.lastRoleMentionAtMs, e, 6e5);
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
            let n = u(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
        }
        let n = s(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n), (t += 1.2 * n);
    }
    _computeActivityScore(e) {
        if (!this.signals.isTyping) return 0;
        let t = s(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
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
        let t = c(e, this.lastActivityAtMs);
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
class a {
    signals;
    providers;
    lastActivityAtMs;
    scoreInfo = { rawSignalsScore: {} };
    _textualScore;
    constructor(e, t) {
        (this.signals = e),
            (this.providers = t),
            (this._textualScore = new l(e, t)),
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
            o(t, 2)
        );
    }
    _computeVoiceUsersScore(e) {
        if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
        let t = s(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t), 1.25 * t;
    }
    _computeVoiceActivityScore(e) {
        let t = 0;
        null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, u(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
        let n = s(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
        return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
                n,
                s(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
        );
    }
    _computeStreamUsersScore(e) {
        let t = s(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
        let n = s(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n), 2 * (t + n);
    }
    computeScore(e) {
        let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            i = this._computeVoiceActivityScore(e),
            r = this._computeStreamUsersScore(e),
            s = c(e, this.lastActivityAtMs);
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
function u(e, t, n) {
    if (null == e) return 0;
    let i = t - e;
    return i <= 0 ? 1 : i >= n ? 0 : 1 - i / n;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e <= 0 ? 0 : e >= t ? t : e;
}
function d(e) {
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
function c(e, t) {
    let n = e - t;
    return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
}
function h(e, t) {
    let n = e.guildId;
    if (null == n) return 0;
    let i = 0;
    return (
        null != t.voiceGuildId && n === t.voiceGuildId && (i += 1),
        null != t.mostRecentGuildId && n === t.mostRecentGuildId && (i += 0.4),
        i
    );
}
function I(e, t) {
    return 0.8 * (null != e.guildId ? o(t.getNormalizedGuildAffinity(e.guildId)) : 0);
}
class g {
    candidate;
    signals;
    _activeNowScoreSource;
    _score = 0;
    constructor(e, t, n) {
        (this.candidate = e),
            (this.signals = t),
            "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind
                ? (this._activeNowScoreSource = new a(t, n))
                : (this._activeNowScoreSource = new l(t, n)),
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
