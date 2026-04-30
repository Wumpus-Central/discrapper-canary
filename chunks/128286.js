"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(811893),
    o = n(204651),
    l = n(375708),
    u = n(541831);
function c(e) {
    let { popoutOpen: t, onClosePopout: n, onOpenPopout: r, ...c } = e,
        d = t ? l.intl.string(l.t["7Dwcnj"]) : l.intl.string(l.t.JzWezz);
    return (0, i.jsx)(o.A, {
        label: d,
        onClick: t ? n : r,
        iconComponent: a.t,
        iconClassName: s()({ [u.r]: t }),
        ...c,
    });
}
