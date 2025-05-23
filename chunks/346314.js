n.d(t, {
    P: () => I,
    r: () => v
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(793030),
    l = n(442837),
    c = n(756715),
    u = n(573385),
    d = n(607070),
    f = n(865672),
    _ = n(109161),
    p = n(563319);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let { roleStyle: t, name: n, color: o, roleName: l, roleColors: c, dotAlignment: d = 'left', className: h, animateRoleGradient: g, variant: E } = e,
        b = i.useContext(u.d),
        [y, O] = i.useState(!1),
        v = i.useCallback(() => {
            O(!0);
        }, []),
        I = i.useCallback(() => {
            O(!1);
        }, []),
        S = 'username' === t,
        T = 'dot' === t,
        A = null != c && null != c.primaryColor && null != c.secondaryColor,
        N = S && A,
        {
            gradientStyle: C,
            gradientClassname: P,
            gradientGlowClassname: R
        } = (0, f.Ic)({
            primaryColor: null == c ? void 0 : c.primaryColor,
            secondaryColor: null == c ? void 0 : c.secondaryColor,
            tertiaryColor: null == c ? void 0 : c.tertiaryColor,
            roleStyle: 'username',
            animateGradient: g || y || (null == b ? void 0 : b.animate)
        }),
        w = (0, f.EJ)(n),
        D = {
            className: a()(p.name, {
                [p.username]: S,
                [P]: N
            }),
            children: w
        },
        L = {
            className: a()(p.nameGlow, R),
            children: n
        },
        x = T
            ? (0, r.jsx)(_.F, {
                  color: o,
                  colors: A ? c : null,
                  name: l,
                  className: 'left' === d ? p.roleDotLeft : p.roleDotRight
              })
            : null;
    return (0, r.jsxs)('span', {
        className: a()(h, p.container),
        onMouseEnter: v,
        onMouseLeave: I,
        children: [
            'left' === d && x,
            (0, r.jsxs)('span', {
                className: p.nameContainer,
                style: m({ color: S && !A && null != o ? o : void 0 }, N ? C : {}),
                children: [
                    null != E
                        ? (0, r.jsx)(
                              s.xv,
                              m(
                                  {
                                      tag: 'span',
                                      color: 'currentColor',
                                      variant: E
                                  },
                                  D
                              )
                          )
                        : (0, r.jsx)('span', m({}, D)),
                    N &&
                        (null != E
                            ? (0, r.jsx)(
                                  s.xv,
                                  m(
                                      {
                                          tag: 'span',
                                          color: 'currentColor',
                                          'aria-hidden': !0,
                                          variant: E
                                      },
                                      L
                                  )
                              )
                            : (0, r.jsx)('span', m({ 'aria-hidden': !0 }, L)))
                ]
            }),
            'right' === d && x
        ]
    });
}
function v(e) {
    let { name: t, color: n, roleName: i, dotAlignment: o, className: a, roleColors: s, animateRoleGradient: u, ref: f } = e,
        _ = b(e, ['name', 'color', 'roleName', 'dotAlignment', 'className', 'roleColors', 'animateRoleGradient', 'ref']),
        p = (0, l.e7)([d.Z], () => d.Z.roleStyle),
        h = 'username' === p,
        g = (0, r.jsx)(O, {
            roleStyle: p,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: o,
            className: a,
            roleColors: s,
            animateRoleGradient: u
        }),
        y = h ? { color: n } : void 0;
    return (0, r.jsx)(
        c.Anchor,
        E(m({}, _), {
            children: g,
            style: y,
            ref: f
        })
    );
}
function I(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.roleStyle);
    return (0, r.jsx)(O, E(m({}, e), { roleStyle: t }));
}
