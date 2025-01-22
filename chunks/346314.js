r.d(n, {
    P: function () {
        return h;
    },
    r: function () {
        return p;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(756715),
    u = r(607070),
    c = r(109161),
    d = r(213275);
function f(e) {
    let { roleStyle: n, name: r, color: a, roleName: s, dotAlignment: l = 'left', className: u } = e,
        f = 'username' === n,
        p =
            'dot' === n
                ? (0, i.jsx)(c.F, {
                      color: a,
                      name: s,
                      className: 'left' === l ? d.roleDotLeft : d.roleDotRight
                  })
                : null;
    return (0, i.jsxs)('span', {
        style: { color: f && null != a ? a : void 0 },
        className: o()(u, { [d.username]: f }),
        children: ['left' === l && p, r, 'right' === l && p]
    });
}
function p(e) {
    let { name: n, color: r, roleName: a, dotAlignment: o, className: c, ...d } = e,
        p = (0, s.e7)([u.Z], () => u.Z.roleStyle),
        h = 'username' === p,
        _ = (0, i.jsx)(f, {
            roleStyle: p,
            name: n,
            color: r,
            roleName: a,
            dotAlignment: o,
            className: c
        }),
        m = h ? { color: r } : void 0;
    return (0, i.jsx)(l.Anchor, {
        ...d,
        children: _,
        style: m
    });
}
function h(e) {
    let n = (0, s.e7)([u.Z], () => u.Z.roleStyle);
    return (0, i.jsx)(f, {
        ...e,
        roleStyle: n
    });
}
