n.d(t, { U: () => o });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(158954),
    a = n(349902);
function o(e) {
    let {
            ref: t,
            leadingElement: n,
            trailingElement: s,
            title: o,
            description: d,
            "aria-label": c,
            role: u,
            onClick: m,
            style: g,
        } = e,
        _ = (0, i.jsxs)("div", {
            className: l()(a.EA, null != m && a.vk),
            ref: t,
            style: g,
            children: [
                null != n && (0, i.jsx)("div", { className: a._y, children: n }),
                (0, i.jsxs)("div", {
                    className: a.jw,
                    children: [
                        (0, i.jsx)("div", {
                            className: a.eg,
                            children: (0, i.jsx)(r.DZT, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: o,
                            }),
                        }),
                        null != d &&
                            (0, i.jsx)(r.EYj, { variant: "text-sm/normal", color: "text-subtle", children: d }),
                    ],
                }),
                null != s && (0, i.jsx)("div", { className: a.EY, children: s }),
            ],
        });
    return null != m
        ? (0, i.jsx)(r.sqX, { onClick: m, "aria-label": c, buttonProps: null != u ? { role: u } : void 0, children: _ })
        : _;
}
