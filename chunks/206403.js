(n.d(t, { x: () => c }), n(953529));
var i = n(255367),
    o = n(120356),
    l = n.n(o),
    a = n(793030),
    r = n(481060),
    s = n(788551);
function c(e) {
    let { leadingElement: t, primaryTrailingElement: n, secondaryTrailingElement: o, title: c, secondaryTitle: u, description: d, compact: f = !1, onClick: m } = e;
    return (0, i.jsxs)(r.P3F, {
        className: l()(s.baseControlItem, { [s.compact]: f }),
        onClick: m,
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: s.baseControlItemLeadingElement,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: s.baseControlItemContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: s.baseControlItemTitle,
                        children: [
                            (0, i.jsx)(a.X6, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: c
                            }),
                            null != u &&
                                (0, i.jsx)(a.X6, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-secondary',
                                    className: s.secondaryTitle,
                                    children: u
                                })
                        ]
                    }),
                    null != d &&
                        (0, i.jsx)(a.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: d
                        })
                ]
            }),
            (null != n || null != o) &&
                (0, i.jsxs)('div', {
                    className: s.baseControlItemTrailingElements,
                    children: [n, o]
                })
        ]
    });
}
