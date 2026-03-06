n.d(t, { A: () => w });
var a = n(627968),
    i = n(64700),
    s = n(488428),
    l = n(835245),
    r = n(311907),
    o = n(435371),
    d = n(421380),
    c = n(397927),
    u = n(384904),
    m = n(73825),
    h = n(86980),
    x = n(793574),
    p = n(688810),
    g = n(541689),
    _ = n(721923),
    f = n(300233),
    v = n(599941),
    b = n(250253),
    j = n(44120),
    A = n(532794),
    C = n(216678),
    y = n(194509),
    T = n(761705),
    S = n(448362),
    E = n(71393),
    N = n(166403),
    I = n(652215),
    k = n(788868),
    R = n(606793);
function O(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, v.uk)(t?.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(b.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let w = function () {
    let [e, t] = i.useState(k.pe.TIER_2),
        [n, v] = i.useState(null),
        b = (0, r.yK)([E.A], () => E.A.getGuildsArray()),
        [w] = (0, r.yK)([N.A], () => [N.A.getPremiumSubscription()]),
        D = b.map((e) => ({ id: e.id, value: e, label: e.name })),
        [M, P] = i.useState(D.length > 0 ? D[0].value : null),
        [U, L] = i.useState(""),
        [B, G] = i.useState({ plan_id: k.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        F = "true" !== B.gift && null != w,
        [V, W] = i.useState(D.length > 0 ? D[0].value : null),
        { analyticsLocations: H } = (0, p.Ay)(x.A.PAYMENT_FLOW_TEST_PAGE),
        [K, z] = i.useState(""),
        [$, q] = i.useState(I.dJq),
        { balance: Q, isFetching: Y, error: J } = (0, T.W)(),
        { isSubmitting: X, responseMessage: Z, redeemVirtualCurrency: ee } = (0, T.Q)(),
        [et, en] = i.useState(I.dJq),
        [ea, ei] = i.useState(""),
        [es, el] = i.useState(I.dJq),
        [er, eo] = i.useState(I.dJq);
    return (0, a.jsx)(p.f5, {
        value: H,
        children: (0, a.jsx)(c.IpV, {
            className: R.XG,
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
                                    { id: "tier_2", value: k.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: k.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: k.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(y.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: d.XD.PRIMARY,
                                look: d.pR.FILLED,
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
                                value: n,
                                options: [
                                    { id: "tier_2", value: k.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: k.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: k.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => v(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, A.A)({ subscriptionTier: n, analyticsLocations: H }),
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
                                value: M,
                                options: D,
                                onSelectionChange: (e) => P(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != M
                                ? (0, a.jsx)(_.A, { guild: M, analyticsLocation: {} })
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
                                        value: U,
                                        onChange: (e) => L(e),
                                    }),
                                    (0, a.jsx)(o.m_, {
                                        text: "Need Promotion Code",
                                        shouldShow: U.length < 1,
                                        children: (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: U.length < 1,
                                            onClick: () => {
                                                window.open(I.BVt.BILLING_PROMOTION_REDEMPTION(U));
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
                                value: B.plan_id,
                                options: [
                                    { id: "tier_2", value: k.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: k.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: k.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    G((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.l6P, {
                                label: "Type",
                                value: B.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    G((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, a.jsx)(o.m_, {
                        text: "Already subscribed",
                        shouldShow: F,
                        children: (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: F,
                            onClick: () => {
                                window.open(I.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + s.stringify({ ...B }));
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
                                    Y
                                        ? (0, a.jsx)("div", {
                                              className: R.wG,
                                              children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: R.dB,
                                              children: [
                                                  null !== J &&
                                                      (0, a.jsxs)(c.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              J.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(S.Gy, {
                                                      balance: Q ?? 0,
                                                      balanceWidgetMode: S.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(c.ksK, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: et,
                                onChange: (e) => en(e),
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: X,
                                onClick: () => ee(et, (0, l.A)()),
                            }),
                            null != Z && (0, a.jsx)(c.Text, { variant: "text-sm/normal", children: Z }),
                        ],
                    }),
                    (0, a.jsx)(c.cGx, {}),
                    (0, a.jsxs)(c.nVY, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(c.l6P, {
                                label: "Premium Server Subscription For",
                                value: V,
                                options: D,
                                onSelectionChange: (e) => W(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(f.H, {
                                guildId: V?.id,
                                children: (0, a.jsx)(O, { selectedGuildForGuildSub: V }),
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
                                        value: K,
                                        onChange: z,
                                    }),
                                    (0, a.jsx)(c.ksK, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: $,
                                        onChange: (e) => q(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, h.j)({
                                        applicationId: K,
                                        skuId: $,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: I.liQ.IN_APP },
                                        context: I.BRT.APP,
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
                                        value: ea,
                                        onChange: ei,
                                    }),
                                    (0, a.jsx)(c.ksK, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: es,
                                        onChange: (e) => el(e),
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, C.A)({ applicationId: ea, skuId: es, analyticsLocations: H }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsx)(c.cGx, {}),
                    (0, a.jsxs)(c.BJc, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, a.jsx)(c.ksK, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: er,
                                onChange: (e) => eo(e),
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, j.A)({ skuId: er, analyticsLocations: H }),
                            }),
                        ],
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
                                    onClick: () => (0, m.YG)(),
                                }),
                                (0, a.jsx)(c.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, u.uZ)(),
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
                            onClick: () => (0, g.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
