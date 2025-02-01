n.d(t, { Z: () => D }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(664751),
    l = n(442837),
    a = n(481060),
    o = n(355467),
    c = n(821849),
    d = n(72924),
    u = n(100527),
    m = n(906732),
    h = n(228624),
    g = n(883904),
    _ = n(678558),
    x = n(730647),
    p = n(584825),
    E = n(305342),
    C = n(333867),
    f = n(963249),
    T = n(87484),
    N = n(197115),
    I = n(911367),
    S = n(43747),
    b = n(970815),
    v = n(430824),
    j = n(78839),
    A = n(981631),
    O = n(474936),
    R = n(506920);
function P(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, p.GG)(null == t ? void 0 : t.id)[0];
    return (0, i.jsx)(i.Fragment, {
        children:
            null != t && null != n
                ? (0, i.jsx)('div', {
                      className: R.formItem,
                      children: n.subscription_listings_ids.map((e) =>
                          (0, i.jsx)(
                              E.Z,
                              {
                                  guildId: t.id,
                                  groupListingId: e,
                                  listingId: e
                              },
                              e
                          )
                      )
                  })
                : null
    });
}
let D = function () {
    let [e, t] = s.useState(O.Si.TIER_2),
        [n, p] = s.useState(null),
        [E] = (0, l.Wu)([v.Z], () => [v.Z.getGuilds()]),
        [D] = (0, l.Wu)([j.ZP], () => [j.ZP.getPremiumSubscription()]);
    (0, I.t)();
    let y = Object.values(E).map((e) => ({
            value: e,
            label: e.name
        })),
        [Z, L] = s.useState(y.length > 0 ? y[0].value : null),
        [k, B] = s.useState(''),
        [M, w] = s.useState({
            plan_id: O.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        V = 'true' !== M.gift && null != D,
        [U, G] = s.useState(y.length > 0 ? y[0].value : null),
        { analyticsLocations: F } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [H, z] = s.useState(''),
        [Y, W] = s.useState(A.lds),
        { balance: K, isFetching: X, error: q } = (0, S.A)(),
        { isSubmitting: J, responseMessage: Q, redeemVirtualCurrency: $ } = (0, S.f)(),
        [ee, et] = s.useState(A.lds),
        [en, ei] = s.useState(''),
        [es, er] = s.useState(A.lds),
        [el, ea] = s.useState(A.lds),
        eo = (0, h.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(m.Gt, {
        value: F,
        children: (0, i.jsxs)(a.hjN, {
            title: 'Payment Flow Modals',
            tag: a.RB0.H1,
            children: [
                (0, i.jsx)(a.vwX, { children: 'Gift' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
                            value: e,
                            options: [
                                {
                                    value: O.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: O.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: O.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, i.jsx)(N.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
                            value: n,
                            options: [
                                {
                                    value: O.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: O.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: O.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => p(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, f.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: F
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Boost' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
                            value: Z,
                            options: y,
                            onChange: (e) => L(e)
                        }),
                        null != Z
                            ? (0, i.jsx)(_.Z, {
                                  guild: Z,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
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
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Promotion Code',
                            value: k,
                            onChange: (e) => B(e)
                        }),
                        (0, i.jsx)(a.ua7, {
                            text: 'Need Promotion Code',
                            shouldShow: k.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.zxk, {
                                    disabled: k.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PROMOTION_REDEMPTION(k));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.q4e, {
                            value: M.plan_id,
                            options: [
                                {
                                    value: O.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: O.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: O.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) =>
                                w((t) => ({
                                    ...t,
                                    plan_id: e
                                }))
                        }),
                        (0, i.jsx)(a.q4e, {
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
                            onChange: (e) =>
                                w((t) => ({
                                    ...t,
                                    gift: e
                                }))
                        }),
                        (0, i.jsx)(a.ua7, {
                            text: 'Already subscribed',
                            shouldShow: V,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.zxk, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: V,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + r.stringify({ ...M }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(a.vwX, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsxs)(a.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Virtual Currency Balance:'
                                }),
                                X
                                    ? (0, i.jsx)('div', {
                                          className: R.loader,
                                          children: (0, i.jsx)(a.$jN, { type: a.RAz.SPINNING_CIRCLE })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: R.balanceWidgetPillContainer,
                                          children: [
                                              null !== q &&
                                                  (0, i.jsxs)(a.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: ['Error fetching Virtual Currency Balance: ', q.message]
                                                  }),
                                              (0, i.jsx)(b.A, {
                                                  balance: null != K ? K : 0,
                                                  balanceWidgetMode: b.A.BalanceWidgetMode.SELECTED
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, i.jsx)(a.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(a.oil, {
                                placeholder: 'SKU ID',
                                value: ee,
                                onChange: (e) => et(e)
                            })
                        }),
                        (0, i.jsx)(a.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(a.zxk, {
                                submitting: J,
                                onClick: () => $(ee),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(a.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: Q
                            })
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Creator Revenue' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.Text, {
                            className: R.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(a.q4e, {
                            value: U,
                            options: y,
                            onChange: (e) => G(e)
                        })
                    ]
                }),
                (0, i.jsx)(x.l, {
                    guildId: null == U ? void 0 : U.id,
                    children: (0, i.jsx)(P, { selectedGuildForGuildSub: U })
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Application Id',
                            value: H,
                            onChange: z
                        }),
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Sku Id',
                            value: Y,
                            onChange: (e) => W(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: H,
                                    skuId: Y,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: A.ZY5.IN_APP },
                                    context: A.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Application Id',
                            value: en,
                            onChange: ei
                        }),
                        (0, i.jsx)(a.oil, {
                            placeholder: 'SKU ID',
                            value: es,
                            onChange: (e) => er(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, T.Z)({
                                    applicationId: en,
                                    skuId: es,
                                    analyticsLocations: F
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'SKU ID',
                            value: el,
                            onChange: (e) => ea(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, C.Z)({
                                    skuId: el,
                                    analyticsLocations: F,
                                    variantsReturnStyle: eo
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Helpers' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
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
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(a.xJW, {
                    className: R.formItem,
                    children: (0, i.jsx)(a.zxk, {
                        onClick: () => (0, g.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};
