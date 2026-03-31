"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(328913),
    r = n(407195),
    o = n(855790),
    d = n(897574);
function c(e) {
    let { dragStart: t, dragging: n, pinned: s, locked: c, className: u } = e;
    return (0, i.jsxs)(o.Ay, {
        className: a()(d.i, u),
        children: [
            (0, i.jsx)(l.A, { contained: !0, dragStart: t, locked: c }),
            (0, i.jsx)(r.A, { dragStart: t, locked: c, pinned: s, dragging: n, contained: !0 }),
        ],
    });
}
