n.d(t, {
    O: function () {
        return m;
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
    u = n(450272);
function m() {
    return (0, i.jsx)('div', { children: (0, i.jsx)(g, {}) });
}
function g() {
    let [e, t] = r.useState(l.b.DEFAULT),
        m = () => {
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
    return (0, i.jsxs)(u.$0, {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(u.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(c.V9, {
                    ctaText: 'Earn More Orbs',
                    linkText: 'Learn about Orbs'
                })
            }),
            (0, i.jsxs)(u.E_, {
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
            (0, i.jsx)(u.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                children: (0, i.jsx)(d.A, {
                    balance: 150,
                    balanceWidgetMode: e,
                    onClick: () => m()
                })
            }),
            (0, i.jsx)(u.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(o.L, {
                    ctaText: 'Earn More Orbs',
                    linkText: 'Learn about Orbs'
                })
            }),
            (0, i.jsx)(u.E_, {
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
                                    onCTA: () => {}
                                });
                            };
                        });
                    },
                    children: 'Open Announcement Modal'
                })
            })
        ]
    });
}
