n.d(t, { Z: () => p }), n(411104);
var r = n(836560),
    i = n(259443),
    o = n(740197),
    a = n(106617),
    s = n(290488),
    l = n(830795),
    c = n(65154),
    u = n(231338);
function d(e, t, n) {
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
let f = new i.Yd('Output'),
    _ = new a.Z();
class p extends r.EventEmitter {
    destroy() {
        var e, t, n;
        this.removeAllListeners(), null == (e = (t = this).cleanup) || e.call(t), this.reset(), null != this.stream && (_.release(this.stream), (this.stream = void 0)), null == (n = this._audioFilter) || n.dispose(), (this._audioFilter = void 0), (this.destroyed = !0);
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
        if (null == this.stream) throw Error('AudioInput: No MediaStream');
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
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)), null != this.stream && (_.release(this.stream), (this.stream = void 0));
        let e = await (0, o.Hg)(),
            t = {
                echoCancellation: this.echoCancellation,
                noiseSuppression: this.noiseSuppression,
                autoGainControl: this.automaticGainControl
            };
        e.some((e) => e.id === this.sourceId) && (t.deviceId = this.sourceId);
        try {
            let e = await _.acquire({ audio: t });
            if (this.destroyed) throw (_.release(e), Error('AudioInput: Already destroyed'));
            if (this._noiseCancellation)
                try {
                    let t = await (0, s.n)();
                    (this._audioFilter = await t.createNoiseFilter(this.context)),
                        this._audioFilter.addEventListener('ready', (e) => {
                            var t;
                            null == (t = this._audioFilter) || t.enable();
                        }),
                        this._audioFilter.addEventListener('dispose', (t) => {
                            _.release(e);
                        });
                    let n = this.context.createMediaStreamSource(e),
                        r = this.context.createMediaStreamDestination();
                    n.connect(this._audioFilter), this._audioFilter.connect(r), (this.stream = r.stream);
                } catch (t) {
                    f.error('failure creating krisp node'), f.error(t), (this.stream = e);
                }
            else this.stream = e;
            return this.updateMode(), this.updateAudioTracks(), this.emit('permission', !0), this.emit('stream', this.stream), e;
        } catch (e) {
            if ('string' != typeof e)
                switch (e.name) {
                    case 'PermissionDeniedError':
                    case 'NotAllowedError':
                        throw (this.emit('permission', !1), u.ET.PERMISSION_DENIED);
                    case 'PermissionDismissedError':
                        throw (this.emit('permission', !1), u.ET.PERMISSION_DISMISSED);
                    case 'DevicesNotFoundError':
                    case 'NotFoundError':
                        throw u.ET.NO_DEVICES_FOUND;
                    default:
                        throw e.name || 'UNKNOWN';
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
                (null != this.pttReleaseDelayTimeout && (window.clearTimeout(this.pttReleaseDelayTimeout), (this.pttReleaseDelayTimeout = void 0)),
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
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)), null != this.stream && this.mode === c.pM.VOICE_ACTIVITY && (this.cleanup = this.setupVoiceActivity(this.modeOptions));
    }
    setupVoiceActivity(e) {
        let { threshold: t } = e;
        if (null == this.stream) throw Error('stream cannot be null');
        null == t && (t = -40);
        let n = new l.Z(this.context, this.stream, t);
        return (
            (n.onProcess = (e, t) => {
                this.mute || this.setSpeaking(e), this.emit('voiceactivity', t);
            }),
            () => {
                null != n && (n.stop(), (n = null), this.setSpeaking(!1));
            }
        );
    }
    setSpeaking(e) {
        this.speaking !== e && ((this.speaking = e), this.emit('speaking', e));
    }
    updateAudioTracks() {
        if (null != this.stream) {
            let e = this.stream.getAudioTracks();
            for (let t = 0, n = e.length; t < n; t++) e[t].enabled = !this._mute;
        }
    }
    constructor(e) {
        super(),
            d(this, 'stream', void 0),
            d(this, 'context', void 0),
            d(this, 'sourceId', void 0),
            d(this, '_mute', !1),
            d(this, '_echoCancellation', !0),
            d(this, '_noiseSuppression', !0),
            d(this, '_automaticGainControl', !0),
            d(this, '_noiseCancellation', !1),
            d(this, '_audioFilter', void 0),
            d(this, 'speaking', !1),
            d(this, 'mode', c.pM.VOICE_ACTIVITY),
            d(this, 'modeOptions', {
                delay: 20,
                threshold: -40
            }),
            d(this, 'cleanup', void 0),
            d(this, 'pttReleaseDelayTimeout', void 0),
            d(this, 'destroyed', !1),
            (this.context = e);
    }
}
