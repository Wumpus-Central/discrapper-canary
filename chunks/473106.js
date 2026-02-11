"use strict";
n.d(t, { _: () => x });
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
    h = n(793574),
    p = n(688810),
    g = n(541689),
    E = n(721923),
    A = n(300233),
    I = n(599941),
    T = n(250253),
    y = n(532794),
    S = n(216678),
    v = n(194509),
    C = n(761705),
    b = n(448362),
    N = n(71393),
    R = n(166403),
    O = n(652215),
    D = n(788868),
    L = n(749226);
function w(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, I.uk)(t?.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(T.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let x = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = i.useState(D.pe.TIER_2),
                    [n, I] = i.useState(null),
                    T = (0, o.yK)([N.A], () => N.A.getGuildsArray()),
                    [x] = (0, o.yK)([R.A], () => [R.A.getPremiumSubscription()]),
                    P = T.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [M, k] = i.useState(P.length > 0 ? P[0].value : null),
                    [U, G] = i.useState(""),
                    [F, V] = i.useState({ plan_id: D.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    B = "true" !== F.gift && null != x,
                    [j, H] = i.useState(P.length > 0 ? P[0].value : null),
                    { analyticsLocations: Y } = (0, p.Ay)(h.A.PAYMENT_FLOW_TEST_PAGE),
                    [W, K] = i.useState(""),
                    [$, z] = i.useState(O.dJq),
                    { balance: q, isFetching: X, error: Z } = (0, C.W)(),
                    { isSubmitting: Q, responseMessage: J, redeemVirtualCurrency: ee } = (0, C.Q)(),
                    [et, en] = i.useState(O.dJq),
                    [er, ei] = i.useState(""),
                    [ea, es] = i.useState(O.dJq);
                return (0, r.jsx)(p.f5, {
                    value: Y,
                    children: (0, r.jsx)(c.IpV, {
                        className: L.XG,
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
                                                { id: "tier_2", value: D.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: D.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: D.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(v.A, {
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
                                                { id: "tier_2", value: D.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: D.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: D.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => I(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, y.A)({ subscriptionTier: n, analyticsLocations: Y }),
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
                                            value: M,
                                            options: P,
                                            onSelectionChange: k,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != M
                                            ? (0, r.jsx)(E.A, { guild: M, analyticsLocation: {} })
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
                                                    value: U,
                                                    onChange: (e) => G(e),
                                                }),
                                                (0, r.jsx)(l.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: U.length < 1,
                                                    children: (0, r.jsx)(c.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: U.length < 1,
                                                        onClick: () => {
                                                            window.open(O.BVt.BILLING_PROMOTION_REDEMPTION(U));
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
                                            value: F.plan_id,
                                            options: [
                                                { id: "tier_2", value: D.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: D.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: D.gD.PREMIUM_MONTH_TIER_0,
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
                                            value: F.gift,
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
                                    shouldShow: B,
                                    children: (0, r.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: B,
                                        onClick: () => {
                                            window.open(O.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify({ ...F }));
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
                                                X
                                                    ? (0, r.jsx)("div", {
                                                          className: L.wG,
                                                          children: (0, r.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: L.dB,
                                                          children: [
                                                              null !== Z &&
                                                                  (0, r.jsxs)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          Z.message,
                                                                      ],
                                                                  }),
                                                              (0, r.jsx)(b.Gy, {
                                                                  balance: q ?? 0,
                                                                  balanceWidgetMode: b.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, r.jsx)(c.ksK, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: et,
                                            onChange: (e) => en(e),
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: Q,
                                            onClick: () => ee(et, (0, s.A)()),
                                        }),
                                        null != J && (0, r.jsx)(c.Text, { variant: "text-sm/normal", children: J }),
                                    ],
                                }),
                                (0, r.jsx)(c.cGx, {}),
                                (0, r.jsxs)(c.nVY, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, r.jsx)(c.l6P, {
                                            label: "Premium Server Subscription For",
                                            value: j,
                                            options: P,
                                            onSelectionChange: H,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, r.jsx)(A.H, {
                                            guildId: j?.id,
                                            children: (0, r.jsx)(w, { selectedGuildForGuildSub: j }),
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
                                                    value: W,
                                                    onChange: K,
                                                }),
                                                (0, r.jsx)(c.ksK, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: $,
                                                    onChange: (e) => z(e),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, f.j)({
                                                    applicationId: W,
                                                    skuId: $,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: O.liQ.IN_APP },
                                                    context: O.BRT.APP,
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
                                                    value: er,
                                                    onChange: ei,
                                                }),
                                                (0, r.jsx)(c.ksK, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: ea,
                                                    onChange: (e) => es(e),
                                                }),
                                                (0, r.jsx)(c.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, S.A)({
                                                            applicationId: er,
                                                            skuId: ea,
                                                            analyticsLocations: Y,
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
                                        onClick: () => (0, g.Ab)(),
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
