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
    g = r(933632),
    Z = r(158188),
    j = r(66334),
    M = r(215635),
    O = r(718572),
    y = r(496223),
    m = r(846262),
    H = r(926372),
    x = r(116175);
function V(e) {
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
        C = (function (e, t) {
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
        case x.ZD.SWORD:
            return (0, n.jsx)(
                O.o,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.WATER_DROP:
            return (0, n.jsx)(m.l, V({ primaryTintColor: r }, C));
        case x.ZD.SKULL:
            return (0, n.jsx)(b.F, V({ primaryTintColor: r }, C));
        case x.ZD.TOADSTOOL:
            return (0, n.jsx)(
                y.j,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.MOON:
            return (0, n.jsx)(p.V, V({ primaryTintColor: r }, C));
        case x.ZD.LIGHTNING:
            return (0, n.jsx)(f.$, V({ primaryTintColor: r }, C));
        case x.ZD.LEAF:
            return (0, n.jsx)(u.N, V({ primaryTintColor: r }, C));
        case x.ZD.HEART:
            return (0, n.jsx)(h.K, V({ primaryTintColor: r }, C));
        case x.ZD.FIRE:
            return (0, n.jsx)(o.e, V({ primaryTintColor: r }, C));
        case x.ZD.COMPASS:
            return (0, n.jsx)(
                i._,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.CROSSHAIRS:
            return (0, n.jsx)(
                s.U,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.FLOWER:
            return (0, n.jsx)(
                l.P,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.FORCE:
            return (0, n.jsx)(
                a.S,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.GEM:
            return (0, n.jsx)(
                c.j,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.LAVA:
            return (0, n.jsx)(
                v.x,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.PSYCHIC:
            return (0, n.jsx)(
                d.y,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.SMOKE:
            return (0, n.jsx)(
                g.l,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.SNOW:
            return (0, n.jsx)(
                Z.W,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.SOUND:
            return (0, n.jsx)(
                j.J,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.SUN:
            return (0, n.jsx)(
                M.O,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
        case x.ZD.WIND:
            return (0, n.jsx)(
                H.z,
                V(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: w
                    },
                    C
                )
            );
    }
    return null;
};
