n.d(t, { Z: () => x }), n(388685);
var r = n(237997),
    i = n(998502),
    l = n(576027),
    a = n(13838),
    s = n(812967),
    o = n(350085),
    c = n(943687),
    u = n(910484),
    d = n(443952),
    p = n(266572),
    f = n(177698),
    h = n(121826),
    g = n(109815),
    m = n(753335),
    _ = n(567481),
    b = n(498164),
    E = n(705444),
    O = n(885381),
    v = n(111097),
    y = n(908711),
    I = n(197941),
    C = n(462414),
    S = n(662194),
    T = n(188861);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let j = N({}, l.A, d.Z, p.Z, h.Z, m.Z, g.Z, _.Z, b.Z, E.Z, O.Z, v.Z, I.Z, S.Z, C.Z, f.Z, y.Z),
    P = N({}, a.Z, o.M, c.f, u.n),
    x = {
        server: s.Z,
        commands: j,
        events: P,
        stores: [r.default],
        transports: [T.Z],
        registerTransportsForEmbeddedPlatform: function () {
            i.ZP.ensureModule("discord_rpc").then(() => {
                for (let e of [n(178318).Z, n(967351).Z]) s.Z.registerTransport(e);
            });
        },
    };
