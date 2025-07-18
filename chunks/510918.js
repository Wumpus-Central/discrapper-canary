t.d(e, { v: () => Z });
var n = t(255367);
t(73800);
var r = t(397110),
    l = t(79312),
    i = t(25960),
    s = t(706484),
    a = t(819837),
    o = t(165440),
    g = t(21822),
    f = t(285916),
    c = t(168646),
    v = t(470831),
    h = t(96824),
    u = t(187485),
    E = t(713897),
    d = t(886512),
    C = t(560701),
    B = t(678563),
    w = t(573508),
    D = t(164175),
    M = t(441787),
    I = t(292184),
    p = t(117243),
    H = t(997109),
    b = t(606650),
    Q = t(117257),
    O = t(214067),
    P = t(803193),
    V = t(900689),
    j = t(498103),
    T = t(586131),
    y = t(931512),
    m = t(350136),
    L = t(131085);
function x(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                })
            )),
            n.forEach(function (e) {
                var n;
                ((n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (A[e] = n));
            }));
    }
    return A;
}
let Z = (A) => {
    var { badge: e, primaryTintColor: t, secondaryTintColor: Z } = A,
        N = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
            }
            return r;
        })(A, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (e) {
        case L.x_.SWORD:
            return (0, n.jsx)(
                V.V,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.WATER_DROP:
            return (0, n.jsx)(y.q, x({ primaryTintColor: t }, N));
        case L.x_.SKULL:
            return (0, n.jsx)(H.D, x({ primaryTintColor: t }, N));
        case L.x_.TOADSTOOL:
            return (0, n.jsx)(
                j.T,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.MOON:
            return (0, n.jsx)(I.$, x({ primaryTintColor: t }, N));
        case L.x_.LIGHTNING:
            return (0, n.jsx)(D.F, x({ primaryTintColor: t }, N));
        case L.x_.LEAF:
            return (0, n.jsx)(w.i, x({ primaryTintColor: t }, N));
        case L.x_.HEART:
            return (0, n.jsx)(C.h, x({ primaryTintColor: t }, N));
        case L.x_.FIRE:
            return (0, n.jsx)(c.G, x({ primaryTintColor: t }, N));
        case L.x_.COMPASS:
            return (0, n.jsx)(
                i.Q,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.CROSSHAIRS:
            return (0, n.jsx)(
                s.Q,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.FLOWER:
            return (0, n.jsx)(
                v.N,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.FORCE:
            return (0, n.jsx)(
                h.S,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.GEM:
            return (0, n.jsx)(
                E.S,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.LAVA:
            return (0, n.jsx)(
                B.h,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.PSYCHIC:
            return (0, n.jsx)(
                p.L,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.SMOKE:
            return (0, n.jsx)(
                b.w,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.SNOW:
            return (0, n.jsx)(
                Q.X,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.SOUND:
            return (0, n.jsx)(
                O.H,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.SUN:
            return (0, n.jsx)(
                P.k,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.WIND:
            return (0, n.jsx)(
                m.A,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.BUNNY:
            return (0, n.jsx)(r.K, x({ primaryTintColor: t }, N));
        case L.x_.DOG:
            return (0, n.jsx)(
                g.h,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.FROG:
            return (0, n.jsx)(
                u.L,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.GOAT:
            return (0, n.jsx)(d.V, x({ primaryTintColor: t }, N));
        case L.x_.CAT:
            return (0, n.jsx)(l.W, x({ primaryTintColor: t }, N));
        case L.x_.DIAMOND:
            return (0, n.jsx)(o.T, x({ primaryTintColor: t }, N));
        case L.x_.CROWN:
            return (0, n.jsx)(
                a.O,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: Z
                    },
                    N
                )
            );
        case L.x_.TROPHY:
            return (0, n.jsx)(T.o, x({ primaryTintColor: t }, N));
        case L.x_.MONEY_BAG:
            return (0, n.jsx)(M.k, x({ primaryTintColor: t }, N));
        case L.x_.DOLLAR_SIGN:
            return (0, n.jsx)(f.W, x({ primaryTintColor: t }, N));
    }
    return null;
};
