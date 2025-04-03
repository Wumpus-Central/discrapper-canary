n.d(t, { Z: () => T }), n(47120);
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
    f = n(753335),
    g = n(567481),
    m = n(498164),
    b = n(885381),
    _ = n(111097),
    E = n(908711),
    O = n(197941),
    N = n(462414),
    y = n(662194),
    I = n(188861);
function v(e) {
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
let C = v({}, l.A, u.Z, d.Z, h.Z, f.Z, g.Z, m.Z, b.Z, _.Z, O.Z, y.Z, N.Z, p.Z, E.Z),
    S = v({}, a.Z, s.M, c.n),
    T = {
        server: o.Z,
        commands: C,
        events: S,
        stores: [r.default],
        transports: [I.Z],
        registerTransportsForEmbeddedPlatform: function () {
            i.ZP.ensureModule('discord_rpc').then(() => {
                for (let e of [n(178318).Z, n(967351).Z]) o.Z.registerTransport(e);
            });
        }
    };
