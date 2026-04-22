"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(416696),
    s = n(709562),
    a = n(985018);
function o(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: o, onMouseLeave: l, ...u } = e,
        d = n ? s.l : s.A,
        { Component: c, events: _ } = (0, i.c)("disable");
    return (0, r.jsx)(d, {
        label: t ? a.intl.string(a.t.S5anIc) : a.intl.string(a.t.q3O3J8),
        isTrayButton: !1,
        iconComponent: c,
        onMouseEnter: (e) => {
            o?.(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            l?.(e), _.onMouseLeave();
        },
        ...u,
    });
}
