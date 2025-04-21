v.d(g, { A: () => p });
var B = v(200651);
v(192379);
var t = v(496532),
    e = v(514904),
    f = v(72977),
    r = v(746479),
    C = v(419643),
    h = v(561015),
    n = v(775259),
    w = v(283107),
    Q = v(907120),
    D = v(533122),
    o = v(874706),
    s = v(137411),
    i = v(775101),
    M = v(933632),
    a = v(158188),
    l = v(66334),
    E = v(215635),
    c = v(718572),
    P = v(496223),
    d = v(846262),
    H = v(926372),
    I = v(116175);
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
        case I.ZD.SWORD:
            return (0, B.jsx)(
                c.o,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.WATER_DROP:
            return (0, B.jsx)(d.l, b({ primaryTintColor: v }, y));
        case I.ZD.SKULL:
            return (0, B.jsx)(i.F, b({ primaryTintColor: v }, y));
        case I.ZD.TOADSTOOL:
            return (0, B.jsx)(
                P.j,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.MOON:
            return (0, B.jsx)(o.V, b({ primaryTintColor: v }, y));
        case I.ZD.LIGHTNING:
            return (0, B.jsx)(D.$, b({ primaryTintColor: v }, y));
        case I.ZD.LEAF:
            return (0, B.jsx)(Q.N, b({ primaryTintColor: v }, y));
        case I.ZD.HEART:
            return (0, B.jsx)(n.K, b({ primaryTintColor: v }, y));
        case I.ZD.FIRE:
            return (0, B.jsx)(f.e, b({ primaryTintColor: v }, y));
        case I.ZD.COMPASS:
            return (0, B.jsx)(
                t._,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.CROSSHAIRS:
            return (0, B.jsx)(
                e.U,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.FLOWER:
            return (0, B.jsx)(
                r.P,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.FORCE:
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
        case I.ZD.GEM:
            return (0, B.jsx)(
                h.j,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.LAVA:
            return (0, B.jsx)(
                w.x,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.PSYCHIC:
            return (0, B.jsx)(
                s.y,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.SMOKE:
            return (0, B.jsx)(
                M.l,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.SNOW:
            return (0, B.jsx)(
                a.W,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.SOUND:
            return (0, B.jsx)(
                l.J,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.SUN:
            return (0, B.jsx)(
                E.O,
                b(
                    {
                        primaryTintColor: v,
                        secondaryTintColor: p
                    },
                    y
                )
            );
        case I.ZD.WIND:
            return (0, B.jsx)(
                H.z,
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
