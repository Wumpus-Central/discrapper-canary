n.d(t, { Z: () => u }), n(388685);
var r = n(445686),
    i = n(379649);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = [1, 100, 1000, 10000];
class u {
    start() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.listeningUsers.clear(),
            this.listening.reset(),
            this.speaking.reset(),
            this.participation.reset(),
            this.muted.reset(),
            this.connected.reset(),
            this.voiceFilterSpeaking.clear(),
            this.timesUntilSpeakingDurationMilestonesMs.clear(),
            this.connected.start(),
            this.connection.on(r.S.Speaking, (e, t, n) => {
                this.userId === e ? this.onSpeaking(0 !== t) : this.onListening(0 !== t, e);
            }),
            this.onMuted(e),
            this.connection.on(r.S.Mute, (e) => {
                this.onMuted(e);
            }),
            this.onVoiceFilterChanged(t),
            this.connection.on(r.S.VoiceFilterChanged, (e) => {
                this.onVoiceFilterChanged(e);
            });
    }
    _getVoiceFilterStopWatch(e) {
        if (null == e) return null;
        let t = this.voiceFilterSpeaking.get(e);
        return null == t && ((t = new i.G9(this.timestampProducer)), this.voiceFilterSpeaking.set(e, t)), t;
    }
    onSpeaking(e) {
        let t = this._getVoiceFilterStopWatch(this.connection.getVoiceFilterId());
        if (e) this.speaking.start(), this.participation.start(), null == t || t.start();
        else {
            let e = this.connected.lastStartTime,
                n = this.speaking.lastStartTime,
                r = this.speaking.lastElapsed;
            this.speaking.stop(), this.listening.isRunning() || this.participation.stop(), null == t || t.stop(), this.computeSpeakingDurationMilestones(e, n, r);
        }
    }
    onListening(e, t) {
        e ? (this.listeningUsers.add(t), this.listening.start(), this.participation.start()) : this.listeningUsers.delete(t) && 0 === this.listeningUsers.size && (this.listening.stop(), this.speaking.isRunning() || this.participation.stop());
    }
    onMuted(e) {
        e ? this.muted.start() : this.muted.stop();
    }
    onVoiceFilterChanged(e) {
        if ((this.voiceFilterSpeaking.forEach((e) => e.stop()), this.speaking.isRunning())) {
            var t;
            null == (t = this._getVoiceFilterStopWatch(e)) || t.start();
        }
    }
    computeSpeakingDurationMilestones(e, t, n) {
        if (null == e || null == t) return;
        let r = this.speaking.elapsed().asMilliseconds();
        c.filter((e) => !this.timesUntilSpeakingDurationMilestonesMs.has(e))
            .filter((e) => r >= e)
            .forEach((r) => {
                let i = t - e + r - n;
                this.timesUntilSpeakingDurationMilestonesMs.set(r, i);
            });
    }
    stop() {
        let e = this.connected.lastStartTime,
            t = this.speaking.lastStartTime,
            n = this.speaking.lastElapsed;
        this.speaking.stop(), this.listening.stop(), this.participation.stop(), this.connected.stop(), this.muted.stop(), this.voiceFilterSpeaking.forEach((e) => e.stop()), this.computeSpeakingDurationMilestones(e, t, n);
    }
    getVoiceFilterSpeakingDurationMs() {
        return new Map(
            [...this.voiceFilterSpeaking.entries()].map((e) => {
                let [t, n] = e;
                return [t, n.elapsed().asMilliseconds()];
            })
        );
    }
    getDurationStats() {
        return (
            this.computeSpeakingDurationMilestones(this.connected.lastStartTime, this.speaking.lastStartTime, this.speaking.lastElapsed),
            o(
                {
                    duration_listening_ms: this.listening.elapsed().asMilliseconds(),
                    duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
                    duration_participation_ms: this.participation.elapsed().asMilliseconds(),
                    duration_connected_ms: this.connected.elapsed().asMilliseconds(),
                    duration_muted_ms: this.muted.elapsed().asMilliseconds(),
                    duration_speaking_voice_filter_ids: [...this.voiceFilterSpeaking.keys()],
                    duration_speaking_voice_filter_ms: [...this.voiceFilterSpeaking.values()].map((e) => e.elapsed().asMilliseconds())
                },
                c.filter((e) => this.timesUntilSpeakingDurationMilestonesMs.has(e)).reduce((e, t) => l(o({}, e), { ['time_to_first_'.concat(t, 'ms_speech_ms')]: this.timesUntilSpeakingDurationMilestonesMs.get(t) }), {})
            )
        );
    }
    constructor(e, t, n = i.Z_) {
        a(this, 'userId', void 0), a(this, 'connection', void 0), a(this, 'timestampProducer', void 0), a(this, 'listeningUsers', void 0), a(this, 'listening', void 0), a(this, 'speaking', void 0), a(this, 'participation', void 0), a(this, 'connected', void 0), a(this, 'muted', void 0), a(this, 'voiceFilterSpeaking', void 0), a(this, 'timesUntilSpeakingDurationMilestonesMs', void 0), (this.userId = e), (this.connection = t), (this.timestampProducer = n), (this.listeningUsers = new Set()), (this.timesUntilSpeakingDurationMilestonesMs = new Map()), (this.listening = new i.G9(this.timestampProducer)), (this.speaking = new i.G9(this.timestampProducer)), (this.participation = new i.G9(this.timestampProducer)), (this.connected = new i.G9(this.timestampProducer)), (this.muted = new i.G9(this.timestampProducer)), (this.voiceFilterSpeaking = new Map());
    }
}
