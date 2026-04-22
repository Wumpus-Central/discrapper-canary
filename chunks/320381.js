"use strict";
n.d(t, { Cq: () => u, If: () => d, Rk: () => o, wj: () => c });
var i = n(627968);
n(64700);
var r = n(695366),
    l = n(888675),
    s = n(985018),
    a = n(123030);
function o(e) {
    let { message: t, compact: r, onClick: o } = e;
    return (0, i.jsx)(l.A, {
        icon: n(290388),
        timestamp: t.timestamp,
        compact: r,
        contentClassName: a.B,
        children: s.intl.format(s.t.bYdG3f, { onClick: o }),
    });
}
function c(e) {
    let { message: t, compact: r } = e;
    return (0, i.jsx)(l.A, {
        icon: n(222548),
        timestamp: t.timestamp,
        compact: r,
        contentClassName: a.B,
        children: s.intl.string(s.t.tu6tOR),
    });
}
function u(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(l.A, {
        iconNode: (0, i.jsx)(r.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: a.Q }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: a.B,
        children: s.intl.string(s.t.vzfXql),
    });
}
function d(e) {
    let { message: t, compact: n } = e;
    return (0, i.jsx)(l.A, {
        iconNode: (0, i.jsx)(r.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: a.Q }),
        timestamp: t.timestamp,
        compact: n,
        contentClassName: a.B,
        children: s.intl.string(s.t["/TfvyR"]),
    });
}
