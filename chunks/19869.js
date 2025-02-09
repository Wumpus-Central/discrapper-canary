n.d(t, { O: () => S }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(693789),
    r = n(481060),
    a = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    h = n(751648),
    m = n(317257),
    g = n(120786),
    x = n(775451),
    _ = n(970815),
    p = n(720463),
    E = n(536703),
    C = n(431286),
    N = n(450272),
    f = n(981631),
    I = n(388032),
    T = n(54328);
function S() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)(j, {}), (0, i.jsx)(v, {})]
    });
}
function j() {
    let [e, t] = s.useState(150),
        [n, p] = s.useState(150),
        [E, C] = s.useState(m.b.DEFAULT),
        S = () => {
            switch (E) {
                case m.b.DEFAULT:
                    C(m.b.HIGHLIGHTED);
                    break;
                case m.b.HIGHLIGHTED:
                    C(m.b.SELECTED);
                    break;
                case m.b.SELECTED:
                    C(m.b.DEFAULT);
            }
        },
        { analyticsLocations: j } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, i.jsxs)(N.$0, {
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(N.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(x.V9, {
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
                                        analyticsLocations: j,
                                        analyticsSource: o.Z.REVENUE_STORYBOOK_TEST_PAGE
                                    }),
                                setTimeout(() => {
                                    (0, h.hF)({ earnedOrbsQuantity: 200 });
                                }, 500);
                        },
                        children: 'Open Balance Widget Coachmark'
                    })
                ]
            }),
            (0, i.jsxs)(N.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(_.A4, {
                        balance: 150,
                        balanceWidgetMode: m.b.DEFAULT
                    }),
                    (0, i.jsx)(_.A4, {
                        balance: 150,
                        balanceWidgetMode: m.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(_.A4, {
                        balance: 150,
                        balanceWidgetMode: m.b.SELECTED
                    }),
                    (0, i.jsx)(_.A4, {
                        balance: 0,
                        balanceWidgetMode: m.b.DEFAULT,
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
                        value: e,
                        onChange: (e) => t(e)
                    }),
                    (0, i.jsx)(l.zx, {
                        onClick: () => p(e),
                        children: 'Set Balance'
                    }),
                    (0, i.jsx)(_.A4, {
                        balance: n,
                        balanceWidgetMode: E,
                        onClick: () => S()
                    })
                ]
            }),
            (0, i.jsx)(N.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(g.L, {
                    ctaText: I.intl.string(I.t['H57f4+']),
                    linkText: I.intl.string(I.t['7f4H7O']),
                    ctaOnClick: f.dG4
                })
            })
        ]
    });
}
function v() {
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
            (0, i.jsx)(N.E_, {
                label: 'Announcement Modal [Dismissible Content]',
                children: (0, i.jsx)(l.zx, {
                    onClick: C.i,
                    children: 'Open SINGLE Use Announcement Modal'
                })
            }),
            (0, i.jsxs)(N.E_, {
                label: 'Onboarding Coachmark',
                children: [
                    (0, i.jsx)(E.mG, {
                        onClose: f.dG4,
                        renderTail: !1
                    }),
                    (0, i.jsx)(E.mG, {
                        onClose: f.dG4,
                        renderTail: !0
                    }),
                    (0, i.jsx)(E.mG, {
                        onClose: f.dG4,
                        renderTail: !0,
                        invertTail: !0
                    })
                ]
            }),
            (0, i.jsx)(N.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, i.jsx)(p.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: f.dG4,
                    linkOnClick: f.dG4
                })
            })
        ]
    });
}
