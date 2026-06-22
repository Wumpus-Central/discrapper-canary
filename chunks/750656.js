"use strict";
n.d(t, { Jl: () => u, _k: () => o, gz: () => l, ii: () => h, re: () => s, sO: () => a });
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
        [0xff8a8a, 0xffd166, 7068042, 6080767],
        [0xffb066, 0xc6e85b, 4183728, 6003455],
        [6018784, 7052031, 0xb06bff, 0xff7ad4],
        [0xff7ab8, 0xc06bff, 7052031, 6280880],
        [0xffe066, 8051066, 5230806, 7052031],
        [0xff7a7a, 0xff7ab8, 0xb06bff, 7047935],
        [8051082, 5230784, 6007039, 0xa87aff],
        [0xffb07a, 0xff7aa8, 0xe06bd6, 8026879],
        [0xffe066, 0xffab5b, 0xff7a8a, 0xe86bd0],
        [6080767, 6280880, 0xb6e066, 0xffe066],
        [0xa87aff, 0xe86bd0, 0xff7a8a, 0xffb07a],
        [7052031, 5230806, 8051066, 0xffe066],
    ],
    _ = [
        [0xff3b3b, 0xff9e2c, 0xffe92c, 3528283, 2924287],
        [0xff2c8d, 0xb02cff, 5975295, 2924287, 2938592],
        [2949038, 2938592, 2924287, 7035903, 0xb02cff],
        [0xff2c4d, 0xff8a2c, 0xffe92c, 3528283, 0x9e3bff],
        [3528283, 2938560, 2924287, 7035903, 0xff6bd6],
        [0xff5b3b, 0xffd02c, 3528283, 2938592, 7035903],
        [0x9ef0ff, 5230847, 2924287, 3894271, 5979094],
        [0xd6ff8a, 9102928, 3524955, 1615994, 752266],
        [0xffb0f0, 0xff6bd6, 0xd64fe0, 0xa02cff, 7023830],
        [0xffe05b, 0xffab2c, 0xff6b2c, 0xff3b4d, 0xd62c6b],
        [0xc6fff0, 7074006, 2938560, 1618121, 2915030],
        [0xffd02c, 0xff8a3b, 0xff5b6b, 0xff3b9e, 0xd62cd6],
    ];
function h(e) {
    switch (e) {
        case i.z.GUMMY:
            return d;
        case i.z.PRISM:
            return _;
        case i.z.GRADIENT:
        case i.z.GLOW:
            return c.map((e) => e.colors);
        default:
            return u.map((e) => [e]);
    }
}
