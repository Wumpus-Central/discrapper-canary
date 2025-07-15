(n.d(t, { Z: () => P }), n(388685));
var r = n(237997),
    i = n(998502),
    l = n(576027),
    a = n(13838),
    o = n(812967),
    s = n(350085),
    c = n(910484),
    u = n(443952),
    d = n(266572),
    p = n(177698),
    h = n(121826),
    f = n(109815),
    g = n(753335),
    m = n(567481),
    b = n(498164),
    _ = n(885381),
    E = n(111097),
    O = n(908711),
    y = n(197941),
    I = n(462414),
    v = n(662194),
    C = n(188861);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let N = S({}, l.A, u.Z, d.Z, h.Z, g.Z, f.Z, m.Z, b.Z, _.Z, E.Z, y.Z, v.Z, I.Z, p.Z, O.Z),
    T = S({}, a.Z, s.M, c.n),
    P = {
        server: o.Z,
        commands: N,
        events: T,
        stores: [r.default],
        transports: [C.Z],
        registerTransportsForEmbeddedPlatform: function () {
            i.ZP.ensureModule('discord_rpc').then(() => {
                for (let e of [n(178318).Z, n(967351).Z]) o.Z.registerTransport(e);
            });
        }
    };
