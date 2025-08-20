n.d(t, { Z: () => U }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(664751),
    o = n(772848),
    s = n(311570),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(355467),
    f = n(821849),
    _ = n(72924),
    p = n(100527),
    h = n(906732),
    m = n(883904),
    g = n(678558),
    E = n(730647),
    b = n(584825),
    y = n(305342),
    O = n(333867),
    v = n(963249),
    I = n(87484),
    T = n(736519),
    S = n(365943),
    A = n(43747),
    C = n(970815),
    N = n(430824),
    R = n(78839),
    P = n(981631),
    w = n(474936),
    D = n(137067);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let { selectedGuildForGuildSub: t } = e,
        n = (0, b.GG)(null == t ? void 0 : t.id)[0];
    return null != t && null != n
        ? (0, r.jsx)("div", {
              className: D.formItem,
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
let U = function () {
    let [e, t] = i.useState(w.Si.TIER_2),
        [n, b] = i.useState(null),
        y = (0, l.Wu)([N.Z], () => N.Z.getGuildsArray()),
        [x] = (0, l.Wu)([R.Z], () => [R.Z.getPremiumSubscription()]);
    i.useEffect(() => {
        (0, S.t)();
    }, []);
    let j = y.map((e) => ({
            value: e,
            label: e.name,
        })),
        [U, G] = i.useState(j.length > 0 ? j[0].value : null),
        [B, Z] = i.useState(""),
        [V, F] = i.useState({
            plan_id: w.Xh.PREMIUM_MONTH_TIER_2,
            gift: "true",
        }),
        H = "true" !== V.gift && null != x,
        [Y, W] = i.useState(j.length > 0 ? j[0].value : null),
        { analyticsLocations: K } = (0, h.ZP)(p.Z.PAYMENT_FLOW_TEST_PAGE),
        [z, q] = i.useState(""),
        [X, Q] = i.useState(P.lds),
        { balance: J, isFetching: $, error: ee } = (0, A.A)(),
        { isSubmitting: et, responseMessage: en, redeemVirtualCurrency: er } = (0, A.f)(),
        [ei, ea] = i.useState(P.lds),
        [eo, es] = i.useState(""),
        [el, ec] = i.useState(P.lds),
        [eu, ed] = i.useState(P.lds);
    return (0, r.jsx)(h.Gt, {
        value: K,
        children: (0, r.jsxs)(u.hjN, {
            title: "Payment Flow Modals",
            tag: u.RB0.H1,
            children: [
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Gift" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.q4e, {
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
                                }),
                                (0, r.jsx)(T.Z, {
                                    subscriptionTier: e,
                                    premiumModalAnalyticsLocation: {},
                                    color: c.Tt.PRIMARY,
                                    look: c.iL.FILLED,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Premium Select Plan" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.q4e, {
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
                                    onChange: (e) => b(e),
                                }),
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    text: "Select Plan",
                                    onClick: () =>
                                        (0, v.Z)({
                                            subscriptionTier: n,
                                            analyticsLocations: K,
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Boost" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.q4e, {
                                    value: U,
                                    options: j,
                                    onChange: (e) => G(e),
                                }),
                                null != U
                                    ? (0, r.jsx)(g.Z, {
                                          guild: U,
                                          analyticsLocation: {},
                                      })
                                    : (0, r.jsx)("div", { children: "No Guild to boost" }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsxs)(u.vwX, {
                            children: [
                                (0, r.jsx)("div", { children: "Standalone: Trial Promotion Redemption" }),
                                (0, r.jsx)(u.eee, {
                                    href: "https://i.dis.gd/createPromo",
                                    children: "How to create promotion",
                                }),
                            ],
                        }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.oil, {
                                    placeholder: "Promotion Code",
                                    value: B,
                                    onChange: (e) => Z(e),
                                }),
                                (0, r.jsx)(u.ua7, {
                                    text: "Need Promotion Code",
                                    shouldShow: B.length < 1,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(u.zxk, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: B.length < 1,
                                            onMouseEnter: t,
                                            onMouseLeave: n,
                                            onClick: () => {
                                                window.open(P.Z5c.BILLING_PROMOTION_REDEMPTION(B));
                                            },
                                        });
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Standalone: Gift/Subscription Purchase" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.q4e, {
                                    value: V.plan_id,
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
                                    onChange: (e) => F((t) => M(L({}, t), { plan_id: e })),
                                }),
                                (0, r.jsx)(u.q4e, {
                                    value: V.gift,
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
                                    onChange: (e) => F((t) => M(L({}, t), { gift: e })),
                                }),
                                (0, r.jsx)(u.ua7, {
                                    text: "Already subscribed",
                                    shouldShow: H,
                                    children: (e) => {
                                        let { onMouseEnter: t, onMouseLeave: n } = e;
                                        return (0, r.jsx)(u.zxk, {
                                            variant: "primary",
                                            text: "Open Link",
                                            onMouseLeave: n,
                                            onMouseEnter: t,
                                            disabled: H,
                                            onClick: () => {
                                                window.open(
                                                    P.Z5c.BILLING_PREMIUM_SUBSCRIBE + "?" + a.stringify(L({}, V)),
                                                );
                                            },
                                        });
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Redeem Virtual Currency for SKU" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: "Virtual Currency Balance:",
                                }),
                                $
                                    ? (0, r.jsx)("div", {
                                          className: D.loader,
                                          children: (0, r.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
                                      })
                                    : (0, r.jsxs)("div", {
                                          className: D.balanceWidgetPillContainer,
                                          children: [
                                              null !== ee &&
                                                  (0, r.jsxs)(u.Text, {
                                                      variant: "text-sm/normal",
                                                      children: [
                                                          "Error fetching Virtual Currency Balance: ",
                                                          ee.message,
                                                      ],
                                                  }),
                                              (0, r.jsx)(C.A4, {
                                                  balance: null != J ? J : 0,
                                                  balanceWidgetMode: C.b6.SELECTED,
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                        (0, r.jsx)(u.xJW, {
                            className: D.formItem,
                            children: (0, r.jsx)(u.oil, {
                                placeholder: "SKU ID",
                                value: ei,
                                onChange: (e) => ea(e),
                            }),
                        }),
                        (0, r.jsx)(u.xJW, {
                            className: D.formItem,
                            children: (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: et,
                                onClick: () => er(ei, (0, o.Z)()),
                            }),
                        }),
                        (0, r.jsx)(u.xJW, {
                            className: D.formItem,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: en,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Creator Revenue" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    className: D.guildServerDescription,
                                    variant: "text-sm/normal",
                                    children: "Premium Server Subscription For",
                                }),
                                (0, r.jsx)(u.q4e, {
                                    value: Y,
                                    options: j,
                                    onChange: (e) => W(e),
                                }),
                            ],
                        }),
                        (0, r.jsx)(E.l, {
                            guildId: null == Y ? void 0 : Y.id,
                            children: (0, r.jsx)(k, { selectedGuildForGuildSub: Y }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Activities & Application Payment Modals" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.oil, {
                                    placeholder: "Application Id",
                                    value: z,
                                    onChange: q,
                                }),
                                (0, r.jsx)(u.oil, {
                                    placeholder: "Sku Id",
                                    value: X,
                                    onChange: (e) => Q(e),
                                }),
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    text: "Open App Subs Modal for Activity",
                                    onClick: () =>
                                        (0, _.S)({
                                            applicationId: z,
                                            skuId: X,
                                            openPremiumPaymentModal: () => !0,
                                            analyticsLocations: [],
                                            analyticsLocationObject: { page: P.ZY5.IN_APP },
                                            context: P.IlC.APP,
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Standard Payment Modal Test" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.oil, {
                                    placeholder: "Application Id",
                                    value: eo,
                                    onChange: es,
                                }),
                                (0, r.jsx)(u.oil, {
                                    placeholder: "SKU ID",
                                    value: el,
                                    onChange: (e) => ec(e),
                                }),
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    text: "Open Standard Payment Modal for SKU",
                                    onClick: () =>
                                        (0, I.Z)({
                                            applicationId: eo,
                                            skuId: el,
                                            analyticsLocations: K,
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Collectibles Payment Modal Test" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.oil, {
                                    placeholder: "SKU ID",
                                    value: eu,
                                    onChange: (e) => ed(e),
                                }),
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    text: "Open Collectibles Payment Modal for SKU",
                                    onClick: () =>
                                        (0, O.Z)({
                                            skuId: eu,
                                            analyticsLocations: K,
                                            variantsReturnStyle: s.v.VARIANTS_GROUP,
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Helpers" }),
                        (0, r.jsxs)(u.xJW, {
                            className: D.formItem,
                            children: [
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, f.mE)(),
                                }),
                                (0, r.jsx)(u.zxk, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, d.GM)(),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.$i$, { className: D.formDivider }),
                (0, r.jsxs)("div", {
                    className: D.formBlock,
                    children: [
                        (0, r.jsx)(u.vwX, { children: "Dismissible Content Framework" }),
                        (0, r.jsx)(u.xJW, {
                            className: D.formItem,
                            children: (0, r.jsx)(u.zxk, {
                                variant: "primary",
                                text: "Reset DismissibleContentFrameworkStore",
                                onClick: () => (0, m.EG)(),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
};
