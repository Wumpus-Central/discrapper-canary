n.d(t, {
    LP: () => A,
    NU: () => h,
    PS: () => E,
    Wf: () => c,
    _k: () => s,
    fY: () => o,
    gz: () => l,
    ii: () => f,
    kp: () => _,
    lU: () => u,
    re: () => a,
});
var i = n(508425),
    r = n(559949);
let a = [i.z.SOLID, i.z.GRADIENT, i.z.NEON, i.z.TOON, i.z.POP],
    s = [r.x.PLAYPEN_SANS, r.x.ORBITRON, r.x.NEW_ROCKER, r.x.KALAM],
    l = [i.z.GUMMY, i.z.PRISM],
    o = [r.x.HEXAGON],
    d = [2417517, 1874155, 0xc32aff, 0xda0149, 0xf93722, 0xc6a615],
    c = [
        [2797222, 16762e3],
        [0xe45eff, 2522592],
        [8277963, 6802328],
        [0xefb4aa, 0xe46ce2],
        [0xf5983c, 0xe55ae7],
    ].map((e) => ({ colors: e, name: "" })),
    u = [
        [0xe9a9d5, 0xa9ddf0, 0xb9a7ee, 0xb9eacb],
        [0xff6fc2, 0xf54fa8, 0xff9bd6, 0xd96ab7],
        [0xffb57a, 0xff936f, 0xff7c78, 0xf06b8a],
        [0xc4ed65, 0x98de60, 7130467, 4570214],
        [8173823, 9363664, 0x9d94f5, 6737904],
        [0xd77bff, 0xb56bff, 0xe45ce5, 9137407],
        [0xd83a5f, 0xc94bcb, 9133311, 0xb06cff],
    ],
    _ = 0.78,
    E = 0.72,
    A = 38,
    h = [
        [0xfe9242, 3534206, 0xffe047, 0xff4cd2, 5793266],
        [8316888, 8178687, 8359167, 0xb56dff, 0xf38ad8],
        [7997702, 0xc81e12, 0xf45a18, 0xff9500, 0xffd447],
    ];
function f(e) {
    switch (e) {
        case i.z.GUMMY:
            return u;
        case i.z.PRISM:
            return h;
        case i.z.GRADIENT:
        case i.z.GLOW:
            return c.map((e) => e.colors);
        default:
            return d.map((e) => [e]);
    }
}
