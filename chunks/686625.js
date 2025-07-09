(n.d(t, { Z: () => u }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(785717),
    c = n(507710);
function u(e) {
    let { section: t, header: n, items: l, listClassName: u, onExpand: d } = e,
        { trackUserProfileAction: p } = (0, s.KZ)(),
        h = i.useId(),
        [f, m] = i.useState(!1),
        g = f ? o.CJ0 : o.Fbu;
    return (0, r.jsxs)('section', {
        className: c.section,
        children: [
            (0, r.jsxs)(o.P3F, {
                className: a()(c.header, c.clickable),
                'aria-controls': h,
                'aria-expanded': f,
                onClick: () => {
                    (m(!f),
                        f ||
                            (p({
                                action: 'PRESS_SECTION',
                                section: t
                            }),
                            null == d || d()));
                },
                children: [
                    (0, r.jsxs)(o.X6q, {
                        variant: 'text-sm/medium',
                        color: 'text-default',
                        children: [n, ' \u2014 ', l.length]
                    }),
                    (0, r.jsx)(g, { size: 'md' })
                ]
            }),
            l.length > 0 &&
                (0, r.jsx)('ul', {
                    id: h,
                    hidden: !f,
                    className: a()(c.list, u),
                    children: l
                })
        ]
    });
}
