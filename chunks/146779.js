n.r(t),
    n.d(t, {
        ExperimentalWebAudioSound: () => I,
        WebAudioAPISound: () => y,
        WebAudioSound: () => v,
        playGiftSound: () => g
    }),
    n(47120),
    n(411104);
var i = n(392711),
    r = n.n(i),
    a = n(292619),
    s = n(304809),
    o = n(22382),
    l = n(747071),
    u = n(131951),
    c = n(358085);
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
let f = 'default',
    _ = f,
    p = new Map();
async function h(e) {
    let t = await fetch(n(451343)('./'.concat(e, '.mp3'))),
        i = await t.arrayBuffer();
    return (0, s.N)().decodeAudioData(i);
}
function m(e) {
    let t = p.get(e);
    return null == t && ((t = h(e)), p.set(e, t)), t;
}
function g(e, t) {
    let n = new Audio((0, o.Z)(e));
    (n.volume = (0, l.Z)(t)), n.play();
}
function E() {
    null != window.navigator.mediaDevices &&
        window.navigator.mediaDevices
            .enumerateDevices()
            .then((e) => {
                let t = u.Z.getOutputDevices(),
                    n = r()(t)
                        .sortBy((e) => e.index)
                        .findIndex((e) => e.id === u.Z.getOutputDeviceId()),
                    i = t[u.Z.getOutputDeviceId()],
                    a = e.filter((e) => 'audiooutput' === e.kind && 'communications' !== e.deviceId),
                    s = a[n];
                null != i && (null == s || s.label !== i.name) && (s = a.find((e) => e.label === i.name)), (_ = null != s ? s.deviceId : f);
            })
            .catch(() => {
                _ = f;
            });
}
c.isPlatformEmbedded && (u.Z.addChangeListener(E), E());
let v = class {
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
            null === (e = this._audio) || void 0 === e || e.then((e) => e.pause());
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
                    null !== (e = this._audio) && void 0 !== e
                        ? e
                        : new Promise((e, t) => {
                              let i = new Audio();
                              (i.src = n(451343)('./'.concat(this.name, '.mp3'))),
                                  (i.onloadeddata = () => {
                                      (i.volume = Math.min((u.Z.getOutputVolume() / 100) * this._volume, 1)), c.isPlatformEmbedded && i.setSinkId(_), e(i);
                                  }),
                                  (i.onerror = () => t(Error('could not play audio'))),
                                  (i.onended = () => this.destroyAudio()),
                                  i.load();
                          })),
                this._audio
            );
        }
        constructor(e, t, n) {
            d(this, 'name', void 0), d(this, '_volume', void 0), d(this, '_audio', void 0), (this.name = e), (this._volume = n);
        }
    },
    y = class {
        get volume() {
            return this._volume;
        }
        set volume(e) {
            this.ensureAudio().then((t) => {
                let { gainNode: n, context: i } = t;
                (this._volume = e), n.gain.setValueAtTime(e, i.currentTime);
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
                let e = Math.min((u.Z.getOutputVolume() / 100) * this._volume, 1);
                this._ensureAudioPromise = m(this.name)
                    .then((t) =>
                        null == t
                            ? Promise.reject(Error('Failed to load audio: '.concat(this.name)))
                            : ((this._audioContext = (0, s.N)()),
                              (this._gain = new GainNode(this._audioContext)),
                              (this._gain.gain.value = e),
                              c.isPlatformEmbedded && this._audioContext.setSinkId(_),
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
                              }))
                    )
                    .catch(() => Promise.reject(Error('Failed to load audio: '.concat(this.name))));
            }
            return await this._ensureAudioPromise;
        }
        constructor(e, t, n) {
            d(this, 'name', void 0), d(this, '_volume', void 0), d(this, '_audioContext', void 0), d(this, '_buffer', void 0), d(this, '_source', void 0), d(this, '_gain', void 0), d(this, '_state', void 0), d(this, '_ensureAudioPromise', void 0), (this.name = e), (this._volume = n), (this._audioContext = null), (this._buffer = null), (this._source = null), (this._state = 'stopped'), (this._ensureAudioPromise = null);
        }
    };
class I {
    shouldUseWebAudioApi() {
        return (0, a.w)({ location: 'SoundUtils' });
    }
    getActiveSoundAPI() {
        return this.shouldUseWebAudioApi() ? this.webAudioAPISound : this.webAudioSound;
    }
    get volume() {
        return this.getActiveSoundAPI().volume;
    }
    set volume(e) {
        null != this.webAudioSound && (this.webAudioSound.volume = e), null != this.webAudioAPISound && (this.webAudioAPISound.volume = e);
    }
    loop() {
        this.getActiveSoundAPI().loop();
    }
    play() {
        this.getActiveSoundAPI().play();
    }
    pause() {
        this.getActiveSoundAPI().pause();
    }
    stop() {
        this.getActiveSoundAPI().stop();
    }
    playWithListener() {
        return this.getActiveSoundAPI().playWithListener();
    }
    constructor(e, t, n) {
        d(this, 'webAudioSound', void 0), d(this, 'webAudioAPISound', void 0), (this.webAudioSound = new v(e, t, n)), (this.webAudioAPISound = new y(e, t, n)), (this.volume = n);
    }
}
