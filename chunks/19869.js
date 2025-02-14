n.d(t, { O: () => b }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(693789),
    l = n(481060),
    a = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    m = n(511050),
    h = n(52647),
    g = n(317257),
    x = n(120786),
    _ = n(775451),
    p = n(970815),
    E = n(720463),
    C = n(536703),
    f = n(450272),
    T = n(981631),
    N = n(388032),
    S = n(965507),
    I = n(688139);
function b() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(v, {}), (0, i.jsx)(j, {})]
    });
}
function v() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, m.l)({ location: 'VirtualCurrencyComponents' }),
        [t, n] = s.useState(150),
        [h, E] = s.useState(150),
        [C, I] = s.useState(g.b.DEFAULT),
        b = () => {
            switch (C) {
                case g.b.DEFAULT:
                    I(g.b.HIGHLIGHTED);
                    break;
                case g.b.HIGHLIGHTED:
                    I(g.b.SELECTED);
                    break;
                case g.b.SELECTED:
                    I(g.b.DEFAULT);
            }
        },
        { analyticsLocations: v } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
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
                    ctaOnClick: T.dG4,
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
                                        analyticsLocations: v,
                                        analyticsSource: o.Z.REVENUE_STORYBOOK_TEST_PAGE
                                    }),
                                e(!0);
                        },
                        children: 'Open Balance Widget Coachmark'
                    })
                ]
            }),
            (0, i.jsxs)(f.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(p.A4, {
                        balance: 150,
                        balanceWidgetMode: g.b.DEFAULT
                    }),
                    (0, i.jsx)(p.A4, {
                        balance: 150,
                        balanceWidgetMode: g.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(p.A4, {
                        balance: 150,
                        balanceWidgetMode: g.b.SELECTED
                    }),
                    (0, i.jsx)(p.A4, {
                        balance: 0,
                        balanceWidgetMode: g.b.DEFAULT,
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
                        className: S.numberInput,
                        value: t,
                        onChange: (e) => n(e)
                    }),
                    (0, i.jsx)(r.zx, {
                        onClick: () => E(t),
                        children: 'Set Balance'
                    }),
                    (0, i.jsx)(p.A4, {
                        balance: h,
                        balanceWidgetMode: C,
                        onClick: () => b()
                    })
                ]
            }),
            (0, i.jsx)(f.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(x.L, {
                    ctaText: N.intl.string(N.t['H57f4+']),
                    linkText: N.intl.string(N.t['7f4H7O']),
                    ctaOnClick: T.dG4
                })
            })
        ]
    });
}
function j() {
    let { resetOnboardingAnnouncementModal: e } = (0, h.Z)();
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
            (0, i.jsxs)(f.E_, {
                label: 'Announcement Modal [Reset Dismissible Content]',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again."
                    }),
                    (0, i.jsx)(r.zx, {
                        onClick: () => e(),
                        children: 'Reset Announcement Modal State'
                    })
                ]
            }),
            (0, i.jsxs)(f.E_, {
                label: 'Onboarding Coachmark',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(C.mG, {
                        onClose: T.dG4,
                        renderTail: !1
                    }),
                    (0, i.jsxs)('div', {
                        className: I.horizontalContainer,
                        children: [
                            (0, i.jsx)(C.mG, {
                                onClose: T.dG4,
                                renderTail: !0
                            }),
                            (0, i.jsx)(C.mG, {
                                onClose: T.dG4,
                                renderTail: !0,
                                invertTail: !0
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(f.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, i.jsx)(E.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: T.dG4,
                    linkOnClick: T.dG4
                })
            })
        ]
    });
}
