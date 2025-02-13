n.d(t, { Z: () => P }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(664751),
    r = n(442837),
    a = n(481060),
    o = n(355467),
    c = n(821849),
    d = n(72924),
    u = n(100527),
    h = n(906732),
    m = n(228624),
    g = n(883904),
    x = n(678558),
    _ = n(730647),
    p = n(584825),
    E = n(305342),
    C = n(333867),
    N = n(963249),
    I = n(87484),
    f = n(197115),
    T = n(911367),
    S = n(43747),
    j = n(970815),
    v = n(430824),
    b = n(78839),
    A = n(981631),
    O = n(474936),
    R = n(487619);
function D(e) {
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
let P = function () {
    let [e, t] = s.useState(O.Si.TIER_2),
        [n, p] = s.useState(null),
        [E] = (0, r.Wu)([v.Z], () => [v.Z.getGuilds()]),
        [P] = (0, r.Wu)([b.ZP], () => [b.ZP.getPremiumSubscription()]);
    (0, T.t)();
    let y = Object.values(E).map((e) => ({
            value: e,
            label: e.name
        })),
        [Z, L] = s.useState(y.length > 0 ? y[0].value : null),
        [k, B] = s.useState(''),
        [M, V] = s.useState({
            plan_id: O.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        w = 'true' !== M.gift && null != P,
        [U, G] = s.useState(y.length > 0 ? y[0].value : null),
        { analyticsLocations: F } = (0, h.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [z, Y] = s.useState(''),
        [H, W] = s.useState(A.lds),
        { balance: K, isFetching: X, error: q } = (0, S.A)(),
        { isSubmitting: J, responseMessage: Q, redeemVirtualCurrency: $ } = (0, S.f)(),
        [ee, et] = s.useState(A.lds),
        [en, ei] = s.useState(''),
        [es, el] = s.useState(A.lds),
        [er, ea] = s.useState(A.lds),
        eo = (0, m.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(h.Gt, {
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
                        (0, i.jsx)(f.Z, {
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
                                (0, N.Z)({
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
                            ? (0, i.jsx)(x.Z, {
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
                                V((t) => ({
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
                                V((t) => ({
                                    ...t,
                                    gift: e
                                }))
                        }),
                        (0, i.jsx)(a.ua7, {
                            text: 'Already subscribed',
                            shouldShow: w,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(a.zxk, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: w,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + l.stringify({ ...M }));
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
                                              (0, i.jsx)(j.A4, {
                                                  balance: null != K ? K : 0,
                                                  balanceWidgetMode: j.b6.SELECTED
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
                (0, i.jsx)(_.l, {
                    guildId: null == U ? void 0 : U.id,
                    children: (0, i.jsx)(D, { selectedGuildForGuildSub: U })
                }),
                (0, i.jsx)(a.$i$, { className: R.formDivider }),
                (0, i.jsx)(a.vwX, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(a.xJW, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Application Id',
                            value: z,
                            onChange: Y
                        }),
                        (0, i.jsx)(a.oil, {
                            placeholder: 'Sku Id',
                            value: H,
                            onChange: (e) => W(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: z,
                                    skuId: H,
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
                            onChange: (e) => el(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, I.Z)({
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
                            value: er,
                            onChange: (e) => ea(e)
                        }),
                        (0, i.jsx)(a.zxk, {
                            onClick: () =>
                                (0, C.Z)({
                                    skuId: er,
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
