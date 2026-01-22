n.d(t, {
    A: () => c,
}),
    n(65821);
var r = n(143236),
    i = n(201327);

function a(e, t, n) {
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

function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}

function o(e, t) {
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
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class c extends r.EventEmitter {
    static async get(e, t, n) {
        var r;
        let i = {
            audio: t && {
                echoCancellation: !1,
                noiseSuppression: !1,
                autoGainControl: !1,
            },
            video: l(s({}, e), {
                frameRate: 30,
            }),
        };
        if ((null == (r = navigator.mediaDevices) ? void 0 : r.getDisplayMedia) != null)
            return new c(await navigator.mediaDevices.getDisplayMedia(i), n);
        throw Error("UNKNOWN");
    }
    reuse() {
        this.removeAllListeners(), this.pool.release(this);
    }
    destroy() {
        this.removeAllListeners(), (0, i.it)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
    }
    reset() {
        this.refreshSpeaking();
    }
    getStreamId() {
        return this.streamId;
    }
    refreshSpeaking() {
        this.emit(
            "speaking",
            this.stream.getAudioTracks().some((e) => e.enabled),
        );
    }
    constructor(e, t) {
        super(),
            a(this, "id", void 0),
            a(this, "stream", void 0),
            a(this, "pool", void 0),
            a(this, "streamId", void 0),
            e.getVideoTracks().forEach((e) => {
                e.onended = () => {
                    this.emit("desktopsourceend");
                };
            }),
            (this.id = e.getVideoTracks()[0].label),
            (this.stream = e),
            (this.streamId = (0, i.ju)(e)),
            (this.pool = t);
    }
}
