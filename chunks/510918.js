v.d(g, { v: () => p });
var B = v(200651);
v(192379);
var t = v(25960),
    e = v(706484),
    f = v(168646),
    r = v(470831),
    C = v(96824),
    h = v(713897),
    n = v(560701),
    w = v(678563),
    Q = v(573508),
    D = v(164175),
    o = v(292184),
    s = v(117243),
    i = v(997109),
    M = v(606650),
    a = v(117257),
    l = v(214067),
    E = v(803193),
    c = v(900689),
    P = v(498103),
    d = v(931512),
    H = v(350136),
    I = v(131085);
function b(A) {
    for (var g = 1; g < arguments.length; g++) {
        var v = null != arguments[g] ? arguments[g] : {},
            B = Object.keys(v);
        'function' == typeof Object.getOwnPropertySymbols &&
            (B = B.concat(
                Object.getOwnPropertySymbols(v).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(v, A).enumerable;
                })
            )),
            B.forEach(function (g) {
                var B;
                (B = v[g]),
                    g in A
                        ? Object.defineProperty(A, g, {
                              value: B,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[g] = B);
            });
    }
    return A;
}
let p = (A) => {
    var { badge: g, primaryTintColor: v, secondaryTintColor: p } = A,
        y = (function (A, g) {
            if (null == A) return {};
            var v,
                B,
                t = (function (A, g) {
                    if (null == A) return {};
                    var v,
                        B,
                        t = {},
                        e = Object.keys(A);
                    for (B = 0; B < e.length; B++) (v = e[B]), g.indexOf(v) >= 0 || (t[v] = A[v]);
                    return t;
                })(A, g);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(A);
                for (B = 0; B < e.length; B++) (v = e[B]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (t[v] = A[v]);
            }
            return t;
        })(A, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (g) {
        case I.x_.SWORD:
            return (0, B.jsx)(
                c.V,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.WATER_DROP:
            return (0, B.jsx)(d.q, b({ primaryTintColor: v }, y));
        case I.x_.SKULL:
            return (0, B.jsx)(i.D, b({ primaryTintColor: v }, y));
        case I.x_.TOADSTOOL:
            return (0, B.jsx)(
                P.T,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.MOON:
            return (0, B.jsx)(o.$, b({ primaryTintColor: v }, y));
        case I.x_.LIGHTNING:
            return (0, B.jsx)(D.F, b({ primaryTintColor: v }, y));
        case I.x_.LEAF:
            return (0, B.jsx)(Q.i, b({ primaryTintColor: v }, y));
        case I.x_.HEART:
            return (0, B.jsx)(n.h, b({ primaryTintColor: v }, y));
        case I.x_.FIRE:
            return (0, B.jsx)(f.G, b({ primaryTintColor: v }, y));
        case I.x_.COMPASS:
            return (0, B.jsx)(
                t.Q,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.CROSSHAIRS:
            return (0, B.jsx)(
                e.Q,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.FLOWER:
            return (0, B.jsx)(
                r.N,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.FORCE:
            return (0, B.jsx)(
                C.S,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.GEM:
            return (0, B.jsx)(
                h.S,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.LAVA:
            return (0, B.jsx)(
                w.h,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.PSYCHIC:
            return (0, B.jsx)(
                s.L,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.SMOKE:
            return (0, B.jsx)(
                M.w,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.SNOW:
            return (0, B.jsx)(
                a.X,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.SOUND:
            return (0, B.jsx)(
                l.H,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.SUN:
            return (0, B.jsx)(
                E.k,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.x_.WIND:
            return (0, B.jsx)(
                H.A,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
    }
    return null;
};
