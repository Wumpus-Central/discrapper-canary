"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(416696),
    s = n(204651),
    a = n(375708);
function o(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: o, onMouseLeave: l, ...u } = e,
        c = n ? s.l : s.A,
        { Component: d, events: _ } = (0, r.c)("disable");
    return (0, i.jsx)(c, {
        label: t ? a.intl.string(a.t.S5anIc) : a.intl.string(a.t.q3O3J8),
        isTrayButton: !1,
        iconComponent: d,
        onMouseEnter: (e) => {
            o?.(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            l?.(e), _.onMouseLeave();
        },
        ...u,
    });
}
