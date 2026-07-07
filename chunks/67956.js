l.r(t),
    l.d(t, {
        nitroCollection: () => an,
        virtualCurrencyCollection: () => aa,
        playgroundConfig: () => ar,
        identityCollection: () => ai,
        RevenuePlaygroundCollectionId: () => ae,
        paymentsCollection: () => al,
    });
var a,
    n = l(700623),
    i = l(318254),
    r = l(403581),
    o = l(950305),
    s = l(627968),
    u = l(64700),
    d = l(835245),
    c = l(793574),
    p = l(688810),
    m = l(166532),
    b = l(735305),
    h = l(635358),
    x = l(702841),
    y = l(834730),
    f = l(349288),
    v = l(231723),
    g = l(228366),
    E = l(830382),
    S = l(73825),
    C = l(171835),
    j = l(937008),
    T = l(491057),
    P = l(829850),
    I = l(97352),
    A = l(67480),
    _ = l(26279);
let R = (e) => {
    let { skuId: t, isGift: l, applicationId: a } = e,
        { analyticsLocations: n } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
        i = u.useRef(null),
        r = u.useRef(null),
        [o, s] = u.useState(() => (0, d.A)());
    u.useEffect(() => {
        (i.current !== t || r.current !== l) && (s((0, d.A)()), (i.current = t), (r.current = l));
    }, [t, l]);
    let [m, b] = (0, x.yK)([A.A], () => [A.A.isFetching(t), A.A.get(t)]);
    return (
        u.useEffect(() => {
            null != b || m || (0, E.EX)(a, t, h.g.VARIANTS_GROUP).catch((e) => {});
        }, [a, t, b, m]),
        {
            loadId: o,
            analyticsLocations: n,
            handleClose: u.useCallback((e) => {}, []),
            handleComplete: u.useCallback(() => {}, []),
            isFetching: m,
            sku: b,
            skuId: t,
            isGift: l,
        }
    );
};
function k(e) {
    return (0, s.jsxs)("div", {
        style: { padding: 20 },
        children: [
            (0, s.jsx)(y.E, { variant: "text-md/normal", children: e.text }),
            (0, s.jsx)("div", {
                style: { marginTop: 16 },
                children: (0, s.jsx)(f.Anchor, {
                    onClick: () => e.handleStepChange(e.originStep),
                    children: "\u2190 Go Back",
                }),
            }),
        ],
    });
}
function M(e) {
    let {
            analyticsLocations: t,
            applicationId: l,
            skuId: a,
            isGift: n,
            onClose: i,
            onComplete: r,
            initialPlanId: o,
            purchaseType: u,
            stepConfigs: d,
            loadId: c,
            excludeSubscriptionPlansBySKU: p,
            renderHeader: m,
            disablePurchases: b,
        } = e,
        h = `${a}-${n}-${c}`;
    return (0, s.jsx)(
        C.M,
        {
            stepConfigs: d,
            applicationId: l,
            skuIDs: null != a ? [a] : [],
            isGift: n,
            activeSubscription: null,
            purchaseType: u,
            excludeSubscriptionPlansBySKU: p,
            overrideCustomCheckoutFlow: b ? _.uH.DEV_STORYBOOK_CHECKOUT : void 0,
            children: (0, s.jsx)(T.Qt, {
                children: (0, s.jsx)(j.dX, {
                    isGift: n,
                    children: (0, s.jsx)(
                        P.q,
                        {
                            transitionState: v.ip.ENTERED,
                            onClose: i,
                            onComplete: r,
                            applicationId: l,
                            skuId: a,
                            initialPlanId: o,
                            analyticsLocations: t,
                            renderHeader: m,
                        },
                        h,
                    ),
                }),
            }),
        },
        h,
    );
}
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
var V = l(162097),
    O = l(70926),
    L = l(240248),
    w = l(375708),
    U = l(439519);
