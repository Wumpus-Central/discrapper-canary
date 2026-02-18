l.d(t, { _: () => k });
var a = l(627968),
    n = l(64700),
    r = l(488428),
    i = l(835245),
    s = l(311907),
    o = l(435371),
    u = l(421380),
    c = l(397927),
    d = l(384904),
    p = l(73825),
    m = l(86980),
    h = l(793574),
    x = l(688810),
    b = l(541689),
    g = l(721923),
    y = l(300233),
    E = l(599941),
    f = l(250253),
    v = l(532794),
    S = l(216678),
    j = l(194509),
    T = l(761705),
    C = l(448362),
    P = l(71393),
    R = l(166403),
    A = l(652215),
    _ = l(788868),
    N = l(749226);
function I(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, E.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, a.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(f.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let k = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = n.useState(_.pe.TIER_2),
                    [l, E] = n.useState(null),
                    f = (0, s.yK)([P.A], () => P.A.getGuildsArray()),
                    [k] = (0, s.yK)([R.A], () => [R.A.getPremiumSubscription()]),
                    D = f.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [M, O] = n.useState(D.length > 0 ? D[0].value : null),
                    [B, V] = n.useState(""),
                    [w, L] = n.useState({ plan_id: _.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    U = "true" !== w.gift && null != k,
                    [G, $] = n.useState(D.length > 0 ? D[0].value : null),
                    { analyticsLocations: H } = (0, x.Ay)(h.A.PAYMENT_FLOW_TEST_PAGE),
                    [W, Y] = n.useState(""),
                    [F, q] = n.useState(A.dJq),
                    { balance: K, isFetching: z, error: J } = (0, T.W)(),
                    { isSubmitting: X, responseMessage: Q, redeemVirtualCurrency: Z } = (0, T.Q)(),
                    [ee, et] = n.useState(A.dJq),
                    [el, ea] = n.useState(""),
                    [en, er] = n.useState(A.dJq);
                return (0, a.jsx)(x.f5, {
                    value: H,
                    children: (0, a.jsx)(c.IpV, {
                        className: N.XG,
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
                                            onSelectionChange: (e) => E(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, v.A)({ subscriptionTier: l, analyticsLocations: H }),
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
                                            onSelectionChange: O,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != M
                                            ? (0, a.jsx)(g.A, { guild: M, analyticsLocation: {} })
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
                                                    value: B,
                                                    onChange: (e) => V(e),
                                                }),
                                                (0, a.jsx)(o.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: B.length < 1,
                                                    children: (0, a.jsx)(c.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: B.length < 1,
                                                        onClick: () => {
                                                            window.open(A.BVt.BILLING_PROMOTION_REDEMPTION(B));
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
                                                L((t) => ({ ...t, plan_id: e }));
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
                                                L((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(o.m_, {
                                    text: "Already subscribed",
                                    shouldShow: U,
                                    children: (0, a.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: U,
                                        onClick: () => {
                                            window.open(A.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify({ ...w }));
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
                                                z
                                                    ? (0, a.jsx)("div", {
                                                          className: N.wG,
                                                          children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, a.jsxs)("div", {
                                                          className: N.dB,
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
                                                                  balance: K ?? 0,
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
                                            options: D,
                                            onSelectionChange: $,
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
                                                    value: W,
                                                    onChange: Y,
                                                }),
                                                (0, a.jsx)(c.ksK, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: F,
                                                    onChange: (e) => q(e),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, m.j)({
                                                    applicationId: W,
                                                    skuId: F,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: A.liQ.IN_APP },
                                                    context: A.BRT.APP,
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
                                                            analyticsLocations: H,
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
                                        onClick: () => (0, b.Ab)(),
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
