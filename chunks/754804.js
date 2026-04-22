n.d(t, { X: () => m, n: () => p });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(342952),
    o = n(990078),
    d = n(240248),
    c = n(594832),
    u = n(985018),
    _ = n(860895);
function f(e) {
    let { spec: t, icon: n, tooltipText: l } = e,
        a = !(0, d.uJ)(l),
        s = (0, i.jsx)("div", {
            className: r()(_.Fx, { [_.Y_]: a }),
            style: { top: t.iconInset, insetInlineEnd: t.iconInset },
            children: n,
        });
    return a ? (0, i.jsx)(o.m, { text: l, position: "top", delay: c.Zh, children: s }) : s;
}
function m(e) {
    let { spec: t, className: n, ...l } = e;
    return (0, i.jsx)(f, {
        spec: t,
        icon: (0, i.jsx)(s.I, { className: r()(_.XA, n), ...l, size: t.avatarSize, maxUsers: 3 }),
        tooltipText: u.intl.string(u.t["OnWY3/"]),
    });
}
function p(e) {
    let { user: t, ...n } = e,
        a = l.useMemo(() => [t], [t]);
    return (0, i.jsx)(m, { users: a, ...n });
}
