"use strict";
r.d(t, { e: () => d });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(935462),
    l = r(985018),
    o = r(76488),
    c = r(889277);
let d = (e) => {
    let { children: t, footer: r, className: i } = e;
    return (0, n.jsx)("div", {
        className: a()(c.zr, c.Gg, c.EX, c.vl, o.yl, i),
        "aria-label": l.intl.string(l.t.eQ2bLp),
        children: (0, n.jsxs)("form", {
            className: o.Zd,
            onSubmit: (e) => {
                e.preventDefault();
            },
            children: [(0, n.jsx)(s.$m, { "data-migration-pending": !0, className: o.gT, children: t }), r],
        }),
    });
};
