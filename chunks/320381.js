"use strict";
n.d(t, { Cq: () => u, If: () => d, Rk: () => c, wj: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(888675),
    l = n(985018),
    a = n(703238);
function c(e) {
    let { message: t, compact: r, onClick: c } = e;
    return (0, i.jsx)(s.A, {
        icon: n(290388),
        timestamp: t.timestamp,
        compact: r,
        contentClassName: a.B,
        children: l.intl.format(l.t.bYdG3f, { onClick: c }),
    });
}
function o(e) {
    let { message: t, compact: r } = e;
    return (0, i.jsx)(s.A, {
        icon: n(222548),
        timestamp: t.timestamp,
        compact: r,
        contentClassName: a.B,
        children: l.intl.string(l.t.tu6tOR),
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(s.A, {
        iconNode: (0, i.jsx)(r.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: a.Q }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: a.B,
        children: l.intl.string(l.t.vzfXql),
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(s.A, {
        iconNode: (0, i.jsx)(r.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: a.Q }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: a.B,
        children: l.intl.string(l.t["/TfvyR"]),
    });
}
