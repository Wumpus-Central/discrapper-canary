"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(709562),
    o = n(985018);
function l(e) {
    return e ? o.intl.string(o.t.S5anIc) : o.intl.string(o.t.q3O3J8);
}
function u(e) {
    let { isSelfStream: t, centerButton: n = !1, ...o } = e,
        u = n ? a.l : a.A,
        c = i.useRef(null);
    return (0, r.jsx)(u, {
        label: l(t),
        isTrayButton: !1,
        iconComponent: (0, r.jsx)(s.gxO, {
            eventTargetRef: c,
            className: s.d5l.sm,
            dataBinding: { fill: "currentColor", on: !1 },
            defaultViewModelInstance: "Off",
        }),
        ref: c,
        ...o,
    });
}
