n.d(t, { U: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(158954),
    r = n(397927),
    o = n(411809);
function c(e) {
    let { ref: t, leadingElement: n, trailingElement: s, title: c, description: d, onClick: u, style: _ } = e;
    return (0, i.jsxs)(r.DUT, {
        className: a()(o.EA, { [o.vk]: null != u }),
        onClick: u,
        innerRef: t,
        style: _,
        children: [
            null != n && (0, i.jsx)("div", { className: o._y, children: n }),
            (0, i.jsxs)("div", {
                className: o.jw,
                children: [
                    (0, i.jsx)("div", {
                        className: o.eg,
                        children: (0, i.jsx)(l.DZT, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: c,
                        }),
                    }),
                    null != d && (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-subtle", children: d }),
                ],
            }),
            null != s && (0, i.jsx)("div", { className: o.EY, children: s }),
        ],
    });
}
