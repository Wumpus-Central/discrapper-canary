"use strict";
n.d(t, { Xd: () => h, kp: () => f, oX: () => p });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(342952),
    l = n(435371),
    u = n(240248),
    c = n(940480);
function d(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function _(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        a = !(0, u.uJ)(i),
        o = (0, r.jsx)("div", { className: s()(c.Fx, { [c.Y_]: a }), style: d(t), children: n });
    return a ? (0, r.jsx)(l.m_, { text: i, position: "top", children: o }) : o;
}
function f(e) {
    let { spec: t, tooltipText: n } = e;
    return (0, r.jsx)(_, {
        spec: t,
        icon: (0, r.jsx)(a.C3E, {
            size: "custom",
            width: t.iconSize,
            height: t.iconSize,
            color: "currentColor",
            colorClass: c.Be,
        }),
        tooltipText: n,
    });
}
function p(e) {
    let { spec: t, tooltipText: n } = e;
    return (0, r.jsx)(_, {
        spec: t,
        icon: (0, r.jsx)(a.Y3C, {
            size: "custom",
            width: t.iconSize,
            height: t.iconSize,
            color: "currentColor",
            colorClass: c.rY,
        }),
        tooltipText: n,
    });
}
function h(e) {
    let { spec: t, tooltipText: n, ...i } = e;
    return (0, r.jsx)(_, { spec: t, icon: (0, r.jsx)(o.I, { ...i, size: t.avatarSize }), tooltipText: n });
}
