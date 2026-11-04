var i = n(310784),
    r = n.n(i),
    a = n(935444),
    s = n(818348);
let l = { TWILIGHT: 1, PLUM: 2, FIRE: 3, GOLD_DUST: 4, MOSS: 5, JADE: 6, OBSIDIAN: 7, OCEAN: 8, DENIM: 9, BLURPLE: 10 };
function o(e, t, n) {
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
let d = [l.TWILIGHT, l.DENIM, l.OCEAN, l.BLURPLE, l.OBSIDIAN, l.PLUM, l.FIRE, l.GOLD_DUST, l.MOSS, l.JADE],
    c = {
        [l.TWILIGHT]: {
            id: l.TWILIGHT,
            darkAppearance: o("#69426A", "#111731", 100),
            lightAppearance: o("#FA9EFF", "#5A7EFE", 100),
        },
        [l.DENIM]: {
            id: l.DENIM,
            darkAppearance: o("#5359AD", "#121238", 100),
            lightAppearance: o("#DBDBFF", "#6060FF", 100),
        },
        [l.OCEAN]: {
            id: l.OCEAN,
            darkAppearance: o("#245B92", "#141D40", 100),
            lightAppearance: o("#9ADBF7", "#2D3CCA", 100),
        },
        [l.BLURPLE]: {
            id: l.BLURPLE,
            darkAppearance: o("#533D9E", "#1A1035", 100),
            lightAppearance: o("#C3BFFF", "#816BDC", 100),
        },
        [l.OBSIDIAN]: {
            id: l.OBSIDIAN,
            darkAppearance: o("#5E4C85", "#1E1740", 100),
            lightAppearance: o("#B59DF2", "#8F89D2", 100),
        },
        [l.PLUM]: {
            id: l.PLUM,
            darkAppearance: o("#8A3F7F", "#2C0D25", 100),
            lightAppearance: o("#E893FF", "#FFADDC", 100),
        },
        [l.FIRE]: {
            id: l.FIRE,
            darkAppearance: o("#9B2C2C", "#2A0C0C", 50),
            lightAppearance: o("#FFEBCA", "#FF8989", 50),
        },
        [l.GOLD_DUST]: {
            id: l.GOLD_DUST,
            darkAppearance: o("#6C523D", "#241912", 50),
            lightAppearance: o("#FFE7DA", "#FFD89B", 50),
        },
        [l.MOSS]: {
            id: l.MOSS,
            darkAppearance: o("#58694E", "#222A1C", 50),
            lightAppearance: o("#B7D19F", "#B1DCA4", 50),
        },
        [l.JADE]: {
            id: l.JADE,
            darkAppearance: o("#297071", "#18203F", 50),
            lightAppearance: o("#C5F0D2", "#60ADB2", 50),
        },
    },
    u = new Set(Object.values(l)),
    _ = d.map((e) => c[e]);
function E(e, t) {
    return t === s.NJ.LIGHT ? e.lightAppearance : e.darkAppearance;
}
function A(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}
function h(e) {
    return r()(e).set("hsl.s", 0.4).hex();
}
function f(e, t) {
    return r()(e)
        .set("hsl.l", Math.max(0.15, Math.min(0.75, t / 100)))
        .hex();
}
function I(e) {
    return e === s.NJ.LIGHT ? { minTone: 55, maxTone: 75 } : { minTone: 15, maxTone: 35 };
}
function p(e, t) {
    let { minTone: n, maxTone: i } = I(t),
        a = r()(e),
        s = Math.max(15, Math.min(75, 100 * a.get("hsl.l")));
    return a.set("hsl.l", (n + ((s - 15) / 60) * (i - n)) / 100).hex();
}
n.d(
    t,
    {},
    {
        It: I,
        Qy: function () {
            return { presetId: _[0].id, customUserThemeSettings: void 0 };
        },
        U6: function (e, t) {
            let n = E(e, t),
                i = n.colors
                    .map((e) => {
                        let { hex: t, stop: n } = e;
                        return `${t} ${n}%`;
                    })
                    .join(", ");
            return `linear-gradient(${n.angle}deg, ${i})`;
        },
        XY: function () {
            let e = a.yK[A(0, a.yK.length - 1)],
                t = Math.min(45, Math.round(100 * r()(e).get("hsl.l")));
            return { color: h(f(e, t)), baseMix: A(70, 80) };
        },
        Yt: function (e) {
            return null != e && u.has(e) ? c[e] : null;
        },
        Z8: l,
        Zq: _,
        _k: f,
        a0: "#5865F2",
        kI: function (e, t) {
            let n = p(e, t),
                i = r()(n),
                a = t === s.NJ.LIGHT ? 0.2 : -0.2,
                l = Math.max(0, Math.min(1, i.get("hsl.l") + a));
            return [n, i.set("hsl.l", l).hex()];
        },
        oE: E,
        sR: function (e, t) {
            return r()(e).set("hsl.h", t).hex();
        },
        w3: h,
        z3: p,
    },
);
