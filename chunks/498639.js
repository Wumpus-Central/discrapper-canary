n.d(t, { Z: () => Z }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(664751),
    l = n(442837),
    a = n(481060),
    o = n(355467),
    c = n(821849),
    d = n(72924),
    u = n(100527),
    m = n(906732),
    p = n(228624),
    g = n(883904),
    h = n(678558),
    f = n(730647),
    b = n(584825),
    _ = n(305342),
    x = n(333867),
    E = n(963249),
    j = n(87484),
    C = n(197115),
    O = n(911367),
    S = n(43747),
    v = n(970815),
    T = n(430824),
    N = n(78839),
    I = n(981631),
    y = n(474936),
    A = n(951386);
function P(e) {
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
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        ? (0, i.jsx)('div', {
              className: A.formItem,
              children: n.subscription_listings_ids.map((e) =>
                  (0, i.jsx)(
                      _.Z,
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
    let [e, t] = r.useState(y.Si.TIER_2),
        [n, b] = r.useState(null),
        [_] = (0, l.Wu)([T.Z], () => [T.Z.getGuilds()]),
        [Z] = (0, l.Wu)([N.ZP], () => [N.ZP.getPremiumSubscription()]);
    (0, O.t)();
    let w = Object.values(_).map((e) => ({
            value: e,
            label: e.name
        })),
        [k, L] = r.useState(w.length > 0 ? w[0].value : null),
        [M, B] = r.useState(''),
        [U, V] = r.useState({
            plan_id: y.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        G = 'true' !== U.gift && null != Z,
        [F, H] = r.useState(w.length > 0 ? w[0].value : null),
        { analyticsLocations: z } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [W, Y] = r.useState(''),
        [K, q] = r.useState(I.lds),
        { balance: X, isFetching: Q, error: J } = (0, S.A)(),
        { isSubmitting: $, responseMessage: ee, redeemVirtualCurrency: et } = (0, S.f)(),
        [en, ei] = r.useState(I.lds),
        [er, es] = r.useState(''),
        [el, ea] = r.useState(I.lds),
        [eo, ec] = r.useState(I.lds),
        ed = (0, p.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(m.Gt, {
        value: z,
        children: (0, i.jsxs)(a.hjN, {
            title: 'Payment Flow Modals',
            tag: a.RB0.H1,
            children: [
                (0, i.jsx)(a.vwX, { children: 'Gift' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
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
                        (0, i.jsx)(C.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
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
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, E.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: z
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Boost' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
                            value: k,
                            options: w,
                            onChange: (e) => L(e)
                        }),
                        null != k
                            ? (0, i.jsx)(h.Z, {
                                  guild: k,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsxs)(a.vwX, {
                    children: [
                        (0, i.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                        (0, i.jsx)(a.eee, {
                            href: 'https://i.dis.gd/createPromo',
                            children: 'How to create promotion'
                        })
                    ]
                }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Promotion Code',
                            value: M,
                            onChange: (e) => B(e)
                        }),
                        (0, i.jsx)(a.ua7, {
                            text: 'Need Promotion Code',
                            shouldShow: M.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.zxk, {
                                    disabled: M.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(I.Z5c.BILLING_PROMOTION_REDEMPTION(M));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
                            value: U.plan_id,
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
                            onChange: (e) => V((t) => R(P({}, t), { plan_id: e }))
                        }),
                        (0, i.jsx)(a.q4e, {
                            value: U.gift,
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
                            onChange: (e) => V((t) => R(P({}, t), { gift: e }))
                        }),
                        (0, i.jsx)(a.ua7, {
                            text: 'Already subscribed',
                            shouldShow: G,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.zxk, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: G,
                                    onClick: () => {
                                        window.open(I.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + s.stringify(P({}, U)));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsxs)('div', {
                    className: A.formBlock,
                    children: [
                        (0, i.jsx)(a.vwX, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsxs)(a.xJW, {
                            className: A.formItem,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Virtual Currency Balance:'
                                }),
                                Q
                                    ? (0, i.jsx)('div', {
                                          className: A.loader,
                                          children: (0, i.jsx)(a.$jN, { type: a.RAz.SPINNING_CIRCLE })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: A.balanceWidgetPillContainer,
                                          children: [
                                              null !== J &&
                                                  (0, i.jsxs)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: ['Error fetching Virtual Currency Balance: ', J.message]
                                                  }),
                                              (0, i.jsx)(v.A4, {
                                                  balance: null != X ? X : 0,
                                                  balanceWidgetMode: v.b6.SELECTED
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, i.jsx)(a.xJW, {
                            className: A.formItem,
                            children: (0, i.jsx)(a.oil, {
                                placeholder: 'SKU ID',
                                value: en,
                                onChange: (e) => ei(e)
                            })
                        }),
                        (0, i.jsx)(a.xJW, {
                            className: A.formItem,
                            children: (0, i.jsx)(a.zxk, {
                                submitting: $,
                                onClick: () => et(en),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(a.xJW, {
                            className: A.formItem,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: ee
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Creator Revenue' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: A.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(a.q4e, {
                            value: F,
                            options: w,
                            onChange: (e) => H(e)
                        })
                    ]
                }),
                (0, i.jsx)(f.l, {
                    guildId: null == F ? void 0 : F.id,
                    children: (0, i.jsx)(D, { selectedGuildForGuildSub: F })
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Application Id',
                            value: W,
                            onChange: Y
                        }),
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Sku Id',
                            value: K,
                            onChange: (e) => q(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: W,
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
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Application Id',
                            value: er,
                            onChange: es
                        }),
                        (0, i.jsx)(a.oil, {
                            placeholder: 'SKU ID',
                            value: el,
                            onChange: (e) => ea(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, j.Z)({
                                    applicationId: er,
                                    skuId: el,
                                    analyticsLocations: z
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'SKU ID',
                            value: eo,
                            onChange: (e) => ec(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, x.Z)({
                                    skuId: eo,
                                    analyticsLocations: z,
                                    variantsReturnStyle: ed
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Helpers' }),
                (0, i.jsxs)(a.xJW, {
                    className: A.formItem,
                    children: [
                        (0, i.jsx)(a.zxk, {
                            onClick: () => (0, c.mE)(),
                            children: 'Reset SubscriptionPlanStore'
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () => (0, o.GM)(),
                            children: 'Reset SubscriptionStore'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: A.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(a.xJW, {
                    className: A.formItem,
                    children: (0, i.jsx)(a.zxk, {
                        onClick: () => (0, g.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};
