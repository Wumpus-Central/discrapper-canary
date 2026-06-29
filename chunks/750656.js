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
        [0xfe9242, 3534206, 0xffe047, 0xff4cd2, 5793266],
        [0xff3d3d, 0xff8a2a, 0xffd447, 0xff4fa3, 8086015],
        [7997702, 0xc81e12, 0xf45a18, 0xff9500, 0xffd447],
        [8316888, 8178687, 8359167, 0xb56dff, 0xf38ad8],
        [3528287, 1497266, 2147829, 2850047, 7032319],
        [0xa7e8a1, 0xd9f08c, 0xffe08a, 0xffc4a8, 0xf3b6d9],
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
