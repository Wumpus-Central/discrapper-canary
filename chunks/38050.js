"use strict";
n.d(t, { n: () => o });
var r = n(353640),
    i = n(499867),
    s = n(998740),
    a = n(572808);
let o = (0, r.v)()(
    (0, i.Zr)(
        (e, t) => ({
            songIndex: 0,
            genre: a.TU.SLEEPY,
            playRadio: !0,
            globalMute: !1,
            volumes: { radio: 0.2, environment: 0.2, campfire: 0.2 },
            setSongIndex: (t) => e({ songIndex: t }),
            setGenre: (t) => e({ genre: t, songIndex: 0 }),
            setPlayRadio: (t) => e({ playRadio: t }),
            setGlobalMute: (t) => e({ globalMute: t }),
            setVolume: (t, n) => e((e) => ({ volumes: { ...e.volumes, [t]: n } })),
            playNextSong: () => {
                let n = t(),
                    r = s.A.getSongs(n.genre);
                if (null == r) return;
                let i = r.length;
                0 === i || e({ songIndex: (n.songIndex + 1) % i });
            },
            playPrevSong: () => {
                let n = t(),
                    r = s.A.getSongs(n.genre);
                if (null == r) return;
                let i = r.length;
                0 === i || e({ songIndex: n.songIndex - 1 >= 0 ? n.songIndex - 1 : i - 1 });
            },
            resetPlayback: () => e({ songIndex: 0, playRadio: !0 }),
        }),
        {
            name: "haven-audio-storage",
            partialize: (e) => ({ globalMute: e.globalMute, genre: e.genre, volumes: e.volumes }),
        },
    ),
);
