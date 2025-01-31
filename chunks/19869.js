n.d(t, { O: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(693789),
    l = n(481060),
    a = n(317257),
    o = n(120786),
    c = n(775451),
    d = n(970815),
    u = n(720463),
    m = n(536703),
    h = n(431286),
    g = n(450272),
    _ = n(388032),
    x = n(441490);
function p() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(E, {}), (0, i.jsx)(C, {})]
    });
}
function E() {
    let [e, t] = s.useState(150),
        [n, r] = s.useState(a.b.DEFAULT),
        u = () => {
            switch (n) {
                case a.b.DEFAULT:
                    r(a.b.HIGHLIGHTED);
                    break;
                case a.b.HIGHLIGHTED:
                    r(a.b.SELECTED);
                    break;
                case a.b.SELECTED:
                    r(a.b.DEFAULT);
            }
        };
    return (0, i.jsxs)(g.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(g.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(c.V9, {
                    ctaText: _.intl.string(_.t['H57f4+']),
                    ctaOnClick: () => {}
                })
            }),
            (0, i.jsxs)(g.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(d.A, {
                        balance: 150,
                        balanceWidgetMode: a.b.DEFAULT
                    }),
                    (0, i.jsx)(d.A, {
                        balance: 150,
                        balanceWidgetMode: a.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(d.A, {
                        balance: 150,
                        balanceWidgetMode: a.b.SELECTED
                    }),
                    (0, i.jsx)(d.A, {
                        balance: 0,
                        balanceWidgetMode: a.b.DEFAULT,
                        showNotificationBadge: !0
                    })
                ]
            }),
            (0, i.jsxs)(g.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                className: x.verticalContainer,
                children: [
                    'Enter a number to see the balance widget pill update:',
                    (0, i.jsx)(l.FiK, {
                        className: x.numberInput,
                        value: e,
                        onChange: (e) => t(e)
                    }),
                    (0, i.jsx)(d.A, {
                        balance: e,
                        balanceWidgetMode: n,
                        onClick: () => u()
                    })
                ]
            }),
            (0, i.jsx)(g.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(o.L, {
                    ctaText: _.intl.string(_.t['H57f4+']),
                    linkText: _.intl.string(_.t['7f4H7O']),
                    ctaOnClick: () => {}
                })
            })
        ]
    });
}
function C() {
    let e = (0, h.i)();
    return (0, i.jsxs)(g.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, i.jsx)(g.E_, {
                label: 'Announcement Modal',
                children: (0, i.jsx)(r.zx, {
                    onClick: () => {
                        (0, l.ZDy)(async () => {
                            let { AnnouncementModal: e } = await n.e('54663').then(n.bind(n, 520156));
                            return (t) => {
                                let { onClose: n, ...s } = t;
                                return (0, i.jsx)(e, {
                                    ...s,
                                    onClose: n,
                                    ctaOnClick: n
                                });
                            };
                        });
                    },
                    children: 'Open Announcement Modal'
                })
            }),
            (0, i.jsx)(g.E_, {
                label: 'Announcement Modal [Dismissible Content]',
                children: (0, i.jsx)(r.zx, {
                    onClick: e,
                    children: 'Open SINGLE Use Announcement Modal'
                })
            }),
            (0, i.jsxs)(g.E_, {
                label: 'Onboarding Coachmark',
                children: [
                    (0, i.jsx)(m.d, {
                        onClose: () => {},
                        renderTail: !1
                    }),
                    (0, i.jsx)(m.d, {
                        onClose: () => {},
                        renderTail: !0
                    })
                ]
            }),
            (0, i.jsx)(g.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, i.jsx)(u.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: () => {},
                    linkTo: '/'
                })
            })
        ]
    });
}
