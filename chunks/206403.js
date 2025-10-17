n.d(t, { x: () => s }), n(953529);
var r = n(951288),
    l = n(120356),
    o = n.n(l),
    i = n(793030),
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
        className: o()(c.baseControlItem, { [c.compact]: f }),
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
                            (0, r.jsx)(i.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: s,
                            }),
                            null != u &&
                                (0, r.jsx)(i.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "text-secondary",
                                    className: c.secondaryTitle,
                                    children: u,
                                }),
                        ],
                    }),
                    null != d &&
                        (0, r.jsx)(i.xvT, {
                            variant: "text-md/normal",
                            color: "text-secondary",
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
