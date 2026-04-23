t.d(n, { U: () => d });
var l = t(627968);
t(64700);
var r = t(503698),
    i = t.n(r),
    s = t(534514),
    a = t(834730),
    o = t(890856),
    c = t(349902);
function d(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: r,
            title: d,
            description: u,
            "aria-label": x,
            role: j,
            onClick: h,
            style: m,
        } = e,
        f = (0, l.jsxs)("div", {
            className: i()(c.EA, null != h && c.vk),
            ref: n,
            style: m,
            children: [
                null != t && (0, l.jsx)("div", { className: c._y, children: t }),
                (0, l.jsxs)("div", {
                    className: c.jw,
                    children: [
                        (0, l.jsx)("div", {
                            className: c.eg,
                            children: (0, l.jsx)(s.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: d,
                            }),
                        }),
                        null != u && (0, l.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: u }),
                    ],
                }),
                null != r && (0, l.jsx)("div", { className: c.EY, children: r }),
            ],
        });
    return null != h
        ? (0, l.jsx)(o.s, { onClick: h, "aria-label": x, buttonProps: null != j ? { role: j } : void 0, children: f })
        : f;
}
