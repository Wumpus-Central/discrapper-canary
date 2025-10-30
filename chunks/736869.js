n.d(t, { t: () => o }), n(388685), n(539854), n(642613), n(781311);
var r = n(894694);
function i(e, t, n) {
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
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
class o {
    reconfigure(e) {
        this.config = e;
    }
    async process(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
            n = {
                timestamp: t,
                signal: e,
                processed: !1,
            };
        this.timeline.add(n), this.update();
        let i = this.calculateState(),
            a = e.type === r.Bs.MANUAL,
            o = !1,
            s = "";
        if (
            (a
                ? ((o = !0), (s = "Manual clip command (explicit)"))
                : i.pressure >= i.currentThreshold &&
                  ((o = !0),
                  (s = "Pressure ("
                      .concat(i.pressure.toFixed(3), ") exceeded threshold (")
                      .concat(i.currentThreshold.toFixed(3), ")"))),
            o)
        ) {
            let t = {
                reason: s,
                clippingPressure: i.pressure,
                currentThreshold: i.currentThreshold,
                effectivePressure: i.pressure,
                timestamp: Date.now(),
                emotionHistory: [],
                signal: e,
            };
            if ((await this.clip(a ? "manual" : "auto", t), a)) this.currentThreshold = this.config.ceiling;
            else {
                let e = i.pressure - this.currentThreshold;
                e > 0 && (this.currentThreshold = Math.min(this.config.ceiling, this.currentThreshold + e));
            }
            return (
                (this.fatigue = Math.max(0.1, this.fatigue * this.config.signalFatigueMultiplier)),
                (this.fatigueAtLastClip = this.fatigue),
                (this.thresholdAtLastClip = this.currentThreshold),
                (this.lastClipTimestamp = t.timestamp),
                t
            );
        }
        return null;
    }
    read() {
        return this.update(), this.calculateState();
    }
    update() {
        let e = Date.now();
        if (((this.lastUpdateTimestamp = e), null == this.lastClipTimestamp)) {
            (this.fatigue = 1), (this.currentThreshold = this.config.baseThreshold);
            return;
        }
        let t = Math.exp(-((e - this.lastClipTimestamp) / 1000) / this.config.fatigueDecaySeconds);
        this.fatigue = 1 - (1 - this.fatigueAtLastClip) * t;
        let n = this.thresholdAtLastClip - this.config.baseThreshold;
        this.currentThreshold = this.config.baseThreshold + n * t;
    }
    calculateState() {
        var e, t, n;
        let r = this.timeline.read(),
            i = Date.now(),
            a = new Map();
        for (let e of r) {
            if (e.processed) continue;
            let t = this.getSignalImportance(e.signal);
            a.set(e, t);
        }
        let o = new Map();
        for (let e of r) {
            if (e.processed) continue;
            let t = e.signal.type;
            o.has(t) || o.set(t, []), o.get(t).push(e);
        }
        for (let [t, n] of o.entries()) {
            if (n.length <= 1) continue;
            let t = this.getSignalPenalty(n[0].signal);
            if (null != t) {
                n.sort((e, t) => e.timestamp - t.timestamp);
                for (let r = 1; r < n.length; r++) {
                    let i = null != (e = a.get(n[r])) ? e : 0,
                        o = Math.pow(t, r);
                    a.set(n[r], i * o);
                }
            }
        }
        for (let e of r) {
            if (e.processed) continue;
            let n = this.getSignalAmplifiers(e.signal);
            if (null != n && 0 !== n.length) {
                for (let o of n)
                    if (!((i - e.timestamp) / 1000 > o.timeWindowSeconds))
                        for (let n of r) {
                            if (n.processed || n === e || !o.targetSignals.includes(n.signal.type)) continue;
                            let r = (e.timestamp - n.timestamp) / 1000;
                            if (r < 0 || r > o.timeWindowSeconds) continue;
                            let i = (null != (t = a.get(n)) ? t : 0) * o.multiplier;
                            a.set(n, i);
                        }
            }
        }
        for (let e of r) {
            if (e.processed) continue;
            let t = null != (n = a.get(e)) ? n : 0,
                r = this.getSignalDecay(e.signal),
                o = (i - e.timestamp) / 1000,
                s = 1;
            if (r > 0) {
                let e = r * this.config.timelineLengthSeconds;
                o >= e ? (s = 0) : e > 0 && (s = 1 - o / e);
            }
            a.set(e, t * s);
        }
        let s = 0;
        for (let [e, t] of a.entries()) s += t * this.fatigue;
        return {
            pressure: (s = Math.min(s, this.config.ceiling)),
            currentThreshold: this.currentThreshold,
            fatigue: this.fatigue,
            lastClipTimestamp: this.lastClipTimestamp,
            shouldClip: s >= this.currentThreshold,
            signals: r,
        };
    }
    getSignalImportance(e) {
        if (void 0 !== e.importance) return e.importance;
        switch (e.type) {
            case r.Bs.MANUAL:
            case r.Bs.DISTRIBUTED:
            case r.Bs.YELLING:
            case r.Bs.SPEAKING:
            case r.Bs.SOUNDBOARD:
                return this.config.signals[e.type].importance;
            case r.Bs.PHRASE: {
                if (!("text" in e)) return this.config.signals[r.Bs.PHRASE].defaultPhrase.importance;
                let t = this.config.signals[r.Bs.PHRASE],
                    n = e.text.toLowerCase().trim();
                for (let e of t.phrases)
                    if (e.enabled && e.patterns.some((e) => n.includes(e.toLowerCase()))) return e.importance;
                return t.defaultPhrase.importance;
            }
            case r.Bs.GAME_EVENT: {
                var t;
                if (!("eventType" in e)) return this.config.signals[r.Bs.GAME_EVENT].defaultEventType.importance;
                let n = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
                return null != (t = null == n ? void 0 : n.importance)
                    ? t
                    : this.config.signals[r.Bs.GAME_EVENT].defaultEventType.importance;
            }
            default:
                return 0;
        }
    }
    getSignalAmplifiers(e) {
        switch (e.type) {
            case r.Bs.MANUAL:
            case r.Bs.DISTRIBUTED:
            case r.Bs.YELLING:
            case r.Bs.SPEAKING:
            case r.Bs.SOUNDBOARD:
                return this.config.signals[e.type].amplifiers;
            case r.Bs.PHRASE: {
                if (!("text" in e)) return;
                let t = this.config.signals[r.Bs.PHRASE],
                    n = e.text.toLowerCase().trim();
                for (let e of t.phrases)
                    if (e.enabled && e.patterns.some((e) => n.includes(e.toLowerCase()))) return e.amplifiers;
                return;
            }
            case r.Bs.GAME_EVENT: {
                var t;
                if (!("eventType" in e)) return this.config.signals[r.Bs.GAME_EVENT].defaultEventType.amplifiers;
                let n = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
                return null != (t = null == n ? void 0 : n.amplifiers)
                    ? t
                    : this.config.signals[r.Bs.GAME_EVENT].defaultEventType.amplifiers;
            }
            default:
                return;
        }
    }
    getSignalPenalty(e) {
        switch (e.type) {
            case r.Bs.MANUAL:
            case r.Bs.DISTRIBUTED:
            case r.Bs.YELLING:
            case r.Bs.SPEAKING:
            case r.Bs.SOUNDBOARD:
                return this.config.signals[e.type].penalty;
            case r.Bs.PHRASE: {
                if (!("text" in e)) return this.config.signals[r.Bs.PHRASE].defaultPhrase.penalty;
                let t = this.config.signals[r.Bs.PHRASE],
                    n = e.text.toLowerCase().trim();
                for (let e of t.phrases)
                    if (e.enabled && e.patterns.some((e) => n.includes(e.toLowerCase()))) return e.penalty;
                return t.defaultPhrase.penalty;
            }
            case r.Bs.GAME_EVENT: {
                if (!("eventType" in e)) return;
                let t = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
                return null == t ? void 0 : t.penalty;
            }
            default:
                return;
        }
    }
    getSignalDecay(e) {
        switch (e.type) {
            case r.Bs.MANUAL:
            case r.Bs.DISTRIBUTED:
            case r.Bs.YELLING:
            case r.Bs.SPEAKING:
            case r.Bs.SOUNDBOARD:
                return this.config.signals[e.type].decay;
            case r.Bs.PHRASE: {
                if (!("text" in e)) return this.config.signals[r.Bs.PHRASE].defaultPhrase.decay;
                let t = this.config.signals[r.Bs.PHRASE],
                    n = e.text.toLowerCase().trim();
                for (let e of t.phrases)
                    if (e.enabled && e.patterns.some((e) => n.includes(e.toLowerCase()))) return e.decay;
                return t.defaultPhrase.decay;
            }
            case r.Bs.GAME_EVENT: {
                var t;
                if (!("eventType" in e)) return this.config.signals[r.Bs.GAME_EVENT].defaultEventType.decay;
                let n = this.config.signals[r.Bs.GAME_EVENT].eventTypes[e.eventType];
                return null != (t = null == n ? void 0 : n.decay)
                    ? t
                    : this.config.signals[r.Bs.GAME_EVENT].defaultEventType.decay;
            }
            default:
                return 1;
        }
    }
    async clip(e, t) {
        let n = this.timeline.read();
        for (let e of n) e.processed = !0;
        try {
            await this.saveClipCallback(void 0, e, n, t);
        } catch (e) {}
    }
    getConfig() {
        return a({}, this.config);
    }
    getInternalState() {
        return {
            currentThreshold: this.currentThreshold,
            fatigue: this.fatigue,
            fatigueAtLastClip: this.fatigueAtLastClip,
            thresholdAtLastClip: this.thresholdAtLastClip,
            lastClipTimestamp: this.lastClipTimestamp,
            lastUpdateTimestamp: this.lastUpdateTimestamp,
        };
    }
    constructor(e, t, n) {
        i(this, "config", void 0),
            i(this, "timeline", void 0),
            i(this, "currentThreshold", void 0),
            i(this, "fatigue", void 0),
            i(this, "fatigueAtLastClip", void 0),
            i(this, "thresholdAtLastClip", void 0),
            i(this, "lastClipTimestamp", void 0),
            i(this, "lastUpdateTimestamp", void 0),
            i(this, "saveClipCallback", void 0),
            (this.config = e),
            (this.timeline = t),
            (this.saveClipCallback = n),
            (this.currentThreshold = e.baseThreshold),
            (this.fatigue = 1),
            (this.fatigueAtLastClip = 1),
            (this.thresholdAtLastClip = e.baseThreshold),
            (this.lastClipTimestamp = null),
            (this.lastUpdateTimestamp = Date.now());
    }
}
