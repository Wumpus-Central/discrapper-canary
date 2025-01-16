n.d(t, {
    O: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(317257),
    l = n(120786),
    o = n(775451),
    c = n(970815),
    d = n(450272);
function u() {
    return (0, i.jsx)('div', { children: (0, i.jsx)(m, {}) });
}
function m() {
    let [e, t] = r.useState(a.b.DEFAULT),
        n = () => {
            switch (e) {
                case a.b.DEFAULT:
                    t(a.b.HIGHLIGHTED);
                    break;
                case a.b.HIGHLIGHTED:
                    t(a.b.SELECTED);
                    break;
                case a.b.SELECTED:
                    t(a.b.DEFAULT);
            }
        };
    return (0, i.jsxs)(d.$0, {
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(d.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(o.V9, {
                    ctaText: 'Earn More Orbs',
                    linkText: 'Learn about Orbs'
                })
            }),
            (0, i.jsxs)(d.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(c.A, {
                        balance: 150,
                        balanceWidgetMode: a.b.DEFAULT
                    }),
                    (0, i.jsx)(c.A, {
                        balance: 150,
                        balanceWidgetMode: a.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(c.A, {
                        balance: 150,
                        balanceWidgetMode: a.b.SELECTED
                    }),
                    (0, i.jsx)(c.A, {
                        balance: 0,
                        balanceWidgetMode: a.b.DEFAULT,
                        showNotificationBadge: !0
                    })
                ]
            }),
            (0, i.jsx)(d.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                children: (0, i.jsx)(c.A, {
                    balance: 150,
                    balanceWidgetMode: e,
                    onClick: () => n()
                })
            }),
            (0, i.jsx)(d.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(l.L, {
                    ctaText: 'Earn More Orbs',
                    linkText: 'Learn about Orbs'
                })
            })
        ]
    });
}
