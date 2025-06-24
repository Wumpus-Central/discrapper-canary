n.d(t, { Z: () => c }), n(953529);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(388032),
    s = n(661475);
function c(e) {
    let { className: t, iconContainerClassName: n, icon: i, title: c, description: u, userCount: d, onClick: p, highlight: h } = e;
    return (0, r.jsxs)(a.P3F, {
        className: l()(s.container, t, null != h && { [s.pulse]: h }),
        onClick: p,
        children: [
            (0, r.jsx)('div', {
                className: l()(s.icon, n),
                children: i
            }),
            (0, r.jsxs)('div', {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        color: 'text-primary',
                        children: c
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-primary',
                        className: s.inline,
                        children: u
                    }),
                    null != d && d > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-primary',
                                      className: s.dot,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-primary',
                                      className: s.inline,
                                      children: o.intl.format(o.t.NywdIi, { count: d })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsx)(a.Fbu, {
                size: 'xs',
                color: 'currentColor',
                className: s.caret
            })
        ]
    });
}
