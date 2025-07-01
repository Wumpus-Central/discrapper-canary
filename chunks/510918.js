g.d(v, { v: () => p });
var B = g(255367);
g(73800);
var t = g(25960),
    f = g(706484),
    C = g(168646),
    e = g(470831),
    r = g(96824),
    Q = g(713897),
    w = g(560701),
    h = g(678563),
    n = g(573508),
    D = g(164175),
    o = g(292184),
    M = g(117243),
    E = g(997109),
    s = g(606650),
    i = g(117257),
    P = g(214067),
    H = g(803193),
    l = g(900689),
    a = g(498103),
    I = g(931512),
    c = g(350136),
    b = g(131085);
function d(A) {
    for (var v = 1; v < arguments.length; v++) {
        var g = null != arguments[v] ? arguments[v] : {},
            B = Object.keys(g);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (B = B.concat(
                Object.getOwnPropertySymbols(g).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(g, A).enumerable;
                })
            )),
            B.forEach(function (v) {
                var B;
                ((B = g[v]),
                    v in A
                        ? Object.defineProperty(A, v, {
                              value: B,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[v] = B));
            }));
    }
    return A;
}
let p = (A) => {
    var { badge: v, primaryTintColor: g, secondaryTintColor: p } = A,
        Z = (function (A, v) {
            if (null == A) return {};
            var g,
                B,
                t = (function (A, v) {
                    if (null == A) return {};
                    var g,
                        B,
                        t = {},
                        f = Object.keys(A);
                    for (B = 0; B < f.length; B++) ((g = f[B]), v.indexOf(g) >= 0 || (t[g] = A[g]));
                    return t;
                })(A, v);
            if (Object.getOwnPropertySymbols) {
                var f = Object.getOwnPropertySymbols(A);
                for (B = 0; B < f.length; B++) ((g = f[B]), !(v.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (t[g] = A[g]));
            }
            return t;
        })(A, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (v) {
        case b.x_.SWORD:
            return (0, B.jsx)(
                l.V,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.WATER_DROP:
            return (0, B.jsx)(I.q, d({ primaryTintColor: g }, Z));
        case b.x_.SKULL:
            return (0, B.jsx)(E.D, d({ primaryTintColor: g }, Z));
        case b.x_.TOADSTOOL:
            return (0, B.jsx)(
                a.T,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.MOON:
            return (0, B.jsx)(o.$, d({ primaryTintColor: g }, Z));
        case b.x_.LIGHTNING:
            return (0, B.jsx)(D.F, d({ primaryTintColor: g }, Z));
        case b.x_.LEAF:
            return (0, B.jsx)(n.i, d({ primaryTintColor: g }, Z));
        case b.x_.HEART:
            return (0, B.jsx)(w.h, d({ primaryTintColor: g }, Z));
        case b.x_.FIRE:
            return (0, B.jsx)(C.G, d({ primaryTintColor: g }, Z));
        case b.x_.COMPASS:
            return (0, B.jsx)(
                t.Q,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.CROSSHAIRS:
            return (0, B.jsx)(
                f.Q,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.FLOWER:
            return (0, B.jsx)(
                e.N,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.FORCE:
            return (0, B.jsx)(
                r.S,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.GEM:
            return (0, B.jsx)(
                Q.S,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.LAVA:
            return (0, B.jsx)(
                h.h,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.PSYCHIC:
            return (0, B.jsx)(
                M.L,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.SMOKE:
            return (0, B.jsx)(
                s.w,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.SNOW:
            return (0, B.jsx)(
                i.X,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.SOUND:
            return (0, B.jsx)(
                P.H,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.SUN:
            return (0, B.jsx)(
                H.k,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
        case b.x_.WIND:
            return (0, B.jsx)(
                c.A,
                d(
                    {
                        primaryTintColor: g,
                        secondaryTintColor: p
                    },
                    Z
                )
            );
    }
    return null;
};
