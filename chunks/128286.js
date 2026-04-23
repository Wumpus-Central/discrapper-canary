"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(811893),
    o = n(709562),
    l = n(985018),
    u = n(541831);
function c(e) {
    let { popoutOpen: t, onClosePopout: n, onOpenPopout: i, ...c } = e,
        d = t ? l.intl.string(l.t["7Dwcnj"]) : l.intl.string(l.t.JzWezz);
    return (0, r.jsx)(o.A, {
        label: d,
        onClick: t ? n : i,
        iconComponent: a.t,
        iconClassName: s()({ [u.r]: t }),
        ...c,
    });
}
