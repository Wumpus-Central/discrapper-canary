n.d(t, { x: () => u }), n(953529);
var i = n(951288),
    l = n(120356),
    r = n.n(l),
    o = n(793030),
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
        className: r()(a.baseControlItem, { [a.compact]: f }),
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
                            (0, i.jsx)(o.X6, {
                                variant: "heading-md/semibold",
                                color: "text-primary",
                                children: u,
                            }),
                            null != c &&
                                (0, i.jsx)(o.X6, {
                                    variant: "heading-md/semibold",
                                    color: "text-secondary",
                                    className: a.secondaryTitle,
                                    children: c,
                                }),
                        ],
                    }),
                    null != d &&
                        (0, i.jsx)(o.xv, {
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
