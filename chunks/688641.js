n.d(t, { Z: () => u }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(540059),
    s = n(388032),
    c = n(661475);
function u(e) {
    let { className: t, iconContainerClassName: n, icon: i, color: u, title: d, description: p, userCount: h, onClick: f, highlight: m } = e,
        g = (0, a.Q3)('GuildEventPrompt'),
        b = (0, o._q$)('GuildEventPrompt');
    return (0, r.jsxs)(o.P3F, {
        className: l()(c.container, t, null != m && { [c.pulse]: m }),
        onClick: f,
        children: [
            (0, r.jsx)('div', {
                style: g ? void 0 : { backgroundColor: u },
                className: l()(c.icon, n),
                children: i
            }),
            (0, r.jsxs)('div', {
                className: c.textContainer,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-md/semibold',
                        color: b ? 'text-primary' : 'header-secondary',
                        children: d
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: b ? 'text-primary' : 'header-secondary',
                        className: c.inline,
                        children: p
                    }),
                    null != h && h > 0
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      color: b ? 'text-primary' : 'header-secondary',
                                      className: c.dot,
                                      children: '\u2022'
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      color: b ? 'text-primary' : 'header-secondary',
                                      className: c.inline,
                                      children: s.NW.format(s.t.NywdIi, { count: h })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsx)(o.Fbu, {
                size: 'xs',
                color: 'currentColor',
                className: c.caret
            })
        ]
    });
}
