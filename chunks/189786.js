n.d(t, { Z: () => o });
var r = n(81825);
function i(e, t, n) {
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
class o extends r.Z {
    isVoiceMuted() {
        return this.selfMute || this.mute || this.suppress || null != this.requestToSpeakTimestamp;
    }
    isVoiceDeafened() {
        return this.selfDeaf || this.deaf;
    }
    constructor(e) {
        var t;
        super(), i(this, 'userId', void 0), i(this, 'channelId', void 0), i(this, 'sessionId', void 0), i(this, 'mute', void 0), i(this, 'deaf', void 0), i(this, 'selfMute', void 0), i(this, 'selfDeaf', void 0), i(this, 'selfVideo', void 0), i(this, 'selfStream', void 0), i(this, 'suppress', void 0), i(this, 'requestToSpeakTimestamp', void 0), i(this, 'discoverable', void 0), (this.userId = e.userId || ''), (this.channelId = e.channelId || null), (this.sessionId = e.sessionId || null), (this.mute = e.mute || !1), (this.deaf = e.deaf || !1), (this.selfMute = e.selfMute || !1), (this.selfDeaf = e.selfDeaf || !1), (this.selfVideo = e.selfVideo || !1), (this.selfStream = e.selfStream || !1), (this.suppress = e.suppress || !1), (this.requestToSpeakTimestamp = e.requestToSpeakTimestamp), (this.discoverable = null == (t = e.discoverable) || t);
    }
}
