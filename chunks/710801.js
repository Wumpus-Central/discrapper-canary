"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(387755),
    r = n(709562),
    a = n(985018);
function o(e) {
    let { channel: t, ...n } = e;
    return (0, i.jsx)(r.l, {
        ...n,
        iconComponent: s.PGe,
        label: a.intl.string(a.t.WAI6xu),
        onClick: () => l.A.stopRinging(t.id),
    });
}
