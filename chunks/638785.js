n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(566898),
    c = n(785717),
    d = n(68187);
function u(e) {
    let { section: t, header: n, items: r, minItems: u = 0, isLoading: h, listClassName: p } = e,
        { trackUserProfileAction: m } = (0, c.KZ)(),
        f = l.useId(),
        [g, C] = l.useState(!1),
        x = g ? s.ChevronSmallDownIcon : s.ChevronSmallRightIcon;
    return (0, i.jsxs)('section', {
        className: d.section,
        children: [
            h
                ? (0, i.jsxs)('div', {
                      className: a()(d.header, d.loading),
                      children: [
                          (0, i.jsx)(o.ZT, {
                              width: 135,
                              opacity: 0.08
                          }),
                          (0, i.jsx)(o.ZT, {
                              width: 34,
                              opacity: 0.08
                          })
                      ]
                  })
                : r.length <= u
                  ? (0, i.jsxs)(s.Heading, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        className: d.header,
                        children: [n, ' \u2014 ', r.length]
                    })
                  : (0, i.jsxs)(s.Clickable, {
                        className: a()(d.header, d.clickable),
                        'aria-controls': f,
                        'aria-expanded': g,
                        onClick: () => {
                            C(!g),
                                !g &&
                                    m({
                                        action: 'PRESS_SECTION',
                                        section: t
                                    });
                        },
                        children: [
                            (0, i.jsxs)(s.Heading, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: [n, ' \u2014 ', r.length]
                            }),
                            (0, i.jsx)(x, { size: 'md' })
                        ]
                    }),
            r.length > 0 &&
                (0, i.jsx)('ul', {
                    id: f,
                    hidden: !g && u <= 0,
                    className: a()(d.list, p),
                    children: g || r.length <= u ? r : r.slice(0, u)
                })
        ]
    });
}
