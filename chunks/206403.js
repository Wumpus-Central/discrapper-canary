(n.d(t, { x: () => c }), n(953529));
var i = n(255367),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(481060),
    r = n(788551);
function c(e) {
    let { leadingElement: t, primaryTrailingElement: n, secondaryTrailingElement: a, title: c, secondaryTitle: u, description: d, compact: f = !1, onClick: m } = e;
    return (0, i.jsxs)(l.P3F, {
        className: o()(r.baseControlItem, { [r.compact]: f }),
        onClick: m,
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: r.baseControlItemLeadingElement,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: r.baseControlItemContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: r.baseControlItemTitle,
                        children: [
                            (0, i.jsx)(s.X6, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: c
                            }),
                            null != u &&
                                (0, i.jsx)(s.X6, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-secondary',
                                    className: r.secondaryTitle,
                                    children: u
                                })
                        ]
                    }),
                    null != d &&
                        (0, i.jsx)(s.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: d
                        })
                ]
            }),
            (null != n || null != a) &&
                (0, i.jsxs)('div', {
                    className: r.baseControlItemTrailingElements,
                    children: [n, a]
                })
        ]
    });
}
