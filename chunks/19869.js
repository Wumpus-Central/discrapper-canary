n.d(t, { O: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(693789),
    a = n(481060),
    l = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    m = n(751648),
    g = n(511050),
    p = n(52647),
    h = n(822857),
    f = n(317257),
    b = n(120786),
    N = n(775451),
    x = n(970815),
    _ = n(275388),
    E = n(720463),
    j = n(931928),
    O = n(450272),
    C = n(981631),
    S = n(388032),
    v = n(751318);
function T() {
    let { enabled: e } = (0, h.W)({ location: 'revenue_storybook' });
    return (0, r.jsxs)('div', {
        children: [e && (0, r.jsx)(y, {}), (0, r.jsx)(I, {}), (0, r.jsx)(A, {})]
    });
}
function I() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, g.l)({ location: 'VirtualCurrencyComponents' }),
        [t, n] = i.useState(150),
        [p, h] = i.useState(150),
        [_, E] = i.useState(500),
        [j, T] = i.useState(f.b.DEFAULT),
        I = () => {
            switch (j) {
                case f.b.DEFAULT:
                    T(f.b.HIGHLIGHTED);
                    break;
                case f.b.HIGHLIGHTED:
                    T(f.b.SELECTED);
                    break;
                case f.b.SELECTED:
                    T(f.b.DEFAULT);
            }
        },
        { analyticsLocations: y } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, r.jsx)(O.E_, {
                label: 'Balance Widget Menu',
                children: (0, r.jsx)(N.V9, {
                    ctaText: S.NW.string(S.t['J+vlIS']),
                    ctaOnClick: C.dG4,
                    isCoachmarkEnabled: !1
                })
            }),
            (0, r.jsxs)(O.E_, {
                label: 'Open Balance Widget Pill Overlay in Shop',
                direction: 'vertical',
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            style: { marginBottom: '8px' },
                            children: 'Click the button below to open the Balance Pill Overlay in the shop page.'
                        })
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            (0, l.xf)(),
                                (0, u.s1)().location.pathname.includes(C.Z5c.COLLECTIBLES_SHOP) ||
                                    (0, d.mK)({
                                        openInLayer: !1,
                                        analyticsLocations: y,
                                        analyticsSource: o.Z.REVENUE_STORYBOOK_TEST_PAGE
                                    }),
                                setTimeout(() => {
                                    (0, m.S6)();
                                }, 500);
                        },
                        children: 'Open Balance Pill Overlay'
                    })
                ]
            }),
            (0, r.jsxs)(O.E_, {
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
                                (0, u.s1)().location.pathname.includes(C.Z5c.COLLECTIBLES_SHOP) ||
                                    (0, d.mK)({
                                        openInLayer: !1,
                                        analyticsLocations: y,
                                        analyticsSource: o.Z.REVENUE_STORYBOOK_TEST_PAGE
                                    }),
                                e({
                                    forceOpen: !0,
                                    delayMS: 200
                                });
                        },
                        children: 'Open Balance Widget Coachmark'
                    })
                ]
            }),
            (0, r.jsxs)(O.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, r.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: f.b.DEFAULT
                    }),
                    (0, r.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: f.b.HIGHLIGHTED
                    }),
                    (0, r.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: f.b.SELECTED
                    }),
                    (0, r.jsx)(x.A4, {
                        balance: 0,
                        balanceWidgetMode: f.b.DEFAULT,
                        showNotificationBadge: !0
                    }),
                    (0, r.jsx)(x.A4, {
                        balance: null,
                        balanceWidgetMode: f.b.DEFAULT
                    })
                ]
            }),
            (0, r.jsxs)(O.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number and click Set Balance to see the balance widget pill update:'
                    }),
                    (0, r.jsx)(a.FiK, {
                        className: v.numberInput,
                        value: t,
                        onChange: (e) => n(e)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => h(t),
                        children: 'Set Balance'
                    }),
                    (0, r.jsx)('div', {
                        className: v.interactivePillContainer,
                        children: (0, r.jsx)(x.A4, {
                            balance: p,
                            balanceWidgetMode: j,
                            onClick: () => I()
                        })
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:'
                    }),
                    (0, r.jsx)(a.FiK, {
                        className: v.numberInput,
                        value: _,
                        onChange: (e) => E(e)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            h(null),
                                setTimeout(() => {
                                    h(t);
                                }, _);
                        },
                        children: 'Simulate Loading State'
                    }),
                    (0, r.jsx)('div', {
                        className: v.interactivePillContainer,
                        children: (0, r.jsx)(x.A4, {
                            balance: p,
                            balanceWidgetMode: j,
                            onClick: () => I()
                        })
                    })
                ]
            }),
            (0, r.jsx)(O.E_, {
                label: 'Balance Widget Card',
                children: (0, r.jsx)(b.L, {
                    ctaText: S.NW.string(S.t['H57f4+']),
                    linkText: S.NW.string(S.t['7f4H7O']),
                    ctaOnClick: C.dG4
                })
            })
        ]
    });
}
function y() {
    let [e, t] = i.useState('1144308439720394944');
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Orb Checkout Components'
            }),
            (0, r.jsxs)(O.E_, {
                label: 'Orb Checkout Modal',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: 'Enter SKU ID here:'
                    }),
                    (0, r.jsx)(a.oil, {
                        placeholder: 'SKU ID',
                        value: e,
                        onChange: (e) => t(e)
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        children: 'The Orb Checkout Modal will open with the orb price of the product, if it exists'
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            (0, _.q)({
                                skuId: e,
                                onCheckoutSuccess: (e) => {
                                    let { skuId: t, entitlements: n } = e;
                                    console.log('Orb Checkout Success for SKU: '.concat(t, '. Entitlement(s): '), n, Date.now());
                                },
                                onCloseCallback: () => {
                                    console.log('Orb Checkout Closed');
                                }
                            });
                        },
                        children: 'Open Orb Checkout Integrated with Payment Modal'
                    })
                ]
            })
        ]
    });
}
function A() {
    let { resetOnboardingAnnouncementModal: e } = (0, p.Z)();
    return (0, r.jsxs)(O.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, r.jsx)(O.E_, {
                label: 'Announcement Modal',
                children: (0, r.jsx)(s.zx, {
                    onClick: () => {
                        (0, a.ZDy)(async () => {
                            let { AnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
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
            (0, r.jsxs)(O.E_, {
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
            (0, r.jsxs)(O.E_, {
                label: 'Onboarding Coachmark',
                direction: 'horizontal',
                children: [
                    (0, r.jsx)(j.ED, { onClose: C.dG4 }),
                    (0, r.jsx)(j.ED, {
                        onClose: C.dG4,
                        invertCoachmark: !0
                    })
                ]
            }),
            (0, r.jsx)(O.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, r.jsx)(E.E, {})
            })
        ]
    });
}
