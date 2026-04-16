"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(709562);
let o = function (e) {
    let { iconComponent: t, ...n } = e,
        o = i.useRef(null);
    return (0, r.jsx)(a.l, {
        buttonRef: o,
        isTrayButton: !1,
        color: "disconnect",
        iconComponent: t ?? (0, r.jsx)(s.AYu, { eventTargetRef: o, dataBinding: { fill: "currentColor" } }),
        ...n,
    });
};
