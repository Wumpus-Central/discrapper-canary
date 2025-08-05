e.d(t, { v: () => m });
var r = e(255367);
e(73800);
var g = e(397110),
    v = e(79312),
    n = e(25960),
    f = e(706484),
    B = e(819837),
    l = e(165440),
    h = e(21822),
    i = e(285916),
    o = e(168646),
    C = e(470831),
    a = e(96824),
    w = e(187485),
    s = e(713897),
    Q = e(886512),
    H = e(560701),
    c = e(678563),
    D = e(573508),
    M = e(164175),
    d = e(441787),
    p = e(292184),
    b = e(117243),
    V = e(997109),
    E = e(606650),
    P = e(117257),
    u = e(214067),
    I = e(803193),
    j = e(900689),
    Z = e(498103),
    O = e(586131),
    y = e(931512),
    x = e(350136),
    L = e(131085);
function X(A) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(e).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(e, A).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = e[t]),
                    t in A
                        ? Object.defineProperty(A, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[t] = r));
            }));
    }
    return A;
}
let m = (A) => {
    var { badge: t, primaryTintColor: e, secondaryTintColor: m } = A,
        G = (function (A, t) {
            if (null == A) return {};
            var e,
                r,
                g = (function (A, t) {
                    if (null == A) return {};
                    var e,
                        r,
                        g = {},
                        v = Object.keys(A);
                    for (r = 0; r < v.length; r++) ((e = v[r]), t.indexOf(e) >= 0 || (g[e] = A[e]));
                    return g;
                })(A, t);
            if (Object.getOwnPropertySymbols) {
                var v = Object.getOwnPropertySymbols(A);
                for (r = 0; r < v.length; r++) ((e = v[r]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e]));
            }
            return g;
        })(A, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (t) {
        case L.x_.SWORD:
            return (0, r.jsx)(
                j.V,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.WATER_DROP:
            return (0, r.jsx)(y.q, X({ primaryTintColor: e }, G));
        case L.x_.SKULL:
            return (0, r.jsx)(V.D, X({ primaryTintColor: e }, G));
        case L.x_.TOADSTOOL:
            return (0, r.jsx)(
                Z.T,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.MOON:
            return (0, r.jsx)(p.$, X({ primaryTintColor: e }, G));
        case L.x_.LIGHTNING:
            return (0, r.jsx)(M.F, X({ primaryTintColor: e }, G));
        case L.x_.LEAF:
            return (0, r.jsx)(D.i, X({ primaryTintColor: e }, G));
        case L.x_.HEART:
            return (0, r.jsx)(H.h, X({ primaryTintColor: e }, G));
        case L.x_.FIRE:
            return (0, r.jsx)(o.G, X({ primaryTintColor: e }, G));
        case L.x_.COMPASS:
            return (0, r.jsx)(
                n.Q,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.CROSSHAIRS:
            return (0, r.jsx)(
                f.Q,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.FLOWER:
            return (0, r.jsx)(
                C.N,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.FORCE:
            return (0, r.jsx)(
                a.S,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.GEM:
            return (0, r.jsx)(
                s.S,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.LAVA:
            return (0, r.jsx)(
                c.h,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.PSYCHIC:
            return (0, r.jsx)(
                b.L,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.SMOKE:
            return (0, r.jsx)(
                E.w,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.SNOW:
            return (0, r.jsx)(
                P.X,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.SOUND:
            return (0, r.jsx)(
                u.H,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.SUN:
            return (0, r.jsx)(
                I.k,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.WIND:
            return (0, r.jsx)(
                x.A,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.BUNNY:
            return (0, r.jsx)(g.K, X({ primaryTintColor: e }, G));
        case L.x_.DOG:
            return (0, r.jsx)(
                h.h,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.FROG:
            return (0, r.jsx)(
                w.L,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.GOAT:
            return (0, r.jsx)(Q.V, X({ primaryTintColor: e }, G));
        case L.x_.CAT:
            return (0, r.jsx)(v.W, X({ primaryTintColor: e }, G));
        case L.x_.DIAMOND:
            return (0, r.jsx)(l.T, X({ primaryTintColor: e }, G));
        case L.x_.CROWN:
            return (0, r.jsx)(
                B.O,
                X(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: m
                    },
                    G
                )
            );
        case L.x_.TROPHY:
            return (0, r.jsx)(O.o, X({ primaryTintColor: e }, G));
        case L.x_.MONEY_BAG:
            return (0, r.jsx)(d.k, X({ primaryTintColor: e }, G));
        case L.x_.DOLLAR_SIGN:
            return (0, r.jsx)(i.W, X({ primaryTintColor: e }, G));
    }
    return null;
};
