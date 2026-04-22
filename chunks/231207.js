a.d(t, { A: () => $ });
var n = a(627968),
    l = a(64700),
    i = a(488428),
    s = a(835245),
    r = a(311907),
    o = a(990078),
    d = a(862482),
    c = a(573613),
    u = a(331322),
    m = a(691885),
    h = a(404778),
    p = a(821609),
    x = a(349288),
    g = a(292666),
    v = a(270003),
    b = a(834730),
    _ = a(289873),
    f = a(73825),
    j = a(793574),
    A = a(688810),
    y = a(323082),
    C = a(589078),
    E = a(541689),
    S = a(721923),
    N = a(300233),
    k = a(599941),
    I = a(250253),
    D = a(4630),
    T = a(44120),
    w = a(532794),
    O = a(216678),
    R = a(194509),
    L = a(761705),
    M = a(448362),
    P = a(71393),
    U = a(166403),
    B = a(652215),
    G = a(788868),
    F = a(265768);
function V(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, k.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, n.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, n.jsx)(I.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let $ = function () {
    let [e, t] = l.useState(G.pe.TIER_2),
        [a, k] = l.useState(null),
        I = (0, r.yK)([P.A], () => P.A.getGuildsArray()),
        [$] = (0, r.yK)([U.A], () => [U.A.getPremiumSubscription()]),
        W = I.map((e) => ({ id: e.id, value: e, label: e.name })),
        [H, z] = l.useState(W.length > 0 ? W[0].value : null),
        [K, Y] = l.useState(""),
        [q, J] = l.useState({ plan_id: G.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        Q = "true" !== q.gift && null != $,
        [X, Z] = l.useState(W.length > 0 ? W[0].value : null),
        { analyticsLocations: ee } = (0, A.Ay)(j.A.PAYMENT_FLOW_TEST_PAGE),
        [et, ea] = l.useState(""),
        [en, el] = l.useState(B.dJq),
        { balance: ei, isFetching: es, error: er } = (0, L.W)(),
        { isSubmitting: eo, responseMessage: ed, redeemVirtualCurrency: ec } = (0, L.Q)(),
        [eu, em] = l.useState(B.dJq),
        [eh, ep] = l.useState(""),
        [ex, eg] = l.useState(B.dJq),
        [ev, eb] = l.useState(B.dJq);
    return (0, n.jsx)(A.f5, {
        value: ee,
        children: (0, n.jsx)(c.Ip, {
            className: F.XG,
            children: (0, n.jsxs)(u.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, n.jsxs)(u.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, n.jsx)(m.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: G.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: G.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: G.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(R.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: d.XD.PRIMARY,
                                look: d.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(u.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, n.jsx)(m.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: G.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: G.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: G.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => k(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, w.A)({ subscriptionTier: a, analyticsLocations: ee }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(m.l, {
                                label: "Boost",
                                value: H,
                                options: W,
                                onSelectionChange: (e) => z(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != H
                                ? (0, n.jsx)(S.A, { guild: H, analyticsLocation: {} })
                                : (0, n.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, n.jsxs)(u.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, n.jsx)(g.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: K,
                                        onChange: (e) => Y(e),
                                    }),
                                    (0, n.jsx)(o.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: K.length < 1,
                                        children: (0, n.jsx)(p.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: K.length < 1,
                                            onClick: () => {
                                                window.open(B.BVt.BILLING_PROMOTION_REDEMPTION(K));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(v.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, n.jsx)(m.l, {
                                label: "Plan",
                                value: q.plan_id,
                                options: [
                                    { id: "tier_2", value: G.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: G.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: G.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    J((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(m.l, {
                                label: "Type",
                                value: q.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    J((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, n.jsx)(o.m, {
                        text: "Already subscribed",
                        shouldShow: Q,
                        children: (0, n.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: Q,
                            onClick: () => {
                                window.open(B.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify({ ...q }));
                            },
                        }),
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(v.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, n.jsxs)(u.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, n.jsx)(b.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    es
                                        ? (0, n.jsx)("div", {
                                              className: F.wG,
                                              children: (0, n.jsx)(_.y, { type: _.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, n.jsxs)("div", {
                                              className: F.dB,
                                              children: [
                                                  null !== er &&
                                                      (0, n.jsxs)(b.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              er.message,
                                                          ],
                                                      }),
                                                  (0, n.jsx)(M.Gy, {
                                                      balance: ei ?? 0,
                                                      balanceWidgetMode: M.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, n.jsx)(g.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: eu,
                                onChange: (e) => em(e),
                            }),
                            (0, n.jsx)(p.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: eo,
                                onClick: () => ec(eu, (0, s.A)()),
                            }),
                            null != ed && (0, n.jsx)(b.E, { variant: "text-sm/normal", children: ed }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(v.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, n.jsx)(m.l, {
                                label: "Premium Server Subscription For",
                                value: X,
                                options: W,
                                onSelectionChange: (e) => Z(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, n.jsx)(N.H, {
                                guildId: X?.id,
                                children: (0, n.jsx)(V, { selectedGuildForGuildSub: X }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, n.jsxs)(v.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, n.jsx)(g.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: et,
                                        onChange: ea,
                                    }),
                                    (0, n.jsx)(g.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: en,
                                        onChange: (e) => el(e),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, D.j)({
                                        applicationId: et,
                                        skuId: en,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: B.liQ.IN_APP },
                                        context: B.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsx)(u.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, n.jsx)(v.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, n.jsxs)(u.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, n.jsx)(g.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: eh,
                                        onChange: ep,
                                    }),
                                    (0, n.jsx)(g.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: ex,
                                        onChange: (e) => eg(e),
                                    }),
                                    (0, n.jsx)(p.$, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, O.A)({
                                                applicationId: eh,
                                                skuId: ex,
                                                analyticsLocations: ee,
                                                checkoutFlow: C.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsxs)(u.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, n.jsx)(g.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: ev,
                                onChange: (e) => eb(e),
                            }),
                            (0, n.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, T.A)({ skuId: ev, analyticsLocations: ee }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsx)(v.n, {
                        label: "Helpers",
                        children: (0, n.jsxs)(u.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, n.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, f.YG)(),
                                }),
                                (0, n.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, y.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(h.c, {}),
                    (0, n.jsx)(v.n, {
                        label: "Dismissible Content Framework",
                        children: (0, n.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, E.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
