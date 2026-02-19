"use strict";
n.d(t, { n: () => r });
var i = n(627968);
n(64700);
var s = n(512750),
    l = n(158954);
function r(e) {
    let { powerup: t, eventTargetRef: n, className: r } = e,
        a = { eventTargetRef: n, fit: "contain", className: r };
    switch (t.skuId) {
        case s.ec:
            return (0, i.jsx)(l.tIK, { ...a });
        case s.RV:
            return (0, i.jsx)(l.J$p, { ...a });
        case s.YG:
            return (0, i.jsx)(l.zzg, { ...a });
        default:
            return null;
    }
}
