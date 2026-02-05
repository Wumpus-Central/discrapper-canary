n.d(t, { U: () => c });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(158954),
    l = n(397927),
    o = n(411809);
function c(e) {
    let {
        headingColor: t = "text-strong",
        leadingElement: n,
        primaryTrailingElement: s,
        secondaryTrailingElement: c,
        title: d,
        description: u,
        onClick: _,
        ref: m,
        style: A,
    } = e;
    return (0, i.jsxs)(l.DUT, {
        className: r()(o.EA, { [o.vk]: null != _ }),
        onClick: _,
        innerRef: m,
        style: A,
        children: [
            null != n && (0, i.jsx)("div", { className: o._y, children: n }),
            (0, i.jsxs)("div", {
                className: o.jw,
                children: [
                    (0, i.jsx)("div", {
                        className: o.eg,
                        children: (0, i.jsx)(a.DZT, { variant: "heading-md/medium", color: t, children: d }),
                    }),
                    null != u && (0, i.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-subtle", children: u }),
                ],
            }),
            (null != s || null != c) && (0, i.jsxs)("div", { className: o.fW, children: [s, c] }),
        ],
    });
}
