n.d(t, { x: () => u }), n(953529);
var i = n(951288),
    l = n(120356),
    o = n.n(l),
    r = n(793030),
    s = n(481060),
    a = n(845442);
function u(e) {
    let {
        leadingElement: t,
        primaryTrailingElement: n,
        secondaryTrailingElement: l,
        title: u,
        secondaryTitle: c,
        description: d,
        compact: f = !1,
        onClick: g,
    } = e;
    return (0, i.jsxs)(s.P3F, {
        className: o()(a.baseControlItem, { [a.compact]: f }),
        onClick: g,
        children: [
            null != t &&
                (0, i.jsx)("div", {
                    className: a.baseControlItemLeadingElement,
                    children: t,
                }),
            (0, i.jsxs)("div", {
                className: a.baseControlItemContent,
                children: [
                    (0, i.jsxs)("div", {
                        className: a.baseControlItemTitle,
                        children: [
                            (0, i.jsx)(r.X6, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: u,
                            }),
                            null != c &&
                                (0, i.jsx)(r.X6, {
                                    variant: "heading-md/semibold",
                                    color: "text-secondary",
                                    className: a.secondaryTitle,
                                    children: c,
                                }),
                        ],
                    }),
                    null != d &&
                        (0, i.jsx)(r.xv, {
                            variant: "text-md/normal",
                            color: "text-secondary",
                            children: d,
                        }),
                ],
            }),
            (null != n || null != l) &&
                (0, i.jsxs)("div", {
                    className: a.baseControlItemTrailingElements,
                    children: [n, l],
                }),
        ],
    });
}
