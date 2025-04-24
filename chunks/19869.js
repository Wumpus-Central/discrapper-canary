n.d(t, { O: () => I }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(693789),
    l = n(481060),
    a = n(37234),
    o = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(703656),
    m = n(751648),
    p = n(511050),
    g = n(52647),
    h = n(822857),
    f = n(317257),
    b = n(120786),
    _ = n(775451),
    x = n(970815),
    E = n(275388),
    C = n(720463),
    j = n(931928),
    O = n(450272),
    S = n(981631),
    v = n(388032),
    T = n(751318);
function I() {
    let { enabled: e } = (0, h.W)({ location: 'revenue_storybook' });
    return (0, i.jsxs)('div', {
        children: [e && (0, i.jsx)(y, {}), (0, i.jsx)(N, {}), (0, i.jsx)(A, {})]
    });
}
function N() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, p.l)({ location: 'VirtualCurrencyComponents' }),
        [t, n] = r.useState(150),
        [g, h] = r.useState(150),
        [E, C] = r.useState(500),
        [j, I] = r.useState(f.b.DEFAULT),
        N = () => {
            switch (j) {
                case f.b.DEFAULT:
                    I(f.b.HIGHLIGHTED);
                    break;
                case f.b.HIGHLIGHTED:
                    I(f.b.SELECTED);
                    break;
                case f.b.SELECTED:
                    I(f.b.DEFAULT);
            }
        },
        { analyticsLocations: y } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, i.jsxs)(O.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, i.jsx)(O.E_, {
                label: 'Balance Widget Menu',
                children: (0, i.jsx)(_.V9, {
                    ctaText: v.intl.string(v.t['J+vlIS']),
                    ctaOnClick: S.dG4,
                    isCoachmarkEnabled: !1
                })
            }),
            (0, i.jsxs)(O.E_, {
                label: 'Open Balance Widget Pill Overlay in Shop',
                direction: 'vertical',
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            style: { marginBottom: '8px' },
                            children: 'Click the button below to open the Balance Pill Overlay in the shop page.'
                        })
                    }),
                    (0, i.jsx)(s.zx, {
                        onClick: () => {
                            (0, a.xf)(),
                                (0, u.s1)().location.pathname.includes(S.Z5c.COLLECTIBLES_SHOP) ||
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
            (0, i.jsxs)(O.E_, {
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
                    (0, i.jsx)(s.zx, {
                        onClick: () => {
                            (0, a.xf)(),
                                (0, u.s1)().location.pathname.includes(S.Z5c.COLLECTIBLES_SHOP) ||
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
            (0, i.jsxs)(O.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, i.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: f.b.DEFAULT
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: f.b.HIGHLIGHTED
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: 150,
                        balanceWidgetMode: f.b.SELECTED
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: 0,
                        balanceWidgetMode: f.b.DEFAULT,
                        showNotificationBadge: !0
                    }),
                    (0, i.jsx)(x.A4, {
                        balance: null,
                        balanceWidgetMode: f.b.DEFAULT
                    })
                ]
            }),
            (0, i.jsxs)(O.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number and click Set Balance to see the balance widget pill update:'
                    }),
                    (0, i.jsx)(l.FiK, {
                        className: T.numberInput,
                        value: t,
                        onChange: (e) => n(e)
                    }),
                    (0, i.jsx)(s.zx, {
                        onClick: () => h(t),
                        children: 'Set Balance'
                    }),
                    (0, i.jsx)('div', {
                        className: T.interactivePillContainer,
                        children: (0, i.jsx)(x.A4, {
                            balance: g,
                            balanceWidgetMode: j,
                            onClick: () => N()
                        })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:'
                    }),
                    (0, i.jsx)(l.FiK, {
                        className: T.numberInput,
                        value: E,
                        onChange: (e) => C(e)
                    }),
                    (0, i.jsx)(s.zx, {
                        onClick: () => {
                            h(null),
                                setTimeout(() => {
                                    h(t);
                                }, E);
                        },
                        children: 'Simulate Loading State'
                    }),
                    (0, i.jsx)('div', {
                        className: T.interactivePillContainer,
                        children: (0, i.jsx)(x.A4, {
                            balance: g,
                            balanceWidgetMode: j,
                            onClick: () => N()
                        })
                    })
                ]
            }),
            (0, i.jsx)(O.E_, {
                label: 'Balance Widget Card',
                children: (0, i.jsx)(b.L, {
                    ctaText: v.intl.string(v.t['H57f4+']),
                    linkText: v.intl.string(v.t['7f4H7O']),
                    ctaOnClick: S.dG4
                })
            })
        ]
    });
}
function y() {
    let [e, t] = r.useState('1144308439720394944');
    return (0, i.jsxs)(O.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Orb Checkout Components'
            }),
            (0, i.jsxs)(O.E_, {
                label: 'Orb Checkout Modal',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        children: 'Enter SKU ID here:'
                    }),
                    (0, i.jsx)(l.oil, {
                        placeholder: 'SKU ID',
                        value: e,
                        onChange: (e) => t(e)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        children: 'The Orb Checkout Modal will open with the orb price of the product, if it exists'
                    }),
                    (0, i.jsx)(s.zx, {
                        onClick: () => {
                            (0, E.q)({
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
    let { resetOnboardingAnnouncementModal: e } = (0, g.Z)();
    return (0, i.jsxs)(O.$0, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, i.jsx)(O.E_, {
                label: 'Announcement Modal',
                children: (0, i.jsx)(s.zx, {
                    onClick: () => {
                        (0, l.ZDy)(async () => {
                            let { AnnouncementModal: e } = await n.e('86653').then(n.bind(n, 993318));
                            return (t) => {
                                var n,
                                    r,
                                    { onClose: s } = t,
                                    l = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            i,
                                            r = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    i,
                                                    r = {},
                                                    s = Object.keys(e);
                                                for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                return r;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                        }
                                        return r;
                                    })(t, ['onClose']);
                                return (0, i.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({}, l)),
                                    (r = r =
                                        {
                                            onClose: s,
                                            ctaOnClick: s
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var i = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, i);
                                              }
                                              return n;
                                          })(Object(r)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                          }),
                                    n)
                                );
                            };
                        });
                    },
                    children: 'Open Announcement Modal'
                })
            }),
            (0, i.jsxs)(O.E_, {
                label: 'Announcement Modal [Reset Dismissible Content]',
                direction: 'vertical',
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'info-help-text',
                        style: { marginBottom: '8px' },
                        children: "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again."
                    }),
                    (0, i.jsx)(s.zx, {
                        onClick: () => e(),
                        children: 'Reset Announcement Modal State'
                    })
                ]
            }),
            (0, i.jsxs)(O.E_, {
                label: 'Onboarding Coachmark',
                direction: 'horizontal',
                children: [
                    (0, i.jsx)(j.ED, { onClose: S.dG4 }),
                    (0, i.jsx)(j.ED, {
                        onClose: S.dG4,
                        invertCoachmark: !0
                    })
                ]
            }),
            (0, i.jsx)(O.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, i.jsx)(C.E, {})
            })
        ]
    });
}
