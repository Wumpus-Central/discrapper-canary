"use strict";
n.d(t, { A: () => f });
var r = n(143236),
    i = n(118356),
    s = n(277738),
    a = n(256398),
    o = n(938866),
    l = n(956446),
    u = n(731854),
    c = n(818348);
let d = new i.Vy("Output"),
    _ = new a.A();
class f extends r.EventEmitter {
    stream;
    context;
    sourceId;
    _mute = !1;
    _echoCancellation = !0;
    _noiseSuppression = !0;
    _automaticGainControl = !0;
    _noiseCancellation = !1;
    _audioFilter = void 0;
    speaking = !1;
    mode = u.TB.VOICE_ACTIVITY;
    modeOptions = { delay: 20, threshold: -40 };
    cleanup;
    pttReleaseDelayTimeout;
    destroyed = !1;
    constructor(e) {
        super(), (this.context = e);
    }
    destroy() {
        this.removeAllListeners(),
            this.cleanup?.(),
            this.reset(),
            null != this.stream && (_.release(this.stream), (this.stream = void 0)),
            this._audioFilter?.dispose(),
            (this._audioFilter = void 0),
            (this.destroyed = !0);
    }
    reset() {
        this.setSpeaking(!1);
    }
    resume() {
        this.context.resume();
    }
    get state() {
        return this.context.state;
    }
    getDelayedStream() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.2,
            t = this.context;
        if (null == this.stream) throw Error("AudioInput: No MediaStream");
        let n = t.createDelay(e);
        (n.delayTime.value = e), t.createMediaStreamSource(this.stream).connect(n);
        let r = t.createMediaStreamDestination();
        return n.connect(r), r.stream;
    }
    get mute() {
        return this._mute;
    }
    set mute(e) {
        (this._mute = e), this.updateAudioTracks(), this.setSpeaking(!1);
    }
    get echoCancellation() {
        return this._echoCancellation;
    }
    set echoCancellation(e) {
        this._echoCancellation !== e && ((this._echoCancellation = e), null != this.stream && this.enable());
    }
    get noiseSuppression() {
        return this._noiseSuppression;
    }
    set noiseSuppression(e) {
        this._noiseSuppression !== e && ((this._noiseSuppression = e), null != this.stream && this.enable());
    }
    get noiseCancellation() {
        return this._noiseCancellation;
    }
    set noiseCancellation(e) {
        this._noiseCancellation !== e && ((this._noiseCancellation = e), null != this.stream && this.enable());
    }
    get automaticGainControl() {
        return this._automaticGainControl;
    }
    set automaticGainControl(e) {
        this._automaticGainControl !== e && ((this._automaticGainControl = e), null != this.stream && this.enable());
    }
    async enable() {
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)),
            null != this.stream && (_.release(this.stream), (this.stream = void 0));
        let e = await (0, s._e)(),
            t = {
                echoCancellation: this.echoCancellation,
                noiseSuppression: this.noiseSuppression,
                autoGainControl: this.automaticGainControl,
            };
        e.some((e) => e.id === this.sourceId) && (t.deviceId = { exact: this.sourceId });
        try {
            let e = await _.acquire({ audio: t });
            if (this.destroyed) throw (_.release(e), Error("AudioInput: Already destroyed"));
            if (this._noiseCancellation)
                try {
                    let t = await (0, o.e)();
                    (this._audioFilter = await t.createNoiseFilter(this.context)),
                        this._audioFilter.addEventListener("ready", (e) => {
                            this._audioFilter?.enable();
                        }),
                        this._audioFilter.addEventListener("dispose", (t) => {
                            _.release(e);
                        });
                    let n = this.context.createMediaStreamSource(e),
                        r = this.context.createMediaStreamDestination();
                    n.connect(this._audioFilter), this._audioFilter.connect(r), (this.stream = r.stream);
                } catch (t) {
                    d.error("failure creating krisp node"), d.error(t), (this.stream = e);
                }
            else this.stream = e;
            return (
                this.updateMode(),
                this.updateAudioTracks(),
                this.emit("permission", !0),
                this.emit("stream", this.stream),
                e
            );
        } catch (e) {
            if ("string" != typeof e)
                switch (e.name) {
                    case "PermissionDeniedError":
                    case "NotAllowedError":
                        throw (this.emit("permission", !1), c.xe.PERMISSION_DENIED);
                    case "PermissionDismissedError":
                        throw (this.emit("permission", !1), c.xe.PERMISSION_DISMISSED);
                    case "DevicesNotFoundError":
                    case "NotFoundError":
                        throw c.xe.NO_DEVICES_FOUND;
                    default:
                        throw e.name || "UNKNOWN";
                }
            throw e;
        }
    }
    setSource(e) {
        this.sourceId !== e && ((this.sourceId = e), null != this.stream && this.enable());
    }
    setPTTActive(e) {
        this.mute ||
            (this.speaking !== e &&
                (null != this.pttReleaseDelayTimeout &&
                    (window.clearTimeout(this.pttReleaseDelayTimeout), (this.pttReleaseDelayTimeout = void 0)),
                e
                    ? this.setSpeaking(e)
                    : (this.pttReleaseDelayTimeout = window.setTimeout(() => {
                          this.setSpeaking(!1), (this.pttReleaseDelayTimeout = void 0);
                      }, this.modeOptions.delay))));
    }
    setMode(e, t) {
        (this.mode = e), (this.modeOptions = t), null != this.stream && this.enable();
    }
    updateMode() {
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)),
            null != this.stream &&
                this.mode === u.TB.VOICE_ACTIVITY &&
                (this.cleanup = this.setupVoiceActivity(this.modeOptions));
    }
    setupVoiceActivity(e) {
        let { threshold: t } = e;
        if (null == this.stream) throw Error("stream cannot be null");
        null == t && (t = -40);
        let n = new l.A(this.context, this.stream, t);
        return (
            (n.onProcess = (e, t) => {
                this.mute || this.setSpeaking(e), this.emit("voiceactivity", t);
            }),
            () => {
                null != n && (n.stop(), (n = null), this.setSpeaking(!1));
            }
        );
    }
    setSpeaking(e) {
        this.speaking !== e && ((this.speaking = e), this.emit("speaking", e));
    }
    updateAudioTracks() {
        if (null != this.stream) {
            let e = this.stream.getAudioTracks();
            for (let t = 0, n = e.length; t < n; t++) e[t].enabled = !this._mute;
        }
    }
}
