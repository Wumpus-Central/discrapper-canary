(n.d(t, { x: () => d }), n(953529));
var a = n(255367),
    i = n(120356),
    o = n.n(i),
    r = n(793030),
    s = n(481060),
    l = n(788551);
function d(e) {
    let { leadingElement: t, primaryTrailingElement: n, secondaryTrailingElement: i, title: d, secondaryTitle: c, description: u, compact: f = !1, onClick: m } = e;
    return (0, a.jsxs)(s.P3F, {
        className: o()(l.baseControlItem, { [l.compact]: f }),
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
                            (0, a.jsx)(r.X6, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: d
                            }),
                            null != c &&
                                (0, a.jsx)(r.X6, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-secondary',
                                    className: l.secondaryTitle,
                                    children: c
                                })
                        ]
                    }),
                    null != u &&
                        (0, a.jsx)(r.xv, {
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
