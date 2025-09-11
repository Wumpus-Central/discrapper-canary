n.d(t, { x: () => u }), n(953529);
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(481060),
    s = n(845442);
function u(e) {
    let {
        leadingElement: t,
        primaryTrailingElement: n,
        secondaryTrailingElement: i,
        title: u,
        secondaryTitle: c,
        description: d,
        compact: g = !1,
        onClick: f,
    } = e;
    return (0, r.jsxs)(a.P3F, {
        className: l()(s.baseControlItem, { [s.compact]: g }),
        onClick: f,
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: s.baseControlItemLeadingElement,
                    children: t,
                }),
            (0, r.jsxs)("div", {
                className: s.baseControlItemContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: s.baseControlItemTitle,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: u,
                            }),
                            null != c &&
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "text-secondary",
                                    className: s.secondaryTitle,
                                    children: c,
                                }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)(o.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: d,
                        }),
                ],
            }),
            (null != n || null != i) &&
                (0, r.jsxs)("div", {
                    className: s.baseControlItemTrailingElements,
                    children: [n, i],
                }),
        ],
    });
}
