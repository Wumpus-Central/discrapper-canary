l.d(t, { _: () => M });
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
    x = l(589078),
    b = l(541689),
    y = l(721923),
    g = l(300233),
    f = l(599941),
    v = l(250253),
    E = l(39771),
    S = l(532794),
    j = l(216678),
    T = l(194509),
    C = l(761705),
    A = l(448362),
    P = l(71393),
    R = l(166403),
    _ = l(652215),
    k = l(788868),
    I = l(825092);
function N(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, f.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, a.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(v.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
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
                let [e, t] = n.useState(k.pe.TIER_2),
                    [l, f] = n.useState(null),
                    v = (0, o.yK)([P.A], () => P.A.getGuildsArray()),
                    [M] = (0, o.yK)([R.A], () => [R.A.getPremiumSubscription()]),
                    D = v.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [O, L] = n.useState(D.length > 0 ? D[0].value : null),
                    [B, w] = n.useState(""),
                    [V, U] = n.useState({ plan_id: k.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    G = "true" !== V.gift && null != M,
                    [H, F] = n.useState(D.length > 0 ? D[0].value : null),
                    { analyticsLocations: $ } = (0, h.Ay)(m.A.PAYMENT_FLOW_TEST_PAGE),
                    [W, Y] = n.useState(""),
                    [z, q] = n.useState(_.dJq),
                    { balance: K, isFetching: J, error: X } = (0, C.W)(),
                    { isSubmitting: Q, responseMessage: Z, redeemVirtualCurrency: ee } = (0, C.Q)(),
                    [et, el] = n.useState(_.dJq),
                    [ea, en] = n.useState(""),
                    [er, ei] = n.useState(_.dJq);
                return (0, a.jsx)(h.f5, {
                    value: $,
                    children: (0, a.jsx)(c.IpV, {
                        className: I.XG,
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
                                        (0, a.jsx)(T.A, {
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
                                                { id: "tier_2", value: k.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: k.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: k.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => f(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, S.A)({ subscriptionTier: l, analyticsLocations: $ }),
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
                                            value: O,
                                            options: D,
                                            onSelectionChange: L,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != O
                                            ? (0, a.jsx)(y.A, { guild: O, analyticsLocation: {} })
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
                                                    onChange: (e) => w(e),
                                                }),
                                                (0, a.jsx)(s.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: B.length < 1,
                                                    children: (0, a.jsx)(c.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: B.length < 1,
                                                        onClick: () => {
                                                            window.open(_.BVt.BILLING_PROMOTION_REDEMPTION(B));
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
                                            value: V.plan_id,
                                            options: [
                                                { id: "tier_2", value: k.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: k.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: k.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                U((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.l6P, {
                                            label: "Type",
                                            value: V.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                U((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(s.m_, {
                                    text: "Already subscribed",
                                    shouldShow: G,
                                    children: (0, a.jsx)(c.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: G,
                                        onClick: () => {
                                            window.open(_.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify({ ...V }));
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
                                                          className: I.wG,
                                                          children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, a.jsxs)("div", {
                                                          className: I.dB,
                                                          children: [
                                                              null !== X &&
                                                                  (0, a.jsxs)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          X.message,
                                                                      ],
                                                                  }),
                                                              (0, a.jsx)(A.Gy, {
                                                                  balance: K ?? 0,
                                                                  balanceWidgetMode: A.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, a.jsx)(c.ksK, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: et,
                                            onChange: (e) => el(e),
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: Q,
                                            onClick: () => ee(et, (0, i.A)()),
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
                                            value: H,
                                            options: D,
                                            onSelectionChange: F,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, a.jsx)(g.H, {
                                            guildId: H?.id,
                                            children: (0, a.jsx)(N, { selectedGuildForGuildSub: H }),
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
                                                    value: z,
                                                    onChange: (e) => q(e),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, E.j)({
                                                    applicationId: W,
                                                    skuId: z,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: _.liQ.IN_APP },
                                                    context: _.BRT.APP,
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
                                                    onChange: en,
                                                }),
                                                (0, a.jsx)(c.ksK, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: er,
                                                    onChange: (e) => ei(e),
                                                }),
                                                (0, a.jsx)(c.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, j.A)({
                                                            applicationId: ea,
                                                            skuId: er,
                                                            analyticsLocations: $,
                                                            checkoutFlow: x.CL.PREMIUM_APPS_OTP_CHECKOUT,
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
