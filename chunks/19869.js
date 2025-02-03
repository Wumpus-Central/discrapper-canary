n.d(t, { O: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(693789),
    l = n(481060),
    a = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    m = n(751648),
    h = n(317257),
    g = n(120786),
    _ = n(775451),
    x = n(970815),
    p = n(720463),
    E = n(536703),
    C = n(431286),
    f = n(450272),
    T = n(981631),
    N = n(388032),
    I = n(441490);
function S() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(b, {}), (0, i.jsx)(v, {})]
    });
}
function b() {
    let [e, t] = s.useState(150),
        [n, p] = s.useState(h.b.DEFAULT),
        E = () => {
            switch (n) {
                case h.b.DEFAULT:
                    p(h.b.HIGHLIGHTED);
                    break;
                case h.b.HIGHLIGHTED:
                    p(h.b.SELECTED);
                    break;
                case h.b.SELECTED:
                    p(h.b.DEFAULT);
            }
        },
        { analyticsLocations: C } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, i.jsxs)(f.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(f.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(_.V9, {
                    ctaText: N.intl.string(N.t['H57f4+']),
                    ctaOnClick: () => {},
                    isCoachmarkEnabled: !1
                })
            }),
            (0, i.jsxs)(f.E_, {
                label: 'Open Balance Widget Coachmark in Shop',
                direction: 'vertical',
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                style: { marginBottom: '8px' },
                                children: 'Click the button below to open the Balance Widget Earned Orbs Coachmark in the shop page.'
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                color: 'info-help-text',
                                style: { marginBottom: '8px' },
                                children: 'You will be redirected to the shop page and the coachmark will appear beneath the Balance Widget Pill in the header bar after 0.5 seconds.'
                            })
                        ]
                    }),
                    (0, i.jsx)(r.zx, {
                        onClick: () => {
                            (0, a.xf)(),
                                (0, u.s1)().location.pathname.includes(T.Z5c.COLLECTIBLES_SHOP) ||
                                    (0, d.mK)({
                                        openInLayer: !1,
                                        analyticsLocations: C,
                                        analyticsSource: o.Z.REVENUE_STORYBOOK_TEST_PAGE
                                    }),
                                setTimeout(() => {
                                    (0, m.hF)({ earnedOrbsQuantity: 200 });
                                }, 500);
                        },
                        children: 'Open Balance Widget Coachmark'
                    })
                ]
            }),
            (0, i.jsxs)(f.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.DEFAULT
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.SELECTED
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: 0,
                        balanceWidgetMode: h.b.DEFAULT,
                        showNotificationBadge: !0
                    })
                ]
            }),
            (0, i.jsxs)(f.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number to see the balance widget pill update:'
                    }),
                    (0, i.jsx)(l.FiK, {
                        className: I.numberInput,
                        value: e,
                        onChange: (e) => t(e)
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: e,
                        balanceWidgetMode: n,
                        onClick: () => E()
                    })
                ]
            }),
            (0, i.jsx)(f.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(g.L, {
                    ctaText: N.intl.string(N.t['H57f4+']),
                    linkText: N.intl.string(N.t['7f4H7O']),
                    ctaOnClick: () => {}
                })
            })
        ]
    });
}
function v() {
    let e = (0, C.i)();
    return (0, i.jsxs)(f.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, i.jsx)(f.E_, {
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
            (0, i.jsx)(f.E_, {
                label: 'Announcement Modal [Dismissible Content]',
                children: (0, i.jsx)(r.zx, {
                    onClick: e,
                    children: 'Open SINGLE Use Announcement Modal'
                })
            }),
            (0, i.jsxs)(f.E_, {
                label: 'Onboarding Coachmark',
                children: [
                    (0, i.jsx)(E.d, {
                        onClose: () => {},
                        renderTail: !1
                    }),
                    (0, i.jsx)(E.d, {
                        onClose: () => {},
                        renderTail: !0
                    })
                ]
            }),
            (0, i.jsx)(f.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, i.jsx)(p.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: () => {},
                    linkTo: '/'
                })
            })
        ]
    });
}
