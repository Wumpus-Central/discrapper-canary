"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(416696),
    a = n(709562),
    s = n(985018);
function o(e) {
    return e ? s.intl.string(s.t.S5anIc) : s.intl.string(s.t.q3O3J8);
}
function l(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: s, onMouseLeave: l, ...u } = e,
        c = n ? a.l : a.A,
        { Component: d, events: _ } = (0, i.c)("disable");
    return (0, r.jsx)(c, {
        label: o(t),
        isTrayButton: !1,
        iconComponent: d,
        onMouseEnter: (e) => {
            s?.(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            l?.(e), _.onMouseLeave();
        },
        ...u,
    });
}
