"use strict";
n.d(t, {
    Jl: () => l,
    LP: () => h,
    NU: () => f,
    PS: () => _,
    Wf: () => u,
    _k: () => a,
    gz: () => o,
    ii: () => E,
    kp: () => d,
    lU: () => c,
    re: () => s,
});
var i = n(508425),
    r = n(559949);
let s = [i.z.SOLID, i.z.GRADIENT, i.z.NEON, i.z.TOON, i.z.POP],
    a = [r.x.PLAYPEN_SANS, r.x.ORBITRON, r.x.NEW_ROCKER, r.x.KALAM],
    o = [i.z.GUMMY, i.z.PRISM],
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
    ].map((e) => ({ colors: e, name: "" })),
    c = [
        [0xf4a7d8, 9626600, 0xf8f59a, 0xc9f7d8],
        [0xff6b9a, 0xffd85a, 5629578, 7064575],
        [5227519, 7268312, 9075967, 0xb7f5ff],
        [0xff8a5c, 0xffd15a, 0xf06aa6, 5621759],
        [0xd83a5f, 0xc94bcb, 9133311, 0xb06cff],
    ],
    d = 0.78,
    _ = 0.72,
    h = 38,
    f = [
        [0xfe9242, 3534206, 0xffe047, 0xff4cd2, 5793266],
        [0xff3d3d, 0xff8a2a, 0xffd447, 0xff4fa3, 8086015],
        [7997702, 0xc81e12, 0xf45a18, 0xff9500, 0xffd447],
        [8316888, 8178687, 8359167, 0xb56dff, 0xf38ad8],
        [3528287, 1497266, 2147829, 2850047, 7032319],
        [0xa7e8a1, 0xd9f08c, 0xffe08a, 0xffc4a8, 0xf3b6d9],
    ];
function E(e) {
    switch (e) {
        case i.z.GUMMY:
            return c;
        case i.z.PRISM:
            return f;
        case i.z.GRADIENT:
        case i.z.GLOW:
            return u.map((e) => e.colors);
        default:
            return l.map((e) => [e]);
    }
}
