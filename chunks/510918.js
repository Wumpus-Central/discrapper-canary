v.d(g, { v: () => j });
var t = v(255367);
v(73800);
var B = v(397110),
    e = v(79312),
    f = v(25960),
    r = v(706484),
    C = v(21822),
    h = v(168646),
    w = v(470831),
    Q = v(96824),
    n = v(187485),
    D = v(713897),
    o = v(886512),
    l = v(560701),
    i = v(678563),
    s = v(573508),
    M = v(164175),
    H = v(292184),
    a = v(117243),
    E = v(997109),
    c = v(606650),
    P = v(117257),
    b = v(214067),
    p = v(803193),
    d = v(900689),
    I = v(498103),
    V = v(931512),
    Z = v(350136),
    y = v(131085);
function O(A) {
    for (var g = 1; g < arguments.length; g++) {
        var v = null != arguments[g] ? arguments[g] : {},
            t = Object.keys(v);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(v).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(v, A).enumerable;
                })
            )),
            t.forEach(function (g) {
                var t;
                ((t = v[g]),
                    g in A
                        ? Object.defineProperty(A, g, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[g] = t));
            }));
    }
    return A;
}
let j = (A) => {
    var { badge: g, primaryTintColor: v, secondaryTintColor: j } = A,
        u = (function (A, g) {
            if (null == A) return {};
            var v,
                t,
                B = (function (A, g) {
                    if (null == A) return {};
                    var v,
                        t,
                        B = {},
                        e = Object.keys(A);
                    for (t = 0; t < e.length; t++) ((v = e[t]), g.indexOf(v) >= 0 || (B[v] = A[v]));
                    return B;
                })(A, g);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(A);
                for (t = 0; t < e.length; t++) ((v = e[t]), !(g.indexOf(v) >= 0) && Object.prototype.propertyIsEnumerable.call(A, v) && (B[v] = A[v]));
            }
            return B;
        })(A, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (g) {
        case y.x_.SWORD:
            return (0, t.jsx)(
                d.V,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.WATER_DROP:
            return (0, t.jsx)(V.q, O({ primaryTintColor: v }, u));
        case y.x_.SKULL:
            return (0, t.jsx)(E.D, O({ primaryTintColor: v }, u));
        case y.x_.TOADSTOOL:
            return (0, t.jsx)(
                I.T,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.MOON:
            return (0, t.jsx)(H.$, O({ primaryTintColor: v }, u));
        case y.x_.LIGHTNING:
            return (0, t.jsx)(M.F, O({ primaryTintColor: v }, u));
        case y.x_.LEAF:
            return (0, t.jsx)(s.i, O({ primaryTintColor: v }, u));
        case y.x_.HEART:
            return (0, t.jsx)(l.h, O({ primaryTintColor: v }, u));
        case y.x_.FIRE:
            return (0, t.jsx)(h.G, O({ primaryTintColor: v }, u));
        case y.x_.COMPASS:
            return (0, t.jsx)(
                f.Q,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.CROSSHAIRS:
            return (0, t.jsx)(
                r.Q,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.FLOWER:
            return (0, t.jsx)(
                w.N,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.FORCE:
            return (0, t.jsx)(
                Q.S,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.GEM:
            return (0, t.jsx)(
                D.S,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.LAVA:
            return (0, t.jsx)(
                i.h,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.PSYCHIC:
            return (0, t.jsx)(
                a.L,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.SMOKE:
            return (0, t.jsx)(
                c.w,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.SNOW:
            return (0, t.jsx)(
                P.X,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.SOUND:
            return (0, t.jsx)(
                b.H,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.SUN:
            return (0, t.jsx)(
                p.k,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.WIND:
            return (0, t.jsx)(
                Z.A,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.BUNNY:
            return (0, t.jsx)(B.K, O({ primaryTintColor: v }, u));
        case y.x_.DOG:
            return (0, t.jsx)(
                C.h,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.FROG:
            return (0, t.jsx)(
                n.L,
                O(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: j
                    },
                    u
                )
            );
        case y.x_.GOAT:
            return (0, t.jsx)(o.V, O({ primaryTintColor: v }, u));
        case y.x_.CAT:
            return (0, t.jsx)(e.W, O({ primaryTintColor: v }, u));
    }
    return null;
};
