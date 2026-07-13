"use strict";
n.d(t, {
    Jl: () => o,
    LP: () => E,
    NU: () => A,
    PS: () => _,
    Wf: () => d,
    _k: () => s,
    gz: () => l,
    ii: () => h,
    kp: () => u,
    lU: () => c,
    re: () => a,
});
var i = n(508425),
    r = n(559949);
let a = [i.z.SOLID, i.z.GRADIENT, i.z.NEON, i.z.TOON, i.z.POP],
    s = [r.x.PLAYPEN_SANS, r.x.ORBITRON, r.x.NEW_ROCKER, r.x.KALAM],
    l = [i.z.GUMMY, i.z.PRISM],
    o = [
        1628845, 2417517, 1874155, 0xc32aff, 0xfc1965, 0xc6a615, 695675, 1027403, 747943, 0xa913e5, 0xda0149, 0xf93722,
    ],
    d = [
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
        [0xe9a9d5, 0xa9ddf0, 0xb9a7ee, 0xb9eacb],
        [0xff6fc2, 0xf54fa8, 0xff9bd6, 0xd96ab7],
        [0xffb57a, 0xff936f, 0xff7c78, 0xf06b8a],
        [0xc4ed65, 0x98de60, 7130467, 4570214],
        [8173823, 9363664, 0x9d94f5, 6737904],
        [0xd77bff, 0xb56bff, 0xe45ce5, 9137407],
    ],
    u = 0.78,
    _ = 0.72,
    E = 38,
    A = [
        [0xfe9242, 3534206, 0xffe047, 0xff4cd2, 5793266],
        [0xff3d3d, 0xff8a2a, 0xffd447, 0xff4fa3, 8086015],
        [7997702, 0xc81e12, 0xf45a18, 0xff9500, 0xffd447],
        [8316888, 8178687, 8359167, 0xb56dff, 0xf38ad8],
        [3528287, 1497266, 2147829, 2850047, 7032319],
        [0xa7e8a1, 0xd9f08c, 0xffe08a, 0xffc4a8, 0xf3b6d9],
    ];
function h(e) {
    switch (e) {
        case i.z.GUMMY:
            return c;
        case i.z.PRISM:
            return A;
        case i.z.GRADIENT:
        case i.z.GLOW:
            return d.map((e) => e.colors);
        default:
            return o.map((e) => [e]);
    }
}
