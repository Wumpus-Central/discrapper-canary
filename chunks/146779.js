n.r(t),
    n.d(t, {
        WebAudioAPISound: () => S,
        WebAudioSound: () => I,
        playGiftSound: () => v,
        voiceSinkId: () => m
    }),
    n(47120),
    n(301563),
    n(411104);
var r = n(392711),
    i = n.n(r),
    o = n(856901),
    a = n(304809),
    s = n(22382),
    l = n(747071),
    c = n(131951),
    u = n(358085),
    d = n(509571);
function f(e, t, n) {
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
let _ = 'default',
    p = 0.6,
    h = /^( Device)?( \([^()]+\))+$/,
    m = _,
    g = new Map();
async function E(e) {
    let t = await fetch(n(451343)('./'.concat(e, '.mp3'))),
        r = await t.arrayBuffer();
    return (0, a.N)().decodeAudioData(r);
}
function b(e) {
    let t = g.get(e);
    return null == t && ((t = E(e)), g.set(e, t)), t;
}
function y(e, t) {
    return !!t.startsWith(e) && null != t.substring(e.length).match(h);
}
function v(e, t) {
    let n = new Audio((0, s.Z)(e));
    (n.volume = (0, l.Z)(t)), n.play();
}
async function O() {
    if (null != window.navigator.mediaDevices)
        try {
            var e;
            let t = await window.navigator.mediaDevices.enumerateDevices(),
                n = c.Z.getOutputDevices(),
                r = i()(n)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === c.Z.getOutputDeviceId()),
                a = n[c.Z.getOutputDeviceId()];
            if (null == a) {
                m = _;
                return;
            }
            let s = t.filter((e) => 'audiooutput' === e.kind && 'communications' !== e.deviceId),
                l = s[r];
            if (y(a.name, null != (e = null == l ? void 0 : l.label) ? e : '')) {
                m = l.deviceId;
                return;
            }
            if (((l = i()(s).maxBy((e) => (0, o.stringSimilarity)(e.label, a.name))), null == l || (0, o.stringSimilarity)(l.label, a.name) < p)) {
                m = _;
                return;
            }
            m = l.deviceId;
        } catch (e) {
            m = _;
        }
}
u.isPlatformEmbedded && (c.Z.addChangeListener(O), O());
let I = class {
        get volume() {
            return this._volume;
        }
        set volume(e) {
            (this._volume = e), this.ensureAudio().then((t) => (t.volume = e));
        }
        loop() {
            this.ensureAudio().then((e) => {
                (e.loop = !0), e.play();
            });
        }
        play() {
            this.ensureAudio().then((e) => {
                (e.loop = !1), e.play();
            });
        }
        pause() {
            var e;
            null == (e = this._audio) || e.then((e) => e.pause());
        }
        stop() {
            this.destroyAudio();
        }
        playWithListener() {
            return new Promise((e, t) => {
                this.ensureAudio().then((n) => {
                    (null == n.duration || 0 === n.duration) && t('sound has no duration'),
                        n.play(),
                        setTimeout(() => {
                            e(!0);
                        }, n.duration);
                });
            });
        }
        destroyAudio() {
            null != this._audio &&
                (this._audio.then((e) => {
                    e.pause(), (e.src = '');
                }),
                (this._audio = null));
        }
        ensureAudio() {
            var e;
            return (
                (this._audio =
                    null != (e = this._audio)
                        ? e
                        : new Promise((e, t) => {
                              let r = new Audio();
                              (r.src = n(451343)('./'.concat(this.name, '.mp3'))),
                                  (r.onloadeddata = () => {
                                      (r.volume = Math.min((c.Z.getOutputVolume() / 100) * this._volume, 1)), u.isPlatformEmbedded && r.setSinkId(this.outputChannel === d.w.DEFAULT ? _ : m), e(r);
                                  }),
                                  (r.onerror = () => t(Error('could not play audio'))),
                                  (r.onended = () => this.destroyAudio()),
                                  r.load();
                          })),
                this._audio
            );
        }
        constructor(e, t, n, r) {
            f(this, 'name', void 0), f(this, '_volume', void 0), f(this, '_audio', void 0), f(this, 'outputChannel', void 0), (this.name = e), (this._volume = n), (this.outputChannel = r);
        }
    },
    S = class {
        get volume() {
            return this._volume;
        }
        set volume(e) {
            this.ensureAudio().then((t) => {
                let { gainNode: n, context: r } = t;
                (this._volume = e), n.gain.setValueAtTime(e, r.currentTime);
            });
        }
        loop() {
            'looping' !== this._state &&
                ((this._state = 'looping'),
                this.ensureAudio().then((e) => {
                    let { source: t } = e;
                    'looping' === this._state && ((t.loop = !0), t.start());
                }));
        }
        play() {
            'playing' !== this._state &&
                ((this._state = 'playing'),
                this.ensureAudio().then((e) => {
                    let { source: t } = e;
                    'playing' === this._state && ((t.loop = !1), t.start());
                }));
        }
        playWithListener() {
            return new Promise((e, t) => {
                this.ensureAudio().then((t) => {
                    let { source: n } = t;
                    n.addEventListener(
                        'ended',
                        () => {
                            e(!0);
                        },
                        { once: !0 }
                    ),
                        this.play();
                });
            });
        }
        pause() {
            'paused' !== this._state &&
                ((this._state = 'paused'),
                this.ensureAudio().then((e) => {
                    let { source: t } = e;
                    'paused' === this._state && (t.stop(), (this._state = 'paused'));
                }));
        }
        stop() {
            this.destroyAudio();
        }
        destroyAudio() {
            'stopped' !== this._state &&
                ((this._state = 'stopped'),
                this.ensureAudio().then((e) => {
                    let { source: t } = e;
                    'stopped' === this._state && (t.disconnect(), t.stop(), (this._source = null), (this._buffer = null), (this._state = 'stopped'), (this._ensureAudioPromise = null));
                }));
        }
        async ensureAudio() {
            if (null == this._ensureAudioPromise) {
                let e = Math.min((c.Z.getOutputVolume() / 100) * this._volume, 1);
                this._ensureAudioPromise = b(this.name)
                    .then((t) => {
                        if (null == t) return Promise.reject(Error('Failed to load audio: '.concat(this.name)));
                        if (((this._audioContext = (0, a.N)()), (this._gain = new GainNode(this._audioContext)), (this._gain.gain.value = e), u.isPlatformEmbedded)) {
                            var n, r;
                            null == (n = (r = this._audioContext).setSinkId) || n.call(r, this.outputChannel === d.w.DEFAULT ? _ : m);
                        }
                        return (
                            (this._buffer = t),
                            (this._source = this._audioContext.createBufferSource()),
                            (this._source.buffer = t),
                            this._source.connect(this._gain).connect(this._audioContext.destination),
                            (this._source.loop = !1),
                            (this._source.onended = () => this.destroyAudio()),
                            Promise.resolve({
                                context: this._audioContext,
                                gainNode: this._gain,
                                source: this._source
                            })
                        );
                    })
                    .catch(() => Promise.reject(Error('Failed to load audio: '.concat(this.name))));
            }
            return await this._ensureAudioPromise;
        }
        constructor(e, t, n, r) {
            f(this, 'name', void 0), f(this, '_volume', void 0), f(this, '_audioContext', void 0), f(this, '_buffer', void 0), f(this, '_source', void 0), f(this, '_gain', void 0), f(this, '_state', void 0), f(this, 'outputChannel', void 0), f(this, '_ensureAudioPromise', void 0), (this.name = e), (this._volume = n), (this._audioContext = null), (this._buffer = null), (this._source = null), (this._state = 'stopped'), (this._ensureAudioPromise = null), (this.outputChannel = r);
        }
    };
