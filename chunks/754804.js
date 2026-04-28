e.d(t, { X: () => h, n: () => j });
var n = e(627968),
    i = e(64700),
    c = e(503698),
    r = e.n(c),
    o = e(342952),
    a = e(990078),
    u = e(240248),
    l = e(594832),
    p = e(985018),
    d = e(860895);
function x(s) {
    let { spec: t, icon: e, tooltipText: i } = s,
        c = !(0, u.uJ)(i),
        o = (0, n.jsx)("div", {
            className: r()(d.Fx, { [d.Y_]: c }),
            style: { top: t.iconInset, insetInlineEnd: t.iconInset },
            children: e,
        });
    return c ? (0, n.jsx)(a.m, { text: i, position: "top", delay: l.Zh, children: o }) : o;
}
function h(s) {
    let { spec: t, className: e, ...i } = s;
    return (0, n.jsx)(x, {
        spec: t,
        icon: (0, n.jsx)(o.I, { className: r()(d.XA, e), ...i, size: t.avatarSize, maxUsers: 3 }),
        tooltipText: p.intl.string(p.t["OnWY3/"]),
    });
}
function j(s) {
    let { user: t, ...e } = s,
        c = i.useMemo(() => [t], [t]);
    return (0, n.jsx)(h, { users: c, ...e });
}
