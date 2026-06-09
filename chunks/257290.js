"use strict";
n.d(t, { A: () => O, i: () => R }), n(321073);
var i = n(459838),
    r = n(451988),
    s = n(439372),
    a = n(77729),
    o = n(608960),
    l = n(952818),
    u = n(209932),
    c = n(495544),
    d = n(309010),
    _ = n(274372);
class h {
    timeline = [];
    timelineLength;
    constructor(e = 3e5) {
        this.timelineLength = e;
    }
    clear() {
        this.timeline.length = 0;
    }
    updateLength(e) {
        (this.timelineLength = e), this.cull();
    }
    add(e) {
        if (0 === this.timeline.length || this.timeline[this.timeline.length - 1].timestamp <= e.timestamp) {
            this.timeline.push(e), this.cull();
            return;
        }
        let t = this.timeline.length;
        for (let n = this.timeline.length - 1; n >= 0; n--)
            if (this.timeline[n].timestamp <= e.timestamp) {
                t = n + 1;
                break;
            }
        t === this.timeline.length && this.timeline[0].timestamp > e.timestamp && (t = 0),
            this.timeline.splice(t, 0, e),
            this.cull();
    }
    read() {
        return this.cull(), this.timeline;
    }
    cull() {
        let e = Date.now() - this.timelineLength;
        for (; this.timeline.length > 0 && this.timeline[0].timestamp < e; ) this.timeline.shift();
    }
}
var f = n(372684),
    p = n(572164),
    E = n(284009),
    m = n.n(E);
