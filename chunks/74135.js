n.d(t, { s: () => h });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    c = n(278416),
    l = n(866665),
    o = n(240248),
    u = n(561794),
    a = n(524214);
function d(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        c = !(0, o.uJ)(i),
        d = (0, r.jsx)("div", {
            className: s()(a.Fx, { [a.Y_]: c }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return c ? (0, r.jsx)(l.m, { text: i, position: "top", delay: u.Zh, children: d }) : d;
}
function h(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        s = n ?? c.g;
    return (0, r.jsx)(d, {
        spec: t,
        icon: (0, r.jsx)("div", {
            className: a.wz,
            style: { width: t.iconSize, height: t.iconSize },
            children: (0, r.jsx)(s, { size: "xxs", color: "white" }),
        }),
        tooltipText: i,
    });
}
