n.d(t, { O: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(693789),
    a = n(481060),
    l = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    m = n(511050),
    g = n(52647),
    p = n(317257),
    h = n(120786),
    f = n(775451),
    b = n(970815),
    N = n(720463),
    x = n(536703),
    _ = n(450272),
    E = n(981631),
    j = n(388032),
    C = n(368186),
    O = n(449762);
function v() {
    return (0, r.jsxs)('div', {
        children: [(0, r.jsx)(S, {}), (0, r.jsx)(T, {})]
    });
}
function S() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, m.l)({ location: 'VirtualCurrencyComponents' }),
        [t, n] = i.useState(150),
        [g, N] = i.useState(150),
        [x, O] = i.useState(500),
        [v, S] = i.useState(p.b.DEFAULT),
        T = () => {
            switch (v) {
                case p.b.DEFAULT:
                    S(p.b.HIGHLIGHTED);
                    break;
                case p.b.HIGHLIGHTED:
                    S(p.b.SELECTED);
                    break;
                case p.b.SELECTED:
                    S(p.b.DEFAULT);
            }
        },
        { analyticsLocations: I } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, r.jsxs)(_.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, r.jsx)(_.E_, {
                label: 'Balance Widget Menu',
                children: (0, r.jsx)(f.V9, {
                    ctaText: j.NW.string(j.t['H57f4+']),
                    ctaOnClick: E.dG4,
                    isCoachmarkEnabled: !1
                })
            }),
            (0, r.jsxs)(_.E_, {
                label: 'Open Balance Widget Coachmark in Shop',
                direction: 'vertical',
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                style: { marginBottom: '8px' },
                                children: 'Click the button below to open the Balance Widget Earned Orbs Coachmark in the shop page.'
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                color: 'info-help-text',
                                style: { marginBottom: '8px' },
                                children: 'You will be redirected to the shop page and the coachmark will appear beneath the Balance Widget Pill in the header bar after 0.5 seconds.'
                            })
                        ]
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            (0, l.xf)(),
                                (0, u.s1)().location.pathname.includes(E.Z5c.COLLECTIBLES_SHOP) ||
                                    (0, d.mK)({
                                        openInLayer: !1,
                                        analyticsLocations: I,
                                        analyticsSource: o.Z.REVENUE_STORYBOOK_TEST_PAGE
                                    }),
                                e(!0);
                        },
                        children: 'Open Balance Widget Coachmark'
                    })
                ]
            }),
            (0, r.jsxs)(_.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, r.jsx)(b.A4, {
                        balance: 150,
                        balanceWidgetMode: p.b.DEFAULT
                    }),
                    (0, r.jsx)(b.A4, {
                        balance: 150,
                        balanceWidgetMode: p.b.HIGHLIGHTED
                    }),
                    (0, r.jsx)(b.A4, {
                        balance: 150,
                        balanceWidgetMode: p.b.SELECTED
                    }),
                    (0, r.jsx)(b.A4, {
                        balance: 0,
                        balanceWidgetMode: p.b.DEFAULT,
                        showNotificationBadge: !0
                    }),
                    (0, r.jsx)(b.A4, {
                        balance: null,
                        balanceWidgetMode: p.b.DEFAULT
                    })
                ]
            }),
            (0, r.jsxs)(_.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number and click Set Balance to see the balance widget pill update:'
                    }),
                    (0, r.jsx)(a.FiK, {
                        className: C.numberInput,
                        value: t,
                        onChange: (e) => n(e)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => N(t),
                        children: 'Set Balance'
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:'
                    }),
                    (0, r.jsx)(a.FiK, {
                        className: C.numberInput,
                        value: x,
                        onChange: (e) => O(e)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            N(null),
                                setTimeout(() => {
                                    N(t);
                                }, x);
                        },
                        children: 'Simulate Loading State'
                    }),
                    (0, r.jsx)('div', {
                        className: C.interactivePillContainer,
                        children: (0, r.jsx)(b.A4, {
                            balance: g,
                            balanceWidgetMode: v,
                            onClick: () => T()
                        })
                    })
                ]
            }),
            (0, r.jsx)(_.E_, {
                label: 'Balance Widget Card',
                children: (0, r.jsx)(h.L, {
                    ctaText: j.NW.string(j.t['H57f4+']),
                    linkText: j.NW.string(j.t['7f4H7O']),
                    ctaOnClick: E.dG4
                })
            })
        ]
    });
}
function T() {
    let { resetOnboardingAnnouncementModal: e } = (0, g.Z)();
    return (0, r.jsxs)(_.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, r.jsx)(_.E_, {
                label: 'Announcement Modal',
                children: (0, r.jsx)(s.zx, {
                    onClick: () => {
                        (0, a.ZDy)(async () => {
                            let { AnnouncementModal: e } = await n.e('54663').then(n.bind(n, 520156));
                            return (t) => {
                                var n,
                                    i,
                                    { onClose: s } = t,
                                    a = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = {},
                                                    s = Object.keys(e);
                                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                        }
                                        return i;
                                    })(t, ['onClose']);
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, a)),
                                    (i = i =
                                        {
                                            onClose: s,
                                            ctaOnClick: s
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n)
                                );
                            };
                        });
                    },
                    children: 'Open Announcement Modal'
                })
            }),
            (0, r.jsxs)(_.E_, {
                label: 'Announcement Modal [Reset Dismissible Content]',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again."
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => e(),
                        children: 'Reset Announcement Modal State'
                    })
                ]
            }),
            (0, r.jsxs)(_.E_, {
                label: 'Onboarding Coachmark',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(x.mG, {
                        onClose: E.dG4,
                        renderTail: !1
                    }),
                    (0, r.jsxs)('div', {
                        className: O.horizontalContainer,
                        children: [
                            (0, r.jsx)(x.mG, {
                                onClose: E.dG4,
                                renderTail: !0
                            }),
                            (0, r.jsx)(x.mG, {
                                onClose: E.dG4,
                                renderTail: !0,
                                invertTail: !0
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(_.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, r.jsx)(N.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: E.dG4,
                    linkOnClick: E.dG4
                })
            })
        ]
    });
}
