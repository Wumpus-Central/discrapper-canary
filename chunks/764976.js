n.d(t, { Z: () => s }), n(388685);
var r = n(979651),
    i = n(938475),
    a = n(65154);
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
class s {
    updateVoiceStates(e, t) {
        t === this.channelId ? (this.totalParticipants.add(e), (this.maxVoiceStateCount = Math.max(i.ZP.countVoiceStatesForChannel(t), this.maxVoiceStateCount))) : (null == t && e in this.totalSpeakers && (this.totalSpeakers[e] = a.Dg.NONE), e === this.userId && null != t && this.setChannelId(t));
    }
    getStats() {
        return {
            max_voice_state_count: this.maxVoiceStateCount,
            total_voice_state_count: this.totalParticipants.size,
            max_listener_count: this.maxListenerCount,
            total_listener_count: this.totalListeners.size,
            max_speaker_count: this.maxSpeakerCount,
            total_speaker_count: Object.keys(this.totalSpeakers).length
        };
    }
    setSpeaking(e, t) {
        if (t !== a.Dg.NONE) {
            let n = r.Z.getVoiceStateForChannel(this.channelId, e);
            if (null != n && !n.selfMute && !n.mute) {
                this.totalSpeakers[e] = t;
                let n = Object.values(this.totalSpeakers).filter((e) => e !== a.Dg.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, n);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = a.Dg.NONE);
        if (this.userId === e) {
            if (t === this.speaking) return;
            if (t !== a.Dg.NONE) {
                let e = Object.values(r.Z.getVoiceStatesForChannel(this.channelId)).filter((e) => !e.selfDeaf && !e.deaf);
                e.forEach((e) => this.totalListeners.add(e.userId)), (this.maxListenerCount = Math.max(e.length, this.maxListenerCount));
            }
            this.speaking = t;
        }
    }
    setChannelId(e) {
        if (e === this.channelId) return;
        (this.channelId = e), (this.totalParticipants = new Set([this.userId]));
        let t = Object.keys(r.Z.getVoiceStatesForChannel(this.channelId));
        t.forEach((e) => this.totalParticipants.add(e)), (this.maxVoiceStateCount = t.length), (this.speaking = a.Dg.NONE), (this.maxListenerCount = 0), (this.totalListeners = new Set()), (this.maxSpeakerCount = 0), (this.totalSpeakers = {});
    }
    constructor(e, t) {
        o(this, 'userId', void 0), o(this, 'channelId', void 0), o(this, 'maxVoiceStateCount', 1), o(this, 'totalParticipants', void 0), o(this, 'speaking', a.Dg.NONE), o(this, 'maxListenerCount', 0), o(this, 'totalListeners', void 0), o(this, 'maxSpeakerCount', 0), o(this, 'totalSpeakers', void 0), (this.userId = e), this.setChannelId(t);
    }
}