function g() {
    return { audioModelDataPerUser: {}, gameEventData: [] };
}
function A(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
n(775443);
var I = n(717247);
class T {
    gameEvents;
    gameStateTimeline = [];
    constructor(e) {
        (this.gameEvents = e),
            (this.gameStateTimeline = (function (e) {
                let t = { in_proper_game: !1, in_game_guess: !1, spectating: !1, bomb_planted: !1 },
                    n = [{ ...t, timestamp_ms: 0 }],
                    i = null,
                    r = null,
                    s = (e, i) => {
                        let r = { ...t, ...e };
                        (r.in_proper_game !== t.in_proper_game ||
                            r.in_game_guess !== t.in_game_guess ||
                            r.spectating !== t.spectating ||
                            r.bomb_planted !== t.bomb_planted) &&
                            (Object.assign(t, r), n.push({ ...r, timestamp_ms: i }));
                    },
                    a = (e) => {
                        for (;;) {
                            let n = 1 / 0,
                                a = null;
                            if (t.in_proper_game && null != i) {
                                let e = i + 175e3;
                                e < n && ((n = e), (a = "round"));
                            }
                            if (t.in_game_guess && null != r) {
                                let e = r + 135e3;
                                e <= n && ((n = e), (a = "out_of_game"));
                            }
                            if (null == a || n > e) break;
                            "round" === a
                                ? s({ in_proper_game: !1, bomb_planted: !1, spectating: !1 }, n)
                                : s({ in_proper_game: !1, in_game_guess: !1, bomb_planted: !1, spectating: !1 }, n);
                        }
                    };
                for (let n of [...e].sort((e, t) => e.timestamp_ms - t.timestamp_ms)) {
                    var o;
                    switch (
                        (a(n.timestamp_ms),
                        null == (o = n.name)
                            ? "other"
                            : (0, I.MK)(o)
                              ? "round"
                              : o === I.BC
                                ? "bomb_plant"
                                : o === I.cU || o === I.hK
                                  ? "bomb_end"
                                  : o === I.Z8
                                    ? "death"
                                    : I.KO.has(o)
                                      ? "kill"
                                      : "other")
                    ) {
                        case "round":
                            s(
                                { in_proper_game: !0, in_game_guess: !0, bomb_planted: !1, spectating: !1 },
                                n.timestamp_ms,
                            ),
                                (i = Math.max(i ?? n.timestamp_ms, n.timestamp_ms));
                            break;
                        case "bomb_plant":
                            s({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !0 }, n.timestamp_ms);
                            break;
                        case "bomb_end":
                            s({ in_proper_game: !0, in_game_guess: !0, bomb_planted: !1 }, n.timestamp_ms);
                            break;
                        case "death":
                            s({ in_game_guess: !0, spectating: t.in_proper_game || t.spectating }, n.timestamp_ms);
                            break;
                        case "kill":
                            s({ in_game_guess: !0 }, n.timestamp_ms);
                    }
                    r = Math.max(r ?? n.timestamp_ms, n.timestamp_ms);
                }
                return a(1 / 0), n;
            })(this.gameEvents));
    }
    calculateModifiers(e, t) {
        let n = this.gameStateTimeline,
            i = [],
            r = null,
            s = null,
            a = (t - e) / 1e3 + 1;
        for (let t = 0; t < a; t++) {
            let a = e + 1e3 * t,
                o = (function (e, t) {
                    let n = e.findLast((e) => e.timestamp_ms <= t);
                    return m()(n, "bad timeline!"), n;
                })(n, a);
            (null != r ? A(this.gameEvents, r, a) : []).some((e) => e.name === I.Z8) && (s = a);
            let l = 1;
            o.in_game_guess
                ? o.spectating && (null == s || a - s > 15e3)
                    ? (l /= 3)
                    : o.bomb_planted && (l *= 2)
                : (l /= 4),
                i.push({ timestamp_ms: a, modifier: l }),
                (r = a);
        }
        return i;
    }
    rescoreEvent(e) {
        return null != e.name ? I.hz[e.name]?.scoreBoost : void 0;
    }
}
let S = [{ applicationIds: ["1158877933042143272", "356875057940791296"], create: (e) => new T(e) }];
function y(e, t, n, i) {
    let r,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { requestedCount: a = 3, preTrimmedSignalsByFilepath: o } = s,
        l = [],
        u = [...t.gameEventData].sort((e, t) => e.timestamp_ms - t.timestamp_ms),
        c = (function (e, t) {
            if (null == e) return;
            let n = S.find((t) => t.applicationIds.includes(e));
            return n?.create(t);
        })(i, u),
        d = Number.MAX_VALUE,
        _ = -Number.MAX_VALUE;
    for (let e in t.audioModelDataPerUser) {
        let n = t.audioModelDataPerUser[e];
        for (let e of [n.laughterData, n.shoutingData, n.rmsData])
            0 !== e.length && ((d = Math.min(d, e[0].timestamp_ms)), (_ = Math.max(_, e[e.length - 1].timestamp_ms)));
    }
    null != c && d <= _ && (r = c.calculateModifiers?.(d, _));
    let h = (function (e) {
        if (null == e) return () => 1;
        let t = new Map(e.map((e) => [e.timestamp_ms, e.modifier]));
        return (e) => t.get(1e3 * Math.floor(e / 1e3)) ?? 1;
    })(r);
    for (let i of e) {
        let e;
        m()(null != i.decision, "candidate clip missing .decision");
        let r = i.decision.timestamp,
            s = r - i.length;
        {
            let n = o?.[i.filepath];
            if (
                ((e = { audioModelDataPerUser: null != n ? n.audioModelDataPerUser : {}, gameEventData: [] }),
                null != n)
            ) {
                let t = 1e3 * Math.floor(s / 1e3),
                    i = (e) => e.map((e) => ({ ...e, timestamp_ms: e.timestamp_ms + t }));
                for (let t in ((e.audioModelDataPerUser = {}), n.audioModelDataPerUser)) {
                    let r = n.audioModelDataPerUser[t];
                    e.audioModelDataPerUser[t] = {
                        laughterData: i(r.laughterData),
                        shoutingData: i(r.shoutingData),
                        rmsData: i(r.rmsData),
                    };
                }
            } else
                for (let n in t.audioModelDataPerUser) {
                    let i = t.audioModelDataPerUser[n];
                    e.audioModelDataPerUser[n] = {
                        laughterData: N(i.laughterData, s, r),
                        shoutingData: N(i.shoutingData, s, r),
                        rmsData: N(i.rmsData, s, r),
                    };
                }
            (e.audioModelDataPerUser = (function (e) {
                let t = Number.MAX_VALUE,
                    n = -Number.MAX_VALUE;
                for (let i in e) {
                    let r = e[i];
                    for (let e of [r.laughterData, r.shoutingData, r.rmsData])
                        0 !== e.length &&
                            (e[0].timestamp_ms < t && (t = e[0].timestamp_ms),
                            e[e.length - 1].timestamp_ms > n && (n = e[e.length - 1].timestamp_ms));
                }
                if (t === Number.MAX_VALUE || n === -Number.MAX_VALUE) return e;
                function i(e, t, n) {
                    let i = [],
                        r = 0;
                    for (let s = 0; s < n; s++) {
                        let n = t + 1e3 * s,
                            a = e[r];
                        null != a && a.timestamp_ms === n
                            ? (i.push({ ...a }), r++)
                            : (null != a && m()(a.timestamp_ms % 1e3 == 0, `bad timestamp! ${a.timestamp_ms}`),
                              i.push({ value: 0, timestamp_ms: n }));
                    }
                    return m()(i.length === n, "bad track!"), i;
                }
                m()(t % 1e3 == 0 && n % 1e3 == 0, "bad timestamps!");
                let r = (n - t) / 1e3 + 1,
                    s = {};
                for (let n in e) {
                    let a = e[n];
                    s[n] = {
                        laughterData: i(a.laughterData, t, r),
                        shoutingData: i(a.shoutingData, t, r),
                        rmsData: i(a.rmsData, t, r),
                    };
                }
                return s;
            })(e.audioModelDataPerUser)),
                (e.gameEventData = A(u, s, r));
        }
        let a = new Map();
        for (let t in e.audioModelDataPerUser) {
            let n = e.audioModelDataPerUser[t];
            if (0 === n.laughterData.length && 0 === n.shoutingData.length && 0 === n.rmsData.length) continue;
            let i = (function (e, t) {
                if (0 === e.length || 0 === t.length) return [];
                m()(e.length === t.length, "track length doesn't match rms length?");
                let n = e.map((e) => +(e.value > 0.7)),
                    i = -1;
                for (let e = 0; e <= n.length; e++) {
                    let t = e < n.length && 1 === n[e];
                    t && -1 === i && (i = e), t || -1 === i || (e - i < 2 && n.fill(0, i, e), (i = -1));
                }
                return e.map((e, i) => {
                    let r = Math.min(4 * t[i].value, 1);
                    return { timestamp_ms: e.timestamp_ms, value: r * n[i] };
                });
            })(n.laughterData, n.rmsData).map((e) => ({ ...e, value: e.value * h(e.timestamp_ms) }));
            a.set(
                t,
                (function (e) {
                    if (0 === e.length) return 0;
                    let t = 0;
                    for (let n of e) t += n.value;
                    return t / e.length;
                })(i),
            );
        }
        let c = 0;
        if (a.size > 1) {
            let e = 0;
            for (let [t, i] of a) t !== n && ((c += i), e++);
            c /= e;
        }
        let d = a.get(n);
        null == d && (d = 0);
        let _ = d * (1 + c);
        (_ =
            (_ + 1) *
                ((function (e, t) {
                    let n = 0;
                    for (let i of e) n += i.score * t(i.timestamp_ms);
                    return n;
                })(e.gameEventData, h) +
                    1) -
            1),
            l.push({ clip: i, score: _ });
    }
    l.sort((e, t) => t.score - e.score);
    let f = [];
    for (let e of l) {
        m()(null != e.clip.decision, "clip missing .decision");
        let t = e.clip.decision.timestamp,
            n = t - e.clip.length,
            i = !1;
        for (let e of f) {
            m()(null != e.clip.decision, "clip missing .decision");
            let r = e.clip.decision.timestamp,
                s = r - e.clip.length;
            if (Math.min(t, r) - Math.max(n, s) >= 5e3) {
                i = !0;
                break;
            }
        }
        if ((i || f.push(e), f.length === a)) break;
    }
    return { allClipsRanked: l, selected: f };
}
function N(e, t, n) {
    return e.filter((e) => e.timestamp_ms >= t && e.timestamp_ms <= n);
}
var v = n(315240),
    C = n(696016);
class R extends s.A {
    timeline;
    scheduledClipTimeout = new r.Ep();
    scheduledClipSignal = null;
    lastClipTimestamp = 0;
    pendingCandidateDiscards = new Set();
    decisionSignals = g();
    sessionEndTimeout = new r.Ep();
    currentSessionGameKey = null;
    pendingSessionGameKey = null;
    constructor() {
        super(), (this.timeline = new h(_.Ay.getSettings().clipsLength));
    }
    actions = {
        CLIPS_SIGNAL_CREATED: (e) => this.handleClipsSignalCreated(e.signal, e.timestamp),
        CLIPS_ML_DETECTION: (e) => this.handleMlDetection(e.detections),
        SPEAKING: (e) => this.handleSpeaking(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_START: (e) => this.handleSoundboardPlayStart(e),
        GUILD_SOUNDBOARD_SOUND_PLAY_END: (e) => this.handleSoundboardPlayEnd(e),
        RUNNING_GAMES_CHANGE: () => this.handleRunningGamesChange(),
        CLIPS_SAVE_CLIP: (e) => this.handleLateCandidateSave(e),
        VOICE_CHANNEL_SELECT: () => this.handleVoiceChannelSelect(),
        CLIPS_SETTINGS_UPDATE: () => this.handleSettingsUpdate(),
    };
    handleClipsSignalCreated(e, t) {
        this.isSignalEnabled(e.type) && this.process(e, t);
    }
    handleMlDetection(e) {
        for (let t of e) {
            let e = this.decisionSignals.audioModelDataPerUser[t.user_id];
            for (let n of (null == e &&
                ((e = { laughterData: [], shoutingData: [], rmsData: [] }),
                (this.decisionSignals.audioModelDataPerUser[t.user_id] = e)),
            t.data_points))
                "laughter" === n.label
                    ? (e.laughterData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence }),
                      n.confidence > 0.55 &&
                          this.process(
                              { type: f.Gy.LAUGHTER, label: n.label, confidence: n.confidence },
                              n.timestamp_ms,
                          ))
                    : "shouting" === n.label
                      ? e.shoutingData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence })
                      : "rms" === n.label && e.rmsData.push({ timestamp_ms: n.timestamp_ms, value: n.confidence });
        }
    }
    handleSpeaking(e) {
        if (!(0, p.TD)() || e.context !== i.x.DEFAULT) return;
        let t = _.Ay.isVoiceRecordingAllowedForUser(e.userId);
        (e.userId === c.default.getId() || t) &&
            this.process({ type: f.Gy.SPEAKING, speakingFlags: e.speakingFlags, userId: e.userId });
    }
    handleSoundboardPlayStart(e) {
        if (!(0, p.TD)()) return;
        let t = u.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: f.Gy.SOUNDBOARD,
            playing: !0,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name ?? t.emojiName,
            name: t.name,
            userId: e.userId,
        });
    }
    handleSoundboardPlayEnd(e) {
        if (!(0, p.TD)()) return;
        let t = u.A.getSoundById(e.soundId);
        if (null == t) return;
        let n = o.A.getGuildEmojis(t.guildId)?.[t.emojiId ?? ""];
        this.process({
            type: f.Gy.SOUNDBOARD,
            playing: !1,
            soundboardId: e.soundId,
            emojiId: n?.id,
            emojiAnimated: n?.animated,
            emojiName: n?.name,
            name: t.name,
            userId: e.userId,
        });
    }
    isSignalEnabled(e) {
        switch (e) {
            case f.Gy.DISTRIBUTED:
                return _.Ay.getSettings().clipSignals.enableDistributedSignals;
            case f.Gy.PHRASE:
                return _.Ay.getSettings().clipSignals.enablePhraseSignals;
            case f.Gy.GAME_EVENT:
                return _.Ay.getSettings().clipSignals.enableGameSignals;
            default:
                return !0;
        }
    }
    process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        switch ((this.timeline.add({ signal: e, timestamp: t }), e.type)) {
            case f.Gy.MANUAL:
            case f.Gy.DISTRIBUTED:
                this.scheduleClip(e);
                break;
            case f.Gy.GAME_EVENT:
                if (
                    (this.decisionSignals.gameEventData.push({
                        timestamp_ms: t,
                        score: e.score ?? 0,
                        name: e.eventName ?? e.eventIconTag,
                    }),
                    1 === e.importance)
                ) {
                    let n = Math.max(0, 1e4 - Math.max(0, Date.now() - t));
                    this.scheduleClip(e, n, !0);
                }
                break;
            case f.Gy.PHRASE:
                if (
                    this.scheduledClipSignal?.type === f.Gy.GAME_EVENT ||
                    performance.now() - this.lastClipTimestamp < 1e4
                )
                    return;
                this.scheduleClip(e);
                break;
            case f.Gy.LAUGHTER:
                if (
                    this.scheduledClipSignal?.type === f.Gy.GAME_EVENT ||
                    this.scheduledClipSignal?.type === f.Gy.PHRASE ||
                    performance.now() - this.lastClipTimestamp < 15e3
                )
                    return;
                this.scheduleClip(e, 0, !0);
        }
    }
    read() {
        return {
            timeline: this.timeline.read(),
            scheduledClipSignal: this.scheduledClipSignal,
            phraseCooldown: Math.max(0, 1e4 - (performance.now() - this.lastClipTimestamp)),
        };
    }
    clear() {
        C.nx.info(
            `decider: clear() called \u{2014} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${_.Ay.getCurrentClipsSessionId()} pendingSessionGameKey=${this.pendingSessionGameKey} pendingCandidates=${_.Ay.getPendingClipCandidates().length} candidates=${_.Ay.getClipCandidates().length}`,
        ),
            this.unscheduleClip(),
            this.sessionEndTimeout.stop(),
            this.processClipCandidates(),
            (this.currentSessionGameKey = null),
            (this.pendingSessionGameKey = null),
            (0, v.p8)(null),
            (this.lastClipTimestamp = 0),
            this.timeline.clear();
    }
    unscheduleClip() {
        this.scheduledClipTimeout.stop(), (this.scheduledClipSignal = null);
    }
    scheduleClip(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = _.Ay.getCurrentClipsSessionId();
        (n && (null === i || null == d.A.getVoiceChannelId())) ||
            (C.nx.info(`decider: scheduleClip signal=${e.type} delay=${t}ms isCandidate=${n}`),
            this.unscheduleClip(),
            (this.scheduledClipSignal = e),
            (this.lastClipTimestamp = performance.now() + t),
            this.scheduledClipTimeout.start(t, () => {
                C.nx.info(`decider: scheduled timeout fired \u{2014} saving clip (signal=${e.type} isCandidate=${n})`),
                    (this.scheduledClipSignal = null),
                    (0, v.yd)(
                        e.type === f.Gy.MANUAL ? "manual" : "auto",
                        [...this.timeline.read()],
                        { signal: e, timestamp: Date.now() },
                        n,
                        i ?? void 0,
                    );
            }));
    }
    handleVoiceChannelSelect() {
        this.clear();
        let e = l.Ay.getVisibleGame();
        if (null != e) {
            this.currentSessionGameKey = (0, l.Es)(e);
            let t = crypto.randomUUID();
            (0, v.p8)({ id: t, gameId: e.id ?? null }),
                C.nx.info(
                    `decider: handleVoiceChannelSelect \u{2014} new gaming session id: ${t}, for game: ${this.currentSessionGameKey}`,
                );
        }
    }
    handleRunningGamesChange() {
        let e = l.Ay.getVisibleGame(),
            t = null != e ? (0, l.Es)(e) : null;
        if (
            (C.nx.info(
                `decider: handleRunningGamesChange visibleGame=${e?.name ?? "null"} newPrimaryKey=${t} currentSessionGameKey=${this.currentSessionGameKey} currentSessionId=${_.Ay.getCurrentClipsSessionId()} pendingSessionGameKey=${this.pendingSessionGameKey}`,
            ),
            null === this.currentSessionGameKey)
        ) {
            if (null != t) {
                this.currentSessionGameKey = t;
                let n = crypto.randomUUID();
                (0, v.p8)({ id: n, gameId: e?.id ?? null }),
                    C.nx.info(`decider: handleRunningGamesChange \u{2014} starting session for ${t} (id=${n})`);
            } else C.nx.info(`decider: handleRunningGamesChange \u{2014} not starting session (newPrimaryKey=${t})`);
            return;
        }
        if (t === this.currentSessionGameKey) {
            C.nx.info("decider: handleRunningGamesChange \u2014 same primary, cancelling pending end"),
                this.sessionEndTimeout.stop(),
                (this.pendingSessionGameKey = null);
            return;
        }
        if (null === t) {
            C.nx.info(
                "decider: handleRunningGamesChange \u2014 visible game became null, finalizing session immediately",
            ),
                this.sessionEndTimeout.stop(),
                this.processClipCandidates(),
                (this.currentSessionGameKey = null),
                (0, v.p8)(null),
                (this.pendingSessionGameKey = null);
            return;
        }
        this.pendingSessionGameKey === t
            ? C.nx.info("decider: handleRunningGamesChange \u2014 already debouncing for this key")
            : (C.nx.info(
                  `decider: handleRunningGamesChange \u{2014} primary game changed from ${this.currentSessionGameKey} to ${t}, debouncing 30000ms`,
              ),
              (this.pendingSessionGameKey = t),
              this.sessionEndTimeout.start(3e4, () => {
                  this.processClipCandidates(), (this.currentSessionGameKey = t);
                  let n = crypto.randomUUID();
                  (0, v.p8)({ id: n, gameId: e?.id ?? null }),
                      (this.pendingSessionGameKey = null),
                      C.nx.info(
                          `decider: sessionEndTimeout fired after debounce \u{2014} finalizing previous session, started new session (newPrimaryKey=${t}, id=${n})`,
                      );
              }));
    }
    async debugStashDeciderData() {
        if (_.Ay.getPendingClipCandidates().length > 0)
            return void alert("wait for pending candidates to finish saving!");
        let e = _.Ay.getClipCandidates();
        if (0 === e.length) return void alert("no candidates to stash");
        let t = {
            decisionSignals: this.decisionSignals,
            clipCandidates: e,
            localUserId: c.default.getId(),
            gameId: _.Ay.getCurrentClipsSession()?.gameId ?? void 0,
        };
        await a.A.clips.debugStashClipDeciderData(t),
            C.nx.info(`debugStashDeciderData: stashed ${e.length} candidates`);
    }
    static async debugRerunRanking() {
        C.nx.info("DEBUG RERUN RANKING");
        let e = await a.A.clips.debugReadStashedClipDeciderData(),
            t = y(e.clipCandidates, e.decisionSignals, e.localUserId, e.gameId);
        C.nx.info("ranked clips:", t),
            t.selected.forEach((e, t) => {
                C.nx.info(`Clip ${t + 1} score ${e.score}, ${a.A.fileManager.basename(e.clip.filepath)}`);
            });
    }
    processClipCandidates() {
        let e = _.Ay.getClipCandidates(),
            t = y(e, this.decisionSignals, c.default.getId(), _.Ay.getCurrentClipsSession()?.gameId ?? void 0);
        for (let n of (C.nx.info("ranked clips:", t), e))
            null != t.selected.find((e) => e.clip.id === n.id) ? (0, v.K7)(n) : (0, v.oH)(n, !1);
        for (let e of _.Ay.getPendingClipCandidates()) this.pendingCandidateDiscards.add(e.id);
        this.decisionSignals = g();
    }
    handleLateCandidateSave(e) {
        let { clip: t } = e;
        this.pendingCandidateDiscards.has(t.id) && (this.pendingCandidateDiscards.delete(t.id), (0, v.oH)(t));
    }
    handleSettingsUpdate() {
        this.timeline.updateLength(_.Ay.getSettings().clipsLength);
    }
}
let O = new R();
