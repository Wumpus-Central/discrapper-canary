(n.d(t, { Z: () => k }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(664751),
    a = n(772848),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(355467),
    u = n(821849),
    m = n(72924),
    p = n(100527),
    g = n(906732),
    h = n(228624),
    f = n(883904),
    b = n(678558),
    x = n(730647),
    _ = n(584825),
    j = n(305342),
    E = n(333867),
    O = n(963249),
    C = n(87484),
    v = n(736519),
    S = n(365943),
    T = n(43747),
    N = n(970815),
    I = n(430824),
    y = n(78839),
    A = n(981631),
    P = n(474936),
    R = n(951386);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function Z(e, t) {
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
function w(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, _.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, i.jsx)('div', {
              className: R.formItem,
              children: n.subscription_listings_ids.map((e) =>
                  (0, i.jsx)(
                      j.Z,
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
let k = function () {
    let [e, t] = r.useState(P.Si.TIER_2),
        [n, _] = r.useState(null),
        j = (0, l.Wu)([I.Z], () => I.Z.getGuildsArray()),
        [k] = (0, l.Wu)([y.Z], () => [y.Z.getPremiumSubscription()]);
    r.useEffect(() => {
        (0, S.t)();
    }, []);
    let L = j.map((e) => ({
            value: e,
            label: e.name
        })),
        [B, M] = r.useState(L.length > 0 ? L[0].value : null),
        [U, V] = r.useState(''),
        [G, F] = r.useState({
            plan_id: P.Xh.PREMIUM_MONTH_TIER_2,
            gift: 'true'
        }),
        H = 'true' !== G.gift && null != k,
        [W, z] = r.useState(L.length > 0 ? L[0].value : null),
        { analyticsLocations: Y } = (0, g.ZP)(p.Z.PAYMENT_FLOW_TEST_PAGE),
        [K, q] = r.useState(''),
        [X, J] = r.useState(A.lds),
        { balance: Q, isFetching: $, error: ee } = (0, T.A)(),
        { isSubmitting: et, responseMessage: en, redeemVirtualCurrency: ei } = (0, T.f)(),
        [er, es] = r.useState(A.lds),
        [ea, el] = r.useState(''),
        [eo, ec] = r.useState(A.lds),
        [ed, eu] = r.useState(A.lds),
        em = (0, h.hv)('PaymentFlowModalTestPage');
    return (0, i.jsx)(g.Gt, {
        value: Y,
        children: (0, i.jsxs)(c.hjN, {
            title: 'Payment Flow Modals',
            tag: c.RB0.H1,
            children: [
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Gift' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.q4e, {
                                    value: e,
                                    options: [
                                        {
                                            value: P.Si.TIER_2,
                                            label: 'Nitro'
                                        },
                                        {
                                            value: P.Si.TIER_1,
                                            label: 'Nitro Classic'
                                        },
                                        {
                                            value: P.Si.TIER_0,
                                            label: 'Nitro Basic'
                                        },
                                        {
                                            value: null,
                                            label: 'None'
                                        }
                                    ],
                                    onChange: (e) => t(e)
                                }),
                                (0, i.jsx)(v.Z, {
                                    subscriptionTier: e,
                                    premiumModalAnalyticsLocation: {},
                                    color: o.Tt.PRIMARY,
                                    look: o.iL.FILLED
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Premium Select Plan' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.q4e, {
                                    value: n,
                                    options: [
                                        {
                                            value: P.Si.TIER_2,
                                            label: 'Nitro'
                                        },
                                        {
                                            value: P.Si.TIER_1,
                                            label: 'Nitro Classic'
                                        },
                                        {
                                            value: P.Si.TIER_0,
                                            label: 'Nitro Basic'
                                        },
                                        {
                                            value: null,
                                            label: 'None'
                                        }
                                    ],
                                    onChange: (e) => _(e)
                                }),
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Select Plan',
                                    onClick: () =>
                                        (0, O.Z)({
                                            subscriptionTier: n,
                                            analyticsLocations: Y
                                        })
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Boost' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.q4e, {
                                    value: B,
                                    options: L,
                                    onChange: (e) => M(e)
                                }),
                                null != B
                                    ? (0, i.jsx)(b.Z, {
                                          guild: B,
                                          analyticsLocation: {}
                                      })
                                    : (0, i.jsx)('div', { children: 'No Guild to boost' })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsxs)(c.vwX, {
                            children: [
                                (0, i.jsx)('div', { children: 'Standalone: Trial Promotion Redemption' }),
                                (0, i.jsx)(c.eee, {
                                    href: 'https://i.dis.gd/createPromo',
                                    children: 'How to create promotion'
                                })
                            ]
                        }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.oil, {
                                    placeholder: 'Promotion Code',
                                    value: U,
                                    onChange: (e) => V(e)
                                }),
                                (0, i.jsx)(c.ua7, {
                                    text: 'Need Promotion Code',
                                    shouldShow: U.length < 1,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(c.zxk, {
                                            variant: 'primary',
                                            text: 'Open Link',
                                            disabled: U.length < 1,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => {
                                                window.open(A.Z5c.BILLING_PROMOTION_REDEMPTION(U));
                                            }
                                        });
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Standalone: Gift/Subscription Purchase' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.q4e, {
                                    value: G.plan_id,
                                    options: [
                                        {
                                            value: P.Xh.PREMIUM_MONTH_TIER_2,
                                            label: 'Nitro'
                                        },
                                        {
                                            value: P.Xh.PREMIUM_MONTH_TIER_1,
                                            label: 'Nitro Classic'
                                        },
                                        {
                                            value: P.Xh.PREMIUM_MONTH_TIER_0,
                                            label: 'Nitro Basic'
                                        }
                                    ],
                                    onChange: (e) => F((t) => Z(D({}, t), { plan_id: e }))
                                }),
                                (0, i.jsx)(c.q4e, {
                                    value: G.gift,
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
                                    onChange: (e) => F((t) => Z(D({}, t), { gift: e }))
                                }),
                                (0, i.jsx)(c.ua7, {
                                    text: 'Already subscribed',
                                    shouldShow: H,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, i.jsx)(c.zxk, {
                                            variant: 'primary',
                                            text: 'Open Link',
                                            onMouseLeave: n,
                                            onMouseEnter: t,
                                            disabled: H,
                                            onClick: () => {
                                                window.open(A.Z5c.BILLING_PREMIUM_SUBSCRIBE + '?' + s.stringify(D({}, G)));
                                            }
                                        });
                                    }
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Redeem Virtual Currency for SKU' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: 'Virtual Currency Balance:'
                                }),
                                $
                                    ? (0, i.jsx)('div', {
                                          className: R.loader,
                                          children: (0, i.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE })
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: R.balanceWidgetPillContainer,
                                          children: [
                                              null !== ee &&
                                                  (0, i.jsxs)(c.Text, {
                                                      variant: 'text-sm/normal',
                                                      children: ['Error fetching Virtual Currency Balance: ', ee.message]
                                                  }),
                                              (0, i.jsx)(N.A4, {
                                                  balance: null != Q ? Q : 0,
                                                  balanceWidgetMode: N.b6.SELECTED
                                              })
                                          ]
                                      })
                            ]
                        }),
                        (0, i.jsx)(c.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(c.oil, {
                                placeholder: 'SKU ID',
                                value: er,
                                onChange: (e) => es(e)
                            })
                        }),
                        (0, i.jsx)(c.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(c.zxk, {
                                variant: 'primary',
                                text: 'Redeem Virtual Currency for SKU',
                                loading: et,
                                onClick: () => ei(er, (0, a.Z)())
                            })
                        }),
                        (0, i.jsx)(c.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                children: en
                            })
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Creator Revenue' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    className: R.guildServerDescription,
                                    variant: 'text-sm/normal',
                                    children: 'Premium Server Subscription For'
                                }),
                                (0, i.jsx)(c.q4e, {
                                    value: W,
                                    options: L,
                                    onChange: (e) => z(e)
                                })
                            ]
                        }),
                        (0, i.jsx)(x.l, {
                            guildId: null == W ? void 0 : W.id,
                            children: (0, i.jsx)(w, { selectedGuildForGuildSub: W })
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Activities & Application Payment Modals' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.oil, {
                                    placeholder: 'Application Id',
                                    value: K,
                                    onChange: q
                                }),
                                (0, i.jsx)(c.oil, {
                                    placeholder: 'Sku Id',
                                    value: X,
                                    onChange: (e) => J(e)
                                }),
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Open App Subs Modal for Activity',
                                    onClick: () =>
                                        (0, m.S)({
                                            applicationId: K,
                                            skuId: X,
                                            openPremiumPaymentModal: () => !0,
                                            analyticsLocations: [],
                                            analyticsLocationObject: { page: A.ZY5.IN_APP },
                                            context: A.IlC.APP
                                        })
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Standard Payment Modal Test' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.oil, {
                                    placeholder: 'Application Id',
                                    value: ea,
                                    onChange: el
                                }),
                                (0, i.jsx)(c.oil, {
                                    placeholder: 'SKU ID',
                                    value: eo,
                                    onChange: (e) => ec(e)
                                }),
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Open Standard Payment Modal for SKU',
                                    onClick: () =>
                                        (0, C.Z)({
                                            applicationId: ea,
                                            skuId: eo,
                                            analyticsLocations: Y
                                        })
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Collectibles Payment Modal Test' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.oil, {
                                    placeholder: 'SKU ID',
                                    value: ed,
                                    onChange: (e) => eu(e)
                                }),
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Open Collectibles Payment Modal for SKU',
                                    onClick: () =>
                                        (0, E.Z)({
                                            skuId: ed,
                                            analyticsLocations: Y,
                                            variantsReturnStyle: em
                                        })
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Helpers' }),
                        (0, i.jsxs)(c.xJW, {
                            className: R.formItem,
                            children: [
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Reset SubscriptionPlanStore',
                                    onClick: () => (0, u.mE)()
                                }),
                                (0, i.jsx)(c.zxk, {
                                    variant: 'primary',
                                    text: 'Reset SubscriptionStore',
                                    onClick: () => (0, d.GM)()
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(c.$i$, { className: R.formDivider }),
                (0, i.jsxs)('div', {
                    className: R.formBlock,
                    children: [
                        (0, i.jsx)(c.vwX, { children: 'Dismissible Content Framework' }),
                        (0, i.jsx)(c.xJW, {
                            className: R.formItem,
                            children: (0, i.jsx)(c.zxk, {
                                variant: 'primary',
                                text: 'Reset DismissibleContentFrameworkStore',
                                onClick: () => (0, f.EG)()
                            })
                        })
                    ]
                })
            ]
        })
    });
};
