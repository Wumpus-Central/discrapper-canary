"use strict";
n.d(t, {
    BC: () => o,
    Qy: () => m,
    U6: () => A,
    XY: () => S,
    Yt: () => E,
    Z8: () => a,
    Zq: () => p,
    _k: () => y,
    a0: () => l,
    iq: () => c,
    kI: () => I,
    oE: () => g,
    sR: () => N,
    wS: () => u,
});
var i = n(310784),
    r = n.n(i),
    s = n(818348);
let a = { TWILIGHT: 1, PLUM: 2, FIRE: 3, GOLD_DUST: 4, MOSS: 5, JADE: 6, OBSIDIAN: 7, OCEAN: 8, DENIM: 9, BLURPLE: 10 },
    o = 74,
    l = "#5865F2",
    u = 15,
    c = 75;
function d(e, t, n) {
    return {
        color: e,
        angle: 0,
        baseMix: n,
        colors: [
            { hex: e, stop: 0 },
            { hex: t, stop: 100 },
        ],
    };
}
let _ = [a.TWILIGHT, a.DENIM, a.OCEAN, a.BLURPLE, a.OBSIDIAN, a.PLUM, a.FIRE, a.GOLD_DUST, a.MOSS, a.JADE],
    h = {
        [a.TWILIGHT]: {
            id: a.TWILIGHT,
            darkAppearance: d("#7C547E", "#040A20", 30),
            lightAppearance: d("#FA9EFF", "#5A7EFE", 30),
        },
        [a.DENIM]: {
            id: a.DENIM,
            darkAppearance: d("#282F6A", "#040413", 100),
            lightAppearance: d("#DBDBFF", "#6060FF", 100),
        },
        [a.OCEAN]: {
            id: a.OCEAN,
            darkAppearance: d("#1D466F", "#0D0D24", 50),
            lightAppearance: d("#9ADBF7", "#2D3CCA", 50),
        },
        [a.BLURPLE]: {
            id: a.BLURPLE,
            darkAppearance: d("#5541A3", "#0E0C13", 60),
            lightAppearance: d("#C3BFFF", "#816BDC", 60),
        },
        [a.OBSIDIAN]: {
            id: a.OBSIDIAN,
            darkAppearance: d("#463C5F", "#05081A", 50),
            lightAppearance: d("#B59DF2", "#8F89D2", 50),
        },
        [a.PLUM]: {
            id: a.PLUM,
            darkAppearance: d("#51265D", "#1A0414", 35),
            lightAppearance: d("#E893FF", "#FFADDC", 35),
        },
        [a.FIRE]: {
            id: a.FIRE,
            darkAppearance: d("#421516", "#0B0913", 35),
            lightAppearance: d("#FFEBCA", "#FF8989", 35),
        },
        [a.GOLD_DUST]: {
            id: a.GOLD_DUST,
            darkAppearance: d("#4C3625", "#161311", 100),
            lightAppearance: d("#FFE7DA", "#FFD89B", 100),
        },
        [a.MOSS]: {
            id: a.MOSS,
            darkAppearance: d("#394232", "#10150E", 100),
            lightAppearance: d("#B7D19F", "#B1DCA4", 100),
        },
        [a.JADE]: {
            id: a.JADE,
            darkAppearance: d("#1B4849", "#080816", 50),
            lightAppearance: d("#C5F0D2", "#60ADB2", 50),
        },
    },
    f = new Set(Object.values(a)),
    p = _.map((e) => h[e]);
function E(e) {
    return null != e && f.has(e) ? h[e] : null;
}
function m() {
    return { presetId: p[0].id, customUserThemeSettings: void 0 };
}
function g(e, t) {
    return t === s.NJ.LIGHT ? e.lightAppearance : e.darkAppearance;
}
function A(e, t) {
    let n = g(e, t),
        i = n.colors
            .map((e) => {
                let { hex: t, stop: n } = e;
                return `${t} ${n}%`;
            })
            .join(", ");
    return `linear-gradient(${n.angle}deg, ${i})`;
}
function I(e) {
    let t = r()(e),
        n = t.get("hsl.h"),
        i = t.get("hsl.s"),
        s = 100 * t.get("hsl.l"),
        a = Number.isNaN(n) ? 0 : n,
        o = Number.isNaN(i) ? 0.82 : i,
        l = Math.max(3, Math.min(18, 0.18 * s));
    return [
        t.hex(),
        r()
            .hsl(a, o, l / 100)
            .hex(),
    ];
}
function T(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
function S() {
    let e = T(0, 359),
        t = T(15, 45),
        n = T(70, 80);
    return {
        color: r()
            .hsl(e, 0.4, t / 100)
            .hex(),
        baseMix: n,
    };
}
function y(e, t) {
    return r()(e)
        .set("hsl.l", Math.max(u / 100, Math.min(c / 100, t / 100)))
        .hex();
}
function N(e, t) {
    return r()(e).set("hsl.h", t).hex();
}
