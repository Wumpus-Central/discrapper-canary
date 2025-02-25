n.d(t, { O: () => S }), n(47120);
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
    h = n(317257),
    f = n(120786),
    b = n(775451),
    N = n(970815),
    x = n(720463),
    _ = n(931928),
    E = n(450272),
    j = n(981631),
    C = n(388032),
    O = n(368186),
    v = n(449762);
function S() {
    return (0, r.jsxs)('div', {
        children: [(0, r.jsx)(T, {}), (0, r.jsx)(I, {})]
    });
}
function T() {
    let { openIntroToOrbsClaimedCoachmark: e } = (0, g.l)({ location: 'VirtualCurrencyComponents' }),
        [t, n] = i.useState(150),
        [p, x] = i.useState(150),
        [_, v] = i.useState(500),
        [S, T] = i.useState(h.b.DEFAULT),
        I = () => {
            switch (S) {
                case h.b.DEFAULT:
                    T(h.b.HIGHLIGHTED);
                    break;
                case h.b.HIGHLIGHTED:
                    T(h.b.SELECTED);
                    break;
                case h.b.SELECTED:
                    T(h.b.DEFAULT);
            }
        },
        { analyticsLocations: y } = (0, c.ZP)(o.Z.PAYMENT_FLOW_TEST_PAGE);
    return (0, r.jsxs)(E.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Balance Widget Components'
            }),
            (0, r.jsx)(E.E_, {
                label: 'Balance Widget Menu',
                children: (0, r.jsx)(b.V9, {
                    ctaText: C.NW.string(C.t['H57f4+']),
                    ctaOnClick: j.dG4,
                    isCoachmarkEnabled: !1
                })
            }),
            (0, r.jsxs)(E.E_, {
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
                                (0, u.s1)().location.pathname.includes(j.Z5c.COLLECTIBLES_SHOP) ||
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
            (0, r.jsxs)(E.E_, {
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
                                (0, u.s1)().location.pathname.includes(j.Z5c.COLLECTIBLES_SHOP) ||
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
            (0, r.jsxs)(E.E_, {
                label: 'Balance Widget Pill',
                children: [
                    (0, r.jsx)(N.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.DEFAULT
                    }),
                    (0, r.jsx)(N.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.HIGHLIGHTED
                    }),
                    (0, r.jsx)(N.A4, {
                        balance: 150,
                        balanceWidgetMode: h.b.SELECTED
                    }),
                    (0, r.jsx)(N.A4, {
                        balance: 0,
                        balanceWidgetMode: h.b.DEFAULT,
                        showNotificationBadge: !0
                    }),
                    (0, r.jsx)(N.A4, {
                        balance: null,
                        balanceWidgetMode: h.b.DEFAULT
                    })
                ]
            }),
            (0, r.jsxs)(E.E_, {
                label: 'Balance Widget Pill Interactive (click to change mode)',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number and click Set Balance to see the balance widget pill update:'
                    }),
                    (0, r.jsx)(a.FiK, {
                        className: O.numberInput,
                        value: t,
                        onChange: (e) => n(e)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => x(t),
                        children: 'Set Balance'
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        style: { marginBottom: '4px' },
                        children: 'Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:'
                    }),
                    (0, r.jsx)(a.FiK, {
                        className: O.numberInput,
                        value: _,
                        onChange: (e) => v(e)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: () => {
                            x(null),
                                setTimeout(() => {
                                    x(t);
                                }, _);
                        },
                        children: 'Simulate Loading State'
                    }),
                    (0, r.jsx)('div', {
                        className: O.interactivePillContainer,
                        children: (0, r.jsx)(N.A4, {
                            balance: p,
                            balanceWidgetMode: S,
                            onClick: () => I()
                        })
                    })
                ]
            }),
            (0, r.jsx)(E.E_, {
                label: 'Balance Widget Card',
                children: (0, r.jsx)(f.L, {
                    ctaText: C.NW.string(C.t['H57f4+']),
                    linkText: C.NW.string(C.t['7f4H7O']),
                    ctaOnClick: j.dG4
                })
            })
        ]
    });
}
function I() {
    let { resetOnboardingAnnouncementModal: e } = (0, p.Z)();
    return (0, r.jsxs)(E.$0, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Onboarding Components'
            }),
            (0, r.jsx)(E.E_, {
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
            (0, r.jsxs)(E.E_, {
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
            (0, r.jsxs)(E.E_, {
                label: 'Onboarding Coachmark',
                direction: 'vertical',
                children: [
                    (0, r.jsx)(_.ED, {
                        onClose: j.dG4,
                        renderTail: !1
                    }),
                    (0, r.jsxs)('div', {
                        className: v.horizontalContainer,
                        children: [
                            (0, r.jsx)(_.ED, {
                                onClose: j.dG4,
                                renderTail: !0
                            }),
                            (0, r.jsx)(_.ED, {
                                onClose: j.dG4,
                                renderTail: !0,
                                invertCoachmark: !0
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(E.E_, {
                label: 'Balance Widget Coachmark',
                children: (0, r.jsx)(x.E, {
                    earnedOrbsQuantity: 200,
                    ctaOnClick: j.dG4,
                    linkOnClick: j.dG4
                })
            })
        ]
    });
}
