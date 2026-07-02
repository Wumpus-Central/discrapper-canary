"use strict";
n.d(t, { s: () => _ });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(278416),
    o = n(990078),
    l = n(240248),
    u = n(561794),
    c = n(218606);
function d(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        a = !(0, l.uJ)(r),
        d = (0, i.jsx)("div", {
            className: s()(c.Fx, { [c.Y_]: a }),
            style: { bottom: t.iconInset, insetInlineStart: t.iconInset },
            children: n,
        });
    return a ? (0, i.jsx)(o.m, { text: r, position: "top", delay: u.Zh, children: d }) : d;
}
function _(e) {
    let { spec: t, icon: n, tooltipText: r } = e,
        s = n ?? a.g;
    return (0, i.jsx)(d, {
        spec: t,
        icon: (0, i.jsx)("div", {
            className: c.wz,
            style: { width: t.iconSize, height: t.iconSize },
            children: (0, i.jsx)(s, { size: "xxs", color: "white" }),
        }),
        tooltipText: r,
    });
}
