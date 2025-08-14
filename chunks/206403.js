n.d(t, { x: () => u }), n(953529);
var i = n(255367),
    l = n(120356),
    s = n.n(l),
    o = n(793030),
    a = n(481060),
    r = n(845442);
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
    return (0, i.jsxs)(a.P3F, {
        className: s()(r.baseControlItem, { [r.compact]: f }),
        onClick: g,
        children: [
            null != t &&
                (0, i.jsx)("div", {
                    className: r.baseControlItemLeadingElement,
                    children: t,
                }),
            (0, i.jsxs)("div", {
                className: r.baseControlItemContent,
                children: [
                    (0, i.jsxs)("div", {
                        className: r.baseControlItemTitle,
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
                                    className: r.secondaryTitle,
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
                    className: r.baseControlItemTrailingElements,
                    children: [n, l],
                }),
        ],
    });
}
