n.d(t, { C: () => M }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(664751),
    o = n(772848),
    s = n(442837),
    l = n(681715),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    f = n(821849),
    p = n(72924),
    _ = n(100527),
    h = n(906732),
    m = n(883904),
    g = n(678558),
    E = n(730647),
    b = n(584825),
    y = n(305342),
    O = n(963249),
    v = n(87484),
    S = n(736519),
    I = n(43747),
    T = n(970815),
    C = n(430824),
    A = n(78839),
    N = n(981631),
    P = n(474936),
    w = n(570810);
function R(e, t, n) {
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
                R(e, t, n[t]);
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
        n = (0, b.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(
                      y.Z,
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
                let [e, t] = i.useState(P.Si.TIER_2),
                    [n, b] = i.useState(null),
                    y = (0, s.Wu)([C.Z], () => C.Z.getGuildsArray()),
                    [R] = (0, s.Wu)([A.Z], () => [A.Z.getPremiumSubscription()]),
                    x = y.map((e) => ({
                        id: e.id,
                        value: e,
                        label: e.name,
                    })),
                    [M, k] = i.useState(x.length > 0 ? x[0].value : null),
                    [U, G] = i.useState(""),
                    [Z, F] = i.useState({
                        plan_id: P.Xh.PREMIUM_MONTH_TIER_2,
                        gift: "true",
                    }),
                    B = "true" !== Z.gift && null != R,
                    [V, H] = i.useState(x.length > 0 ? x[0].value : null),
                    { analyticsLocations: Y } = (0, h.ZP)(_.Z.PAYMENT_FLOW_TEST_PAGE),
                    [W, K] = i.useState(""),
                    [z, q] = i.useState(N.lds),
                    { balance: Q, isFetching: X, error: J } = (0, I.A)(),
                    { isSubmitting: $, responseMessage: ee, redeemVirtualCurrency: et } = (0, I.f)(),
                    [en, er] = i.useState(N.lds),
                    [ei, ea] = i.useState(""),
                    [eo, es] = i.useState(N.lds);
                return (0, r.jsx)(h.Gt, {
                    value: Y,
                    children: (0, r.jsx)(u.zJl, {
                        className: w.scroller,
                        children: (0, r.jsxs)(u.Kqy, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(u.PhF, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                {
                                                    id: "tier_2",
                                                    value: P.Si.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    id: "tier_1",
                                                    value: P.Si.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: P.Si.TIER_0,
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
                                        (0, r.jsx)(S.Z, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: c.Tt.PRIMARY,
                                            look: c.iL.FILLED,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(u.PhF, {
                                            label: "Premium Select Plan",
                                            value: n,
                                            options: [
                                                {
                                                    id: "tier_2",
                                                    value: P.Si.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    id: "tier_1",
                                                    value: P.Si.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: P.Si.TIER_0,
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
                                                (0, O.Z)({
                                                    subscriptionTier: n,
                                                    analyticsLocations: Y,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(u.PhF, {
                                            label: "Boost",
                                            value: M,
                                            options: x,
                                            onSelectionChange: k,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != M
                                            ? (0, r.jsx)(g.Z, {
                                                  guild: M,
                                                  analyticsLocation: {},
                                              })
                                            : (0, r.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(u.eee, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, r.jsxs)(u.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(u.oil, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: U,
                                                    onChange: (e) => G(e),
                                                }),
                                                (0, r.jsx)(l.u, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: U.length < 1,
                                                    children: (0, r.jsx)(u.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: U.length < 1,
                                                        onClick: () => {
                                                            window.open(N.Z5c.BILLING_PROMOTION_REDEMPTION(U));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.C3N, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, r.jsx)(u.PhF, {
                                            label: "Plan",
                                            value: Z.plan_id,
                                            options: [
                                                {
                                                    id: "tier_2",
                                                    value: P.Xh.PREMIUM_MONTH_TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    id: "tier_1",
                                                    value: P.Xh.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: P.Xh.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                F((t) => L(D({}, t), { plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(u.PhF, {
                                            label: "Type",
                                            value: Z.gift,
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
                                (0, r.jsx)(l.u, {
                                    text: "Already subscribed",
                                    shouldShow: B,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: B,
                                        onClick: () => {
                                            window.open(N.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(D({}, Z)));
                                        },
                                    }),
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.C3N, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, r.jsxs)(u.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                X
                                                    ? (0, r.jsx)("div", {
                                                          className: w.loader,
                                                          children: (0, r.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: w.balanceWidgetPillContainer,
                                                          children: [
                                                              null !== J &&
                                                                  (0, r.jsxs)(u.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          J.message,
                                                                      ],
                                                                  }),
                                                              (0, r.jsx)(T.A4, {
                                                                  balance: null != Q ? Q : 0,
                                                                  balanceWidgetMode: T.b6.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.oil, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: en,
                                            onChange: (e) => er(e),
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: $,
                                            onClick: () => et(en, (0, o.Z)()),
                                        }),
                                        null != ee &&
                                            (0, r.jsx)(u.Text, {
                                                variant: "text-sm/normal",
                                                children: ee,
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.C3N, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, r.jsx)(u.PhF, {
                                            label: "Premium Server Subscription For",
                                            value: V,
                                            options: x,
                                            onSelectionChange: H,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, r.jsx)(E.l, {
                                            guildId: null == V ? void 0 : V.id,
                                            children: (0, r.jsx)(j, { selectedGuildForGuildSub: V }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsxs)(u.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsxs)(u.C3N, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, r.jsx)(u.oil, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: W,
                                                    onChange: K,
                                                }),
                                                (0, r.jsx)(u.oil, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: z,
                                                    onChange: (e) => q(e),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(u.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, p.S)({
                                                    applicationId: W,
                                                    skuId: z,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: N.ZY5.IN_APP },
                                                    context: N.IlC.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsx)(u.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, r.jsx)(u.C3N, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, r.jsxs)(u.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(u.oil, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: ei,
                                                    onChange: ea,
                                                }),
                                                (0, r.jsx)(u.oil, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: eo,
                                                    onChange: (e) => es(e),
                                                }),
                                                (0, r.jsx)(u.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, v.Z)({
                                                            applicationId: ei,
                                                            skuId: eo,
                                                            analyticsLocations: Y,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsx)(u.C3N, {
                                    label: "Helpers",
                                    children: (0, r.jsxs)(u.Kqy, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, r.jsx)(u.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, f.mE)(),
                                            }),
                                            (0, r.jsx)(u.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, d.GM)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(u.izJ, {}),
                                (0, r.jsx)(u.C3N, {
                                    label: "Dismissible Content Framework",
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, m.EG)(),
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
