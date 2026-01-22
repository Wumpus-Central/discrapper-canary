n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(335419);
function o(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, r.jsxs)("div", {
        className: s.iE,
        children: [
            (0, r.jsxs)("span", {
                className: i()(s.VV, {
                    [s.Ki]: l,
                    [s.$G]: n >= 100,
                }),
                children: [
                    l
                        ? (0, r.jsx)(a.npA, {
                              size: "md",
                              color: "currentColor",
                              className: s.LB,
                          })
                        : null,
                    n.toString().padStart(2, "0"),
                ],
            }),
            (0, r.jsx)("span", {
                className: i()(s.X5, { [s.$G]: t >= 100 }),
                children: t.toString().padStart(2, "0"),
            }),
        ],
    });
}
