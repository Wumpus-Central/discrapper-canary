"use strict";
n.d(t, { X: () => m, n: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(342952),
    l = n(435371),
    u = n(240248),
    c = n(594832),
    d = n(985018),
    _ = n(903696);
let f = 3;
function p(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function h(e) {
    let { spec: t, icon: n, tooltipText: i } = e,
        s = !(0, u.uJ)(i),
        o = (0, r.jsx)("div", { className: a()(_.Fx, { [_.Y_]: s }), style: p(t), children: n });
    return s ? (0, r.jsx)(l.m_, { text: i, position: "top", delay: c.Zh, children: o }) : o;
}
function m(e) {
    let { spec: t, className: n, ...i } = e;
    return (0, r.jsx)(h, {
        spec: t,
        icon: (0, r.jsx)(o.I, { className: a()(_.XA, n), ...i, size: t.avatarSize, maxUsers: f }),
        tooltipText: d.intl.string(d.t["OnWY3/"]),
    });
}
function E(e) {
    let { user: t, ...n } = e,
        s = i.useMemo(() => [t], [t]);
    return (0, r.jsx)(m, { users: s, ...n });
}
