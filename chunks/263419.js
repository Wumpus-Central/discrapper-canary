l.r(t),
    l.d(t, {
        nitroCollection: () => l4,
        virtualCurrencyCollection: () => l8,
        playgroundConfig: () => l7,
        identityCollection: () => l9,
        RevenuePlaygroundCollectionId: () => l2,
        paymentsCollection: () => l3,
    });
var a,
    n = l(700623),
    i = l(318254),
    r = l(403581),
    o = l(950305),
    s = l(627968),
    d = l(64700),
    u = l(835245),
    c = l(793574),
    p = l(688810),
    m = l(166532),
    b = l(735305),
    h = l(635358),
    x = l(702841),
    y = l(834730),
    g = l(349288),
    f = l(231723),
    v = l(228366),
    E = l(830382),
    S = l(73825),
    C = l(937008),
    j = l(768050),
    T = l(491057),
    P = l(314671),
    _ = l(97352),
    A = l(67480);
function I(e) {
    let { children: t, ...l } = e,
        a = d.useContext(j.Qv);
    return null == a ? null : (0, s.jsx)(j.Qv.Provider, { value: { ...a, ...l }, children: t });
}
let R = (e) => {
        let { skuId: t, isGift: l, applicationId: a } = e,
            { analyticsLocations: n } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
            i = d.useRef(null),
            r = d.useRef(null),
            [o, s] = d.useState(() => (0, u.A)());
        d.useEffect(() => {
            (i.current !== t || r.current !== l) && (s((0, u.A)()), (i.current = t), (r.current = l));
        }, [t, l]);
        let [m, b] = (0, x.yK)([A.A], () => [A.A.isFetching(t), A.A.get(t)]);
        return (
            d.useEffect(() => {
                null != b || m || (0, E.EX)(a, t, h.g.VARIANTS_GROUP).catch((e) => {});
            }, [a, t, b, m]),
            {
                loadId: o,
                analyticsLocations: n,
                handleClose: d.useCallback((e) => {}, []),
                handleComplete: d.useCallback(() => {}, []),
                isFetching: m,
                sku: b,
                skuId: t,
                isGift: l,
            }
        );
    },
    k = (e) =>
        (0, s.jsxs)("div", {
            style: { padding: 20 },
            children: [
                (0, s.jsx)(y.E, { variant: "text-md/normal", children: e.text }),
                (0, s.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, s.jsx)(g.Anchor, {
                        onClick: () => e.handleStepChange(e.originStep),
                        children: "\u2190 Go Back",
                    }),
                }),
            ],
        }),
    M = (e) => {
        let {
                analyticsLocations: t,
                applicationId: l,
                skuId: a,
                isGift: n,
                onClose: i,
                onComplete: r,
                initialPlanId: o,
                purchaseType: d,
                stepConfigs: u,
                loadId: c,
                excludeSubscriptionPlansBySKU: p,
                renderHeader: m,
                disablePurchases: b,
                paymentContextOverrides: h,
            } = e,
            x = { ...h };
        b && (x.disablePurchasesForStorybook = !0);
        let y = `${a}-${n}-${c}`;
        return (0, s.jsx)(
            j.PaymentContextProvider,
            {
                stepConfigs: u,
                applicationId: l,
                skuIDs: null != a ? [a] : [],
                isGift: n,
                activeSubscription: null,
                purchaseType: d,
                excludeSubscriptionPlansBySKU: p,
                children: (0, s.jsx)(I, {
                    ...x,
                    children: (0, s.jsx)(T.Qt, {
                        children: (0, s.jsx)(C.dX, {
                            isGift: n,
                            children: (0, s.jsx)(
                                P.PaymentModal,
                                {
                                    transitionState: f.ip.ENTERED,
                                    onClose: i,
                                    onComplete: r,
                                    applicationId: l,
                                    skuId: a,
                                    initialPlanId: o,
                                    analyticsLocations: t,
                                    renderHeader: m,
                                },
                                y,
                            ),
                        }),
                    }),
                }),
            },
            y,
        );
    };
var N = l(652215);
let D = [
    {
        key: m.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, s.jsx)(b.x, { ...e, breadcrumbSteps: [m.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
        options: { renderHeader: !0 },
    },
    {
        key: m.pn.REVIEW,
        renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
        options: {},
    },
];
var O = l(162097),
    V = l(70926),
    L = l(240248),
    w = l(375708),
    U = l(439519);
let B = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: (e) => {
        let { ctaText: t, linkText: l, showNotificationBadge: a, cardAlignment: n } = e;
        return (0, s.jsx)("div", {
            className: U.tH,
            children: (0, s.jsx)(V.SS, {
                className: U.oz,
                ctaText: (0, L.uJ)(t) ? w.intl.string(w.t["J+vlIR"]) : t,
                ctaOnClick: N.tEg,
                showNotificationBadge: a,
                cardAlignment: n,
                linkText: (0, L.uJ)(l) ? w.intl.string(w.t.XRdyjz) : l,
            }),
        });
    },
    controls: {
        ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
        showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
        cardAlignment: {
            label: "Card Alignment",
            type: "select",
            options: [
                { label: "Start", value: V.cP.START },
                { label: "End", value: V.cP.END },
            ],
            defaultValue: V.cP.START,
        },
        linkText: { label: "Link Text", type: "text", defaultValue: "" },
    },
};
var G = l(821609),
    H = l(65738);
let $ = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: H.k7.DEFAULT },
                { label: "Selected", value: H.k7.SELECTED },
            ],
            defaultValue: H.k7.DEFAULT,
        },
        showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
        shouldUseTabularNums: { label: "Use Tabular Nums Font Variant", type: "boolean", defaultValue: !1 },
        disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
    },
    W = {
        name: "Balance Widget Pill",
        id: "balance-widget-pill",
        component: (e) => {
            let { loading: t, shouldUseTabularNums: l, ...a } = e,
                [n, i] = (0, d.useState)(a.balance);
            return (
                (0, d.useEffect)(() => {
                    null == n && null != a.balance && i(a.balance);
                }, [a.balance, n]),
                (0, s.jsxs)("div", {
                    className: U.YG,
                    children: [
                        (0, s.jsx)(H.Gy, { ...a, balance: t ? null : n, className: l ? U.jG : void 0 }),
                        (0, s.jsx)(G.$, { onClick: () => i(a.balance), text: "Update Balance" }),
                    ],
                })
            );
        },
        controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...$ },
    },
    F = {
        name: "Balance Widget Pill Loading State",
        id: "balance-widget-pill-loading",
        component: (e) => {
            let { loadingDuration: t, shouldUseTabularNums: l, ...a } = e,
                [n, i] = (0, d.useState)(a.balance);
            return (
                (0, d.useEffect)(() => {
                    i(a.balance);
                }, [a.balance]),
                (0, s.jsxs)("div", {
                    className: U.YG,
                    children: [
                        (0, s.jsx)(H.Gy, { ...a, balance: n, className: l ? U.jG : void 0 }),
                        (0, s.jsx)(G.$, {
                            onClick: () => {
                                i(null),
                                    setTimeout(() => {
                                        i(a.balance);
                                    }, t);
                            },
                            text: "Simulate Loading State",
                        }),
                    ],
                })
            );
        },
        controls: { loadingDuration: { label: "Loading Duration (ms)", type: "number", defaultValue: 500 }, ...$ },
    };
var z = l(488428),
    Y = l(20742),
    q = l(17928),
    K = l(314116),
    J = l(990078),
    X = l(862482),
    Q = l(364522),
    Z = l(331322),
    ee = l(691885),
    et = l(404778),
    el = l(292666),
    ea = l(270003),
    en = l(289873),
    ei = l(192308),
    er = l(753390),
    eo = l(892656),
    es = l(541689),
    ed = l(944304),
    eu = l(300233),
    ec = l(599941),
    ep = l(817649),
    em = l(4630),
    eb = l(482132),
    eh = l(615310),
    ex = l(532794),
    ey = l(216678),
    eg = l(194509),
    ef = l(761705),
    ev = l(71393),
    eE = l(166403),
    eS = l(788868),
    eC = l(705018);
function ej(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, ec.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, s.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, s.jsx)(ep.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let eT = "checkout-error-boundary-test-modal",
    eP = () => {
        let { setStep: e } = (0, eh.Ay)();
        return (0, s.jsx)(eb.dZ, {
            children: (0, s.jsxs)(Z.B, {
                direction: "vertical",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-sm/normal",
                        children:
                            "PaymentModal Step within PaymentContext loaded. Click below to navigate to a mock error step that will throw \u2014 the CheckoutErrorBoundary baked into PaymentContextProvider will catch it.",
                    }),
                    (0, s.jsx)(G.$, {
                        variant: "primary",
                        text: "Navigate to Error Step",
                        onClick: () => e(m.pn.REVIEW),
                    }),
                ],
            }),
        });
    };
