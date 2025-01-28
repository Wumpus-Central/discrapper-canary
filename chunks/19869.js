n.d(t, {
    O: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(693789),
    a = n(481060),
    l = n(317257),
    o = n(120786),
    c = n(775451),
    d = n(970815),
    u = n(431286),
    m = n(450272);
function g() {
    return (0, i.jsx)('div', { children: (0, i.jsx)(h, {}) });
}
function h() {
    let [e, t] = r.useState(l.b.DEFAULT),
        g = (0, u.i)(),
        h = () => {
            switch (e) {
                case l.b.DEFAULT:
                    t(l.b.HIGHLIGHTED);
                    break;
                case l.b.HIGHLIGHTED:
                    t(l.b.SELECTED);
                    break;
                case l.b.SELECTED:
                    t(l.b.DEFAULT);
            }
        };
    return (0, i.jsxs)(m.$0, {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(m.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(c.V9, {
                    ctaText: 'Earn More Orbs',
                    linkText: 'Learn about Orbs',
                    ctaOnClick: () => {}
                })
            }),
            (0, i.jsxs)(m.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(d.A, {
                        balance: 150,
                        balanceWidgetMode: l.b.DEFAULT
                    }),
                    (0, i.jsx)(d.A, {
                        balance: 150,
                        balanceWidgetMode: l.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(d.A, {
                        balance: 150,
                        balanceWidgetMode: l.b.SELECTED
                    }),
                    (0, i.jsx)(d.A, {
                        balance: 0,
                        balanceWidgetMode: l.b.DEFAULT,
                        showNotificationBadge: !0
                    })
                ]
            }),
            (0, i.jsx)(m.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                children: (0, i.jsx)(d.A, {
                    balance: 150,
                    balanceWidgetMode: e,
                    onClick: () => h()
                })
            }),
            (0, i.jsx)(m.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(o.L, {
                    ctaText: 'Earn More Orbs',
                    linkText: 'Learn about Orbs'
                })
            }),
            (0, i.jsx)(m.E_, {
                label: 'Announcement Modal',
                children: (0, i.jsx)(s.zx, {
                    onClick: () => {
                        (0, a.openModalLazy)(async () => {
                            let { AnnouncementModal: e } = await n.e('54663').then(n.bind(n, 520156));
                            return (t) => {
                                let { onClose: n, ...r } = t;
                                return (0, i.jsx)(e, {
                                    ...r,
                                    onClose: n,
                                    ctaOnClick: () => {}
                                });
                            };
                        });
                    },
                    children: 'Open Announcement Modal'
                })
            }),
            (0, i.jsx)(m.E_, {
                label: 'Announcement Modal [Dismissible Content]',
                children: (0, i.jsx)(s.zx, {
                    onClick: g,
                    children: 'Open SINGLE Use Announcement Modal'
                })
            })
        ]
    });
}
