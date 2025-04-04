n.d(t, { Z: () => c }), n(411104);
var r = n(836560),
    i = n(376398);
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
function a(e) {
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
                o(e, t, n[t]);
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
class c extends r.EventEmitter {
    static async get(e, t) {
        var n;
        let r = {
            audio: t && {
                echoCancellation: !1,
                noiseSuppression: !1,
                autoGainControl: !1
            },
            video: l(a({}, e), { frameRate: 30 })
        };
        if ((null == (n = navigator.mediaDevices) ? void 0 : n.getDisplayMedia) != null) return new c(await navigator.mediaDevices.getDisplayMedia(r));
        throw Error('UNKNOWN');
    }
    destroy() {
        this.removeAllListeners(), (0, i.jC)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
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
            o(this, 'id', void 0),
            o(this, 'stream', void 0),
            o(this, 'streamId', void 0),
            e.getVideoTracks().forEach((e) => {
                e.onended = () => {
                    this.emit('desktopsourceend');
                };
            }),
            (this.id = e.getVideoTracks()[0].label),
            (this.stream = e),
            (this.streamId = (0, i.N7)(e));
    }
}
