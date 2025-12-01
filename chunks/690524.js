n.d(t, { C: () => j }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(664751),
    o = n(772848),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(355467),
    d = n(821849),
    f = n(72924),
    p = n(100527),
    _ = n(906732),
    m = n(883904),
    h = n(678558),
    g = n(730647),
    E = n(584825),
    b = n(305342),
    y = n(963249),
    O = n(87484),
    v = n(736519),
    S = n(43747),
    I = n(970815),
    T = n(430824),
    A = n(78839),
    C = n(981631),
    N = n(474936),
    P = n(616926);
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
function w(e) {
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
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, E.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(
                      b.Z,
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
let j = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = i.useState(N.Si.TIER_2),
                    [n, E] = i.useState(null),
                    b = (0, s.Wu)([T.Z], () => T.Z.getGuildsArray()),
                    [R] = (0, s.Wu)([A.Z], () => [A.Z.getPremiumSubscription()]),
                    D = b.map((e) => ({
                        value: e,
                        label: e.name,
                    })),
                    [j, M] = i.useState(D.length > 0 ? D[0].value : null),
                    [k, U] = i.useState(""),
                    [G, Z] = i.useState({
                        plan_id: N.Xh.PREMIUM_MONTH_TIER_2,
                        gift: "true",
                    }),
                    B = "true" !== G.gift && null != R,
                    [F, V] = i.useState(D.length > 0 ? D[0].value : null),
                    { analyticsLocations: H } = (0, _.ZP)(p.Z.PAYMENT_FLOW_TEST_PAGE),
                    [Y, W] = i.useState(""),
                    [K, z] = i.useState(C.lds),
                    { balance: q, isFetching: Q, error: X } = (0, S.A)(),
                    { isSubmitting: J, responseMessage: $, redeemVirtualCurrency: ee } = (0, S.f)(),
                    [et, en] = i.useState(C.lds),
                    [er, ei] = i.useState(""),
                    [ea, eo] = i.useState(C.lds);
                return (0, r.jsx)(_.Gt, {
                    value: H,
                    children: (0, r.jsx)(c.zJl, {
                        className: P.scroller,
                        children: (0, r.jsxs)(c.Kqy, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, r.jsxs)(c.Kqy, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(c.q4e, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                {
                                                    value: N.Si.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    value: N.Si.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    value: N.Si.TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                                {
                                                    value: null,
                                                    label: "None",
                                                },
                                            ],
                                            onChange: (e) => t(e),
                                        }),
                                        (0, r.jsx)(v.Z, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: l.Tt.PRIMARY,
                                            look: l.iL.FILLED,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.Kqy, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(c.q4e, {
                                            label: "Premium Select Plan",
                                            value: n,
                                            options: [
                                                {
                                                    value: N.Si.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    value: N.Si.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    value: N.Si.TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                                {
                                                    value: null,
                                                    label: "None",
                                                },
                                            ],
                                            onChange: (e) => E(e),
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () =>
                                                (0, y.Z)({
                                                    subscriptionTier: n,
                                                    analyticsLocations: H,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(c.q4e, {
                                            label: "Boost",
                                            value: j,
                                            options: D,
                                            onChange: (e) => M(e),
                                        }),
                                        null != j
                                            ? (0, r.jsx)(h.Z, {
                                                  guild: j,
                                                  analyticsLocation: {},
                                              })
                                            : (0, r.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(c.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, r.jsxs)(c.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(c.oil, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: k,
                                                    onChange: (e) => U(e),
                                                }),
                                                (0, r.jsx)(c.aML, {
                                                    "data-migration-pending": !0,
                                                    text: "Need Promotion Code",
                                                    shouldShow: k.length < 1,
                                                    children: (e) =>
                                                        (0, r.jsx)(
                                                            c.Button,
                                                            x(
                                                                w(
                                                                    {
                                                                        variant: "primary",
                                                                        text: "Open Link",
                                                                        disabled: k.length < 1,
                                                                    },
                                                                    e,
                                                                ),
                                                                {
                                                                    onClick: () => {
                                                                        window.open(
                                                                            C.Z5c.BILLING_PROMOTION_REDEMPTION(k),
                                                                        );
                                                                    },
                                                                },
                                                            ),
                                                        ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.C3N, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, r.jsx)(c.q4e, {
                                            label: "Plan",
                                            value: G.plan_id,
                                            options: [
                                                {
                                                    value: N.Xh.PREMIUM_MONTH_TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    value: N.Xh.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    value: N.Xh.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onChange: (e) => Z((t) => x(w({}, t), { plan_id: e })),
                                        }),
                                        (0, r.jsx)(c.q4e, {
                                            label: "Type",
                                            value: G.gift,
                                            options: [
                                                {
                                                    value: "true",
                                                    label: "Gift",
                                                },
                                                {
                                                    value: "false",
                                                    label: "Not Gift",
                                                },
                                            ],
                                            onChange: (e) => Z((t) => x(w({}, t), { gift: e })),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.aML, {
                                    "data-migration-pending": !0,
                                    text: "Already subscribed",
                                    shouldShow: B,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.Button,
                                            x(
                                                w(
                                                    {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                    },
                                                    e,
                                                ),
                                                {
                                                    disabled: B,
                                                    onClick: () => {
                                                        window.open(
                                                            C.Z5c.BILLING_PREMIUM_SUBSCRIBE +
                                                                "?" +
                                                                a.stringify(w({}, G)),
                                                        );
                                                    },
                                                },
                                            ),
                                        ),
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.C3N, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, r.jsxs)(c.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(c.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                Q
                                                    ? (0, r.jsx)("div", {
                                                          className: P.loader,
                                                          children: (0, r.jsx)(c.$jN, { type: c.RAz.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: P.balanceWidgetPillContainer,
                                                          children: [
                                                              null !== X &&
                                                                  (0, r.jsxs)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          X.message,
                                                                      ],
                                                                  }),
                                                              (0, r.jsx)(I.A4, {
                                                                  balance: null != q ? q : 0,
                                                                  balanceWidgetMode: I.b6.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, r.jsx)(c.oil, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: et,
                                            onChange: (e) => en(e),
                                        }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: J,
                                            onClick: () => ee(et, (0, o.Z)()),
                                        }),
                                        null != $ &&
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                children: $,
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.C3N, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, r.jsx)(c.q4e, {
                                            label: "Premium Server Subscription For",
                                            value: F,
                                            options: D,
                                            onChange: (e) => V(e),
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, r.jsx)(g.l, {
                                            guildId: null == F ? void 0 : F.id,
                                            children: (0, r.jsx)(L, { selectedGuildForGuildSub: F }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsxs)(c.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsxs)(c.C3N, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, r.jsx)(c.oil, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: Y,
                                                    onChange: W,
                                                }),
                                                (0, r.jsx)(c.oil, {
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
                                                (0, f.S)({
                                                    applicationId: Y,
                                                    skuId: K,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: C.ZY5.IN_APP },
                                                    context: C.IlC.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsx)(c.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, r.jsx)(c.C3N, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, r.jsxs)(c.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(c.oil, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: er,
                                                    onChange: ei,
                                                }),
                                                (0, r.jsx)(c.oil, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: ea,
                                                    onChange: (e) => eo(e),
                                                }),
                                                (0, r.jsx)(c.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, O.Z)({
                                                            applicationId: er,
                                                            skuId: ea,
                                                            analyticsLocations: H,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsx)(c.C3N, {
                                    label: "Helpers",
                                    children: (0, r.jsxs)(c.Kqy, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, d.mE)(),
                                            }),
                                            (0, r.jsx)(c.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, u.GM)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(c.izJ, {}),
                                (0, r.jsx)(c.C3N, {
                                    label: "Dismissible Content Framework",
                                    children: (0, r.jsx)(c.Button, {
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
