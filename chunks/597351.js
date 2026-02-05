"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(746775);
function u(e) {
    let { onClick: t, icon: n, tooltip: i, className: u } = e,
        c = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, r.jsx)(s.m, {
        text: i,
        position: "bottom",
        children: (0, r.jsx)(o.sqX, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": i,
            className: a()(l.x, u),
            children: (0, r.jsx)("div", { className: l.h, children: c }),
        }),
    });
}
