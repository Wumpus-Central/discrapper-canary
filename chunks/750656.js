"use strict";
n.d(t, { Jl: () => o, Wf: () => l, ii: () => d, re: () => s, sO: () => a });
var i = n(508425),
    r = n(559949);
let s = [i.z.SOLID, i.z.GRADIENT, i.z.NEON, i.z.TOON, i.z.POP],
    a = new Map([
        [r.x.SINISTRE, 19.85],
        [r.x.NEO_CASTEL, 19.03],
        [r.x.CHERRY_BOMB, 18.54],
        [r.x.PIXELIFY, 14.42],
        [r.x.CHICLE, 8.74],
        [r.x.ZILLA_SLAB, 8.31],
        [r.x.MUSEO_MODERNO, 6.82],
        [r.x.DEFAULT, 4.29],
    ]),
    o = [
        1628845, 2417517, 1874155, 0xc32aff, 0xfc1965, 0xc6a615, 695675, 1027403, 747943, 0xa913e5, 0xda0149, 0xf93722,
    ],
    l = [
        [2797222, 16762e3],
        [2535780, 9497343],
        [0xe45eff, 2522592],
        [9452762, 2939534],
        [0xefb4aa, 0xe46ce2],
        [0xdf4232, 0xbd8fff],
        [0xf5983c, 0xe55ae7],
        [0xe4541e, 6674404],
    ].map((e) => {
        let [t, n] = e;
        return { start: t, end: n, name: "" };
    }),
    u = [
        [7183099, 6082490, 16762e3, 0xe46ce2],
        [0xfc1965, 0xf5983c, 0xc6a615, 2417517],
        [2417517, 1628845, 1874155, 0xa913e5],
        [0xff5dd6, 0xc32aff, 6888941, 2522592],
        [0xf93722, 0xf5983c, 0xc6a615, 1027403],
        [695675, 1628845, 9497343, 747943],
    ],
    c = [
        [0xf93722, 0xf5983c, 0xc6a615, 2417517, 1874155],
        [7183099, 6082490, 2417517, 16762e3, 0xfc1965],
        [0xc32aff, 0xa913e5, 6888941, 2522592, 1628845],
        [0xff5dd6, 0xe46ce2, 0xbd8fff, 9497343, 6082490],
        [0xda0149, 0xfc1965, 0xf5983c, 0xc6a615, 1027403],
        [747943, 1874155, 1628845, 695675, 2417517],
    ];
function d(e) {
    switch (e) {
        case i.z.GUMMY:
            return u;
        case i.z.PRISM:
            return c;
        case i.z.GRADIENT:
        case i.z.GLOW:
            return l.map((e) => [e.start, e.end]);
        default:
            return o.map((e) => [e]);
    }
}
