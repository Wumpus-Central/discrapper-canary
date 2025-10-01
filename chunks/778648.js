n.d(t, { Z: () => D }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(664751),
    l = n(772848),
    s = n(311570),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(355467),
    m = n(821849),
    p = n(72924),
    h = n(100527),
    x = n(906732),
    f = n(883904),
    b = n(678558),
    g = n(730647),
    v = n(584825),
    j = n(305342),
    _ = n(333867),
    y = n(963249),
    C = n(87484),
    E = n(736519),
    N = n(43747),
    S = n(970815),
    T = n(430824),
    O = n(78839),
    P = n(246992),
    I = n(981631),
    k = n(474936),
    w = n(358928);
function R(e) {
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
function A(e, t) {
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
function Z(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, v.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              className: w.formItem,
              children: n.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(
                      j.Z,
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
let D = function () {
    let [e, t] = r.useState(k.Si.TIER_2),
        [n, v] = r.useState(null),
        j = (0, o.Wu)([T.Z], () => T.Z.getGuildsArray()),
        [D] = (0, o.Wu)([O.Z], () => [O.Z.getPremiumSubscription()]),
        L = j.map((e) => ({
            value: e,
            label: e.name,
        })),
        [M, U] = r.useState(L.length > 0 ? L[0].value : null),
        [F, G] = r.useState(""),
        [B, z] = r.useState({
            plan_id: k.Xh.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        V = "true" !== B.gift && null != D,
        [H, W] = r.useState(L.length > 0 ? L[0].value : null),
        { analyticsLocations: K } = (0, x.ZP)(h.Z.PAYMENT_FLOW_TEST_PAGE),
        [q, Y] = r.useState(""),
        [X, J] = r.useState(I.lds),
        { balance: Q, isFetching: $, error: ee } = (0, N.A)(),
        { isSubmitting: et, responseMessage: en, redeemVirtualCurrency: ea } = (0, N.f)(),
        [er, ei] = r.useState(I.lds),
        [el, es] = r.useState(""),
        [eo, ec] = r.useState(I.lds),
        [ed, eu] = r.useState(I.lds);
    return (0, a.jsx)(x.Gt, {
        value: K,
        children: (0, a.jsx)(d.zJl, {
            className: w.scroller,
            children: (0, a.jsxs)(d.hjN, {
                title: "Payment Flow Modals",
                tag: d.RB0.H1,
                children: [
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Gift" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: e,
                                        options: [
                                            {
                                                value: k.Si.TIER_2,
                                                label: "Nitro",
                                            },
                                            {
                                                value: k.Si.TIER_1,
                                                label: "Nitro Classic",
                                            },
                                            {
                                                value: k.Si.TIER_0,
                                                label: "Nitro Basic",
                                            },
                                            {
                                                value: null,
                                                label: "None",
                                            },
                                        ],
                                        onChange: (e) => t(e),
                                        popoutLayerContext: P.O$,
                                    }),
                                    (0, a.jsx)(E.Z, {
                                        subscriptionTier: e,
                                        premiumModalAnalyticsLocation: {},
                                        color: c.Tt.PRIMARY,
                                        look: c.iL.FILLED,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Premium Select Plan" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: n,
                                        options: [
                                            {
                                                value: k.Si.TIER_2,
                                                label: "Nitro",
                                            },
                                            {
                                                value: k.Si.TIER_1,
                                                label: "Nitro Classic",
                                            },
                                            {
                                                value: k.Si.TIER_0,
                                                label: "Nitro Basic",
                                            },
                                            {
                                                value: null,
                                                label: "None",
                                            },
                                        ],
                                        onChange: (e) => v(e),
                                        popoutLayerContext: P.O$,
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Select Plan",
                                        onClick: () =>
                                            (0, y.Z)({
                                                subscriptionTier: n,
                                                analyticsLocations: K,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Boost" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: M,
                                        options: L,
                                        onChange: (e) => U(e),
                                        popoutLayerContext: P.O$,
                                    }),
                                    null != M
                                        ? (0, a.jsx)(b.Z, {
                                              guild: M,
                                              analyticsLocation: {},
                                          })
                                        : (0, a.jsx)("div", { children: "No Guild to boost" }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsxs)(d.vwX, {
                                children: [
                                    (0, a.jsx)("div", { children: "Standalone: Trial Promotion Redemption" }),
                                    (0, a.jsx)(d.eee, {
                                        href: "https://i.dis.gd/createPromo",
                                        children: "How to create promotion",
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Promotion Code",
                                        value: F,
                                        onChange: (e) => G(e),
                                    }),
                                    (0, a.jsx)(d.ua7, {
                                        text: "Need Promotion Code",
                                        shouldShow: F.length < 1,
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, a.jsx)(d.zxk, {
                                                variant: "primary",
                                                text: "Open Link",
                                                disabled: F.length < 1,
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onClick: () => {
                                                    window.open(I.Z5c.BILLING_PROMOTION_REDEMPTION(F));
                                                },
                                            });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Standalone: Gift/Subscription Purchase" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: B.plan_id,
                                        options: [
                                            {
                                                value: k.Xh.PREMIUM_MONTH_TIER_2,
                                                label: "Nitro",
                                            },
                                            {
                                                value: k.Xh.PREMIUM_MONTH_TIER_1,
                                                label: "Nitro Classic",
                                            },
                                            {
                                                value: k.Xh.PREMIUM_MONTH_TIER_0,
                                                label: "Nitro Basic",
                                            },
                                        ],
                                        onChange: (e) => z((t) => A(R({}, t), { plan_id: e })),
                                        popoutLayerContext: P.O$,
                                    }),
                                    (0, a.jsx)(d.q4e, {
                                        value: B.gift,
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
                                        onChange: (e) => z((t) => A(R({}, t), { gift: e })),
                                        popoutLayerContext: P.O$,
                                    }),
                                    (0, a.jsx)(d.ua7, {
                                        text: "Already subscribed",
                                        shouldShow: V,
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, a.jsx)(d.zxk, {
                                                variant: "primary",
                                                text: "Open Link",
                                                onMouseLeave: n,
                                                onMouseEnter: t,
                                                disabled: V,
                                                onClick: () => {
                                                    window.open(
                                                        I.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(R({}, B)),
                                                    );
                                                },
                                            });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Redeem Virtual Currency for SKU" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    $
                                        ? (0, a.jsx)("div", {
                                              className: w.loader,
                                              children: (0, a.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: w.balanceWidgetPillContainer,
                                              children: [
                                                  null !== ee &&
                                                      (0, a.jsxs)(d.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              ee.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(S.A4, {
                                                      balance: null != Q ? Q : 0,
                                                      balanceWidgetMode: S.b6.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: w.formItem,
                                children: (0, a.jsx)(d.oil, {
                                    placeholder: "SKU ID",
                                    value: er,
                                    onChange: (e) => ei(e),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                className: w.formItem,
                                children: (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: "Redeem Virtual Currency for SKU",
                                    loading: et,
                                    onClick: () => ea(er, (0, l.Z)()),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                className: w.formItem,
                                children: (0, a.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: en,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Creator Revenue" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        className: w.guildServerDescription,
                                        variant: "text-sm/normal",
                                        children: "Premium Server Subscription For",
                                    }),
                                    (0, a.jsx)(d.q4e, {
                                        value: H,
                                        options: L,
                                        onChange: (e) => W(e),
                                        popoutLayerContext: P.O$,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(g.l, {
                                guildId: null == H ? void 0 : H.id,
                                children: (0, a.jsx)(Z, { selectedGuildForGuildSub: H }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Activities & Application Payment Modals" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Application Id",
                                        value: q,
                                        onChange: Y,
                                    }),
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Sku Id",
                                        value: X,
                                        onChange: (e) => J(e),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Open App Subs Modal for Activity",
                                        onClick: () =>
                                            (0, p.S)({
                                                applicationId: q,
                                                skuId: X,
                                                openPremiumPaymentModal: () => !0,
                                                analyticsLocations: [],
                                                analyticsLocationObject: { page: I.ZY5.IN_APP },
                                                context: I.IlC.APP,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Standard Payment Modal Test" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Application Id",
                                        value: el,
                                        onChange: es,
                                    }),
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "SKU ID",
                                        value: eo,
                                        onChange: (e) => ec(e),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, C.Z)({
                                                applicationId: el,
                                                skuId: eo,
                                                analyticsLocations: K,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Collectibles Payment Modal Test" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "SKU ID",
                                        value: ed,
                                        onChange: (e) => eu(e),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Open Collectibles Payment Modal for SKU",
                                        onClick: () =>
                                            (0, _.Z)({
                                                skuId: ed,
                                                analyticsLocations: K,
                                                variantsReturnStyle: s.v.VARIANTS_GROUP,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Helpers" }),
                            (0, a.jsxs)("div", {
                                className: w.formItem,
                                children: [
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Reset SubscriptionPlanStore",
                                        onClick: () => (0, m.mE)(),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Reset SubscriptionStore",
                                        onClick: () => (0, u.GM)(),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.izJ, { className: w.formDivider }),
                    (0, a.jsxs)("div", {
                        className: w.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Dismissible Content Framework" }),
                            (0, a.jsx)("div", {
                                className: w.formItem,
                                children: (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: "Reset DismissibleContentFrameworkStore",
                                    onClick: () => (0, f.EG)(),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
};
