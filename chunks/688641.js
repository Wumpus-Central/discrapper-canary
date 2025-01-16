n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(388032),
    o = n(819588);
function c(e) {
    let { className: t, iconContainerClassName: n, icon: l, color: c, title: d, description: u, userCount: h, onClick: p, highlight: m } = e;
    return (0, i.jsxs)(a.Clickable, {
        className: r()(o.container, t, null != m && { [o.pulse]: m }),
        onClick: p,
        children: [
            (0, i.jsx)('div', {
                style: { backgroundColor: c },
                className: r()(o.icon, n),
                children: l
            }),
            (0, i.jsxs)('div', {
                className: o.textContainer,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/semibold',
                        children: d
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        className: o.inline,
                        children: u
                    }),
                    null != h && h > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.dot,
                                      children: '\u2022'
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: o.inline,
                                      children: s.intl.format(s.t.NywdIi, { count: h })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, i.jsx)(a.ChevronSmallRightIcon, {
                size: 'xs',
                color: 'currentColor',
                className: o.caret
            })
        ]
    });
}
