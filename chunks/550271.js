n.d(t, { A: () => P });
var r = n(200651);
n(192379);
var i = n(496532),
    o = n(514904),
    a = n(72977),
    s = n(746479),
    l = n(419643),
    c = n(561015),
    u = n(775259),
    d = n(283107),
    f = n(907120),
    p = n(533122),
    _ = n(874706),
    h = n(137411),
    m = n(775101),
    g = n(933632),
    E = n(158188),
    v = n(66334),
    b = n(215635),
    y = n(718572),
    O = n(496223),
    S = n(846262),
    I = n(926372),
    T = n(116175);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = (e) => {
    var { badge: t, primaryTintColor: n, secondaryTintColor: N } = e,
        R = C(e, ['badge', 'primaryTintColor', 'secondaryTintColor']);
    switch (t) {
        case T.ZD.SWORD:
            return (0, r.jsx)(
                y.o,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.WATER_DROP:
            return (0, r.jsx)(S.l, A({ primaryTintColor: n }, R));
        case T.ZD.SKULL:
            return (0, r.jsx)(m.F, A({ primaryTintColor: n }, R));
        case T.ZD.TOADSTOOL:
            return (0, r.jsx)(
                O.j,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.MOON:
            return (0, r.jsx)(_.V, A({ primaryTintColor: n }, R));
        case T.ZD.LIGHTNING:
            return (0, r.jsx)(p.$, A({ primaryTintColor: n }, R));
        case T.ZD.LEAF:
            return (0, r.jsx)(f.N, A({ primaryTintColor: n }, R));
        case T.ZD.HEART:
            return (0, r.jsx)(u.K, A({ primaryTintColor: n }, R));
        case T.ZD.FIRE:
            return (0, r.jsx)(a.e, A({ primaryTintColor: n }, R));
        case T.ZD.COMPASS:
            return (0, r.jsx)(
                i._,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.CROSSHAIRS:
            return (0, r.jsx)(
                o.U,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.FLOWER:
            return (0, r.jsx)(
                s.P,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.FORCE:
            return (0, r.jsx)(
                l.S,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.GEM:
            return (0, r.jsx)(
                c.j,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.LAVA:
            return (0, r.jsx)(
                d.x,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.PSYCHIC:
            return (0, r.jsx)(
                h.y,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.SMOKE:
            return (0, r.jsx)(
                g.l,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.SNOW:
            return (0, r.jsx)(
                E.W,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.SOUND:
            return (0, r.jsx)(
                v.J,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.SUN:
            return (0, r.jsx)(
                b.O,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
        case T.ZD.WIND:
            return (0, r.jsx)(
                I.z,
                A(
                    {
                        primaryTintColor: n,
                        secondaryTintColor: N
                    },
                    R
                )
            );
    }
    return null;
};
