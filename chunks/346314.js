n.d(t, {
    P: () => _,
    r: () => f
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(756715),
    l = n(607070),
    u = n(109161),
    c = n(420185);
function d(e) {
    let { roleStyle: t, name: n, color: r, roleName: s, dotAlignment: o = 'left', className: l } = e,
        d = 'username' === t,
        f =
            'dot' === t
                ? (0, i.jsx)(u.F, {
                      color: r,
                      name: s,
                      className: 'left' === o ? c.roleDotLeft : c.roleDotRight
                  })
                : null;
    return (0, i.jsxs)('span', {
        style: { color: d && null != r ? r : void 0 },
        className: a()(l, { [c.username]: d }),
        children: ['left' === o && f, n, 'right' === o && f]
    });
}
function f(e) {
    let { name: t, color: n, roleName: r, dotAlignment: a, className: u, ...c } = e,
        f = (0, s.e7)([l.Z], () => l.Z.roleStyle),
        _ = 'username' === f,
        p = (0, i.jsx)(d, {
            roleStyle: f,
            name: t,
            color: n,
            roleName: r,
            dotAlignment: a,
            className: u
        }),
        h = _ ? { color: n } : void 0;
    return (0, i.jsx)(o.Anchor, {
        ...c,
        children: p,
        style: h
    });
}
function _(e) {
    let t = (0, s.e7)([l.Z], () => l.Z.roleStyle);
    return (0, i.jsx)(d, {
        ...e,
        roleStyle: t
    });
}
