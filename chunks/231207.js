n.d(t, { A: () => D });
var a = n(627968),
    s = n(64700),
    i = n(488428),
    l = n(835245),
    r = n(635358),
    o = n(311907),
    d = n(435371),
    c = n(421380),
    u = n(397927),
    m = n(384904),
    h = n(73825),
    x = n(86980),
    p = n(793574),
    g = n(688810),
    _ = n(541689),
    f = n(721923),
    v = n(300233),
    b = n(599941),
    j = n(250253),
    A = n(44120),
    C = n(532794),
    S = n(216678),
    T = n(194509),
    y = n(761705),
    N = n(448362),
    E = n(71393),
    I = n(166403),
    k = n(652215),
    R = n(788868),
    O = n(734399);
function w(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, b.uk)(t?.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(j.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let D = function () {
    let [e, t] = s.useState(R.pe.TIER_2),
        [n, b] = s.useState(null),
        j = (0, o.yK)([E.A], () => E.A.getGuildsArray()),
        [D] = (0, o.yK)([I.A], () => [I.A.getPremiumSubscription()]),
        M = j.map((e) => ({ id: e.id, value: e, label: e.name })),
        [P, L] = s.useState(M.length > 0 ? M[0].value : null),
        [U, B] = s.useState(""),
        [G, F] = s.useState({ plan_id: R.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        V = "true" !== G.gift && null != D,
        [W, H] = s.useState(M.length > 0 ? M[0].value : null),
        { analyticsLocations: K } = (0, g.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
        [z, $] = s.useState(""),
        [q, Q] = s.useState(k.dJq),
        { balance: Y, isFetching: J, error: X } = (0, y.W)(),
        { isSubmitting: Z, responseMessage: ee, redeemVirtualCurrency: et } = (0, y.Q)(),
        [en, ea] = s.useState(k.dJq),
        [es, ei] = s.useState(""),
        [el, er] = s.useState(k.dJq),
        [eo, ed] = s.useState(k.dJq);
    return (0, a.jsx)(g.f5, {
        value: K,
        children: (0, a.jsx)(u.IpV, {
            className: O.XG,
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
                                color: c.XD.PRIMARY,
                                look: c.pR.FILLED,
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
                                    { id: "tier_2", value: R.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: R.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: R.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => b(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, C.A)({ subscriptionTier: n, analyticsLocations: K }),
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
                                value: P,
                                options: M,
                                onSelectionChange: (e) => L(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != P
                                ? (0, a.jsx)(f.A, { guild: P, analyticsLocation: {} })
                                : (0, a.jsx)("div", { children: "No Guild to boost" }),
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
                                        value: U,
                                        onChange: (e) => B(e),
                                    }),
                                    (0, a.jsx)(d.m_, {
                                        text: "Need Promotion Code",
                                        shouldShow: U.length < 1,
                                        children: (0, a.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: U.length < 1,
                                            onClick: () => {
                                                window.open(k.BVt.BILLING_PROMOTION_REDEMPTION(U));
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
                            (0, a.jsx)(u.l6P, {
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
                    (0, a.jsx)(d.m_, {
                        text: "Already subscribed",
                        shouldShow: V,
                        children: (0, a.jsx)(u.Button, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: V,
                            onClick: () => {
                                window.open(k.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify({ ...G }));
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
                                    J
                                        ? (0, a.jsx)("div", {
                                              className: O.wG,
                                              children: (0, a.jsx)(u.y$y, { type: u.tVU.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: O.dB,
                                              children: [
                                                  null !== X &&
                                                      (0, a.jsxs)(u.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              X.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(N.Gy, {
                                                      balance: Y ?? 0,
                                                      balanceWidgetMode: N.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(u.ksK, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: en,
                                onChange: (e) => ea(e),
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: Z,
                                onClick: () => et(en, (0, l.A)()),
                            }),
                            null != ee && (0, a.jsx)(u.Text, { variant: "text-sm/normal", children: ee }),
                        ],
                    }),
                    (0, a.jsx)(u.cGx, {}),
                    (0, a.jsxs)(u.nVY, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(u.l6P, {
                                label: "Premium Server Subscription For",
                                value: W,
                                options: M,
                                onSelectionChange: (e) => H(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, a.jsx)(v.H, {
                                guildId: W?.id,
                                children: (0, a.jsx)(w, { selectedGuildForGuildSub: W }),
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
                                        value: z,
                                        onChange: $,
                                    }),
                                    (0, a.jsx)(u.ksK, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: q,
                                        onChange: (e) => Q(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, x.j)({
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
                                        value: es,
                                        onChange: ei,
                                    }),
                                    (0, a.jsx)(u.ksK, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: el,
                                        onChange: (e) => er(e),
                                    }),
                                    (0, a.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, S.A)({ applicationId: es, skuId: el, analyticsLocations: K }),
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
                                value: eo,
                                onChange: (e) => ed(e),
                            }),
                            (0, a.jsx)(u.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () =>
                                    (0, A.A)({
                                        skuId: eo,
                                        analyticsLocations: K,
                                        variantsReturnStyle: r.g.VARIANTS_GROUP,
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
                                    onClick: () => (0, h.YG)(),
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
                            onClick: () => (0, _.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
