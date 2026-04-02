"use strict";
n.d(t, { X: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(342952),
    o = n(435371),
    l = n(240248),
    u = n(594832),
    c = n(985018),
    d = n(903696);
let _ = 3;
function f(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function p(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        a = !(0, l.uJ)(i),
        c = (0, r.jsx)("div", { className: s()(d.Fx, { [d.Y_]: a }), style: f(t), children: n });
    return a ? (0, r.jsx)(o.m_, { text: i, position: "top", delay: u.Zh, children: c }) : c;
}
function h(e) {
    let { spec: t, className: n, ...i } = e;
    return (0, r.jsx)(p, {
        spec: t,
        icon: (0, r.jsx)(a.I, { className: s()(d.XA, n), ...i, size: t.avatarSize, maxUsers: _ }),
        tooltipText: c.intl.string(c.t["OnWY3/"]),
    });
}
