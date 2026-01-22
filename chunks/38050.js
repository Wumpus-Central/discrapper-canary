n.d(t, { n: () => f });
var r = n(353640),
    i = n(499867),
    a = n(998740),
    s = n(572808);
function o(e, t, n) {
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
function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = 0.2,
    f = (0, r.v)()(
        (0, i.Zr)(
            (e, t) => ({
                songIndex: 0,
                genre: s.TU.SLEEPY,
                playRadio: !0,
                globalMute: !1,
                volumes: {
                    radio: d,
                    environment: d,
                    campfire: d,
                },
                setSongIndex: (t) => e({ songIndex: t }),
                setGenre: (t) =>
                    e({
                        genre: t,
                        songIndex: 0,
                    }),
                setPlayRadio: (t) => e({ playRadio: t }),
                setGlobalMute: (t) => e({ globalMute: t }),
                setVolume: (t, n) => e((e) => ({ volumes: u(l({}, e.volumes), { [t]: n }) })),
                playNextSong: () => {
                    let n = t(),
                        r = a.A.getSongs(n.genre);
                    if (null == r) return;
                    let i = r.length;
                    0 === i || e({ songIndex: (n.songIndex + 1) % i });
                },
                playPrevSong: () => {
                    let n = t(),
                        r = a.A.getSongs(n.genre);
                    if (null == r) return;
                    let i = r.length;
                    0 === i || e({ songIndex: n.songIndex - 1 >= 0 ? n.songIndex - 1 : i - 1 });
                },
                resetPlayback: () =>
                    e({
                        songIndex: 0,
                        playRadio: !0,
                    }),
            }),
            {
                name: "haven-audio-storage",
                partialize: (e) => ({
                    globalMute: e.globalMute,
                    genre: e.genre,
                    volumes: e.volumes,
                }),
            },
        ),
    );
