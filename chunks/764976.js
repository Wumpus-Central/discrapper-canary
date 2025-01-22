r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(979651),
    o = r(938475),
    s = r(65154);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class u {
    updateVoiceStates(e, n) {
        n === this.channelId ? (this.totalParticipants.add(e), (this.maxVoiceStateCount = Math.max(o.ZP.countVoiceStatesForChannel(n), this.maxVoiceStateCount))) : (null == n && e in this.totalSpeakers && (this.totalSpeakers[e] = s.Dg.NONE), e === this.userId && null != n && this.setChannelId(n));
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
    setSpeaking(e, n) {
        if (n !== s.Dg.NONE) {
            let r = a.Z.getVoiceStateForChannel(this.channelId, e);
            if (null != r && !r.selfMute && !r.mute) {
                this.totalSpeakers[e] = n;
                let r = Object.values(this.totalSpeakers).filter((e) => e !== s.Dg.NONE).length;
                this.maxSpeakerCount = Math.max(this.maxSpeakerCount, r);
            }
        } else e in this.totalSpeakers && (this.totalSpeakers[e] = s.Dg.NONE);
        if (this.userId === e) {
            if (n === this.speaking) return;
            if (n !== s.Dg.NONE) {
                let e = Object.values(a.Z.getVoiceStatesForChannel(this.channelId)).filter((e) => !e.selfDeaf && !e.deaf);
                e.forEach((e) => this.totalListeners.add(e.userId)), (this.maxListenerCount = Math.max(e.length, this.maxListenerCount));
            }
            this.speaking = n;
        }
    }
    setChannelId(e) {
        if (e === this.channelId) return;
        (this.channelId = e), (this.totalParticipants = new Set([this.userId]));
        let n = Object.keys(a.Z.getVoiceStatesForChannel(this.channelId));
        n.forEach((e) => this.totalParticipants.add(e)), (this.maxVoiceStateCount = n.length), (this.speaking = s.Dg.NONE), (this.maxListenerCount = 0), (this.totalListeners = new Set()), (this.maxSpeakerCount = 0), (this.totalSpeakers = {});
    }
    constructor(e, n) {
        l(this, 'userId', void 0), l(this, 'channelId', void 0), l(this, 'maxVoiceStateCount', 1), l(this, 'totalParticipants', void 0), l(this, 'speaking', s.Dg.NONE), l(this, 'maxListenerCount', 0), l(this, 'totalListeners', void 0), l(this, 'maxSpeakerCount', 0), l(this, 'totalSpeakers', void 0), (this.userId = e), this.setChannelId(n);
    }
}
