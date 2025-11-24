n.d(t, { x: () => c }), n(953529);
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    o = n(793030),
    a = n(481060),
    s = n(845442);
function c(e) {
    let {
        headingColor: t = "text-primary",
        leadingElement: n,
        primaryTrailingElement: l,
        secondaryTrailingElement: c,
        title: u,
        description: d,
        onClick: f,
        ref: p,
        style: b,
    } = e;
    return (0, r.jsxs)(a.P3F, {
        className: i()(s.baseControlItem, { [s.clickable]: null != f }),
        onClick: f,
        innerRef: p,
        style: b,
        children: [
            null != n &&
                (0, r.jsx)("div", {
                    className: s.baseControlItemLeadingElement,
                    children: n,
                }),
            (0, r.jsxs)("div", {
                className: s.baseControlItemContent,
                children: [
                    (0, r.jsx)("div", {
                        className: s.baseControlItemTitle,
                        children: (0, r.jsx)(o.X6q, {
                            variant: "heading-md/medium",
                            color: t,
                            children: u,
                        }),
                    }),
                    null != d &&
                        (0, r.jsx)(o.xvT, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            className: s.baseControlItemDescription,
                            children: d,
                        }),
                ],
            }),
            (null != l || null != c) &&
                (0, r.jsxs)("div", {
                    className: s.baseControlItemTrailingElements,
                    children: [l, c],
                }),
        ],
    });
}
