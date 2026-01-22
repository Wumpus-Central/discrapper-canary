n.d(t, {
    U: () => c,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(397927),
    l = n(411809);

function c(e) {
    let {
        headingColor: t = "text-strong",
        leadingElement: n,
        primaryTrailingElement: i,
        secondaryTrailingElement: c,
        title: u,
        description: d,
        onClick: f,
        ref: p,
        style: _,
    } = e;
    return (0, r.jsxs)(o.DUT, {
        className: a()(l.EA, {
            [l.vk]: null != f,
        }),
        onClick: f,
        innerRef: p,
        style: _,
        children: [
            null != n &&
                (0, r.jsx)("div", {
                    className: l._y,
                    children: n,
                }),
            (0, r.jsxs)("div", {
                className: l.jw,
                children: [
                    (0, r.jsx)("div", {
                        className: l.eg,
                        children: (0, r.jsx)(s.DZT, {
                            variant: "heading-md/medium",
                            color: t,
                            children: u,
                        }),
                    }),
                    null != d &&
                        (0, r.jsx)(s.EYj, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: d,
                        }),
                ],
            }),
            (null != i || null != c) &&
                (0, r.jsxs)("div", {
                    className: l.fW,
                    children: [i, c],
                }),
        ],
    });
}
