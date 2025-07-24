(n.d(t, { x: () => c }), n(953529));
var a = n(255367),
    i = n(120356),
    r = n.n(i),
    s = n(793030),
    o = n(481060),
    l = n(788551);
function c(e) {
    let { leadingElement: t, primaryTrailingElement: n, secondaryTrailingElement: i, title: c, secondaryTitle: d, description: u, compact: f = !1, onClick: m } = e;
    return (0, a.jsxs)(o.P3F, {
        className: r()(l.baseControlItem, { [l.compact]: f }),
        onClick: m,
        children: [
            null != t &&
                (0, a.jsx)('div', {
                    className: l.baseControlItemLeadingElement,
                    children: t
                }),
            (0, a.jsxs)('div', {
                className: l.baseControlItemContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: l.baseControlItemTitle,
                        children: [
                            (0, a.jsx)(s.X6, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: c
                            }),
                            null != d &&
                                (0, a.jsx)(s.X6, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-secondary',
                                    className: l.secondaryTitle,
                                    children: d
                                })
                        ]
                    }),
                    null != u &&
                        (0, a.jsx)(s.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: u
                        })
                ]
            }),
            (null != n || null != i) &&
                (0, a.jsxs)('div', {
                    className: l.baseControlItemTrailingElements,
                    children: [n, i]
                })
        ]
    });
}
