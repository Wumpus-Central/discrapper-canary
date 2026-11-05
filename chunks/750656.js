var i,
    r = n(508425),
    a = n(559949);
let s = [a.x.PLAYPEN_SANS, a.x.ORBITRON, a.x.NEW_ROCKER, a.x.KALAM],
    l = [r.z.GUMMY, r.z.PRISM],
    o = [
        a.x.DEFAULT,
        a.x.ZILLA_SLAB,
        a.x.CHERRY_BOMB,
        a.x.CHICLE,
        a.x.MUSEO_MODERNO,
        a.x.NEO_CASTEL,
        a.x.PIXELIFY,
        a.x.SINISTRE,
        ...s,
    ],
    d = [r.z.SOLID, r.z.GRADIENT, r.z.NEON, r.z.TOON, r.z.POP, ...l],
    c = [a.x.HEXAGON],
    u = [2417517, 1874155, 0xc32aff, 0xda0149, 0xf93722, 0xc6a615],
    _ = [
        [2797222, 16762e3],
        [0xe45eff, 2522592],
        [8277963, 6802328],
        [0xefb4aa, 0xe46ce2],
        [0xf5983c, 0xe55ae7],
    ].map((e) => ({ colors: e, name: "" })),
    E = [
        [0xe9a9d5, 0xa9ddf0, 0xb9a7ee, 0xb9eacb],
        [0xff6fc2, 0xf54fa8, 0xff9bd6, 0xd96ab7],
        [0xffb57a, 0xff936f, 0xff7c78, 0xf06b8a],
        [0xc4ed65, 0x98de60, 7130467, 4570214],
        [8173823, 9363664, 0x9d94f5, 6737904],
        [0xd77bff, 0xb56bff, 0xe45ce5, 9137407],
        [0xd83a5f, 0xc94bcb, 9133311, 0xb06cff],
    ],
    A = [
        [0xfe9242, 3534206, 0xffe047, 0xff4cd2, 5793266],
        [8316888, 8178687, 8359167, 0xb56dff, 0xf38ad8],
        [7997702, 0xc81e12, 0xf45a18, 0xff9500, 0xffd447],
    ];
var h = (((i = {}).BUTTON = "button"), (i.LINK = "link"), i);
n.d(
    t,
    {},
    {
        NU: A,
        Wf: _,
        _k: s,
        fY: c,
        gz: l,
        ii: function (e) {
            switch (e) {
                case r.z.GUMMY:
                    return E;
                case r.z.PRISM:
                    return A;
                case r.z.GRADIENT:
                case r.z.GLOW:
                    return _.map((e) => e.colors);
                default:
                    return u.map((e) => [e]);
            }
        },
        lU: E,
        rA: o,
        re: d,
        vY: h,
    },
);
