"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(416696),
    s = n(709562),
    a = n(985018);
function o(e) {
    return e ? a.intl.string(a.t.S5anIc) : a.intl.string(a.t.q3O3J8);
}
function l(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: a, onMouseLeave: l, ...u } = e,
        c = n ? s.l : s.A,
        { Component: d, events: _ } = (0, i.c)("disable");
    return (0, r.jsx)(c, {
        label: o(t),
        isTrayButton: !1,
        iconComponent: d,
        onMouseEnter: (e) => {
            a?.(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            l?.(e), _.onMouseLeave();
        },
        ...u,
    });
}
