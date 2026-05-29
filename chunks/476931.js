"use strict";
n.d(t, { BC: () => o, Yt: () => _, kI: () => f, oE: () => h });
var i = n(310784),
    r = n.n(i),
    s = n(818348);
let a = { TWILIGHT: 1, PLUM: 2, FIRE: 3, GOLD_DUST: 4, MOSS: 5, JADE: 6, OBSIDIAN: 7, OCEAN: 8, DENIM: 9, BLURPLE: 10 },
    o = 74;
function l(e, t, n) {
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
let u = [a.TWILIGHT, a.DENIM, a.OCEAN, a.BLURPLE, a.OBSIDIAN, a.PLUM, a.FIRE, a.GOLD_DUST, a.MOSS, a.JADE],
    c = {
        [a.TWILIGHT]: {
            id: a.TWILIGHT,
            darkAppearance: l("#7C547E", "#040A20", 30),
            lightAppearance: l("#FA9EFF", "#5A7EFE", 30),
        },
        [a.DENIM]: {
            id: a.DENIM,
            darkAppearance: l("#282F6A", "#040413", 100),
            lightAppearance: l("#DBDBFF", "#6060FF", 100),
        },
        [a.OCEAN]: {
            id: a.OCEAN,
            darkAppearance: l("#1D466F", "#0D0D24", 50),
            lightAppearance: l("#9ADBF7", "#2D3CCA", 50),
        },
        [a.BLURPLE]: {
            id: a.BLURPLE,
            darkAppearance: l("#5541A3", "#0E0C13", 60),
            lightAppearance: l("#C3BFFF", "#816BDC", 60),
        },
        [a.OBSIDIAN]: {
            id: a.OBSIDIAN,
            darkAppearance: l("#463C5F", "#05081A", 50),
            lightAppearance: l("#B59DF2", "#8F89D2", 50),
        },
        [a.PLUM]: {
            id: a.PLUM,
            darkAppearance: l("#51265D", "#1A0414", 35),
            lightAppearance: l("#E893FF", "#FFADDC", 35),
        },
        [a.FIRE]: {
            id: a.FIRE,
            darkAppearance: l("#421516", "#0B0913", 35),
            lightAppearance: l("#FFEBCA", "#FF8989", 35),
        },
        [a.GOLD_DUST]: {
            id: a.GOLD_DUST,
            darkAppearance: l("#4C3625", "#161311", 100),
            lightAppearance: l("#FFE7DA", "#FFD89B", 100),
        },
        [a.MOSS]: {
            id: a.MOSS,
            darkAppearance: l("#394232", "#10150E", 100),
            lightAppearance: l("#B7D19F", "#B1DCA4", 100),
        },
        [a.JADE]: {
            id: a.JADE,
            darkAppearance: l("#1B4849", "#080816", 50),
            lightAppearance: l("#C5F0D2", "#60ADB2", 50),
        },
    },
    d = new Set(Object.values(a));
function _(e) {
    return null != e && d.has(e) ? c[e] : null;
}
function h(e, t) {
    return t === s.NJ.LIGHT ? e.lightAppearance : e.darkAppearance;
}
function f(e) {
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
u.map((e) => c[e]);
