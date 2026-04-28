l.r(t),
    l.d(t, {
        nitroCollection: () => l6,
        virtualCurrencyCollection: () => l2,
        playgroundConfig: () => l8,
        identityCollection: () => l3,
        RevenuePlaygroundCollectionId: () => lZ,
        paymentsCollection: () => l1,
    });
var a,
    n = l(700623),
    i = l(318254),
    r = l(403581),
    o = l(950305),
    s = l(627968),
    u = l(64700),
    d = l(132500),
    c = l(793574),
    p = l(688810),
    m = l(166532),
    h = l(735305),
    b = l(635358),
    x = l(702841),
    y = l(834730),
    g = l(349288),
    f = l(231723),
    v = l(228366),
    E = l(830382),
    S = l(73825),
    C = l(937008),
    j = l(156312),
    T = l(491057),
    P = l(546042),
    A = l(97352),
    I = l(67480);
function _(e) {
    let { children: t, ...l } = e,
        a = u.useContext(j.Qv);
    return null == a ? null : (0, s.jsx)(j.Qv.Provider, { value: { ...a, ...l }, children: t });
}
let k = (e) => {
        let { skuId: t, isGift: l, applicationId: a } = e,
            { analyticsLocations: n } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
            i = u.useRef(null),
            r = u.useRef(null),
            [o, s] = u.useState(() => (0, d.A)());
        u.useEffect(() => {
            (i.current !== t || r.current !== l) && (s((0, d.A)()), (i.current = t), (r.current = l));
        }, [t, l]);
        let [m, h] = (0, x.yK)([I.A], () => [I.A.isFetching(t), I.A.get(t)]);
        return (
            u.useEffect(() => {
                null != h || m || (0, E.EX)(a, t, b.g.VARIANTS_GROUP).catch((e) => {});
            }, [a, t, h, m]),
            {
                loadId: o,
                analyticsLocations: n,
                handleClose: u.useCallback((e) => {}, []),
                handleComplete: u.useCallback(() => {}, []),
                isFetching: m,
                sku: h,
                skuId: t,
                isGift: l,
            }
        );
    },
    R = (e) =>
        (0, s.jsxs)("div", {
            style: { padding: 20 },
            children: [
                (0, s.jsx)(y.E, { variant: "text-md/normal", children: e.text }),
                (0, s.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, s.jsx)(g.Anchor, {
                        onClick: () => e.handleStepChange(e.originStep),
                        children: "← Go Back",
                    }),
                }),
            ],
        }),
    N = (e) => {
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
                hideErrors: h,
                disablePurchases: b,
                paymentContextOverrides: x,
            } = e,
            y = h ? { purchasePreviewError: null, purchaseError: null, ...x } : { ...x };
        b && (y.disablePurchasesForStorybook = !0);
        let g = `${a}-${n}-${c}`;
        return (0, s.jsx)(
            j.PaymentContextProvider,
            {
                stepConfigs: d,
                applicationId: l,
                skuIDs: null != a ? [a] : [],
                isGift: n,
                activeSubscription: null,
                purchaseType: u,
                excludeSubscriptionPlansBySKU: p,
                children: (0, s.jsx)(_, {
                    ...y,
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
                                g,
                            ),
                        }),
                    }),
                }),
            },
            g,
        );
    };
var D = l(652215);
let M = [
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(h.x, { ...e, breadcrumbSteps: [m.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
            options: { renderHeader: !0 },
        },
        {
            key: m.pn.REVIEW,
            renderStep: (e) =>
                (0, s.jsx)(R, { ...e, originStep: m.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
            options: {},
        },
    ],
    O = {
        title: "Add Payment (Legacy Checkout)",
        stories: [
            {
                name: "Add Payment Step",
                id: "add-payment-step",
                component: (e) => {
                    let { useStripeElements: t } = e,
                        { analyticsLocations: l } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                        a = u.useMemo(() => (0, d.A)(), []),
                        n = u.useCallback(() => {}, []);
                    return (0, s.jsx)(
                        N,
                        {
                            stepConfigs: M,
                            analyticsLocations: l,
                            applicationId: D.FYj,
                            initialPlanId: void 0,
                            skuId: null,
                            isGift: !1,
                            hideErrors: !1,
                            loadId: a,
                            purchaseType: D.VVm.ONE_TIME,
                            disablePurchases: !0,
                            excludeSubscriptionPlansBySKU: !0,
                            renderHeader: () => null,
                            onClose: n,
                            onComplete: () => {},
                            paymentContextOverrides: { paymentElementsEnabled: t },
                        },
                        `${a}-${t}`,
                    );
                },
                controls: { useStripeElements: { label: "Use Stripe Elements", type: "boolean", defaultValue: !1 } },
            },
        ],
    };
var L = l(162097),
    w = l(70926),
    V = l(240248),
    B = l(985018),
    U = l(439519);
let G = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: (e) => {
        let { ctaText: t, linkText: l, showNotificationBadge: a, cardAlignment: n } = e;
        return (0, s.jsx)("div", {
            className: U.tH,
            children: (0, s.jsx)(w.SS, {
                className: U.oz,
                ctaText: (0, V.uJ)(t) ? B.intl.string(B.t["J+vlIR"]) : t,
                ctaOnClick: D.tEg,
                showNotificationBadge: a,
                cardAlignment: n,
                linkText: (0, V.uJ)(l) ? B.intl.string(B.t.XRdyjz) : l,
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
                { label: "Start", value: w.cP.START },
                { label: "End", value: w.cP.END },
            ],
            defaultValue: w.cP.START,
        },
        linkText: { label: "Link Text", type: "text", defaultValue: "" },
    },
};
var $ = l(821609),
    H = l(65738);
let W = {
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
    F = {
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
                        (0, s.jsx)($.$, { onClick: () => i(a.balance), text: "Update Balance" }),
                    ],
                })
            );
        },
        controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...W },
    },
    z = {
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
                        (0, s.jsx)($.$, {
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
        controls: { loadingDuration: { label: "Loading Duration (ms)", type: "number", defaultValue: 500 }, ...W },
    };
var Y = l(488428),
    q = l(20742),
    K = l(17928),
    X = l(314116),
    J = l(990078),
    Q = l(862482),
    Z = l(364522),
    ee = l(331322),
    et = l(691885),
    el = l(404778),
    ea = l(292666),
    en = l(270003),
    ei = l(289873),
    er = l(192308),
    eo = l(323082),
    es = l(226991),
    eu = l(541689),
    ed = l(721923),
    ec = l(300233),
    ep = l(599941),
    em = l(817649),
    eh = l(4630),
    eb = l(482132),
    ex = l(615310),
    ey = l(532794),
    eg = l(216678),
    ef = l(194509),
    ev = l(761705),
    eE = l(71393),
    eS = l(166403),
    eC = l(788868),
    ej = l(705018);
function eT(e) {
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
let eP = "checkout-error-boundary-test-modal",
    eA = () => {
        let { setStep: e } = (0, ex.Ay)();
        return (0, s.jsx)(eb.dZ, {
            children: (0, s.jsxs)(ee.B, {
                direction: "vertical",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-sm/normal",
                        children:
                            "PaymentModal Step within PaymentContext loaded. Click below to navigate to a mock error step that will throw — the CheckoutErrorBoundary baked into PaymentContextProvider will catch it.",
                    }),
                    (0, s.jsx)($.$, {
                        variant: "primary",
                        text: "Navigate to Error Step",
                        onClick: () => e(m.pn.REVIEW),
                    }),
                ],
            }),
        });
    };
