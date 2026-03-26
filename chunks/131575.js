"use strict";
i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var s = i(503698),
    a = i.n(s),
    l = i(328913),
    r = i(407195),
    o = i(855790),
    d = i(16);
function c(e) {
    let { dragStart: t, dragging: i, pinned: s, locked: c, className: u } = e;
    return (0, n.jsxs)(o.Ay, {
        className: a()(d.i, u),
        children: [
            (0, n.jsx)(l.A, { contained: !0, dragStart: t, locked: c }),
            (0, n.jsx)(r.A, { dragStart: t, locked: c, pinned: s, dragging: i, contained: !0 }),
        ],
    });
}
