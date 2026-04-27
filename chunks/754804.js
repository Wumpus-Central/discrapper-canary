"use strict";
i.d(t, { X: () => p, n: () => m });
var r = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    l = i(342952),
    c = i(990078),
    o = i(240248),
    u = i(594832),
    d = i(985018),
    _ = i(860895);
function f(e) {
    let { spec: t, icon: i, tooltipText: n } = e,
        a = !(0, o.uJ)(n),
        l = (0, r.jsx)("div", {
            className: s()(_.Fx, { [_.Y_]: a }),
            style: { top: t.iconInset, insetInlineEnd: t.iconInset },
            children: i,
        });
    return a ? (0, r.jsx)(c.m, { text: n, position: "top", delay: u.Zh, children: l }) : l;
}
function p(e) {
    let { spec: t, className: i, ...n } = e;
    return (0, r.jsx)(f, {
        spec: t,
        icon: (0, r.jsx)(l.I, { className: s()(_.XA, i), ...n, size: t.avatarSize, maxUsers: 3 }),
        tooltipText: d.intl.string(d.t["OnWY3/"]),
    });
}
function m(e) {
    let { user: t, ...i } = e,
        a = n.useMemo(() => [t], [t]);
    return (0, r.jsx)(p, { users: a, ...i });
}
