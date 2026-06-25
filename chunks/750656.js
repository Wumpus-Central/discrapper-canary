"use strict";
n.d(t, { Jl: () => u, LP: () => _, _k: () => o, gz: () => l, ii: () => f, re: () => s, sO: () => a });
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
    o = [r.x.PLAYPEN_SANS, r.x.ORBITRON, r.x.NEW_ROCKER, r.x.KALAM],
    l = [i.z.GUMMY, i.z.PRISM],
    u = [
        1628845, 2417517, 1874155, 0xc32aff, 0xfc1965, 0xc6a615, 695675, 1027403, 747943, 0xa913e5, 0xda0149, 0xf93722,
    ],
    c = [
        [2797222, 16762e3],
        [2535780, 9497343],
        [0xe45eff, 2522592],
        [9452762, 2939534],
        [0xefb4aa, 0xe46ce2],
        [0xdf4232, 0xbd8fff],
        [0xf5983c, 0xe55ae7],
        [0xe4541e, 6674404],
    ].map((e) => ({ colors: e, name: "" })),
    d = [
        [0xeaa486, 0xeadc86, 0xead686, 0xc6ea86],
        [8841878, 0xeae186, 8841928, 0xc1ea86],
        [8839658, 8818410, 8826858, 0xb086ea],
        [0xd186ea, 0xeae186, 0xea86d1, 0xc1ea86],
        [8833258, 0xea86b8, 8820458, 0xea8686],
    ],
    _ = 100,
    h = [
        [0xee9653, 8117632, 0xf7e064, 0xdb5acf, 5989865],
        [0xea5146, 0xef9043, 0xf7d462, 0xeb5f9e, 8151537],
        [0xe74584, 0xa249f5, 6326499, 0xafd98b, 0xf9e166],
        [9954010, 9157881, 9470454, 0xcb81e2, 0xe48ed3],
        [0xf4e57c, 0xf4c17a, 0xec8e89, 0xbd79d7, 0x9f7ef6],
        [0xb6e6a6, 0xe2ec97, 0xf7d79d, 0xefbec3, 0xe9b8d6],
    ];
function f(e) {
    switch (e) {
        case i.z.GUMMY:
            return d;
        case i.z.PRISM:
            return h;
        case i.z.GRADIENT:
        case i.z.GLOW:
            return c.map((e) => e.colors);
        default:
            return u.map((e) => [e]);
    }
}
