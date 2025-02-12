n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(566898),
    c = n(785717),
    d = n(613211);
function u(e) {
    let { section: t, header: n, items: a, minItems: u = 0, isLoading: h, listClassName: p } = e,
        { trackUserProfileAction: m } = (0, c.KZ)(),
        f = l.useId(),
        [g, _] = l.useState(!1),
        C = g ? s.CJ0 : s.Fbu;
    return (0, i.jsxs)('section', {
        className: d.section,
        children: [
            h
                ? (0, i.jsxs)('div', {
                      className: r()(d.header, d.loading),
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
                : a.length <= u
                  ? (0, i.jsxs)(s.X6q, {
                        variant: 'text-sm/medium',
                        color: 'text-normal',
                        className: d.header,
                        children: [n, ' \u2014 ', a.length]
                    })
                  : (0, i.jsxs)(s.P3F, {
                        className: r()(d.header, d.clickable),
                        'aria-controls': f,
                        'aria-expanded': g,
                        onClick: () => {
                            _(!g),
                                g ||
                                    m({
                                        action: 'PRESS_SECTION',
                                        section: t
                                    });
                        },
                        children: [
                            (0, i.jsxs)(s.X6q, {
                                variant: 'text-sm/medium',
                                color: 'text-normal',
                                children: [n, ' \u2014 ', a.length]
                            }),
                            (0, i.jsx)(C, { size: 'md' })
                        ]
                    }),
            a.length > 0 &&
                (0, i.jsx)('ul', {
                    id: f,
                    hidden: !g && u <= 0,
                    className: r()(d.list, p),
                    children: g || a.length <= u ? a : a.slice(0, u)
                })
        ]
    });
}
