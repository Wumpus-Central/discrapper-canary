n.d(t, { x: () => c }), n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(793030),
    s = n(481060),
    l = n(126827);
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
    return (0, r.jsxs)(s.P3F, {
        className: a()(l.baseControlItem, { [l.clickable]: null != f }),
        onClick: f,
        innerRef: p,
        style: _,
        children: [
            null != n &&
                (0, r.jsx)("div", {
                    className: l.baseControlItemLeadingElement,
                    children: n,
                }),
            (0, r.jsxs)("div", {
                className: l.baseControlItemContent,
                children: [
                    (0, r.jsx)("div", {
                        className: l.baseControlItemTitle,
                        children: (0, r.jsx)(o.X6q, {
                            variant: "heading-md/medium",
                            color: t,
                            children: u,
                        }),
                    }),
                    null != d &&
                        (0, r.jsx)(o.xvT, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            className: l.baseControlItemDescription,
                            children: d,
                        }),
                ],
            }),
            (null != i || null != c) &&
                (0, r.jsxs)("div", {
                    className: l.baseControlItemTrailingElements,
                    children: [i, c],
                }),
        ],
    });
}
