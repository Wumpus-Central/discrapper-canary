"use strict";
n.d(t, { _: () => w });
var r = n(627968),
    i = n(64700),
    a = n(488428),
    s = n(835245),
    o = n(311907),
    l = n(435371),
    u = n(421380),
    c = n(397927),
    d = n(384904),
    _ = n(73825),
    f = n(86980),
    p = n(793574),
    h = n(688810),
    m = n(541689),
    g = n(721923),
    E = n(300233),
    A = n(599941),
    I = n(250253),
    T = n(532794),
    y = n(216678),
    S = n(194509),
    v = n(761705),
    C = n(448362),
    b = n(71393),
    N = n(166403),
    R = n(652215),
    O = n(788868),
    D = n(749226);
function L(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, A.uk)(t?.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(I.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let w = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = i.useState(O.pe.TIER_2),
                    [n, A] = i.useState(null),
                    I = (0, o.yK)([b.A], () => b.A.getGuildsArray()),
                    [w] = (0, o.yK)([N.A], () => [N.A.getPremiumSubscription()]),
                    x = I.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [P, M] = i.useState(x.length > 0 ? x[0].value : null),
                    [k, U] = i.useState(""),
                    [G, V] = i.useState({ plan_id: O.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    F = "true" !== G.gift && null != w,
                    [B, j] = i.useState(x.length > 0 ? x[0].value : null),
                    { analyticsLocations: H } = (0, h.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
                    [Y, W] = i.useState(""),
                    [K, z] = i.useState(R.dJq),
                    { balance: $, isFetching: q, error: Z } = (0, v.W)(),
                    { isSubmitting: Q, responseMessage: X, redeemVirtualCurrency: J } = (0, v.Q)(),
                    [ee, et] = i.useState(R.dJq),
                    [en, er] = i.useState(""),
                    [ei, ea] = i.useState(R.dJq);
                return (0, r.jsx)(h.f5, {
                    value: H,
                    children: (0, r.jsx)(c.IpV, {
                        className: D.XG,
                        children: (0, r.jsxs)(c.BJc, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, r.jsxs)(c.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(c.l6P, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: O.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: O.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: O.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(S.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: u.XD.PRIMARY,
                                            look: u.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(c.l6P, {
                                            label: "Premium Select Plan",
                                            value: n,
                                            options: [
                                                { id: "tier_2", value: O.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: O.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: O.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => A(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, T.A)({ subscriptionTier: n, analyticsLocations: H }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(c.l6P, {
                                            label: "Boost",
                                            value: P,
                                            options: x,
                                            onSelectionChange: M,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != P
                                            ? (0, r.jsx)(g.A, { guild: P, analyticsLocation: {} })
                                            : (0, r.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(c.MzZ, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, r.jsxs)(c.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(c.ksK, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: k,
                                                    onChange: (e) => U(e),
                                                }),
                                                (0, r.jsx)(l.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: k.length < 1,
                                                    children: (0, r.jsx)(c.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: k.length < 1,
                                                        onClick: () => {
                                                            window.open(R.BVt.BILLING_PROMOTION_REDEMPTION(k));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.nVY, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, r.jsx)(c.l6P, {
                                            label: "Plan",
                                            value: G.plan_id,
                                            options: [
                                                { id: "tier_2", value: O.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: O.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: O.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                V((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(c.l6P, {
                                            label: "Type",
                                            value: G.gift,
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
                                (0, r.jsx)(l.m_, {
                                    text: "Already subscribed",
                                    shouldShow: F,
                                    children: (0, r.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: F,
                                        onClick: () => {
                                            window.open(R.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify({ ...G }));
                                        },
                                    }),
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.nVY, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, r.jsxs)(c.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                q
                                                    ? (0, r.jsx)("div", {
                                                          className: D.wG,
                                                          children: (0, r.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: D.dB,
                                                          children: [
                                                              null !== Z &&
                                                                  (0, r.jsxs)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          Z.message,
                                                                      ],
                                                                  }),
                                                              (0, r.jsx)(C.Gy, {
                                                                  balance: $ ?? 0,
                                                                  balanceWidgetMode: C.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, r.jsx)(c.ksK, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: ee,
                                            onChange: (e) => et(e),
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: Q,
                                            onClick: () => J(ee, (0, s.A)()),
                                        }),
                                        null != X && (0, r.jsx)(c.Text, { variant: "text-sm/normal", children: X }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.nVY, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, r.jsx)(c.l6P, {
                                            label: "Premium Server Subscription For",
                                            value: B,
                                            options: x,
                                            onSelectionChange: j,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, r.jsx)(E.H, {
                                            guildId: B?.id,
                                            children: (0, r.jsx)(L, { selectedGuildForGuildSub: B }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsxs)(c.nVY, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, r.jsx)(c.ksK, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: Y,
                                                    onChange: W,
                                                }),
                                                (0, r.jsx)(c.ksK, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: K,
                                                    onChange: (e) => z(e),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, f.j)({
                                                    applicationId: Y,
                                                    skuId: K,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: R.liQ.IN_APP },
                                                    context: R.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsx)(c.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, r.jsx)(c.nVY, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, r.jsxs)(c.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(c.ksK, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: en,
                                                    onChange: er,
                                                }),
                                                (0, r.jsx)(c.ksK, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: ei,
                                                    onChange: (e) => ea(e),
                                                }),
                                                (0, r.jsx)(c.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, y.A)({
                                                            applicationId: en,
                                                            skuId: ei,
                                                            analyticsLocations: H,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsx)(c.nVY, {
                                    label: "Helpers",
                                    children: (0, r.jsxs)(c.BJc, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, _.YG)(),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, d.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsx)(c.nVY, {
                                    label: "Dismissible Content Framework",
                                    children: (0, r.jsx)(c.Button, {
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