function eI(e) {
    let { errorType: t = "mock-error" } = e;
    if ("mock-error" === t) throw Error("Simulated error thrown inside a payment step");
    return "translation-key-error" === t
        ? (0, s.jsx)("div", {
              children: B.intl.format(ej.default.cRB332, {
                  avatar: (0, s.jsx)("div", { children: "Sample Avatar" }),
                  nickname: (0, s.jsx)("div", { children: "Sample Nickname" }),
                  username: (0, s.jsx)("div", { children: "Sample Username" }),
              }),
          })
        : (0, s.jsx)("div", { children: "Unknown error type" });
}
let e_ = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = u.useState(eC.pe.TIER_2),
                    [l, a] = u.useState(null),
                    n = (0, K.yK)([eE.A], () => eE.A.getGuildsArray()),
                    [i] = (0, K.yK)([eS.A], () => [eS.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, m] = u.useState(r.length > 0 ? r[0].value : null),
                    [h, b] = u.useState(""),
                    [x, f] = u.useState({ plan_id: eC.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    v = "true" !== x.gift && null != i,
                    [E, C] = u.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: j } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                    [T, P] = u.useState(""),
                    [A, I] = u.useState(D.dJq),
                    { balance: _, isFetching: k, error: R } = (0, ev.W)(),
                    { isSubmitting: N, responseMessage: M, redeemVirtualCurrency: O } = (0, ev.Q)(),
                    [L, w] = u.useState(D.dJq),
                    [V, B] = u.useState(""),
                    [G, W] = u.useState(D.dJq);
                return (0, s.jsx)(p.f5, {
                    value: j,
                    children: (0, s.jsx)(Z.Ip, {
                        className: U.XG,
                        children: (0, s.jsxs)(ee.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, s.jsxs)(ee.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(et.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: eC.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eC.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eC.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(ef.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: Q.XD.PRIMARY,
                                            look: Q.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(ee.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(et.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: eC.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eC.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eC.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => a(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)($.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, ey.A)({ subscriptionTier: l, analyticsLocations: j }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(ee.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(et.l, {
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
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(ee.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(g.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, s.jsxs)(ee.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(ea.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: h,
                                                    onChange: (e) => b(e),
                                                }),
                                                (0, s.jsx)(J.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: h.length < 1,
                                                    children: (0, s.jsx)($.$, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: h.length < 1,
                                                        onClick: () => {
                                                            window.open(D.BVt.BILLING_PROMOTION_REDEMPTION(h));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(en.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, s.jsx)(et.l, {
                                            label: "Plan",
                                            value: x.plan_id,
                                            options: [
                                                { id: "tier_2", value: eC.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: eC.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: eC.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                f((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(et.l, {
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
                                    children: (0, s.jsx)($.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: v,
                                        onClick: () => {
                                            window.open(D.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + Y.stringify({ ...x }));
                                        },
                                    }),
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(en.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, s.jsxs)(ee.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                k
                                                    ? (0, s.jsx)("div", {
                                                          className: U.wG,
                                                          children: (0, s.jsx)(ei.y, { type: ei.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, s.jsxs)("div", {
                                                          className: U.dB,
                                                          children: [
                                                              null !== R &&
                                                                  (0, s.jsxs)(y.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          R.message,
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
                                        (0, s.jsx)(ea.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: L,
                                            onChange: (e) => w(e),
                                        }),
                                        (0, s.jsx)($.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: N,
                                            onClick: () => O(L, (0, d.A)()),
                                        }),
                                        null != M && (0, s.jsx)(y.E, { variant: "text-sm/normal", children: M }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(en.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, s.jsx)(et.l, {
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
                                            children: (0, s.jsx)(eT, { selectedGuildForGuildSub: E }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(ee.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsxs)(en.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, s.jsx)(ea.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: T,
                                                    onChange: P,
                                                }),
                                                (0, s.jsx)(ea.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: A,
                                                    onChange: (e) => I(e),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)($.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, eh.openIAPPurchaseModal)({
                                                    applicationId: T,
                                                    skuId: A,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: D.liQ.IN_APP },
                                                    context: D.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsx)(ee.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, s.jsx)(en.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, s.jsxs)(ee.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(ea.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: V,
                                                    onChange: B,
                                                }),
                                                (0, s.jsx)(ea.k, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: G,
                                                    onChange: (e) => W(e),
                                                }),
                                                (0, s.jsx)($.$, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, eg.A)({
                                                            applicationId: V,
                                                            skuId: G,
                                                            analyticsLocations: j,
                                                            checkoutFlow: es.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsx)(en.n, {
                                    label: "Helpers",
                                    children: (0, s.jsxs)(ee.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, s.jsx)($.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, S.YG)(),
                                            }),
                                            (0, s.jsx)($.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, eo.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsx)(en.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, s.jsx)($.$, {
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
            name: "Checkout Error Boundary",
            id: "checkout-error-boundary",
            component: (e) => {
                let { errorBoundaryVariant: t, errorType: l } = e,
                    { analyticsLocations: a } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, s.jsx)(p.f5, {
                    value: a,
                    children: (0, s.jsxs)(ee.B, {
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
                            (0, s.jsx)($.$, {
                                variant: "primary",
                                text: "Open Error Boundary Test Modal",
                                onClick: () =>
                                    (function (e, t) {
                                        let { errorBoundaryVariant: l, errorType: a } = t,
                                            n = [
                                                {
                                                    key: m.pn.PLAN_SELECT,
                                                    renderStep: () => (0, s.jsx)(eA, {}),
                                                    renderHeader: () =>
                                                        (0, s.jsx)(q.rQ, { title: "Checkout Error Boundary Test" }),
                                                },
                                                {
                                                    key: m.pn.REVIEW,
                                                    renderStep: () =>
                                                        (0, s.jsx)(eb.dZ, {
                                                            children: (0, s.jsx)(eI, { errorType: a }),
                                                        }),
                                                },
                                            ],
                                            i = () => (0, er.closeModal)(eP);
                                        return (0, er.openModalLazy)(
                                            async () => {
                                                let t;
                                                return (
                                                    "show-alert" === l
                                                        ? (t = (e) => {
                                                              i();
                                                              let t = "string" == typeof e ? e : e.message;
                                                              (0, X.A)({
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
                                            { onCloseRequest: i, onCloseCallback: i, modalKey: eP },
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
var ek = l(623020),
    eR = l(927578),
    eN = l(492518),
    eD = l(758836);
let eM = () => ({
        options: [
            { value: eD.ck["0"], label: `${eD.ck["0"]} (Cat Ears)` },
            { value: eD.ck["1"], label: `${eD.ck["1"]} (Angry)` },
            { value: eD.ck["2"], label: `${eD.ck["2"]} (Aurora Bundle)` },
            { value: eD.ck["3"], label: `${eD.ck["3"]} (Heartbloom)` },
            { value: eD.ck["4"], label: `${eD.ck["4"]} (Aurora Dreams)` },
            { value: eD.ck["5"], label: `${eD.ck["5"]} (Sakura Ink)` },
            { value: eD.ck["6"], label: `${eD.ck["6"]} (Of Ink and Steel)` },
            { value: eD.ck["7"], label: `${eD.ck["7"]} (Twilight)` },
            { value: eD.ck["8"], label: `${eD.ck["8"]} (Red Dragon)` },
            { value: eD.ck["9"], label: `${eD.ck["9"]} (Aurora)` },
        ],
        defaultValue: eD.ck["0"],
    }),
    eO = [
        {
            key: m.pn.REVIEW,
            renderStep: (e) => (0, s.jsx)(ek._, { ...e }),
            options: { useBreadcrumbLabel: () => B.intl.string(B.t.QBnNHq) },
        },
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => B.intl.string(B.t.QBnNHq) },
        },
        {
            key: m.pn.CONFIRM,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => B.intl.string(B.t.QBnNHq) },
        },
        {
            key: m.pn.PLAN_SELECT,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => B.intl.string(B.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    eL = () => (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    ew = {
        isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
        hideErrors: { label: "Hide Errors", type: "boolean", defaultValue: !0 },
    },
    eV = eM(),
    eB = {
        name: "Collectibles Review Step",
        id: "collectibles-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l, hideErrors: a } = e,
                {
                    analyticsLocations: n,
                    loadId: i,
                    handleClose: r,
                    handleComplete: o,
                    isFetching: u,
                    sku: d,
                } = k({ skuId: t, isGift: l, applicationId: D.FYj }),
                c = eR.Ay.isPremiumSku(t);
            return u || null == d || c
                ? (0, s.jsx)(eN.k, {})
                : (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(N, {
                              stepConfigs: eO,
                              analyticsLocations: n,
                              applicationId: D.FYj,
                              initialPlanId: void 0,
                              skuId: t,
                              isGift: l,
                              hideErrors: a,
                              loadId: i,
                              purchaseType: D.VVm.ONE_TIME,
                              disablePurchases: !0,
                              excludeSubscriptionPlansBySKU: !0,
                              onClose: r,
                              onComplete: o,
                          }),
                          (0, s.jsx)(eL, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: eV.options, defaultValue: eV.defaultValue },
            ...ew,
        },
    },
    eU = {
        name: "Premium Review Step",
        id: "premium-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l, hideErrors: a } = e,
                {
                    analyticsLocations: n,
                    loadId: i,
                    handleClose: r,
                    handleComplete: o,
                    isFetching: d,
                    sku: c,
                } = k({ skuId: t, isGift: l, applicationId: eC.tv }),
                p = eR.Ay.isPremiumSku(t),
                m = p ? eC.zE[t] : void 0,
                [h, b] = u.useState(m),
                y = u.useRef(!1);
            u.useEffect(() => {
                y.current || null == m || ((y.current = !0), b(m));
            }, [m, h]);
            let { isLoadedForPremiumSKUs: g, selectedPlan: f } = ((e) => {
                let { subscriptionPlanId: t } = e;
                u.useEffect(() => {
                    A.A.isLoadedForPremiumSKUs() || v.h.wait(() => (0, S.zS)());
                }, []);
                let l = (0, x.bG)([A.A], () => (null != t ? A.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, x.bG)([A.A], () => A.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: h });
            return !d && null != c && g && p && null != f
                ? (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(N, {
                              stepConfigs: eO,
                              analyticsLocations: n,
                              applicationId: eC.tv,
                              initialPlanId: m,
                              skuId: t,
                              isGift: l,
                              hideErrors: a,
                              loadId: i,
                              purchaseType: D.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: r,
                              onComplete: o,
                              paymentContextOverrides: {},
                          }),
                          (0, s.jsx)(eL, {}),
                      ],
                  })
                : (0, s.jsx)(eN.k, {});
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { value: eC.pe.TIER_0, label: `${eC.pe.TIER_0} (Nitro Basic)` },
                    { value: eC.pe.TIER_2, label: `${eC.pe.TIER_2} (Nitro Standard)` },
                ],
                defaultValue: eC.pe.TIER_0,
            },
            ...ew,
        },
    };
var eG = l(27192),
    e$ = l(359778),
    eH = l(939249),
    eW = l(97808),
    eF = l(778712),
    ez = l(401648),
    eY = l(664111),
    eq = l(994500),
    eK = l(287809),
    eX = l(403362),
    eJ = l(784018),
    eQ = l(94269);
let eZ = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, K.yK)([eq.A, eK.default], () =>
                eq.A.getFriendIDs()
                    .map((e) => eK.default.getUser(e))
                    .filter(eX.Vq),
            ),
            [r, o] = u.useState(new Set()),
            d = u.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return t ? a.add(e) : a.delete(e), a;
                });
            }, []),
            c = u.useMemo(() => Array.from(r), [r]),
            p = u.useCallback(() => (0, s.jsx)(ez.A, { title: a, participantIds: c }), [a, c]),
            m = "landscape" === l ? 640 : 360;
        return (0, s.jsxs)("div", {
            className: eQ.iE,
            children: [
                (0, s.jsx)("div", {
                    className: eQ.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, s.jsx)(eY.default, {
                        src: t,
                        active: n,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: f.ip.ENTERED,
                    }),
                }),
                (0, s.jsxs)(e$.Z, {
                    className: eQ.nd,
                    type: e$.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, s.jsxs)("div", {
                            className: eQ.Iv,
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
                        (0, s.jsx)(el.c, {}),
                        0 === i.length
                            ? (0, s.jsx)("div", {
                                  className: eQ.p$,
                                  children: (0, s.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, s.jsx)("div", {
                                  className: eQ.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: i.map((e) => {
                                      let t = r.has(e.id);
                                      return (0, s.jsxs)(
                                          eH.D,
                                          {
                                              className: eQ.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => d(e.id, !t),
                                              children: [
                                                  (0, s.jsx)(eG.Lc, { value: t, size: 16 }),
                                                  (0, s.jsx)(eW.eu, {
                                                      src: e.getAvatarURL(void 0, 24),
                                                      size: eF._3.SIZE_24,
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
var e0 = l(930349);
function e1() {
    return (0, s.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function e2() {
    return (0, s.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let e6 = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    e3 = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, accessibleLabel: l } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e0.kL, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                children: (0, s.jsx)(e1, {}),
                            }),
                            (0, s.jsx)(e0.kL, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                children: (0, s.jsx)(e2, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: e6,
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
                },
            },
            {
                name: "Edit Button",
                component: function (e) {
                    let { variant: t, showOverlay: l, accessibleLabel: a } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                children: (0, s.jsx)(e1, {}),
                            }),
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                children: (0, s.jsx)(e2, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: e6,
                    showOverlay: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
                },
            },
            {
                name: "Edit Button - Deletable",
                component: function (e) {
                    let { variant: t, showOverlay: l, accessibleLabel: a, deleteType: n, deleteAccessibleLabel: i } = e,
                        r = { type: n, accessibleLabel: i, onClick: () => {} };
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                deleteButtonConfig: r,
                                children: (0, s.jsx)(e1, {}),
                            }),
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                deleteButtonConfig: r,
                                children: (0, s.jsx)(e2, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: e6,
                    showOverlay: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
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
var e8 = l(687021),
    e9 = l(487233),
    e4 = l(230635),
    e7 = l(473219);
let e5 = { value: "", label: "No Guild (main profile)" };
var te = l(99696),
    tt = l(534514),
    tl = l(599147),
    ta = l(808411),
    tn = l(661531),
    ti = l(116833),
    tr = l(720879),
    to = l(425713);
let ts = {
    bronze: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
    },
    silver: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
    },
    gold: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
    },
    platinum: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
    },
    diamond: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    },
    emerald: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
    },
    ruby: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
    },
    opal: {
        type: "custom",
        start: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
        end: tn.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
    },
};
var tu = l(624716),
    td = l(872725);
let tc = { name: "Expressive Progress", component: ta.A, id: "expressive-progress", controls: {} },
    tp = { name: "Tab Tooltip", component: tu.A, id: "tab-tooltip", controls: {} },
    tm = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, s.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, s.jsx)(
                            td.A,
                            {
                                artboard: e.artboard,
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: e$.s.PRIMARY,
                                glowing: !0,
                                children: (0, s.jsxs)("div", {
                                    style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 },
                                    children: [
                                        (0, s.jsx)(tt.D, { variant: "heading-lg/semibold", children: "Card Title" }),
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
            { name: "Cancellation Flow", component: () => (0, s.jsx)(tl.o, {}), id: "cancellation-flow", controls: {} },
            tc,
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
                            progressCirclePercent: d,
                            progressCircleUrgency: c,
                            delay: p,
                            size: m,
                            gradientColor: h,
                            estimatedTooltipHeight: b,
                        } = e,
                        x = u.useRef(null),
                        g = u.useRef(null),
                        f = u.useMemo(
                            () =>
                                ({
                                    bronze: eC.Ac.PREMIUM_TENURE_1_MONTH,
                                    silver: eC.Ac.PREMIUM_TENURE_3_MONTH,
                                    gold: eC.Ac.PREMIUM_TENURE_6_MONTH,
                                    platinum: eC.Ac.PREMIUM_TENURE_12_MONTH,
                                    diamond: eC.Ac.PREMIUM_TENURE_24_MONTH,
                                    emerald: eC.Ac.PREMIUM_TENURE_36_MONTH,
                                    ruby: eC.Ac.PREMIUM_TENURE_60_MONTH,
                                    opal: eC.Ac.PREMIUM_TENURE_72_MONTH,
                                })[i],
                            [i],
                        ),
                        v = null != f ? (0, to.I)(f).standard : null,
                        E = u.useMemo(() => {
                            if (null == f) return "";
                            let e = eC.VD[f];
                            return (
                                B.intl.string(B.t.lG6a5x) +
                                " " +
                                B.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [f]),
                        S = u.useMemo(() => {
                            if (!a || null == v) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: d, progressCircleUrgency: c }
                                : {};
                            return {
                                type: "dynamic",
                                component: ti.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: v, alt: E, ...e },
                            };
                        }, [a, v, E, r, o, d, c]),
                        C = {
                            title: t,
                            body: l,
                            graphic: S,
                            actions: u.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: u.useMemo(() => ("string" == typeof h && h in ts ? ts[h] : h), [h]),
                            estimatedTooltipHeight: b,
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
                                    (0, s.jsx)(tr.L, {
                                        targetElementRef: x,
                                        ...C,
                                        children: (0, s.jsx)($.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, s.jsx)(tr.L, {
                                        targetElementRef: g,
                                        ...C,
                                        children: (0, s.jsx)($.$, { buttonRef: g, variant: "primary", text: "Right" }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "premium-tooltip",
                controls: {
                    title: { label: "Title", type: "text", defaultValue: B.intl.string(B.t.lG6a5x).toUpperCase() },
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
            tp,
        ],
    };
var th = l(691540),
    tb = l(857250),
    tx = l(97483),
    ty = l(750338),
    tg = l(121),
    tf = l(576765),
    tv = l(88433);
let tE = { none: void 0, nitroWheel: r.t },
    tS = {
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
                    badgeText: h,
                    badgeVariant: b,
                    isReducedMotion: x,
                    previewImageStyle: y,
                } = e,
                g = () => (0, th.P0)((0, tb.o)("CTA clicked!", tx.Ck.SUCCESS)),
                f = tE[d],
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
                                    ...(o.length > 0 ? [{ text: o, variant: u, onClick: g }] : []),
                                ],
                            }
                          : {};
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(ty.A, {
                    name: tg.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tf.A,
                    videoUrl: tv.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: h.length > 0 ? h : void 0,
                    badgeVariant: b,
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
                defaultValue: "Use any emoji anywhere — even in servers that don't have them unlocked.",
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
                defaultValue: tg.A0.LARGE,
                options: [
                    { label: "Small", value: tg.A0.SMALL },
                    { label: "Medium", value: tg.A0.MEDIUM },
                    { label: "Large", value: tg.A0.LARGE },
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
                defaultValue: tg.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: tg.Tb.CONTAINED },
                    { label: "Overlay", value: tg.Tb.OVERLAY },
                ],
            },
        },
    };
var tC = l(398590),
    tj = l(920050),
    tT = l(744064),
    tP = l(976860);
let tA = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, s.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, s.jsx)(tT.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, th.P0)((0, tb.o)("CTA Clicked!", tx.Ck.SUCCESS)),
                        }),
                        (0, s.jsx)(tI, {}),
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
function tI() {
    let [e, t] = (0, u.useState)("customSounds"),
        l = `${D.BVt.NITRO_HOME}?perk=${e}`;
    return (0, s.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, s.jsx)(ea.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, s.jsx)($.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, tC.jH)(), (0, tP.pX)(D.BVt.ME), setTimeout(() => (0, tP.pX)(l), 200);
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
                        children: Object.values(tj).map((e) => (0, s.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var t_ = l(52822),
    tk = l(339984);
let tR = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: eC.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: eC.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: eC.e.NAMEPLATE_MODAL_UPSELL },
    ],
    tN = {
        [eC.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [eC.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [eC.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    },
    tD = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: D.qlD },
    ],
    tM = [
        { id: "avatar", label: "Avatar", value: tk.HL.AVATAR },
        { id: "banner", label: "Banner", value: tk.HL.BANNER },
    ];
var tO = l(652165);
let tL = "1271174907081789524",
    tw = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: (e) => {
            let { skuId: t } = e;
            return (0, s.jsx)("div", {
                className: U.YG,
                children: (0, s.jsx)($.$, {
                    onClick: () => {
                        (0, tO.B4)({
                            skuId: t,
                            onCheckoutSuccess: (e) => {
                                let { skuId: t, entitlements: l } = e;
                                console.log(`Orb Checkout Success for SKU: ${t}. Entitlement(s): `, l, Date.now());
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
                    { skuId: tL, skuName: "Oni's Curse (Deco)" },
                ].map((e) => {
                    let { skuId: t, skuName: l } = e;
                    return { label: l, value: t };
                }),
                defaultValue: tL,
            },
        },
    };
var tV = l(324861),
    tB = l(73079),
    tU = l(818348),
    tG = l(76488),
    t$ = l(877062);
let tH = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, s.jsx)(j.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsxs)(t_.wn, {
                children: [
                    (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, s.jsx)(t_.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, s.jsx)($.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: () => {
                                console.log("Opening deep link... ", t),
                                    t$.A.launch(t, (e) => {
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
var tW = l(636537),
    tF = l(192087),
    tz = l(295405),
    tY = l(71532);
let tq = eM();
async function tK(e) {
    return (await tW.Bo.post({ url: D.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function tX(e) {
    return (await tW.Bo.get({ url: D.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function tJ(e, t) {
    await tW.Bo.patch({
        url: D.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function tQ() {
    let [e, t] = u.useState(!1),
        [l, a] = u.useState(!1),
        [n, i] = u.useState(null),
        [r, o] = u.useState(null),
        [d, c] = u.useState(tq.defaultValue),
        [p, m] = u.useState(null),
        h = (0, K.bG)([tz.A], () => tz.A.paymentSources),
        b = (0, K.bG)([tz.A], () => tz.A.hasFetchedPaymentSources),
        x = (0, K.bG)([tz.A], () => tz.A.defaultPaymentSourceId);
    u.useEffect(() => {
        b || (0, eo.$o)();
    }, [b]),
        u.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]);
    let g = u.useRef(null);
    u.useEffect(() => {
        if (null == r || "" === r) {
            g.current = p;
            return;
        }
        if (p !== g.current) {
            if (null == p || "" === p) {
                g.current = p;
                return;
            }
            tJ(r, p)
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
    let f = u.useMemo(
            () =>
                Object.values(h).map((e) => {
                    var t;
                    let l,
                        a = ((t = e.type), null != (l = tF.w[t]) ? l() : String(t));
                    if (e.type === tU.he.CARD && "last4" in e) {
                        let t = e.last4 ?? "",
                            l = e.brand ?? "Unknown";
                        a += ` - ****${t} (${l})`;
                    } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                    return { id: e.id, value: e.id, label: a };
                }),
            [h],
        ),
        v = async () => {
            if (null == p || "" === p) return void i("Please select a payment source first.");
            if (null == d || "" === d || d === D.dJq) return void i("Please select a SKU ID.");
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
                let e = await tK(r);
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
                                let n = await (0, tY.Cv)();
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
                                    (t = (await tX(r)).status),
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
                                let e = (await tX(r)).status;
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
    return (0, s.jsxs)(t_.wn, {
        children: [
            (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, s.jsxs)(t_.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-md/normal",
                        className: tG.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, s.jsxs)(en.n, {
                        label: "Configuration",
                        children: [
                            (0, s.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, s.jsx)(et.l, {
                                    selectionMode: "single",
                                    value: d,
                                    onSelectionChange: c,
                                    options: tq.options,
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
                                    (0, s.jsx)(et.l, {
                                        selectionMode: "single",
                                        value: p,
                                        onSelectionChange: m,
                                        options: f,
                                        placeholder: "Select a payment source...",
                                        disabled: !b,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !b &&
                                        (0, s.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: tG.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, s.jsx)($.$, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: v,
                                disabled: e || null == p || "" === p || null == d || "" === d || d === D.dJq,
                            }),
                            (0, s.jsx)($.$, {
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
                            className: tG.cW,
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
var tZ = l(405139),
    t0 = l(19311),
    t1 = l(869177);
function t2(e) {
    let t = u.useRef(null),
        l = {
            paymentLabel: B.intl.string(B.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, s.jsx)(ei.y, { style: { marginTop: 16 }, type: ei.t.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, s.jsx)(t1.V, { ...l, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, s.jsx)(tZ.Mv, { ...l, ...e })
          : (0, s.jsx)(tZ.dP, { ...l, ...e });
}
function t6(e) {
    let { paymentRequestWallet: t } = e,
        l = u.useRef(null),
        [a, n] = u.useState(!1);
    return (0, s.jsx)(t_.e_, {
        footer: (0, s.jsx)(t0.Ay, {
            primaryCTA: t0.Ay.CTAType.CONTINUE,
            primaryText: B.intl.string("applePay" === t ? B.t.WoXvJL : B.t.wnVVr0),
            primaryDisabled: !a,
            onPrimary: () => void (null != l.current && l.current.show()),
            onBack: () => {},
        }),
        children: (0, s.jsx)(t2, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: l,
            onValidPaymentRequest: () => n(!0),
        }),
    });
}
var t3 = l(150934),
    t8 = l(36167),
    t9 = l(26279);
let t4 = [
        { id: "tier_2", value: eC.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eC.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eC.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    t7 = [
        { id: "meta_quest", value: t9.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function t5() {
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
function le(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(eC.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = u.useState(!1),
        { error: r, handleSuccess: o, handleFailure: c } = t5(),
        p = u.useCallback(() => {
            let e = (0, d.A)();
            (0, t8.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, c);
        }, [l, n, t, o, c]);
    return (0, s.jsxs)(t_.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, s.jsxs)(ee.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, s.jsx)(et.l, {
                        label: "Plan",
                        value: l,
                        options: t4,
                        onSelectionChange: a,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, s.jsx)(et.l, {
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
            (0, s.jsx)($.$, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: p }),
            null != r && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "status-danger", children: r }),
        ],
    });
}
function lt(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = t5(),
        i = u.useCallback(() => {
            if (null == t) return;
            let e = (0, d.A)(),
                l = D.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, t8.xq)(l, a, n);
        }, [t, a, n]);
    return (0, s.jsxs)(t_.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, s.jsx)($.$, {
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
function ll(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = t5(),
        o = u.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, d.A)(),
                a = D.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, t8.xq)(a, i, r);
        }, [l, i, r, t]);
    return (0, s.jsxs)(t_.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, s.jsx)(ea.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, s.jsx)($.$, {
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
var la = l(342393),
    ln = l(260598),
    li = l(558179);
let lr = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    lo = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    ls = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    lu = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    },
    ld = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function lc() {
    let [e, t] = u.useState(ld(ls)),
        [l, a] = u.useState(ls),
        [n, i] = u.useState(ld(lu)),
        [r, o] = u.useState(lu),
        [d, c] = u.useState(null),
        [p, m] = u.useState(
            (0, s.jsx)(t_.a8, {
                errorLabel: lr.CONFIGURABLE,
                elementOptions: ls,
                children: (0, s.jsx)(la.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: lu,
                }),
            }),
        );
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: tG.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: tG.cW,
                children: [
                    (0, s.jsx)("b", { children: "elements.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(t_.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: tG.PC,
                children: (0, s.jsx)(ln.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, s.jsxs)(y.E, {
                variant: "text-md/normal",
                className: tG.cW,
                children: [
                    (0, s.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(t_.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(t_.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: tG.PC,
                children: (0, s.jsx)(ln.f, {
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
                className: tG.Ut,
                children: (0, s.jsx)($.$, {
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
                                                className: tG.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, s.jsx)(t_.a8, {
                                                errorLabel: lr.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, s.jsx)(la.ExpressCheckoutElement, {
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
            (0, s.jsx)(y.E, { variant: "text-md/normal", className: tG.cW, children: "Current Element Options:" }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(li.A, { className: tG.wD, children: `\`\` ${ld(l)} \`\`` }),
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                className: tG.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(li.A, { className: tG.wD, children: `\`\` ${ld(r)} \`\`` }),
            }),
            p,
        ],
    });
}
let lp = {
    title: "Miscellaneous",
    stories: [
        tH,
        {
            name: "Redirect To Standalone",
            id: "standalone-redirect",
            component: function () {
                let [e, t] = u.useState(!1),
                    [l, a] = u.useState(t9.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
                    n = u.useCallback((e) => {
                        t(e);
                    }, []),
                    i = e ? l : void 0;
                return (0, s.jsxs)(t_.wn, {
                    children: [
                        (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Redirect To Standalone" }),
                        (0, s.jsx)(t_.nB, {}),
                        (0, s.jsxs)(ee.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, s.jsx)(t3.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                (0, s.jsx)(et.l, {
                                    label: "Flow Type",
                                    value: l,
                                    options: t7,
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
                        (0, s.jsx)(le, { flowType: i }),
                        (0, s.jsx)(lt, { flowType: i }),
                        (0, s.jsx)(ll, { flowType: i }),
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
                    children: (0, s.jsx)(tQ, {}),
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
                    children: (0, s.jsxs)(t_.wn, {
                        children: [
                            (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Payment Request" }),
                            (0, s.jsx)(t_.Hq, {
                                label: "Default View",
                                children: (0, s.jsx)(t2, { paymentRequestWallet: t }),
                            }),
                            (0, s.jsx)(t_.Hq, {
                                label: "Connector View",
                                children: (0, s.jsx)(t2, { paymentRequestWallet: t, renderConnectorView: !0 }),
                            }),
                            (0, s.jsx)(t_.Hq, {
                                label: "Add Payment Step Body Connector View",
                                children: (0, s.jsx)(t6, { paymentRequestWallet: t }),
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
                        paymentSourceTypeRestrictions: l ? [tU.he.CARD.valueOf()] : null,
                    };
                return (0, s.jsx)(j.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(t_.wn, {
                        children: [
                            (0, s.jsx)(tt.D, {
                                variant: "heading-xl/semibold",
                                children: "Choose Payment Source Type",
                            }),
                            (0, s.jsx)(t_.e_, {
                                className: tG.Bt,
                                children: (0, s.jsx)("div", { className: tG.VS, children: (0, s.jsx)(tB.A, { ...n }) }),
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
                    children: (0, s.jsxs)(t_.wn, {
                        children: [
                            (0, s.jsx)(tt.D, {
                                variant: "heading-xl/semibold",
                                children: "Stripe Express Checkout Buttons",
                            }),
                            (0, s.jsx)(t_.Hq, {
                                label: lr.DEFAULT,
                                children: (0, s.jsx)("div", {
                                    children: (0, s.jsx)(t_.a8, {
                                        errorLabel: lr.DEFAULT,
                                        children: (0, s.jsx)(la.ExpressCheckoutElement, {
                                            onConfirm: (e) => {
                                                console.log("ExpressCheckoutElement onConfirm event: ", e);
                                            },
                                            options: {},
                                        }),
                                    }),
                                }),
                            }),
                            ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                let t = lr[e];
                                return (0, s.jsx)(
                                    t_.Hq,
                                    {
                                        label: t,
                                        children: (0, s.jsxs)("div", {
                                            children: [
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    className: tG.cW,
                                                    children: "expressCheckoutElement.options:",
                                                }),
                                                (0, s.jsx)(y.E, {
                                                    variant: "text-md/normal",
                                                    children: (0, s.jsx)(li.A, {
                                                        className: tG.wD,
                                                        children: `\`\`${ld(lo[e])} \`\``,
                                                    }),
                                                }),
                                                (0, s.jsx)(t_.a8, {
                                                    errorLabel: t,
                                                    children: (0, s.jsx)(la.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: lo[e],
                                                    }),
                                                }),
                                            ],
                                        }),
                                    },
                                    e,
                                );
                            }),
                            (0, s.jsx)(t_.Hq, { label: lr.CONFIGURABLE, children: (0, s.jsx)(lc, {}) }),
                        ],
                    }),
                });
            },
        },
    ],
};
var lm = l(503698),
    lh = l.n(lm),
    lb = l(683071),
    lx = l(942340),
    ly = l(211528),
    lg = l(626584),
    lf = l(87952),
    lv = l(624479),
    lE = l(408278),
    lS = l(957565),
    lC = l(534472);
let lj = (e) => {
        let { label: t, value: l } = e;
        return (0, s.jsxs)("div", {
            className: lC.I,
            children: [
                (0, s.jsxs)(y.E, { variant: "text-sm/medium", children: [t, ":"] }),
                (0, s.jsx)(y.E, { variant: "text-sm/normal", children: l }),
                (0, s.jsx)(lE.K, {
                    size: "sm",
                    "aria-label": "Copy Link",
                    variant: "icon-only",
                    icon: lv.T,
                    onClick: () => (0, lS.C)(l),
                }),
            ],
        });
    },
    lT = (e) => {
        let { children: t, stepConfigs: l } = e;
        return (0, s.jsxs)(j.PaymentContextProvider, {
            stepConfigs: l,
            skuIDs: [],
            activeSubscription: null,
            children: [(0, s.jsx)(eb.dZ, { children: t }), (0, s.jsx)(eb.Ay, { header: null })],
        });
    };
var lP = l(935377);
let lA = new lg.A("PaymentElement.web.stories"),
    lI = () => {
        let { elementsAppearanceOptions: e } = (0, lx.E)();
        return (0, s.jsxs)("div", {
            children: [
                (0, s.jsx)(tt.D, { variant: "heading-lg/semibold", className: U.tm, children: "Default Options" }),
                (0, s.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, l] = e;
                        return (0, s.jsx)(lj, { label: t, value: l }, t);
                    }),
                }),
            ],
        });
    },
    l_ = (e) => {
        let {
                theme: t,
                colorText: l,
                colorBackground: a,
                inputBackgroundColor: n,
                tabBackgroundColor: i,
                storyType: r,
            } = e,
            o = (0, lf.A)(),
            { stripePaymentElementProps: u, stripeAddressElementProps: d } = (0, ly.wD)({
                step: m.pn.PAYMENT_ELEMENT,
                handleStepChange: D.tEg,
                onBillingAddressChange: D.tEg,
                paymentElementsEnabled: !0,
                logger: lA,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: c,
                isLoading: p,
                setupError: h,
                customPaymentMethodIdsToSourceTypes: b,
            } = (0, lx.p)({
                onSetupError: (e) => {
                    lA.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: l,
                    colorBackground: a,
                    inputBackgroundColor: n,
                    tabBackgroundColor: i,
                },
            });
        return p || null != h || null == o
            ? (0, s.jsx)(ly.eR, {})
            : (0, s.jsxs)("div", {
                  children: [
                      (0, s.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, s.jsx)(lb.w, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, s.jsxs)("div", {
                          className: lP.ny,
                          children: [
                              (0, s.jsx)(lT, {
                                  stepConfigs: [
                                      {
                                          key: m.pn.ADD_PAYMENT_STEPS,
                                          renderStep: () => (0, s.jsx)("div", {}),
                                          options: {
                                              renderHeader: !1,
                                              bodyClassName: "joined-payment-address-elements" === r ? lP.fF : lP.u1,
                                          },
                                      },
                                  ],
                                  children: (0, s.jsx)("div", {
                                      className: lh()(lP.o6, { [lP.X1]: "joined-payment-address-elements" === r }),
                                      children: (0, s.jsxs)(la.Elements, {
                                          stripe: o,
                                          options: { ...c },
                                          children: [
                                              "stripe-address-element" === r
                                                  ? (0, s.jsx)("div", {
                                                        className: U.R,
                                                        children: (0, s.jsx)(ly.Wf, {
                                                            ...u,
                                                            customPaymentMethodIdsToSourceTypes: b,
                                                            step: m.pn.PAYMENT_ELEMENT,
                                                        }),
                                                    })
                                                  : (0, s.jsx)(ly.Wf, {
                                                        ...u,
                                                        customPaymentMethodIdsToSourceTypes: b,
                                                        step: m.pn.PAYMENT_ELEMENT,
                                                    }),
                                              ("joined-payment-address-elements" === r ||
                                                  "stripe-address-element" === r) &&
                                                  (0, s.jsx)(ly.KS, {
                                                      ...d,
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
                              (0, s.jsx)(lI, {}),
                          ],
                      }),
                  ],
              });
    },
    lk = {
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
    },
    lR = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: (e) => (0, s.jsx)(l_, { ...e, storyType: "joined-payment-address-elements" }),
        controls: { ...lk },
    },
    lN = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: (e) => (0, s.jsx)(l_, { ...e, storyType: "stripe-payment-element" }),
        controls: { ...lk },
    },
    lD = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: (e) => (0, s.jsx)(l_, { ...e, storyType: "stripe-address-element" }),
        controls: { ...lk },
    };
l(321073);
var lM = l(735438),
    lO = l(96337),
    lL = l(997101),
    lw = l(597770),
    lV = l(278416),
    lB = l(606267),
    lU = l(169797),
    lG = l(93159),
    l$ = l(181447),
    lH = l(826469),
    lW = l(812745);
let lF = {
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
                rightPrimaryText: d,
                rightSubtext: c,
                rightShowSubtext: p,
                rightSubtextStrikethrough: m,
            } = e,
            [h, b] = u.useState(0);
        return (0, s.jsxs)("div", {
            className: U.Cd,
            children: [
                (0, s.jsx)(lG.q7, {
                    selection: h,
                    onChange: b,
                    planOptions: [
                        {
                            id: 0,
                            title: (0, s.jsx)(lG.ec, { size: "sm", color: "text-strong", premiumType: t }),
                            titleDescriber: l,
                            primaryText: a,
                            subtext: i ? (0, s.jsx)(lG.Lo, { strikethrough: r, price: n }) : void 0,
                        },
                        {
                            id: 1,
                            title: (0, s.jsx)(lG.ec, { size: "sm", color: "text-strong", premiumType: t }),
                            titleDescriber: o,
                            primaryText: d,
                            subtext: p ? (0, s.jsx)(lG.Lo, { strikethrough: m, price: c }) : void 0,
                        },
                    ],
                }),
                (0, s.jsxs)(y.E, { variant: "text-sm/normal", children: ["Selected plan index: ", h] }),
            ],
        });
    },
    controls: {
        variant: {
            label: "Nitro Variant",
            type: "select",
            defaultValue: eC.PremiumTypes.TIER_2,
            options: [
                { label: "Nitro", value: eC.PremiumTypes.TIER_2 },
                { label: "Nitro Basic", value: eC.PremiumTypes.TIER_0 },
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
function lz(e) {
    let { label: t, giftCardsEnabled: l, disabled: a, hidePersonalInformation: n } = e,
        i = (0, x.bG)([tz.A], () => Object.values(tz.A.paymentSources)),
        [r, o] = u.useState(void 0);
    u.useEffect(() => {
        (0, eo.$o)();
    }, []);
    let d = u.useMemo(() => i.map((e) => new lH.A(e, !0, [])), [i]),
        {
            dropdownPaymentSources: c,
            dropdownPaymentSourceId: p,
            handleDropdownPaymentSourceChange: m,
            giftCardCheckboxProps: h,
            walletCoversSubtotal: b,
        } = (0, lB.Y0)({
            checkoutPaymentSources: d,
            paymentSourceId: r,
            setPaymentSourceId: o,
            location: "revenue_playground",
        });
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(lG.nL, {
                label: t,
                giftCardsEnabled: l,
                giftCardCheckboxProps: h,
                paymentSourceDropdownProps: {
                    selectedPaymentSourceId: p,
                    paymentSources: c,
                    hidePersonalInformation: n,
                    onChange: m,
                },
                showCheckboxAboveDropdown: b,
                disabled: a,
            }),
            (0, s.jsxs)(y.E, { variant: "text-sm/normal", children: ["Effective payment source: ", r ?? "None"] }),
        ],
    });
}
let lY = { "nitro-wheel": r.t, gift: lw.o, orbs: i.C },
    lq = lO.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    lK = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? lV.g : void 0;
            return (0, s.jsxs)(ee.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, s.jsx)($.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, er.openModal)(
                                (e) =>
                                    (0, s.jsx)(lU.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? lY[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, s.jsx)(ee.B, {
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
            countryCode: { label: "Country Code", type: "select", defaultValue: lL.d.US, options: lq },
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
    lX = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: D.Yri.USD,
        interval: eC.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    lJ = {
        [lG.I0.Subscription]: { type: lG.I0.Subscription, ...lX },
        [lG.I0.SubscriptionTrial]: { type: lG.I0.SubscriptionTrial, ...lX },
        [lG.I0.OrbsRedemption]: { type: lG.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [lG.I0.Shop]: { type: lG.I0.Shop, purchaseButtonText: "Purchase" },
        [lG.I0.GiftNitro]: { type: lG.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [lG.I0.GiftShop]: { type: lG.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [lG.I0.GiftGameShop]: {
            type: lG.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
        },
    },
    lQ = {
        title: "Unified Checkout",
        stories: [
            lK,
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
                            children: (0, s.jsx)(lG.Vm, { label: t, lineItems: n, currency: D.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            lF,
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
                        children: (0, s.jsx)(lG._D, {
                            label: t,
                            lineItems: a,
                            intervalType: eC.WT.MONTH,
                            intervalCount: 1,
                            currency: D.Yri.USD,
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
                        hasStrikethroughPrice: u,
                        strikethroughPrice: d,
                        targetType: c,
                    } = e;
                    function p(e, p) {
                        let m = eK.default.getCurrentUser(),
                            h = eE.A.getGuildsArray()[0];
                        return (0, s.jsx)(lG.f7, {
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
                                      ? { type: "guildSubscription", guild: h }
                                      : void 0,
                        });
                    }
                    return (0, s.jsxs)("div", {
                        className: U.SG,
                        children: [
                            p(lG.JW, "Nitro"),
                            p(lG.DH, "Nitro Basic"),
                            p(lG.a6, "Boost"),
                            p(lG.jw, "App"),
                            p(lG.oo, "Nitro Credit"),
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
                            { id: "visa-1234", label: "Visa ending in 1234", icon: lW.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: lW.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: lW.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: lW.Be.AMEX },
                        ],
                        [i, r] = u.useState(n[0].id);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(lG.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: lM.noop,
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
                component: (e) => (0, s.jsx)(l$.P, { children: (0, s.jsx)(lz, { ...e }) }),
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
                    return (0, s.jsx)(lG._P, {
                        variant: lJ[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? D.hes.PAYSAFE_CARD : D.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: lG.I0.Subscription,
                        options: [
                            { label: "Subscription", value: lG.I0.Subscription },
                            { label: "Subscription Trial", value: lG.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: lG.I0.OrbsRedemption },
                            { label: "Shop", value: lG.I0.Shop },
                            { label: "Nitro Gift", value: lG.I0.GiftNitro },
                            { label: "Shop Gift", value: lG.I0.GiftShop },
                            { label: "Game Shop Gift", value: lG.I0.GiftGameShop },
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
                            (0, s.jsx)(lG.y, { onClick: D.tEg }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, s.jsx)(lG.Z4, { onComplete: D.tEg }),
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
                        children: (0, s.jsx)(lG.me, {
                            headingComponent: (0, s.jsx)(lG.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: eC.PremiumTypes.TIER_2,
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
                    return (0, s.jsx)(lG.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: lL.d.US, options: lq },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: (e) => {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, s.jsx)(lG.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: lL.d.US,
                        options: lq,
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
var lZ =
    (((a = {}).PAYMENTS = "payments"),
    (a.VIRTUAL_CURRENCY = "virtual-currency"),
    (a.NITRO = "nitro"),
    (a.IDENTITY = "identity"),
    a);
let l0 = ["Revenue Storybook", "Revenue Playground"],
    l1 = {
        id: "payments",
        name: "Payments",
        groups: [
            e_,
            lQ,
            {
                title: "Gift Card",
                stories: [
                    {
                        name: "Redemption Modal",
                        id: "gift-card-redemption-modal",
                        component: function () {
                            return (0, s.jsxs)(ee.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                                    }),
                                    (0, s.jsx)($.$, {
                                        variant: "primary",
                                        text: "Open Redemption Modal",
                                        onClick: () =>
                                            (0, te.HF)({
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
                            return (0, s.jsxs)(ee.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption success modal (post-redemption).",
                                    }),
                                    (0, s.jsx)($.$, {
                                        variant: "primary",
                                        text: "Open Success Modal",
                                        onClick: () =>
                                            (0, te.cV)({
                                                amountRedeemed: 5e3,
                                                currencyCode: D.Yri.USD,
                                                onClose: () => {},
                                            }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
            { title: "Payment Elements", stories: [lN, lD, lR] },
            O,
            { title: "Checkout Review Step", stories: [eB, eU] },
            lp,
        ],
        tags: l0,
        IconComponent: n.d,
    },
    l2 = {
        id: "virtual-currency",
        name: "Virtual Currency",
        groups: [
            { title: "Balance Widget Pill", stories: [F, z] },
            {
                title: "Balance Widget",
                stories: [
                    {
                        name: "Balance Widget Card",
                        id: "balance-widget-card",
                        component: (e) => {
                            let { ctaText: t, linkText: l, linkPreText: a } = e;
                            return (0, s.jsx)(L.b, {
                                ctaText: (0, V.uJ)(t) ? B.intl.string(B.t.H57f41) : t,
                                linkText: (0, V.uJ)(l) ? B.intl.string(B.t["7f4H7D"]) : l,
                                linkPreText: (0, V.uJ)(a) ? void 0 : a,
                                ctaOnClick: D.tEg,
                            });
                        },
                        controls: {
                            ctaText: { label: "CTA Text", type: "text", defaultValue: "" },
                            linkText: { label: "Link Text", type: "text", defaultValue: "" },
                            linkPreText: { label: "Link Pre Text", type: "text", defaultValue: "" },
                        },
                    },
                    G,
                ],
            },
            { title: "Orb Checkout", stories: [tw] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, tV.A)();
                            return (0, s.jsxs)("div", {
                                className: U.YG,
                                children: [
                                    (0, s.jsx)(y.E, {
                                        variant: "text-md/normal",
                                        color: "text-feedback-info",
                                        style: { marginBottom: "8px" },
                                        children: "Use this to reset your user's DCF Orb Onboarding state.",
                                    }),
                                    (0, s.jsx)($.$, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                                ],
                            });
                        },
                        controls: {},
                    },
                ],
            },
        ],
        tags: l0,
        IconComponent: i.C,
    },
    l6 = {
        id: "nitro",
        name: "Nitro",
        groups: [
            tm,
            { title: "Marketing Home", stories: [tS] },
            tA,
            {
                title: "Nitro Upsells",
                stories: [
                    {
                        name: "Burst Reactions Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await Promise.resolve().then(l.bind(l, 507545));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("63238"), l.e("22540")]).then(
                                        l.bind(l, 530951),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("41704"),
                                    ]).then(l.bind(l, 562011));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("35257"), l.e("66920")]).then(
                                        l.bind(l, 220763),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                    (0, er.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([l.e("35257"), l.e("76725")]).then(
                                            l.bind(l, 798612),
                                        );
                                        return (l) => (0, s.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                            let [e, t] = u.useState(eC.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = u.useCallback(() => {
                                    let { title: t, body: a } = tN[e];
                                    (0, er.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([l.e("93513"), l.e("64864")]).then(
                                            l.bind(l, 948265),
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
                            return (0, s.jsxs)(t_.LB, {
                                children: [
                                    (0, s.jsx)(t_.MG, {
                                        children: (0, s.jsx)(et.l, {
                                            label: "Upsell Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tR,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)($.$, {
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
                                    (0, er.openModalLazy)(async () => {
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
                            return (0, s.jsxs)(t_.LB, {
                                children: [
                                    (0, s.jsx)(t_.MG, {
                                        children: (0, s.jsx)(et.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tD,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)($.$, {
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
                            let [e, t] = u.useState(tk.HL.AVATAR),
                                a = (0, K.bG)([eK.default], () => eK.default.getCurrentUser()),
                                n = u.useCallback(() => {
                                    null != a &&
                                        (0, er.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("93513"), l.e("79149")]).then(
                                                l.bind(l, 688796),
                                            );
                                            return (l) => (0, s.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, s.jsxs)(t_.LB, {
                                children: [
                                    (0, s.jsx)(t_.MG, {
                                        children: (0, s.jsx)(et.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tM,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)($.$, {
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
                            let e = (0, K.bG)([eK.default], () => eK.default.getCurrentUser()),
                                t = u.useCallback(() => {
                                    null != e &&
                                        (0, er.openModalLazy)(async () => {
                                            let { default: e } = await l.e("35476").then(l.bind(l, 835071));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("40716"),
                                    ]).then(l.bind(l, 629959));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("2125"),
                                        l.e("66901"),
                                        l.e("61129"),
                                    ]).then(l.bind(l, 475312));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
                                    let { default: e } = await l.e("93475").then(l.bind(l, 366638));
                                    return (t) => (0, s.jsx)(e, { handleLearnMore: () => {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
                                (0, er.openModalLazy)(async () => {
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
                            return (0, s.jsx)(t_.LB, {
                                children: (0, s.jsx)($.$, {
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
            { title: "Clips", stories: [eZ] },
        ],
        tags: l0,
        IconComponent: r.t,
    },
    l3 = {
        id: "identity",
        name: "Identity",
        groups: [
            e3,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, K.bG)([eK.default], () => eK.default.getCurrentUser());
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
                                          (0, s.jsx)(e8.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e5,
                                          }),
                                          (0, s.jsx)(e9.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-button",
                    },
                    {
                        name: "Avatar Decoration Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, K.bG)([eK.default], () => eK.default.getCurrentUser());
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
                                          (0, s.jsx)(e8.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e5,
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
                            let [t, l] = u.useState(""),
                                a = (0, K.bG)([eK.default], () => eK.default.getCurrentUser());
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
                                          (0, s.jsx)(e8.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e5,
                                          }),
                                          (0, s.jsx)(e7.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
        ],
        tags: l0,
        IconComponent: o.n,
    },
    l8 = { playgroundBaseUrl: "revenue", collections: [l1, l2, l6, l3] };
