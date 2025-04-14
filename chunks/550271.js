e.d(t, { A: () => w });
var v = e(200651);
e(192379);
var r = e(496532),
    n = e(514904),
    i = e(72977),
    l = e(746479),
    o = e(419643),
    a = e(561015),
    s = e(775259),
    Z = e(283107),
    f = e(907120),
    M = e(533122),
    c = e(874706),
    p = e(137411),
    H = e(775101),
    V = e(933632),
    b = e(158188),
    j = e(66334),
    y = e(215635),
    u = e(718572),
    O = e(496223),
    d = e(846262),
    x = e(926372),
    g = e(116175);
function m(h) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {},
            v = Object.keys(e);
        'function' == typeof Object.getOwnPropertySymbols &&
            (v = v.concat(
                Object.getOwnPropertySymbols(e).filter(function (h) {
                    return Object.getOwnPropertyDescriptor(e, h).enumerable;
                })
            )),
            v.forEach(function (t) {
                var v;
                (v = e[t]),
                    t in h
                        ? Object.defineProperty(h, t, {
                              value: v,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (h[t] = v);
            });
    }
    return h;
}
let w = (h) => {
    var { badge: t, primaryTintColor: e, secondaryTintColor: w } = h,
        P = (function (h, t) {
            if (null == h) return {};
            var e,
                v,
                r = (function (h, t) {
                    if (null == h) return {};
                    var e,
                        v,
                        r = {},
                        n = Object.keys(h);
                    for (v = 0; v < n.length; v++) (e = n[v]), t.indexOf(e) >= 0 || (r[e] = h[e]);
                    return r;
                })(h, t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(h);
                for (v = 0; v < n.length; v++) (e = n[v]), !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(h, e) && (r[e] = h[e]);
            }
            return r;
        })(h, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (t) {
        case g.ZD.SWORD:
            return (0, v.jsx)(
                u.o,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.WATER_DROP:
            return (0, v.jsx)(d.l, m({ primaryTintColor: e }, P));
        case g.ZD.SKULL:
            return (0, v.jsx)(H.F, m({ primaryTintColor: e }, P));
        case g.ZD.TOADSTOOL:
            return (0, v.jsx)(
                O.j,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.MOON:
            return (0, v.jsx)(c.V, m({ primaryTintColor: e }, P));
        case g.ZD.LIGHTNING:
            return (0, v.jsx)(M.$, m({ primaryTintColor: e }, P));
        case g.ZD.LEAF:
            return (0, v.jsx)(f.N, m({ primaryTintColor: e }, P));
        case g.ZD.HEART:
            return (0, v.jsx)(s.K, m({ primaryTintColor: e }, P));
        case g.ZD.FIRE:
            return (0, v.jsx)(i.e, m({ primaryTintColor: e }, P));
        case g.ZD.COMPASS:
            return (0, v.jsx)(
                r._,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.CROSSHAIRS:
            return (0, v.jsx)(
                n.U,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.FLOWER:
            return (0, v.jsx)(
                l.P,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.FORCE:
            return (0, v.jsx)(
                o.S,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.GEM:
            return (0, v.jsx)(
                a.j,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.LAVA:
            return (0, v.jsx)(
                Z.x,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.PSYCHIC:
            return (0, v.jsx)(
                p.y,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.SMOKE:
            return (0, v.jsx)(
                V.l,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.SNOW:
            return (0, v.jsx)(
                b.W,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.SOUND:
            return (0, v.jsx)(
                j.J,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.SUN:
            return (0, v.jsx)(
                y.O,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
        case g.ZD.WIND:
            return (0, v.jsx)(
                x.z,
                m(
                    {
                        primaryTintColor: e,
                        secondaryTintColor: w
                    },
                    P
                )
            );
    }
    return null;
};