function e_(e) {
    let { errorType: t = "mock-error" } = e;
    if ("mock-error" === t) throw Error("Simulated error thrown inside a payment step");
    return "translation-key-error" === t
        ? (0, s.jsx)("div", {
              children: w.intl.format(eC.default.cRB332, {
                  avatar: (0, s.jsx)("div", { children: "Sample Avatar" }),
                  nickname: (0, s.jsx)("div", { children: "Sample Nickname" }),
                  username: (0, s.jsx)("div", { children: "Sample Username" }),
              }),
          })
        : (0, s.jsx)("div", { children: "Unknown error type" });
}
let eA = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = d.useState(eS.pe.TIER_2),
                    [l, a] = d.useState(null),
                    n = (0, q.yK)([ev.A], () => ev.A.getGuildsArray()),
                    [i] = (0, q.yK)([eE.A], () => [eE.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, m] = d.useState(r.length > 0 ? r[0].value : null),
                    [b, h] = d.useState(""),
                    [x, f] = d.useState({ plan_id: eS.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    v = "true" !== x.gift && null != i,
                    [E, C] = d.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: j } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                    [T, P] = d.useState(""),
                    [_, A] = d.useState(N.dJq),
                    { balance: I, isFetching: R, error: k } = (0, ef.W)(),
                    { isSubmitting: M, responseMessage: D, redeemVirtualCurrency: O } = (0, ef.Q)(),
                    [V, L] = d.useState(N.dJq),
                    [w, B] = d.useState(""),
                    [$, W] = d.useState(N.dJq);
                return (0, s.jsx)(p.f5, {
                    value: j,
                    children: (0, s.jsx)(Q.Ip, {
                        className: U.XG,
                        children: (0, s.jsxs)(Z.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, s.jsxs)(Z.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(ee.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: eS.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eS.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eS.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(eg.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: X.XD.PRIMARY,
                                            look: X.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(Z.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(ee.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: eS.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eS.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eS.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => a(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, ex.A)({ subscriptionTier: l, analyticsLocations: j }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(Z.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(ee.l, {
                                            label: "Boost",
                                            value: o,
                                            options: r,
                                            onSelectionChange: m,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != o
                                            ? (0, s.jsx)(ed.A, { guild: o, analyticsLocation: {} })
                                            : (0, s.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(Z.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(g.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, s.jsxs)(Z.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(el.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: b,
                                                    onChange: (e) => h(e),
                                                }),
                                                (0, s.jsx)(J.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: b.length < 1,
                                                    children: (0, s.jsx)(G.$, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: b.length < 1,
                                                        onClick: () => {
                                                            window.open(N.BVt.BILLING_PROMOTION_REDEMPTION(b));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(ea.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, s.jsx)(ee.l, {
                                            label: "Plan",
                                            value: x.plan_id,
                                            options: [
                                                { id: "tier_2", value: eS.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: eS.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: eS.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                f((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(ee.l, {
                                            label: "Type",
                                            value: x.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                f((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(J.m, {
                                    text: "Already subscribed",
                                    shouldShow: v,
                                    children: (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: v,
                                        onClick: () => {
                                            window.open(N.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + z.stringify({ ...x }));
                                        },
                                    }),
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(ea.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, s.jsxs)(Z.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                R
                                                    ? (0, s.jsx)("div", {
                                                          className: U.wG,
                                                          children: (0, s.jsx)(en.y, { type: en.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, s.jsxs)("div", {
                                                          className: U.dB,
                                                          children: [
                                                              null !== k &&
                                                                  (0, s.jsxs)(y.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          k.message,
                                                                      ],
                                                                  }),
                                                              (0, s.jsx)(H.Gy, {
                                                                  balance: I ?? 0,
                                                                  balanceWidgetMode: H.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, s.jsx)(el.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: V,
                                            onChange: (e) => L(e),
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: M,
                                            onClick: () => O(V, (0, u.A)()),
                                        }),
                                        null != D && (0, s.jsx)(y.E, { variant: "text-sm/normal", children: D }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(ea.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, s.jsx)(ee.l, {
                                            label: "Premium Server Subscription For",
                                            value: E,
                                            options: r,
                                            onSelectionChange: C,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, s.jsx)(eu.H, {
                                            guildId: E?.id,
                                            children: (0, s.jsx)(ej, { selectedGuildForGuildSub: E }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsxs)(Z.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsxs)(ea.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, s.jsx)(el.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: T,
                                                    onChange: P,
                                                }),
                                                (0, s.jsx)(el.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: _,
                                                    onChange: (e) => A(e),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, em.openIAPPurchaseModal)({
                                                    applicationId: T,
                                                    skuId: _,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: N.liQ.IN_APP },
                                                    context: N.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsx)(Z.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, s.jsx)(ea.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, s.jsxs)(Z.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(el.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: w,
                                                    onChange: B,
                                                }),
                                                (0, s.jsx)(el.k, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: $,
                                                    onChange: (e) => W(e),
                                                }),
                                                (0, s.jsx)(G.$, {
                                                    variant: "primary",
                                                    text: "Open Premium Apps Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, ey.q)({
                                                            applicationId: w,
                                                            skuId: $,
                                                            analyticsLocations: j,
                                                            checkoutFlow: eo.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsx)(ea.n, {
                                    label: "Helpers",
                                    children: (0, s.jsxs)(Z.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, s.jsx)(G.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, S.YG)(),
                                            }),
                                            (0, s.jsx)(G.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, er.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)(et.c, {}),
                                (0, s.jsx)(ea.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, es.Ab)(),
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            },
            controls: {},
        },
        {
            name: "Checkout Error Boundary",
            id: "checkout-error-boundary",
            component: (e) => {
                let { errorBoundaryVariant: t, errorType: l } = e,
                    { analyticsLocations: a } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, s.jsx)(p.f5, {
                    value: a,
                    children: (0, s.jsxs)(Z.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, s.jsxs)(y.E, {
                                variant: "text-md/normal",
                                children: [
                                    "Opens a ",
                                    "<PaymentModal>",
                                    " with a step that throws to verify ",
                                    "<CheckoutErrorBoundary>",
                                    " catches it and logs to Sentry with checkout context.",
                                ],
                            }),
                            (0, s.jsx)(G.$, {
                                variant: "primary",
                                text: "Open Error Boundary Test Modal",
                                onClick: () =>
                                    (function (e, t) {
                                        let { errorBoundaryVariant: l, errorType: a } = t,
                                            n = [
                                                {
                                                    key: m.pn.PLAN_SELECT,
                                                    renderStep: () => (0, s.jsx)(eP, {}),
                                                    renderHeader: () =>
                                                        (0, s.jsx)(Y.rQ, { title: "Checkout Error Boundary Test" }),
                                                },
                                                {
                                                    key: m.pn.REVIEW,
                                                    renderStep: () =>
                                                        (0, s.jsx)(eb.dZ, {
                                                            children: (0, s.jsx)(e_, { errorType: a }),
                                                        }),
                                                },
                                            ],
                                            i = () => (0, ei.closeModal)(eT);
                                        return (0, ei.openModalLazy)(
                                            async () => {
                                                let t;
                                                return (
                                                    "show-alert" === l
                                                        ? (t = (e) => {
                                                              i();
                                                              let t = "string" == typeof e ? e : e.message;
                                                              (0, K.A)({
                                                                  title: "Error",
                                                                  subtitle: t,
                                                                  confirmText: "OK",
                                                                  variant: "critical",
                                                              });
                                                          })
                                                        : "close-modal" === l &&
                                                          (t = () => {
                                                              i();
                                                          }),
                                                    await Promise.resolve((a) => {
                                                        let { onClose: i, transitionState: r } = a;
                                                        return (0, s.jsx)(j.PaymentContextProvider, {
                                                            activeSubscription: null,
                                                            stepConfigs: n,
                                                            skuIDs: [],
                                                            shouldCrashOnUnhandledError: "crash-client" === l,
                                                            onUnhandledError: t,
                                                            children: (0, s.jsx)(C.dX, {
                                                                isGift: !1,
                                                                children: (0, s.jsx)(P.PaymentModal, {
                                                                    transitionState: r,
                                                                    onClose: i,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    })
                                                );
                                            },
                                            { onCloseRequest: i, onCloseCallback: i, modalKey: eT },
                                        );
                                    })(a, { errorBoundaryVariant: t, errorType: l }),
                            }),
                        ],
                    }),
                });
            },
            controls: {
                errorBoundaryVariant: {
                    label: "Variant",
                    type: "select",
                    options: [
                        { label: "Crash Client (Default Behavior)", value: "crash-client" },
                        { label: "Show Alert", value: "show-alert" },
                        { label: "Close Modal", value: "close-modal" },
                    ],
                    defaultValue: "crash-client",
                },
                errorType: {
                    label: "Error Type",
                    type: "select",
                    options: [
                        { label: "Mock Error", value: "mock-error" },
                        { label: "Translation Key Error", value: "translation-key-error" },
                    ],
                    defaultValue: "mock-error",
                },
            },
        },
    ],
};
var eI = l(862241),
    eR = l(428262),
    ek = l(492518),
    eM = l(758836);
let eN = () => ({
        options: [
            { value: eM.ck["0"], label: `${eM.ck["0"]} (Cat Ears)` },
            { value: eM.ck["1"], label: `${eM.ck["1"]} (Angry)` },
            { value: eM.ck["2"], label: `${eM.ck["2"]} (Aurora Bundle)` },
            { value: eM.ck["3"], label: `${eM.ck["3"]} (Heartbloom)` },
            { value: eM.ck["4"], label: `${eM.ck["4"]} (Aurora Dreams)` },
            { value: eM.ck["5"], label: `${eM.ck["5"]} (Sakura Ink)` },
            { value: eM.ck["6"], label: `${eM.ck["6"]} (Of Ink and Steel)` },
            { value: eM.ck["7"], label: `${eM.ck["7"]} (Twilight)` },
            { value: eM.ck["8"], label: `${eM.ck["8"]} (Red Dragon)` },
            { value: eM.ck["9"], label: `${eM.ck["9"]} (Aurora)` },
        ],
        defaultValue: eM.ck["0"],
    }),
    eD = [
        {
            key: m.pn.REVIEW,
            renderStep: (e) => (0, s.jsx)(eI._M, { ...e }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.CONFIRM,
            renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.PLAN_SELECT,
            renderStep: (e) => (0, s.jsx)(k, { ...e, originStep: m.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    eO = () => (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    eV = { isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 } },
    eL = eN(),
    ew = {
        name: "Collectibles Review Step",
        id: "collectibles-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l } = e,
                {
                    analyticsLocations: a,
                    loadId: n,
                    handleClose: i,
                    handleComplete: r,
                    isFetching: o,
                    sku: d,
                } = R({ skuId: t, isGift: l, applicationId: N.FYj }),
                u = eR.Ay.isPremiumSku(t);
            return o || null == d || u
                ? (0, s.jsx)(ek.k, {})
                : (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(M, {
                              stepConfigs: eD,
                              analyticsLocations: a,
                              applicationId: N.FYj,
                              initialPlanId: void 0,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: N.VVm.ONE_TIME,
                              disablePurchases: !0,
                              excludeSubscriptionPlansBySKU: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, s.jsx)(eO, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: eL.options, defaultValue: eL.defaultValue },
            ...eV,
        },
    },
    eU = {
        name: "Premium Review Step",
        id: "premium-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l } = e,
                {
                    analyticsLocations: a,
                    loadId: n,
                    handleClose: i,
                    handleComplete: r,
                    isFetching: o,
                    sku: u,
                } = R({ skuId: t, isGift: l, applicationId: eS.tv }),
                c = eR.Ay.isPremiumSku(t),
                p = c ? eS.zE[t] : void 0,
                [m, b] = d.useState(p),
                h = d.useRef(!1);
            d.useEffect(() => {
                h.current || null == p || ((h.current = !0), b(p));
            }, [p, m]);
            let { isLoadedForPremiumSKUs: y, selectedPlan: g } = ((e) => {
                let { subscriptionPlanId: t } = e;
                d.useEffect(() => {
                    _.A.isLoadedForPremiumSKUs() || v.h.wait(() => (0, S.zS)());
                }, []);
                let l = (0, x.bG)([_.A], () => (null != t ? _.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, x.bG)([_.A], () => _.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: m });
            return !o && null != u && y && c && null != g
                ? (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(M, {
                              stepConfigs: eD,
                              analyticsLocations: a,
                              applicationId: eS.tv,
                              initialPlanId: p,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: N.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: i,
                              onComplete: r,
                              paymentContextOverrides: {},
                          }),
                          (0, s.jsx)(eO, {}),
                      ],
                  })
                : (0, s.jsx)(ek.k, {});
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { value: eS.pe.TIER_0, label: `${eS.pe.TIER_0} (Nitro Basic)` },
                    { value: eS.pe.TIER_2, label: `${eS.pe.TIER_2} (Nitro Standard)` },
                ],
                defaultValue: eS.pe.TIER_0,
            },
            ...eV,
        },
    };
var eB = l(27192),
    eG = l(359778),
    eH = l(939249),
    e$ = l(97808),
    eW = l(778712),
    eF = l(783384),
    ez = l(664111),
    eY = l(994500),
    eq = l(287809),
    eK = l(403362),
    eJ = l(784018),
    eX = l(94269);
let eQ = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, q.yK)([eY.A, eq.default], () =>
                eY.A.getFriendIDs()
                    .map((e) => eq.default.getUser(e))
                    .filter(eK.Vq),
            ),
            [r, o] = d.useState(new Set()),
            u = d.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return t ? a.add(e) : a.delete(e), a;
                });
            }, []),
            c = d.useMemo(() => Array.from(r), [r]),
            p = d.useCallback(() => (0, s.jsx)(eF.A, { title: a, participantIds: c }), [a, c]),
            m = "landscape" === l ? 640 : 360;
        return (0, s.jsxs)("div", {
            className: eX.iE,
            children: [
                (0, s.jsx)("div", {
                    className: eX.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, s.jsx)(ez.default, {
                        src: t,
                        active: n,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: f.ip.ENTERED,
                    }),
                }),
                (0, s.jsxs)(eG.Z, {
                    className: eX.nd,
                    type: eG.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, s.jsxs)("div", {
                            className: eX.Iv,
                            children: [
                                (0, s.jsx)(y.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    children: "Participants",
                                }),
                                (0, s.jsxs)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [r.size, " selected"],
                                }),
                            ],
                        }),
                        (0, s.jsx)(et.c, {}),
                        0 === i.length
                            ? (0, s.jsx)("div", {
                                  className: eX.p$,
                                  children: (0, s.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, s.jsx)("div", {
                                  className: eX.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: i.map((e) => {
                                      let t = r.has(e.id);
                                      return (0, s.jsxs)(
                                          eH.D,
                                          {
                                              className: eX.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => u(e.id, !t),
                                              children: [
                                                  (0, s.jsx)(eB.Lc, { value: t, size: 16 }),
                                                  (0, s.jsx)(e$.eu, {
                                                      src: e.getAvatarURL(void 0, 24),
                                                      size: eW._3.SIZE_24,
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, s.jsx)(y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "interactive-text-default",
                                                      children: e.username,
                                                  }),
                                              ],
                                          },
                                          e.id,
                                      );
                                  }),
                              }),
                    ],
                }),
            ],
        });
    },
    controls: {
        videoUrl: { label: "Video URL", type: "text", defaultValue: eJ.kz },
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        title: { label: "Title", type: "text", defaultValue: "Epic Gaming Moment" },
        autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
    },
};
var eZ = l(930349);
function e0() {
    return (0, s.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function e1() {
    return (0, s.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let e2 = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    e6 = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, accessibleLabel: l, accessibleValue: a } = e,
                        n = "" !== a ? a : void 0;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(eZ.V, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: n,
                                renderPreview: () => (0, s.jsx)(e0, {}),
                            }),
                            (0, s.jsx)(eZ.V, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: n,
                                renderPreview: () => (0, s.jsx)(e1, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: e2,
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "" },
                },
            },
            {
                name: "Edit Button",
                component: function (e) {
                    let { variant: t, showOverlayOnHover: l, accessibleLabel: a, accessibleValue: n } = e,
                        i = "" !== n ? n : void 0;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(eZ.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: i,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(e0, {}),
                            }),
                            (0, s.jsx)(eZ.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: i,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(e1, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: e2,
                    showOverlayOnHover: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "" },
                },
            },
            {
                name: "Edit Button - Deletable",
                component: function (e) {
                    let {
                            variant: t,
                            showOverlayOnHover: l,
                            accessibleLabel: a,
                            accessibleValue: n,
                            deleteType: i,
                            deleteAccessibleLabel: r,
                        } = e,
                        o = { type: i, accessibleLabel: r, onClick: () => {} },
                        d = "" !== n ? n : void 0;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(eZ.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: d,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, s.jsx)(e0, {}),
                            }),
                            (0, s.jsx)(eZ.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: d,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, s.jsx)(e1, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: e2,
                    showOverlayOnHover: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "" },
                    deleteType: {
                        label: "Delete Button Type",
                        type: "select",
                        defaultValue: "remove",
                        options: [
                            { label: "Remove", value: "remove" },
                            { label: "Reset", value: "reset" },
                        ],
                    },
                    deleteAccessibleLabel: {
                        label: "Delete Aria Label",
                        type: "text",
                        defaultValue: "Remove decoration",
                    },
                },
            },
        ],
    };
var e3 = l(687021),
    e8 = l(487233),
    e4 = l(120386),
    e9 = l(473219);
let e7 = { value: "", label: "No Guild (main profile)" };
var e5 = l(99696),
    te = l(534514),
    tt = l(599147),
    tl = l(808411),
    ta = l(716574),
    tn = l(425713),
    ti = l(367266);
let tr = {
    bronze: eS.Ac.PREMIUM_TENURE_1_MONTH,
    silver: eS.Ac.PREMIUM_TENURE_3_MONTH,
    gold: eS.Ac.PREMIUM_TENURE_6_MONTH,
    platinum: eS.Ac.PREMIUM_TENURE_12_MONTH,
    diamond: eS.Ac.PREMIUM_TENURE_24_MONTH,
    emerald: eS.Ac.PREMIUM_TENURE_36_MONTH,
    ruby: eS.Ac.PREMIUM_TENURE_60_MONTH,
    opal: eS.Ac.PREMIUM_TENURE_72_MONTH,
};
var to = l(661531),
    ts = l(116833),
    td = l(720879);
let tu = {
    bronze: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
    },
    silver: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
    },
    gold: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
    },
    platinum: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
    },
    diamond: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    },
    emerald: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
    },
    ruby: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
    },
    opal: {
        type: "custom",
        start: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
        end: to.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
    },
};
var tc = l(624716),
    tp = l(872725);
let tm = { name: "Expressive Progress", component: tl.A, id: "expressive-progress", controls: {} },
    tb = { name: "Tab Tooltip", component: tc.A, id: "tab-tooltip", controls: {} },
    th = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, s.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, s.jsx)(
                            tp.A,
                            {
                                artboard: e.artboard,
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: eG.s.PRIMARY,
                                glowing: !0,
                                children: (0, s.jsxs)("div", {
                                    style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 },
                                    children: [
                                        (0, s.jsx)(te.D, { variant: "heading-lg/semibold", children: "Card Title" }),
                                        (0, s.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "This is sample card content using design system tokens.",
                                        }),
                                        (0, s.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: "This is more sample content.",
                                        }),
                                    ],
                                }),
                            },
                            `${e.artboard}-${e.fit}`,
                        ),
                    });
                },
                id: "animated-border-card",
                controls: {
                    artboard: {
                        label: "Artboard",
                        type: "select",
                        defaultValue: "BaseGlowRemapped",
                        options: [
                            { label: "BaseGlow", value: "BaseGlow" },
                            { label: "BaseGlowRemapped", value: "BaseGlowRemapped" },
                            { label: "HoverLightmode", value: "HoverLightmode" },
                            { label: "HoverDarkmode", value: "HoverDarkmode" },
                            { label: "ButtonFillLightmode", value: "ButtonFillLightmode" },
                            { label: "ButtonFillDarkmode", value: "ButtonFillDarkmode" },
                        ],
                    },
                    fit: {
                        label: "Fit",
                        type: "select",
                        defaultValue: "layout",
                        options: [
                            { label: "Contain", value: "contain" },
                            { label: "Cover", value: "cover" },
                            { label: "Fill", value: "fill" },
                            { label: "Fit Width", value: "fit-width" },
                            { label: "Fit Height", value: "fit-height" },
                            { label: "None", value: "none" },
                            { label: "Scale Down", value: "scale-down" },
                            { label: "Layout", value: "layout" },
                        ],
                    },
                    glowAmount: {
                        label: "Glow Amount (px)",
                        type: "slider",
                        defaultValue: 8,
                        minValue: 0,
                        maxValue: 50,
                    },
                    blurAmount: {
                        label: "Blur Amount (px)",
                        type: "slider",
                        defaultValue: 30,
                        minValue: 0,
                        maxValue: 100,
                    },
                    hueRotate: {
                        label: "Hue Rotate (deg)",
                        type: "slider",
                        defaultValue: 0,
                        minValue: 0,
                        maxValue: 360,
                    },
                },
            },
            { name: "Cancellation Flow", component: () => (0, s.jsx)(tt.o, {}), id: "cancellation-flow", controls: {} },
            tm,
            {
                name: "Mini Premium Tooltip",
                component: (e) => {
                    let { badgeId: t, earnedOnText: l, variant: a } = e,
                        n = d.useRef(null),
                        i = d.useRef(null),
                        r = tr[t],
                        o = (0, tn.I)(r).standard,
                        u = eS.VD[r].rarity,
                        c = (
                            w.intl.string(w.t.lG6a5x) +
                            " " +
                            w.intl.string(eS.VD[r].nameUnformatted)
                        ).toLocaleUpperCase();
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(y.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children:
                                    'Hover or focus a badge to see the mini tooltip. Renders as `role="tooltip"` \u2014 title and body are announced via `aria-describedby` injected on the trigger by MiniPremiumTooltip.',
                            }),
                            (0, s.jsxs)("div", {
                                className: ti.k3,
                                children: [
                                    (0, s.jsx)("span", {
                                        className: ti.yU,
                                        children: (0, s.jsx)(ta.K, {
                                            targetElementRef: n,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: u,
                                            variant: a,
                                            children: (0, s.jsx)(g.Anchor, {
                                                href: "#",
                                                ref: n,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: ti.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)("span", {
                                        className: ti.yU,
                                        children: (0, s.jsx)(ta.K, {
                                            targetElementRef: i,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: u,
                                            variant: a,
                                            children: (0, s.jsx)(g.Anchor, {
                                                href: "#",
                                                ref: i,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: ti.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "mini-premium-tooltip",
                controls: {
                    badgeId: {
                        label: "Badge",
                        type: "select",
                        defaultValue: "diamond",
                        options: [
                            { label: "Bronze (1 Month)", value: "bronze" },
                            { label: "Silver (3 Month)", value: "silver" },
                            { label: "Gold (6 Month)", value: "gold" },
                            { label: "Platinum (12 Month)", value: "platinum" },
                            { label: "Diamond (24 Month)", value: "diamond" },
                            { label: "Emerald (36 Month)", value: "emerald" },
                            { label: "Ruby (60 Month)", value: "ruby" },
                            { label: "Opal (72 Month)", value: "opal" },
                        ],
                    },
                    earnedOnText: { label: "Earned-on text", type: "text", defaultValue: "Earned on 4/20/24" },
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "nitro",
                        options: [
                            { label: "Default", value: "default" },
                            { label: "Nitro (italic uppercase)", value: "nitro" },
                        ],
                    },
                },
            },
            {
                name: "Premium Tooltip",
                component: (e) => {
                    let {
                            title: t,
                            body: l,
                            showGraphic: a,
                            showActions: n,
                            badgeId: i,
                            showProgress: r,
                            progressCircleText: o,
                            progressCirclePercent: u,
                            progressCircleUrgency: c,
                            delay: p,
                            size: m,
                            gradientColor: b,
                            estimatedTooltipHeight: h,
                        } = e,
                        x = d.useRef(null),
                        g = d.useRef(null),
                        f = d.useMemo(
                            () =>
                                ({
                                    bronze: eS.Ac.PREMIUM_TENURE_1_MONTH,
                                    silver: eS.Ac.PREMIUM_TENURE_3_MONTH,
                                    gold: eS.Ac.PREMIUM_TENURE_6_MONTH,
                                    platinum: eS.Ac.PREMIUM_TENURE_12_MONTH,
                                    diamond: eS.Ac.PREMIUM_TENURE_24_MONTH,
                                    emerald: eS.Ac.PREMIUM_TENURE_36_MONTH,
                                    ruby: eS.Ac.PREMIUM_TENURE_60_MONTH,
                                    opal: eS.Ac.PREMIUM_TENURE_72_MONTH,
                                })[i],
                            [i],
                        ),
                        v = null != f ? (0, tn.I)(f).standard : null,
                        E = d.useMemo(() => {
                            if (null == f) return "";
                            let e = eS.VD[f];
                            return (
                                w.intl.string(w.t.lG6a5x) +
                                " " +
                                w.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [f]),
                        S = d.useMemo(() => {
                            if (!a || null == v) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: u, progressCircleUrgency: c }
                                : {};
                            return {
                                type: "dynamic",
                                component: ts.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: v, alt: E, ...e },
                            };
                        }, [a, v, E, r, o, u, c]),
                        C = {
                            title: t,
                            body: l,
                            graphic: S,
                            actions: d.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: d.useMemo(() => ("string" == typeof b && b in tu ? tu[b] : b), [b]),
                            estimatedTooltipHeight: h,
                        };
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(y.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: "Hover or focus these buttons.",
                            }),
                            (0, s.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "16px",
                                    width: "100%",
                                    marginTop: "200px",
                                },
                                children: [
                                    (0, s.jsx)(td.L, {
                                        targetElementRef: x,
                                        ...C,
                                        children: (0, s.jsx)(G.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, s.jsx)(td.L, {
                                        targetElementRef: g,
                                        ...C,
                                        children: (0, s.jsx)(G.$, { buttonRef: g, variant: "primary", text: "Right" }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "premium-tooltip",
                controls: {
                    title: { label: "Title", type: "text", defaultValue: w.intl.string(w.t.lG6a5x).toUpperCase() },
                    body: {
                        label: "Body",
                        type: "text",
                        defaultValue: "This is an example of a premium tooltip (poptip?) with customizable content.",
                    },
                    showGraphic: { label: "Show Graphic", type: "boolean", defaultValue: !0 },
                    showActions: { label: "Show Actions", type: "boolean", defaultValue: !1 },
                    badgeId: {
                        label: "Badge",
                        type: "select",
                        defaultValue: "gold",
                        options: [
                            { label: "Bronze (1 Month)", value: "bronze" },
                            { label: "Silver (3 Month)", value: "silver" },
                            { label: "Gold (6 Month)", value: "gold" },
                            { label: "Platinum (12 Month)", value: "platinum" },
                            { label: "Diamond (24 Month)", value: "diamond" },
                            { label: "Emerald (36 Month)", value: "emerald" },
                            { label: "Ruby (60 Month)", value: "ruby" },
                            { label: "Opal (72 Month)", value: "opal" },
                        ],
                    },
                    gradientColor: {
                        label: "Gradient Color",
                        type: "select",
                        defaultValue: "gold",
                        options: [
                            { label: "Nitro Pink", value: "nitro-pink" },
                            { label: "Nitro Green", value: "nitro-green" },
                            { label: "Green", value: "green" },
                            { label: "Purple", value: "purple" },
                            { label: "Bronze (1 Month)", value: "bronze" },
                            { label: "Silver (3 Month)", value: "silver" },
                            { label: "Gold (6 Month)", value: "gold" },
                            { label: "Platinum (12 Month)", value: "platinum" },
                            { label: "Diamond (24 Month)", value: "diamond" },
                            { label: "Emerald (36 Month)", value: "emerald" },
                            { label: "Ruby (60 Month)", value: "ruby" },
                            { label: "Opal (72 Month)", value: "opal" },
                        ],
                    },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "lg",
                        options: [
                            { label: "Small", value: "sm" },
                            { label: "Medium", value: "md" },
                            { label: "Large", value: "lg" },
                            { label: "Video", value: "video" },
                        ],
                    },
                    showProgress: { label: "Show Progress", type: "boolean", defaultValue: !0 },
                    progressCircleText: { label: "Progress Text", type: "text", defaultValue: "15" },
                    progressCirclePercent: { label: "Progress Percent", type: "number", defaultValue: 50 },
                    progressCircleUrgency: {
                        label: "Progress Urgency",
                        type: "select",
                        defaultValue: "warning",
                        options: [
                            { label: "Warning", value: "warning" },
                            { label: "Critical", value: "critical" },
                        ],
                    },
                    delay: { label: "Delay (ms)", type: "number", defaultValue: 300 },
                    estimatedTooltipHeight: {
                        label: "Estimated Tooltip Height (px)",
                        type: "number",
                        defaultValue: 300,
                    },
                },
            },
            tb,
        ],
    };
var tx = l(691540),
    ty = l(857250),
    tg = l(97483),
    tf = l(750338),
    tv = l(280041),
    tE = l(576765),
    tS = l(88433);
let tC = { none: void 0, nitroWheel: r.t },
    tj = {
        name: "Bento Box",
        component: function (e) {
            let {
                    title: t,
                    description: l,
                    ctaMode: a,
                    descriptionCtaText: n,
                    action1Text: i,
                    action1Variant: r,
                    action2Text: o,
                    action2Variant: d,
                    icon: u,
                    iconPosition: c,
                    index: p,
                    size: m,
                    badgeText: b,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: y,
                } = e,
                g = () => (0, tx.P0)((0, ty.o)("CTA clicked!", tg.Ck.SUCCESS)),
                f = tC[u],
                v =
                    "descriptionCta" === a
                        ? { descriptionCta: n, onClick: g }
                        : "actions" === a
                          ? {
                                actions: [
                                    {
                                        text: i,
                                        variant: r,
                                        onClick: g,
                                        ...(null != f ? { icon: f, iconPosition: c } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: d, onClick: g }] : []),
                                ],
                            }
                          : {};
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(tf.A, {
                    name: tv.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tE.A,
                    videoUrl: tS.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: b.length > 0 ? b : void 0,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: y,
                    ...v,
                }),
            });
        },
        id: "bento-box",
        controls: {
            title: { label: "Title", type: "text", defaultValue: "Express yourself with emoji" },
            description: {
                label: "Description",
                type: "text",
                defaultValue: "Use any emoji anywhere \u2014 even in servers that don't have them unlocked.",
            },
            ctaMode: {
                label: "CTA Mode",
                type: "select",
                defaultValue: "descriptionCta",
                options: [
                    { label: "descriptionCta + onClick", value: "descriptionCta" },
                    { label: "actions", value: "actions" },
                    { label: "None", value: "none" },
                ],
            },
            descriptionCtaText: { label: "descriptionCta Text", type: "text", defaultValue: "Take me there" },
            action1Text: { label: "Action 1 Text", type: "text", defaultValue: "Primary action" },
            action1Variant: {
                label: "Action 1 Variant",
                type: "select",
                defaultValue: "primary",
                options: [
                    { label: "Primary", value: "primary" },
                    { label: "Secondary", value: "secondary" },
                ],
            },
            action2Text: {
                label: "Action 2 Text (leave empty to hide)",
                type: "text",
                defaultValue: "Secondary action",
            },
            action2Variant: {
                label: "Action 2 Variant",
                type: "select",
                defaultValue: "secondary",
                options: [
                    { label: "Primary", value: "primary" },
                    { label: "Secondary", value: "secondary" },
                ],
            },
            icon: {
                label: "Action 1 Icon (actions mode only)",
                type: "select",
                defaultValue: "none",
                options: [
                    { label: "None", value: "none" },
                    { label: "Nitro Wheel", value: "nitroWheel" },
                ],
            },
            iconPosition: {
                label: "Action 1 Icon Position (actions mode only)",
                type: "select",
                defaultValue: "start",
                options: [
                    { label: "Start", value: "start" },
                    { label: "End", value: "end" },
                ],
            },
            index: { label: "Index", type: "number", defaultValue: 0 },
            size: {
                label: "Size",
                type: "select",
                defaultValue: tv.A0.LARGE,
                options: [
                    { label: "Small", value: tv.A0.SMALL },
                    { label: "Medium", value: tv.A0.MEDIUM },
                    { label: "Large", value: tv.A0.LARGE },
                ],
            },
            badgeText: { label: "Badge Text", type: "text", defaultValue: "" },
            badgeVariant: {
                label: "Badge Variant",
                type: "select",
                defaultValue: "gradient",
                options: [
                    { label: "Gradient", value: "gradient" },
                    { label: "Expressive", value: "expressive" },
                ],
            },
            isReducedMotion: { label: "Reduced Motion", type: "boolean", defaultValue: !1 },
            previewImageStyle: {
                label: "Preview Image Style",
                type: "select",
                defaultValue: tv.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: tv.Tb.CONTAINED },
                    { label: "Overlay", value: tv.Tb.OVERLAY },
                ],
            },
        },
    };
var tT = l(398590),
    tP = l(920050),
    t_ = l(744064),
    tA = l(976860);
let tI = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, s.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, s.jsx)(t_.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, tx.P0)((0, ty.o)("CTA Clicked!", tg.Ck.SUCCESS)),
                        }),
                        (0, s.jsx)(tR, {}),
                    ],
                });
            },
            id: "perk-card",
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Perk Title" },
                description: {
                    label: "Description",
                    type: "text",
                    defaultValue: "This is the perk description. When hovered or focused, it will be revealed in full.",
                },
                caption: { label: "Caption", type: "text", defaultValue: "" },
                pillText: { label: "Pill Text", type: "text", defaultValue: "" },
                primaryAsset: { label: "Primary Asset", type: "text", defaultValue: "https://i.imgur.com/xJL1c3t.png" },
                backgroundAssetUrl: { label: "Background Asset", type: "text", defaultValue: "" },
                ctaText: { label: "CTA Text", type: "text", defaultValue: "Learn More" },
                progress: { label: "Progress (0 - 1.0)", type: "slider", defaultValue: 0, minValue: 0, maxValue: 1 },
                featured: { label: "Featured", type: "boolean", defaultValue: !1 },
                glowing: { label: "Glowing", type: "boolean", defaultValue: !1 },
                blurTint: { label: "Blur Tint", type: "color", defaultValue: void 0 },
            },
        },
    ],
};
function tR() {
    let [e, t] = (0, d.useState)("customSounds"),
        l = `${N.BVt.NITRO_HOME}?perk=${e}`;
    return (0, s.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, s.jsx)(el.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, s.jsx)(G.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, tT.jH)(), (0, tA.pX)(N.BVt.ME), setTimeout(() => (0, tA.pX)(l), 200);
                },
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                style: { userSelect: "text" },
                children: [
                    "IDs from PerkCardIds.tsx:",
                    (0, s.jsx)("ul", {
                        style: { margin: "4px 0 0", paddingLeft: 24, listStyleType: "disc", columns: 3, columnGap: 24 },
                        children: Object.values(tP).map((e) => (0, s.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var tk = l(52822),
    tM = l(339984);
let tN = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: eS.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: eS.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: eS.e.NAMEPLATE_MODAL_UPSELL },
    ],
    tD = {
        [eS.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [eS.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [eS.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    },
    tO = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: N.qlD },
    ],
    tV = [
        { id: "avatar", label: "Avatar", value: tM.HL.AVATAR },
        { id: "banner", label: "Banner", value: tM.HL.BANNER },
    ];
var tL = l(652165);
let tw = "1271174907081789524",
    tU = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: (e) => {
            let { skuId: t } = e;
            return (0, s.jsx)("div", {
                className: U.YG,
                children: (0, s.jsx)(G.$, {
                    onClick: () => {
                        (0, tL.B4)({
                            skuId: t,
                            onComplete: (e) => {
                                console.log(
                                    `Orb Checkout Success for SKU: ${t}. Entitlement(s): `,
                                    e?.entitlements,
                                    Date.now(),
                                );
                            },
                            onCloseCallback: () => {
                                console.log("Orb Checkout Closed");
                            },
                        });
                    },
                    text: `Open Orb Checkout for Custom SKU: ${t}`,
                }),
            });
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { skuId: "1342211853484429445", skuName: "Orb Profile Badge" },
                    { skuId: "1427463138634109026", skuName: "Magic Mists (Deco)" },
                    { skuId: "1332505467980873728", skuName: "Pondering Portal (Deco)" },
                    { skuId: tw, skuName: "Oni's Curse (Deco)" },
                ].map((e) => {
                    let { skuId: t, skuName: l } = e;
                    return { label: l, value: t };
                }),
                defaultValue: tw,
            },
        },
    };
var tB = l(324861),
    tG = l(73079),
    tH = l(818348),
    t$ = l(76488),
    tW = l(877062);
let tF = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, s.jsx)(j.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsxs)(tk.wn, {
                children: [
                    (0, s.jsx)(te.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, s.jsx)(tk.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, s.jsx)(G.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: () => {
                                console.log("Opening deep link... ", t),
                                    tW.A.launch(t, (e) => {
                                        console.log("onDone response: ", e);
                                    });
                            },
                        }),
                    }),
                ],
            }),
        });
    },
    controls: {
        deepLinkUrl: {
            label: "Deep Link URL",
            type: "text",
            defaultValue: `discord://${location.host}/feature/apple-payment-link`,
        },
    },
};
var tz = l(636537),
    tY = l(192087),
    tq = l(295405),
    tK = l(71532);
let tJ = eN();
async function tX(e) {
    return (await tz.Bo.post({ url: N.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function tQ(e) {
    return (await tz.Bo.get({ url: N.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function tZ(e, t) {
    await tz.Bo.patch({
        url: N.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function t0() {
    let [e, t] = d.useState(!1),
        [l, a] = d.useState(!1),
        [n, i] = d.useState(null),
        [r, o] = d.useState(null),
        [u, c] = d.useState(tJ.defaultValue),
        [p, m] = d.useState(null),
        b = (0, q.bG)([tq.A], () => tq.A.paymentSources),
        h = (0, q.bG)([tq.A], () => tq.A.hasFetchedPaymentSources),
        x = (0, q.bG)([tq.A], () => tq.A.defaultPaymentSourceId);
    d.useEffect(() => {
        h || (0, er.$o)();
    }, [h]),
        d.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]);
    let g = d.useRef(null);
    d.useEffect(() => {
        if (null == r || "" === r) {
            g.current = p;
            return;
        }
        if (p !== g.current) {
            if (null == p || "" === p) {
                g.current = p;
                return;
            }
            tZ(r, p)
                .then(() => {
                    i(`Order updated successfully!
Order ID: ${r}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    i(`Failed to update order: ${t}`);
                }),
                (g.current = p);
        }
    }, [r, p]);
    let f = d.useMemo(
            () =>
                Object.values(b).map((e) => {
                    var t;
                    let l,
                        a = ((t = e.type), null != (l = tY.w[t]) ? l() : String(t));
                    if (e.type === tH.he.CARD && "last4" in e) {
                        let t = e.last4 ?? "",
                            l = e.brand ?? "Unknown";
                        a += ` - ****${t} (${l})`;
                    } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: a };
                }),
            [b],
        ),
        v = async () => {
            if (null == p || "" === p) return void i("Please select a payment source first.");
            if (null == u || "" === u || u === N.dJq) return void i("Please select a SKU ID.");
            t(!0), i(null), o(null);
            try {
                let e = await (0, E.Aj)(u, p, "US", !1, {
                    gift_style: null,
                    recipient_id: void 0,
                    custom_message: void 0,
                    emoji_id: void 0,
                    emoji_name: void 0,
                    sound_id: void 0,
                    reward_sku_ids: void 0,
                });
                o(e), i(`Order created successfully! Order ID: ${e}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                i(`Failed to create order: ${e}`);
            } finally {
                t(!1);
            }
        },
        S = async () => {
            if (null == r || "" === r) return void i("No order ID available. Please create an order first.");
            a(!0);
            try {
                let e = await tX(r);
                if (null == e.errors) {
                    i(`Order signed successfully! Order ID: ${r}`), o(null);
                    return;
                }
                let t = e.errors[0];
                if (1e3 === t)
                    i(`Order signing in progress!
Order ID: ${r}
This order requires additional authentication (3DS).`),
                        (async () => {
                            try {
                                let t = e.billing_facet;
                                if (null == t) throw Error("Order does not have billing facet information");
                                let l = t.order_signing_deferral_context;
                                if (null == l) throw Error("Order does not have payment redirect context");
                                let a = l.stripe_3ds_context;
                                if (null == a) throw Error("Order does not have 3DS context information");
                                let n = await (0, tK.Cv)();
                                if (null == n) throw Error("Stripe not loaded");
                                let s = a.client_secret;
                                if (null == s || "" === s) throw Error("No client secret found in 3DS context");
                                let { error: d, paymentIntent: u } = await n.confirmCardPayment(s, {
                                    payment_method: a.payment_method_id,
                                });
                                if (null != d) throw Error(`3DS authentication failed: ${d.message}`);
                                if (null == u) throw Error("No payment intent returned from 3DS authentication");
                                let c = e.id ?? r ?? "Unknown";
                                o(null),
                                    i(`3DS authentication completed successfully!
Order ID: ${c}`);
                            } catch (a) {
                                let t = a instanceof Error ? a.message : String(a),
                                    l = e.id ?? r ?? "Unknown";
                                i(`Failed to complete 3DS!
Order ID: ${l}
Error: ${t}`);
                            }
                        })();
                else if (1001 === t) {
                    let t, l, a, n, s, d, u, c;
                    i(`Order signing in progress!
Order ID: ${r}
This order requires redirection to complete the payment.
Polling order status...`),
                        (t = e.billing_facet),
                        (l = t?.order_signing_deferral_context?.payment_redirect_context),
                        (a = l?.redirect_url),
                        null != a && window.open(a),
                        (n = Date.now()),
                        (s = null),
                        (d = () => {
                            let e = Date.now() - n,
                                t = Math.min(3e3, 3e4 - e);
                            t > 0 &&
                                (s = setTimeout(() => {
                                    c().catch((e) => {
                                        let t = e instanceof Error ? e.message : String(e);
                                        i(`Failed to poll order status!
Order ID: ${r}
Error: ${t}`);
                                    });
                                }, t));
                        }),
                        (u = () => {
                            null != s && clearTimeout(s);
                        }),
                        (c = async () => {
                            let e = Date.now() - n;
                            if (e >= 3e4) {
                                try {
                                    var t;
                                    (t = (await tQ(r)).status),
                                        i(`Order signing timed out.
Order ID: ${r}
Status: ${t ?? "unknown"}
Please check the order status manually.`),
                                        u();
                                } catch (t) {
                                    let e = t instanceof Error ? t.message : String(t);
                                    i(`Order signing timed out.
Order ID: ${r}
Error: ${e}`),
                                        u();
                                }
                                return;
                            }
                            try {
                                let e = (await tQ(r)).status;
                                if (2 === e) {
                                    i(`Order signed successfully!
Order ID: ${r}
Payment redirect completed.`),
                                        o(null),
                                        u();
                                    return;
                                }
                                if (1 === e) {
                                    i(`Order signed unsuccessfully
Order ID: ${r}`),
                                        u();
                                    return;
                                }
                                d();
                            } catch (l) {
                                let t = l instanceof Error ? l.message : String(l);
                                e < 3e4
                                    ? d()
                                    : (i(`Order signing timed out.
Order ID: ${r}
Error: ${t}`),
                                      u());
                            }
                        })().catch((e) => {
                            let t = e instanceof Error ? e.message : String(e);
                            i(`Failed to start polling order status!
Order ID: ${r}
Error: ${t}`);
                        });
                } else
                    i(`Order signing failed
Order ID: ${r}
Error: ${t}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                i(`Failed to sign order: ${e}`);
            } finally {
                a(!1);
            }
        };
    return (0, s.jsxs)(tk.wn, {
        children: [
            (0, s.jsx)(te.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, s.jsxs)(tk.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-md/normal",
                        className: t$.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, s.jsxs)(ea.n, {
                        label: "Configuration",
                        children: [
                            (0, s.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, s.jsx)(ee.l, {
                                    selectionMode: "single",
                                    value: u,
                                    onSelectionChange: c,
                                    options: tJ.options,
                                    formatOption: (e) => {
                                        let { value: t, label: l } = e;
                                        return { id: t, value: t, label: l };
                                    },
                                    placeholder: "Select a SKU...",
                                    label: "SKU ID",
                                    clearable: !0,
                                }),
                            }),
                            (0, s.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, s.jsx)(ee.l, {
                                        selectionMode: "single",
                                        value: p,
                                        onSelectionChange: m,
                                        options: f,
                                        placeholder: "Select a payment source...",
                                        disabled: !h,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !h &&
                                        (0, s.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: t$.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, s.jsx)(G.$, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: v,
                                disabled: e || null == p || "" === p || null == u || "" === u || u === N.dJq,
                            }),
                            (0, s.jsx)(G.$, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: S,
                                disabled: l || null == r || "" === r,
                            }),
                        ],
                    }),
                    null != n &&
                        (0, s.jsx)("div", {
                            className: t$.cW,
                            children: n
                                .split("\n")
                                .map((e, t) =>
                                    (0, s.jsx)(
                                        y.E,
                                        {
                                            variant: "text-md/normal",
                                            style: {
                                                display: "block",
                                                marginBottom: t < n.split("\n").length - 1 ? "4px" : "0",
                                            },
                                            children: e,
                                        },
                                        t,
                                    ),
                                ),
                        }),
                ],
            }),
        ],
    });
}
var t1 = l(405139),
    t2 = l(19311),
    t6 = l(869177);
function t3(e) {
    let t = d.useRef(null),
        l = {
            paymentLabel: w.intl.string(w.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, s.jsx)(en.y, { style: { marginTop: 16 }, type: en.t.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, s.jsx)(t6.V, { ...l, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, s.jsx)(t1.Mv, { ...l, ...e })
          : (0, s.jsx)(t1.dP, { ...l, ...e });
}
function t8(e) {
    let { paymentRequestWallet: t } = e,
        l = d.useRef(null),
        [a, n] = d.useState(!1);
    return (0, s.jsx)(tk.e_, {
        footer: (0, s.jsx)(t2.Ay, {
            primaryCTA: t2.Ay.CTAType.CONTINUE,
            primaryText: w.intl.string("applePay" === t ? w.t.WoXvJL : w.t.wnVVr0),
            primaryDisabled: !a,
            onPrimary: () => void (null != l.current && l.current.show()),
            onBack: () => {},
        }),
        children: (0, s.jsx)(t3, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: l,
            onValidPaymentRequest: () => n(!0),
        }),
    });
}
var t4 = l(150934),
    t9 = l(36167),
    t7 = l(26279);
let t5 = [
        { id: "tier_2", value: eS.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eS.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eS.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    le = [
        { id: "meta_quest", value: t7.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function lt() {
    let [e, t] = d.useState(null);
    return {
        error: e,
        handleSuccess: d.useCallback((e, l) => {
            l.searchParams.append("handoff_token", e.body.handoff_token);
            let a = l.href;
            t(null), window.open(a, "_blank");
        }, []),
        handleFailure: d.useCallback((e, l) => {
            t(`Failed to generate handoff for ${l}`);
        }, []),
    };
}
function ll(e) {
    let { flowType: t } = e,
        [l, a] = d.useState(eS.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = d.useState(!1),
        { error: r, handleSuccess: o, handleFailure: c } = lt(),
        p = d.useCallback(() => {
            let e = (0, u.A)();
            (0, t9.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, c);
        }, [l, n, t, o, c]);
    return (0, s.jsxs)(tk.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, s.jsxs)(Z.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, s.jsx)(ee.l, {
                        label: "Plan",
                        value: l,
                        options: t5,
                        onSelectionChange: a,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, s.jsx)(ee.l, {
                        label: "Gift",
                        value: n ? "true" : "false",
                        options: [
                            { id: "no", value: "false", label: "No" },
                            { id: "yes", value: "true", label: "Yes" },
                        ],
                        onSelectionChange: (e) => i("true" === e),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, s.jsx)(G.$, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: p }),
            null != r && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "status-danger", children: r }),
        ],
    });
}
function la(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = lt(),
        i = d.useCallback(() => {
            if (null == t) return;
            let e = (0, u.A)(),
                l = N.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, t9.xq)(l, a, n);
        }, [t, a, n]);
    return (0, s.jsxs)(tk.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, s.jsx)(G.$, {
                variant: "primary",
                size: "sm",
                text: "Open Manage Subscription",
                onClick: i,
                disabled: null == t,
            }),
            null != l && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "status-danger", children: l }),
        ],
    });
}
function ln(e) {
    let { flowType: t } = e,
        [l, a] = d.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = lt(),
        o = d.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, u.A)(),
                a = N.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, t9.xq)(a, i, r);
        }, [l, i, r, t]);
    return (0, s.jsxs)(tk.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, s.jsx)(el.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, s.jsx)(G.$, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: o,
            }),
            null != n && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "status-danger", children: n }),
        ],
    });
}
var li = l(342393),
    lr = l(260598),
    lo = l(558179);
let ls = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    ld = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    lu = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    lc = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    },
    lp = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function lm() {
    let [e, t] = d.useState(lp(lu)),
        [l, a] = d.useState(lu),
        [n, i] = d.useState(lp(lc)),
        [r, o] = d.useState(lc),
        [u, c] = d.useState(null),
        [p, m] = d.useState(
            (0, s.jsx)(tk.a8, {
                errorLabel: ls.CONFIGURABLE,
                elementOptions: lu,
                children: (0, s.jsx)(li.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: lc,
                }),
            }),
        );
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: t$.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: t$.cW,
                children: [
                    (0, s.jsx)("b", { children: "elements.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tk.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: t$.PC,
                children: (0, s.jsx)(lr.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: t$.cW,
                children: [
                    (0, s.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tk.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tk.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: t$.PC,
                children: (0, s.jsx)(lr.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: n,
                    onChange: i,
                    rows: 7,
                }),
            }),
            null != u && (0, s.jsx)(y.E, { variant: "text-md/normal", color: "text-feedback-critical", children: u }),
            (0, s.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: t$.Ut,
                children: (0, s.jsx)(G.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: () => {
                        try {
                            let t = JSON.parse(e),
                                l = JSON.parse(n);
                            m(null),
                                m(
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsxs)(y.E, {
                                                variant: "text-md/normal",
                                                className: t$.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, s.jsx)(tk.a8, {
                                                errorLabel: ls.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, s.jsx)(li.ExpressCheckoutElement, {
                                                    onConfirm: (e) => {
                                                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                    },
                                                    options: l,
                                                }),
                                            }),
                                        ],
                                    }),
                                ),
                                a(t),
                                o(l),
                                c(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                c("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, s.jsx)(y.E, { variant: "text-md/normal", className: t$.cW, children: "Current Element Options:" }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lo.A, { className: t$.wD, children: `\`\` ${lp(l)} \`\`` }),
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                className: t$.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lo.A, { className: t$.wD, children: `\`\` ${lp(r)} \`\`` }),
            }),
            p,
        ],
    });
}
let lb = {
    title: "Miscellaneous",
    stories: [
        tF,
        {
            name: "Redirect To Standalone",
            id: "standalone-redirect",
            component: function () {
                let [e, t] = d.useState(!1),
                    [l, a] = d.useState(t7.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
                    n = d.useCallback((e) => {
                        t(e);
                    }, []),
                    i = e ? l : void 0;
                return (0, s.jsxs)(tk.wn, {
                    children: [
                        (0, s.jsx)(te.D, { variant: "heading-xl/semibold", children: "Redirect To Standalone" }),
                        (0, s.jsx)(tk.nB, {}),
                        (0, s.jsxs)(Z.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, s.jsx)(t4.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                (0, s.jsx)(ee.l, {
                                    label: "Flow Type",
                                    value: l,
                                    options: le,
                                    onSelectionChange: a,
                                    selectionMode: "single",
                                    disabled: !e,
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                        (0, s.jsx)(y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: "Some link outs require enabling the flow type to work.",
                        }),
                        (0, s.jsx)(ll, { flowType: i }),
                        (0, s.jsx)(la, { flowType: i }),
                        (0, s.jsx)(ln, { flowType: i }),
                    ],
                });
            },
        },
        {
            name: "Order SKU",
            component: function () {
                return (0, s.jsx)(j.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsx)(t0, {}),
                });
            },
            id: "order-sku-test",
            controls: {},
        },
        {
            name: "Payment Request",
            component: function (e) {
                let { paymentRequestWallet: t } = e;
                return (0, s.jsx)(j.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tk.wn, {
                        children: [
                            (0, s.jsx)(te.D, { variant: "heading-xl/semibold", children: "Payment Request" }),
                            (0, s.jsx)(tk.Hq, {
                                label: "Default View",
                                children: (0, s.jsx)(t3, { paymentRequestWallet: t }),
                            }),
                            (0, s.jsx)(tk.Hq, {
                                label: "Connector View",
                                children: (0, s.jsx)(t3, { paymentRequestWallet: t, renderConnectorView: !0 }),
                            }),
                            (0, s.jsx)(tk.Hq, {
                                label: "Add Payment Step Body Connector View",
                                children: (0, s.jsx)(t8, { paymentRequestWallet: t }),
                            }),
                        ],
                    }),
                });
            },
            id: "payment-request",
            controls: {
                paymentRequestWallet: {
                    label: "Payment Request Wallet",
                    type: "select",
                    options: [
                        { value: "googlePay", label: "Google Pay" },
                        { value: "applePay", label: "Apple Pay" },
                    ],
                    defaultValue: "googlePay",
                },
            },
        },
        {
            name: "Choose Payment Source Type",
            id: "choose-payment-source-type",
            component: function (e) {
                let { isEligibleForTrial: t, onlyStripeCardEnabled: l, paymentRequestWalletsEnabled: a } = e,
                    n = {
                        onChooseType: () => {},
                        onStripePaymentMethodReceived: (e) => {
                            console.log("onStripePaymentMethodReceived called: ", e);
                        },
                        isEligibleForTrial: t,
                        paymentRequestWallets: a ? ["googlePay", "applePay"] : [],
                        paymentSourceTypeRestrictions: l ? [tH.he.CARD.valueOf()] : null,
                    };
                return (0, s.jsx)(j.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tk.wn, {
                        children: [
                            (0, s.jsx)(te.D, {
                                variant: "heading-xl/semibold",
                                children: "Choose Payment Source Type",
                            }),
                            (0, s.jsx)(tk.e_, {
                                className: t$.Bt,
                                children: (0, s.jsx)("div", { className: t$.VS, children: (0, s.jsx)(tG.A, { ...n }) }),
                            }),
                        ],
                    }),
                });
            },
            controls: {
                isEligibleForTrial: { label: "Is Eligible for Trial", type: "boolean", defaultValue: !1 },
                onlyStripeCardEnabled: { label: "Only Stripe Card Enabled", type: "boolean", defaultValue: !1 },
                paymentRequestWalletsEnabled: {
                    label: "Payment Request Wallets Enabled",
                    type: "boolean",
                    defaultValue: !0,
                },
            },
        },
        {
            name: "Stripe Components",
            id: "stripe-components",
            component: function () {
                return (0, s.jsx)(j.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tk.wn, {
                        children: [
                            (0, s.jsx)(te.D, {
                                variant: "heading-xl/semibold",
                                children: "Stripe Express Checkout Buttons",
                            }),
                            (0, s.jsx)(tk.Hq, {
                                label: ls.DEFAULT,
                                children: (0, s.jsx)("div", {
                                    children: (0, s.jsx)(tk.a8, {
                                        errorLabel: ls.DEFAULT,
                                        children: (0, s.jsx)(li.ExpressCheckoutElement, {
                                            onConfirm: (e) => {
                                                console.log("ExpressCheckoutElement onConfirm event: ", e);
                                            },
                                            options: {},
                                        }),
                                    }),
                                }),
                            }),
                            ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                let t = ls[e];
                                return (0, s.jsx)(
                                    tk.Hq,
                                    {
                                        label: t,
                                        children: (0, s.jsxs)("div", {
                                            children: [
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    className: t$.cW,
                                                    children: "expressCheckoutElement.options:",
                                                }),
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    children: (0, s.jsx)(lo.A, {
                                                        className: t$.wD,
                                                        children: `\`\`${lp(ld[e])} \`\``,
                                                    }),
                                                }),
                                                (0, s.jsx)(tk.a8, {
                                                    errorLabel: t,
                                                    children: (0, s.jsx)(li.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: ld[e],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    },
                                    e,
                                );
                            }),
                            (0, s.jsx)(tk.Hq, { label: ls.CONFIGURABLE, children: (0, s.jsx)(lm, {}) }),
                        ],
                    }),
                });
            },
        },
    ],
};
var lh = l(503698),
    lx = l.n(lh),
    ly = l(683071),
    lg = l(942340),
    lf = l(211528),
    lv = l(626584),
    lE = l(87952),
    lS = l(624479),
    lC = l(408278),
    lj = l(957565),
    lT = l(534472);
let lP = (e) => {
        let { label: t, value: l } = e;
        return (0, s.jsxs)("div", {
            className: lT.I,
            children: [
                (0, s.jsxs)(y.E, { variant: "text-sm/medium", children: [t, ":"] }),
                (0, s.jsx)(y.E, { variant: "text-sm/normal", children: l }),
                (0, s.jsx)(lC.K, {
                    size: "sm",
                    "aria-label": "Copy Link",
                    variant: "icon-only",
                    icon: lS.T,
                    onClick: () => (0, lj.C)(l),
                }),
            ],
        });
    },
    l_ = (e) => {
        let { children: t, stepConfigs: l, bodyClassName: a } = e;
        return (0, s.jsx)(j.PaymentContextProvider, {
            stepConfigs: l,
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsx)("div", { className: a, children: t }),
        });
    };
var lA = l(935377);
let lI = new lv.A("PaymentElement.web.stories"),
    lR = {
        key: m.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, s.jsx)("div", {}),
        options: { renderHeader: !1, hideDefaultModalBody: !0 },
    },
    lk = () => {
        let { elementsAppearanceOptions: e } = (0, lg.E)();
        return (0, s.jsxs)("div", {
            children: [
                (0, s.jsx)(te.D, {
                    variant: "heading-lg/semibold",
                    className: U.tm,
                    children: "Defaults for Current Theme",
                }),
                (0, s.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, l] = e;
                        return (0, s.jsx)(lP, { label: t, value: l }, t);
                    }),
                }),
            ],
        });
    },
    lM = (e) => {
        let {
                theme: t,
                colorText: l,
                colorBackground: a,
                inputBackgroundColor: n,
                tabBackgroundColor: i,
                tabSelectedBackgroundColor: r,
                storyType: o,
            } = e,
            d = (0, lE.A)(),
            { stripePaymentElementProps: u, stripeAddressElementProps: c } = (0, lf.wD)({
                step: m.pn.PAYMENT_ELEMENT,
                handleStepChange: N.tEg,
                onBillingAddressChange: N.tEg,
                paymentElementsEnabled: !0,
                logger: lI,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: p,
                isLoading: b,
                setupError: h,
                customPaymentMethodIdsToSourceTypes: x,
            } = (0, lg.p)({
                onSetupError: (e) => {
                    lI.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: l,
                    colorBackground: a,
                    inputBackgroundColor: n,
                    tabBackgroundColor: i,
                    tabSelectedBackgroundColor: r,
                },
            });
        return b || null != h || null == d
            ? (0, s.jsx)(lf.eR, {})
            : (0, s.jsxs)("div", {
                  children: [
                      (0, s.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, s.jsx)(ly.w, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, s.jsxs)("div", {
                          className: lA.ny,
                          children: [
                              (0, s.jsx)(lk, {}),
                              (0, s.jsx)(l_, {
                                  stepConfigs: [lR],
                                  children: (0, s.jsx)("div", {
                                      className: lx()(lA.o6, "joined-payment-address-elements" === o ? lA.fF : lA.u1),
                                      children: (0, s.jsxs)(li.Elements, {
                                          stripe: d,
                                          options: p,
                                          children: [
                                              "stripe-address-element" === o
                                                  ? (0, s.jsx)("div", {
                                                        className: U.R,
                                                        children: (0, s.jsx)(lf.Wf, {
                                                            ...u,
                                                            customPaymentMethodIdsToSourceTypes: x,
                                                            step: m.pn.PAYMENT_ELEMENT,
                                                        }),
                                                    })
                                                  : (0, s.jsx)(lf.Wf, {
                                                        ...u,
                                                        customPaymentMethodIdsToSourceTypes: x,
                                                        step: m.pn.PAYMENT_ELEMENT,
                                                    }),
                                              ("joined-payment-address-elements" === o ||
                                                  "stripe-address-element" === o) &&
                                                  (0, s.jsx)(lf.KS, {
                                                      ...c,
                                                      billingAddressInfo: {
                                                          email: "",
                                                          name: "",
                                                          country: "",
                                                          line1: "",
                                                          line2: "",
                                                          city: "",
                                                          postalCode: "",
                                                          state: "",
                                                      },
                                                  }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    lN = {
        theme: {
            label: "Theme",
            type: "select",
            options: ["flat", "stripe", "night"].map((e) => ({ label: e.toLocaleUpperCase(), value: e })),
            defaultValue: "flat",
        },
        colorText: { label: "Color Text", type: "text", defaultValue: "#2f3035" },
        colorBackground: { label: "Color Background", type: "text", defaultValue: "#ffffff" },
        inputBackgroundColor: { label: "Input Background Color", type: "text", defaultValue: "#00000014" },
        tabBackgroundColor: { label: "Tab Background Color", type: "text", defaultValue: "#00000014" },
        tabSelectedBackgroundColor: { label: "Tab Selected Background Color", type: "text", defaultValue: "#5865f2" },
    },
    lD = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: (e) => (0, s.jsx)(lM, { ...e, storyType: "joined-payment-address-elements" }),
        controls: { ...lN },
    },
    lO = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: (e) => (0, s.jsx)(lM, { ...e, storyType: "stripe-payment-element" }),
        controls: { ...lN },
    },
    lV = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: (e) => (0, s.jsx)(lM, { ...e, storyType: "stripe-address-element" }),
        controls: { ...lN },
    };
l(321073);
var lL = l(735438),
    lw = l(96337),
    lU = l(997101),
    lB = l(597770),
    lG = l(278416),
    lH = l(606267),
    l$ = l(480642),
    lW = l(944355),
    lF = l(905220),
    lz = l(826469),
    lY = l(812745);
let lq = {
    name: "Primitive: Nitro Plan Select",
    id: "unified-checkout-nitro-plan-select",
    component: (e) => {
        let {
                variant: t,
                leftTitleDescriber: l,
                leftPrimaryText: a,
                leftSubtext: n,
                leftShowSubtext: i,
                leftSubtextStrikethrough: r,
                rightTitleDescriber: o,
                rightPrimaryText: u,
                rightSubtext: c,
                rightShowSubtext: p,
                rightSubtextStrikethrough: m,
            } = e,
            [b, h] = d.useState(0);
        return (0, s.jsxs)("div", {
            className: U.Cd,
            children: [
                (0, s.jsx)(lW.q7, {
                    selection: b,
                    onChange: h,
                    planOptions: [
                        {
                            id: 0,
                            title: (0, s.jsx)(lW.ec, { size: "sm", color: "text-strong", premiumType: t }),
                            titleDescriber: l,
                            primaryText: a,
                            subtext: i ? (0, s.jsx)(lW.Lo, { strikethrough: r, price: n }) : void 0,
                        },
                        {
                            id: 1,
                            title: (0, s.jsx)(lW.ec, { size: "sm", color: "text-strong", premiumType: t }),
                            titleDescriber: o,
                            primaryText: u,
                            subtext: p ? (0, s.jsx)(lW.Lo, { strikethrough: m, price: c }) : void 0,
                        },
                    ],
                }),
                (0, s.jsxs)(y.E, { variant: "text-sm/normal", children: ["Selected plan index: ", b] }),
            ],
        });
    },
    controls: {
        variant: {
            label: "Nitro Variant",
            type: "select",
            defaultValue: eS.PremiumTypes.TIER_2,
            options: [
                { label: "Nitro", value: eS.PremiumTypes.TIER_2 },
                { label: "Nitro Basic", value: eS.PremiumTypes.TIER_0 },
            ],
        },
        leftTitleDescriber: { label: "Left Card - Title Describer", type: "text", defaultValue: "yearly" },
        leftPrimaryText: { label: "Left Card - Primary Text", type: "text", defaultValue: "$99.99" },
        leftSubtext: { label: "Left Card - Subtext", type: "text", defaultValue: "$119.99" },
        leftShowSubtext: { label: "Left Card - Show Subtext", type: "boolean", defaultValue: !0 },
        leftSubtextStrikethrough: { label: "Left Card - Subtext Strikethrough", type: "boolean", defaultValue: !0 },
        rightTitleDescriber: { label: "Right Card - Title Describer", type: "text", defaultValue: "monthly" },
        rightPrimaryText: { label: "Right Card - Primary Text", type: "text", defaultValue: "$9.99" },
        rightSubtext: { label: "Right Card - Subtext", type: "text", defaultValue: "$11.99" },
        rightShowSubtext: { label: "Right Card - Show Subtext", type: "boolean", defaultValue: !1 },
        rightSubtextStrikethrough: { label: "Right Card - Subtext Strikethrough", type: "boolean", defaultValue: !1 },
    },
};
function lK(e) {
    let { label: t, giftCardsEnabled: l, disabled: a, hidePersonalInformation: n } = e,
        i = (0, x.bG)([tq.A], () => Object.values(tq.A.paymentSources)),
        [r, o] = d.useState(void 0);
    d.useEffect(() => {
        (0, er.$o)();
    }, []);
    let u = d.useMemo(() => i.map((e) => new lz.A(e, !0, [])), [i]),
        {
            dropdownPaymentSources: c,
            dropdownPaymentSourceId: p,
            handleDropdownPaymentSourceChange: m,
            giftCardCheckboxProps: b,
            walletCoversSubtotal: h,
        } = (0, lH.Y0)({
            checkoutPaymentSources: u,
            paymentSourceId: r,
            setPaymentSourceId: o,
            location: "revenue_playground",
        });
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(lW.nL, {
                label: t,
                giftCardsEnabled: l,
                giftCardCheckboxProps: b,
                paymentSourceDropdownProps: {
                    selectedPaymentSourceId: p,
                    paymentSources: c,
                    hidePersonalInformation: n,
                    onChange: m,
                },
                showCheckboxAboveDropdown: h,
                disabled: a,
            }),
            (0, s.jsxs)(y.E, { variant: "text-sm/normal", children: ["Effective payment source: ", r ?? "None"] }),
        ],
    });
}
let lJ = { "nitro-wheel": r.t, gift: lB.o, orbs: i.C },
    lX = lw.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    lQ = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? lG.g : void 0;
            return (0, s.jsxs)(Z.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, s.jsx)(G.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, ei.openModal)(
                                (e) =>
                                    (0, s.jsx)(l$.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? lJ[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, s.jsx)(Z.B, {
                                            gap: 16,
                                            children: (0, s.jsx)("div", {
                                                style: { border: "1px solid blue", height: 500 },
                                                children: "The Unified Checkout step content will go here.",
                                            }),
                                        }),
                                    }),
                                { dismissable: n.dismissable },
                            ),
                    }),
                ],
            });
        },
        controls: {
            title: { label: "Title", type: "text", defaultValue: "Checkout" },
            primaryButtonText: { label: "Primary Button Text", type: "text", defaultValue: "Get Nitro Yearly" },
            primaryButtonIcon: {
                label: "Primary Button Icon",
                type: "select",
                defaultValue: "nitro-wheel",
                options: [
                    { label: "Nitro Wheel", value: "nitro-wheel" },
                    { label: "Gift", value: "gift" },
                    { label: "Orbs", value: "orbs" },
                    { label: "None", value: "none" },
                ],
            },
            countryCode: { label: "Country Code", type: "select", defaultValue: lU.d.US, options: lX },
            headerBadgeText: { label: "Header Pill Text", type: "text", defaultValue: "PROMO" },
            headerBadgeHasIcon: { label: "Header Badge Has Icon", type: "boolean", defaultValue: !1 },
            gradientColor: {
                label: "Gradient Color",
                type: "select",
                defaultValue: "nitro-pink",
                options: [
                    { label: "Nitro Pink", value: "nitro-pink" },
                    { label: "Nitro Green", value: "nitro-green" },
                    { label: "Purple", value: "purple" },
                    { label: "Blue", value: "blue" },
                ],
            },
            dismissable: { label: "Dismissable", type: "boolean", defaultValue: !0 },
        },
    },
    lZ = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: N.Yri.USD,
        interval: eS.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    l0 = {
        [lW.I0.Subscription]: { type: lW.I0.Subscription, ...lZ },
        [lW.I0.SubscriptionTrial]: { type: lW.I0.SubscriptionTrial, ...lZ },
        [lW.I0.OrbsRedemption]: { type: lW.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [lW.I0.Shop]: { type: lW.I0.Shop, purchaseButtonText: "Purchase" },
        [lW.I0.GiftNitro]: { type: lW.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [lW.I0.GiftShop]: { type: lW.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [lW.I0.GiftGameShop]: {
            type: lW.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
        },
    },
    l1 = {
        title: "Unified Checkout",
        stories: [
            lQ,
            {
                name: "Primitive: Order Summary Accordion",
                id: "unified-checkout-order-summary",
                component: (e) => {
                    let { label: t, hasDiscount: l, hasLineItems: a } = e,
                        n = a
                            ? [
                                  { id: 1, label: "Nitro Basic (Monthly)", amount: 299 },
                                  { id: 2, label: "Server Boost", amount: 499 },
                              ]
                            : [];
                    return (
                        l && a && n.push({ id: 3, label: "Discount Applied", amount: -100 }),
                        (0, s.jsx)("div", {
                            className: U.SG,
                            children: (0, s.jsx)(lW.Vm, { label: t, lineItems: n, currency: N.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            lq,
            {
                name: "Primitive: Subscription Details Accordion",
                id: "unified-checkout-subscription-details",
                component: (e) => {
                    let { label: t, hasLineItems: l } = e,
                        a = l
                            ? [
                                  {
                                      id: 1,
                                      label: "Nitro Basic",
                                      amount: 299,
                                      tooltip:
                                          "You are purchasing a plan change. Your server boosts are being updated accordingly.",
                                  },
                                  { id: 2, label: "Server Boost", amount: 499, icon: (0, s.jsx)(r.t, { size: "xs" }) },
                              ]
                            : [];
                    return (0, s.jsx)("div", {
                        className: U.SG,
                        children: (0, s.jsx)(lW._D, {
                            label: t,
                            lineItems: a,
                            intervalType: eS.WT.MONTH,
                            intervalCount: 1,
                            currency: N.Yri.USD,
                        }),
                    });
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Subscription Details" },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            {
                name: "Primitive: Purchase Item",
                id: "unified-checkout-purchase-item",
                component: (e) => {
                    let {
                        header: t,
                        showHeader: l,
                        label: a,
                        description: n,
                        price: i,
                        hasPriceIcon: o,
                        hasStrikethroughPrice: d,
                        strikethroughPrice: u,
                        targetType: c,
                    } = e;
                    function p(e, p) {
                        let m = eq.default.getCurrentUser(),
                            b = ev.A.getGuildsArray()[0];
                        return (0, s.jsx)(lW.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${a} ${p}`,
                            description: n,
                            price: i,
                            PriceIcon: o ? r.t : void 0,
                            priceSubText: d ? u : void 0,
                            priceSubTextHasStrikethrough: d,
                            graphic: (0, s.jsx)(e, {}),
                            target:
                                "gift" === c
                                    ? { type: "gift", user: m }
                                    : "guildSubscription" === c
                                      ? { type: "guildSubscription", guild: b }
                                      : void 0,
                        });
                    }
                    return (0, s.jsxs)("div", {
                        className: U.SG,
                        children: [
                            p(lW.JW, "Nitro"),
                            p(lW.DH, "Nitro Basic"),
                            p(lW.a6, "Boost"),
                            p(lW.jw, "App"),
                            p(lW.oo, "Nitro Credit"),
                        ],
                    });
                },
                controls: {
                    header: { label: "Header", type: "text", defaultValue: "Marvel Rivals" },
                    showHeader: { label: "Show Header", type: "boolean", defaultValue: !1 },
                    label: { label: "Label", type: "text", defaultValue: "1 Month of" },
                    description: { label: "Description", type: "text", defaultValue: "This is describing the item" },
                    price: { label: "Price", type: "text", defaultValue: "$9.99" },
                    hasPriceIcon: { label: "Has Price Icon", type: "boolean", defaultValue: !1 },
                    hasStrikethroughPrice: { label: "Has Strikethrough Price", type: "boolean", defaultValue: !1 },
                    strikethroughPrice: { label: "Strikethrough Price", type: "text", defaultValue: "$12.99" },
                    targetType: {
                        label: "Target Type",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Gift", value: "gift" },
                            { label: "Guild Subscription", value: "guildSubscription" },
                        ],
                    },
                },
            },
            {
                name: "Primitive: Payment Select",
                id: "unified-checkout-payment-select",
                component: (e) => {
                    let { disabled: t, error: l, errorMessage: a } = e,
                        n = [
                            { id: "visa-1234", label: "Visa ending in 1234", icon: lY.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: lY.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: lY.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: lY.Be.AMEX },
                        ],
                        [i, r] = d.useState(n[0].id);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(lW.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: lL.noop,
                                disabled: t,
                                error: l ? a : void 0,
                            }),
                            (0, s.jsxs)(y.E, {
                                variant: "text-sm/normal",
                                children: ["Selected payment: ", i ?? "None"],
                            }),
                        ],
                    });
                },
                controls: {
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    error: { label: "Show Error", type: "boolean", defaultValue: !1 },
                    errorMessage: {
                        label: "Error Message",
                        type: "text",
                        defaultValue: "Please select a valid payment method",
                    },
                },
            },
            {
                name: "Primitive: Payment Source Selector",
                id: "unified-checkout-payment-source-selector",
                component: (e) =>
                    (0, s.jsx)(eh.mz, {
                        stepConfigs: [],
                        children: (0, s.jsx)(lF.P, { children: (0, s.jsx)(lK, { ...e }) }),
                    }),
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Payment Method" },
                    giftCardsEnabled: { label: "Gift Cards Enabled", type: "boolean", defaultValue: !0 },
                    disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                    hidePersonalInformation: { label: "Hide Personal Information", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Primitive: Legal Copy",
                id: "unified-checkout-legal-copy",
                component: function (e) {
                    let { type: t, immediateDelivery: l, paysafecard: a } = e,
                        [n, i] = d.useState(!1);
                    return (0, s.jsx)(lW._P, {
                        variant: l0[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? N.hes.PAYSAFE_CARD : N.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: lW.I0.Subscription,
                        options: [
                            { label: "Subscription", value: lW.I0.Subscription },
                            { label: "Subscription Trial", value: lW.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: lW.I0.OrbsRedemption },
                            { label: "Shop", value: lW.I0.Shop },
                            { label: "Nitro Gift", value: lW.I0.GiftNitro },
                            { label: "Shop Gift", value: lW.I0.GiftShop },
                            { label: "Game Shop Gift", value: lW.I0.GiftGameShop },
                        ],
                    },
                    immediateDelivery: { label: "Immediate Delivery", type: "boolean", defaultValue: !1 },
                    paysafecard: { label: "Paysafecard", type: "boolean", defaultValue: !1 },
                },
            },
            {
                name: "Primitive: Gift Redemption Link",
                id: "unified-checkout-gift-redemption-link",
                component: function () {
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Stateless Component:" }),
                            (0, s.jsx)(lW.y, { onClick: N.tEg }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, s.jsx)(lW.Z4, { onComplete: N.tEg }),
                        ],
                    });
                },
            },
            {
                name: "Primitive: Plan Radio Group",
                id: "unified-checkout-plan-radio-group",
                component: function () {
                    let [e, t] = d.useState("yearly");
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)(lW.me, {
                            headingComponent: (0, s.jsx)(lW.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: eS.PremiumTypes.TIER_2,
                            }),
                            planRadioOptions: [
                                { primaryText: "Yearly", subText: "$99.99", badgeText: "SAVE 16%", value: "yearly" },
                                { primaryText: "Monthly", subText: "$99.99", value: "monthly" },
                            ],
                            value: e,
                            onChange: (e) => t(e.value),
                        }),
                    });
                },
            },
            {
                name: "Primitive: Store Country Row",
                id: "checkout-store-country-row",
                component: (e) => {
                    let { storeCountry: t } = e;
                    return (0, s.jsx)(lW.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: lU.d.US, options: lX },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: (e) => {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, s.jsx)(lW.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: lU.d.US,
                        options: lX,
                    },
                    relocationCurrencyCode: { label: "Relocation Currency Code", type: "text", defaultValue: "USD" },
                    willForfeitGiftCardBalance: {
                        label: "Will Forfeit Gift Card Balance",
                        type: "boolean",
                        defaultValue: !0,
                    },
                },
            },
        ],
    };
var l2 =
    (((a = {}).PAYMENTS = "payments"),
    (a.VIRTUAL_CURRENCY = "virtual-currency"),
    (a.NITRO = "nitro"),
    (a.IDENTITY = "identity"),
    a);
let l6 = ["Revenue Storybook", "Revenue Playground"],
    l3 = {
        id: "payments",
        name: "Payments",
        groups: [
            eA,
            l1,
            {
                title: "Gift Card",
                stories: [
                    {
                        name: "Redemption Modal",
                        id: "gift-card-redemption-modal",
                        component: function () {
                            return (0, s.jsxs)(Z.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                                    }),
                                    (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Redemption Modal",
                                        onClick: () =>
                                            (0, e5.HF)({
                                                withRedemptionSuccessModal: !0,
                                                onComplete: () => {},
                                                onClose: () => {},
                                            }),
                                    }),
                                ],
                            });
                        },
                    },
                    {
                        name: "Success Modal",
                        id: "gift-card-redemption-success-modal",
                        component: function () {
                            return (0, s.jsxs)(Z.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption success modal (post-redemption).",
                                    }),
                                    (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Success Modal",
                                        onClick: () =>
                                            (0, e5.cV)({
                                                amountRedeemed: 5e3,
                                                currencyCode: N.Yri.USD,
                                                onClose: () => {},
                                            }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
            { title: "Payment Elements", stories: [lO, lV, lD] },
            {
                title: "Add Payment (Legacy Checkout)",
                stories: [
                    {
                        name: "Add Payment Step",
                        id: "add-payment-step",
                        component: () => {
                            let { analyticsLocations: e } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                                t = d.useMemo(() => (0, u.A)(), []),
                                l = d.useCallback(() => {}, []);
                            return (0, s.jsx)(
                                M,
                                {
                                    stepConfigs: D,
                                    analyticsLocations: e,
                                    applicationId: N.FYj,
                                    initialPlanId: void 0,
                                    skuId: null,
                                    isGift: !1,
                                    loadId: t,
                                    purchaseType: N.VVm.ONE_TIME,
                                    disablePurchases: !0,
                                    excludeSubscriptionPlansBySKU: !0,
                                    renderHeader: () => null,
                                    onClose: l,
                                    onComplete: () => {},
                                },
                                `${t}`,
                            );
                        },
                        controls: {},
                    },
                ],
            },
            { title: "Checkout Review Step", stories: [ew, eU] },
            lb,
        ],
        tags: l6,
        IconComponent: n.d,
    },
    l8 = {
        id: "virtual-currency",
        name: "Virtual Currency",
        groups: [
            { title: "Balance Widget Pill", stories: [W, F] },
            {
                title: "Balance Widget",
                stories: [
                    {
                        name: "Balance Widget Card",
                        id: "balance-widget-card",
                        component: (e) => {
                            let { ctaText: t, linkText: l, linkPreText: a } = e;
                            return (0, s.jsx)(O.b, {
                                ctaText: (0, L.uJ)(t) ? w.intl.string(w.t.H57f41) : t,
                                linkText: (0, L.uJ)(l) ? w.intl.string(w.t["7f4H7D"]) : l,
                                linkPreText: (0, L.uJ)(a) ? void 0 : a,
                                ctaOnClick: N.tEg,
                            });
                        },
                        controls: {
                            ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
                            linkText: { label: "Link Text", type: "text", defaultValue: "" },
                            linkPreText: { label: "Link Pre Text", type: "text", defaultValue: "" },
                        },
                    },
                    B,
                ],
            },
            { title: "Orb Checkout", stories: [tU] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, tB.A)();
                            return (0, s.jsxs)("div", {
                                className: U.YG,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "text-md/normal",
                                        color: "text-feedback-info",
                                        style: { marginBottom: "8px" },
                                        children: "Use this to reset your user's DCF Orb Onboarding state.",
                                    }),
                                    (0, s.jsx)(G.$, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                                ],
                            });
                        },
                        controls: {},
                    },
                ],
            },
        ],
        tags: l6,
        IconComponent: i.C,
    },
    l4 = {
        id: "nitro",
        name: "Nitro",
        groups: [
            th,
            { title: "Marketing Home", stories: [tj] },
            tI,
            {
                title: "Nitro Upsells",
                stories: [
                    {
                        name: "Burst Reactions Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await Promise.resolve().then(l.bind(l, 507545));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Burst Reactions Upsell",
                                }),
                            });
                        },
                        id: "burst-reactions-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium For Later Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("22540"), l.e("63238")]).then(
                                        l.bind(l, 530951),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium For Later Upsell",
                                }),
                            });
                        },
                        id: "premium-for-later-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Profile Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("41704"),
                                    ]).then(l.bind(l, 562011));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium Profile Upsell",
                                }),
                            });
                        },
                        id: "premium-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Message Length Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("35257"), l.e("66920")]).then(
                                        l.bind(l, 220763),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium Message Length Upsell",
                                }),
                            });
                        },
                        id: "premium-message-length-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Message Length Roadblock Upsell",
                        component: function () {
                            let [e] = d.useState("This is a sample long message that exceeds the character limit."),
                                t = d.useCallback(() => {
                                    (0, ei.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([l.e("35257"), l.e("76725")]).then(
                                            l.bind(l, 798612),
                                        );
                                        return (l) => (0, s.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: t,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Premium Message Length Roadblock Upsell",
                                }),
                            });
                        },
                        id: "premium-message-length-roadblock-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Profile Decoration Upsell",
                        component: function () {
                            let [e, t] = d.useState(eS.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = d.useCallback(() => {
                                    let { title: t, body: a } = tD[e];
                                    (0, ei.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                            l.bind(l, 393027),
                                        );
                                        return (l) =>
                                            (0, s.jsx)(n, {
                                                premiumUpsellType: e,
                                                title: t,
                                                body: a,
                                                onSecondaryClick: () => l.onClose(),
                                                ...l,
                                            });
                                    });
                                }, [e]);
                            return (0, s.jsxs)(tk.LB, {
                                children: [
                                    (0, s.jsx)(tk.MG, {
                                        children: (0, s.jsx)(ee.l, {
                                            label: "Upsell Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tN,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(G.$, {
                                        onClick: a,
                                        variant: "primary",
                                        size: "md",
                                        text: "Open Profile Decoration Upsell",
                                    }),
                                ],
                            });
                        },
                        id: "premium-profile-decoration-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Guild Cap Upsell",
                        component: function () {
                            let [e, t] = d.useState(100),
                                a = d.useCallback(() => {
                                    (0, ei.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            l.e("2125"),
                                            l.e("66901"),
                                            l.e("56430"),
                                        ]).then(l.bind(l, 39613));
                                        return (l) =>
                                            (0, s.jsx)(t, {
                                                guildCount: e,
                                                analyticsSource: {},
                                                analyticsLocation: {},
                                                analyticsLocations: [],
                                                ...l,
                                            });
                                    });
                                }, [e]);
                            return (0, s.jsxs)(tk.LB, {
                                children: [
                                    (0, s.jsx)(tk.MG, {
                                        children: (0, s.jsx)(ee.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tO,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(G.$, {
                                        onClick: a,
                                        variant: "primary",
                                        size: "md",
                                        text: "Open Guild Cap Upsell",
                                    }),
                                ],
                            });
                        },
                        id: "premium-guild-cap-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Animated Profile Upsell",
                        component: function () {
                            let [e, t] = d.useState(tM.HL.AVATAR),
                                a = (0, q.bG)([eq.default], () => eq.default.getCurrentUser()),
                                n = d.useCallback(() => {
                                    null != a &&
                                        (0, ei.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("93513"), l.e("79149")]).then(
                                                l.bind(l, 688796),
                                            );
                                            return (l) => (0, s.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, s.jsxs)(tk.LB, {
                                children: [
                                    (0, s.jsx)(tk.MG, {
                                        children: (0, s.jsx)(ee.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tV,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(G.$, {
                                        onClick: n,
                                        variant: "primary",
                                        size: "md",
                                        text: "Open Animated Profile Upsell",
                                    }),
                                ],
                            });
                        },
                        id: "premium-animated-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Try It Out Profile Upsell",
                        component: function () {
                            let e = (0, q.bG)([eq.default], () => eq.default.getCurrentUser()),
                                t = d.useCallback(() => {
                                    null != e &&
                                        (0, ei.openModalLazy)(async () => {
                                            let { default: e } = await l.e("35476").then(l.bind(l, 835071));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: t,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Try It Out Profile Upsell",
                                }),
                            });
                        },
                        id: "premium-try-it-out-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Video Backgrounds Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("40716"),
                                    ]).then(l.bind(l, 629959));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Video Backgrounds Upsell",
                                }),
                            });
                        },
                        id: "premium-video-backgrounds-upsell",
                        controls: {},
                    },
                    {
                        name: "Premium Guild Member Profile Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("61129"),
                                    ]).then(l.bind(l, 475312));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Guild Member Profile Upsell",
                                }),
                            });
                        },
                        id: "premium-guild-member-profile-upsell",
                        controls: {},
                    },
                    {
                        name: "HD Streaming Roadblock",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let { default: e } = await l.e("93475").then(l.bind(l, 366638));
                                    return (t) => (0, s.jsx)(e, { handleLearnMore: () => {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open HD Streaming Roadblock",
                                }),
                            });
                        },
                        id: "hd-streaming-roadblock",
                        controls: {},
                    },
                    {
                        name: "Emoji Picker Premium Upsell",
                        component: function () {
                            let e = d.useCallback(() => {
                                (0, ei.openModalLazy)(async () => {
                                    let [{ default: e }, { EmojiIntention: t }] = await Promise.all([
                                        Promise.resolve().then(l.bind(l, 148361)),
                                        Promise.resolve().then(l.bind(l, 307731)),
                                    ]);
                                    return (l) =>
                                        (0, s.jsx)(e, {
                                            onUpsellClicked: () => {},
                                            onClose: l.onClose,
                                            channel: null,
                                            emojiDescriptor: void 0,
                                            pickerIntention: t.CHAT,
                                            analyticsLocation: {},
                                        });
                                });
                            }, []);
                            return (0, s.jsx)(tk.LB, {
                                children: (0, s.jsx)(G.$, {
                                    onClick: e,
                                    variant: "primary",
                                    size: "md",
                                    text: "Open Emoji Picker Premium Upsell",
                                }),
                            });
                        },
                        id: "emoji-picker-premium-upsell",
                        controls: {},
                    },
                ],
            },
            { title: "Clips", stories: [eQ] },
        ],
        tags: l6,
        IconComponent: r.t,
    },
    l9 = {
        id: "identity",
        name: "Identity",
        groups: [
            e6,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = d.useState(""),
                                a = (0, q.bG)([eq.default], () => eq.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, s.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, s.jsx)(e3.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e7,
                                          }),
                                          (0, s.jsx)(e8.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-button",
                    },
                    {
                        name: "Avatar Decoration Button",
                        component: function (e) {
                            let [t, l] = d.useState(""),
                                a = (0, q.bG)([eq.default], () => eq.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, s.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, s.jsx)(e3.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e7,
                                          }),
                                          (0, s.jsx)(e4.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-decoration-button",
                    },
                    {
                        name: "Nameplate Button",
                        component: function (e) {
                            let [t, l] = d.useState(""),
                                a = (0, q.bG)([eq.default], () => eq.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, s.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, s.jsx)(e3.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e7,
                                          }),
                                          (0, s.jsx)(e9.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
        ],
        tags: l6,
        IconComponent: o.n,
    },
    l7 = { playgroundBaseUrl: "revenue", collections: [l3, l8, l4, l9] };
