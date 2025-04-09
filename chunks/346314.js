n.d(t, {
    P: () => y,
    r: () => b
});
var r = n(200651);
n(192379);
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
    let { roleStyle: t, name: n, color: i, roleName: a, roleColors: s, dotAlignment: l = 'left', className: f } = e,
        p = 'username' === t,
        h = 'dot' === t,
        m = p && null != s && null != s.primaryColor && null != s.secondaryColor,
        { text: g, gradient: E } = (0, c.N)(null == s ? void 0 : s.primaryColor, null == s ? void 0 : s.secondaryColor, null == s ? void 0 : s.tertiaryColor),
        b = h
            ? (0, r.jsx)(u.F, {
                  color: i,
                  name: a,
                  className: 'left' === l ? d.roleDotLeft : d.roleDotRight
              })
            : null;
    return (0, r.jsxs)('span', {
        style: _({ color: p && !m && null != i ? i : void 0 }, m ? g.gradientStyle : {}),
        'data-text': m ? n : '',
        className: o()(f, {
            [d.username]: p,
            [g.gradientClassName]: m,
            [E.gradientClassName]: m
        }),
        children: ['left' === l && b, n, 'right' === l && b]
    });
}
function b(e) {
    let { name: t, color: n, roleName: i, dotAlignment: o, className: c, roleColors: u } = e,
        d = m(e, ['name', 'color', 'roleName', 'dotAlignment', 'className', 'roleColors']),
        f = (0, a.e7)([l.Z], () => l.Z.roleStyle),
        p = 'username' === f,
        g = (0, r.jsx)(E, {
            roleStyle: f,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: o,
            className: c,
            roleColors: u
        }),
        b = p ? { color: n } : void 0;
    return (0, r.jsx)(
        s.Anchor,
        h(_({}, d), {
            children: g,
            style: b
        })
    );
}
function y(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.roleStyle);
    return (0, r.jsx)(E, h(_({}, e), { roleStyle: t }));
}
