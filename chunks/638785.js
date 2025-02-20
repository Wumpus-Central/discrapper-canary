n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(566898),
    c = n(785717),
    u = n(296075);
function d(e) {
    let { section: t, header: n, items: l, minItems: d = 0, isLoading: p, listClassName: h } = e,
        { trackUserProfileAction: f } = (0, c.KZ)(),
        m = i.useId(),
        [g, b] = i.useState(!1),
        _ = g ? a.CJ0 : a.Fbu;
    return (0, r.jsxs)('section', {
        className: u.section,
        children: [
            p
                ? (0, r.jsxs)('div', {
                      className: o()(u.header, u.loading),
                      children: [
                          (0, r.jsx)(s.ZT, {
                              width: 135,
                              opacity: 0.08
                          }),
                          (0, r.jsx)(s.ZT, {
                              width: 34,
                              opacity: 0.08
                          })
                      ]
                  })
                : l.length <= d
                  ? (0, r.jsxs)(a.X6q, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        className: u.header,
                        children: [n, ' \u2014 ', l.length]
                    })
                  : (0, r.jsxs)(a.P3F, {
                        className: o()(u.header, u.clickable),
                        'aria-controls': m,
                        'aria-expanded': g,
                        onClick: () => {
                            b(!g),
                                g ||
                                    f({
                                        action: 'PRESS_SECTION',
                                        section: t
                                    });
                        },
                        children: [
                            (0, r.jsxs)(a.X6q, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: [n, ' \u2014 ', l.length]
                            }),
                            (0, r.jsx)(_, { size: 'md' })
                        ]
                    }),
            l.length > 0 &&
                (0, r.jsx)('ul', {
                    id: m,
                    hidden: !g && d <= 0,
                    className: o()(u.list, h),
                    children: g || l.length <= d ? l : l.slice(0, d)
                })
        ]
    });
}
