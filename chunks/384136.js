r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(411104);
var a = r(836560);
var o = r(376398);
function s(e, n, r) {
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
class l extends a.EventEmitter {
    static async get(e, n) {
        var r;
        let i = {
            audio: n && {
                echoCancellation: !1,
                noiseSuppression: !1,
                autoGainControl: !1
            },
            video: {
                ...e,
                frameRate: 30
            }
        };
        if ((null === (r = navigator.mediaDevices) || void 0 === r ? void 0 : r.getDisplayMedia) != null) return new l(await navigator.mediaDevices.getDisplayMedia(i));
        throw Error('UNKNOWN');
    }
    destroy() {
        this.removeAllListeners(), (0, o.jC)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
    }
    reset() {
        this.refreshSpeaking();
    }
    getStreamId() {
        return this.streamId;
    }
    refreshSpeaking() {
        this.emit(
            'speaking',
            this.stream.getAudioTracks().some((e) => e.enabled)
        );
    }
    constructor(e) {
        super(),
            s(this, 'id', void 0),
            s(this, 'stream', void 0),
            s(this, 'streamId', void 0),
            e.getVideoTracks().forEach((e) => {
                e.onended = () => {
                    this.emit('desktopsourceend');
                };
            }),
            (this.id = e.getVideoTracks()[0].label),
            (this.stream = e),
            (this.streamId = (0, o.N7)(e));
    }
}
