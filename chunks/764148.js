n.d(t, { A: () => x }), n(896048);
var r = n(256415),
    i = n(837921),
    l = n(214961),
    a = n(88065),
    s = n(474951),
    o = n(770804),
    c = n(539754),
    u = n(6059),
    d = n(372919),
    p = n(624712),
    f = n(294446),
    h = n(175436),
    A = n(43203),
    g = n(1791),
    m = n(293890),
    b = n(985603),
    _ = n(103949),
    E = n(873351),
    O = n(885969),
    y = n(944127),
    I = n(388331),
    v = n(466444),
    S = n(177235),
    C = n(266686);
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
let T = N({}, l.U, d.A, p.A, h.A, g.A, A.A, m.A, b.A, _.A, E.A, O.A, I.A, S.A, v.A, f.A, y.A),
    j = N({}, a.A, o.c, c.I, u.p),
    x = {
        server: s.A,
        commands: T,
        events: j,
        stores: [r.default],
        transports: [C.A],
        registerTransportsForEmbeddedPlatform: function () {
            i.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) s.A.registerTransport(e);
            });
        },
    };
