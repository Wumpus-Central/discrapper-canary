n.d(t, { A: () => D });
var a = n(627968),
    i = n(64700),
    l = n(488428),
    s = n(835245),
    r = n(311907),
    o = n(435371),
    d = n(421380),
    c = n(397927),
    u = n(384904),
    m = n(73825),
    h = n(793574),
    x = n(688810),
    p = n(589078),
    g = n(541689),
    _ = n(721923),
    f = n(300233),
    v = n(599941),
    b = n(250253),
    j = n(39771),
    A = n(44120),
    C = n(532794),
    y = n(216678),
    T = n(194509),
    S = n(761705),
    E = n(448362),
    N = n(71393),
    I = n(166403),
    k = n(652215),
    R = n(788868),
    O = n(606793);
function w(e) {
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
let D = function () {
    let [e, t] = i.useState(R.pe.TIER_2),
        [n, v] = i.useState(null),
        b = (0, r.yK)([N.A], () => N.A.getGuildsArray()),
        [D] = (0, r.yK)([I.A], () => [I.A.getPremiumSubscription()]),
        M = b.map((e) => ({ id: e.id, value: e, label: e.name })),
        [P, U] = i.useState(M.length > 0 ? M[0].value : null),
        [L, B] = i.useState(""),
        [G, F] = i.useState({ plan_id: R.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        V = "true" !== G.gift && null != D,
        [W, H] = i.useState(M.length > 0 ? M[0].value : null),
        { analyticsLocations: K } = (0, x.Ay)(h.A.PAYMENT_FLOW_TEST_PAGE),
        [z, $] = i.useState(""),
        [q, Q] = i.useState(k.dJq),
        { balance: Y, isFetching: J, error: X } = (0, S.W)(),
        { isSubmitting: Z, responseMessage: ee, redeemVirtualCurrency: et } = (0, S.Q)(),
        [en, ea] = i.useState(k.dJq),
        [ei, el] = i.useState(""),
        [es, er] = i.useState(k.dJq),
        [eo, ed] = i.useState(k.dJq);
    return (0, a.jsx)(x.f5, {
        value: K,
        children: (0, a.jsx)(c.IpV, {
            className: O.XG,
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
                                    { id: "tier_2", value: R.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: R.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: R.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(T.A, {
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
                                    { id: "tier_2", value: R.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: R.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: R.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => v(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, C.A)({ subscriptionTier: n, analyticsLocations: K }),
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
                                value: P,
                                options: M,
                                onSelectionChange: (e) => U(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != P
                                ? (0, a.jsx)(_.A, { guild: P, analyticsLocation: {} })
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
                                    (0, a.jsx)(o.m_, {
                                        text: "Need Promotion Code",
                                        shouldShow: L.length < 1,
                                        children: (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: L.length < 1,
                                            onClick: () => {
                                                window.open(k.BVt.BILLING_PROMOTION_REDEMPTION(L));
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
                                value: G.plan_id,
                                options: [
                                    { id: "tier_2", value: R.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: R.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: R.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    F((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(c.l6P, {
                                label: "Type",
                                value: G.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    F((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, a.jsx)(o.m_, {
                        text: "Already subscribed",
                        shouldShow: V,
                        children: (0, a.jsx)(c.Button, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: V,
                            onClick: () => {
                                window.open(k.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + l.stringify({ ...G }));
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
                                    J
                                        ? (0, a.jsx)("div", {
                                              className: O.wG,
                                              children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: O.dB,
                                              children: [
                                                  null !== X &&
                                                      (0, a.jsxs)(c.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              X.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(E.Gy, {
                                                      balance: Y ?? 0,
                                                      balanceWidgetMode: E.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(c.ksK, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: en,
                                onChange: (e) => ea(e),
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: Z,
                                onClick: () => et(en, (0, s.A)()),
                            }),
                            null != ee && (0, a.jsx)(c.Text, { variant: "text-sm/normal", children: ee }),
                        ],
                    }),
                    (0, a.jsx)(c.cGx, {}),
                    (0, a.jsxs)(c.nVY, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(c.l6P, {
                                label: "Premium Server Subscription For",
                                value: W,
                                options: M,
                                onSelectionChange: (e) => H(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(f.H, {
                                guildId: W?.id,
                                children: (0, a.jsx)(w, { selectedGuildForGuildSub: W }),
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
                                        value: z,
                                        onChange: $,
                                    }),
                                    (0, a.jsx)(c.ksK, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: q,
                                        onChange: (e) => Q(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, j.j)({
                                        applicationId: z,
                                        skuId: q,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: k.liQ.IN_APP },
                                        context: k.BRT.APP,
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
                                        value: ei,
                                        onChange: el,
                                    }),
                                    (0, a.jsx)(c.ksK, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: es,
                                        onChange: (e) => er(e),
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, y.A)({
                                                applicationId: ei,
                                                skuId: es,
                                                analyticsLocations: K,
                                                checkoutFlow: p.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
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
                                value: eo,
                                onChange: (e) => ed(e),
                            }),
                            (0, a.jsx)(c.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, A.A)({ skuId: eo, analyticsLocations: K }),
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
