l.r(t),
    l.d(t, {
        nitroCollection: () => l8,
        virtualCurrencyCollection: () => l0,
        playgroundConfig: () => l2,
        identityCollection: () => l1,
        RevenuePlaygroundCollectionId: () => lJ,
        paymentsCollection: () => lQ,
    });
var a,
    n = l(700623),
    r = l(318254),
    i = l(403581),
    o = l(950305),
    s = l(627968),
    d = l(64700),
    c = l(132500),
    u = l(793574),
    p = l(688810),
    m = l(166532),
    b = l(735305),
    h = l(635358),
    x = l(702841),
    y = l(834730),
    g = l(349288),
    v = l(231723),
    f = l(228366),
    _ = l(830382),
    E = l(73825),
    C = l(937008),
    S = l(156312),
    j = l(491057),
    T = l(546042),
    P = l(97352),
    I = l(67480);
function A(e) {
    let { children: t, ...l } = e,
        a = d.useContext(S.Qv);
    return null == a ? null : (0, s.jsx)(S.Qv.Provider, { value: { ...a, ...l }, children: t });
}
let k = (e) => {
        let { skuId: t, isGift: l, applicationId: a } = e,
            { analyticsLocations: n } = (0, p.Ay)(u.A.PAYMENT_FLOW_TEST_PAGE),
            r = d.useRef(null),
            i = d.useRef(null),
            [o, s] = d.useState(() => (0, c.A)());
        d.useEffect(() => {
            (r.current !== t || i.current !== l) && (s((0, c.A)()), (r.current = t), (i.current = l));
        }, [t, l]);
        let [m, b] = (0, x.yK)([I.A], () => [I.A.isFetching(t), I.A.get(t)]);
        return (
            d.useEffect(() => {
                null != b || m || (0, _.EX)(a, t, h.g.VARIANTS_GROUP).catch((e) => {});
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
                onClose: r,
                onComplete: i,
                initialPlanId: o,
                purchaseType: d,
                stepConfigs: c,
                loadId: u,
                excludeSubscriptionPlansBySKU: p,
                renderHeader: m,
                hideErrors: b,
                disablePurchases: h,
                paymentContextOverrides: x,
            } = e,
            y = b ? { purchasePreviewError: null, purchaseError: null, ...x } : { ...x };
        h && (y.disablePurchasesForStorybook = !0);
        let g = `${a}-${n}-${u}`;
        return (0, s.jsx)(
            S.PaymentContextProvider,
            {
                stepConfigs: c,
                applicationId: l,
                skuIDs: null != a ? [a] : [],
                isGift: n,
                activeSubscription: null,
                purchaseType: d,
                excludeSubscriptionPlansBySKU: p,
                children: (0, s.jsx)(A, {
                    ...y,
                    children: (0, s.jsx)(j.Qt, {
                        children: (0, s.jsx)(C.dX, {
                            isGift: n,
                            children: (0, s.jsx)(
                                T.PaymentModal,
                                {
                                    transitionState: v.ip.ENTERED,
                                    onClose: r,
                                    onComplete: i,
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
var M = l(652215);
let D = [
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(b.x, { ...e, breadcrumbSteps: [m.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
            options: { renderHeader: !0 },
        },
        {
            key: m.pn.REVIEW,
            renderStep: (e) =>
                (0, s.jsx)(R, { ...e, originStep: m.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
            options: {},
        },
    ],
    L = {
        title: "Add Payment (Legacy Checkout)",
        stories: [
            {
                name: "Add Payment Step",
                id: "add-payment-step",
                component: (e) => {
                    let { useStripeElements: t } = e,
                        { analyticsLocations: l } = (0, p.Ay)(u.A.PAYMENT_FLOW_TEST_PAGE),
                        a = d.useMemo(() => (0, c.A)(), []),
                        n = d.useCallback(() => {}, []);
                    return (0, s.jsx)(
                        N,
                        {
                            stepConfigs: D,
                            analyticsLocations: l,
                            applicationId: M.FYj,
                            initialPlanId: void 0,
                            skuId: null,
                            isGift: !1,
                            hideErrors: !1,
                            loadId: a,
                            purchaseType: M.VVm.ONE_TIME,
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
var w = l(162097),
    O = l(70926),
    B = l(240248),
    V = l(985018),
    U = l(439519);
let G = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: (e) => {
        let { ctaText: t, linkText: l, showNotificationBadge: a, cardAlignment: n } = e;
        return (0, s.jsx)("div", {
            className: U.tH,
            children: (0, s.jsx)(O.SS, {
                className: U.oz,
                ctaText: (0, B.uJ)(t) ? V.intl.string(V.t["J+vlIR"]) : t,
                ctaOnClick: M.tEg,
                showNotificationBadge: a,
                cardAlignment: n,
                linkText: (0, B.uJ)(l) ? V.intl.string(V.t.XRdyjz) : l,
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
var H = l(821609),
    W = l(65738);
let $ = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: W.k7.DEFAULT },
                { label: "Selected", value: W.k7.SELECTED },
            ],
            defaultValue: W.k7.DEFAULT,
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
                [n, r] = (0, d.useState)(a.balance);
            return (
                (0, d.useEffect)(() => {
                    null == n && null != a.balance && r(a.balance);
                }, [a.balance, n]),
                (0, s.jsxs)("div", {
                    className: U.YG,
                    children: [
                        (0, s.jsx)(W.Gy, { ...a, balance: t ? null : n, className: l ? U.jG : void 0 }),
                        (0, s.jsx)(H.$, { onClick: () => r(a.balance), text: "Update Balance" }),
                    ],
                })
            );
        },
        controls: { loading: { label: "Loading", type: "boolean", defaultValue: !1 }, ...$ },
    },
    z = {
        name: "Balance Widget Pill Loading State",
        id: "balance-widget-pill-loading",
        component: (e) => {
            let { loadingDuration: t, shouldUseTabularNums: l, ...a } = e,
                [n, r] = (0, d.useState)(a.balance);
            return (
                (0, d.useEffect)(() => {
                    r(a.balance);
                }, [a.balance]),
                (0, s.jsxs)("div", {
                    className: U.YG,
                    children: [
                        (0, s.jsx)(W.Gy, { ...a, balance: n, className: l ? U.jG : void 0 }),
                        (0, s.jsx)(H.$, {
                            onClick: () => {
                                r(null),
                                    setTimeout(() => {
                                        r(a.balance);
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
    q = l(20742),
    K = l(17928),
    X = l(314116),
    J = l(990078),
    Z = l(862482),
    Q = l(364522),
    ee = l(331322),
    et = l(691885),
    el = l(404778),
    ea = l(292666),
    en = l(270003),
    er = l(289873),
    ei = l(192308),
    eo = l(323082),
    es = l(226991),
    ed = l(541689),
    ec = l(721923),
    eu = l(300233),
    ep = l(599941),
    em = l(817649),
    eb = l(4630),
    eh = l(482132),
    ex = l(615310),
    ey = l(532794),
    eg = l(216678),
    ev = l(194509),
    ef = l(761705),
    e_ = l(71393),
    eE = l(166403),
    eC = l(788868),
    eS = l(705018);
function ej(e) {
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
let eT = "checkout-error-boundary-test-modal",
    eP = () => {
        let { setStep: e } = (0, ex.Ay)();
        return (0, s.jsx)(eh.dZ, {
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
                    (0, s.jsx)(H.$, {
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
              children: V.intl.format(eS.default.cRB332, {
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
                let [e, t] = d.useState(eC.pe.TIER_2),
                    [l, a] = d.useState(null),
                    n = (0, K.yK)([e_.A], () => e_.A.getGuildsArray()),
                    [r] = (0, K.yK)([eE.A], () => [eE.A.getPremiumSubscription()]),
                    i = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, m] = d.useState(i.length > 0 ? i[0].value : null),
                    [b, h] = d.useState(""),
                    [x, v] = d.useState({ plan_id: eC.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    f = "true" !== x.gift && null != r,
                    [_, C] = d.useState(i.length > 0 ? i[0].value : null),
                    { analyticsLocations: S } = (0, p.Ay)(u.A.PAYMENT_FLOW_TEST_PAGE),
                    [j, T] = d.useState(""),
                    [P, I] = d.useState(M.dJq),
                    { balance: A, isFetching: k, error: R } = (0, ef.W)(),
                    { isSubmitting: N, responseMessage: D, redeemVirtualCurrency: L } = (0, ef.Q)(),
                    [w, O] = d.useState(M.dJq),
                    [B, V] = d.useState(""),
                    [G, $] = d.useState(M.dJq);
                return (0, s.jsx)(p.f5, {
                    value: S,
                    children: (0, s.jsx)(Q.Ip, {
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
                                        (0, s.jsx)(ev.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: Z.XD.PRIMARY,
                                            look: Z.pR.FILLED,
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
                                        (0, s.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, ey.A)({ subscriptionTier: l, analyticsLocations: S }),
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
                                            options: i,
                                            onSelectionChange: m,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != o
                                            ? (0, s.jsx)(ec.A, { guild: o, analyticsLocation: {} })
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
                                                    value: b,
                                                    onChange: (e) => h(e),
                                                }),
                                                (0, s.jsx)(J.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: b.length < 1,
                                                    children: (0, s.jsx)(H.$, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: b.length < 1,
                                                        onClick: () => {
                                                            window.open(M.BVt.BILLING_PROMOTION_REDEMPTION(b));
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
                                                v((t) => ({ ...t, plan_id: e }));
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
                                                v((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(J.m, {
                                    text: "Already subscribed",
                                    shouldShow: f,
                                    children: (0, s.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: f,
                                        onClick: () => {
                                            window.open(M.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + Y.stringify({ ...x }));
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
                                                          children: (0, s.jsx)(er.y, { type: er.t.SPINNING_CIRCLE }),
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
                                                              (0, s.jsx)(W.Gy, {
                                                                  balance: A ?? 0,
                                                                  balanceWidgetMode: W.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, s.jsx)(ea.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: w,
                                            onChange: (e) => O(e),
                                        }),
                                        (0, s.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: N,
                                            onClick: () => L(w, (0, c.A)()),
                                        }),
                                        null != D && (0, s.jsx)(y.E, { variant: "text-sm/normal", children: D }),
                                    ],
                                }),
                                (0, s.jsx)(el.c, {}),
                                (0, s.jsxs)(en.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, s.jsx)(et.l, {
                                            label: "Premium Server Subscription For",
                                            value: _,
                                            options: i,
                                            onSelectionChange: C,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, s.jsx)(eu.H, {
                                            guildId: _?.id,
                                            children: (0, s.jsx)(ej, { selectedGuildForGuildSub: _ }),
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
                                                    value: j,
                                                    onChange: T,
                                                }),
                                                (0, s.jsx)(ea.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: P,
                                                    onChange: (e) => I(e),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, eb.j)({
                                                    applicationId: j,
                                                    skuId: P,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: M.liQ.IN_APP },
                                                    context: M.BRT.APP,
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
                                                    value: B,
                                                    onChange: V,
                                                }),
                                                (0, s.jsx)(ea.k, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: G,
                                                    onChange: (e) => $(e),
                                                }),
                                                (0, s.jsx)(H.$, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, eg.A)({
                                                            applicationId: B,
                                                            skuId: G,
                                                            analyticsLocations: S,
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
                                            (0, s.jsx)(H.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, E.YG)(),
                                            }),
                                            (0, s.jsx)(H.$, {
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
                                    children: (0, s.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, ed.Ab)(),
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
                    { analyticsLocations: a } = (0, p.Ay)(u.A.PAYMENT_FLOW_TEST_PAGE);
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
                            (0, s.jsx)(H.$, {
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
                                                        (0, s.jsx)(q.rQ, { title: "Checkout Error Boundary Test" }),
                                                },
                                                {
                                                    key: m.pn.REVIEW,
                                                    renderStep: () =>
                                                        (0, s.jsx)(eh.dZ, {
                                                            children: (0, s.jsx)(eI, { errorType: a }),
                                                        }),
                                                },
                                            ],
                                            r = () => (0, ei.closeModal)(eT);
                                        return (0, ei.openModalLazy)(
                                            async () => {
                                                let t;
                                                return (
                                                    "show-alert" === l
                                                        ? (t = (e) => {
                                                              r();
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
                                                              r();
                                                          }),
                                                    await Promise.resolve((a) => {
                                                        let { onClose: r, transitionState: i } = a;
                                                        return (0, s.jsx)(S.PaymentContextProvider, {
                                                            activeSubscription: null,
                                                            stepConfigs: n,
                                                            skuIDs: [],
                                                            shouldCrashOnUnhandledError: "crash-client" === l,
                                                            onUnhandledError: t,
                                                            children: (0, s.jsx)(C.dX, {
                                                                isGift: !1,
                                                                children: (0, s.jsx)(T.PaymentModal, {
                                                                    transitionState: i,
                                                                    onClose: r,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    })
                                                );
                                            },
                                            { onCloseRequest: r, onCloseCallback: r, modalKey: eT },
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
    eM = l(758836);
let eD = () => ({
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
    eL = [
        {
            key: m.pn.REVIEW,
            renderStep: (e) => (0, s.jsx)(ek._, { ...e }),
            options: { useBreadcrumbLabel: () => V.intl.string(V.t.QBnNHq) },
        },
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => V.intl.string(V.t.QBnNHq) },
        },
        {
            key: m.pn.CONFIRM,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => V.intl.string(V.t.QBnNHq) },
        },
        {
            key: m.pn.PLAN_SELECT,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => V.intl.string(V.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    ew = () => (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" }),
    eO = {
        isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 },
        hideErrors: { label: "Hide Errors", type: "boolean", defaultValue: !0 },
    },
    eB = eD(),
    eV = {
        name: "Collectibles Review Step",
        id: "collectibles-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l, hideErrors: a } = e,
                {
                    analyticsLocations: n,
                    loadId: r,
                    handleClose: i,
                    handleComplete: o,
                    isFetching: d,
                    sku: c,
                } = k({ skuId: t, isGift: l, applicationId: M.FYj }),
                u = eR.Ay.isPremiumSku(t);
            return d || null == c || u
                ? (0, s.jsx)(eN.k, {})
                : (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(N, {
                              stepConfigs: eL,
                              analyticsLocations: n,
                              applicationId: M.FYj,
                              initialPlanId: void 0,
                              skuId: t,
                              isGift: l,
                              hideErrors: a,
                              loadId: r,
                              purchaseType: M.VVm.ONE_TIME,
                              disablePurchases: !0,
                              excludeSubscriptionPlansBySKU: !0,
                              onClose: i,
                              onComplete: o,
                          }),
                          (0, s.jsx)(ew, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: eB.options, defaultValue: eB.defaultValue },
            ...eO,
        },
    },
    eU = {
        name: "Premium Review Step",
        id: "premium-checkout-review-step",
        component: (e) => {
            let { skuId: t, isGift: l, hideErrors: a } = e,
                {
                    analyticsLocations: n,
                    loadId: r,
                    handleClose: i,
                    handleComplete: o,
                    isFetching: c,
                    sku: u,
                } = k({ skuId: t, isGift: l, applicationId: eC.tv }),
                p = eR.Ay.isPremiumSku(t),
                m = p ? eC.zE[t] : void 0,
                [b, h] = d.useState(m),
                y = d.useRef(!1);
            d.useEffect(() => {
                y.current || null == m || ((y.current = !0), h(m));
            }, [m, b]);
            let { isLoadedForPremiumSKUs: g, selectedPlan: v } = ((e) => {
                let { subscriptionPlanId: t } = e;
                d.useEffect(() => {
                    P.A.isLoadedForPremiumSKUs() || f.h.wait(() => (0, E.zS)());
                }, []);
                let l = (0, x.bG)([P.A], () => (null != t ? P.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, x.bG)([P.A], () => P.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: b });
            return !c && null != u && g && p && null != v
                ? (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(N, {
                              stepConfigs: eL,
                              analyticsLocations: n,
                              applicationId: eC.tv,
                              initialPlanId: m,
                              skuId: t,
                              isGift: l,
                              hideErrors: a,
                              loadId: r,
                              purchaseType: M.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: i,
                              onComplete: o,
                              paymentContextOverrides: {},
                          }),
                          (0, s.jsx)(ew, {}),
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
            ...eO,
        },
    };
var eG = l(27192),
    eH = l(359778),
    eW = l(939249),
    e$ = l(97808),
    eF = l(778712),
    ez = l(401648),
    eY = l(664111),
    eq = l(994500),
    eK = l(287809),
    eX = l(403362),
    eJ = l(784018),
    eZ = l(94269);
let eQ = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            r = (0, K.yK)([eq.A, eK.default], () =>
                eq.A.getFriendIDs()
                    .map((e) => eK.default.getUser(e))
                    .filter(eX.Vq),
            ),
            [i, o] = d.useState(new Set()),
            c = d.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return t ? a.add(e) : a.delete(e), a;
                });
            }, []),
            u = d.useMemo(() => Array.from(i), [i]),
            p = d.useCallback(() => (0, s.jsx)(ez.A, { title: a, participantIds: u }), [a, u]),
            m = "landscape" === l ? 640 : 360;
        return (0, s.jsxs)("div", {
            className: eZ.iE,
            children: [
                (0, s.jsx)("div", {
                    className: eZ.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, s.jsx)(eY.default, {
                        src: t,
                        active: n,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: v.ip.ENTERED,
                    }),
                }),
                (0, s.jsxs)(eH.Z, {
                    className: eZ.nd,
                    type: eH.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, s.jsxs)("div", {
                            className: eZ.Iv,
                            children: [
                                (0, s.jsx)(y.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    children: "Participants",
                                }),
                                (0, s.jsxs)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [i.size, " selected"],
                                }),
                            ],
                        }),
                        (0, s.jsx)(el.c, {}),
                        0 === r.length
                            ? (0, s.jsx)("div", {
                                  className: eZ.p$,
                                  children: (0, s.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, s.jsx)("div", {
                                  className: eZ.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: r.map((e) => {
                                      let t = i.has(e.id);
                                      return (0, s.jsxs)(
                                          eW.D,
                                          {
                                              className: eZ.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => c(e.id, !t),
                                              children: [
                                                  (0, s.jsx)(eG.Lc, { value: t, size: 16 }),
                                                  (0, s.jsx)(e$.eu, {
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
function e8() {
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
    e4 = {
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
                                children: (0, s.jsx)(e8, {}),
                            }),
                            (0, s.jsx)(e0.kL, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                children: (0, s.jsx)(e1, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: e2,
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
                                children: (0, s.jsx)(e8, {}),
                            }),
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                children: (0, s.jsx)(e1, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: e2,
                    showOverlay: { label: "Show Overlay", type: "boolean", defaultValue: !1 },
                    accessibleLabel: { label: "Aria Label", type: "text", defaultValue: "Avatar image" },
                },
            },
            {
                name: "Edit Button - Deletable",
                component: function (e) {
                    let { variant: t, showOverlay: l, accessibleLabel: a, deleteType: n, deleteAccessibleLabel: r } = e,
                        i = { type: n, accessibleLabel: r, onClick: () => {} };
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                deleteButtonConfig: i,
                                children: (0, s.jsx)(e8, {}),
                            }),
                            (0, s.jsx)(e0.NW, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                showOverlay: l,
                                deleteButtonConfig: i,
                                children: (0, s.jsx)(e1, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: e2,
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
var e5 = l(687021),
    e9 = l(487233),
    e7 = l(230635),
    e3 = l(473219);
let e6 = { value: "", label: "No Guild (main profile)" };
var te = l(99696),
    tt = l(534514),
    tl = l(599147),
    ta = l(808411),
    tn = l(661531),
    tr = l(116833),
    ti = l(720879),
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
var td = l(624716),
    tc = l(872725);
let tu = { name: "Expressive Progress", component: ta.A, id: "expressive-progress", controls: {} },
    tp = { name: "Tab Tooltip", component: td.A, id: "tab-tooltip", controls: {} },
    tm = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, s.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, s.jsx)(
                            tc.A,
                            {
                                artboard: e.artboard,
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: eH.s.PRIMARY,
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
            tu,
            {
                name: "Premium Tooltip",
                component: (e) => {
                    let {
                            title: t,
                            body: l,
                            showGraphic: a,
                            showActions: n,
                            badgeId: r,
                            showProgress: i,
                            progressCircleText: o,
                            progressCirclePercent: c,
                            progressCircleUrgency: u,
                            delay: p,
                            size: m,
                            gradientColor: b,
                            estimatedTooltipHeight: h,
                        } = e,
                        x = d.useRef(null),
                        g = d.useRef(null),
                        v = d.useMemo(
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
                                })[r],
                            [r],
                        ),
                        f = null != v ? (0, to.I)(v).standard : null,
                        _ = d.useMemo(() => {
                            if (null == v) return "";
                            let e = eC.VD[v];
                            return (
                                V.intl.string(V.t.lG6a5x) +
                                " " +
                                V.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [v]),
                        E = d.useMemo(() => {
                            if (!a || null == f) return;
                            let e = i
                                ? { progressCircleText: o, progressCirclePercent: c, progressCircleUrgency: u }
                                : {};
                            return {
                                type: "dynamic",
                                component: tr.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: f, alt: _, ...e },
                            };
                        }, [a, f, _, i, o, c, u]),
                        C = {
                            title: t,
                            body: l,
                            graphic: E,
                            actions: d.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: d.useMemo(() => ("string" == typeof b && b in ts ? ts[b] : b), [b]),
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
                                    (0, s.jsx)(ti.L, {
                                        targetElementRef: x,
                                        ...C,
                                        children: (0, s.jsx)(H.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, s.jsx)(ti.L, {
                                        targetElementRef: g,
                                        ...C,
                                        children: (0, s.jsx)(H.$, { buttonRef: g, variant: "primary", text: "Right" }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "premium-tooltip",
                controls: {
                    title: { label: "Title", type: "text", defaultValue: V.intl.string(V.t.lG6a5x).toUpperCase() },
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
var tb = l(691540),
    th = l(857250),
    tx = l(97483),
    ty = l(750338),
    tg = l(121),
    tv = l(576765),
    tf = l(88433);
let t_ = { none: void 0, nitroWheel: i.t },
    tE = {
        name: "Bento Box",
        component: function (e) {
            let {
                    title: t,
                    description: l,
                    ctaMode: a,
                    descriptionCtaText: n,
                    action1Text: r,
                    action1Variant: i,
                    action2Text: o,
                    action2Variant: d,
                    icon: c,
                    iconPosition: u,
                    index: p,
                    size: m,
                    badgeText: b,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: y,
                } = e,
                g = () => (0, tb.P0)((0, th.o)("CTA clicked!", tx.Ck.SUCCESS)),
                v = t_[c],
                f =
                    "descriptionCta" === a
                        ? { descriptionCta: n, onClick: g }
                        : "actions" === a
                          ? {
                                actions: [
                                    {
                                        text: r,
                                        variant: i,
                                        onClick: g,
                                        ...(null != v ? { icon: v, iconPosition: u } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: d, onClick: g }] : []),
                                ],
                            }
                          : {};
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(ty.A, {
                    name: tg.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tv.A,
                    videoUrl: tf.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: b.length > 0 ? b : void 0,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: y,
                    ...f,
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
    tS = l(920050),
    tj = l(744064),
    tT = l(976860);
let tP = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, s.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, s.jsx)(tj.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, tb.P0)((0, th.o)("CTA Clicked!", tx.Ck.SUCCESS)),
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
    let [e, t] = (0, d.useState)("customSounds"),
        l = `${M.BVt.NITRO_HOME}?perk=${e}`;
    return (0, s.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, s.jsx)(ea.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, s.jsx)(H.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, tC.jH)(), (0, tT.pX)(M.BVt.ME), setTimeout(() => (0, tT.pX)(l), 200);
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
                        children: Object.values(tS).map((e) => (0, s.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var tA = l(52822),
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
    tM = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: M.qlD },
    ],
    tD = [
        { id: "avatar", label: "Avatar", value: tk.HL.AVATAR },
        { id: "banner", label: "Banner", value: tk.HL.BANNER },
    ];
var tL = l(652165);
let tw = "1271174907081789524",
    tO = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: (e) => {
            let { skuId: t } = e;
            return (0, s.jsx)("div", {
                className: U.YG,
                children: (0, s.jsx)(H.$, {
                    onClick: () => {
                        (0, tL.B4)({
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
    tV = l(73079),
    tU = l(818348),
    tG = l(76488),
    tH = l(877062);
let tW = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, s.jsx)(S.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsxs)(tA.wn, {
                children: [
                    (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, s.jsx)(tA.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, s.jsx)(H.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: () => {
                                console.log("Opening deep link... ", t),
                                    tH.A.launch(t, (e) => {
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
var t$ = l(636537),
    tF = l(192087),
    tz = l(295405),
    tY = l(71532);
let tq = eD();
async function tK(e) {
    return (await t$.Bo.post({ url: M.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function tX(e) {
    return (await t$.Bo.get({ url: M.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function tJ(e, t) {
    await t$.Bo.patch({
        url: M.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function tZ() {
    let [e, t] = d.useState(!1),
        [l, a] = d.useState(!1),
        [n, r] = d.useState(null),
        [i, o] = d.useState(null),
        [c, u] = d.useState(tq.defaultValue),
        [p, m] = d.useState(null),
        b = (0, K.bG)([tz.A], () => tz.A.paymentSources),
        h = (0, K.bG)([tz.A], () => tz.A.hasFetchedPaymentSources),
        x = (0, K.bG)([tz.A], () => tz.A.defaultPaymentSourceId);
    d.useEffect(() => {
        h || (0, eo.$o)();
    }, [h]),
        d.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]);
    let g = d.useRef(null);
    d.useEffect(() => {
        if (null == i || "" === i) {
            g.current = p;
            return;
        }
        if (p !== g.current) {
            if (null == p || "" === p) {
                g.current = p;
                return;
            }
            tJ(i, p)
                .then(() => {
                    r(`Order updated successfully!
Order ID: ${i}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    r(`Failed to update order: ${t}`);
                }),
                (g.current = p);
        }
    }, [i, p]);
    let v = d.useMemo(
            () =>
                Object.values(b).map((e) => {
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
            [b],
        ),
        f = async () => {
            if (null == p || "" === p) return void r("Please select a payment source first.");
            if (null == c || "" === c || c === M.dJq) return void r("Please select a SKU ID.");
            t(!0), r(null), o(null);
            try {
                let e = await (0, _.Aj)(c, p, "US", !1, {
                    gift_style: null,
                    recipient_id: void 0,
                    custom_message: void 0,
                    emoji_id: void 0,
                    emoji_name: void 0,
                    sound_id: void 0,
                    reward_sku_ids: void 0,
                });
                o(e), r(`Order created successfully! Order ID: ${e}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                r(`Failed to create order: ${e}`);
            } finally {
                t(!1);
            }
        },
        E = async () => {
            if (null == i || "" === i) return void r("No order ID available. Please create an order first.");
            a(!0);
            try {
                let e = await tK(i);
                if (null == e.errors) {
                    r(`Order signed successfully! Order ID: ${i}`), o(null);
                    return;
                }
                let t = e.errors[0];
                if (1e3 === t)
                    r(`Order signing in progress!
Order ID: ${i}
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
                                let { error: d, paymentIntent: c } = await n.confirmCardPayment(s, {
                                    payment_method: a.payment_method_id,
                                });
                                if (null != d) throw Error(`3DS authentication failed: ${d.message}`);
                                if (null == c) throw Error("No payment intent returned from 3DS authentication");
                                let u = e.id ?? i ?? "Unknown";
                                o(null),
                                    r(`3DS authentication completed successfully!
Order ID: ${u}`);
                            } catch (a) {
                                let t = a instanceof Error ? a.message : String(a),
                                    l = e.id ?? i ?? "Unknown";
                                r(`Failed to complete 3DS!
Order ID: ${l}
Error: ${t}`);
                            }
                        })();
                else if (1001 === t) {
                    let t, l, a, n, s, d, c, u;
                    r(`Order signing in progress!
Order ID: ${i}
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
                                    u().catch((e) => {
                                        let t = e instanceof Error ? e.message : String(e);
                                        r(`Failed to poll order status!
Order ID: ${i}
Error: ${t}`);
                                    });
                                }, t));
                        }),
                        (c = () => {
                            null != s && clearTimeout(s);
                        }),
                        (u = async () => {
                            let e = Date.now() - n;
                            if (e >= 3e4) {
                                try {
                                    var t;
                                    (t = (await tX(i)).status),
                                        r(`Order signing timed out.
Order ID: ${i}
Status: ${t ?? "unknown"}
Please check the order status manually.`),
                                        c();
                                } catch (t) {
                                    let e = t instanceof Error ? t.message : String(t);
                                    r(`Order signing timed out.
Order ID: ${i}
Error: ${e}`),
                                        c();
                                }
                                return;
                            }
                            try {
                                let e = (await tX(i)).status;
                                if (2 === e) {
                                    r(`Order signed successfully!
Order ID: ${i}
Payment redirect completed.`),
                                        o(null),
                                        c();
                                    return;
                                }
                                if (1 === e) {
                                    r(`Order signed unsuccessfully
Order ID: ${i}`),
                                        c();
                                    return;
                                }
                                d();
                            } catch (l) {
                                let t = l instanceof Error ? l.message : String(l);
                                e < 3e4
                                    ? d()
                                    : (r(`Order signing timed out.
Order ID: ${i}
Error: ${t}`),
                                      c());
                            }
                        })().catch((e) => {
                            let t = e instanceof Error ? e.message : String(e);
                            r(`Failed to start polling order status!
Order ID: ${i}
Error: ${t}`);
                        });
                } else
                    r(`Order signing failed
Order ID: ${i}
Error: ${t}`);
            } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                r(`Failed to sign order: ${e}`);
            } finally {
                a(!1);
            }
        };
    return (0, s.jsxs)(tA.wn, {
        children: [
            (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, s.jsxs)(tA.Hq, {
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
                                    value: c,
                                    onSelectionChange: u,
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
                            (0, s.jsx)(H.$, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: f,
                                disabled: e || null == p || "" === p || null == c || "" === c || c === M.dJq,
                            }),
                            (0, s.jsx)(H.$, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: E,
                                disabled: l || null == i || "" === i,
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
var tQ = l(405139),
    t0 = l(19311),
    t8 = l(869177);
function t1(e) {
    let t = d.useRef(null),
        l = {
            paymentLabel: V.intl.string(V.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, s.jsx)(er.y, { style: { marginTop: 16 }, type: er.t.PULSING_ELLIPSIS }),
        };
    return e.renderStepBody
        ? (0, s.jsx)(t8.V, { ...l, ...e })
        : "applePay" === e.paymentRequestWallet
          ? (0, s.jsx)(tQ.Mv, { ...l, ...e })
          : (0, s.jsx)(tQ.dP, { ...l, ...e });
}
function t2(e) {
    let { paymentRequestWallet: t } = e,
        l = d.useRef(null),
        [a, n] = d.useState(!1);
    return (0, s.jsx)(tA.e_, {
        footer: (0, s.jsx)(t0.Ay, {
            primaryCTA: t0.Ay.CTAType.CONTINUE,
            primaryText: V.intl.string("applePay" === t ? V.t.WoXvJL : V.t.wnVVr0),
            primaryDisabled: !a,
            onPrimary: () => void (null != l.current && l.current.show()),
            onBack: () => {},
        }),
        children: (0, s.jsx)(t1, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: l,
            onValidPaymentRequest: () => n(!0),
        }),
    });
}
var t4 = l(150934),
    t5 = l(36167),
    t9 = l(26279);
let t7 = [
        { id: "tier_2", value: eC.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eC.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eC.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    t3 = [
        { id: "meta_quest", value: t9.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function t6() {
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
function le(e) {
    let { flowType: t } = e,
        [l, a] = d.useState(eC.gD.PREMIUM_MONTH_TIER_2),
        [n, r] = d.useState(!1),
        { error: i, handleSuccess: o, handleFailure: u } = t6(),
        p = d.useCallback(() => {
            let e = (0, c.A)();
            (0, t5.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, u);
        }, [l, n, t, o, u]);
    return (0, s.jsxs)(tA.Hq, {
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
                        options: t7,
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
                        onSelectionChange: (e) => r("true" === e),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, s.jsx)(H.$, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: p }),
            null != i && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "status-danger", children: i }),
        ],
    });
}
function lt(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = t6(),
        r = d.useCallback(() => {
            if (null == t) return;
            let e = (0, c.A)(),
                l = M.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, t5.xq)(l, a, n);
        }, [t, a, n]);
    return (0, s.jsxs)(tA.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, s.jsx)(H.$, {
                variant: "primary",
                size: "sm",
                text: "Open Manage Subscription",
                onClick: r,
                disabled: null == t,
            }),
            null != l && (0, s.jsx)(y.E, { variant: "text-xs/normal", color: "status-danger", children: l }),
        ],
    });
}
function ll(e) {
    let { flowType: t } = e,
        [l, a] = d.useState(""),
        { error: n, handleSuccess: r, handleFailure: i } = t6(),
        o = d.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, c.A)(),
                a = M.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, t5.xq)(a, r, i);
        }, [l, r, i, t]);
    return (0, s.jsxs)(tA.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, s.jsx)(ea.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, s.jsx)(H.$, {
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
    lr = l(558179);
let li = {
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
    ld = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    },
    lc = (e) => (void 0 !== e ? JSON.stringify(e, null, 2) : "undefined");
function lu() {
    let [e, t] = d.useState(lc(ls)),
        [l, a] = d.useState(ls),
        [n, r] = d.useState(lc(ld)),
        [i, o] = d.useState(ld),
        [c, u] = d.useState(null),
        [p, m] = d.useState(
            (0, s.jsx)(tA.a8, {
                errorLabel: li.CONFIGURABLE,
                elementOptions: ls,
                children: (0, s.jsx)(la.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: ld,
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
                    (0, s.jsx)(tA.Tu, {
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
                    (0, s.jsx)(tA.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tA.Tu, {
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
                    onChange: r,
                    rows: 7,
                }),
            }),
            null != c && (0, s.jsx)(y.E, { variant: "text-md/normal", color: "text-feedback-critical", children: c }),
            (0, s.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: tG.Ut,
                children: (0, s.jsx)(H.$, {
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
                                            (0, s.jsx)(tA.a8, {
                                                errorLabel: li.CONFIGURABLE,
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
                                u(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                u("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, s.jsx)(y.E, { variant: "text-md/normal", className: tG.cW, children: "Current Element Options:" }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lr.A, { className: tG.wD, children: `\`\` ${lc(l)} \`\`` }),
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                className: tG.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, s.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lr.A, { className: tG.wD, children: `\`\` ${lc(i)} \`\`` }),
            }),
            p,
        ],
    });
}
let lp = {
    title: "Miscellaneous",
    stories: [
        tW,
        {
            name: "Redirect To Standalone",
            id: "standalone-redirect",
            component: function () {
                let [e, t] = d.useState(!1),
                    [l, a] = d.useState(t9.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
                    n = d.useCallback((e) => {
                        t(e);
                    }, []),
                    r = e ? l : void 0;
                return (0, s.jsxs)(tA.wn, {
                    children: [
                        (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Redirect To Standalone" }),
                        (0, s.jsx)(tA.nB, {}),
                        (0, s.jsxs)(ee.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, s.jsx)(t4.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                (0, s.jsx)(et.l, {
                                    label: "Flow Type",
                                    value: l,
                                    options: t3,
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
                        (0, s.jsx)(le, { flowType: r }),
                        (0, s.jsx)(lt, { flowType: r }),
                        (0, s.jsx)(ll, { flowType: r }),
                    ],
                });
            },
        },
        {
            name: "Order SKU",
            component: function () {
                return (0, s.jsx)(S.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsx)(tZ, {}),
                });
            },
            id: "order-sku-test",
            controls: {},
        },
        {
            name: "Payment Request",
            component: function (e) {
                let { paymentRequestWallet: t } = e;
                return (0, s.jsx)(S.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tA.wn, {
                        children: [
                            (0, s.jsx)(tt.D, { variant: "heading-xl/semibold", children: "Payment Request" }),
                            (0, s.jsx)(tA.Hq, {
                                label: "Default View",
                                children: (0, s.jsx)(t1, { paymentRequestWallet: t }),
                            }),
                            (0, s.jsx)(tA.Hq, {
                                label: "Connector View",
                                children: (0, s.jsx)(t1, { paymentRequestWallet: t, renderConnectorView: !0 }),
                            }),
                            (0, s.jsx)(tA.Hq, {
                                label: "Add Payment Step Body Connector View",
                                children: (0, s.jsx)(t2, { paymentRequestWallet: t }),
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
                return (0, s.jsx)(S.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tA.wn, {
                        children: [
                            (0, s.jsx)(tt.D, {
                                variant: "heading-xl/semibold",
                                children: "Choose Payment Source Type",
                            }),
                            (0, s.jsx)(tA.e_, {
                                className: tG.Bt,
                                children: (0, s.jsx)("div", { className: tG.VS, children: (0, s.jsx)(tV.A, { ...n }) }),
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
                return (0, s.jsx)(S.PaymentContextProvider, {
                    stepConfigs: [],
                    skuIDs: [],
                    activeSubscription: null,
                    children: (0, s.jsxs)(tA.wn, {
                        children: [
                            (0, s.jsx)(tt.D, {
                                variant: "heading-xl/semibold",
                                children: "Stripe Express Checkout Buttons",
                            }),
                            (0, s.jsx)(tA.Hq, {
                                label: li.DEFAULT,
                                children: (0, s.jsx)("div", {
                                    children: (0, s.jsx)(tA.a8, {
                                        errorLabel: li.DEFAULT,
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
                                let t = li[e];
                                return (0, s.jsx)(
                                    tA.Hq,
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
                                                    children: (0, s.jsx)(lr.A, {
                                                        className: tG.wD,
                                                        children: `\`\`${lc(lo[e])} \`\``,
                                                    }),
                                                }),
                                                (0, s.jsx)(tA.a8, {
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
                            (0, s.jsx)(tA.Hq, { label: li.CONFIGURABLE, children: (0, s.jsx)(lu, {}) }),
                        ],
                    }),
                });
            },
        },
    ],
};
var lm = l(503698),
    lb = l.n(lm),
    lh = l(683071),
    lx = l(942340),
    ly = l(211528),
    lg = l(626584),
    lv = l(87952),
    lf = l(624479),
    l_ = l(408278),
    lE = l(957565),
    lC = l(534472);
let lS = (e) => {
        let { label: t, value: l } = e;
        return (0, s.jsxs)("div", {
            className: lC.I,
            children: [
                (0, s.jsxs)(y.E, { variant: "text-sm/medium", children: [t, ":"] }),
                (0, s.jsx)(y.E, { variant: "text-sm/normal", children: l }),
                (0, s.jsx)(l_.K, {
                    size: "sm",
                    "aria-label": "Copy Link",
                    variant: "icon-only",
                    icon: lf.T,
                    onClick: () => (0, lE.C)(l),
                }),
            ],
        });
    },
    lj = (e) => {
        let { children: t, stepConfigs: l } = e;
        return (0, s.jsxs)(S.PaymentContextProvider, {
            stepConfigs: l,
            skuIDs: [],
            activeSubscription: null,
            children: [(0, s.jsx)(eh.dZ, { children: t }), (0, s.jsx)(eh.Ay, { header: null })],
        });
    };
var lT = l(935377);
let lP = new lg.A("PaymentElement.web.stories"),
    lI = () => {
        let { elementsAppearanceOptions: e } = (0, lx.E)();
        return (0, s.jsxs)("div", {
            children: [
                (0, s.jsx)(tt.D, { variant: "heading-lg/semibold", className: U.tm, children: "Default Options" }),
                (0, s.jsx)("div", {
                    children: Object.entries(e).map((e) => {
                        let [t, l] = e;
                        return (0, s.jsx)(lS, { label: t, value: l }, t);
                    }),
                }),
            ],
        });
    },
    lA = (e) => {
        let {
                theme: t,
                colorText: l,
                colorBackground: a,
                inputBackgroundColor: n,
                tabBackgroundColor: r,
                storyType: i,
            } = e,
            o = (0, lv.A)(),
            { stripePaymentElementProps: d, stripeAddressElementProps: c } = (0, ly.wD)({
                step: m.pn.PAYMENT_ELEMENT,
                handleStepChange: M.tEg,
                onBillingAddressChange: M.tEg,
                paymentElementsEnabled: !0,
                logger: lP,
                shouldLogOnChangeEvents: !0,
                continueSessionToInitialStep: void 0,
            }),
            {
                elementsOptions: u,
                isLoading: p,
                setupError: b,
                customPaymentMethodIdsToSourceTypes: h,
            } = (0, lx.p)({
                onSetupError: (e) => {
                    lP.info("Stripe Payment Element options setup error: ", e);
                },
                elementsAppearanceOptions: {
                    theme: t,
                    colorText: l,
                    colorBackground: a,
                    inputBackgroundColor: n,
                    tabBackgroundColor: r,
                },
            });
        return p || null != b || null == o
            ? (0, s.jsx)(ly.eR, {})
            : (0, s.jsxs)("div", {
                  children: [
                      (0, s.jsx)("div", {
                          style: { marginBottom: 16 },
                          children: (0, s.jsx)(lh.w, {
                              type: "info",
                              children:
                                  "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                          }),
                      }),
                      (0, s.jsxs)("div", {
                          className: lT.ny,
                          children: [
                              (0, s.jsx)(lj, {
                                  stepConfigs: [
                                      {
                                          key: m.pn.ADD_PAYMENT_STEPS,
                                          renderStep: () => (0, s.jsx)("div", {}),
                                          options: {
                                              renderHeader: !1,
                                              bodyClassName: "joined-payment-address-elements" === i ? lT.fF : lT.u1,
                                          },
                                      },
                                  ],
                                  children: (0, s.jsx)("div", {
                                      className: lb()(lT.o6, { [lT.X1]: "joined-payment-address-elements" === i }),
                                      children: (0, s.jsxs)(la.Elements, {
                                          stripe: o,
                                          options: { ...u },
                                          children: [
                                              "stripe-address-element" === i
                                                  ? (0, s.jsx)("div", {
                                                        className: U.R,
                                                        children: (0, s.jsx)(ly.Wf, {
                                                            ...d,
                                                            customPaymentMethodIdsToSourceTypes: h,
                                                            step: m.pn.PAYMENT_ELEMENT,
                                                        }),
                                                    })
                                                  : (0, s.jsx)(ly.Wf, {
                                                        ...d,
                                                        customPaymentMethodIdsToSourceTypes: h,
                                                        step: m.pn.PAYMENT_ELEMENT,
                                                    }),
                                              ("joined-payment-address-elements" === i ||
                                                  "stripe-address-element" === i) &&
                                                  (0, s.jsx)(ly.KS, {
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
        component: (e) => (0, s.jsx)(lA, { ...e, storyType: "joined-payment-address-elements" }),
        controls: { ...lk },
    },
    lN = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: (e) => (0, s.jsx)(lA, { ...e, storyType: "stripe-payment-element" }),
        controls: { ...lk },
    },
    lM = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: (e) => (0, s.jsx)(lA, { ...e, storyType: "stripe-address-element" }),
        controls: { ...lk },
    };
l(321073);
var lD = l(735438),
    lL = l(96337),
    lw = l(997101),
    lO = l(597770),
    lB = l(278416),
    lV = l(918022),
    lU = l(169797),
    lG = l(232467),
    lH = l(826469),
    lW = l(812745);
let l$ = {
        name: "Primitive: Nitro Plan Select",
        id: "unified-checkout-nitro-plan-select",
        component: (e) => {
            let {
                    variant: t,
                    leftTitleDescriber: l,
                    leftPrimaryText: a,
                    leftSubtext: n,
                    leftShowSubtext: r,
                    leftSubtextStrikethrough: i,
                    rightTitleDescriber: o,
                    rightPrimaryText: c,
                    rightSubtext: u,
                    rightShowSubtext: p,
                    rightSubtextStrikethrough: m,
                } = e,
                [b, h] = d.useState(0);
            return (0, s.jsxs)("div", {
                className: U.Cd,
                children: [
                    (0, s.jsx)(lG.q7, {
                        selection: b,
                        onChange: h,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, s.jsx)(lG.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: a,
                                subtext: r ? (0, s.jsx)(lG.Lo, { strikethrough: i, price: n }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, s.jsx)(lG.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: o,
                                primaryText: c,
                                subtext: p ? (0, s.jsx)(lG.Lo, { strikethrough: m, price: u }) : void 0,
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
            rightSubtextStrikethrough: {
                label: "Right Card - Subtext Strikethrough",
                type: "boolean",
                defaultValue: !1,
            },
        },
    },
    lF = { "nitro-wheel": i.t, gift: lO.o, orbs: r.C },
    lz = lL.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    lY = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                r = a ? lB.g : void 0;
            return (0, s.jsxs)(ee.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, s.jsx)(y.E, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, s.jsx)(H.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, ei.openModal)(
                                (e) =>
                                    (0, s.jsx)(lU.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: r,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? lF[l] : void 0,
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
            countryCode: { label: "Country Code", type: "select", defaultValue: lw.d.US, options: lz },
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
    lq = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: M.Yri.USD,
        interval: eC.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    lK = {
        [lG.I0.Subscription]: { type: lG.I0.Subscription, ...lq },
        [lG.I0.SubscriptionTrial]: { type: lG.I0.SubscriptionTrial, ...lq },
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
    lX = {
        title: "Unified Checkout",
        stories: [
            lY,
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
                            children: (0, s.jsx)(lG.Vm, { label: t, lineItems: n, currency: M.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            l$,
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
                                  { id: 2, label: "Server Boost", amount: 499, icon: (0, s.jsx)(i.t, { size: "xs" }) },
                              ]
                            : [];
                    return (0, s.jsx)("div", {
                        className: U.SG,
                        children: (0, s.jsx)(lG._D, {
                            label: t,
                            lineItems: a,
                            intervalType: eC.WT.MONTH,
                            intervalCount: 1,
                            currency: M.Yri.USD,
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
                        price: r,
                        hasPriceIcon: o,
                        hasStrikethroughPrice: d,
                        strikethroughPrice: c,
                        targetType: u,
                    } = e;
                    function p(e, p) {
                        let m = eK.default.getCurrentUser(),
                            b = e_.A.getGuildsArray()[0];
                        return (0, s.jsx)(lG.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${a} ${p}`,
                            description: n,
                            price: r,
                            PriceIcon: o ? i.t : void 0,
                            priceSubText: d ? c : void 0,
                            priceSubTextHasStrikethrough: d,
                            graphic: (0, s.jsx)(e, {}),
                            target:
                                "gift" === u
                                    ? { type: "gift", user: m }
                                    : "guildSubscription" === u
                                      ? { type: "guildSubscription", guild: b }
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
                        [r, i] = d.useState(n[0].id);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(lG.v7, {
                                value: r,
                                options: n,
                                onChange: i,
                                onNew: lD.noop,
                                disabled: t,
                                error: l ? a : void 0,
                            }),
                            (0, s.jsxs)(y.E, {
                                variant: "text-sm/normal",
                                children: ["Selected payment: ", r ?? "None"],
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
                component: (e) => {
                    let { label: t, giftCardsEnabled: l, disabled: a, hidePersonalInformation: n } = e,
                        r = (0, x.bG)([tz.A], () => Object.values(tz.A.paymentSources)),
                        [i, o] = d.useState(void 0);
                    d.useEffect(() => {
                        (0, eo.$o)();
                    }, []);
                    let c = d.useMemo(() => r.map((e) => new lH.A(e, !0, [])), [r]),
                        {
                            dropdownPaymentSources: u,
                            dropdownPaymentSourceId: p,
                            handleDropdownPaymentSourceChange: m,
                            giftCardCheckboxProps: b,
                        } = (0, lV.Y)({
                            checkoutPaymentSources: c,
                            paymentSourceId: i,
                            setPaymentSourceId: o,
                            location: "revenue_playground",
                        });
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(lG.nL, {
                                label: t,
                                giftCardsEnabled: l,
                                giftCardCheckboxProps: b,
                                paymentSourceDropdownProps: {
                                    selectedPaymentSourceId: p,
                                    paymentSources: u,
                                    hidePersonalInformation: n,
                                    onChange: m,
                                },
                                disabled: a,
                            }),
                            (0, s.jsxs)(y.E, {
                                variant: "text-sm/normal",
                                children: ["Effective payment source: ", i ?? "None"],
                            }),
                        ],
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
                        [n, r] = d.useState(!1);
                    return (0, s.jsx)(lG._P, {
                        variant: lK[t],
                        immediateDelivery: l ? { value: n, onChange: r } : void 0,
                        paymentSourceType: a ? M.hes.PAYSAFE_CARD : M.hes.CARD,
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
                            (0, s.jsx)(lG.y, { onClick: M.tEg }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)(y.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, s.jsx)(lG.Z4, { onComplete: M.tEg }),
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
                    storeCountry: { label: "Store Country", type: "select", defaultValue: lw.d.US, options: lz },
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
                        defaultValue: lw.d.US,
                        options: lz,
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
var lJ =
    (((a = {}).PAYMENTS = "payments"),
    (a.VIRTUAL_CURRENCY = "virtual-currency"),
    (a.NITRO = "nitro"),
    (a.IDENTITY = "identity"),
    a);
let lZ = ["Revenue Storybook", "Revenue Playground"],
    lQ = {
        id: "payments",
        name: "Payments",
        groups: [
            eA,
            lX,
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
                                    (0, s.jsx)(H.$, {
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
                                    (0, s.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Open Success Modal",
                                        onClick: () =>
                                            (0, te.cV)({
                                                amountRedeemed: 5e3,
                                                currencyCode: M.Yri.USD,
                                                onClose: () => {},
                                            }),
                                    }),
                                ],
                            });
                        },
                    },
                ],
            },
            { title: "Payment Elements", stories: [lN, lM, lR] },
            L,
            { title: "Checkout Review Step", stories: [eV, eU] },
            lp,
        ],
        tags: lZ,
        IconComponent: n.d,
    },
    l0 = {
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
                            return (0, s.jsx)(w.b, {
                                ctaText: (0, B.uJ)(t) ? V.intl.string(V.t.H57f41) : t,
                                linkText: (0, B.uJ)(l) ? V.intl.string(V.t["7f4H7D"]) : l,
                                linkPreText: (0, B.uJ)(a) ? void 0 : a,
                                ctaOnClick: M.tEg,
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
            { title: "Orb Checkout", stories: [tO] },
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
                                    (0, s.jsx)(H.$, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                                ],
                            });
                        },
                        controls: {},
                    },
                ],
            },
        ],
        tags: lZ,
        IconComponent: r.C,
    },
    l8 = {
        id: "nitro",
        name: "Nitro",
        groups: [
            tm,
            { title: "Marketing Home", stories: [tE] },
            tP,
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
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                    let { default: e } = await l.e("22540").then(l.bind(l, 530951));
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                    let { default: e } = await l.e("3212").then(l.bind(l, 562011));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                    let { default: e } = await l.e("66920").then(l.bind(l, 220763));
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                        let { default: t } = await l.e("76725").then(l.bind(l, 798612));
                                        return (l) => (0, s.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                            let [e, t] = d.useState(eC.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = d.useCallback(() => {
                                    let { title: t, body: a } = tN[e];
                                    (0, ei.openModalLazy)(async () => {
                                        let { default: n } = await l.e("64864").then(l.bind(l, 948265));
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
                            return (0, s.jsxs)(tA.LB, {
                                children: [
                                    (0, s.jsx)(tA.MG, {
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
                                    (0, s.jsx)(H.$, {
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
                                        let { default: t } = await l.e("29202").then(l.bind(l, 39613));
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
                            return (0, s.jsxs)(tA.LB, {
                                children: [
                                    (0, s.jsx)(tA.MG, {
                                        children: (0, s.jsx)(et.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tM,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(H.$, {
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
                            let [e, t] = d.useState(tk.HL.AVATAR),
                                a = (0, K.bG)([eK.default], () => eK.default.getCurrentUser()),
                                n = d.useCallback(() => {
                                    null != a &&
                                        (0, ei.openModalLazy)(async () => {
                                            let { default: t } = await l.e("79149").then(l.bind(l, 688796));
                                            return (l) => (0, s.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, s.jsxs)(tA.LB, {
                                children: [
                                    (0, s.jsx)(tA.MG, {
                                        children: (0, s.jsx)(et.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tD,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, s.jsx)(H.$, {
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
                                t = d.useCallback(() => {
                                    null != e &&
                                        (0, ei.openModalLazy)(async () => {
                                            let { default: e } = await l.e("35476").then(l.bind(l, 835071));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                    let { default: e } = await l.e("85312").then(l.bind(l, 629959));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                    let { default: e } = await l.e("97925").then(l.bind(l, 475312));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
                                            onLearnMore: () => {},
                                            onClose: l.onClose,
                                            channel: null,
                                            emojiDescriptor: void 0,
                                            pickerIntention: t.CHAT,
                                            analyticsLocation: {},
                                        });
                                });
                            }, []);
                            return (0, s.jsx)(tA.LB, {
                                children: (0, s.jsx)(H.$, {
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
        tags: lZ,
        IconComponent: i.t,
    },
    l1 = {
        id: "identity",
        name: "Identity",
        groups: [
            e4,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = d.useState(""),
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
                                          (0, s.jsx)(e5.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e6,
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
                            let [t, l] = d.useState(""),
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
                                          (0, s.jsx)(e5.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e6,
                                          }),
                                          (0, s.jsx)(e7.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-decoration-button",
                    },
                    {
                        name: "Nameplate Button",
                        component: function (e) {
                            let [t, l] = d.useState(""),
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
                                          (0, s.jsx)(e5.v, {
                                              guildId: t,
                                              onChange: (e) => {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: e6,
                                          }),
                                          (0, s.jsx)(e3.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
        ],
        tags: lZ,
        IconComponent: o.n,
    },
    l2 = { playgroundBaseUrl: "revenue", collections: [lQ, l0, l8, l1] };
