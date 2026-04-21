n.d(t, { U: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(158954),
    a = n(397927),
    o = n(349902);
function d(e) {
    let { ref: t, role: n, leadingElement: s, trailingElement: d, title: c, description: u, onClick: m, style: g } = e;
    return (0, i.jsxs)(a.DUT, {
        className: l()(o.EA, { [o.vk]: null != m }),
        role: n,
        onClick: m,
        innerRef: t,
        style: g,
        children: [
            null != s && (0, i.jsx)("div", { className: o._y, children: s }),
            (0, i.jsxs)("div", {
                className: o.jw,
                children: [
                    (0, i.jsx)("div", {
                        className: o.eg,
                        children: (0, i.jsx)(r.DZT, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: c,
                        }),
                    }),
                    null != u && (0, i.jsx)(r.EYj, { variant: "text-sm/normal", color: "text-subtle", children: u }),
                ],
            }),
            null != d && (0, i.jsx)("div", { className: o.EY, children: d }),
        ],
    });
}
