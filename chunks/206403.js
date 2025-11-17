n.d(t, { x: () => s }), n(953529);
var r = n(54381),
    l = n(120356),
    i = n.n(l),
    o = n(793030),
    a = n(481060),
    c = n(845442);
function s(e) {
    let {
        leadingElement: t,
        primaryTrailingElement: n,
        secondaryTrailingElement: l,
        title: s,
        secondaryTitle: u,
        description: d,
        compact: f = !1,
        onClick: b,
    } = e;
    return (0, r.jsxs)(a.P3F, {
        className: i()(c.baseControlItem, {
            [c.compact]: f,
            [c.clickable]: null != b,
        }),
        onClick: b,
        children: [
            null != t &&
                (0, r.jsx)("div", {
                    className: c.baseControlItemLeadingElement,
                    children: t,
                }),
            (0, r.jsxs)("div", {
                className: c.baseControlItemContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: c.baseControlItemTitle,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: "heading-md/medium",
                                color: "text-primary",
                                children: s,
                            }),
                            null != u &&
                                (0, r.jsx)(o.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "text-secondary",
                                    className: c.secondaryTitle,
                                    children: u,
                                }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)(o.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: c.baseControlItemDescription,
                            children: d,
                        }),
                ],
            }),
            (null != n || null != l) &&
                (0, r.jsxs)("div", {
                    className: c.baseControlItemTrailingElements,
                    children: [n, l],
                }),
        ],
    });
}
