n.d(t, {
    P: () => O,
    r: () => y
});
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(442837),
    l = n(756715),
    c = n(607070),
    u = n(865672),
    d = n(109161),
    f = n(827171);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    let { roleStyle: t, name: n, color: i, roleName: s, roleColors: l, dotAlignment: c = 'left', className: _, animateRoleGradient: h, variant: m } = e,
        g = 'username' === t,
        E = 'dot' === t,
        b = null != l && null != l.primaryColor && null != l.secondaryColor,
        y = g && b,
        {
            gradientStyle: O,
            gradientClassname: v,
            gradientGlowClassname: I
        } = (0, u.Ic)({
            primaryColor: null == l ? void 0 : l.primaryColor,
            secondaryColor: null == l ? void 0 : l.secondaryColor,
            tertiaryColor: null == l ? void 0 : l.tertiaryColor,
            roleStyle: 'username',
            animateGradient: h
        }),
        S = (0, u.EJ)(n),
        T = {
            className: o()(f.name, {
                [f.username]: g,
                [v]: y
            }),
            children: S
        },
        A = {
            className: o()(f.nameGlow, I),
            children: n
        },
        N = E
            ? (0, r.jsx)(d.F, {
                  color: i,
                  colors: b ? l : null,
                  name: s,
                  className: 'left' === c ? f.roleDotLeft : f.roleDotRight
              })
            : null;
    return (0, r.jsxs)('span', {
        className: o()(_, f.container),
        children: [
            'left' === c && N,
            (0, r.jsxs)('span', {
                className: f.nameContainer,
                style: p({ color: g && !b && null != i ? i : void 0 }, y ? O : {}),
                children: [
                    null != m
                        ? (0, r.jsx)(
                              a.xv,
                              p(
                                  {
                                      tag: 'span',
                                      color: 'currentColor',
                                      variant: m
                                  },
                                  T
                              )
                          )
                        : (0, r.jsx)('span', p({}, T)),
                    y &&
                        (null != m
                            ? (0, r.jsx)(
                                  a.xv,
                                  p(
                                      {
                                          tag: 'span',
                                          color: 'currentColor',
                                          'aria-hidden': !0,
                                          variant: m
                                      },
                                      A
                                  )
                              )
                            : (0, r.jsx)('span', p({ 'aria-hidden': !0 }, A)))
                ]
            }),
            'right' === c && N
        ]
    });
}
function y(e) {
    let { name: t, color: n, roleName: i, dotAlignment: o, className: a, roleColors: u, animateRoleGradient: d } = e,
        f = g(e, ['name', 'color', 'roleName', 'dotAlignment', 'className', 'roleColors', 'animateRoleGradient']),
        _ = (0, s.e7)([c.Z], () => c.Z.roleStyle),
        h = 'username' === _,
        E = (0, r.jsx)(b, {
            roleStyle: _,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: o,
            className: a,
            roleColors: u,
            animateRoleGradient: d
        }),
        y = h ? { color: n } : void 0;
    return (0, r.jsx)(
        l.Anchor,
        m(p({}, f), {
            children: E,
            style: y
        })
    );
}
function O(e) {
    let t = (0, s.e7)([c.Z], () => c.Z.roleStyle);
    return (0, r.jsx)(b, m(p({}, e), { roleStyle: t }));
}
