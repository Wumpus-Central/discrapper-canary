r.d(n, {
    P: function () {
        return h;
    },
    r: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(756715),
    u = r(607070),
    c = r(109161),
    d = r(213275);
function f(e) {
    let { roleStyle: n, name: r, color: a, roleName: o, dotAlignment: l = 'left', className: u } = e,
        f = 'username' === n,
        _ =
            'dot' === n
                ? (0, i.jsx)(c.F, {
                      color: a,
                      name: o,
                      className: 'left' === l ? d.roleDotLeft : d.roleDotRight
                  })
                : null;
    return (0, i.jsxs)('span', {
        style: { color: f && null != a ? a : void 0 },
        className: s()(u, { [d.username]: f }),
        children: ['left' === l && _, r, 'right' === l && _]
    });
}
function _(e) {
    let { name: n, color: r, roleName: a, dotAlignment: s, className: c, ...d } = e,
        _ = (0, o.e7)([u.Z], () => u.Z.roleStyle),
        h = 'username' === _,
        p = (0, i.jsx)(f, {
            roleStyle: _,
            name: n,
            color: r,
            roleName: a,
            dotAlignment: s,
            className: c
        }),
        m = h ? { color: r } : void 0;
    return (0, i.jsx)(l.Anchor, {
        ...d,
        children: p,
        style: m
    });
}
function h(e) {
    let n = (0, o.e7)([u.Z], () => u.Z.roleStyle);
    return (0, i.jsx)(f, {
        ...e,
        roleStyle: n
    });
}
