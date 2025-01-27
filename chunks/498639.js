n(47120);
var i = n(200651),
    r = n(192379),
    s = n(664751),
    a = n(442837),
    l = n(481060),
    o = n(355467),
    c = n(821849),
    d = n(72924),
    u = n(100527),
    m = n(906732),
    g = n(228624),
    h = n(883904),
    p = n(678558),
    x = n(730647),
    f = n(584825),
    E = n(305342),
    _ = n(333867),
    C = n(963249),
    T = n(87484),
    S = n(197115),
    b = n(911367),
    I = n(43747),
    N = n(970815),
    v = n(430824),
    A = n(78839),
    j = n(981631),
    O = n(474936),
    R = n(506920);
function P(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, f.GG)(null == t ? void 0 : t.id)[0];
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
t.Z = function () {
    let [e, t] = r.useState(O.Si.TIER_2),
        [n, f] = r.useState(null),
        [E] = (0, a.Wu)([v.Z], () => [v.Z.getGuilds()]),
        [D] = (0, a.Wu)([A.ZP], () => [A.ZP.getPremiumSubscription()]);
    (0, b.t)();
    let y = Object.values(E).map((e) => ({
            value: e,
            label: e.name
        })),
        [B, Z] = r.useState(y.length > 0 ? y[0].value : null),
        [L, M] = r.useState(''),
        [k, w] = r.useState({
            plan_id: O.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        F = 'true' !== k.gift && null != D,
        [U, V] = r.useState(y.length > 0 ? y[0].value : null),
        { analyticsLocations: G } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [H, Y] = r.useState(''),
        [W, z] = r.useState(j.lds),
        { balance: K, isFetching: q, error: X } = (0, I.A)(),
        { isSubmitting: Q, responseMessage: J, redeemVirtualCurrency: $ } = (0, I.f)(),
        [ee, et] = r.useState(j.lds),
        [en, ei] = r.useState(''),
        [er, es] = r.useState(j.lds),
        [ea, el] = r.useState(j.lds),
        eo = (0, g.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(m.Gt, {
        value: G,
        children: (0, i.jsxs)(l.FormSection, {
            title: 'Payment Flow Modals',
            tag: l.FormTitleTags.H1,
            children: [
                (0, i.jsx)(l.FormTitle, { children: 'Gift' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
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
                        (0, i.jsx)(S.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
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
                            onChange: (e) => f(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, C.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: G
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Boost' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
                            value: B,
                            options: y,
                            onChange: (e) => Z(e)
                        }),
                        null != B
                            ? (0, i.jsx)(p.Z, {
                                  guild: B,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsxs)(l.FormTitle, {
                    children: [
                        (0, i.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                        (0, i.jsx)(l.Anchor, {
                            href: 'https://i.dis.gd/createPromo',
                            children: 'How to create promotion'
                        })
                    ]
                }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Promotion Code',
                            value: L,
                            onChange: (e) => M(e)
                        }),
                        (0, i.jsx)(l.Tooltip, {
                            text: 'Need Promotion Code',
                            shouldShow: L.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(l.Button, {
                                    disabled: L.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(j.Z5c.BILLING_PROMOTION_REDEMPTION(L));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
                            value: k.plan_id,
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
                        (0, i.jsx)(l.SingleSelect, {
                            value: k.gift,
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
                        (0, i.jsx)(l.Tooltip, {
                            text: 'Already subscribed',
                            shouldShow: F,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(l.Button, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: F,
                                    onClick: () => {
                                        window.open(j.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + s.stringify({ ...k }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(l.FormTitle, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsxs)(l.FormItem, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Virtual Currency Balance:'
                                }),
                                q
                                    ? (0, i.jsx)('div', {
                                          className: R.loader,
                                          children: (0, i.jsx)(l.Spinner, { type: l.SpinnerTypes.SPINNING_CIRCLE })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: R.balanceWidgetPillContainer,
                                          children: [
                                              null !== X &&
                                                  (0, i.jsxs)(l.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: ['Error fetching Virtual Currency Balance: ', X.message]
                                                  }),
                                              (0, i.jsx)(N.A, {
                                                  balance: null != K ? K : 0,
                                                  balanceWidgetMode: N.A.BalanceWidgetMode.SELECTED
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, i.jsx)(l.FormItem, {
                            className: R.formItem,
                            children: (0, i.jsx)(l.TextInput, {
                                placeholder: 'SKU ID',
                                value: ee,
                                onChange: (e) => et(e)
                            })
                        }),
                        (0, i.jsx)(l.FormItem, {
                            className: R.formItem,
                            children: (0, i.jsx)(l.Button, {
                                submitting: Q,
                                onClick: () => $(ee),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(l.FormItem, {
                            className: R.formItem,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: J
                            })
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Creator Revenue' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: R.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(l.SingleSelect, {
                            value: U,
                            options: y,
                            onChange: (e) => V(e)
                        })
                    ]
                }),
                (0, i.jsx)(x.l, {
                    guildId: null == U ? void 0 : U.id,
                    children: (0, i.jsx)(P, { selectedGuildForGuildSub: U })
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Application Id',
                            value: H,
                            onChange: Y
                        }),
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Sku Id',
                            value: W,
                            onChange: (e) => z(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: H,
                                    skuId: W,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: j.ZY5.IN_APP },
                                    context: j.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Application Id',
                            value: en,
                            onChange: ei
                        }),
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'SKU ID',
                            value: er,
                            onChange: (e) => es(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, T.Z)({
                                    applicationId: en,
                                    skuId: er,
                                    analyticsLocations: G
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'SKU ID',
                            value: ea,
                            onChange: (e) => el(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, _.Z)({
                                    skuId: ea,
                                    analyticsLocations: G,
                                    variantsReturnStyle: eo
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Helpers' }),
                (0, i.jsxs)(l.FormItem, {
                    className: R.formItem,
                    children: [
                        (0, i.jsx)(l.Button, {
                            onClick: () => (0, c.mE)(),
                            children: 'Reset SubscriptionPlanStore'
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () => (0, o.GM)(),
                            children: 'Reset SubscriptionStore'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: R.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(l.FormItem, {
                    className: R.formItem,
                    children: (0, i.jsx)(l.Button, {
                        onClick: () => (0, h.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};
