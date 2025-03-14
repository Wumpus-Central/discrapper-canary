r.d(t, { A: () => y });
var n = r(200651);
r(192379);
var l = r(496532),
    i = r(514904),
    a = r(72977),
    o = r(746479),
    s = r(419643),
    h = r(561015),
    c = r(775259),
    v = r(283107),
    u = r(907120),
    d = r(533122),
    E = r(874706),
    f = r(137411),
    p = r(775101),
    M = r(933632),
    _ = r(158188),
    O = r(66334),
    g = r(215635),
    b = r(718572),
    A = r(496223),
    T = r(846262),
    Z = r(926372),
    N = r(116175);
function H(e) {
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
let y = (e) => {
    var { badge: t, primaryTintColor: r, secondaryTintColor: y } = e,
        j = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (t) {
        case N.ZD.SWORD:
            return (0, n.jsx)(
                b.o,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.WATER_DROP:
            return (0, n.jsx)(T.l, H({ primaryTintColor: r }, j));
        case N.ZD.SKULL:
            return (0, n.jsx)(p.F, H({ primaryTintColor: r }, j));
        case N.ZD.TOADSTOOL:
            return (0, n.jsx)(
                A.j,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.MOON:
            return (0, n.jsx)(E.V, H({ primaryTintColor: r }, j));
        case N.ZD.LIGHTNING:
            return (0, n.jsx)(d.$, H({ primaryTintColor: r }, j));
        case N.ZD.LEAF:
            return (0, n.jsx)(u.N, H({ primaryTintColor: r }, j));
        case N.ZD.HEART:
            return (0, n.jsx)(c.K, H({ primaryTintColor: r }, j));
        case N.ZD.FIRE:
            return (0, n.jsx)(a.e, H({ primaryTintColor: r }, j));
        case N.ZD.COMPASS:
            return (0, n.jsx)(
                l._,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.CROSSHAIRS:
            return (0, n.jsx)(
                i.U,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.FLOWER:
            return (0, n.jsx)(
                o.P,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.FORCE:
            return (0, n.jsx)(
                s.S,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.GEM:
            return (0, n.jsx)(
                h.j,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.LAVA:
            return (0, n.jsx)(
                v.x,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.PSYCHIC:
            return (0, n.jsx)(
                f.y,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.SMOKE:
            return (0, n.jsx)(
                M.l,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.SNOW:
            return (0, n.jsx)(
                _.W,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.SOUND:
            return (0, n.jsx)(
                O.J,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.SUN:
            return (0, n.jsx)(
                g.O,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
        case N.ZD.WIND:
            return (0, n.jsx)(
                Z.z,
                H(
                    {
                        primaryTintColor: r,
                        secondaryTintColor: y
                    },
                    j
                )
            );
    }
    return null;
};
