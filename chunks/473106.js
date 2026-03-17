l.d(t, { _: () => N });
var a = l(627968),
    n = l(64700),
    r = l(488428),
    i = l(835245),
    o = l(311907),
    s = l(435371),
    u = l(421380),
    c = l(397927),
    d = l(384904),
    p = l(73825),
    m = l(793574),
    h = l(688810),
    x = l(541689),
    b = l(721923),
    y = l(300233),
    g = l(599941),
    f = l(250253),
    v = l(39771),
    E = l(532794),
    S = l(216678),
    j = l(194509),
    T = l(761705),
    C = l(448362),
    A = l(71393),
    P = l(166403),
    R = l(652215),
    _ = l(788868),
    k = l(749226);
function I(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, g.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, a.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(f.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let N = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = n.useState(_.pe.TIER_2),
                    [l, g] = n.useState(null),
                    f = (0, o.yK)([A.A], () => A.A.getGuildsArray()),
                    [N] = (0, o.yK)([P.A], () => [P.A.getPremiumSubscription()]),
                    M = f.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [D, O] = n.useState(M.length > 0 ? M[0].value : null),
                    [L, B] = n.useState(""),
                    [w, V] = n.useState({ plan_id: _.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    U = "true" !== w.gift && null != N,
                    [G, H] = n.useState(M.length > 0 ? M[0].value : null),
                    { analyticsLocations: F } = (0, h.Ay)(m.A.PAYMENT_FLOW_TEST_PAGE),
                    [$, W] = n.useState(""),
                    [Y, z] = n.useState(R.dJq),
                    { balance: q, isFetching: K, error: J } = (0, T.W)(),
                    { isSubmitting: X, responseMessage: Q, redeemVirtualCurrency: Z } = (0, T.Q)(),
                    [ee, et] = n.useState(R.dJq),
                    [el, ea] = n.useState(""),
                    [en, er] = n.useState(R.dJq);
                return (0, a.jsx)(h.f5, {
                    value: F,
                    children: (0, a.jsx)(c.IpV, {
                        className: k.XG,
                        children: (0, a.jsxs)(c.BJc, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, a.jsxs)(c.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, a.jsx)(c.l6P, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: _.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: _.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: _.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(j.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: u.XD.PRIMARY,
                                            look: u.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, a.jsx)(c.l6P, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: _.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: _.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: _.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => g(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, E.A)({ subscriptionTier: l, analyticsLocations: F }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(c.l6P, {
                                            label: "Boost",
                                            value: D,
                                            options: M,
                                            onSelectionChange: O,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != D
                                            ? (0, a.jsx)(b.A, { guild: D, analyticsLocation: {} })
                                            : (0, a.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(c.MzZ, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, a.jsxs)(c.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(c.ksK, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: L,
                                                    onChange: (e) => B(e),
                                                }),
                                                (0, a.jsx)(s.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: L.length < 1,
                                                    children: (0, a.jsx)(c.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: L.length < 1,
                                                        onClick: () => {
                                                            window.open(R.BVt.BILLING_PROMOTION_REDEMPTION(L));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.nVY, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, a.jsx)(c.l6P, {
                                            label: "Plan",
                                            value: w.plan_id,
                                            options: [
                                                { id: "tier_2", value: _.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: _.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: _.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                V((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.l6P, {
                                            label: "Type",
                                            value: w.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                V((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(s.m_, {
                                    text: "Already subscribed",
                                    shouldShow: U,
                                    children: (0, a.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: U,
                                        onClick: () => {
                                            window.open(R.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify({ ...w }));
                                        },
                                    }),
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.nVY, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, a.jsxs)(c.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                K
                                                    ? (0, a.jsx)("div", {
                                                          className: k.wG,
                                                          children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, a.jsxs)("div", {
                                                          className: k.dB,
                                                          children: [
                                                              null !== J &&
                                                                  (0, a.jsxs)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          J.message,
                                                                      ],
                                                                  }),
                                                              (0, a.jsx)(C.Gy, {
                                                                  balance: q ?? 0,
                                                                  balanceWidgetMode: C.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, a.jsx)(c.ksK, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: ee,
                                            onChange: (e) => et(e),
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: X,
                                            onClick: () => Z(ee, (0, i.A)()),
                                        }),
                                        null != Q && (0, a.jsx)(c.Text, { variant: "text-sm/normal", children: Q }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.nVY, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, a.jsx)(c.l6P, {
                                            label: "Premium Server Subscription For",
                                            value: G,
                                            options: M,
                                            onSelectionChange: H,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, a.jsx)(y.H, {
                                            guildId: G?.id,
                                            children: (0, a.jsx)(I, { selectedGuildForGuildSub: G }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsxs)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsxs)(c.nVY, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, a.jsx)(c.ksK, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: $,
                                                    onChange: W,
                                                }),
                                                (0, a.jsx)(c.ksK, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: Y,
                                                    onChange: (e) => z(e),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, v.j)({
                                                    applicationId: $,
                                                    skuId: Y,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: R.liQ.IN_APP },
                                                    context: R.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsx)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, a.jsx)(c.nVY, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, a.jsxs)(c.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(c.ksK, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: el,
                                                    onChange: ea,
                                                }),
                                                (0, a.jsx)(c.ksK, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: en,
                                                    onChange: (e) => er(e),
                                                }),
                                                (0, a.jsx)(c.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, S.A)({
                                                            applicationId: el,
                                                            skuId: en,
                                                            analyticsLocations: F,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsx)(c.nVY, {
                                    label: "Helpers",
                                    children: (0, a.jsxs)(c.BJc, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, a.jsx)(c.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, p.YG)(),
                                            }),
                                            (0, a.jsx)(c.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, d.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)(c.cGx, {}),
                                (0, a.jsx)(c.nVY, {
                                    label: "Dismissible Content Framework",
                                    children: (0, a.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, x.Ab)(),
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