let B = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: function (e) {
        let { ctaText: t, linkText: l, showNotificationBadge: a, cardAlignment: n } = e;
        return (0, s.jsx)("div", {
            className: U.tH,
            children: (0, s.jsx)(O.SS, {
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
                { label: "Start", value: O.cP.START },
                { label: "End", value: O.cP.END },
            ],
            defaultValue: O.cP.START,
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
                [n, i] = (0, u.useState)(a.balance);
            return (
                (0, u.useEffect)(() => {
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
                [n, i] = (0, u.useState)(a.balance);
            return (
                (0, u.useEffect)(() => {
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
var Y = l(488428),
    z = l(20742),
    q = l(17928),
    K = l(990078),
    J = l(862482),
    X = l(364522),
    Q = l(331322),
    Z = l(691885),
    ee = l(404778),
    et = l(292666),
    el = l(270003),
    ea = l(289873),
    en = l(192308),
    ei = l(534514),
    er = l(277984),
    eo = l(529427),
    es = l(669874),
    eu = l(541689),
    ed = l(944304),
    ec = l(300233),
    ep = l(599941),
    em = l(162093),
    eb = l(4630),
    eh = l(482132),
    ex = l(615310),
    ey = l(532794),
    ef = l(216678),
    ev = l(194509),
    eg = l(410516),
    eE = l(794400),
    eS = l(761705),
    eC = l(71393),
    ej = l(166403),
    eT = l(202541),
    eP = l(705018);
function eI(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, ep.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, s.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, s.jsx)(em.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let eA = "checkout-error-boundary-test-modal";
function e_() {
    let { setStep: e } = (0, ex.Ay)();
    return (0, s.jsx)(eh.dZ, {
        children: (0, s.jsxs)(Q.B, {
            direction: "vertical",
            gap: 8,
            fullWidth: !1,
            children: [
                (0, s.jsx)(y.E, {
                    variant: "text-sm/normal",
                    children:
                        "PaymentModal Step within CheckoutRootProvider loaded. Click below to navigate to a mock error step that will throw \u2014 the CheckoutErrorBoundary baked into CheckoutRootProvider will catch it.",
                }),
                (0, s.jsx)(G.$, { variant: "primary", text: "Navigate to Error Step", onClick: () => e(m.pn.REVIEW) }),
            ],
        }),
    });
}
function eR(e) {
    let { errorType: t = "mock-error", errorHandlingBehavior: l } = e;
    switch (t) {
        case "mock-error":
            throw Error("Simulated error thrown inside a payment step");
        case "checkout-error":
            throw new es.v({
                message: "Simulated CheckoutError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "revenue-error":
            throw new eE.v({
                message: "Simulated RevenueError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "translation-key-error":
            return (0, s.jsx)("div", {
                children: w.intl.format(eP.default.cRB332, {
                    avatar: (0, s.jsx)("div", { children: "Sample Avatar" }),
                    nickname: (0, s.jsx)("div", { children: "Sample Nickname" }),
                    username: (0, s.jsx)("div", { children: "Sample Username" }),
                }),
            });
        default:
            return (0, s.jsx)("div", { children: "Unknown error type" });
    }
}
let ek = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: function () {
                let [e, t] = u.useState(eT.pe.TIER_2),
                    [l, a] = u.useState(null),
                    n = (0, q.yK)([eC.A], () => eC.A.getGuildsArray()),
                    [i] = (0, q.yK)([ej.A], () => [ej.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, m] = u.useState(r.length > 0 ? r[0].value : null),
                    [b, h] = u.useState(""),
                    [x, v] = u.useState({ plan_id: eT.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    g = "true" !== x.gift && null != i,
                    [E, C] = u.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: j } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                    [T, P] = u.useState(""),
                    [I, A] = u.useState(N.dJq),
                    { balance: _, isFetching: R, error: k } = (0, eS.W)(),
                    { isSubmitting: M, responseMessage: D, redeemVirtualCurrency: V } = (0, eS.Q)(),
                    [O, L] = u.useState(N.dJq),
                    [w, B] = u.useState(""),
                    [$, W] = u.useState(N.dJq);
                return (0, s.jsx)(p.f5, {
                    value: j,
                    children: (0, s.jsx)(X.Ip, {
                        className: U.XG,
                        children: (0, s.jsxs)(Q.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, s.jsxs)(Q.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(Z.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: eT.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eT.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eT.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(ev.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: J.XD.PRIMARY,
                                            look: J.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(Q.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(Z.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: eT.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eT.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eT.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => a(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, ey.A)({ subscriptionTier: l, analyticsLocations: j }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(Q.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(Z.l, {
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
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(Q.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(f.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, s.jsxs)(Q.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(et.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: b,
                                                    onChange: (e) => h(e),
                                                }),
                                                (0, s.jsx)(K.m, {
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
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(el.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, s.jsx)(Z.l, {
                                            label: "Plan",
                                            value: x.plan_id,
                                            options: [
                                                { id: "tier_2", value: eT.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: eT.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: eT.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                v((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(Z.l, {
                                            label: "Type",
                                            value: x.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                v((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(K.m, {
                                    text: "Already subscribed",
                                    shouldShow: g,
                                    children: (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: g,
                                        onClick: () => {
                                            window.open(N.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + Y.stringify({ ...x }));
                                        },
                                    }),
                                }),
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(el.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, s.jsxs)(Q.B, {
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
                                                          children: (0, s.jsx)(ea.y, { type: ea.t.SPINNING_CIRCLE }),
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
                                                                  balance: _ ?? 0,
                                                                  balanceWidgetMode: H.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, s.jsx)(et.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: O,
                                            onChange: (e) => L(e),
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: M,
                                            onClick: () => V(O, (0, d.A)()),
                                        }),
                                        null != D && (0, s.jsx)(y.E, { variant: "text-sm/normal", children: D }),
                                    ],
                                }),
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(el.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, s.jsx)(Z.l, {
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
                                        (0, s.jsx)(ec.H, {
                                            guildId: E?.id,
                                            children: (0, s.jsx)(eI, { selectedGuildForGuildSub: E }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsxs)(Q.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsxs)(el.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, s.jsx)(et.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: T,
                                                    onChange: P,
                                                }),
                                                (0, s.jsx)(et.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: I,
                                                    onChange: (e) => A(e),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, eb.openIAPPurchaseModal)({
                                                    applicationId: T,
                                                    skuId: I,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: N.liQ.IN_APP },
                                                    context: N.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsx)(Q.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, s.jsx)(el.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, s.jsxs)(Q.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(et.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: w,
                                                    onChange: B,
                                                }),
                                                (0, s.jsx)(et.k, {
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
                                                        (0, ef.q)({
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
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsx)(el.n, {
                                    label: "Helpers",
                                    children: (0, s.jsxs)(Q.B, {
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
                                (0, s.jsx)(ee.c, {}),
                                (0, s.jsx)(el.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, eu.Ab)(),
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
            name: "Checkout Error Simulators",
            id: "checkout-error-boundary",
            component: (e) => {
                let { errorHandlingBehavior: t, errorType: l } = e,
                    { analyticsLocations: a } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, s.jsxs)(p.f5, {
                    value: a,
                    children: [
                        (0, s.jsxs)(Q.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, s.jsx)(ei.D, {
                                    variant: "heading-lg/semibold",
                                    children: "Checkout Error Boundary",
                                }),
                                (0, s.jsxs)(y.E, {
                                    variant: "text-md/normal",
                                    children: [
                                        "Opens a ",
                                        "<PaymentModal>",
                                        " with a step that throws to verify ",
                                        "<CheckoutErrorBoundary>",
                                        " catches it and logs to Sentry with checkout context. For a plain Error, the Variant control (close-and-alert vs. rethrow) drives the boundary. For a CheckoutError/RevenueError, the error carries its own behavior \u2014 so Variant is baked into the thrown error and the boundary honors it over its prop.",
                                    ],
                                }),
                                (0, s.jsx)(G.$, {
                                    variant: "primary",
                                    text: "Open Error Boundary Test Modal",
                                    onClick: () =>
                                        (function (e, t) {
                                            let { errorHandlingBehavior: l, errorType: a } = t,
                                                n = [
                                                    {
                                                        key: m.pn.PLAN_SELECT,
                                                        renderStep: () => (0, s.jsx)(e_, {}),
                                                        renderHeader: () =>
                                                            (0, s.jsx)(z.rQ, { title: "Checkout Error Boundary Test" }),
                                                    },
                                                    {
                                                        key: m.pn.REVIEW,
                                                        renderStep: () =>
                                                            (0, s.jsx)(eh.dZ, {
                                                                children: (0, s.jsx)(eR, {
                                                                    errorType: a,
                                                                    errorHandlingBehavior: l,
                                                                }),
                                                            }),
                                                    },
                                                ],
                                                i = () => (0, en.closeModal)(eA);
                                            return (0, en.openModalLazy)(
                                                async () => {
                                                    let t = (e, t, l) => {
                                                        console.log("onErrorReported called: ", {
                                                            error: e,
                                                            info: t,
                                                            sentryErrorOptions: l,
                                                        });
                                                    };
                                                    return await Promise.resolve((a) => {
                                                        let { onClose: i, transitionState: r } = a;
                                                        return (0, s.jsx)(C.M, {
                                                            activeSubscription: null,
                                                            stepConfigs: n,
                                                            skuIDs: [],
                                                            errorHandlingBehavior: l,
                                                            onErrorReported: t,
                                                            children: (0, s.jsx)(j.dX, {
                                                                isGift: !1,
                                                                children: (0, s.jsx)(P.q, {
                                                                    transitionState: r,
                                                                    onClose: i,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    });
                                                },
                                                { onCloseRequest: i, onCloseCallback: i, modalKey: eA },
                                            );
                                        })(a, { errorHandlingBehavior: t, errorType: l }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(Q.B, {
                            direction: "vertical",
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, s.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Other Checkout Errors" }),
                                (0, s.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    children: "Simulate known checkout error from discountOfferHasTierError():",
                                }),
                                (0, s.jsx)(G.$, {
                                    variant: "critical-primary",
                                    text: "Simulate Error",
                                    onClick: () =>
                                        void (console.log("Simulating error in discountOfferHasTier()"),
                                        (0, eg.U9)({ discount: null }, eT.pe.TIER_2)),
                                }),
                            ],
                        }),
                    ],
                });
            },
            controls: {
                errorHandlingBehavior: {
                    label: "Variant",
                    type: "select",
                    options: [
                        { label: "Close Modal & Show Alert", value: "close-and-alert" },
                        { label: "Crash Client (old default behavior)", value: "rethrow" },
                    ],
                    defaultValue: "close-and-alert",
                },
                errorType: {
                    label: "Error Type",
                    type: "select",
                    options: [
                        { label: "Mock Error (plain Error \u2192 uses prop behavior)", value: "mock-error" },
                        { label: "CheckoutError (\u2192 uses error behavior)", value: "checkout-error" },
                        { label: "RevenueError (\u2192 uses error behavior)", value: "revenue-error" },
                        { label: "Translation Key Error", value: "translation-key-error" },
                    ],
                    defaultValue: "mock-error",
                },
            },
        },
    ],
};
var eM = l(630303),
    eN = l(496142),
    eD = l(428262),
    eV = l(492518),
    eO = l(758836);
function eL() {
    return {
        options: [
            { value: eO.ck["0"], label: `${eO.ck["0"]} (Cat Ears)` },
            { value: eO.ck["1"], label: `${eO.ck["1"]} (Angry)` },
            { value: eO.ck["2"], label: `${eO.ck["2"]} (Aurora Bundle)` },
            { value: eO.ck["3"], label: `${eO.ck["3"]} (Heartbloom)` },
            { value: eO.ck["4"], label: `${eO.ck["4"]} (Aurora Dreams)` },
            { value: eO.ck["5"], label: `${eO.ck["5"]} (Sakura Ink)` },
            { value: eO.ck["6"], label: `${eO.ck["6"]} (Of Ink and Steel)` },
            { value: eO.ck["7"], label: `${eO.ck["7"]} (Twilight)` },
            { value: eO.ck["8"], label: `${eO.ck["8"]} (Red Dragon)` },
            { value: eO.ck["9"], label: `${eO.ck["9"]} (Aurora)` },
        ],
        defaultValue: eO.ck["0"],
    };
}
let ew = [
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
    eU = [{ key: m.pn.REVIEW, renderStep: (e) => (0, s.jsx)(eM.p, { ...e }) }, ...ew],
    eB = [{ key: m.pn.REVIEW, renderStep: (e) => (0, s.jsx)(eN.E, { ...e }) }, ...ew];
function eG() {
    return (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" });
}
let eH = { isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 } },
    e$ = eL(),
    eW = {
        name: "Collectibles Review Step",
        id: "collectibles-checkout-review-step",
        component: function (e) {
            let { skuId: t, isGift: l } = e,
                {
                    analyticsLocations: a,
                    loadId: n,
                    handleClose: i,
                    handleComplete: r,
                    isFetching: o,
                    sku: u,
                } = R({ skuId: t, isGift: l, applicationId: N.FYj }),
                d = eD.Ay.isPremiumSku(t);
            return o || null == u || d
                ? (0, s.jsx)(eV.k, {})
                : (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(M, {
                              stepConfigs: eU,
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
                          (0, s.jsx)(eG, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: e$.options, defaultValue: e$.defaultValue },
            ...eH,
        },
    },
    eF = {
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
                    sku: d,
                } = R({ skuId: t, isGift: l, applicationId: eT.tv }),
                c = eD.Ay.isPremiumSku(t),
                p = c ? eT.zE[t] : void 0,
                [m, b] = u.useState(p),
                h = u.useRef(!1);
            u.useEffect(() => {
                h.current || null == p || ((h.current = !0), b(p));
            }, [p, m]);
            let { isLoadedForPremiumSKUs: y, selectedPlan: f } = (function (e) {
                let { subscriptionPlanId: t } = e;
                u.useEffect(() => {
                    I.A.isLoadedForPremiumSKUs() || g.h.wait(() => (0, S.zS)());
                }, []);
                let l = (0, x.bG)([I.A], () => (null != t ? I.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, x.bG)([I.A], () => I.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: m });
            return !o && null != d && y && c && null != f
                ? (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(M, {
                              stepConfigs: eB,
                              analyticsLocations: a,
                              applicationId: eT.tv,
                              initialPlanId: p,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: N.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, s.jsx)(eG, {}),
                      ],
                  })
                : (0, s.jsx)(eV.k, {});
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { value: eT.pe.TIER_0, label: `${eT.pe.TIER_0} (Nitro Basic)` },
                    { value: eT.pe.TIER_2, label: `${eT.pe.TIER_2} (Nitro Standard)` },
                ],
                defaultValue: eT.pe.TIER_0,
            },
            ...eH,
        },
    };
var eY = l(993077),
    ez = l(939249),
    eq = l(658675),
    eK = l(97808),
    eJ = l(778712),
    eX = l(783384),
    eQ = l(664111),
    eZ = l(994500),
    e0 = l(287809),
    e1 = l(403362),
    e2 = l(784018),
    e6 = l(94269);
let e3 = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, q.yK)([eZ.A, e0.default], () =>
                eZ.A.getFriendIDs()
                    .map((e) => e0.default.getUser(e))
                    .filter(e1.Vq),
            ),
            [r, o] = u.useState(new Set()),
            d = u.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return t ? a.add(e) : a.delete(e), a;
                });
            }, []),
            c = u.useMemo(() => Array.from(r), [r]),
            p = u.useCallback(() => (0, s.jsx)(eX.A, { title: a, participantIds: c }), [a, c]),
            m = "landscape" === l ? 640 : 360;
        return (0, s.jsxs)("div", {
            className: e6.iE,
            children: [
                (0, s.jsx)("div", {
                    className: e6.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, s.jsx)(eQ.default, {
                        src: t,
                        initialActive: !1,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: v.ip.ENTERED,
                    }),
                }),
                (0, s.jsxs)(eY.Z, {
                    className: e6.nd,
                    type: eY.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, s.jsxs)("div", {
                            className: e6.Iv,
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
                        (0, s.jsx)(ee.c, {}),
                        0 === i.length
                            ? (0, s.jsx)("div", {
                                  className: e6.p$,
                                  children: (0, s.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, s.jsx)("div", {
                                  className: e6.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: i.map((e) => {
                                      let t = r.has(e.id);
                                      return (0, s.jsxs)(
                                          ez.D,
                                          {
                                              className: e6.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => d(e.id, !t),
                                              children: [
                                                  (0, s.jsx)(eq.P, { checked: t }),
                                                  (0, s.jsx)(eK.eu, {
                                                      src: e.getAvatarURL(void 0, 24),
                                                      size: eJ._3.SIZE_24,
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: e2.kz },
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
var e4 = l(930349);
function e9() {
    return (0, s.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function e7() {
    return (0, s.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let e8 = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    e5 = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, accessibleLabel: l, accessibleValue: a } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e4.V, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: a,
                                renderPreview: () => (0, s.jsx)(e9, {}),
                            }),
                            (0, s.jsx)(e4.V, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: a,
                                renderPreview: () => (0, s.jsx)(e7, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: e8,
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "me.png" },
                },
            },
            {
                name: "Edit Button",
                component: function (e) {
                    let { variant: t, showOverlayOnHover: l, accessibleLabel: a, accessibleValue: n } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e4.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(e9, {}),
                            }),
                            (0, s.jsx)(e4.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(e7, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: e8,
                    showOverlayOnHover: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "me.png" },
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
                        o = { type: i, accessibleLabel: r, onClick: () => {} };
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e4.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, s.jsx)(e9, {}),
                            }),
                            (0, s.jsx)(e4.V, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, s.jsx)(e7, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: e8,
                    showOverlayOnHover: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "me.png" },
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
var te = l(687021),
    tt = l(487233),
    tl = l(120386),
    ta = l(374654);
let tn = { value: "", label: "No Guild (main profile)" };
var ti = l(99696),
    tr = l(599147),
    to = l(808411),
    ts = l(461536),
    tu = l(425713),
    td = l(367266);
let tc = {
    bronze: eT.Ac.PREMIUM_TENURE_1_MONTH,
    silver: eT.Ac.PREMIUM_TENURE_3_MONTH,
    gold: eT.Ac.PREMIUM_TENURE_6_MONTH,
    platinum: eT.Ac.PREMIUM_TENURE_12_MONTH,
    diamond: eT.Ac.PREMIUM_TENURE_24_MONTH,
    emerald: eT.Ac.PREMIUM_TENURE_36_MONTH,
    ruby: eT.Ac.PREMIUM_TENURE_60_MONTH,
    opal: eT.Ac.PREMIUM_TENURE_72_MONTH,
};
var tp = l(661531),
    tm = l(116833),
    tb = l(720879);
let th = {
    bronze: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
    },
    silver: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
    },
    gold: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
    },
    platinum: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
    },
    diamond: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    },
    emerald: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
    },
    ruby: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
    },
    opal: {
        type: "custom",
        start: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
        end: tp.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
    },
};
var tx = l(624716),
    ty = l(872725);
let tf = { name: "Expressive Progress", component: to.A, id: "expressive-progress", controls: {} },
    tv = { name: "Tab Tooltip", component: tx.A, id: "tab-tooltip", controls: {} },
    tg = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, s.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, s.jsx)(
                            ty.A,
                            {
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: eY.s.PRIMARY,
                                glowing: !0,
                                children: (0, s.jsxs)("div", {
                                    style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 },
                                    children: [
                                        (0, s.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Card Title" }),
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
                            e.fit,
                        ),
                    });
                },
                id: "animated-border-card",
                controls: {
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
            {
                name: "Cancellation Flow",
                component: function () {
                    return (0, s.jsx)(tr.o, {});
                },
                id: "cancellation-flow",
                controls: {},
            },
            tf,
            {
                name: "Mini Premium Tooltip",
                component: function (e) {
                    let { badgeId: t, earnedOnText: l, variant: a } = e,
                        n = u.useRef(null),
                        i = u.useRef(null),
                        r = tc[t],
                        o = (0, tu.I)(r).standard,
                        d = eT.VD[r].rarity,
                        c = (
                            w.intl.string(w.t.lG6a5x) +
                            " " +
                            w.intl.string(eT.VD[r].nameUnformatted)
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
                                className: td.k3,
                                children: [
                                    (0, s.jsx)("span", {
                                        className: td.yU,
                                        children: (0, s.jsx)(ts.K, {
                                            targetElementRef: n,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: d,
                                            variant: a,
                                            children: (0, s.jsx)(f.Anchor, {
                                                href: "#",
                                                ref: n,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: td.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)("span", {
                                        className: td.yU,
                                        children: (0, s.jsx)(ts.K, {
                                            targetElementRef: i,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: d,
                                            variant: a,
                                            children: (0, s.jsx)(f.Anchor, {
                                                href: "#",
                                                ref: i,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: td.Jv,
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
                component: function (e) {
                    let {
                            title: t,
                            body: l,
                            showGraphic: a,
                            showActions: n,
                            badgeId: i,
                            showProgress: r,
                            progressCircleText: o,
                            progressCirclePercent: d,
                            progressCircleUrgency: c,
                            delay: p,
                            size: m,
                            gradientColor: b,
                            estimatedTooltipHeight: h,
                        } = e,
                        x = u.useRef(null),
                        f = u.useRef(null),
                        v = u.useMemo(
                            () =>
                                ({
                                    bronze: eT.Ac.PREMIUM_TENURE_1_MONTH,
                                    silver: eT.Ac.PREMIUM_TENURE_3_MONTH,
                                    gold: eT.Ac.PREMIUM_TENURE_6_MONTH,
                                    platinum: eT.Ac.PREMIUM_TENURE_12_MONTH,
                                    diamond: eT.Ac.PREMIUM_TENURE_24_MONTH,
                                    emerald: eT.Ac.PREMIUM_TENURE_36_MONTH,
                                    ruby: eT.Ac.PREMIUM_TENURE_60_MONTH,
                                    opal: eT.Ac.PREMIUM_TENURE_72_MONTH,
                                })[i],
                            [i],
                        ),
                        g = null != v ? (0, tu.I)(v).standard : null,
                        E = u.useMemo(() => {
                            if (null == v) return "";
                            let e = eT.VD[v];
                            return (
                                w.intl.string(w.t.lG6a5x) +
                                " " +
                                w.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [v]),
                        S = u.useMemo(() => {
                            if (!a || null == g) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: d, progressCircleUrgency: c }
                                : {};
                            return {
                                type: "dynamic",
                                component: tm.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: g, alt: E, ...e },
                            };
                        }, [a, g, E, r, o, d, c]),
                        C = {
                            title: t,
                            body: l,
                            graphic: S,
                            actions: u.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: u.useMemo(() => ("string" == typeof b && b in th ? th[b] : b), [b]),
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
                                    (0, s.jsx)(tb.L, {
                                        targetElementRef: x,
                                        ...C,
                                        children: (0, s.jsx)(G.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, s.jsx)(tb.L, {
                                        targetElementRef: f,
                                        ...C,
                                        children: (0, s.jsx)(G.$, { buttonRef: f, variant: "primary", text: "Right" }),
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
            tv,
        ],
    };
var tE = l(691540),
    tS = l(857250),
    tC = l(97483),
    tj = l(750338),
    tT = l(280041),
    tP = l(576765),
    tI = l(88433);
let tA = { none: void 0, nitroWheel: r.t },
    t_ = {
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
                action2Variant: u,
                icon: d,
                iconPosition: c,
                index: p,
                size: m,
                badgeText: b,
                badgeVariant: h,
                isReducedMotion: x,
                previewImageStyle: y,
            } = e;
            function f() {
                return (0, tE.P0)((0, tS.o)("CTA clicked!", tC.Ck.SUCCESS));
            }
            let v = tA[d],
                g =
                    "descriptionCta" === a
                        ? { descriptionCta: n, onClick: f }
                        : "actions" === a
                          ? {
                                actions: [
                                    {
                                        text: i,
                                        variant: r,
                                        onClick: f,
                                        ...(null != v ? { icon: v, iconPosition: c } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: u, onClick: f }] : []),
                                ],
                            }
                          : {};
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(tj.A, {
                    name: tT.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tP.A,
                    videoUrl: tI.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: b.length > 0 ? b : void 0,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: y,
                    ...g,
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
                defaultValue: tT.A0.LARGE,
                options: [
                    { label: "Small", value: tT.A0.SMALL },
                    { label: "Medium", value: tT.A0.MEDIUM },
                    { label: "Large", value: tT.A0.LARGE },
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
                defaultValue: tT.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: tT.Tb.CONTAINED },
                    { label: "Overlay", value: tT.Tb.OVERLAY },
                ],
            },
        },
    };
var tR = l(398590),
    tk = l(920050),
    tM = l(744064),
    tN = l(976860);
let tD = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, s.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, s.jsx)(tM.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, tE.P0)((0, tS.o)("CTA Clicked!", tC.Ck.SUCCESS)),
                        }),
                        (0, s.jsx)(tV, {}),
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
function tV() {
    let [e, t] = (0, u.useState)("customSounds"),
        l = `${N.BVt.NITRO_HOME}?perk=${e}`;
    return (0, s.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, s.jsx)(et.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, s.jsx)(G.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, tR.jH)(), (0, tN.pX)(N.BVt.ME), setTimeout(() => (0, tN.pX)(l), 200);
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
                        children: Object.values(tk).map((e) => (0, s.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var tO = l(52822),
    tL = l(339984);
let tw = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: eT.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: eT.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: eT.e.NAMEPLATE_MODAL_UPSELL },
    ],
    tU = {
        [eT.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [eT.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [eT.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    },
    tB = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: N.qlD },
    ],
    tG = [
        { id: "avatar", label: "Avatar", value: tL.HL.AVATAR },
        { id: "banner", label: "Banner", value: tL.HL.BANNER },
    ];
var tH = l(652165);
let t$ = "1271174907081789524",
    tW = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: function (e) {
            let { skuId: t } = e;
            return (0, s.jsx)("div", {
                className: U.YG,
                children: (0, s.jsx)(G.$, {
                    onClick: () => {
                        (0, tH.B4)({
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
                    { skuId: t$, skuName: "Oni's Curse (Deco)" },
                ].map((e) => {
                    let { skuId: t, skuName: l } = e;
                    return { label: l, value: t };
                }),
                defaultValue: t$,
            },
        },
    };
var tF = l(324861),
    tY = l(73079),
    tz = l(818348),
    tq = l(76488),
    tK = l(877062);
let tJ = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, s.jsx)(C.M, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsxs)(tO.wn, {
                children: [
                    (0, s.jsx)(ei.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, s.jsx)(tO.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, s.jsx)(G.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: function () {
                                console.log("Opening deep link... ", t),
                                    tK.A.launch(t, (e) => {
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
var tX = l(636537),
    tQ = l(192087),
    tZ = l(295405),
    t0 = l(71532);
let t1 = eL();
async function t2(e) {
    return (await tX.Bo.post({ url: N.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function t6(e) {
    return (await tX.Bo.get({ url: N.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function t3(e, t) {
    await tX.Bo.patch({
        url: N.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function t4() {
    let [e, t] = u.useState(!1),
        [l, a] = u.useState(!1),
        [n, i] = u.useState(null),
        [r, o] = u.useState(null),
        [d, c] = u.useState(t1.defaultValue),
        [p, m] = u.useState(null),
        b = (0, q.bG)([tZ.A], () => tZ.A.paymentSources),
        h = (0, q.bG)([tZ.A], () => tZ.A.hasFetchedPaymentSources),
        x = (0, q.bG)([tZ.A], () => tZ.A.defaultPaymentSourceId);
    u.useEffect(() => {
        h || (0, er.$o)();
    }, [h]),
        u.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]);
    let f = u.useRef(null);
    u.useEffect(() => {
        if (null == r || "" === r) {
            f.current = p;
            return;
        }
        if (p !== f.current) {
            if (null == p || "" === p) {
                f.current = p;
                return;
            }
            t3(r, p)
                .then(() => {
                    i(`Order updated successfully!
Order ID: ${r}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    i(`Failed to update order: ${t}`);
                }),
                (f.current = p);
        }
    }, [r, p]);
    let v = u.useMemo(
            () =>
                Object.values(b).map((e) => {
                    var t;
                    let l,
                        a = ((t = e.type), null != (l = tQ.w[t]) ? l() : String(t));
                    if (e.type === tz.he.CARD && "last4" in e) {
                        let t = e.last4 ?? "",
                            l = e.brand ?? "Unknown";
                        a += ` - ****${t} (${l})`;
                    } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: a };
                }),
            [b],
        ),
        g = async () => {
            if (null == p || "" === p) return void i("Please select a payment source first.");
            if (null == d || "" === d || d === N.dJq) return void i("Please select a SKU ID.");
            t(!0), i(null), o(null);
            try {
                let e = await (0, E.Aj)(d, p, "US", !1, {
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
                let e = await t2(r);
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
                                let n = await (0, t0.Cv)();
                                if (null == n) throw Error("Stripe not loaded");
                                let s = a.client_secret;
                                if (null == s || "" === s) throw Error("No client secret found in 3DS context");
                                let { error: u, paymentIntent: d } = await n.confirmCardPayment(s, {
                                    payment_method: a.payment_method_id,
                                });
                                if (null != u) throw Error(`3DS authentication failed: ${u.message}`);
                                if (null == d) throw Error("No payment intent returned from 3DS authentication");
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
                    let t, l, a, n, s, u, d, c;
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
                        (u = () => {
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
                        (d = () => {
                            null != s && clearTimeout(s);
                        }),
                        (c = async () => {
                            let e = Date.now() - n;
                            if (e >= 3e4) {
                                try {
                                    var t;
                                    (t = (await t6(r)).status),
                                        i(`Order signing timed out.
Order ID: ${r}
Status: ${t ?? "unknown"}
Please check the order status manually.`),
                                        d();
                                } catch (t) {
                                    let e = t instanceof Error ? t.message : String(t);
                                    i(`Order signing timed out.
Order ID: ${r}
Error: ${e}`),
                                        d();
                                }
                                return;
                            }
                            try {
                                let e = (await t6(r)).status;
                                if (2 === e) {
                                    i(`Order signed successfully!
Order ID: ${r}
Payment redirect completed.`),
                                        o(null),
                                        d();
                                    return;
                                }
                                if (1 === e) {
                                    i(`Order signed unsuccessfully
Order ID: ${r}`),
                                        d();
                                    return;
                                }
                                u();
                            } catch (l) {
                                let t = l instanceof Error ? l.message : String(l);
                                e < 3e4
                                    ? u()
                                    : (i(`Order signing timed out.
Order ID: ${r}
Error: ${t}`),
                                      d());
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
    return (0, s.jsxs)(tO.wn, {
        children: [
            (0, s.jsx)(ei.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, s.jsxs)(tO.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-md/normal",
                        className: tq.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, s.jsxs)(el.n, {
                        label: "Configuration",
                        children: [
                            (0, s.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, s.jsx)(Z.l, {
                                    selectionMode: "single",
                                    value: d,
                                    onSelectionChange: c,
                                    options: t1.options,
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
                                    (0, s.jsx)(Z.l, {
                                        selectionMode: "single",
                                        value: p,
                                        onSelectionChange: m,
                                        options: v,
                                        placeholder: "Select a payment source...",
                                        disabled: !h,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !h &&
                                        (0, s.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: tq.cW,
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
                                onClick: g,
                                disabled: e || null == p || "" === p || null == d || "" === d || d === N.dJq,
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
                            className: tq.cW,
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
var t9 = l(405139),
    t7 = l(19311),
    t8 = l(869177);
function t5(e) {
    let t = u.useRef(null),
        l = {
            paymentLabel: w.intl.string(w.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, s.jsx)(ea.y, { style: { marginTop: 16 }, type: ea.t.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, s.jsx)(t8.V, { ...l, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, s.jsx)(t9.Mv, { ...l, ...e })
          : (0, s.jsx)(t9.dP, { ...l, ...e });
}
function le(e) {
    let { paymentRequestWallet: t } = e,
        l = u.useRef(null),
        [a, n] = u.useState(!1);
    return (0, s.jsx)(tO.e_, {
        footer: (0, s.jsx)(t7.Ay, {
            primaryCTA: t7.Ay.CTAType.CONTINUE,
            primaryText: w.intl.string("applePay" === t ? w.t.WoXvJL : w.t.wnVVr0),
            primaryDisabled: !a,
            onPrimary: () => void (null != l.current && l.current.show()),
            onBack: () => {},
        }),
        children: (0, s.jsx)(t5, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: l,
            onValidPaymentRequest: () => n(!0),
        }),
    });
}
var lt = l(150934),
    ll = l(36167);
let la = [
        { id: "tier_2", value: eT.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eT.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eT.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    ln = [
        { id: "meta_quest", value: _.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function li() {
    let [e, t] = u.useState(null);
    return {
        error: e,
        handleSuccess: u.useCallback((e, l) => {
            l.searchParams.append("handoff_token", e.body.handoff_token);
            let a = l.href;
            t(null), window.open(a, "_blank");
        }, []),
        handleFailure: u.useCallback((e, l) => {
            t(`Failed to generate handoff for ${l}`);
        }, []),
    };
}
function lr(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(eT.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = u.useState(!1),
        { error: r, handleSuccess: o, handleFailure: c } = li(),
        p = u.useCallback(() => {
            let e = (0, d.A)();
            (0, ll.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, c);
        }, [l, n, t, o, c]);
    return (0, s.jsxs)(tO.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, s.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, s.jsx)(Z.l, {
                        label: "Plan",
                        value: l,
                        options: la,
                        onSelectionChange: a,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, s.jsx)(Z.l, {
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
            null != r && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: r }),
        ],
    });
}
function lo(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = li(),
        i = u.useCallback(() => {
            if (null == t) return;
            let e = (0, d.A)(),
                l = N.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, ll.xq)(l, a, n);
        }, [t, a, n]);
    return (0, s.jsxs)(tO.Hq, {
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
            null != l && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function ls(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = li(),
        o = u.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, d.A)(),
                a = N.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, ll.xq)(a, i, r);
        }, [l, i, r, t]);
    return (0, s.jsxs)(tO.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, s.jsx)(et.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, s.jsx)(G.$, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: o,
            }),
            null != n && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var lu = l(342393),
    ld = l(260598),
    lc = l(558179);
let lp = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    lm = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    lb = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    lh = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    };
function lx(e) {
    return void 0 !== e ? JSON.stringify(e, null, 2) : "undefined";
}
function ly() {
    let [e, t] = u.useState(lx(lb)),
        [l, a] = u.useState(lb),
        [n, i] = u.useState(lx(lh)),
        [r, o] = u.useState(lh),
        [d, c] = u.useState(null),
        [p, m] = u.useState(
            (0, s.jsx)(tO.a8, {
                errorLabel: lp.CONFIGURABLE,
                elementOptions: lb,
                children: (0, s.jsx)(lu.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: lh,
                }),
            }),
        );
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: tq.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: tq.cW,
                children: [
                    (0, s.jsx)("b", { children: "elements.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tO.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: tq.PC,
                children: (0, s.jsx)(ld.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: tq.cW,
                children: [
                    (0, s.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tO.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tO.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: tq.PC,
                children: (0, s.jsx)(ld.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: n,
                    onChange: i,
                    rows: 7,
                }),
            }),
            null != d && (0, s.jsx)(y.E, { variant: "text-md/normal", color: "text-feedback-critical", children: d }),
            (0, s.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: tq.Ut,
                children: (0, s.jsx)(G.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: function () {
                        try {
                            let t = JSON.parse(e),
                                l = JSON.parse(n);
                            m(null),
                                m(
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsxs)(y.E, {
                                                variant: "text-md/normal",
                                                className: tq.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, s.jsx)(tO.a8, {
                                                errorLabel: lp.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, s.jsx)(lu.ExpressCheckoutElement, {
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
            (0, s.jsx)(y.E, { variant: "text-md/normal", className: tq.cW, children: "Current Element Options:" }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lc.A, { className: tq.wD, children: `\`\` ${lx(l)} \`\`` }),
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                className: tq.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lc.A, { className: tq.wD, children: `\`\` ${lx(r)} \`\`` }),
            }),
            p,
        ],
    });
}
let lf = {
    title: "Miscellaneous",
    stories: [
        tJ,
        {
            name: "Redirect To Standalone",
            id: "standalone-redirect",
            component: function () {
                let [e, t] = u.useState(!1),
                    [l, a] = u.useState(_.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
                    n = u.useCallback((e) => {
                        t(e);
                    }, []),
                    i = e ? l : void 0;
                return (0, s.jsxs)(tO.wn, {
                    children: [
                        (0, s.jsx)(ei.D, { variant: "heading-xl/semibold", children: "Redirect To Standalone" }),
                        (0, s.jsx)(tO.nB, {}),
                        (0, s.jsxs)(Q.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, s.jsx)(lt.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                (0, s.jsx)(Z.l, {
                                    label: "Flow Type",
                                    value: l,
                                    options: ln,
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
                        (0, s.jsx)(lr, { flowType: i }),
                        (0, s.jsx)(lo, { flowType: i }),
                        (0, s.jsx)(ls, { flowType: i }),
                    ],
                });
            },
        },
        {
            name: "Order SKU",
            component: function () {
                return (0, s.jsx)(C.M, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsx)(t4, {}),
                });
            },
            id: "order-sku-test",
            controls: {},
        },
        {
            name: "Payment Request",
            component: function (e) {
                let { paymentRequestWallet: t } = e;
                return (0, s.jsx)(C.M, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tO.wn, {
                        children: [
                            (0, s.jsx)(ei.D, { variant: "heading-xl/semibold", children: "Payment Request" }),
                            (0, s.jsx)(tO.Hq, {
                                label: "Default View",
                                children: (0, s.jsx)(t5, { paymentRequestWallet: t }),
                            }),
                            (0, s.jsx)(tO.Hq, {
                                label: "Connector View",
                                children: (0, s.jsx)(t5, { paymentRequestWallet: t, renderConnectorView: !0 }),
                            }),
                            (0, s.jsx)(tO.Hq, {
                                label: "Add Payment Step Body Connector View",
                                children: (0, s.jsx)(le, { paymentRequestWallet: t }),
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
                        paymentSourceTypeRestrictions: l ? [tz.he.CARD.valueOf()] : null,
                    };
                return (0, s.jsx)(C.M, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tO.wn, {
                        children: [
                            (0, s.jsx)(ei.D, {
                                variant: "heading-xl/semibold",
                                children: "Choose Payment Source Type",
                            }),
                            (0, s.jsx)(tO.e_, {
                                className: tq.Bt,
                                children: (0, s.jsx)("div", { className: tq.VS, children: (0, s.jsx)(tY.A, { ...n }) }),
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
                return (0, s.jsx)(C.M, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tO.wn, {
                        children: [
                            (0, s.jsx)(ei.D, {
                                variant: "heading-xl/semibold",
                                children: "Stripe Express Checkout Buttons",
                            }),
                            (0, s.jsx)(tO.Hq, {
                                label: lp.DEFAULT,
                                children: (0, s.jsx)("div", {
                                    children: (0, s.jsx)(tO.a8, {
                                        errorLabel: lp.DEFAULT,
                                        children: (0, s.jsx)(lu.ExpressCheckoutElement, {
                                            onConfirm: (e) => {
                                                console.log("ExpressCheckoutElement onConfirm event: ", e);
                                            },
                                            options: {},
                                        }),
                                    }),
                                }),
                            }),
                            ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                let t = lp[e];
                                return (0, s.jsx)(
                                    tO.Hq,
                                    {
                                        label: t,
                                        children: (0, s.jsxs)("div", {
                                            children: [
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    className: tq.cW,
                                                    children: "expressCheckoutElement.options:",
                                                }),
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    children: (0, s.jsx)(lc.A, {
                                                        className: tq.wD,
                                                        children: `\`\`${lx(lm[e])} \`\``,
                                                    }),
                                                }),
                                                (0, s.jsx)(tO.a8, {
                                                    errorLabel: t,
                                                    children: (0, s.jsx)(lu.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: lm[e],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    },
                                    e,
                                );
                            }),
                            (0, s.jsx)(tO.Hq, { label: lp.CONFIGURABLE, children: (0, s.jsx)(ly, {}) }),
                        ],
                    }),
                });
            },
        },
    ],
};
var lv = l(503698),
    lg = l.n(lv),
    lE = l(683071),
    lS = l(942340),
    lC = l(211528),
    lj = l(626584),
    lT = l(87952),
    lP = l(447952),
    lI = l(624479),
    lA = l(408278),
    l_ = l(957565),
    lR = l(534472);
function lk(e) {
    let { label: t, value: l } = e;
    return (0, s.jsxs)("div", {
        className: lR.I,
        children: [
            (0, s.jsxs)(y.E, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, s.jsx)(y.E, { variant: "text-sm/normal", children: l }),
            (0, s.jsx)(lA.K, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: lI.T,
                onClick: () => (0, l_.C)(l),
            }),
        ],
    });
}
function lM(e) {
    let { children: t, stepConfigs: l, bodyClassName: a } = e;
    return (0, s.jsx)(C.M, {
        stepConfigs: l,
        skuIDs: [],
        activeSubscription: null,
        children: (0, s.jsx)("div", { className: a, children: t }),
    });
}
var lN = l(935377);
let lD = new lj.A("PaymentElement.web.stories"),
    lV = {
        key: m.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, s.jsx)("div", {}),
        options: { renderHeader: !1, hideDefaultModalBody: !0 },
    };
function lO() {
    let { elementsAppearanceOptions: e } = (0, lS.E)();
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(ei.D, {
                variant: "heading-lg/semibold",
                className: U.tm,
                children: "Defaults for Current Theme",
            }),
            (0, s.jsx)("div", {
                children: Object.entries(e).map((e) => {
                    let [t, l] = e;
                    return (0, s.jsx)(lk, { label: t, value: l }, t);
                }),
            }),
        ],
    });
}
function lL(e) {
    let {
            theme: t,
            colorText: l,
            colorBackground: a,
            inputBackgroundColor: n,
            tabBackgroundColor: i,
            tabSelectedBackgroundColor: r,
            storyType: o,
        } = e,
        u = (0, lT.A)(),
        { stripePaymentElementProps: d, stripeAddressElementProps: c } = (0, lP.wD)({
            step: m.pn.PAYMENT_ELEMENT,
            handleStepChange: N.tEg,
            onBillingAddressChange: N.tEg,
            paymentElementsEnabled: !0,
            logger: lD,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0,
        }),
        {
            elementsOptions: p,
            isLoading: b,
            setupError: h,
            customPaymentMethodIdsToSourceTypes: x,
        } = (0, lS.p)({
            onSetupError: (e) => {
                lD.info("Stripe Payment Element options setup error: ", e);
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
    return b || null != h || null == u
        ? (0, s.jsx)(lP.eR, {})
        : (0, s.jsxs)("div", {
              children: [
                  (0, s.jsx)("div", {
                      style: { marginBottom: 16 },
                      children: (0, s.jsx)(lE.w, {
                          type: "info",
                          children:
                              "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                      }),
                  }),
                  (0, s.jsxs)("div", {
                      className: lN.ny,
                      children: [
                          (0, s.jsx)(lO, {}),
                          (0, s.jsx)(lM, {
                              stepConfigs: [lV],
                              children: (0, s.jsx)("div", {
                                  className: lg()(lN.o6, "joined-payment-address-elements" === o ? lN.fF : lN.u1),
                                  children: (0, s.jsxs)(lu.Elements, {
                                      stripe: u,
                                      options: p,
                                      children: [
                                          "stripe-address-element" === o
                                              ? (0, s.jsx)("div", {
                                                    className: U.R,
                                                    children: (0, s.jsx)(lC.Wf, {
                                                        ...d,
                                                        customPaymentMethodIdsToSourceTypes: x,
                                                        step: m.pn.PAYMENT_ELEMENT,
                                                    }),
                                                })
                                              : (0, s.jsx)(lC.Wf, {
                                                    ...d,
                                                    customPaymentMethodIdsToSourceTypes: x,
                                                    step: m.pn.PAYMENT_ELEMENT,
                                                }),
                                          ("joined-payment-address-elements" === o || "stripe-address-element" === o) &&
                                              (0, s.jsx)(lC.KS, {
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
}
let lw = {
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
    lU = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: function (e) {
            return (0, s.jsx)(lL, { ...e, storyType: "joined-payment-address-elements" });
        },
        controls: { ...lw },
    },
    lB = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: function (e) {
            return (0, s.jsx)(lL, { ...e, storyType: "stripe-payment-element" });
        },
        controls: { ...lw },
    },
    lG = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: function (e) {
            return (0, s.jsx)(lL, { ...e, storyType: "stripe-address-element" });
        },
        controls: { ...lw },
    };
var lH = l(786826);
let l$ = {
    title: "RichTextArea",
    stories: [
        {
            name: "RichTextArea",
            id: "rich-text-area",
            component: function (e) {
                let {
                        label: t,
                        placeholder: l,
                        toolbarVariant: a,
                        autosize: n,
                        rows: i,
                        minLength: r,
                        maxLength: o,
                        required: d,
                        disabled: c,
                        error: p,
                        description: m,
                        helperText: b,
                    } = e,
                    [h, x] = u.useState("");
                return (0, s.jsx)("div", {
                    style: { maxWidth: 480, padding: 24 },
                    children: (0, s.jsx)(lH.f, {
                        label: t,
                        placeholder: l,
                        toolbarVariant: a,
                        autosize: n,
                        rows: i,
                        minLength: r,
                        maxLength: o,
                        required: d,
                        disabled: c,
                        error: p,
                        description: m,
                        helperText: b,
                        value: h,
                        onChange: x,
                    }),
                });
            },
            controls: {
                label: { label: "Label", type: "text", defaultValue: "About Me" },
                placeholder: { label: "Placeholder", type: "text", defaultValue: "Tell us about yourself..." },
                toolbarVariant: {
                    label: "Toolbar Mode",
                    type: "select",
                    defaultValue: "floating",
                    options: [
                        { label: "Floating (selection)", value: "floating" },
                        { label: "Static (always visible)", value: "static" },
                    ],
                },
                autosize: { label: "Autosize", type: "boolean", defaultValue: !0 },
                rows: { label: "Rows (min when autosize)", type: "number", defaultValue: 3, minValue: 1 },
                minLength: { label: "Min Length", type: "number", defaultValue: void 0 },
                maxLength: { label: "Max Length", type: "number", defaultValue: 200 },
                required: { label: "Required", type: "boolean", defaultValue: !1 },
                disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
                error: { label: "Error Message", type: "text", defaultValue: void 0 },
                description: { label: "Description", type: "text", defaultValue: void 0 },
                helperText: { label: "Helper Text", type: "text", defaultValue: void 0 },
            },
        },
    ],
};
l(321073);
var lW = l(735438),
    lF = l(96337),
    lY = l(997101),
    lz = l(597770),
    lq = l(278416),
    lK = l(606267),
    lJ = l(169797),
    lX = l(944355),
    lQ = l(864717),
    lZ = l(826469),
    l0 = l(812745);
let l1 = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: function (e) {
            let {
                    variant: t,
                    leftTitleDescriber: l,
                    leftPrimaryText: a,
                    leftSubtext: n,
                    leftShowSubtext: i,
                    leftSubtextStrikethrough: r,
                    rightTitleDescriber: o,
                    rightPrimaryText: d,
                    rightSubtext: c,
                    rightShowSubtext: p,
                    rightSubtextStrikethrough: m,
                } = e,
                [b, h] = u.useState(0);
            return (0, s.jsxs)("div", {
                className: U.Cd,
                children: [
                    (0, s.jsx)(lX.q7, {
                        selection: b,
                        onChange: h,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, s.jsx)(lX.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: a,
                                subtext: i ? (0, s.jsx)(lX.Lo, { strikethrough: r, price: n }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, s.jsx)(lX.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: o,
                                primaryText: d,
                                subtext: p ? (0, s.jsx)(lX.Lo, { strikethrough: m, price: c }) : void 0,
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
                defaultValue: eT.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: eT.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: eT.PremiumTypes.TIER_0 },
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
            rightSubtextStrikethrough: {
                label: "Right Card - Subtext Strikethrough",
                type: "boolean",
                defaultValue: !1,
            },
        },
    },
    l2 = {
        name: "Primitive: Subscription Details Accordion",
        id: "unified-checkout-subscription-details",
        component: function (e) {
            let {
                    label: t,
                    totalLineItemLabel: l,
                    totalLineItemLabelSubText: a,
                    totalLineItemValueSubText: n,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: o,
                    intervalType: u,
                    intervalCount: d,
                    currency: c,
                    hasLineItems: p,
                    item1Label: m,
                    item1Amount: b,
                    item1Tooltip: h,
                    item1LabelSubText: x,
                    item1SubText: y,
                    item1SubTextHasStrikethrough: f,
                    item2Label: v,
                    item2Amount: g,
                    item2FormatWithoutRate: E,
                    hasDiscount: S,
                    discountLabel: C,
                    discountAmount: j,
                } = e,
                T = p
                    ? [
                          {
                              id: 1,
                              label: m,
                              amount: b,
                              tooltip: "" !== h ? h : void 0,
                              labelSubText: "" !== x ? x : void 0,
                              subText: "" !== y ? y : void 0,
                              subTextHasStrikethrough: f,
                          },
                          ...("" !== v
                              ? [
                                    {
                                        id: 2,
                                        label: v,
                                        amount: g,
                                        icon: (0, s.jsx)(r.t, { size: "xs" }),
                                        formatWithoutRate: E,
                                    },
                                ]
                              : []),
                          ...(S ? [{ id: 3, label: C, amount: j }] : []),
                      ]
                    : [];
            return (0, s.jsx)("div", {
                className: U.SG,
                children: (0, s.jsx)(lX._D, {
                    label: t,
                    totalLineItemLabel: "" !== l ? l : void 0,
                    totalLineItemLabelSubText: "" !== a ? a : void 0,
                    totalLineItemValueSubText: "" !== n ? n : void 0,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: o,
                    lineItems: T,
                    intervalType: u,
                    intervalCount: d,
                    currency: c,
                }),
            });
        },
        controls: {
            label: { label: "Label", type: "text", defaultValue: "Subscription Details" },
            totalLineItemLabel: { label: "Total Line Item Label", type: "text", defaultValue: "" },
            totalLineItemLabelSubText: { label: "Total Line Item Label Subtext", type: "text", defaultValue: "" },
            totalLineItemValueSubText: { label: "Total Line Item Value Subtext", type: "text", defaultValue: "" },
            showTotalWhenCollapsed: { label: "Show Total When Collapsed", type: "boolean", defaultValue: !1 },
            defaultExpanded: { label: "Default Expanded", type: "boolean", defaultValue: !1 },
            intervalType: {
                label: "Interval Type",
                type: "select",
                defaultValue: eT.WT.MONTH,
                options: [
                    { label: "Month", value: eT.WT.MONTH },
                    { label: "Year", value: eT.WT.YEAR },
                    { label: "Day", value: eT.WT.DAY },
                ],
            },
            intervalCount: { label: "Interval Count", type: "number", defaultValue: 1 },
            currency: {
                label: "Currency",
                type: "select",
                defaultValue: N.Yri.USD,
                options: [
                    { label: "USD", value: N.Yri.USD },
                    { label: "EUR", value: N.Yri.EUR },
                    { label: "GBP", value: N.Yri.GBP },
                    { label: "CAD", value: N.Yri.CAD },
                ],
            },
            hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
            item1Label: { label: "Item 1 - Label", type: "text", defaultValue: "Nitro Basic" },
            item1Amount: { label: "Item 1 - Amount (minor units)", type: "number", defaultValue: 299 },
            item1Tooltip: {
                label: "Item 1 - Tooltip",
                type: "text",
                defaultValue: "You are purchasing a plan change. Your server boosts are being updated accordingly.",
            },
            item1LabelSubText: { label: "Item 1 - Label Subtext", type: "text", defaultValue: "" },
            item1SubText: { label: "Item 1 - Subtext", type: "text", defaultValue: "" },
            item1SubTextHasStrikethrough: {
                label: "Item 1 - Subtext Has Strikethrough",
                type: "boolean",
                defaultValue: !1,
            },
            item2Label: { label: "Item 2 - Label", type: "text", defaultValue: "Server Boost" },
            item2Amount: { label: "Item 2 - Amount (minor units)", type: "number", defaultValue: 499 },
            item2FormatWithoutRate: { label: "Item 2 - Format Without Rate", type: "boolean", defaultValue: !1 },
            hasDiscount: { label: "Has Discount Item", type: "boolean", defaultValue: !1 },
            discountLabel: { label: "Discount - Label", type: "text", defaultValue: "Discount" },
            discountAmount: { label: "Discount - Amount (minor units)", type: "number", defaultValue: -100 },
        },
    };
function l6(e) {
    let { label: t, giftCardsEnabled: l, disabled: a, hidePersonalInformation: n } = e,
        i = (0, x.bG)([tZ.A], () => Object.values(tZ.A.paymentSources)),
        [r, o] = u.useState(void 0);
    u.useEffect(() => {
        (0, er.$o)();
    }, []);
    let d = u.useMemo(() => i.map((e) => new lZ.A(e, !0, [])), [i]),
        {
            dropdownPaymentSources: c,
            dropdownPaymentSourceId: p,
            handleDropdownPaymentSourceChange: m,
            giftCardCheckboxProps: b,
            walletCoversSubtotal: h,
        } = (0, lK.Y0)({
            checkoutPaymentSources: d,
            paymentSourceId: r,
            setPaymentSourceId: o,
            location: "revenue_playground",
        });
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(lX.nL, {
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
let l3 = { "nitro-wheel": r.t, gift: lz.o, orbs: i.C },
    l4 = lF.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    l9 = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? lq.g : void 0;
            return (0, s.jsxs)(Q.B, {
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
                            (0, en.openModal)(
                                (e) =>
                                    (0, s.jsx)(lJ.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? l3[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, s.jsx)(Q.B, {
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
            countryCode: { label: "Country Code", type: "select", defaultValue: lY.d.US, options: l4 },
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
    l7 = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: N.Yri.USD,
        interval: eT.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    l8 = {
        [lX.I0.Subscription]: { type: lX.I0.Subscription, ...l7 },
        [lX.I0.SubscriptionTrial]: { type: lX.I0.SubscriptionTrial, ...l7 },
        [lX.I0.OrbsRedemption]: { type: lX.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [lX.I0.Shop]: { type: lX.I0.Shop, purchaseButtonText: "Purchase" },
        [lX.I0.GiftNitro]: { type: lX.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [lX.I0.GiftShop]: { type: lX.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [lX.I0.GiftGameShop]: {
            type: lX.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
        [lX.I0.OrbsGameShop]: {
            type: lX.I0.OrbsGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
    },
    l5 = {
        title: "Unified Checkout",
        stories: [
            l9,
            {
                name: "Primitive: Order Summary Accordion",
                id: "unified-checkout-order-summary",
                component: function (e) {
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
                            children: (0, s.jsx)(lX.Vm, { label: t, lineItems: n, currency: N.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            l1,
            l2,
            {
                name: "Primitive: Purchase Item",
                id: "unified-checkout-purchase-item",
                component: function (e) {
                    let {
                        header: t,
                        showHeader: l,
                        label: a,
                        description: n,
                        price: i,
                        hasPriceIcon: o,
                        hasStrikethroughPrice: u,
                        strikethroughPrice: d,
                        targetType: c,
                    } = e;
                    function p(e, p) {
                        let m = e0.default.getCurrentUser(),
                            b = eC.A.getGuildsArray()[0];
                        return (0, s.jsx)(lX.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${a} ${p}`,
                            description: n,
                            price: i,
                            PriceIcon: o ? r.t : void 0,
                            priceSubText: u ? d : void 0,
                            priceSubTextHasStrikethrough: u,
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
                            p(lX.JW, "Nitro"),
                            p(lX.DH, "Nitro Basic"),
                            p(lX.a6, "Boost"),
                            p(lX.jw, "App"),
                            p(lX.oo, "Nitro Credit"),
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
                component: function (e) {
                    let { disabled: t, error: l, errorMessage: a } = e,
                        n = [
                            { id: "visa-1234", label: "Visa ending in 1234", icon: l0.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: l0.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: l0.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: l0.Be.AMEX },
                        ],
                        [i, r] = u.useState(n[0].id);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(lX.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: lW.noop,
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
                component: function (e) {
                    return (0, s.jsx)(ex.mz, {
                        stepConfigs: [],
                        children: (0, s.jsx)(lQ.P, { children: (0, s.jsx)(l6, { ...e }) }),
                    });
                },
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
                        [n, i] = u.useState(!1);
                    return (0, s.jsx)(lX._P, {
                        variant: l8[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? N.hes.PAYSAFE_CARD : N.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: lX.I0.Subscription,
                        options: [
                            { label: "Subscription", value: lX.I0.Subscription },
                            { label: "Subscription Trial", value: lX.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: lX.I0.OrbsRedemption },
                            { label: "Shop", value: lX.I0.Shop },
                            { label: "Nitro Gift", value: lX.I0.GiftNitro },
                            { label: "Shop Gift", value: lX.I0.GiftShop },
                            { label: "Game Shop Gift", value: lX.I0.GiftGameShop },
                            { label: "Orbs Game Shop Gift", value: lX.I0.OrbsGameShop },
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
                            (0, s.jsx)(lX.y, { onClick: N.tEg }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, s.jsx)(lX.Z4, { onComplete: N.tEg }),
                        ],
                    });
                },
            },
            {
                name: "Primitive: Plan Radio Group",
                id: "unified-checkout-plan-radio-group",
                component: function () {
                    let [e, t] = u.useState("yearly");
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)(lX.me, {
                            headingComponent: (0, s.jsx)(lX.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: eT.PremiumTypes.TIER_2,
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
                component: function (e) {
                    let { storeCountry: t } = e;
                    return (0, s.jsx)(lX.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: lY.d.US, options: l4 },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: function (e) {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, s.jsx)(lX.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: lY.d.US,
                        options: l4,
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
var ae =
    (((a = {}).PAYMENTS = "payments"),
    (a.VIRTUAL_CURRENCY = "virtual-currency"),
    (a.NITRO = "nitro"),
    (a.IDENTITY = "identity"),
    a);
let at = ["Revenue Storybook", "Revenue Playground"],
    al = {
        id: "payments",
        name: "Payments",
        groups: [
            ek,
            l5,
            {
                title: "Gift Card",
                stories: [
                    {
                        name: "Redemption Modal",
                        id: "gift-card-redemption-modal",
                        component: function () {
                            return (0, s.jsxs)(Q.B, {
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
                                            (0, ti.HF)({
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
                            return (0, s.jsxs)(Q.B, {
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
                                            (0, ti.cV)({
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
            { title: "Payment Elements", stories: [lB, lG, lU] },
            {
                title: "Add Payment (Legacy Checkout)",
                stories: [
                    {
                        name: "Add Payment Step",
                        id: "add-payment-step",
                        component: function () {
                            let { analyticsLocations: e } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                                t = u.useMemo(() => (0, d.A)(), []),
                                l = u.useCallback(() => {}, []);
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
            { title: "Checkout Review Step", stories: [eW, eF] },
            lf,
        ],
        tags: at,
        IconComponent: n.d,
    },
    aa = {
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
                        component: function (e) {
                            let { ctaText: t, linkText: l, linkPreText: a } = e;
                            return (0, s.jsx)(V.b, {
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
            { title: "Orb Checkout", stories: [tW] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, tF.A)();
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
        tags: at,
        IconComponent: i.C,
    },
    an = {
        id: "nitro",
        name: "Nitro",
        groups: [
            tg,
            { title: "Marketing Home", stories: [t_] },
            tD,
            {
                title: "Nitro Upsells",
                stories: [
                    {
                        name: "Burst Reactions Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.resolve().then(l.bind(l, 507545));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("22540"), l.e("63238")]).then(
                                        l.bind(l, 530951),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("41704"),
                                    ]).then(l.bind(l, 562011));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("35257"), l.e("66920")]).then(
                                        l.bind(l, 220763),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let [e] = u.useState("This is a sample long message that exceeds the character limit."),
                                t = u.useCallback(() => {
                                    (0, en.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([l.e("35257"), l.e("76725")]).then(
                                            l.bind(l, 798612),
                                        );
                                        return (l) => (0, s.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, s.jsx)(tO.LB, {
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
                            let [e, t] = u.useState(eT.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = u.useCallback(() => {
                                    let { title: t, body: a } = tU[e];
                                    (0, en.openModalLazy)(async () => {
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
                            return (0, s.jsxs)(tO.LB, {
                                children: [
                                    (0, s.jsx)(tO.MG, {
                                        children: (0, s.jsx)(Z.l, {
                                            label: "Upsell Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tw,
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
                            let [e, t] = u.useState(100),
                                a = u.useCallback(() => {
                                    (0, en.openModalLazy)(async () => {
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
                            return (0, s.jsxs)(tO.LB, {
                                children: [
                                    (0, s.jsx)(tO.MG, {
                                        children: (0, s.jsx)(Z.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tB,
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
                            let [e, t] = u.useState(tL.HL.AVATAR),
                                a = (0, q.bG)([e0.default], () => e0.default.getCurrentUser()),
                                n = u.useCallback(() => {
                                    null != a &&
                                        (0, en.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("93513"), l.e("79149")]).then(
                                                l.bind(l, 688796),
                                            );
                                            return (l) => (0, s.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, s.jsxs)(tO.LB, {
                                children: [
                                    (0, s.jsx)(tO.MG, {
                                        children: (0, s.jsx)(Z.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tG,
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
                            let e = (0, q.bG)([e0.default], () => e0.default.getCurrentUser()),
                                t = u.useCallback(() => {
                                    null != e &&
                                        (0, en.openModalLazy)(async () => {
                                            let { default: e } = await l.e("35476").then(l.bind(l, 835071));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("40716"),
                                    ]).then(l.bind(l, 629959));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("61129"),
                                    ]).then(l.bind(l, 475312));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
                                    let { default: e } = await l.e("93475").then(l.bind(l, 366638));
                                    return (t) => (0, s.jsx)(e, { handleLearnMore: () => {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tO.LB, {
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
                            let e = u.useCallback(() => {
                                (0, en.openModalLazy)(async () => {
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
                            return (0, s.jsx)(tO.LB, {
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
            { title: "Clips", stories: [e3] },
        ],
        tags: at,
        IconComponent: r.t,
    },
    ai = {
        id: "identity",
        name: "Identity",
        groups: [
            e5,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, q.bG)([e0.default], () => e0.default.getCurrentUser());
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
                                          (0, s.jsx)(te.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tn,
                                          }),
                                          (0, s.jsx)(tt.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-button",
                    },
                    {
                        name: "Avatar Decoration Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, q.bG)([e0.default], () => e0.default.getCurrentUser());
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
                                          (0, s.jsx)(te.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tn,
                                          }),
                                          (0, s.jsx)(tl.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-decoration-button",
                    },
                    {
                        name: "Nameplate Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, q.bG)([e0.default], () => e0.default.getCurrentUser());
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
                                          (0, s.jsx)(te.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tn,
                                          }),
                                          (0, s.jsx)(ta.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
            l$,
        ],
        tags: at,
        IconComponent: o.n,
    },
    ar = { playgroundBaseUrl: "revenue", collections: [al, aa, an, ai] };
