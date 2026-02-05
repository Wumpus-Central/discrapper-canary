"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(709562),
    l = n(985018),
    u = n(932752);
function c(e) {
    let { popoutOpen: t, onClosePopout: n, onOpenPopout: i, ...c } = e,
        d = t ? l.intl.string(l.t["7Dwcnj"]) : l.intl.string(l.t.JzWezz);
    return (0, r.jsx)(o.A, {
        label: d,
        onClick: t ? n : i,
        iconComponent: s.tfB,
        iconClassName: a()({ [u.r]: t }),
        ...c,
    });
}
