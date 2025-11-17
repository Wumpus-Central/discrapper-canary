g.d(t, { v: () => G });
var v = g(54381);
g(473749);
var e = g(397110),
    r = g(79312),
    f = g(25960),
    B = g(706484),
    h = g(819837),
    n = g(165440),
    C = g(21822),
    w = g(285916),
    l = g(168646),
    Q = g(470831),
    i = g(96824),
    H = g(187485),
    o = g(713897),
    s = g(886512),
    a = g(560701),
    D = g(678563),
    M = g(573508),
    c = g(164175),
    V = g(441787),
    p = g(292184),
    E = g(117243),
    b = g(997109),
    P = g(606650),
    d = g(117257),
    I = g(214067),
    j = g(803193),
    Z = g(900689),
    y = g(498103),
    O = g(586131),
    u = g(931512),
    x = g(350136),
    L = g(131085);
function X(A) {
    for (var t = 1; t < arguments.length; t++) {
        var g = null != arguments[t] ? arguments[t] : {},
            v = Object.keys(g);
        "function" == typeof Object.getOwnPropertySymbols &&
            (v = v.concat(
                Object.getOwnPropertySymbols(g).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(g, A).enumerable;
                }),
            )),
            v.forEach(function (t) {
                var v;
                (v = g[t]),
                    t in A
                        ? Object.defineProperty(A, t, {
                              value: v,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[t] = v);
            });
    }
    return A;
}
let G = (A) => {
    var { badge: t, primaryTintColor: g, secondaryTintColor: G } = A,
        F = (function (A, t) {
            if (null == A) return {};
            var g,
                v,
                e = (function (A, t) {
                    if (null == A) return {};
                    var g,
                        v,
                        e = {},
                        r = Object.keys(A);
                    for (v = 0; v < r.length; v++) (g = r[v]), t.indexOf(g) >= 0 || (e[g] = A[g]);
                    return e;
                })(A, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(A);
                for (v = 0; v < r.length; v++)
                    (g = r[v]),
                        !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g]);
            }
            return e;
        })(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
    switch (t) {
        case L.x_.SWORD:
            return (0, v.jsx)(
                Z.V,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.WATER_DROP:
            return (0, v.jsx)(u.q, X({ primaryTintColor: g }, F));
        case L.x_.SKULL:
            return (0, v.jsx)(b.D, X({ primaryTintColor: g }, F));
        case L.x_.TOADSTOOL:
            return (0, v.jsx)(
                y.T,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.MOON:
            return (0, v.jsx)(p.$, X({ primaryTintColor: g }, F));
        case L.x_.LIGHTNING:
            return (0, v.jsx)(c.F, X({ primaryTintColor: g }, F));
        case L.x_.LEAF:
            return (0, v.jsx)(M.i, X({ primaryTintColor: g }, F));
        case L.x_.HEART:
            return (0, v.jsx)(a.h, X({ primaryTintColor: g }, F));
        case L.x_.FIRE:
            return (0, v.jsx)(l.G, X({ primaryTintColor: g }, F));
        case L.x_.COMPASS:
            return (0, v.jsx)(
                f.Q,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.CROSSHAIRS:
            return (0, v.jsx)(
                B.Q,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.FLOWER:
            return (0, v.jsx)(
                Q.N,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.FORCE:
            return (0, v.jsx)(
                i.S,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.GEM:
            return (0, v.jsx)(
                o.S,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.LAVA:
            return (0, v.jsx)(
                D.h,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.PSYCHIC:
            return (0, v.jsx)(
                E.L,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.SMOKE:
            return (0, v.jsx)(
                P.w,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.SNOW:
            return (0, v.jsx)(
                d.X,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.SOUND:
            return (0, v.jsx)(
                I.H,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.SUN:
            return (0, v.jsx)(
                j.k,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.WIND:
            return (0, v.jsx)(
                x.A,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.BUNNY:
            return (0, v.jsx)(e.K, X({ primaryTintColor: g }, F));
        case L.x_.DOG:
            return (0, v.jsx)(
                C.h,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.FROG:
            return (0, v.jsx)(
                H.L,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.GOAT:
            return (0, v.jsx)(s.V, X({ primaryTintColor: g }, F));
        case L.x_.CAT:
            return (0, v.jsx)(r.W, X({ primaryTintColor: g }, F));
        case L.x_.DIAMOND:
            return (0, v.jsx)(n.T, X({ primaryTintColor: g }, F));
        case L.x_.CROWN:
            return (0, v.jsx)(
                h.O,
                X(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: G,
                    },
                    F,
                ),
            );
        case L.x_.TROPHY:
            return (0, v.jsx)(O.o, X({ primaryTintColor: g }, F));
        case L.x_.MONEY_BAG:
            return (0, v.jsx)(V.k, X({ primaryTintColor: g }, F));
        case L.x_.DOLLAR_SIGN:
            return (0, v.jsx)(w.W, X({ primaryTintColor: g }, F));
    }
    return null;
};
