n.d(t, { x: () => c }), n(953529);
var r = n(951288),
    l = n(120356),
    o = n.n(l),
    i = n(793030),
    a = n(481060),
    s = n(845442);
function c(e) {
    let {
        leadingElement: t,
        primaryTrailingElement: n,
        secondaryTrailingElement: l,
        title: c,
        secondaryTitle: u,
        description: d,
        compact: f = !1,
        onClick: m,
    } = e;
    return (0, r.jsxs)(a.P3F, {
        className: o()(s.baseControlItem, { [s.compact]: f }),
        onClick: m,
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
                            (0, r.jsx)(i.X6q, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: c,
                            }),
                            null != u &&
                                (0, r.jsx)(i.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "text-secondary",
                                    className: s.secondaryTitle,
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
                    className: s.baseControlItemTrailingElements,
                    children: [n, l],
                }),
        ],
    });
}
