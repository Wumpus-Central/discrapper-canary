"use strict";
r.d(t, { X: () => p, n: () => m });
var i = r(627968),
    n = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(342952),
    c = r(990078),
    o = r(240248),
    u = r(594832),
    d = r(985018),
    _ = r(860895);
function f(e) {
    let { spec: t, icon: r, tooltipText: n } = e,
        a = !(0, o.uJ)(n),
        l = (0, i.jsx)("div", {
            className: s()(_.Fx, { [_.Y_]: a }),
            style: { top: t.iconInset, insetInlineEnd: t.iconInset },
            children: r,
        });
    return a ? (0, i.jsx)(c.m, { text: n, position: "top", delay: u.Zh, children: l }) : l;
}
function p(e) {
    let { spec: t, className: r, ...n } = e;
    return (0, i.jsx)(f, {
        spec: t,
        icon: (0, i.jsx)(l.I, { className: s()(_.XA, r), ...n, size: t.avatarSize, maxUsers: 3 }),
        tooltipText: d.intl.string(d.t["OnWY3/"]),
    });
}
function m(e) {
    let { user: t, ...r } = e,
        a = n.useMemo(() => [t], [t]);
    return (0, i.jsx)(p, { users: a, ...r });
}
