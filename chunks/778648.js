n.d(t, { Z: () => L }), n(388685);
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
    h = n(72924),
    p = n(100527),
    x = n(906732),
    f = n(883904),
    b = n(678558),
    g = n(730647),
    v = n(584825),
    j = n(305342),
    _ = n(333867),
    y = n(963249),
    C = n(87484),
    N = n(736519),
    E = n(365943),
    S = n(43747),
    O = n(970815),
    T = n(430824),
    k = n(78839),
    P = n(246992),
    R = n(981631),
    w = n(474936),
    I = n(443582);
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
function D(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, v.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, a.jsx)("div", {
              className: I.formItem,
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
let L = function () {
    let [e, t] = r.useState(w.Si.TIER_2),
        [n, v] = r.useState(null),
        j = (0, o.Wu)([T.Z], () => T.Z.getGuildsArray()),
        [L] = (0, o.Wu)([k.Z], () => [k.Z.getPremiumSubscription()]);
    r.useEffect(() => {
        (0, E.t)();
    }, []);
    let M = j.map((e) => ({
            value: e,
            label: e.name,
        })),
        [U, F] = r.useState(M.length > 0 ? M[0].value : null),
        [G, z] = r.useState(""),
        [B, V] = r.useState({
            plan_id: w.Xh.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        H = "true" !== B.gift && null != L,
        [W, K] = r.useState(M.length > 0 ? M[0].value : null),
        { analyticsLocations: q } = (0, x.ZP)(p.Z.PAYMENT_FLOW_TEST_PAGE),
        [Y, X] = r.useState(""),
        [J, $] = r.useState(R.lds),
        { balance: Q, isFetching: ee, error: et } = (0, S.A)(),
        { isSubmitting: en, responseMessage: ea, redeemVirtualCurrency: er } = (0, S.f)(),
        [ei, el] = r.useState(R.lds),
        [es, eo] = r.useState(""),
        [ec, ed] = r.useState(R.lds),
        [eu, em] = r.useState(R.lds);
    return (0, a.jsx)(x.Gt, {
        value: q,
        children: (0, a.jsx)(d.zJl, {
            className: I.scroller,
            children: (0, a.jsxs)(d.hjN, {
                title: "Payment Flow Modals",
                tag: d.RB0.H1,
                children: [
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Gift" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: e,
                                        options: [
                                            {
                                                value: w.Si.TIER_2,
                                                label: "Nitro",
                                            },
                                            {
                                                value: w.Si.TIER_1,
                                                label: "Nitro Classic",
                                            },
                                            {
                                                value: w.Si.TIER_0,
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
                                    (0, a.jsx)(N.Z, {
                                        subscriptionTier: e,
                                        premiumModalAnalyticsLocation: {},
                                        color: c.Tt.PRIMARY,
                                        look: c.iL.FILLED,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Premium Select Plan" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: n,
                                        options: [
                                            {
                                                value: w.Si.TIER_2,
                                                label: "Nitro",
                                            },
                                            {
                                                value: w.Si.TIER_1,
                                                label: "Nitro Classic",
                                            },
                                            {
                                                value: w.Si.TIER_0,
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
                                                analyticsLocations: q,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Boost" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: U,
                                        options: M,
                                        onChange: (e) => F(e),
                                        popoutLayerContext: P.O$,
                                    }),
                                    null != U
                                        ? (0, a.jsx)(b.Z, {
                                              guild: U,
                                              analyticsLocation: {},
                                          })
                                        : (0, a.jsx)("div", { children: "No Guild to boost" }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
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
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Promotion Code",
                                        value: G,
                                        onChange: (e) => z(e),
                                    }),
                                    (0, a.jsx)(d.ua7, {
                                        text: "Need Promotion Code",
                                        shouldShow: G.length < 1,
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, a.jsx)(d.zxk, {
                                                variant: "primary",
                                                text: "Open Link",
                                                disabled: G.length < 1,
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onClick: () => {
                                                    window.open(R.Z5c.BILLING_PROMOTION_REDEMPTION(G));
                                                },
                                            });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Standalone: Gift/Subscription Purchase" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.q4e, {
                                        value: B.plan_id,
                                        options: [
                                            {
                                                value: w.Xh.PREMIUM_MONTH_TIER_2,
                                                label: "Nitro",
                                            },
                                            {
                                                value: w.Xh.PREMIUM_MONTH_TIER_1,
                                                label: "Nitro Classic",
                                            },
                                            {
                                                value: w.Xh.PREMIUM_MONTH_TIER_0,
                                                label: "Nitro Basic",
                                            },
                                        ],
                                        onChange: (e) => V((t) => A(Z({}, t), { plan_id: e })),
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
                                        onChange: (e) => V((t) => A(Z({}, t), { gift: e })),
                                        popoutLayerContext: P.O$,
                                    }),
                                    (0, a.jsx)(d.ua7, {
                                        text: "Already subscribed",
                                        shouldShow: H,
                                        children: (e) => {
                                            let { onMouseEnter: t, onMouseLeave: n } = e;
                                            return (0, a.jsx)(d.zxk, {
                                                variant: "primary",
                                                text: "Open Link",
                                                onMouseLeave: n,
                                                onMouseEnter: t,
                                                disabled: H,
                                                onClick: () => {
                                                    window.open(
                                                        R.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + i.stringify(Z({}, B)),
                                                    );
                                                },
                                            });
                                        },
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Redeem Virtual Currency for SKU" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    ee
                                        ? (0, a.jsx)("div", {
                                              className: I.loader,
                                              children: (0, a.jsx)(d.$jN, { type: d.RAz.SPINNING_CIRCLE }),
                                          })
                                        : (0, a.jsxs)("div", {
                                              className: I.balanceWidgetPillContainer,
                                              children: [
                                                  null !== et &&
                                                      (0, a.jsxs)(d.Text, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              et.message,
                                                          ],
                                                      }),
                                                  (0, a.jsx)(O.A4, {
                                                      balance: null != Q ? Q : 0,
                                                      balanceWidgetMode: O.b6.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: I.formItem,
                                children: (0, a.jsx)(d.oil, {
                                    placeholder: "SKU ID",
                                    value: ei,
                                    onChange: (e) => el(e),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                className: I.formItem,
                                children: (0, a.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: "Redeem Virtual Currency for SKU",
                                    loading: en,
                                    onClick: () => er(ei, (0, l.Z)()),
                                }),
                            }),
                            (0, a.jsx)("div", {
                                className: I.formItem,
                                children: (0, a.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: ea,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Creator Revenue" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.Text, {
                                        className: I.guildServerDescription,
                                        variant: "text-sm/normal",
                                        children: "Premium Server Subscription For",
                                    }),
                                    (0, a.jsx)(d.q4e, {
                                        value: W,
                                        options: M,
                                        onChange: (e) => K(e),
                                        popoutLayerContext: P.O$,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(g.l, {
                                guildId: null == W ? void 0 : W.id,
                                children: (0, a.jsx)(D, { selectedGuildForGuildSub: W }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Activities & Application Payment Modals" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Application Id",
                                        value: Y,
                                        onChange: X,
                                    }),
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Sku Id",
                                        value: J,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Open App Subs Modal for Activity",
                                        onClick: () =>
                                            (0, h.S)({
                                                applicationId: Y,
                                                skuId: J,
                                                openPremiumPaymentModal: () => !0,
                                                analyticsLocations: [],
                                                analyticsLocationObject: { page: R.ZY5.IN_APP },
                                                context: R.IlC.APP,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Standard Payment Modal Test" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "Application Id",
                                        value: es,
                                        onChange: eo,
                                    }),
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "SKU ID",
                                        value: ec,
                                        onChange: (e) => ed(e),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, C.Z)({
                                                applicationId: es,
                                                skuId: ec,
                                                analyticsLocations: q,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Collectibles Payment Modal Test" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
                                children: [
                                    (0, a.jsx)(d.oil, {
                                        placeholder: "SKU ID",
                                        value: eu,
                                        onChange: (e) => em(e),
                                    }),
                                    (0, a.jsx)(d.zxk, {
                                        variant: "primary",
                                        text: "Open Collectibles Payment Modal for SKU",
                                        onClick: () =>
                                            (0, _.Z)({
                                                skuId: eu,
                                                analyticsLocations: q,
                                                variantsReturnStyle: s.v.VARIANTS_GROUP,
                                            }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Helpers" }),
                            (0, a.jsxs)("div", {
                                className: I.formItem,
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
                    (0, a.jsx)(d.$i$, { className: I.formDivider }),
                    (0, a.jsxs)("div", {
                        className: I.formBlock,
                        children: [
                            (0, a.jsx)(d.vwX, { children: "Dismissible Content Framework" }),
                            (0, a.jsx)("div", {
                                className: I.formItem,
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
