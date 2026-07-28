"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(416696),
    a = n(204651),
    s = n(375708);
function l(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: l, onMouseLeave: o, ...d } = e,
        c = n ? a.l : a.A,
        { Component: u, events: _ } = (0, r.c)("disable");
    return (0, i.jsx)(c, {
        label: t ? s.intl.string(s.t.S5anIc) : s.intl.string(s.t.q3O3J8),
        isTrayButton: !1,
        iconComponent: u,
        onMouseEnter: (e) => {
            l?.(e), _.onMouseEnter();
        },
        onMouseLeave: (e) => {
            o?.(e), _.onMouseLeave();
        },
        ...d,
    });
}
