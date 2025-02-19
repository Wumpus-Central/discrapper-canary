n.d(t, {
    P: () => v,
    r: () => E
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(756715),
    l = n(607070),
    c = n(109161),
    u = n(290828);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function _(e, t) {
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { roleStyle: t, name: n, color: i, roleName: a, dotAlignment: s = 'left', className: l } = e,
        d = 'username' === t,
        f =
            'dot' === t
                ? (0, r.jsx)(c.F, {
                      color: i,
                      name: a,
                      className: 'left' === s ? u.roleDotLeft : u.roleDotRight
                  })
                : null;
    return (0, r.jsxs)('span', {
        style: { color: d && null != i ? i : void 0 },
        className: o()(l, { [u.username]: d }),
        children: ['left' === s && f, n, 'right' === s && f]
    });
}
function E(e) {
    let { name: t, color: n, roleName: i, dotAlignment: o, className: c } = e,
        u = h(e, ['name', 'color', 'roleName', 'dotAlignment', 'className']),
        d = (0, a.e7)([l.Z], () => l.Z.roleStyle),
        p = 'username' === d,
        m = (0, r.jsx)(g, {
            roleStyle: d,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: o,
            className: c
        }),
        E = p ? { color: n } : void 0;
    return (0, r.jsx)(
        s.Anchor,
        _(f({}, u), {
            children: m,
            style: E
        })
    );
}
function v(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.roleStyle);
    return (0, r.jsx)(g, _(f({}, e), { roleStyle: t }));
}
