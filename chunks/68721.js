r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(411104);
var a = r(836560);
var o = r(259443),
    s = r(740197),
    l = r(106617),
    u = r(290488),
    c = r(830795),
    d = r(65154),
    f = r(231338);
function p(e, n, r) {
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
let h = new o.Yd('Output'),
    _ = new l.Z();
class m extends a.EventEmitter {
    destroy() {
        var e, n, r;
        this.removeAllListeners(), null === (e = (n = this).cleanup) || void 0 === e || e.call(n), this.reset(), null != this.stream && (_.release(this.stream), (this.stream = void 0)), null === (r = this._audioFilter) || void 0 === r || r.dispose(), (this._audioFilter = void 0), (this.destroyed = !0);
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
            n = this.context;
        if (null == this.stream) throw Error('AudioInput: No MediaStream');
        let r = n.createDelay(e);
        (r.delayTime.value = e), n.createMediaStreamSource(this.stream).connect(r);
        let i = n.createMediaStreamDestination();
        return r.connect(i), i.stream;
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
        let e = await (0, s.Hg)(),
            n = {
                echoCancellation: this.echoCancellation,
                noiseSuppression: this.noiseSuppression,
                autoGainControl: this.automaticGainControl
            };
        e.some((e) => e.id === this.sourceId) && (n.deviceId = this.sourceId);
        try {
            let e = await _.acquire({ audio: n });
            if (this.destroyed) throw (_.release(e), Error('AudioInput: Already destroyed'));
            if (this._noiseCancellation)
                try {
                    let n = await (0, u.n)();
                    (this._audioFilter = await n.createNoiseFilter(this.context)),
                        this._audioFilter.addEventListener('ready', (e) => {
                            var n;
                            null === (n = this._audioFilter) || void 0 === n || n.enable();
                        }),
                        this._audioFilter.addEventListener('dispose', (n) => {
                            _.release(e);
                        });
                    let r = this.context.createMediaStreamSource(e),
                        i = this.context.createMediaStreamDestination();
                    r.connect(this._audioFilter), this._audioFilter.connect(i), (this.stream = i.stream);
                } catch (n) {
                    h.error('failure creating krisp node'), h.error(n), (this.stream = e);
                }
            else this.stream = e;
            return this.updateMode(), this.updateAudioTracks(), this.emit('permission', !0), this.emit('stream', this.stream), e;
        } catch (e) {
            if ('string' != typeof e)
                switch (e.name) {
                    case 'PermissionDeniedError':
                    case 'NotAllowedError':
                        throw (this.emit('permission', !1), f.ET.PERMISSION_DENIED);
                    case 'PermissionDismissedError':
                        throw (this.emit('permission', !1), f.ET.PERMISSION_DISMISSED);
                    case 'DevicesNotFoundError':
                    case 'NotFoundError':
                        throw f.ET.NO_DEVICES_FOUND;
                    default:
                        throw e.name || 'UNKNOWN';
                }
            throw e;
        }
    }
    setSource(e) {
        if (this.sourceId !== e) (this.sourceId = e), null != this.stream && this.enable();
    }
    setPTTActive(e) {
        if (!this.mute && this.speaking !== e)
            null != this.pttReleaseDelayTimeout && (window.clearTimeout(this.pttReleaseDelayTimeout), (this.pttReleaseDelayTimeout = void 0)),
                e
                    ? this.setSpeaking(e)
                    : (this.pttReleaseDelayTimeout = window.setTimeout(() => {
                          this.setSpeaking(!1), (this.pttReleaseDelayTimeout = void 0);
                      }, this.modeOptions.delay));
    }
    setMode(e, n) {
        (this.mode = e), (this.modeOptions = n), null != this.stream && this.enable();
    }
    updateMode() {
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)), null != this.stream && this.mode === d.pM.VOICE_ACTIVITY && (this.cleanup = this.setupVoiceActivity(this.modeOptions));
    }
    setupVoiceActivity(e) {
        let { threshold: n } = e;
        if (null == this.stream) throw Error('stream cannot be null');
        null == n && (n = -40);
        let r = new c.Z(this.context, this.stream, n);
        return (
            (r.onProcess = (e, n) => {
                !this.mute && this.setSpeaking(e), this.emit('voiceactivity', n);
            }),
            () => {
                null != r && (r.stop(), (r = null), this.setSpeaking(!1));
            }
        );
    }
    setSpeaking(e) {
        this.speaking !== e && ((this.speaking = e), this.emit('speaking', e));
    }
    updateAudioTracks() {
        if (null != this.stream) {
            let e = this.stream.getAudioTracks();
            for (let n = 0, r = e.length; n < r; n++) e[n].enabled = !this._mute;
        }
    }
    constructor(e) {
        super(),
            p(this, 'stream', void 0),
            p(this, 'context', void 0),
            p(this, 'sourceId', void 0),
            p(this, '_mute', !1),
            p(this, '_echoCancellation', !0),
            p(this, '_noiseSuppression', !0),
            p(this, '_automaticGainControl', !0),
            p(this, '_noiseCancellation', !1),
            p(this, '_audioFilter', void 0),
            p(this, 'speaking', !1),
            p(this, 'mode', d.pM.VOICE_ACTIVITY),
            p(this, 'modeOptions', {
                delay: 20,
                threshold: -40
            }),
            p(this, 'cleanup', void 0),
            p(this, 'pttReleaseDelayTimeout', void 0),
            p(this, 'destroyed', !1),
            (this.context = e);
    }
}
