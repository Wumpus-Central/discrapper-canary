n.d(t, { Z: () => a }), n(47120);
var r = n(445686),
    i = n(379649);
function o(e, t, n) {
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
class a {
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
        e ? (this.speaking.start(), this.participation.start(), null == t || t.start()) : (this.speaking.stop(), this.listening.isRunning() || this.participation.stop(), null == t || t.stop());
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
    stop() {
        this.speaking.stop(), this.listening.stop(), this.participation.stop(), this.connected.stop(), this.muted.stop(), this.voiceFilterSpeaking.forEach((e) => e.stop());
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
        return {
            duration_listening_ms: this.listening.elapsed().asMilliseconds(),
            duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
            duration_participation_ms: this.participation.elapsed().asMilliseconds(),
            duration_connected_ms: this.connected.elapsed().asMilliseconds(),
            duration_muted_ms: this.muted.elapsed().asMilliseconds(),
            duration_speaking_voice_filter_ids: [...this.voiceFilterSpeaking.keys()],
            duration_speaking_voice_filter_ms: [...this.voiceFilterSpeaking.values()].map((e) => e.elapsed().asMilliseconds())
        };
    }
    constructor(e, t, n = i.Z_) {
        o(this, 'userId', void 0), o(this, 'connection', void 0), o(this, 'timestampProducer', void 0), o(this, 'listeningUsers', void 0), o(this, 'listening', void 0), o(this, 'speaking', void 0), o(this, 'participation', void 0), o(this, 'connected', void 0), o(this, 'muted', void 0), o(this, 'voiceFilterSpeaking', void 0), (this.userId = e), (this.connection = t), (this.timestampProducer = n), (this.listeningUsers = new Set()), (this.listening = new i.G9(this.timestampProducer)), (this.speaking = new i.G9(this.timestampProducer)), (this.participation = new i.G9(this.timestampProducer)), (this.connected = new i.G9(this.timestampProducer)), (this.muted = new i.G9(this.timestampProducer)), (this.voiceFilterSpeaking = new Map());
    }
}
