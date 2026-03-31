n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(626302);
function o(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, i.jsxs)("div", {
        className: r.iE,
        children: [
            (0, i.jsxs)("span", {
                className: s()(r.VV, { [r.Ki]: l, [r.$G]: n >= 100 }),
                children: [
                    l ? (0, i.jsx)(a.npA, { size: "md", color: "currentColor", className: r.LB }) : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, i.jsx)("span", { className: s()(r.X5, { [r.$G]: t >= 100 }), children: t.toString().padStart(2, "0") }),
        ],
    });
}
