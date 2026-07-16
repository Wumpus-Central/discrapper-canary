"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(866665),
    l = n(939249),
    o = n(642070);
function d(e) {
    let { onClick: t, icon: n, tooltip: r, className: d } = e,
        c = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, i.jsx)(s.m, {
        text: r,
        position: "bottom",
        children: (0, i.jsx)(l.D, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": r,
            className: a()(o.x, d),
            children: (0, i.jsx)("div", { className: o.h, children: c }),
        }),
    });
}
