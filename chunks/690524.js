n.d(t, { C: () => k }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(664751),
    o = n(772848),
    s = n(442837),
    l = n(199849),
    c = n(681715),
    u = n(755721),
    d = n(481060),
    f = n(355467),
    p = n(821849),
    _ = n(72924),
    m = n(100527),
    h = n(906732),
    g = n(883904),
    E = n(678558),
    b = n(730647),
    y = n(584825),
    O = n(305342),
    v = n(963249),
    S = n(87484),
    I = n(736519),
    T = n(43747),
    C = n(970815),
    A = n(430824),
    N = n(78839),
    P = n(981631),
    R = n(474936),
    w = n(570810);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, y.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(
                      O.Z,
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
let k = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = i.useState(R.Si.TIER_2),
                    [n, y] = i.useState(null),
                    O = (0, s.Wu)([A.Z], () => A.Z.getGuildsArray()),
                    [D] = (0, s.Wu)([N.Z], () => [N.Z.getPremiumSubscription()]),
                    L = O.map((e) => ({
                        value: e,
                        label: e.name,
                    })),
                    [k, U] = i.useState(L.length > 0 ? L[0].value : null),
                    [G, Z] = i.useState(""),
                    [F, B] = i.useState({
                        plan_id: R.Xh.PREMIUM_MONTH_TIER_2,
                        gift: "true",
                    }),
                    V = "true" !== F.gift && null != D,
                    [H, Y] = i.useState(L.length > 0 ? L[0].value : null),
                    { analyticsLocations: W } = (0, h.ZP)(m.Z.PAYMENT_FLOW_TEST_PAGE),
                    [K, z] = i.useState(""),
                    [q, Q] = i.useState(P.lds),
                    { balance: X, isFetching: J, error: $ } = (0, T.A)(),
                    { isSubmitting: ee, responseMessage: et, redeemVirtualCurrency: en } = (0, T.f)(),
                    [er, ei] = i.useState(P.lds),
                    [ea, eo] = i.useState(""),
                    [es, el] = i.useState(P.lds);
                return (0, r.jsx)(h.Gt, {
                    value: W,
                    children: (0, r.jsx)(d.zJl, {
                        className: w.scroller,
                        children: (0, r.jsxs)(d.Kqy, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(l.y6, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                {
                                                    value: R.Si.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    value: R.Si.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    value: R.Si.TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                                {
                                                    value: null,
                                                    label: "None",
                                                },
                                            ],
                                            onChange: (e) => t(e),
                                        }),
                                        (0, r.jsx)(I.Z, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: u.Tt.PRIMARY,
                                            look: u.iL.FILLED,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, r.jsx)(l.y6, {
                                            label: "Premium Select Plan",
                                            value: n,
                                            options: [
                                                {
                                                    value: R.Si.TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    value: R.Si.TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    value: R.Si.TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                                {
                                                    value: null,
                                                    label: "None",
                                                },
                                            ],
                                            onChange: (e) => y(e),
                                        }),
                                        (0, r.jsx)(d.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () =>
                                                (0, v.Z)({
                                                    subscriptionTier: n,
                                                    analyticsLocations: W,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(l.y6, {
                                            label: "Boost",
                                            value: k,
                                            options: L,
                                            onChange: (e) => U(e),
                                        }),
                                        null != k
                                            ? (0, r.jsx)(E.Z, {
                                                  guild: k,
                                                  analyticsLocation: {},
                                              })
                                            : (0, r.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsx)(d.eee, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, r.jsxs)(d.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(d.oil, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: G,
                                                    onChange: (e) => Z(e),
                                                }),
                                                (0, r.jsx)(c.u, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: G.length < 1,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: G.length < 1,
                                                        onClick: () => {
                                                            window.open(P.Z5c.BILLING_PROMOTION_REDEMPTION(G));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.C3N, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, r.jsx)(l.y6, {
                                            label: "Plan",
                                            value: F.plan_id,
                                            options: [
                                                {
                                                    value: R.Xh.PREMIUM_MONTH_TIER_2,
                                                    label: "Nitro",
                                                },
                                                {
                                                    value: R.Xh.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    value: R.Xh.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onChange: (e) => B((t) => j(x({}, t), { plan_id: e })),
                                        }),
                                        (0, r.jsx)(l.y6, {
                                            label: "Type",
                                            value: F.gift,
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
                                            onChange: (e) => B((t) => j(x({}, t), { gift: e })),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.u, {
                                    text: "Already subscribed",
                                    shouldShow: V,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: V,
                                        onClick: () => {
                                            window.open(P.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(x({}, F)));
                                        },
                                    }),
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.C3N, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, r.jsxs)(d.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                J
                                                    ? (0, r.jsx)("div", {
                                                          className: w.loader,
                                                          children: (0, r.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: w.balanceWidgetPillContainer,
                                                          children: [
                                                              null !== $ &&
                                                                  (0, r.jsxs)(d.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          $.message,
                                                                      ],
                                                                  }),
                                                              (0, r.jsx)(C.A4, {
                                                                  balance: null != X ? X : 0,
                                                                  balanceWidgetMode: C.b6.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, r.jsx)(d.oil, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: er,
                                            onChange: (e) => ei(e),
                                        }),
                                        (0, r.jsx)(d.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: ee,
                                            onClick: () => en(er, (0, o.Z)()),
                                        }),
                                        null != et &&
                                            (0, r.jsx)(d.Text, {
                                                variant: "text-sm/normal",
                                                children: et,
                                            }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.C3N, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, r.jsx)(l.y6, {
                                            label: "Premium Server Subscription For",
                                            value: H,
                                            options: L,
                                            onChange: (e) => Y(e),
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, r.jsx)(b.l, {
                                            guildId: null == H ? void 0 : H.id,
                                            children: (0, r.jsx)(M, { selectedGuildForGuildSub: H }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsxs)(d.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, r.jsxs)(d.C3N, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, r.jsx)(d.oil, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: K,
                                                    onChange: z,
                                                }),
                                                (0, r.jsx)(d.oil, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: q,
                                                    onChange: (e) => Q(e),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(d.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, _.S)({
                                                    applicationId: K,
                                                    skuId: q,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: P.ZY5.IN_APP },
                                                    context: P.IlC.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsx)(d.Kqy, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, r.jsx)(d.C3N, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, r.jsxs)(d.Kqy, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, r.jsx)(d.oil, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: ea,
                                                    onChange: eo,
                                                }),
                                                (0, r.jsx)(d.oil, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: es,
                                                    onChange: (e) => el(e),
                                                }),
                                                (0, r.jsx)(d.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, S.Z)({
                                                            applicationId: ea,
                                                            skuId: es,
                                                            analyticsLocations: W,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsx)(d.C3N, {
                                    label: "Helpers",
                                    children: (0, r.jsxs)(d.Kqy, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, r.jsx)(d.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, p.mE)(),
                                            }),
                                            (0, r.jsx)(d.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, f.GM)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(d.izJ, {}),
                                (0, r.jsx)(d.C3N, {
                                    label: "Dismissible Content Framework",
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, g.EG)(),
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
