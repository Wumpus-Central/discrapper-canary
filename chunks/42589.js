function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n.d(t, {
    EB: () => A,
    G: () => a,
    Qb: () => S,
    aU: () => I,
    o5: () => f,
}),
    n(896048),
    n(321073);
var s,
    a =
        (((s = {}).GuildText = "GUILD_TEXT"),
        (s.GuildVoice = "GUILD_VOICE"),
        (s.DirectMessage = "DIRECT_MESSAGE"),
        (s.GroupDM = "GROUP_DM"),
        s);

function u(e, t, n, r) {
    let i = 0;
    for (let [l, s] of e.entries()) {
        let e = r(l);
        if (e <= 0) continue;
        let a = e * c(s, t, n);
        a > i && (i = a);
    }
    return i;
}
class o {
    _computeMentionScore(e) {
        if (this.signals.mentionCount <= 0) return 0;
        let t = c(this.signals.lastDirectMentionAtMs, e, 6e5);
        this.scoreInfo.rawSignalsScore.lastDirectMentionAtMs = t;
        let n = c(this.signals.lastRoleMentionAtMs, e, 6e5);
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
            let n = c(this.signals.lastUnreadAtMs, e, 18e5);
            (t += 0.8 * n), (this.scoreInfo.rawSignalsScore.lastUnreadAtMs = n);
        }
        let n = u(this.signals.recentMessageAuthorIds, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.recentMessageAuthorIds = n), (t += 1.2 * n);
    }
    _computeActivityScore(e) {
        if (!this.signals.isTyping) return 0;
        let t = u(this.signals.typingUserIdsWithTimestampMs, e, 15e3, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.typingUserIdsWithTimestampMs = t), 1.5 * t;
    }
    getScoreWithoutPenalty(e) {
        let t = this._computeActivityScore(e),
            n = this._computeMentionScore(e),
            r = this._computeMessageScore(e);
        return (
            (this.scoreInfo.activityScore = t),
            (this.scoreInfo.mentionScore = n),
            (this.scoreInfo.messageScore = r),
            t + n + r
        );
    }
    computeScore(e) {
        let t = g(e, this.lastActivityAtMs);
        return (this.scoreInfo.penalty = t), this.getScoreWithoutPenalty(e) * (1 - t);
    }
    pruneSignals(e) {
        if (this.signals.typingUserIdsWithTimestampMs.size > 0) {
            let t = new Map();
            for (let [n, r] of this.signals.typingUserIdsWithTimestampMs.entries()) e - r <= 15e3 && t.set(n, r);
            let n = Array.from(t.keys());
            this.signals = l(i({}, this.signals), {
                typingUserIdsWithTimestampMs: t,
                typingUserIds: n,
                isTyping: n.length > 0,
            });
        }
        if (this.signals.recentMessageAuthorIds.size > 0) {
            let t = new Map();
            for (let [n, r] of this.signals.recentMessageAuthorIds.entries()) e - r <= 6e5 && t.set(n, r);
            let n =
                null != this.signals.recentMessageAuthorId && t.has(this.signals.recentMessageAuthorId)
                    ? this.signals.recentMessageAuthorId
                    : null;
            this.signals = l(i({}, this.signals), {
                recentMessageAuthorIds: t,
                recentMessageAuthorId: n,
            });
        }
    }
    updateSignals(e, t) {
        (this.lastActivityAtMs = t), (this.signals = e);
    }
    constructor(e, t) {
        r(this, "signals", void 0),
            r(this, "providers", void 0),
            r(this, "lastActivityAtMs", void 0),
            r(this, "scoreInfo", {
                rawSignalsScore: {},
            }),
            (this.signals = e),
            (this.providers = t),
            (this.lastActivityAtMs = Date.now());
    }
}
class d {
    _computeTextualScore(e) {
        let t = this._textualScore.getScoreWithoutPenalty(e);
        return (
            (this.scoreInfo = l(i({}, this.scoreInfo, this._textualScore.scoreInfo), {
                rawSignalsScore: i({}, this.scoreInfo.rawSignalsScore, this._textualScore.scoreInfo.rawSignalsScore),
            })),
            h(t, 2)
        );
    }
    _computeVoiceUsersScore(e) {
        if (0 === this.signals.voiceUsersWithJoinTimestampMs.size) return 0;
        let t = u(this.signals.voiceUsersWithJoinTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.voiceUsersWithJoinTimestampMs = t), 1.25 * t;
    }
    _computeVoiceActivityScore(e) {
        let t = 0;
        null != this.signals.lastVoiceJoinAtMs && (t = Math.max(t, c(this.signals.lastVoiceJoinAtMs, e, 12e4))),
            (this.scoreInfo.rawSignalsScore.lastVoiceJoinAtMs = t);
        let n = u(this.signals.lastUnmuteActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity);
        return (
            (this.scoreInfo.rawSignalsScore.lastUnmuteActivityAtMs = n),
            (n = Math.max(
                n,
                u(this.signals.lastUndeafenActivityAtMs, e, 12e4, this.providers.getNormalizedUserAffinity),
            )),
            (this.scoreInfo.rawSignalsScore.lastUndeafenActivityAtMs = n),
            1.25 * (n + t)
        );
    }
    _computeStreamUsersScore(e) {
        let t = u(this.signals.streamUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        this.scoreInfo.rawSignalsScore.streamUsersWithTimestampMs = t;
        let n = u(this.signals.videoUsersWithTimestampMs, e, 6e5, this.providers.getNormalizedUserAffinity);
        return (this.scoreInfo.rawSignalsScore.videoUsersWithTimestampMs = n), 2 * (t + n);
    }
    computeScore(e) {
        let t = this._computeTextualScore(e),
            n = this._computeVoiceUsersScore(e),
            r = this._computeVoiceActivityScore(e),
            i = this._computeStreamUsersScore(e),
            l = g(e, this.lastActivityAtMs);
        return (
            (this.scoreInfo.penalty = l),
            (this.scoreInfo.voiceUsersScore = n),
            (this.scoreInfo.voiceActivityScore = r),
            (this.scoreInfo.streamUsersScore = i),
            (t + n + r + i) * (1 - l)
        );
    }
    pruneSignals(e) {
        this._textualScore.pruneSignals(e);
        let t = (t) => {
            if (0 === t.size) return t;
            let n = new Map();
            for (let [r, i] of t.entries()) e - i <= 12e4 && n.set(r, i);
            return n;
        };
        this.signals = l(i({}, this.signals), {
            lastUnmuteActivityAtMs: t(this.signals.lastUnmuteActivityAtMs),
            lastUndeafenActivityAtMs: t(this.signals.lastUndeafenActivityAtMs),
        });
    }
    updateSignals(e, t) {
        this._textualScore.updateSignals(e, t), (this.signals = e), (this.lastActivityAtMs = t);
    }
    constructor(e, t) {
        r(this, "signals", void 0),
            r(this, "providers", void 0),
            r(this, "lastActivityAtMs", void 0),
            r(this, "scoreInfo", {
                rawSignalsScore: {},
            }),
            r(this, "_textualScore", void 0),
            (this.signals = e),
            (this.providers = t),
            (this._textualScore = new o(e, t)),
            (this.lastActivityAtMs = Date.now());
    }
}

function c(e, t, n) {
    if (null == e) return 0;
    let r = t - e;
    return r <= 0 ? 1 : r >= n ? 0 : 1 - r / n;
}

function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e <= 0 ? 0 : e >= t ? t : e;
}

