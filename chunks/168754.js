"use strict";
n.d(t, { A: () => a });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(709562);
function a(e) {
    let { isActivityActive: t, ...n } = e,
        a = s.useRef(null);
    return (0, i.jsx)(r.l, {
        ref: a,
        isTrayButton: !0,
        isActive: t,
        color: t ? "green" : void 0,
        iconComponent: (0, i.jsx)(l.lmr, {
            eventTargetRef: a,
            dataBinding: { fill: "currentColor" },
            className: l.d5l.refresh_sm,
        }),
        ...n,
    });
}
