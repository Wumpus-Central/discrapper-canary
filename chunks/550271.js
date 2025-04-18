r.d(t, { A: () => w });
var n = r(200651);
r(192379);
var i = r(496532),
    s = r(514904),
    o = r(72977),
    l = r(746479),
    a = r(419643),
    c = r(561015),
    h = r(775259),
    v = r(283107),
    u = r(907120),
    f = r(533122),
    p = r(874706),
    d = r(137411),
    b = r(775101),
    Z = r(933632),
    M = r(158188),
    g = r(66334),
    j = r(215635),
    O = r(718572),
    y = r(496223),
    m = r(846262),
    H = r(926372),
    V = r(116175);
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
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (t) {
        case V.ZD.SWORD:
            return (0, n.jsx)(
                O.o,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.WATER_DROP:
            return (0, n.jsx)(m.l, x({ primaryTintColor: r }, P));
        case V.ZD.SKULL:
            return (0, n.jsx)(b.F, x({ primaryTintColor: r }, P));
        case V.ZD.TOADSTOOL:
            return (0, n.jsx)(
                y.j,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.MOON:
            return (0, n.jsx)(p.V, x({ primaryTintColor: r }, P));
        case V.ZD.LIGHTNING:
            return (0, n.jsx)(f.$, x({ primaryTintColor: r }, P));
        case V.ZD.LEAF:
            return (0, n.jsx)(u.N, x({ primaryTintColor: r }, P));
        case V.ZD.HEART:
            return (0, n.jsx)(h.K, x({ primaryTintColor: r }, P));
        case V.ZD.FIRE:
            return (0, n.jsx)(o.e, x({ primaryTintColor: r }, P));
        case V.ZD.COMPASS:
            return (0, n.jsx)(
                i._,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.CROSSHAIRS:
            return (0, n.jsx)(
                s.U,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.FLOWER:
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
        case V.ZD.FORCE:
            return (0, n.jsx)(
                a.S,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.GEM:
            return (0, n.jsx)(
                c.j,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.LAVA:
            return (0, n.jsx)(
                v.x,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.PSYCHIC:
            return (0, n.jsx)(
                d.y,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.SMOKE:
            return (0, n.jsx)(
                Z.l,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.SNOW:
            return (0, n.jsx)(
                M.W,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.SOUND:
            return (0, n.jsx)(
                g.J,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.SUN:
            return (0, n.jsx)(
                j.O,
                x(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case V.ZD.WIND:
            return (0, n.jsx)(
                H.z,
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
