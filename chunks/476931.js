"use strict";
n.d(t, { BC: () => a, Yt: () => u, kI: () => d, oE: () => c });
var i = n(310784),
    r = n.n(i),
    s = n(818348);
let a = 74;
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
let l = {
    1: { id: 1, darkAppearance: o("#7C547E", "#040A20", 30), lightAppearance: o("#FA9EFF", "#5A7EFE", 30) },
    9: { id: 9, darkAppearance: o("#282F6A", "#040413", 100), lightAppearance: o("#DBDBFF", "#6060FF", 100) },
    8: { id: 8, darkAppearance: o("#1D466F", "#0D0D24", 50), lightAppearance: o("#9ADBF7", "#2D3CCA", 50) },
    10: { id: 10, darkAppearance: o("#5541A3", "#0E0C13", 60), lightAppearance: o("#C3BFFF", "#816BDC", 60) },
    7: { id: 7, darkAppearance: o("#463C5F", "#05081A", 50), lightAppearance: o("#B59DF2", "#8F89D2", 50) },
    2: { id: 2, darkAppearance: o("#51265D", "#1A0414", 35), lightAppearance: o("#E893FF", "#FFADDC", 35) },
    3: { id: 3, darkAppearance: o("#421516", "#0B0913", 35), lightAppearance: o("#FFEBCA", "#FF8989", 35) },
    4: { id: 4, darkAppearance: o("#4C3625", "#161311", 100), lightAppearance: o("#FFE7DA", "#FFD89B", 100) },
    5: { id: 5, darkAppearance: o("#394232", "#10150E", 100), lightAppearance: o("#B7D19F", "#B1DCA4", 100) },
    6: { id: 6, darkAppearance: o("#1B4849", "#080816", 50), lightAppearance: o("#C5F0D2", "#60ADB2", 50) },
};
function u(e) {
    return null == e ? null : (l[e] ?? null);
}
function c(e, t) {
    return t === s.NJ.LIGHT ? e.lightAppearance : e.darkAppearance;
}
function d(e) {
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