function f(e) {
    var t, n, r, i, l, s, a, u, o;
    let d = null != (t = null == (n = e.getGuildId) ? void 0 : n.call(e)) ? t : null;
    if (null == (r = e.isDM) ? void 0 : r.call(e)) {
        let t = null != (s = null == (a = e.getRecipientId) ? void 0 : a.call(e)) ? s : null;
        return {
            channelId: e.id,
            kind: "DIRECT_MESSAGE",
            guildId: null,
            recipientIds: null != t ? [t] : [],
        };
    }
    return (null == (i = e.isGroupDM) ? void 0 : i.call(e)) || (null == (l = e.isMultiUserDM) ? void 0 : l.call(e))
        ? {
              channelId: e.id,
              kind: "GROUP_DM",
              guildId: null,
              recipientIds: null != (u = e.recipients) ? u : [],
          }
        : null != d
          ? {
                channelId: e.id,
                kind: (null == (o = e.isVocal) ? void 0 : o.call(e)) ? "GUILD_VOICE" : "GUILD_TEXT",
                guildId: d,
                recipientIds: [],
            }
          : null;
}

function g(e, t) {
    let n = e - t;
    return n <= 6e5 ? 0 : n >= 18e5 ? 1 : (n - 6e5) / 12e5;
}

function I(e, t) {
    let n = e.guildId;
    if (null == n) return 0;
    let r = 0;
    return (
        null != t.voiceGuildId && n === t.voiceGuildId && (r += 1),
        null != t.mostRecentGuildId && n === t.mostRecentGuildId && (r += 0.4),
        r
    );
}

function A(e, t) {
    return 0.8 * (null != e.guildId ? h(t.getNormalizedGuildAffinity(e.guildId)) : 0);
}
class S {
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
            (this.signals = i({}, this.signals, e)),
            this.candidate.kind,
            this._activeNowScoreSource.updateSignals(this.signals, t),
            this.recomputeScore(t)
        );
    }
    constructor(e, t, n) {
        r(this, "candidate", void 0),
            r(this, "signals", void 0),
            r(this, "_activeNowScoreSource", void 0),
            r(this, "_score", 0),
            (this.candidate = e),
            (this.signals = t),
            "GUILD_VOICE" === e.kind || "GROUP_DM" === e.kind
                ? (this._activeNowScoreSource = new d(t, n))
                : (this._activeNowScoreSource = new o(t, n)),
            this.recomputeScore(Date.now());
    }
}
