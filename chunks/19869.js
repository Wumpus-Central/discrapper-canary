n.d(t, { O: () => j }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(693789),
    r = n(481060),
    a = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    h = n(511050),
    m = n(52647),
    g = n(317257),
    x = n(120786),
    _ = n(775451),
    p = n(970815),
    E = n(720463),
    C = n(536703),
    N = n(450272),
    f = n(981631),
    I = n(388032),
    T = n(965507),
    S = n(688139);
function j() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(v, {}), (0, i.jsx)(b, {})]
    });
}
function v() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, h.l)({ location: 'VirtualCurrencyComponents' }),
        [t, n] = s.useState(150),
        [m, E] = s.useState(150),
        [C, S] = s.useState(g.b.DEFAULT),
        j = () => {
            switch (C) {
                case g.b.DEFAULT:
                    S(g.b.HIGHLIGHTED);
                    break;
                case g.b.HIGHLIGHTED:
                    S(g.b.SELECTED);
                    break;
                case g.b.SELECTED:
                    S(g.b.DEFAULT);
            }
        },
        { analyticsLocations: v } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, i.jsxs)(N.$0, {
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(N.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(_.V9, {
                    ctaText: I.intl.string(I.t['H57f4+']),
                    ctaOnClick: f.dG4,
                    isCoachmarkEnabled: !1
                })
            }),
            (0, i.jsxs)(N.E_, {
                label: 'Open Balance Widget Coachmark in Shop',
                direction: 'vertical',
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                style: { marginBottom: '8px' },
                                children: 'Click the button below to open the Balance Widget Earned Orbs Coachmark in the shop page.'
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                color: 'info-help-text',
                                style: { marginBottom: '8px' },
                                children: 'You will be redirected to the shop page and the coachmark will appear beneath the Balance Widget Pill in the header bar after 0.5 seconds.'
                            })
                        ]
                    }),
                    (0, i.jsx)(l.zx, {
                        onClick: () => {
                            (0, a.xf)(),
                                (0, u.s1)().location.pathname.includes(f.Z5c.COLLECTIBLES_SHOP) ||
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
            (0, i.jsxs)(N.E_, {
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
            (0, i.jsxs)(N.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number to see the balance widget pill update:'
                    }),
                    (0, i.jsx)(r.FiK, {
                        className: T.numberInput,
                        value: t,
                        onChange: (e) => n(e)
                    }),
                    (0, i.jsx)(l.zx, {
                        onClick: () => E(t),
                        children: 'Set Balance'
                    }),
                    (0, i.jsx)(p.A4, {
                        balance: m,
                        balanceWidgetMode: C,
                        onClick: () => j()
                    })
                ]
            }),
            (0, i.jsx)(N.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(x.L, {
                    ctaText: I.intl.string(I.t['H57f4+']),
                    linkText: I.intl.string(I.t['7f4H7O']),
                    ctaOnClick: f.dG4
                })
            })
        ]
    });
}
function b() {
    let { resetOnboardingAnnouncementModal: e } = (0, m.Z)();
    return (0, i.jsxs)(N.$0, {
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, i.jsx)(N.E_, {
                label: 'Announcement Modal',
                children: (0, i.jsx)(l.zx, {
                    onClick: () => {
                        (0, r.ZDy)(async () => {
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
            (0, i.jsxs)(N.E_, {
                label: 'Announcement Modal [Reset Dismissible Content]',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again."
                    }),
                    (0, i.jsx)(l.zx, {
                        onClick: () => e(),
                        children: 'Reset Announcement Modal State'
                    })
                ]
            }),
            (0, i.jsxs)(N.E_, {
                label: 'Onboarding Coachmark',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(C.mG, {
                        onClose: f.dG4,
                        renderTail: !1
                    }),
                    (0, i.jsxs)('div', {
                        className: S.horizontalContainer,
                        children: [
                            (0, i.jsx)(C.mG, {
                                onClose: f.dG4,
                                renderTail: !0
                            }),
                            (0, i.jsx)(C.mG, {
                                onClose: f.dG4,
                                renderTail: !0,
                                invertTail: !0
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(N.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, i.jsx)(E.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: f.dG4,
                    linkOnClick: f.dG4
                })
            })
        ]
    });
}
