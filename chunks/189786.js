r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(81825);
function a(e, n, r) {
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
class o extends i.Z {
    isVoiceMuted() {
        return this.selfMute || this.mute || this.suppress || null != this.requestToSpeakTimestamp;
    }
    isVoiceDeafened() {
        return this.selfDeaf || this.deaf;
    }
    constructor(e) {
        var n;
        super(), a(this, 'userId', void 0), a(this, 'channelId', void 0), a(this, 'sessionId', void 0), a(this, 'mute', void 0), a(this, 'deaf', void 0), a(this, 'selfMute', void 0), a(this, 'selfDeaf', void 0), a(this, 'selfVideo', void 0), a(this, 'selfStream', void 0), a(this, 'suppress', void 0), a(this, 'requestToSpeakTimestamp', void 0), a(this, 'discoverable', void 0), (this.userId = e.userId || ''), (this.channelId = e.channelId || null), (this.sessionId = e.sessionId || null), (this.mute = e.mute || !1), (this.deaf = e.deaf || !1), (this.selfMute = e.selfMute || !1), (this.selfDeaf = e.selfDeaf || !1), (this.selfVideo = e.selfVideo || !1), (this.selfStream = e.selfStream || !1), (this.suppress = e.suppress || !1), (this.requestToSpeakTimestamp = e.requestToSpeakTimestamp), (this.discoverable = null === (n = e.discoverable) || void 0 === n || n);
    }
}
