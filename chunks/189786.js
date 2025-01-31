n.d(t, { Z: () => a });
var i = n(81825);
function r(e, t, n) {
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
class a extends i.Z {
    isVoiceMuted() {
        return this.selfMute || this.mute || this.suppress || null != this.requestToSpeakTimestamp;
    }
    isVoiceDeafened() {
        return this.selfDeaf || this.deaf;
    }
    constructor(e) {
        var t;
        super(), r(this, 'userId', void 0), r(this, 'channelId', void 0), r(this, 'sessionId', void 0), r(this, 'mute', void 0), r(this, 'deaf', void 0), r(this, 'selfMute', void 0), r(this, 'selfDeaf', void 0), r(this, 'selfVideo', void 0), r(this, 'selfStream', void 0), r(this, 'suppress', void 0), r(this, 'requestToSpeakTimestamp', void 0), r(this, 'discoverable', void 0), (this.userId = e.userId || ''), (this.channelId = e.channelId || null), (this.sessionId = e.sessionId || null), (this.mute = e.mute || !1), (this.deaf = e.deaf || !1), (this.selfMute = e.selfMute || !1), (this.selfDeaf = e.selfDeaf || !1), (this.selfVideo = e.selfVideo || !1), (this.selfStream = e.selfStream || !1), (this.suppress = e.suppress || !1), (this.requestToSpeakTimestamp = e.requestToSpeakTimestamp), (this.discoverable = null === (t = e.discoverable) || void 0 === t || t);
    }
}
