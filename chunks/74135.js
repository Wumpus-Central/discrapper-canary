n.d(t, { s: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    c = n(278416),
    l = n(990078),
    u = n(240248),
    o = n(561794),
    a = n(218606);
function d(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        c = !(0, u.uJ)(r),
        d = (0, i.jsx)("div", {
            className: s()(a.Fx, { [a.Y_]: c }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return c ? (0, i.jsx)(l.m, { text: r, position: "top", delay: o.Zh, children: d }) : d;
}
function h(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        s = n ?? c.g;
    return (0, i.jsx)(d, {
        spec: t,
        icon: (0, i.jsx)("div", {
            className: a.wz,
            style: { width: t.iconSize, height: t.iconSize },
            children: (0, i.jsx)(s, { size: "xxs", color: "white" }),
        }),
        tooltipText: r,
    });
}
