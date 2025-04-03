n.d(t, {
    P: () => b,
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
    u = n(827171);
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
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
    let { roleStyle: t, name: n, color: i, roleName: a, roleGradient: s, dotAlignment: l = 'left', className: d } = e,
        _ = 'username' === t,
        p = _ && null != s,
        { text: h, gradient: m } =
            null != s
                ? s
                : {
                      text: {
                          gradientClassName: '',
                          gradientStyle: {}
                      },
                      gradient: { gradientClassName: '' }
                  },
        g =
            'dot' === t
                ? (0, r.jsx)(c.F, {
                      color: i,
                      name: a,
                      className: 'left' === l ? u.roleDotLeft : u.roleDotRight
                  })
                : null;
    return (0, r.jsxs)('span', {
        style: f({ color: _ && !p && null != i ? i : void 0 }, h.gradientStyle),
        'data-text': p ? n : '',
        className: o()(d, {
            [u.username]: _,
            [h.gradientClassName]: p,
            [m.gradientClassName]: p
        }),
        children: ['left' === l && g, n, 'right' === l && g]
    });
}
function E(e) {
    let { name: t, color: n, roleName: i, dotAlignment: o, className: c, roleGradient: u } = e,
        d = h(e, ['name', 'color', 'roleName', 'dotAlignment', 'className', 'roleGradient']),
        _ = (0, a.e7)([l.Z], () => l.Z.roleStyle),
        m = 'username' === _,
        E = (0, r.jsx)(g, {
            roleStyle: _,
            name: t,
            color: n,
            roleName: i,
            dotAlignment: o,
            className: c,
            roleGradient: u
        }),
        b = m ? { color: n } : void 0;
    return (0, r.jsx)(
        s.Anchor,
        p(f({}, d), {
            children: E,
            style: b
        })
    );
}
function b(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.roleStyle);
    return (0, r.jsx)(g, p(f({}, e), { roleStyle: t }));
}
