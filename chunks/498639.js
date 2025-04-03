n.d(t, { Z: () => Z }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(664751),
    a = n(442837),
    l = n(481060),
    o = n(355467),
    c = n(821849),
    d = n(72924),
    u = n(100527),
    m = n(906732),
    g = n(228624),
    p = n(883904),
    h = n(678558),
    f = n(730647),
    b = n(584825),
    N = n(305342),
    x = n(333867),
    _ = n(963249),
    E = n(87484),
    j = n(197115),
    O = n(911367),
    C = n(43747),
    S = n(970815),
    v = n(430824),
    T = n(78839),
    I = n(981631),
    y = n(474936),
    A = n(951386);
function P(e) {
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
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, b.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, r.jsx)('div', {
              className: A.formItem,
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(
                      N.Z,
                      {
                          guildId: t.id,
                          groupListingId: e,
                          listingId: e
                      },
                      e
                  )
              )
          })
        : null;
}
let Z = function () {
    let [e, t] = i.useState(y.Si.TIER_2),
        [n, b] = i.useState(null),
        [N] = (0, a.Wu)([v.Z], () => [v.Z.getGuilds()]),
        [Z] = (0, a.Wu)([T.ZP], () => [T.ZP.getPremiumSubscription()]);
    (0, O.t)();
    let w = Object.values(N).map((e) => ({
            value: e,
            label: e.name
        })),
        [k, W] = i.useState(w.length > 0 ? w[0].value : null),
        [L, B] = i.useState(''),
        [M, U] = i.useState({
            plan_id: y.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        V = 'true' !== M.gift && null != Z,
        [G, F] = i.useState(w.length > 0 ? w[0].value : null),
        { analyticsLocations: H } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [z, Y] = i.useState(''),
        [K, q] = i.useState(I.lds),
        { balance: X, isFetching: J, error: Q } = (0, C.A)(),
        { isSubmitting: $, responseMessage: ee, redeemVirtualCurrency: et } = (0, C.f)(),
        [en, er] = i.useState(I.lds),
        [ei, es] = i.useState(''),
        [ea, el] = i.useState(I.lds),
        [eo, ec] = i.useState(I.lds),
        ed = (0, g.hv)('PaymentFlowModalTestPage');
    return (0, r.jsx)(m.Gt, {
        value: H,
        children: (0, r.jsxs)(l.hjN, {
            title: 'Payment Flow Modals',
            tag: l.RB0.H1,
            children: [
                (0, r.jsx)(l.vwX, { children: 'Gift' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.q4e, {
                            value: e,
                            options: [
                                {
                                    value: y.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: y.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: y.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, r.jsx)(j.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Premium Select Plan' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.q4e, {
                            value: n,
                            options: [
                                {
                                    value: y.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: y.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: y.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => b(e)
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: () =>
                                (0, _.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: H
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Boost' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.q4e, {
                            value: k,
                            options: w,
                            onChange: (e) => W(e)
                        }),
                        null != k
                            ? (0, r.jsx)(h.Z, {
                                  guild: k,
                                  analyticsLocation: {}
                              })
                            : (0, r.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsxs)(l.vwX, {
                    children: [
                        (0, r.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                        (0, r.jsx)(l.eee, {
                            href: 'https://i.dis.gd/createPromo',
                            children: 'How to create promotion'
                        })
                    ]
                }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.oil, {
                            placeholder: 'Promotion Code',
                            value: L,
                            onChange: (e) => B(e)
                        }),
                        (0, r.jsx)(l.ua7, {
                            text: 'Need Promotion Code',
                            shouldShow: L.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, r.jsx)(l.zxk, {
                                    disabled: L.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(I.Z5c.BILLING_PROMOTION_REDEMPTION(L));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.q4e, {
                            value: M.plan_id,
                            options: [
                                {
                                    value: y.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: y.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: y.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) => U((t) => R(P({}, t), { plan_id: e }))
                        }),
                        (0, r.jsx)(l.q4e, {
                            value: M.gift,
                            options: [
                                {
                                    value: 'true',
                                    label: 'Gift'
                                },
                                {
                                    value: 'false',
                                    label: 'Not Gift'
                                }
                            ],
                            onChange: (e) => U((t) => R(P({}, t), { gift: e }))
                        }),
                        (0, r.jsx)(l.ua7, {
                            text: 'Already subscribed',
                            shouldShow: V,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, r.jsx)(l.zxk, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: V,
                                    onClick: () => {
                                        window.open(I.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + s.stringify(P({}, M)));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsxs)('div', {
                    className: A.formBlock,
                    children: [
                        (0, r.jsx)(l.vwX, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, r.jsxs)(l.xJW, {
                            className: A.formItem,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Virtual Currency Balance:'
                                }),
                                J
                                    ? (0, r.jsx)('div', {
                                          className: A.loader,
                                          children: (0, r.jsx)(l.$jN, { type: l.RAz.SPINNING_CIRCLE })
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: A.balanceWidgetPillContainer,
                                          children: [
                                              null !== Q &&
                                                  (0, r.jsxs)(l.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: ['Error fetching Virtual Currency Balance: ', Q.message]
                                                  }),
                                              (0, r.jsx)(S.A4, {
                                                  balance: null != X ? X : 0,
                                                  balanceWidgetMode: S.b6.SELECTED
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, r.jsx)(l.xJW, {
                            className: A.formItem,
                            children: (0, r.jsx)(l.oil, {
                                placeholder: 'SKU ID',
                                value: en,
                                onChange: (e) => er(e)
                            })
                        }),
                        (0, r.jsx)(l.xJW, {
                            className: A.formItem,
                            children: (0, r.jsx)(l.zxk, {
                                submitting: $,
                                onClick: () => et(en),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, r.jsx)(l.xJW, {
                            className: A.formItem,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: ee
                            })
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Creator Revenue' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.Text, {
                            className: A.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, r.jsx)(l.q4e, {
                            value: G,
                            options: w,
                            onChange: (e) => F(e)
                        })
                    ]
                }),
                (0, r.jsx)(f.l, {
                    guildId: null == G ? void 0 : G.id,
                    children: (0, r.jsx)(D, { selectedGuildForGuildSub: G })
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Activities & Application Payment Modals' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.oil, {
                            placeholder: 'Application Id',
                            value: z,
                            onChange: Y
                        }),
                        (0, r.jsx)(l.oil, {
                            placeholder: 'Sku Id',
                            value: K,
                            onChange: (e) => q(e)
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: z,
                                    skuId: K,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: I.ZY5.IN_APP },
                                    context: I.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Standard Payment Modal Test' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.oil, {
                            placeholder: 'Application Id',
                            value: ei,
                            onChange: es
                        }),
                        (0, r.jsx)(l.oil, {
                            placeholder: 'SKU ID',
                            value: ea,
                            onChange: (e) => el(e)
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: () =>
                                (0, E.Z)({
                                    applicationId: ei,
                                    skuId: ea,
                                    analyticsLocations: H
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Collectibles Payment Modal Test' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.oil, {
                            placeholder: 'SKU ID',
                            value: eo,
                            onChange: (e) => ec(e)
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: () =>
                                (0, x.Z)({
                                    skuId: eo,
                                    analyticsLocations: H,
                                    variantsReturnStyle: ed
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Helpers' }),
                (0, r.jsxs)(l.xJW, {
                    className: A.formItem,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            onClick: () => (0, c.mE)(),
                            children: 'Reset SubscriptionPlanStore'
                        }),
                        (0, r.jsx)(l.zxk, {
                            onClick: () => (0, o.GM)(),
                            children: 'Reset SubscriptionStore'
                        })
                    ]
                }),
                (0, r.jsx)(l.$i$, { className: A.formDivider }),
                (0, r.jsx)(l.vwX, { children: 'Dismissible Content Framework' }),
                (0, r.jsx)(l.xJW, {
                    className: A.formItem,
                    children: (0, r.jsx)(l.zxk, {
                        onClick: () => (0, p.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};
