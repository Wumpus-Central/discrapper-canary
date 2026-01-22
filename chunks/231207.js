n.d(t, {
    A: () => M,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(488428),
    r = n(835245),
    s = n(635358),
    o = n(311907),
    c = n(435371),
    d = n(421380),
    u = n(397927),
    m = n(384904),
    p = n(73825),
    h = n(86980),
    f = n(793574),
    x = n(688810),
    b = n(541689),
    g = n(721923),
    v = n(300233),
    j = n(599941),
    y = n(250253),
    _ = n(44120),
    A = n(532794),
    C = n(216678),
    S = n(194509),
    O = n(761705),
    E = n(448362),
    N = n(71393),
    T = n(166403),
    I = n(652215),
    w = n(788868),
    k = n(734399);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
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
        n = (0, j.uk)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(
                      y.A,
                      {
                          guildId: t.id,
                          groupListingId: e,
                          listingId: e,
                      },
                      e,
                  ),
              ),
          })
        : null;
}
let M = function () {
    let [e, t] = l.useState(w.pe.TIER_2),
        [n, j] = l.useState(null),
        y = (0, o.yK)([N.A], () => N.A.getGuildsArray()),
        [M] = (0, o.yK)([T.A], () => [T.A.getPremiumSubscription()]),
        L = y.map((e) => ({
            id: e.id,
            value: e,
            label: e.name,
        })),
        [U, B] = l.useState(L.length > 0 ? L[0].value : null),
        [G, F] = l.useState(""),
        [V, H] = l.useState({
            plan_id: w.gD.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        W = "true" !== V.gift && null != M,
        [K, z] = l.useState(L.length > 0 ? L[0].value : null),
        { analyticsLocations: q } = (0, x.Ay)(f.A.PAYMENT_FLOW_TEST_PAGE),
        [Q, Y] = l.useState(""),
        [J, X] = l.useState(I.dJq),
        { balance: $, isFetching: Z, error: ee } = (0, O.W)(),
        { isSubmitting: et, responseMessage: en, redeemVirtualCurrency: ea } = (0, O.Q)(),
        [el, ei] = l.useState(I.dJq),
        [er, es] = l.useState(""),
        [eo, ec] = l.useState(I.dJq),
        [ed, eu] = l.useState(I.dJq);
    return (0, a.jsx)(x.f5, {
        value: q,
        children: (0, a.jsx)(u.IpV, {
            className: k.XG,
            children: (0, a.jsxs)(u.BJc, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, a.jsxs)(u.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(u.l6P, {
                                label: "Gift",
                                value: e,
                                options: [
                                    {
                                        id: "tier_2",
                                        value: w.pe.TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        id: "tier_1",
                                        value: w.pe.TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        id: "tier_0",
                                        value: w.pe.TIER_0,
                                        label: "Nitro Basic",
                                    },
                                    {
                                        id: "none",
                                        value: null,
                                        label: "None",
                                    },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(S.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: d.XD.PRIMARY,
                                look: d.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(u.l6P, {
                                label: "Premium Select Plan",
                                value: n,
                                options: [
                                    {
                                        id: "tier_2",
                                        value: w.pe.TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        id: "tier_1",
                                        value: w.pe.TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        id: "tier_0",
                                        value: w.pe.TIER_0,
                                        label: "Nitro Basic",
                                    },
                                    {
                                        id: "none",
                                        value: null,
                                        label: "None",
                                    },
                                ],
                                onSelectionChange: (e) => j(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () =>
                                    (0, A.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: q,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(u.l6P, {
                                label: "Boost",
                                value: U,
                                options: L,
                                onSelectionChange: (e) => B(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != U
                                ? (0, a.jsx)(g.A, {
                                      guild: U,
                                      analyticsLocation: {},
                                  })
                                : (0, a.jsx)("div", {
                                      children: "No Guild to boost",
                                  }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(u.MzZ, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, a.jsxs)(u.BJc, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(u.ksK, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: G,
                                        onChange: (e) => F(e),
                                    }),
                                    (0, a.jsx)(c.m_, {
                                        text: "Need Promotion Code",
                                        shouldShow: G.length < 1,
                                        children: (0, a.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: G.length < 1,
                                            onClick: () => {
                                                window.open(I.BVt.BILLING_PROMOTION_REDEMPTION(G));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.nVY, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, a.jsx)(u.l6P, {
                                label: "Plan",
                                value: V.plan_id,
                                options: [
                                    {
                                        id: "tier_2",
                                        value: w.gD.PREMIUM_MONTH_TIER_2,
                                        label: "Nitro",
                                    },
                                    {
                                        id: "tier_1",
                                        value: w.gD.PREMIUM_MONTH_TIER_1,
                                        label: "Nitro Classic",
                                    },
                                    {
                                        id: "tier_0",
                                        value: w.gD.PREMIUM_MONTH_TIER_0,
                                        label: "Nitro Basic",
                                    },
                                ],
                                onSelectionChange: (e) => {
                                    H((t) =>
                                        R(P({}, t), {
                                            plan_id: e,
                                        }),
                                    );
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(u.l6P, {
                                label: "Type",
                                value: V.gift,
                                options: [
                                    {
                                        id: "gift",
                                        value: "true",
                                        label: "Gift",
                                    },
                                    {
                                        id: "not_gift",
                                        value: "false",
                                        label: "Not Gift",
                                    },
                                ],
                                onSelectionChange: (e) => {
                                    H((t) =>
                                        R(P({}, t), {
                                            gift: e,
                                        }),
                                    );
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, a.jsx)(c.m_, {
                        text: "Already subscribed",
                        shouldShow: W,
                        children: (0, a.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: W,
                            onClick: () => {
                                window.open(I.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(P({}, V)));
                            },
                        }),
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.nVY, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, a.jsxs)(u.BJc, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(u.Text, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    Z
                                        ? (0, a.jsx)("div", {
                                              className: k.wG,
                                              children: (0, a.jsx)(u.y$y, {
                                                  type: u.tVU.SPINNING_CIRCLE,
                                              }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: k.dB,
                                              children: [
                                                  null !== ee &&
                                                      (0, a.jsxs)(u.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              ee.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(E.Gy, {
                                                      balance: null != $ ? $ : 0,
                                                      balanceWidgetMode: E.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(u.ksK, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: el,
                                onChange: (e) => ei(e),
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: et,
                                onClick: () => ea(el, (0, r.A)()),
                            }),
                            null != en &&
                                (0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: en,
                                }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.nVY, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(u.l6P, {
                                label: "Premium Server Subscription For",
                                value: K,
                                options: L,
                                onSelectionChange: (e) => z(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(v.H, {
                                guildId: null == K ? void 0 : K.id,
                                children: (0, a.jsx)(D, {
                                    selectedGuildForGuildSub: K,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(u.nVY, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, a.jsx)(u.ksK, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: Q,
                                        onChange: Y,
                                    }),
                                    (0, a.jsx)(u.ksK, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: J,
                                        onChange: (e) => X(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, h.j)({
                                        applicationId: Q,
                                        skuId: J,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: {
                                            page: I.liQ.IN_APP,
                                        },
                                        context: I.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsx)(u.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, a.jsx)(u.nVY, {
                            label: "Standard Payment Modal Test",
                            children: (0, a.jsxs)(u.BJc, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(u.ksK, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: er,
                                        onChange: es,
                                    }),
                                    (0, a.jsx)(u.ksK, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: eo,
                                        onChange: (e) => ec(e),
                                    }),
                                    (0, a.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, C.A)({
                                                applicationId: er,
                                                skuId: eo,
                                                analyticsLocations: q,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.BJc, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, a.jsx)(u.ksK, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: ed,
                                onChange: (e) => eu(e),
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () =>
                                    (0, _.A)({
                                        skuId: ed,
                                        analyticsLocations: q,
                                        variantsReturnStyle: s.g.VARIANTS_GROUP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsx)(u.nVY, {
                        label: "Helpers",
                        children: (0, a.jsxs)(u.BJc, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, a.jsx)(u.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, p.YG)(),
                                }),
                                (0, a.jsx)(u.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, m.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsx)(u.nVY, {
                        label: "Dismissible Content Framework",
                        children: (0, a.jsx)(u.Button, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, b.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
