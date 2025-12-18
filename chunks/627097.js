n.d(t, { O: () => d });
var r = n(663042),
    i = n(690775),
    a = n(390551);
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 0.2,
    d = (0, r.U)()(
        (0, i.tJ)(
            (e, t) => ({
                songIndex: 0,
                genre: a.AL.SLEEPY,
                playRadio: !0,
                globalMute: !1,
                volumes: {
                    radio: u,
                    environment: u,
                    campfire: u,
                },
                setSongIndex: (t) => e({ songIndex: t }),
                setGenre: (t) =>
                    e({
                        genre: t,
                        songIndex: 0,
                    }),
                setPlayRadio: (t) => e({ playRadio: t }),
                setGlobalMute: (t) => e({ globalMute: t }),
                setVolume: (t, n) => e((e) => ({ volumes: c(s({}, e.volumes), { [t]: n }) })),
                playNextSong: () => {
                    let n = t(),
                        r = a.at[n.genre].length;
                    0 !== r && e({ songIndex: (n.songIndex + 1) % r });
                },
                playPrevSong: () => {
                    let n = t(),
                        r = a.at[n.genre].length;
                    0 !== r && e({ songIndex: n.songIndex - 1 >= 0 ? n.songIndex - 1 : r - 1 });
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
