"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(335419);
function o(e) {
    let { total: t, users: n, videoLimit: s } = e;
    return (0, i.jsxs)("div", {
        className: a.iE,
        children: [
            (0, i.jsxs)("span", {
                className: l()(a.VV, { [a.Ki]: s, [a.$G]: n >= 100 }),
                children: [
                    s ? (0, i.jsx)(r.npA, { size: "md", color: "currentColor", className: a.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, i.jsx)("span", { className: l()(a.X5, { [a.$G]: t >= 100 }), children: t.toString().padStart(2, "0") }),
        ],
    });
}
