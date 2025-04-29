n.d(t, {
    P: () => y,
    r: () => b
});
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(756715),
    l = n(607070),
    c = n(865672),
    u = n(109161),
    d = n(827171);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let { roleStyle: t, name: n, color: i, roleName: a, roleColors: s, dotAlignment: l = 'left', className: f, animateRoleGradient: p } = e,
        h = 'username' === t,
        m = 'dot' === t,
        g = null != s && null != s.primaryColor && null != s.secondaryColor,
        E = h && g,
        {
            gradientStyle: b,
            gradientClassname: y,
            gradientGlowClassname: O
        } = (0, c.Ic)({
            primaryColor: null == s ? void 0 : s.primaryColor,
            secondaryColor: null == s ? void 0 : s.secondaryColor,
            tertiaryColor: null == s ? void 0 : s.tertiaryColor,
            roleStyle: 'username',
            animateGradient: p
        }),
        v = (0, c.EJ)(n),
        I = m
            ? (0, r.jsx)(u.F, {
                  color: i,
                  colors: g ? s : null,
                  name: a,
                  className: 'left' === l ? d.roleDotLeft : d.roleDotRight
              })
            : null;
    return (0, r.jsxs)('span', {
        className: o()(f, d.container),
        children: [
            'left' === l && I,
            (0, r.jsxs)('span', {
                className: d.nameContainer,
                style: _({ color: h && !g && null != i ? i : void 0 }, E ? b : {}),
                children: [
                    (0, r.jsx)('span', {
                        className: o()(d.name, {
                            [d.username]: h,
                            [y]: E
                        }),
                        children: v
                    }),
                    E &&
                        (0, r.jsx)('span', {
                            'aria-hidden': !0,
                            className: o()(d.nameGlow, O),
                            children: n
                        })
                ]
            }),
            'right' === l && I
        ]
    });
}
function b(e) {
    let { name: t, color: n, roleName: i, dotAlignment: o, className: c, roleColors: u, animateRoleGradient: d } = e,
        f = m(e, ['name', 'color', 'roleName', 'dotAlignment', 'className', 'roleColors', 'animateRoleGradient']),
        p = (0, a.e7)([l.Z], () => l.Z.roleStyle),
        g = 'username' === p,
        b = (0, r.jsx)(E, {
            roleStyle: p,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: o,
            className: c,
            roleColors: u,
            animateRoleGradient: d
        }),
        y = g ? { color: n } : void 0;
    return (0, r.jsx)(
        s.Anchor,
        h(_({}, f), {
            children: b,
            style: y
        })
    );
}
function y(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.roleStyle);
    return (0, r.jsx)(E, h(_({}, e), { roleStyle: t }));
}
