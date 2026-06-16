"use strict";
n.d(t, { Jl: () => l, Wf: () => u, rA: () => a, re: () => s, sO: () => o });
var i = n(508425),
    r = n(559949);
let s = [i.z.SOLID, i.z.GRADIENT, i.z.NEON, i.z.TOON, i.z.POP],
    a = [
        r.x.DEFAULT,
        r.x.ZILLA_SLAB,
        r.x.CHERRY_BOMB,
        r.x.CHICLE,
        r.x.MUSEO_MODERNO,
        r.x.NEO_CASTEL,
        r.x.PIXELIFY,
        r.x.SINISTRE,
    ],
    o = new Map([
        [r.x.SINISTRE, 19.85],
        [r.x.NEO_CASTEL, 19.03],
        [r.x.CHERRY_BOMB, 18.54],
        [r.x.PIXELIFY, 14.42],
        [r.x.CHICLE, 8.74],
        [r.x.ZILLA_SLAB, 8.31],
        [r.x.MUSEO_MODERNO, 6.82],
        [r.x.DEFAULT, 4.29],
    ]),
    l = [
        1628845, 2417517, 1874155, 0xc32aff, 0xfc1965, 0xc6a615, 695675, 1027403, 747943, 0xa913e5, 0xda0149, 0xf93722,
    ],
    u = [
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
    });
