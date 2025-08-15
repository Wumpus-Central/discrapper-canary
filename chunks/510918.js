t.d(e, { v: () => N });
var n = t(255367);
t(73800);
var r = t(397110),
    l = t(79312),
    i = t(25960),
    a = t(706484),
    s = t(819837),
    o = t(165440),
    g = t(21822),
    c = t(285916),
    f = t(168646),
    v = t(470831),
    u = t(96824),
    h = t(187485),
    d = t(713897),
    E = t(886512),
    C = t(560701),
    B = t(678563),
    w = t(573508),
    D = t(164175),
    M = t(441787),
    p = t(292184),
    I = t(117243),
    H = t(997109),
    b = t(606650),
    O = t(117257),
    Q = t(214067),
    P = t(803193),
    j = t(900689),
    V = t(498103),
    m = t(586131),
    T = t(931512),
    y = t(350136),
    L = t(131085);
function x(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
let N = (A) => {
    var { badge: e, primaryTintColor: t, secondaryTintColor: N } = A,
        Z = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++)
                    (t = l[n]),
                        !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]);
            }
            return r;
        })(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
    switch (e) {
        case L.x_.SWORD:
            return (0, n.jsx)(
                j.V,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.WATER_DROP:
            return (0, n.jsx)(T.q, x({ primaryTintColor: t }, Z));
        case L.x_.SKULL:
            return (0, n.jsx)(H.D, x({ primaryTintColor: t }, Z));
        case L.x_.TOADSTOOL:
            return (0, n.jsx)(
                V.T,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.MOON:
            return (0, n.jsx)(p.$, x({ primaryTintColor: t }, Z));
        case L.x_.LIGHTNING:
            return (0, n.jsx)(D.F, x({ primaryTintColor: t }, Z));
        case L.x_.LEAF:
            return (0, n.jsx)(w.i, x({ primaryTintColor: t }, Z));
        case L.x_.HEART:
            return (0, n.jsx)(C.h, x({ primaryTintColor: t }, Z));
        case L.x_.FIRE:
            return (0, n.jsx)(f.G, x({ primaryTintColor: t }, Z));
        case L.x_.COMPASS:
            return (0, n.jsx)(
                i.Q,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.CROSSHAIRS:
            return (0, n.jsx)(
                a.Q,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.FLOWER:
            return (0, n.jsx)(
                v.N,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.FORCE:
            return (0, n.jsx)(
                u.S,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.GEM:
            return (0, n.jsx)(
                d.S,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.LAVA:
            return (0, n.jsx)(
                B.h,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.PSYCHIC:
            return (0, n.jsx)(
                I.L,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.SMOKE:
            return (0, n.jsx)(
                b.w,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.SNOW:
            return (0, n.jsx)(
                O.X,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.SOUND:
            return (0, n.jsx)(
                Q.H,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.SUN:
            return (0, n.jsx)(
                P.k,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.WIND:
            return (0, n.jsx)(
                y.A,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.BUNNY:
            return (0, n.jsx)(r.K, x({ primaryTintColor: t }, Z));
        case L.x_.DOG:
            return (0, n.jsx)(
                g.h,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.FROG:
            return (0, n.jsx)(
                h.L,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.GOAT:
            return (0, n.jsx)(E.V, x({ primaryTintColor: t }, Z));
        case L.x_.CAT:
            return (0, n.jsx)(l.W, x({ primaryTintColor: t }, Z));
        case L.x_.DIAMOND:
            return (0, n.jsx)(o.T, x({ primaryTintColor: t }, Z));
        case L.x_.CROWN:
            return (0, n.jsx)(
                s.O,
                x(
                    {
                        primaryTintColor: t,
                        secondaryTintColor: N,
                    },
                    Z,
                ),
            );
        case L.x_.TROPHY:
            return (0, n.jsx)(m.o, x({ primaryTintColor: t }, Z));
        case L.x_.MONEY_BAG:
            return (0, n.jsx)(M.k, x({ primaryTintColor: t }, Z));
        case L.x_.DOLLAR_SIGN:
            return (0, n.jsx)(c.W, x({ primaryTintColor: t }, Z));
    }
    return null;
};
