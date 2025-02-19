n.d(t, { Z: () => S }), n(47120);
var r = n(237997),
    i = n(998502),
    l = n(576027),
    o = n(13838),
    a = n(812967),
    s = n(350085),
    c = n(910484),
    u = n(443952),
    d = n(266572),
    p = n(177698),
    h = n(121826),
    g = n(753335),
    f = n(567481),
    m = n(498164),
    b = n(111097),
    _ = n(908711),
    E = n(197941),
    O = n(462414),
    N = n(662194),
    v = n(188861);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let I = y({}, l.A, u.Z, d.Z, h.Z, g.Z, f.Z, m.Z, b.Z, E.Z, N.Z, O.Z, p.Z, _.Z),
    C = y({}, o.Z, s.M, c.n),
    S = {
        server: a.Z,
        commands: I,
        events: C,
        stores: [r.Z],
        transports: [v.Z],
        registerTransportsForEmbeddedPlatform: function () {
            i.ZP.ensureModule('discord_rpc').then(() => {
                for (let e of [n(178318).Z, n(967351).Z]) a.Z.registerTransport(e);
            });
        }
    };
