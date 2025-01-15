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
    g = n(563262),
    h = n(228624),
    p = n(883904),
    x = n(678558),
    f = n(730647),
    _ = n(584825),
    E = n(305342),
    C = n(333867),
    T = n(963249),
    S = n(87484),
    b = n(197115),
    I = n(911367),
    N = n(430824),
    v = n(78839),
    A = n(981631),
    j = n(474936),
    O = n(761732);
function R(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, _.GG)(null == t ? void 0 : t.id)[0];
    return (0, i.jsx)(i.Fragment, {
        children:
            null != t && null != n
                ? (0, i.jsx)('div', {
                      className: O.formItem,
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
    let [e, t] = r.useState(j.Si.TIER_2),
        [n, _] = r.useState(null),
        [E] = (0, a.Wu)([N.Z], () => [N.Z.getGuilds()]),
        [P] = (0, a.Wu)([v.ZP], () => [v.ZP.getPremiumSubscription()]);
    (0, I.t)();
    let y = Object.values(E).map((e) => ({
            value: e,
            label: e.name
        })),
        [B, D] = r.useState(y.length > 0 ? y[0].value : null),
        [Z, L] = r.useState(''),
        [M, k] = r.useState({
            plan_id: j.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        w = 'true' !== M.gift && null != P,
        [U, F] = r.useState(y.length > 0 ? y[0].value : null),
        { analyticsLocations: V } = (0, m.ZP)(u.Z.PAYMENT_FLOW_TEST_PAGE),
        [G, H] = r.useState(''),
        [Y, W] = r.useState(A.lds),
        { isSubmitting: z, responseMessage: K, redeemVirtualCurrency: q } = (0, g.f)(),
        [Q, X] = r.useState(A.lds),
        [J, $] = r.useState(''),
        [ee, et] = r.useState(A.lds),
        [en, ei] = r.useState(A.lds),
        er = (0, h.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(m.Gt, {
        value: V,
        children: (0, i.jsxs)(l.FormSection, {
            title: 'Payment Flow Modals',
            tag: l.FormTitleTags.H1,
            children: [
                (0, i.jsx)(l.FormTitle, { children: 'Gift' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
                            value: e,
                            options: [
                                {
                                    value: j.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: j.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: j.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, i.jsx)(b.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
                            value: n,
                            options: [
                                {
                                    value: j.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: j.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: j.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => _(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, T.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: V
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Boost' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
                            value: B,
                            options: y,
                            onChange: (e) => D(e)
                        }),
                        null != B
                            ? (0, i.jsx)(x.Z, {
                                  guild: B,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
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
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Promotion Code',
                            value: Z,
                            onChange: (e) => L(e)
                        }),
                        (0, i.jsx)(l.Tooltip, {
                            text: 'Need Promotion Code',
                            shouldShow: Z.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(l.Button, {
                                    disabled: Z.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PROMOTION_REDEMPTION(Z));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.SingleSelect, {
                            value: M.plan_id,
                            options: [
                                {
                                    value: j.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: j.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: j.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) =>
                                k((t) => ({
                                    ...t,
                                    plan_id: e
                                }))
                        }),
                        (0, i.jsx)(l.SingleSelect, {
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
                                k((t) => ({
                                    ...t,
                                    gift: e
                                }))
                        }),
                        (0, i.jsx)(l.Tooltip, {
                            text: 'Already subscribed',
                            shouldShow: w,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(l.Button, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: w,
                                    onClick: () => {
                                        window.open(A.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + s.stringify({ ...M }));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsxs)('div', {
                    className: O.formBlock,
                    children: [
                        (0, i.jsx)(l.FormTitle, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsx)(l.FormItem, {
                            className: O.formItem,
                            children: (0, i.jsx)(l.TextInput, {
                                placeholder: 'SKU ID',
                                value: Q,
                                onChange: (e) => X(e)
                            })
                        }),
                        (0, i.jsx)(l.FormItem, {
                            className: O.formItem,
                            children: (0, i.jsx)(l.Button, {
                                submitting: z,
                                onClick: () => q(Q),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(l.FormItem, {
                            className: O.formItem,
                            children: (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: K
                            })
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Creator Revenue' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: O.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(l.SingleSelect, {
                            value: U,
                            options: y,
                            onChange: (e) => F(e)
                        })
                    ]
                }),
                (0, i.jsx)(f.l, {
                    guildId: null == U ? void 0 : U.id,
                    children: (0, i.jsx)(R, { selectedGuildForGuildSub: U })
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Application Id',
                            value: G,
                            onChange: H
                        }),
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Sku Id',
                            value: Y,
                            onChange: (e) => W(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, d.S)({
                                    applicationId: G,
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
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'Application Id',
                            value: J,
                            onChange: $
                        }),
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'SKU ID',
                            value: ee,
                            onChange: (e) => et(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, S.Z)({
                                    applicationId: J,
                                    skuId: ee,
                                    analyticsLocations: V
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
                    children: [
                        (0, i.jsx)(l.TextInput, {
                            placeholder: 'SKU ID',
                            value: en,
                            onChange: (e) => ei(e)
                        }),
                        (0, i.jsx)(l.Button, {
                            onClick: () =>
                                (0, C.Z)({
                                    skuId: en,
                                    analyticsLocations: V,
                                    variantsReturnStyle: er
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Helpers' }),
                (0, i.jsxs)(l.FormItem, {
                    className: O.formItem,
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
                (0, i.jsx)(l.FormDivider, { className: O.formDivider }),
                (0, i.jsx)(l.FormTitle, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(l.FormItem, {
                    className: O.formItem,
                    children: (0, i.jsx)(l.Button, {
                        onClick: () => (0, p.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};
