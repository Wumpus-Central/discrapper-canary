n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(540059),
    o = n(388032),
    c = n(819588);
function d(e) {
    let { className: t, iconContainerClassName: n, icon: l, color: d, title: u, description: h, userCount: p, onClick: m, highlight: f } = e,
        g = (0, s.Q3)('GuildEventPrompt');
    return (0, i.jsxs)(r.P3F, {
        className: a()(c.container, t, null != f && { [c.pulse]: f }),
        onClick: m,
        children: [
            (0, i.jsx)('div', {
                style: g ? void 0 : { backgroundColor: d },
                className: a()(c.icon, n),
                children: l
            }),
            (0, i.jsxs)('div', {
                className: c.textContainer,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: u
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        className: c.inline,
                        children: h
                    }),
                    null != p && p > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: c.dot,
                                      children: '\u2022'
                                  }),
                                  (0, i.jsx)(r.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      className: c.inline,
                                      children: o.intl.format(o.t.NywdIi, { count: p })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, i.jsx)(r.Fbu, {
                size: 'xs',
                color: 'currentColor',
                className: c.caret
            })
        ]
    });
}
