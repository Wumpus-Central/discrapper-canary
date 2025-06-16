n.r(t),
    n.d(t, {
        WebAudioSound: () => b,
        playGiftSound: () => g,
        voiceSinkId: () => h
    }),
    n(35282),
    n(415506);
var r = n(392711),
    i = n.n(r),
    a = n(856901),
    o = n(22382),
    s = n(747071),
    l = n(131951),
    c = n(358085),
    u = n(509571);
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
    _ = 0.6,
    p = /^( Device)?( \([^()]+\))+$/,
    h = f;
function m(e, t) {
    return !!t.startsWith(e) && null != t.substring(e.length).match(p);
}
function g(e, t) {
    let n = new Audio((0, o.Z)(e));
    (n.volume = (0, s.Z)(t)), n.play();
}
async function E() {
    if (null != window.navigator.mediaDevices)
        try {
            var e;
            let t = await window.navigator.mediaDevices.enumerateDevices(),
                n = l.Z.getOutputDevices(),
                r = i()(n)
                    .sortBy((e) => e.index)
                    .findIndex((e) => e.id === l.Z.getOutputDeviceId()),
                o = n[l.Z.getOutputDeviceId()];
            if (null == o) {
                h = f;
                return;
            }
            let s = t.filter((e) => 'audiooutput' === e.kind && 'communications' !== e.deviceId),
                c = s[r];
            if (m(o.name, null != (e = null == c ? void 0 : c.label) ? e : '')) {
                h = c.deviceId;
                return;
            }
            if (((c = i()(s).maxBy((e) => (0, a.stringSimilarity)(e.label, o.name))), null == c || (0, a.stringSimilarity)(c.label, o.name) < _)) {
                h = f;
                return;
            }
            h = c.deviceId;
        } catch (e) {
            h = f;
        }
}
c.isPlatformEmbedded && (l.Z.addChangeListener(E), E());
let b = class {
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
                                  (r.volume = Math.min((l.Z.getOutputVolume() / 100) * this._volume, 1)), c.isPlatformEmbedded && r.setSinkId(this.outputChannel === u.w.DEFAULT ? f : h), e(r);
                              }),
                              (r.onerror = () => t(Error('could not play audio'))),
                              (r.onended = () => this.destroyAudio()),
                              r.load();
                      })),
            this._audio
        );
    }
    constructor(e, t, n, r) {
        d(this, 'name', void 0), d(this, '_volume', void 0), d(this, '_audio', void 0), d(this, 'outputChannel', void 0), (this.name = e), (this._volume = n), (this.outputChannel = r);
    }
};
