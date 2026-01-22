n.d(t, { _: () => M }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(488428),
    s = n(835245),
    o = n(311907),
    l = n(435371),
    c = n(421380),
    u = n(397927),
    d = n(384904),
    f = n(73825),
    p = n(86980),
    _ = n(793574),
    h = n(688810),
    m = n(541689),
    g = n(721923),
    E = n(300233),
    b = n(599941),
    y = n(250253),
    O = n(532794),
    A = n(216678),
    v = n(194509),
    S = n(761705),
    I = n(448362),
    T = n(71393),
    C = n(166403),
    N = n(652215),
    R = n(788868),
    w = n(749226);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, b.uk)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(
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
let M = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = i.useState(R.pe.TIER_2),
                    [n, b] = i.useState(null),
                    y = (0, o.yK)([T.A], () => T.A.getGuildsArray()),
                    [P] = (0, o.yK)([C.A], () => [C.A.getPremiumSubscription()]),
                    x = y.map((e) => ({
                        id: e.id,
                        value: e,
                        label: e.name,
                    })),
                    [M, k] = i.useState(x.length > 0 ? x[0].value : null),
                    [U, G] = i.useState(""),
                    [V, F] = i.useState({
                        plan_id: R.gD.PREMIUM_MONTH_TIER_2,
                        gift: "true",
                    }),
                    B = "true" !== V.gift && null != P,
                    [H, Y] = i.useState(x.length > 0 ? x[0].value : null),
                    { analyticsLocations: W } = (0, h.Ay)(_.A.PAYMENT_FLOW_TEST_PAGE),
                    [K, z] = i.useState(""),
                    [q, X] = i.useState(N.dJq),
                    { balance: Z, isFetching: Q, error: $ } = (0, S.W)(),
                    { isSubmitting: J, responseMessage: ee, redeemVirtualCurrency: et } = (0, S.Q)(),
                    [en, er] = i.useState(N.dJq),
                    [ei, ea] = i.useState(""),
                    [es, eo] = i.useState(N.dJq);
                return (0, r.jsx)(h.f5, {
                    value: W,
                    children: (0, r.jsx)(u.IpV, {
                        className: w.XG,
                        children: (0, r.jsxs)(u.BJc, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, r.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(u.l6P, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                {
                                                    id: "tier_2",
                                                    value: R.pe.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    id: "tier_1",
                                                    value: R.pe.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: R.pe.TIER_0,
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
                                        (0, r.jsx)(v.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: c.XD.PRIMARY,
                                            look: c.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(u.l6P, {
                                            label: "Premium Select Plan",
                                            value: n,
                                            options: [
                                                {
                                                    id: "tier_2",
                                                    value: R.pe.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    id: "tier_1",
                                                    value: R.pe.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: R.pe.TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                                {
                                                    id: "none",
                                                    value: null,
                                                    label: "None",
                                                },
                                            ],
                                            onSelectionChange: (e) => b(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () =>
                                                (0, O.A)({
                                                    subscriptionTier: n,
                                                    analyticsLocations: W,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(u.l6P, {
                                            label: "Boost",
                                            value: M,
                                            options: x,
                                            onSelectionChange: k,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != M
                                            ? (0, r.jsx)(g.A, {
                                                  guild: M,
                                                  analyticsLocation: {},
                                              })
                                            : (0, r.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(u.MzZ, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, r.jsxs)(u.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(u.ksK, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: U,
                                                    onChange: (e) => G(e),
                                                }),
                                                (0, r.jsx)(l.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: U.length < 1,
                                                    children: (0, r.jsx)(u.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: U.length < 1,
                                                        onClick: () => {
                                                            window.open(N.BVt.BILLING_PROMOTION_REDEMPTION(U));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.nVY, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, r.jsx)(u.l6P, {
                                            label: "Plan",
                                            value: V.plan_id,
                                            options: [
                                                {
                                                    id: "tier_2",
                                                    value: R.gD.PREMIUM_MONTH_TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    id: "tier_1",
                                                    value: R.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: R.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                F((t) => L(D({}, t), { plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(u.l6P, {
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
                                                F((t) => L(D({}, t), { gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l.m_, {
                                    text: "Already subscribed",
                                    shouldShow: B,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: B,
                                        onClick: () => {
                                            window.open(N.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(D({}, V)));
                                        },
                                    }),
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.nVY, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, r.jsxs)(u.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                Q
                                                    ? (0, r.jsx)("div", {
                                                          className: w.wG,
                                                          children: (0, r.jsx)(u.y$y, { type: u.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: w.dB,
                                                          children: [
                                                              null !== $ &&
                                                                  (0, r.jsxs)(u.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          $.message,
                                                                      ],
                                                                  }),
                                                              (0, r.jsx)(I.Gy, {
                                                                  balance: null != Z ? Z : 0,
                                                                  balanceWidgetMode: I.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.ksK, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: en,
                                            onChange: (e) => er(e),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: J,
                                            onClick: () => et(en, (0, s.A)()),
                                        }),
                                        null != ee &&
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                children: ee,
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.nVY, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, r.jsx)(u.l6P, {
                                            label: "Premium Server Subscription For",
                                            value: H,
                                            options: x,
                                            onSelectionChange: Y,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, r.jsx)(E.H, {
                                            guildId: null == H ? void 0 : H.id,
                                            children: (0, r.jsx)(j, { selectedGuildForGuildSub: H }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsxs)(u.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsxs)(u.nVY, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, r.jsx)(u.ksK, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: K,
                                                    onChange: z,
                                                }),
                                                (0, r.jsx)(u.ksK, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: q,
                                                    onChange: (e) => X(e),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, p.j)({
                                                    applicationId: K,
                                                    skuId: q,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: N.liQ.IN_APP },
                                                    context: N.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsx)(u.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, r.jsx)(u.nVY, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, r.jsxs)(u.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(u.ksK, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: ei,
                                                    onChange: ea,
                                                }),
                                                (0, r.jsx)(u.ksK, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: es,
                                                    onChange: (e) => eo(e),
                                                }),
                                                (0, r.jsx)(u.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, A.A)({
                                                            applicationId: ei,
                                                            skuId: es,
                                                            analyticsLocations: W,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsx)(u.nVY, {
                                    label: "Helpers",
                                    children: (0, r.jsxs)(u.BJc, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, r.jsx)(u.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, f.YG)(),
                                            }),
                                            (0, r.jsx)(u.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, d.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(u.cGx, {}),
                                (0, r.jsx)(u.nVY, {
                                    label: "Dismissible Content Framework",
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, m.Ab)(),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            },
            controls: {},
        },
    ],
};
