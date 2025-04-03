r.d(t, { A: () => w });
var n = r(200651);
r(192379);
var h = r(496532),
    v = r(514904),
    i = r(72977),
    l = r(746479),
    o = r(419643),
    a = r(561015),
    s = r(775259),
    c = r(283107),
    f = r(907120),
    p = r(533122),
    Z = r(874706),
    u = r(137411),
    M = r(775101),
    d = r(933632),
    b = r(158188),
    H = r(66334),
    y = r(215635),
    V = r(718572),
    j = r(496223),
    O = r(846262),
    g = r(926372),
    m = r(116175);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let w = (e) => {
    var { badge: t, primaryTintColor: r, secondaryTintColor: w } = e,
        P = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                h = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        h = {},
                        v = Object.keys(e);
                    for (n = 0; n < v.length; n++) (r = v[n]), t.indexOf(r) >= 0 || (h[r] = e[r]);
                    return h;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var v = Object.getOwnPropertySymbols(e);
                for (n = 0; n < v.length; n++) (r = v[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (h[r] = e[r]);
            }
            return h;
        })(e, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (t) {
        case m.ZD.SWORD:
            return (0, n.jsx)(
                V.o,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.WATER_DROP:
            return (0, n.jsx)(O.l, x({ primaryTintColor: r }, P));
        case m.ZD.SKULL:
            return (0, n.jsx)(M.F, x({ primaryTintColor: r }, P));
        case m.ZD.TOADSTOOL:
            return (0, n.jsx)(
                j.j,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.MOON:
            return (0, n.jsx)(Z.V, x({ primaryTintColor: r }, P));
        case m.ZD.LIGHTNING:
            return (0, n.jsx)(p.$, x({ primaryTintColor: r }, P));
        case m.ZD.LEAF:
            return (0, n.jsx)(f.N, x({ primaryTintColor: r }, P));
        case m.ZD.HEART:
            return (0, n.jsx)(s.K, x({ primaryTintColor: r }, P));
        case m.ZD.FIRE:
            return (0, n.jsx)(i.e, x({ primaryTintColor: r }, P));
        case m.ZD.COMPASS:
            return (0, n.jsx)(
                h._,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.CROSSHAIRS:
            return (0, n.jsx)(
                v.U,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.FLOWER:
            return (0, n.jsx)(
                l.P,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.FORCE:
            return (0, n.jsx)(
                o.S,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.GEM:
            return (0, n.jsx)(
                a.j,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.LAVA:
            return (0, n.jsx)(
                c.x,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.PSYCHIC:
            return (0, n.jsx)(
                u.y,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.SMOKE:
            return (0, n.jsx)(
                d.l,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.SNOW:
            return (0, n.jsx)(
                b.W,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.SOUND:
            return (0, n.jsx)(
                H.J,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.SUN:
            return (0, n.jsx)(
                y.O,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case m.ZD.WIND:
            return (0, n.jsx)(
                g.z,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
    }
    return null;
};
