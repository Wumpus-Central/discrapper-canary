(n.d(t, { x: () => d }), n(953529));
var i = n(255367),
    a = n(120356),
    s = n.n(a),
    o = n(793030),
    r = n(481060),
    l = n(788551);
function d(e) {
    let { leadingElement: t, primaryTrailingElement: n, secondaryTrailingElement: a, title: d, secondaryTitle: c, description: u, compact: f = !1, onClick: m } = e;
    return (0, i.jsxs)(r.P3F, {
        className: s()(l.baseControlItem, { [l.compact]: f }),
        onClick: m,
        children: [
            null != t &&
                (0, i.jsx)('div', {
                    className: l.baseControlItemLeadingElement,
                    children: t
                }),
            (0, i.jsxs)('div', {
                className: l.baseControlItemContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: l.baseControlItemTitle,
                        children: [
                            (0, i.jsx)(o.X6, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: d
                            }),
                            null != c &&
                                (0, i.jsx)(o.X6, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-secondary',
                                    className: l.secondaryTitle,
                                    children: c
                                })
                        ]
                    }),
                    null != u &&
                        (0, i.jsx)(o.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: u
                        })
                ]
            }),
            (null != n || null != a) &&
                (0, i.jsxs)('div', {
                    className: l.baseControlItemTrailingElements,
                    children: [n, a]
                })
        ]
    });
}
