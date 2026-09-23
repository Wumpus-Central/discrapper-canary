n.d(t, {
    BC: () => o,
    It: () => R,
    Qy: () => p,
    U6: () => m,
    XY: () => N,
    Yt: () => f,
    Z8: () => l,
    Zq: () => I,
    _k: () => O,
    a0: () => d,
    iq: () => u,
    kI: () => g,
    oE: () => T,
    sR: () => y,
    w3: () => C,
    wS: () => c,
    z3: () => L,
});
var i = n(310784),
    r = n.n(i),
    a = n(935444),
    s = n(818348);
let l = { TWILIGHT: 1, PLUM: 2, FIRE: 3, GOLD_DUST: 4, MOSS: 5, JADE: 6, OBSIDIAN: 7, OCEAN: 8, DENIM: 9, BLURPLE: 10 },
    o = 74,
    d = "#5865F2",
    c = 15,
    u = 75;
function _(e, t, n) {
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
let E = [l.TWILIGHT, l.DENIM, l.OCEAN, l.BLURPLE, l.OBSIDIAN, l.PLUM, l.FIRE, l.GOLD_DUST, l.MOSS, l.JADE],
    A = {
        [l.TWILIGHT]: {
            id: l.TWILIGHT,
            darkAppearance: _("#69426A", "#111731", 100),
            lightAppearance: _("#FA9EFF", "#5A7EFE", 100),
        },
        [l.DENIM]: {
            id: l.DENIM,
            darkAppearance: _("#5359AD", "#121238", 100),
            lightAppearance: _("#DBDBFF", "#6060FF", 100),
        },
        [l.OCEAN]: {
            id: l.OCEAN,
            darkAppearance: _("#245B92", "#141D40", 100),
            lightAppearance: _("#9ADBF7", "#2D3CCA", 100),
        },
        [l.BLURPLE]: {
            id: l.BLURPLE,
            darkAppearance: _("#533D9E", "#1A1035", 100),
            lightAppearance: _("#C3BFFF", "#816BDC", 100),
        },
        [l.OBSIDIAN]: {
            id: l.OBSIDIAN,
            darkAppearance: _("#5E4C85", "#1E1740", 100),
            lightAppearance: _("#B59DF2", "#8F89D2", 100),
        },
        [l.PLUM]: {
            id: l.PLUM,
            darkAppearance: _("#8A3F7F", "#2C0D25", 100),
            lightAppearance: _("#E893FF", "#FFADDC", 100),
        },
        [l.FIRE]: {
            id: l.FIRE,
            darkAppearance: _("#9B2C2C", "#2A0C0C", 50),
            lightAppearance: _("#FFEBCA", "#FF8989", 50),
        },
        [l.GOLD_DUST]: {
            id: l.GOLD_DUST,
            darkAppearance: _("#6C523D", "#241912", 50),
            lightAppearance: _("#FFE7DA", "#FFD89B", 50),
        },
        [l.MOSS]: {
            id: l.MOSS,
            darkAppearance: _("#58694E", "#222A1C", 50),
            lightAppearance: _("#B7D19F", "#B1DCA4", 50),
        },
        [l.JADE]: {
            id: l.JADE,
            darkAppearance: _("#297071", "#18203F", 50),
            lightAppearance: _("#C5F0D2", "#60ADB2", 50),
        },
    },
    h = new Set(Object.values(l)),
    I = E.map((e) => A[e]);
function f(e) {
    return null != e && h.has(e) ? A[e] : null;
}
function p() {
    return { presetId: I[0].id, customUserThemeSettings: void 0 };
}
function T(e, t) {
    return t === s.NJ.LIGHT ? e.lightAppearance : e.darkAppearance;
}
function m(e, t) {
    let n = T(e, t),
        i = n.colors
            .map((e) => {
                let { hex: t, stop: n } = e;
                return `${t} ${n}%`;
            })
            .join(", ");
    return `linear-gradient(${n.angle}deg, ${i})`;
}
function g(e, t) {
    let n = L(e, t),
        i = r()(n),
        a = t === s.NJ.LIGHT ? 0.2 : -0.2,
        l = Math.max(0, Math.min(1, i.get("hsl.l") + a));
    return [n, i.set("hsl.l", l).hex()];
}
function S(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
function N() {
    let e = a.yK[S(0, a.yK.length - 1)],
        t = Math.min(45, Math.round(100 * r()(e).get("hsl.l")));
    return { color: C(O(e, t)), baseMix: S(70, 80) };
}
function C(e) {
    return r()(e).set("hsl.s", 0.4).hex();
}
function O(e, t) {
    return r()(e)
        .set("hsl.l", Math.max(c / 100, Math.min(u / 100, t / 100)))
        .hex();
}
function R(e) {
    return e === s.NJ.LIGHT ? { minTone: c + 40, maxTone: u } : { minTone: c, maxTone: u - 40 };
}
function L(e, t) {
    let { minTone: n, maxTone: i } = R(t),
        a = r()(e),
        s = Math.max(c, Math.min(u, 100 * a.get("hsl.l")));
    return a.set("hsl.l", (n + ((s - c) / (u - c)) * (i - n)) / 100).hex();
}
function y(e, t) {
    return r()(e).set("hsl.h", t).hex();
}
