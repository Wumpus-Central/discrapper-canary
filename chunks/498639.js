n.d(t, { Z: () => w }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(664751),
    l = n(772848),
    a = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(821849),
    u = n(72924),
    m = n(100527),
    g = n(906732),
    p = n(228624),
    h = n(883904),
    f = n(678558),
    b = n(730647),
    _ = n(584825),
    x = n(305342),
    E = n(333867),
    C = n(963249),
    j = n(87484),
    O = n(767714),
    S = n(911367),
    v = n(43747),
    T = n(970815),
    I = n(430824),
    N = n(78839),
    y = n(981631),
    A = n(474936),
    P = n(951386);
function R(e) {
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
function D(e, t) {
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
function Z(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, _.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, i.jsx)('div', {
              className: P.formItem,
              children: n.subscription_listings_ids.map((e) =>
                  (0, i.jsx)(
                      x.Z,
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
let w = function () {
    let [e, t] = r.useState(A.Si.TIER_2),
        [n, _] = r.useState(null),
        [x] = (0, a.Wu)([I.Z], () => [I.Z.getGuilds()]),
        [w] = (0, a.Wu)([N.ZP], () => [N.ZP.getPremiumSubscription()]);
    (0, S.t)();
    let k = Object.values(x).map((e) => ({
            value: e,
            label: e.name
        })),
        [L, B] = r.useState(k.length > 0 ? k[0].value : null),
        [M, U] = r.useState(''),
        [V, G] = r.useState({
            plan_id: A.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        F = 'true' !== V.gift && null != w,
        [H, z] = r.useState(k.length > 0 ? k[0].value : null),
        { analyticsLocations: Y } = (0, g.ZP)(m.Z.PAYMENT_FLOW_TEST_PAGE),
        [W, K] = r.useState(''),
        [q, X] = r.useState(y.lds),
        { balance: Q, isFetching: J, error: $ } = (0, v.A)(),
        { isSubmitting: ee, responseMessage: et, redeemVirtualCurrency: en } = (0, v.f)(),
        [ei, er] = r.useState(y.lds),
        [es, el] = r.useState(''),
        [ea, eo] = r.useState(y.lds),
        [ec, ed] = r.useState(y.lds),
        eu = (0, p.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(g.Gt, {
        value: Y,
        children: (0, i.jsxs)(o.hjN, {
            title: 'Payment Flow Modals',
            tag: o.RB0.H1,
            children: [
                (0, i.jsx)(o.vwX, { children: 'Gift' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.q4e, {
                            value: e,
                            options: [
                                {
                                    value: A.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: A.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: A.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => t(e)
                        }),
                        (0, i.jsx)(O.Z, {
                            subscriptionTier: e,
                            isGift: !0,
                            premiumModalAnalyticsLocation: {}
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Premium Select Plan' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.q4e, {
                            value: n,
                            options: [
                                {
                                    value: A.Si.TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: A.Si.TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: A.Si.TIER_0,
                                    label: 'Nitro Basic'
                                },
                                {
                                    value: null,
                                    label: 'None'
                                }
                            ],
                            onChange: (e) => _(e)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: () =>
                                (0, C.Z)({
                                    subscriptionTier: n,
                                    analyticsLocations: Y
                                }),
                            children: 'Select Plan'
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Boost' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.q4e, {
                            value: L,
                            options: k,
                            onChange: (e) => B(e)
                        }),
                        null != L
                            ? (0, i.jsx)(f.Z, {
                                  guild: L,
                                  analyticsLocation: {}
                              })
                            : (0, i.jsx)('div', { children: 'No Guild to boost' })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsxs)(o.vwX, {
                    children: [
                        (0, i.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                        (0, i.jsx)(o.eee, {
                            href: 'https://i.dis.gd/createPromo',
                            children: 'How to create promotion'
                        })
                    ]
                }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.oil, {
                            placeholder: 'Promotion Code',
                            value: M,
                            onChange: (e) => U(e)
                        }),
                        (0, i.jsx)(o.ua7, {
                            text: 'Need Promotion Code',
                            shouldShow: M.length < 1,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(o.zxk, {
                                    disabled: M.length < 1,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    onClick: () => {
                                        window.open(y.Z5c.BILLING_PROMOTION_REDEMPTION(M));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Standalone: Gift/Subscription Purchase' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.q4e, {
                            value: V.plan_id,
                            options: [
                                {
                                    value: A.Xh.PREMIUM_MONTH_TIER_2,
                                    label: 'Nitro'
                                },
                                {
                                    value: A.Xh.PREMIUM_MONTH_TIER_1,
                                    label: 'Nitro Classic'
                                },
                                {
                                    value: A.Xh.PREMIUM_MONTH_TIER_0,
                                    label: 'Nitro Basic'
                                }
                            ],
                            onChange: (e) => G((t) => D(R({}, t), { plan_id: e }))
                        }),
                        (0, i.jsx)(o.q4e, {
                            value: V.gift,
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
                            onChange: (e) => G((t) => D(R({}, t), { gift: e }))
                        }),
                        (0, i.jsx)(o.ua7, {
                            text: 'Already subscribed',
                            shouldShow: F,
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(o.zxk, {
                                    onMouseLeave: n,
                                    onMouseEnter: t,
                                    disabled: F,
                                    onClick: () => {
                                        window.open(y.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + s.stringify(R({}, V)));
                                    },
                                    children: 'Open Link'
                                });
                            }
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsxs)('div', {
                    className: P.formBlock,
                    children: [
                        (0, i.jsx)(o.vwX, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsxs)(o.xJW, {
                            className: P.formItem,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Virtual Currency Balance:'
                                }),
                                J
                                    ? (0, i.jsx)('div', {
                                          className: P.loader,
                                          children: (0, i.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: P.balanceWidgetPillContainer,
                                          children: [
                                              null !== $ &&
                                                  (0, i.jsxs)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: ['Error fetching Virtual Currency Balance: ', $.message]
                                                  }),
                                              (0, i.jsx)(T.A4, {
                                                  balance: null != Q ? Q : 0,
                                                  balanceWidgetMode: T.b6.SELECTED
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, i.jsx)(o.xJW, {
                            className: P.formItem,
                            children: (0, i.jsx)(o.oil, {
                                placeholder: 'SKU ID',
                                value: ei,
                                onChange: (e) => er(e)
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            className: P.formItem,
                            children: (0, i.jsx)(o.zxk, {
                                submitting: ee,
                                onClick: () => en(ei, (0, l.Z)()),
                                children: 'Redeem Virtual Currency for SKU'
                            })
                        }),
                        (0, i.jsx)(o.xJW, {
                            className: P.formItem,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: et
                            })
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Creator Revenue' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.Text, {
                            className: P.guildServerDescription,
                            variant: 'text-sm/normal',
                            children: 'Premium Server Subscription For'
                        }),
                        (0, i.jsx)(o.q4e, {
                            value: H,
                            options: k,
                            onChange: (e) => z(e)
                        })
                    ]
                }),
                (0, i.jsx)(b.l, {
                    guildId: null == H ? void 0 : H.id,
                    children: (0, i.jsx)(Z, { selectedGuildForGuildSub: H })
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Activities & Application Payment Modals' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.oil, {
                            placeholder: 'Application Id',
                            value: W,
                            onChange: K
                        }),
                        (0, i.jsx)(o.oil, {
                            placeholder: 'Sku Id',
                            value: q,
                            onChange: (e) => X(e)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: () =>
                                (0, u.S)({
                                    applicationId: W,
                                    skuId: q,
                                    openPremiumPaymentModal: () => !0,
                                    analyticsLocations: [],
                                    analyticsLocationObject: { page: y.ZY5.IN_APP },
                                    context: y.IlC.APP
                                }),
                            children: 'Open App Subs Modal for Activity'
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Standard Payment Modal Test' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.oil, {
                            placeholder: 'Application Id',
                            value: es,
                            onChange: el
                        }),
                        (0, i.jsx)(o.oil, {
                            placeholder: 'SKU ID',
                            value: ea,
                            onChange: (e) => eo(e)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: () =>
                                (0, j.Z)({
                                    applicationId: es,
                                    skuId: ea,
                                    analyticsLocations: Y
                                }),
                            children: 'Open Standard Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Collectibles Payment Modal Test' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.oil, {
                            placeholder: 'SKU ID',
                            value: ec,
                            onChange: (e) => ed(e)
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: () =>
                                (0, E.Z)({
                                    skuId: ec,
                                    analyticsLocations: Y,
                                    variantsReturnStyle: eu
                                }),
                            children: 'Open Collectibles Payment Modal for SKU'
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Helpers' }),
                (0, i.jsxs)(o.xJW, {
                    className: P.formItem,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            onClick: () => (0, d.mE)(),
                            children: 'Reset SubscriptionPlanStore'
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: () => (0, c.GM)(),
                            children: 'Reset SubscriptionStore'
                        })
                    ]
                }),
                (0, i.jsx)(o.$i$, { className: P.formDivider }),
                (0, i.jsx)(o.vwX, { children: 'Dismissible Content Framework' }),
                (0, i.jsx)(o.xJW, {
                    className: P.formItem,
                    children: (0, i.jsx)(o.zxk, {
                        onClick: () => (0, h.EG)(),
                        children: 'Reset DismissibleContentFrameworkStore'
                    })
                })
            ]
        })
    });
};
