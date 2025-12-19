n.d(t, { Z: () => M }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(664751),
    l = n(772848),
    s = n(311570),
    o = n(442837),
    c = n(199849),
    d = n(681715),
    u = n(755721),
    m = n(481060),
    p = n(355467),
    h = n(821849),
    f = n(72924),
    x = n(100527),
    b = n(906732),
    g = n(883904),
    v = n(678558),
    j = n(730647),
    y = n(584825),
    C = n(305342),
    _ = n(333867),
    S = n(963249),
    E = n(87484),
    T = n(736519),
    O = n(43747),
    N = n(970815),
    P = n(430824),
    w = n(78839),
    I = n(246992),
    k = n(981631),
    R = n(474936),
    A = n(681510);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, y.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(
                      C.Z,
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
let M = function () {
    let [e, t] = r.useState(R.Si.TIER_2),
        [n, y] = r.useState(null),
        C = (0, o.Wu)([P.Z], () => P.Z.getGuildsArray()),
        [M] = (0, o.Wu)([w.Z], () => [w.Z.getPremiumSubscription()]),
        U = C.map((e) => ({
            value: e,
            label: e.name,
        })),
        [B, F] = r.useState(U.length > 0 ? U[0].value : null),
        [G, V] = r.useState(""),
        [H, z] = r.useState({
            plan_id: R.Xh.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        W = "true" !== H.gift && null != M,
        [K, q] = r.useState(U.length > 0 ? U[0].value : null),
        { analyticsLocations: Y } = (0, b.ZP)(x.Z.PAYMENT_FLOW_TEST_PAGE),
        [Q, X] = r.useState(""),
        [J, $] = r.useState(k.lds),
        { balance: ee, isFetching: et, error: en } = (0, O.A)(),
        { isSubmitting: ea, responseMessage: er, redeemVirtualCurrency: ei } = (0, O.f)(),
        [el, es] = r.useState(k.lds),
        [eo, ec] = r.useState(""),
        [ed, eu] = r.useState(k.lds),
        [em, ep] = r.useState(k.lds);
    return (0, a.jsx)(b.Gt, {
        value: Y,
        children: (0, a.jsx)(m.zJl, {
            className: A.scroller,
            children: (0, a.jsxs)(m.Kqy, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, a.jsxs)(m.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(c.y6, {
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
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(T.Z, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: u.Tt.PRIMARY,
                                look: u.iL.FILLED,
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(c.y6, {
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
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(m.Button, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () =>
                                    (0, S.Z)({
                                        subscriptionTier: n,
                                        analyticsLocations: Y,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Boost",
                                value: B,
                                options: U,
                                onChange: (e) => F(e),
                                popoutLayerContext: I.O$,
                            }),
                            null != B
                                ? (0, a.jsx)(v.Z, {
                                      guild: B,
                                      analyticsLocation: {},
                                  })
                                : (0, a.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsx)(m.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, a.jsxs)(m.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(m.oil, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: G,
                                        onChange: (e) => V(e),
                                    }),
                                    (0, a.jsx)(d.u, {
                                        text: "Need Promotion Code",
                                        shouldShow: G.length < 1,
                                        children: (0, a.jsx)(m.Button, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: G.length < 1,
                                            onClick: () => {
                                                window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(G));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.C3N, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Plan",
                                value: H.plan_id,
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
                                onChange: (e) => z((t) => D(Z({}, t), { plan_id: e })),
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(c.y6, {
                                label: "Type",
                                value: H.gift,
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
                                onChange: (e) => z((t) => D(Z({}, t), { gift: e })),
                                popoutLayerContext: I.O$,
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.u, {
                        text: "Already subscribed",
                        shouldShow: W,
                        children: (0, a.jsx)(m.Button, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: W,
                            onClick: () => {
                                window.open(k.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(Z({}, H)));
                            },
                        }),
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.C3N, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, a.jsxs)(m.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    et
                                        ? (0, a.jsx)("div", {
                                              className: A.loader,
                                              children: (0, a.jsx)(m.$jN, { type: m.RAz.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: A.balanceWidgetPillContainer,
                                              children: [
                                                  null !== en &&
                                                      (0, a.jsxs)(m.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              en.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(N.A4, {
                                                      balance: null != ee ? ee : 0,
                                                      balanceWidgetMode: N.b6.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)(m.oil, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: el,
                                onChange: (e) => es(e),
                            }),
                            (0, a.jsx)(m.Button, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: ea,
                                onClick: () => ei(el, (0, l.Z)()),
                            }),
                            null != er &&
                                (0, a.jsx)(m.Text, {
                                    variant: "text-sm/normal",
                                    children: er,
                                }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.C3N, {
                        label: "Creator Revenue",
                        children: [
                            (0, a.jsx)(c.y6, {
                                label: "Premium Server Subscription For",
                                value: K,
                                options: U,
                                onChange: (e) => q(e),
                                popoutLayerContext: I.O$,
                            }),
                            (0, a.jsx)(j.l, {
                                guildId: null == K ? void 0 : K.id,
                                children: (0, a.jsx)(L, { selectedGuildForGuildSub: K }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(m.C3N, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, a.jsx)(m.oil, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: Q,
                                        onChange: X,
                                    }),
                                    (0, a.jsx)(m.oil, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: J,
                                        onChange: (e) => $(e),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(m.Button, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, f.S)({
                                        applicationId: Q,
                                        skuId: J,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: k.ZY5.IN_APP },
                                        context: k.IlC.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsx)(m.Kqy, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, a.jsx)(m.C3N, {
                            label: "Standard Payment Modal Test",
                            children: (0, a.jsxs)(m.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, a.jsx)(m.oil, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: eo,
                                        onChange: ec,
                                    }),
                                    (0, a.jsx)(m.oil, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: ed,
                                        onChange: (e) => eu(e),
                                    }),
                                    (0, a.jsx)(m.Button, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, E.Z)({
                                                applicationId: eo,
                                                skuId: ed,
                                                analyticsLocations: Y,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsxs)(m.Kqy, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, a.jsx)(m.oil, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: em,
                                onChange: (e) => ep(e),
                            }),
                            (0, a.jsx)(m.Button, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () =>
                                    (0, _.Z)({
                                        skuId: em,
                                        analyticsLocations: Y,
                                        variantsReturnStyle: s.v.VARIANTS_GROUP,
                                    }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsx)(m.C3N, {
                        label: "Helpers",
                        children: (0, a.jsxs)(m.Kqy, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, a.jsx)(m.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, h.mE)(),
                                }),
                                (0, a.jsx)(m.Button, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, p.GM)(),
                                }),
                            ],
                        }),
                    }),
                    (0, a.jsx)(m.izJ, {}),
                    (0, a.jsx)(m.C3N, {
                        label: "Dismissible Content Framework",
                        children: (0, a.jsx)(m.Button, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, g.EG)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
