n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(785717),
    c = n(190679);
function u(e) {
    let { section: t, header: n, items: l, listClassName: u, onExpand: d } = e,
        { trackUserProfileAction: p } = (0, s.KZ)(),
        h = i.useId(),
        [f, m] = i.useState(!1),
        g = f ? a.CJ0 : a.Fbu;
    return (0, r.jsxs)('section', {
        className: c.section,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: o()(c.header, c.clickable),
                'aria-controls': h,
                'aria-expanded': f,
                onClick: () => {
                    m(!f),
                        f ||
                            (p({
                                action: 'PRESS_SECTION',
                                section: t
                            }),
                            null == d || d());
                },
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        children: [n, ' \u2014 ', l.length]
                    }),
                    (0, r.jsx)(g, { size: 'md' })
                ]
            }),
            l.length > 0 &&
                (0, r.jsx)('ul', {
                    id: h,
                    hidden: !f,
                    className: o()(c.list, u),
                    children: l
                })
        ]
    });
}
