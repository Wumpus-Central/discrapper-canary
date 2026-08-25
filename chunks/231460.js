l.r(t),
    l.d(t, {
        nitroCollection: () => as,
        virtualCurrencyCollection: () => ao,
        playgroundConfig: () => ad,
        identityCollection: () => au,
        RevenuePlaygroundCollectionId: () => an,
        paymentsCollection: () => ar,
    });
var a,
    n = l(700623),
    i = l(318254),
    r = l(403581),
    o = l(950305),
    s = l(477900),
    u = l(582128),
    d = l(132500),
    c = l(793574),
    p = l(688810),
    m = l(166532),
    b = l(735305),
    h = l(635358),
    x = l(702841),
    f = l(834730),
    y = l(28863),
    g = l(231723),
    v = l(228366),
    E = l(830382),
    S = l(73825),
    C = l(626797),
    T = l(951305),
    j = l(491057),
    A = l(424171),
    I = l(97352),
    P = l(67480),
    _ = l(26279);
let k = (e) => {
    let { skuId: t, isGift: l, applicationId: a } = e,
        { analyticsLocations: n } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
        i = u.useRef(null),
        r = u.useRef(null),
        [o, s] = u.useState(() => (0, d.A)());
    u.useEffect(() => {
        (i.current !== t || r.current !== l) && (s((0, d.A)()), (i.current = t), (r.current = l));
    }, [t, l]);
    let [m, b] = (0, x.yK)([P.A], () => [P.A.isFetching(t), P.A.get(t)]);
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
function R(e) {
    return (0, s.jsxs)("div", {
        style: { padding: 20 },
        children: [
            (0, s.jsx)(f.E, { variant: "text-md/normal", children: e.text }),
            (0, s.jsx)("div", {
                style: { marginTop: 16 },
                children: (0, s.jsx)(y.Anchor, {
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
            children: (0, s.jsx)(j.Qt, {
                children: (0, s.jsx)(T.dX, {
                    isGift: n,
                    children: (0, s.jsx)(
                        A.q,
                        {
                            transitionState: g.ip.ENTERED,
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
        renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
        options: {},
    },
];
var O = l(162097),
    V = l(70926),
    L = l(240248),
    w = l(375708),
    U = l(161528);
let B = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: function (e) {
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
var Y = l(97808),
    z = l(778712),
    K = l(714719),
    q = l(859161),
    J = l(842291);
let X = {
    name: "Profile Banner",
    id: "profile-banner",
    component: function (e) {
        let {
                bannerSrc: t,
                backgroundColor: l,
                width: a,
                height: n,
                cutoutAlign: i,
                avatarSize: r,
                showGifTag: o,
                showAvatar: u,
            } = e,
            d = (0, q.A)(r);
        return (0, s.jsxs)("div", {
            className: J.GI,
            children: [
                (0, s.jsx)(K.A, {
                    className: J.k5,
                    bannerSrc: "" === t ? null : t,
                    backgroundColor: l,
                    showGifTag: o,
                    width: a,
                    height: n,
                    cutout:
                        "center" === i
                            ? { align: "center", insetBottom: 0, radius: d }
                            : { align: "start", insetStart: 16, insetBottom: 0, radius: d },
                }),
                u &&
                    (0, s.jsx)("div", {
                        className: J.oz,
                        style: { top: n, left: "center" === i ? a / 2 : 16 + d },
                        children: (0, s.jsx)(Y.Js, {
                            src: null,
                            size: r,
                            status: N.clD.ONLINE,
                            "aria-label": "Preview avatar",
                        }),
                    }),
            ],
        });
    },
    controls: {
        width: { label: "Banner Width", type: "slider", defaultValue: 500, minValue: 200, maxValue: 1500 },
        height: { label: "Banner Height", type: "slider", defaultValue: 120, minValue: 50, maxValue: 500 },
        cutoutAlign: {
            label: "Cutout",
            type: "select",
            defaultValue: "center",
            options: [
                { label: "Center", value: "center" },
                { label: "Start", value: "start" },
            ],
        },
        avatarSize: {
            label: "Avatar size",
            type: "select",
            defaultValue: z._3.SIZE_96,
            options: [
                { label: "80", value: z._3.SIZE_80 },
                { label: "96", value: z._3.SIZE_96 },
                { label: "120", value: z._3.SIZE_120 },
            ],
        },
        backgroundColor: { label: "Background color", type: "color", defaultValue: "#5865f2" },
        bannerSrc: { label: "Banner image URL", type: "text", defaultValue: "" },
        showGifTag: { label: "Show GIF tag", type: "boolean", defaultValue: !1 },
        showAvatar: { label: "Overlay avatar", type: "boolean", defaultValue: !0 },
    },
};
var Z = l(488428),
    Q = l(20742),
    ee = l(17928),
    et = l(862482),
    el = l(364522),
    ea = l(331322),
    en = l(691885),
    ei = l(404778),
    er = l(95477),
    eo = l(866665),
    es = l(270003),
    eu = l(289873),
    ed = l(192308),
    ec = l(297264),
    ep = l(277984),
    em = l(529427),
    eb = l(669874),
    eh = l(883645),
    ex = l(541689),
    ef = l(944304),
    ey = l(300233),
    eg = l(599941),
    ev = l(162093),
    eE = l(4630),
    eS = l(482132),
    eC = l(532794),
    eT = l(216678),
    ej = l(194509),
    eA = l(511484),
    eI = l(794400),
    eP = l(761705),
    e_ = l(71393),
    ek = l(166403),
    eR = l(202541),
    eM = l(127898);
function eN(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, eg.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, s.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, s.jsx)(ev.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let eD = "checkout-error-boundary-test-modal";
function eO() {
    let { setStep: e } = (0, eh.Ay)();
    return (0, s.jsx)(eS.dZ, {
        children: (0, s.jsxs)(ea.B, {
            direction: "vertical",
            gap: 8,
            fullWidth: !1,
            children: [
                (0, s.jsx)(f.E, {
                    variant: "text-sm/normal",
                    children:
                        "PaymentModal Step within CheckoutRootProvider loaded. Click below to navigate to a mock error step that will throw \u2014 the CheckoutErrorBoundary baked into CheckoutRootProvider will catch it.",
                }),
                (0, s.jsx)(G.$, { variant: "primary", text: "Navigate to Error Step", onClick: () => e(m.pn.REVIEW) }),
            ],
        }),
    });
}
function eV(e) {
    let { errorType: t = "mock-error", errorHandlingBehavior: l } = e;
    switch (t) {
        case "mock-error":
            throw Error("Simulated error thrown inside a payment step");
        case "checkout-error":
            throw new eb.v({
                message: "Simulated CheckoutError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "revenue-error":
            throw new eI.v({
                message: "Simulated RevenueError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "translation-key-error":
            return (0, s.jsx)("div", {
                children: w.intl.format(eM.default.cRB332, {
                    avatar: (0, s.jsx)("div", { children: "Sample Avatar" }),
                    nickname: (0, s.jsx)("div", { children: "Sample Nickname" }),
                    username: (0, s.jsx)("div", { children: "Sample Username" }),
                }),
            });
        default:
            return (0, s.jsx)("div", { children: "Unknown error type" });
    }
}
let eL = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: function () {
                let [e, t] = u.useState(eR.pe.TIER_2),
                    [l, a] = u.useState(null),
                    n = (0, ee.yK)([e_.A], () => e_.A.getGuildsArray()),
                    [i] = (0, ee.yK)([ek.A], () => [ek.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, m] = u.useState(r.length > 0 ? r[0].value : null),
                    [b, h] = u.useState(""),
                    [x, g] = u.useState({ plan_id: eR.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    v = "true" !== x.gift && null != i,
                    [E, C] = u.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: T } = (0, p.Ay)(c.A.PAYMENT_FLOW_TEST_PAGE),
                    [j, A] = u.useState(""),
                    [I, P] = u.useState(N.dJq),
                    { balance: _, isFetching: k, error: R } = (0, eP.W)(),
                    { isSubmitting: M, responseMessage: D, redeemVirtualCurrency: O } = (0, eP.Q)(),
                    [V, L] = u.useState(N.dJq),
                    [w, B] = u.useState(""),
                    [$, W] = u.useState(N.dJq);
                return (0, s.jsx)(p.f5, {
                    value: T,
                    children: (0, s.jsx)(el.Ip, {
                        className: U.XG,
                        children: (0, s.jsxs)(ea.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, s.jsxs)(ea.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(en.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: eR.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eR.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eR.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(ej.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: et.XD.PRIMARY,
                                            look: et.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(ea.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, s.jsx)(en.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: eR.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eR.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eR.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => a(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, eC.A)({ subscriptionTier: l, analyticsLocations: T }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(ea.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(en.l, {
                                            label: "Boost",
                                            value: o,
                                            options: r,
                                            onSelectionChange: m,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != o
                                            ? (0, s.jsx)(ef.A, { guild: o, analyticsLocation: {} })
                                            : (0, s.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(ea.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsx)(y.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, s.jsxs)(ea.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(er.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: b,
                                                    onChange: (e) => h(e),
                                                }),
                                                (0, s.jsx)(eo.m, {
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
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(es.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, s.jsx)(en.l, {
                                            label: "Plan",
                                            value: x.plan_id,
                                            options: [
                                                { id: "tier_2", value: eR.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: eR.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: eR.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                g((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(en.l, {
                                            label: "Type",
                                            value: x.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                g((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(eo.m, {
                                    text: "Already subscribed",
                                    shouldShow: v,
                                    children: (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: v,
                                        onClick: () => {
                                            window.open(N.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + Z.stringify({ ...x }));
                                        },
                                    }),
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(es.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, s.jsxs)(ea.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                k
                                                    ? (0, s.jsx)("div", {
                                                          className: U.wG,
                                                          children: (0, s.jsx)(eu.y, { type: eu.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, s.jsxs)("div", {
                                                          className: U.dB,
                                                          children: [
                                                              null !== R &&
                                                                  (0, s.jsxs)(f.E, {
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
                                        (0, s.jsx)(er.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: V,
                                            onChange: (e) => L(e),
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: M,
                                            onClick: () => O(V, (0, d.A)()),
                                        }),
                                        null != D && (0, s.jsx)(f.E, { variant: "text-sm/normal", children: D }),
                                    ],
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(es.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, s.jsx)(en.l, {
                                            label: "Premium Server Subscription For",
                                            value: E,
                                            options: r,
                                            onSelectionChange: C,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, s.jsx)(f.E, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, s.jsx)(ey.H, {
                                            guildId: E?.id,
                                            children: (0, s.jsx)(eN, { selectedGuildForGuildSub: E }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsxs)(ea.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, s.jsxs)(es.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, s.jsx)(er.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: j,
                                                    onChange: A,
                                                }),
                                                (0, s.jsx)(er.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: I,
                                                    onChange: (e) => P(e),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsx)(G.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, eE.openIAPPurchaseModal)({
                                                    applicationId: j,
                                                    skuId: I,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: N.liQ.IN_APP },
                                                    context: N.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsx)(ea.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, s.jsx)(es.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, s.jsxs)(ea.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, s.jsx)(er.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: w,
                                                    onChange: B,
                                                }),
                                                (0, s.jsx)(er.k, {
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
                                                        (0, eT.q)({
                                                            applicationId: w,
                                                            skuId: $,
                                                            analyticsLocations: T,
                                                            checkoutFlow: em.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsx)(es.n, {
                                    label: "Helpers",
                                    children: (0, s.jsxs)(ea.B, {
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
                                                onClick: () => (0, ep.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, s.jsx)(ei.c, {}),
                                (0, s.jsx)(es.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, ex.Ab)(),
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
                        (0, s.jsxs)(ea.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, s.jsx)(ec.D, {
                                    variant: "heading-lg/semibold",
                                    children: "Checkout Error Boundary",
                                }),
                                (0, s.jsxs)(f.E, {
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
                                                        renderStep: () => (0, s.jsx)(eO, {}),
                                                        renderHeader: () =>
                                                            (0, s.jsx)(Q.rQ, { title: "Checkout Error Boundary Test" }),
                                                    },
                                                    {
                                                        key: m.pn.REVIEW,
                                                        renderStep: () =>
                                                            (0, s.jsx)(eS.dZ, {
                                                                children: (0, s.jsx)(eV, {
                                                                    errorType: a,
                                                                    errorHandlingBehavior: l,
                                                                }),
                                                            }),
                                                    },
                                                ];
                                            function i() {
                                                return (0, ed.closeModal)(eD);
                                            }
                                            return (0, ed.openModalLazy)(
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
                                                            children: (0, s.jsx)(T.dX, {
                                                                isGift: !1,
                                                                children: (0, s.jsx)(A.q, {
                                                                    transitionState: r,
                                                                    onClose: i,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    });
                                                },
                                                { onCloseRequest: i, onCloseCallback: i, modalKey: eD },
                                            );
                                        })(a, { errorHandlingBehavior: t, errorType: l }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(ea.B, {
                            direction: "vertical",
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, s.jsx)(ec.D, { variant: "heading-lg/semibold", children: "Other Checkout Errors" }),
                                (0, s.jsx)(f.E, {
                                    variant: "text-md/normal",
                                    children: "Simulate known checkout error from discountOfferHasTierError():",
                                }),
                                (0, s.jsx)(G.$, {
                                    variant: "critical-primary",
                                    text: "Simulate Error",
                                    onClick: () =>
                                        void (console.log("Simulating error in discountOfferHasTier()"),
                                        (0, eA.U9)({ discount: null }, eR.pe.TIER_2)),
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
var ew = l(773882),
    eU = l(809029),
    eB = l(158045),
    eG = l(492518),
    eH = l(758836);
function e$() {
    return {
        options: [
            { value: eH.ck["0"], label: `${eH.ck["0"]} (Cat Ears)` },
            { value: eH.ck["1"], label: `${eH.ck["1"]} (Angry)` },
            { value: eH.ck["2"], label: `${eH.ck["2"]} (Aurora Bundle)` },
            { value: eH.ck["3"], label: `${eH.ck["3"]} (Heartbloom)` },
            { value: eH.ck["4"], label: `${eH.ck["4"]} (Aurora Dreams)` },
            { value: eH.ck["5"], label: `${eH.ck["5"]} (Sakura Ink)` },
            { value: eH.ck["6"], label: `${eH.ck["6"]} (Of Ink and Steel)` },
            { value: eH.ck["7"], label: `${eH.ck["7"]} (Twilight)` },
            { value: eH.ck["8"], label: `${eH.ck["8"]} (Red Dragon)` },
            { value: eH.ck["9"], label: `${eH.ck["9"]} (Aurora)` },
        ],
        defaultValue: eH.ck["0"],
    };
}
let eW = [
        {
            key: m.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.CONFIRM,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq) },
        },
        {
            key: m.pn.PLAN_SELECT,
            renderStep: (e) => (0, s.jsx)(R, { ...e, originStep: m.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => w.intl.string(w.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    eF = [{ key: m.pn.REVIEW, renderStep: (e) => (0, s.jsx)(ew.p, { ...e }) }, ...eW],
    eY = [{ key: m.pn.REVIEW, renderStep: (e) => (0, s.jsx)(eU.E, { ...e }) }, ...eW];
function ez() {
    return (0, s.jsx)(f.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" });
}
let eK = { isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 } },
    eq = e$(),
    eJ = {
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
                } = k({ skuId: t, isGift: l, applicationId: N.FYj }),
                d = eB.Ay.isPremiumSku(t);
            return o || null == u || d
                ? (0, s.jsx)(eG.k, {})
                : (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(M, {
                              stepConfigs: eF,
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
                          (0, s.jsx)(ez, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: eq.options, defaultValue: eq.defaultValue },
            ...eK,
        },
    },
    eX = {
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
                } = k({ skuId: t, isGift: l, applicationId: eR.tv }),
                c = eB.Ay.isPremiumSku(t),
                p = c ? eR.zE[t] : void 0,
                [m, b] = u.useState(p),
                h = u.useRef(!1);
            u.useEffect(() => {
                h.current || null == p || ((h.current = !0), b(p));
            }, [p, m]);
            let { isLoadedForPremiumSKUs: f, selectedPlan: y } = (function (e) {
                let { subscriptionPlanId: t } = e;
                u.useEffect(() => {
                    I.A.isLoadedForPremiumSKUs() || v.h.wait(() => (0, S.zS)());
                }, []);
                let l = (0, x.bG)([I.A], () => (null != t ? I.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, x.bG)([I.A], () => I.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: m });
            return !o && null != d && f && c && null != y
                ? (0, s.jsxs)("div", {
                      className: U.Cd,
                      children: [
                          (0, s.jsx)(M, {
                              stepConfigs: eY,
                              analyticsLocations: a,
                              applicationId: eR.tv,
                              initialPlanId: p,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: N.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, s.jsx)(ez, {}),
                      ],
                  })
                : (0, s.jsx)(eG.k, {});
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { value: eR.pe.TIER_0, label: `${eR.pe.TIER_0} (Nitro Basic)` },
                    { value: eR.pe.TIER_2, label: `${eR.pe.TIER_2} (Nitro Standard)` },
                ],
                defaultValue: eR.pe.TIER_0,
            },
            ...eK,
        },
    };
var eZ = l(993077),
    eQ = l(939249),
    e0 = l(658675),
    e1 = l(478531),
    e2 = l(664111),
    e3 = l(994500),
    e6 = l(287809),
    e8 = l(403362),
    e7 = l(784018),
    e4 = l(668025);
let e9 = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, ee.yK)([e3.A, e6.default], () =>
                e3.A.getFriendIDs()
                    .map((e) => e6.default.getUser(e))
                    .filter(e8.Vq),
            ),
            [r, o] = u.useState(new Set()),
            d = u.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return t ? a.add(e) : a.delete(e), a;
                });
            }, []),
            c = u.useMemo(() => Array.from(r), [r]),
            p = u.useCallback(() => (0, s.jsx)(e1.A, { title: a, participantIds: c }), [a, c]),
            m = "landscape" === l ? 640 : 360;
        return (0, s.jsxs)("div", {
            className: e4.iE,
            children: [
                (0, s.jsx)("div", {
                    className: e4.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, s.jsx)(e2.default, {
                        src: t,
                        initialActive: !1,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: g.ip.ENTERED,
                    }),
                }),
                (0, s.jsxs)(eZ.Z, {
                    className: e4.nd,
                    type: eZ.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, s.jsxs)("div", {
                            className: e4.Iv,
                            children: [
                                (0, s.jsx)(f.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    children: "Participants",
                                }),
                                (0, s.jsxs)(f.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [r.size, " selected"],
                                }),
                            ],
                        }),
                        (0, s.jsx)(ei.c, {}),
                        0 === i.length
                            ? (0, s.jsx)("div", {
                                  className: e4.p$,
                                  children: (0, s.jsx)(f.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, s.jsx)("div", {
                                  className: e4.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: i.map((e) => {
                                      let t = r.has(e.id);
                                      return (0, s.jsxs)(
                                          eQ.D,
                                          {
                                              className: e4.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => d(e.id, !t),
                                              children: [
                                                  (0, s.jsx)(e0.P, { checked: t }),
                                                  (0, s.jsx)(Y.eu, {
                                                      src: e.getAvatarURL(void 0, 24),
                                                      size: z._3.SIZE_24,
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, s.jsx)(f.E, {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: e7.kz },
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
var e5 = l(930349);
function te() {
    return (0, s.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function tt() {
    return (0, s.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let tl = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    ta = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, accessibleLabel: l, accessibleValue: a } = e;
                    return (0, s.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, s.jsx)(e5.A, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: a,
                                renderPreview: () => (0, s.jsx)(te, {}),
                            }),
                            (0, s.jsx)(e5.A, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: a,
                                renderPreview: () => (0, s.jsx)(tt, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: tl,
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
                            (0, s.jsx)(e5.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(te, {}),
                            }),
                            (0, s.jsx)(e5.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, s.jsx)(tt, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: tl,
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
                            (0, s.jsx)(e5.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, s.jsx)(te, {}),
                            }),
                            (0, s.jsx)(e5.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, s.jsx)(tt, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: tl,
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
var tn = l(687021),
    ti = l(487233),
    tr = l(120386),
    to = l(374654);
let ts = { value: "", label: "No Guild (main profile)" };
var tu = l(99696),
    td = l(599147),
    tc = l(808411),
    tp = l(461536),
    tm = l(425713),
    tb = l(277135);
let th = {
    bronze: eR.Ac.PREMIUM_TENURE_1_MONTH,
    silver: eR.Ac.PREMIUM_TENURE_3_MONTH,
    gold: eR.Ac.PREMIUM_TENURE_6_MONTH,
    platinum: eR.Ac.PREMIUM_TENURE_12_MONTH,
    diamond: eR.Ac.PREMIUM_TENURE_24_MONTH,
    emerald: eR.Ac.PREMIUM_TENURE_36_MONTH,
    ruby: eR.Ac.PREMIUM_TENURE_60_MONTH,
    opal: eR.Ac.PREMIUM_TENURE_72_MONTH,
};
var tx = l(661531),
    tf = l(116833),
    ty = l(720879);
let tg = {
    bronze: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
    },
    silver: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
    },
    gold: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
    },
    platinum: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
    },
    diamond: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    },
    emerald: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
    },
    ruby: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
    },
    opal: {
        type: "custom",
        start: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
        end: tx.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
    },
};
var tv = l(624716),
    tE = l(872725);
let tS = { name: "Expressive Progress", component: tc.A, id: "expressive-progress", controls: {} },
    tC = { name: "Tab Tooltip", component: tv.A, id: "tab-tooltip", controls: {} },
    tT = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, s.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, s.jsx)(
                            tE.A,
                            {
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: eZ.s.PRIMARY,
                                glowing: !0,
                                children: (0, s.jsxs)("div", {
                                    style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 },
                                    children: [
                                        (0, s.jsx)(ec.D, { variant: "heading-lg/semibold", children: "Card Title" }),
                                        (0, s.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "This is sample card content using design system tokens.",
                                        }),
                                        (0, s.jsx)(f.E, {
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
                    return (0, s.jsx)(td.o, {});
                },
                id: "cancellation-flow",
                controls: {},
            },
            tS,
            {
                name: "Mini Premium Tooltip",
                component: function (e) {
                    let { badgeId: t, earnedOnText: l, variant: a } = e,
                        n = u.useRef(null),
                        i = u.useRef(null),
                        r = th[t],
                        o = (0, tm.I)(r).standard,
                        d = eR.VD[r].rarity,
                        c = (
                            w.intl.string(w.t.lG6a5x) +
                            " " +
                            w.intl.string(eR.VD[r].nameUnformatted)
                        ).toLocaleUpperCase();
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(f.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children:
                                    'Hover or focus a badge to see the mini tooltip. Renders as `role="tooltip"` \u2014 title and body are announced via `aria-describedby` injected on the trigger by MiniPremiumTooltip.',
                            }),
                            (0, s.jsxs)("div", {
                                className: tb.k3,
                                children: [
                                    (0, s.jsx)("span", {
                                        className: tb.yU,
                                        children: (0, s.jsx)(tp.K, {
                                            targetElementRef: n,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: d,
                                            variant: a,
                                            children: (0, s.jsx)(y.Anchor, {
                                                href: "#",
                                                ref: n,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: tb.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, s.jsx)("span", {
                                        className: tb.yU,
                                        children: (0, s.jsx)(tp.K, {
                                            targetElementRef: i,
                                            title: c,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: c,
                                            rarity: d,
                                            variant: a,
                                            children: (0, s.jsx)(y.Anchor, {
                                                href: "#",
                                                ref: i,
                                                "aria-label": w.intl.string(w.t["JEiq/c"]),
                                                children: (0, s.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: tb.Jv,
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
                        y = u.useRef(null),
                        g = u.useMemo(
                            () =>
                                ({
                                    bronze: eR.Ac.PREMIUM_TENURE_1_MONTH,
                                    silver: eR.Ac.PREMIUM_TENURE_3_MONTH,
                                    gold: eR.Ac.PREMIUM_TENURE_6_MONTH,
                                    platinum: eR.Ac.PREMIUM_TENURE_12_MONTH,
                                    diamond: eR.Ac.PREMIUM_TENURE_24_MONTH,
                                    emerald: eR.Ac.PREMIUM_TENURE_36_MONTH,
                                    ruby: eR.Ac.PREMIUM_TENURE_60_MONTH,
                                    opal: eR.Ac.PREMIUM_TENURE_72_MONTH,
                                })[i],
                            [i],
                        ),
                        v = null != g ? (0, tm.I)(g).standard : null,
                        E = u.useMemo(() => {
                            if (null == g) return "";
                            let e = eR.VD[g];
                            return (
                                w.intl.string(w.t.lG6a5x) +
                                " " +
                                w.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [g]),
                        S = u.useMemo(() => {
                            if (!a || null == v) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: d, progressCircleUrgency: c }
                                : {};
                            return {
                                type: "dynamic",
                                component: tf.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
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
                            gradientColor: u.useMemo(() => ("string" == typeof b && b in tg ? tg[b] : b), [b]),
                            estimatedTooltipHeight: h,
                        };
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(f.E, {
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
                                    (0, s.jsx)(ty.L, {
                                        targetElementRef: x,
                                        ...C,
                                        children: (0, s.jsx)(G.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, s.jsx)(ty.L, {
                                        targetElementRef: y,
                                        ...C,
                                        children: (0, s.jsx)(G.$, { buttonRef: y, variant: "primary", text: "Right" }),
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
            tC,
        ],
    };
var tj = l(691540),
    tA = l(857250),
    tI = l(97483),
    tP = l(750338),
    t_ = l(387640),
    tk = l(576765),
    tR = l(88433);
let tM = { none: void 0, nitroWheel: r.t },
    tN = {
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
                previewImageStyle: f,
            } = e;
            function y() {
                return (0, tj.P0)((0, tA.o)("CTA clicked!", tI.Ck.SUCCESS));
            }
            let g = tM[d],
                v =
                    "descriptionCta" === a
                        ? { descriptionCta: n, onClick: y }
                        : "actions" === a
                          ? {
                                actions: [
                                    {
                                        text: i,
                                        variant: r,
                                        onClick: y,
                                        ...(null != g ? { icon: g, iconPosition: c } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: u, onClick: y }] : []),
                                ],
                            }
                          : {};
            return (0, s.jsx)("div", {
                children: (0, s.jsx)(tP.A, {
                    name: t_.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tk.A,
                    videoUrl: tR.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: b.length > 0 ? b : void 0,
                    badgeVariant: h,
                    isReducedMotion: x,
                    previewImageStyle: f,
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
                defaultValue: t_.A0.LARGE,
                options: [
                    { label: "Small", value: t_.A0.SMALL },
                    { label: "Medium", value: t_.A0.MEDIUM },
                    { label: "Large", value: t_.A0.LARGE },
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
                defaultValue: t_.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: t_.Tb.CONTAINED },
                    { label: "Overlay", value: t_.Tb.OVERLAY },
                ],
            },
        },
    };
var tD = l(398590),
    tO = l(920050),
    tV = l(744064),
    tL = l(976860);
let tw = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, s.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, s.jsx)(tV.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, tj.P0)((0, tA.o)("CTA Clicked!", tI.Ck.SUCCESS)),
                        }),
                        (0, s.jsx)(tU, {}),
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
function tU() {
    let [e, t] = (0, u.useState)("customSounds"),
        l = `${N.BVt.NITRO_HOME}?perk=${e}`;
    return (0, s.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, s.jsx)(er.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, s.jsx)(G.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, tD.jH)(), (0, tL.pX)(N.BVt.ME), setTimeout(() => (0, tL.pX)(l), 200);
                },
            }),
            (0, s.jsxs)(f.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                style: { userSelect: "text" },
                children: [
                    "IDs from PerkCardIds.tsx:",
                    (0, s.jsx)("ul", {
                        style: { margin: "4px 0 0", paddingLeft: 24, listStyleType: "disc", columns: 3, columnGap: 24 },
                        children: Object.values(tO).map((e) => (0, s.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var tB = l(349738),
    tG = l(339984);
let tH = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: eR.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: eR.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: eR.e.NAMEPLATE_MODAL_UPSELL },
    ],
    t$ = {
        [eR.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [eR.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [eR.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    },
    tW = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: N.qlD },
    ],
    tF = [
        { id: "avatar", label: "Avatar", value: tG.HL.AVATAR },
        { id: "banner", label: "Banner", value: tG.HL.BANNER },
    ];
var tY = l(652165);
let tz = "1271174907081789524",
    tK = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: function (e) {
            let { skuId: t } = e;
            return (0, s.jsx)("div", {
                className: U.YG,
                children: (0, s.jsx)(G.$, {
                    onClick: () => {
                        (0, tY.B4)({
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
                    { skuId: tz, skuName: "Oni's Curse (Deco)" },
                ].map((e) => {
                    let { skuId: t, skuName: l } = e;
                    return { label: l, value: t };
                }),
                defaultValue: tz,
            },
        },
    };
var tq = l(324861),
    tJ = l(877062);
let tX = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, s.jsx)(C.M, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, s.jsxs)(tB.wn, {
                children: [
                    (0, s.jsx)(ec.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, s.jsx)(tB.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, s.jsx)(G.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: function () {
                                console.log("Opening deep link... ", t),
                                    tJ.A.launch(t, (e) => {
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
var tZ = l(636537);
let tQ = {
    [N.hes.CARD]: () => w.intl.string(w.t["ei5/p8"]),
    [N.hes.PAYPAL]: () => w.intl.string(w.t["2dgEq+"]),
    [N.hes.SOFORT]: () => w.intl.string(w.t["edKX/1"]),
    [N.hes.GIROPAY]: () => w.intl.string(w.t["y+0MQZ"]),
    [N.hes.PRZELEWY24]: () => w.intl.string(w.t.u25uL0),
    [N.hes.PAYSAFE_CARD]: () => w.intl.string(w.t.boznHN),
    [N.hes.GCASH]: () => w.intl.string(w.t.PjehcF),
    [N.hes.GRABPAY_MY]: () => w.intl.string(w.t.T5davE),
    [N.hes.MOMO_WALLET]: () => w.intl.string(w.t.J0A1Vk),
    [N.hes.VENMO]: () => w.intl.string(w.t.jYOezc),
    [N.hes.KAKAOPAY]: () => w.intl.string(w.t.CSVexi),
    [N.hes.GOPAY_WALLET]: () => w.intl.string(w.t["43J8JK"]),
    [N.hes.BANCONTACT]: () => w.intl.string(w.t["1ITkfq"]),
    [N.hes.EPS]: () => w.intl.string(w.t["5BSDU6"]),
    [N.hes.IDEAL]: () => w.intl.string(w.t.nSbwqC),
    [N.hes.CASH_APP]: () => w.intl.string(w.t["+rbTmL"]),
    [N.hes.APPLE]: () => w.intl.string(w.t.RFi12i),
};
var t0 = l(295405),
    t1 = l(71532),
    t2 = l(818348),
    t3 = l(336899);
let t6 = e$();
async function t8(e) {
    return (await tZ.Bo.post({ url: N.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function t7(e) {
    return (await tZ.Bo.get({ url: N.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function t4(e, t) {
    await tZ.Bo.patch({
        url: N.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function t9() {
    let [e, t] = u.useState(!1),
        [l, a] = u.useState(!1),
        [n, i] = u.useState(null),
        [r, o] = u.useState(null),
        [d, c] = u.useState(t6.defaultValue),
        [p, m] = u.useState(null),
        b = (0, ee.bG)([t0.A], () => t0.A.paymentSources),
        h = (0, ee.bG)([t0.A], () => t0.A.hasFetchedPaymentSources),
        x = (0, ee.bG)([t0.A], () => t0.A.defaultPaymentSourceId);
    u.useEffect(() => {
        h || (0, ep.$o)();
    }, [h]),
        u.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]);
    let y = u.useRef(null);
    u.useEffect(() => {
        if (null == r || "" === r) {
            y.current = p;
            return;
        }
        if (p !== y.current) {
            if (null == p || "" === p) {
                y.current = p;
                return;
            }
            t4(r, p)
                .then(() => {
                    i(`Order updated successfully!
Order ID: ${r}
Payment source changed.`);
                })
                .catch((e) => {
                    let t = e instanceof Error ? e.message : String(e);
                    i(`Failed to update order: ${t}`);
                }),
                (y.current = p);
        }
    }, [r, p]);
    let g = u.useMemo(
        () =>
            Object.values(b).map((e) => {
                var t;
                let l,
                    a = null != (l = tQ[(t = e.type)]) ? l() : String(t);
                if (e.type === t2.he.CARD && "last4" in e) {
                    let t = e.last4 ?? "",
                        l = e.brand ?? "Unknown";
                    a += ` - ****${t} (${l})`;
                } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                return { id: e.id, value: e.id, label: a };
            }),
        [b],
    );
    async function v() {
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
    }
    async function S() {
        if (null == r || "" === r) return void i("No order ID available. Please create an order first.");
        a(!0);
        try {
            let e = await t8(r);
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
                            let n = await (0, t1.Cv)();
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
            else
                1001 === t
                    ? (i(`Order signing in progress!
Order ID: ${r}
This order requires redirection to complete the payment.
Polling order status...`),
                      (function (e, t, l, a) {
                          let n = e.billing_facet,
                              i = n?.order_signing_deferral_context?.payment_redirect_context,
                              r = i?.redirect_url;
                          null != r && window.open(r);
                          let o = Date.now(),
                              s = null;
                          function u() {
                              let e = Date.now() - o,
                                  a = Math.min(3e3, 3e4 - e);
                              a > 0 &&
                                  (s = setTimeout(() => {
                                      c().catch((e) => {
                                          let a = e instanceof Error ? e.message : String(e);
                                          l(`Failed to poll order status!
Order ID: ${t}
Error: ${a}`);
                                      });
                                  }, a));
                          }
                          function d() {
                              null != s && clearTimeout(s);
                          }
                          async function c() {
                              let e = Date.now() - o;
                              if (e >= 3e4) {
                                  try {
                                      var n;
                                      (n = (await t7(t)).status),
                                          l(`Order signing timed out.
Order ID: ${t}
Status: ${n ?? "unknown"}
Please check the order status manually.`),
                                          d();
                                  } catch (a) {
                                      let e = a instanceof Error ? a.message : String(a);
                                      l(`Order signing timed out.
Order ID: ${t}
Error: ${e}`),
                                          d();
                                  }
                                  return;
                              }
                              try {
                                  let e = (await t7(t)).status;
                                  if (2 === e) {
                                      l(`Order signed successfully!
Order ID: ${t}
Payment redirect completed.`),
                                          a(null),
                                          d();
                                      return;
                                  }
                                  if (1 === e) {
                                      l(`Order signed unsuccessfully
Order ID: ${t}`),
                                          d();
                                      return;
                                  }
                                  u();
                              } catch (n) {
                                  let a = n instanceof Error ? n.message : String(n);
                                  e < 3e4
                                      ? u()
                                      : (l(`Order signing timed out.
Order ID: ${t}
Error: ${a}`),
                                        d());
                              }
                          }
                          c().catch((e) => {
                              let a = e instanceof Error ? e.message : String(e);
                              l(`Failed to start polling order status!
Order ID: ${t}
Error: ${a}`);
                          });
                      })(e, r, i, o))
                    : i(`Order signing failed
Order ID: ${r}
Error: ${t}`);
        } catch (t) {
            let e = t instanceof Error ? t.message : String(t);
            i(`Failed to sign order: ${e}`);
        } finally {
            a(!1);
        }
    }
    return (0, s.jsxs)(tB.wn, {
        children: [
            (0, s.jsx)(ec.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, s.jsxs)(tB.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, s.jsx)(f.E, {
                        variant: "text-md/normal",
                        className: t3.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, s.jsxs)(es.n, {
                        label: "Configuration",
                        children: [
                            (0, s.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, s.jsx)(en.l, {
                                    selectionMode: "single",
                                    value: d,
                                    onSelectionChange: c,
                                    options: t6.options,
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
                                    (0, s.jsx)(en.l, {
                                        selectionMode: "single",
                                        value: p,
                                        onSelectionChange: m,
                                        options: g,
                                        placeholder: "Select a payment source...",
                                        disabled: !h,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !h &&
                                        (0, s.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: t3.cW,
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
                            className: t3.cW,
                            children: n
                                .split("\n")
                                .map((e, t) =>
                                    (0, s.jsx)(
                                        f.E,
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
var t5 = l(150934),
    le = l(36167);
let lt = [
        { id: "tier_2", value: eR.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eR.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eR.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    ll = [
        { id: "meta_quest", value: _.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function la() {
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
function ln(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(eR.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = u.useState(!1),
        { error: r, handleSuccess: o, handleFailure: c } = la(),
        p = u.useCallback(() => {
            let e = (0, d.A)();
            (0, le.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, c);
        }, [l, n, t, o, c]);
    return (0, s.jsxs)(tB.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, s.jsxs)(ea.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, s.jsx)(en.l, {
                        label: "Plan",
                        value: l,
                        options: lt,
                        onSelectionChange: a,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, s.jsx)(en.l, {
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
            null != r && (0, s.jsx)(f.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: r }),
        ],
    });
}
function li(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = la(),
        i = u.useCallback(() => {
            if (null == t) return;
            let e = (0, d.A)(),
                l = N.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, le.xq)(l, a, n);
        }, [t, a, n]);
    return (0, s.jsxs)(tB.Hq, {
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
            null != l && (0, s.jsx)(f.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function lr(e) {
    let { flowType: t } = e,
        [l, a] = u.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = la(),
        o = u.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, d.A)(),
                a = N.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, le.xq)(a, i, r);
        }, [l, i, r, t]);
    return (0, s.jsxs)(tB.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, s.jsx)(er.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, s.jsx)(G.$, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: o,
            }),
            null != n && (0, s.jsx)(f.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var lo = l(643909),
    ls = l(103557),
    lu = l(558179);
let ld = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    lc = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    lp = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    lm = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    };
function lb(e) {
    return void 0 !== e ? JSON.stringify(e, null, 2) : "undefined";
}
function lh() {
    let [e, t] = u.useState(lb(lp)),
        [l, a] = u.useState(lp),
        [n, i] = u.useState(lb(lm)),
        [r, o] = u.useState(lm),
        [d, c] = u.useState(null),
        [p, m] = u.useState(
            (0, s.jsx)(tB.a8, {
                errorLabel: ld.CONFIGURABLE,
                elementOptions: lp,
                children: (0, s.jsx)(lo.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: lm,
                }),
            }),
        );
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsxs)(f.E, {
                variant: "text-md/normal",
                className: t3.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, s.jsxs)(f.E, {
                variant: "text-md/normal",
                className: t3.cW,
                children: [
                    (0, s.jsx)("b", { children: "elements.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tB.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: t3.PC,
                children: (0, s.jsx)(ls.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, s.jsxs)(f.E, {
                variant: "text-md/normal",
                className: t3.cW,
                children: [
                    (0, s.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tB.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)(tB.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: t3.PC,
                children: (0, s.jsx)(ls.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: n,
                    onChange: i,
                    rows: 7,
                }),
            }),
            null != d && (0, s.jsx)(f.E, { variant: "text-md/normal", color: "text-feedback-critical", children: d }),
            (0, s.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: t3.Ut,
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
                                            (0, s.jsxs)(f.E, {
                                                variant: "text-md/normal",
                                                className: t3.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, s.jsx)(tB.a8, {
                                                errorLabel: ld.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, s.jsx)(lo.ExpressCheckoutElement, {
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
            (0, s.jsx)(f.E, { variant: "text-md/normal", className: t3.cW, children: "Current Element Options:" }),
            (0, s.jsx)(f.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lu.A, { className: t3.wD, children: `\`\` ${lb(l)} \`\`` }),
            }),
            (0, s.jsx)(f.E, {
                variant: "text-md/normal",
                className: t3.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, s.jsx)(f.E, {
                variant: "text-md/normal",
                children: (0, s.jsx)(lu.A, { className: t3.wD, children: `\`\` ${lb(r)} \`\`` }),
            }),
            p,
        ],
    });
}
var lx = l(503698),
    lf = l.n(lx),
    ly = l(683071),
    lg = l(942340),
    lv = l(211528),
    lE = l(87725),
    lS = l(783327),
    lC = l(626584),
    lT = l(667648),
    lj = l(624479),
    lA = l(408278),
    lI = l(957565),
    lP = l(247329);
function l_(e) {
    let { label: t, value: l } = e;
    return (0, s.jsxs)("div", {
        className: lP.I,
        children: [
            (0, s.jsxs)(f.E, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, s.jsx)(f.E, { variant: "text-sm/normal", children: l }),
            (0, s.jsx)(lA.K, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: lj.CopyIcon,
                onClick: () => (0, lI.C)(l),
            }),
        ],
    });
}
function lk(e) {
    let { children: t, stepConfigs: l, bodyClassName: a } = e;
    return (0, s.jsx)(C.M, {
        stepConfigs: l,
        skuIDs: [],
        activeSubscription: null,
        children: (0, s.jsx)("div", { className: a, children: t }),
    });
}
var lR = l(887072);
let lM = new lC.A("PaymentElement.web.stories"),
    lN = {
        key: m.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, s.jsx)("div", {}),
        options: { renderHeader: !1, hideDefaultModalBody: !0 },
    };
function lD() {
    let { elementsAppearanceOptions: e } = (0, lg.E)();
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)(ec.D, {
                variant: "heading-lg/semibold",
                className: U.tm,
                children: "Defaults for Current Theme",
            }),
            (0, s.jsx)("div", {
                children: Object.entries(e).map((e) => {
                    let [t, l] = e;
                    return (0, s.jsx)(l_, { label: t, value: l }, t);
                }),
            }),
        ],
    });
}
function lO(e) {
    let [t, l] = u.useState(0);
    return (0, s.jsx)(C.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, u.createElement)(lV, { ...e, key: t, forceRemount: () => l(t + 1) }),
    });
}
function lV(e) {
    let {
            linkEnabled: t,
            theme: l,
            colorText: a,
            colorBackground: n,
            inputBackgroundColor: i,
            tabBackgroundColor: r,
            tabSelectedBackgroundColor: o,
            storyType: d,
            forceRemount: c,
        } = e,
        p = (0, lS.S)(),
        { setLinkWalletEnabled: b, linkWalletEnabled: h } = (0, lE.t4)((e) => ({
            setLinkWalletEnabled: e.setLinkWalletEnabled,
            linkWalletEnabled: e.linkWalletEnabled,
        }));
    u.useEffect(() => {
        h !== t && (b(t), c());
    }, [t, h, b, c]);
    let { stripePaymentElementProps: x, stripeAddressElementProps: f } = (0, lT.wD)({
            step: m.pn.PAYMENT_ELEMENT,
            handleStepChange: N.tEg,
            onBillingAddressChange: N.tEg,
            logger: lM,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0,
        }),
        {
            elementsOptions: y,
            isLoading: g,
            setupError: v,
            customPaymentMethodIdsToSourceTypes: E,
        } = (0, lg.p)({
            onSetupError: (e) => {
                lM.info("Stripe Payment Element options setup error: ", e);
            },
            elementsAppearanceOptions: {
                theme: l,
                colorText: a,
                colorBackground: n,
                inputBackgroundColor: i,
                tabBackgroundColor: r,
                tabSelectedBackgroundColor: o,
            },
        });
    return g || null != v || null == p
        ? (0, s.jsx)(lT.eR, {})
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
                      className: lR.ny,
                      children: [
                          (0, s.jsx)(lD, {}),
                          (0, s.jsx)(lk, {
                              stepConfigs: [lN],
                              children: (0, s.jsx)("div", {
                                  className: lf()(lR.o6, "joined-payment-address-elements" === d ? lR.fF : lR.u1),
                                  children: (0, s.jsxs)(lo.Elements, {
                                      stripe: p,
                                      options: y,
                                      children: [
                                          "stripe-address-element" === d
                                              ? (0, s.jsx)("div", {
                                                    className: U.R,
                                                    children: (0, s.jsx)(lv.Wf, {
                                                        ...x,
                                                        customPaymentMethodIdsToSourceTypes: E,
                                                        step: m.pn.PAYMENT_ELEMENT,
                                                    }),
                                                })
                                              : (0, s.jsx)(lv.Wf, {
                                                    ...x,
                                                    customPaymentMethodIdsToSourceTypes: E,
                                                    step: m.pn.PAYMENT_ELEMENT,
                                                }),
                                          ("joined-payment-address-elements" === d || "stripe-address-element" === d) &&
                                              (0, s.jsx)(lv.KS, {
                                                  ...f,
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
let lL = {
        linkEnabled: { label: "Stripe Link enabled", type: "boolean", defaultValue: !0 },
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
    lw = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: function (e) {
            return (0, s.jsx)(lO, { ...e, storyType: "joined-payment-address-elements" });
        },
        controls: { ...lL },
    },
    lU = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: function (e) {
            return (0, s.jsx)(lO, { ...e, storyType: "stripe-payment-element" });
        },
        controls: { ...lL },
    },
    lB = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: function (e) {
            return (0, s.jsx)(lO, { ...e, storyType: "stripe-address-element" });
        },
        controls: { ...lL },
    };
var lG = l(786826);
let lH = {
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
                    children: (0, s.jsx)(lG.f, {
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
var l$ = l(435558),
    lW = l(96337),
    lF = l(997101),
    lY = l(597770),
    lz = l(278416),
    lK = l(480642),
    lq = l(936477),
    lJ = l(812745);
let lX = {
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
                    (0, s.jsx)(lq.q7, {
                        selection: b,
                        onChange: h,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, s.jsx)(lq.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: a,
                                subtext: i ? (0, s.jsx)(lq.Lo, { strikethrough: r, price: n }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, s.jsx)(lq.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: o,
                                primaryText: d,
                                subtext: p ? (0, s.jsx)(lq.Lo, { strikethrough: m, price: c }) : void 0,
                            },
                        ],
                    }),
                    (0, s.jsxs)(f.E, { variant: "text-sm/normal", children: ["Selected plan index: ", b] }),
                ],
            });
        },
        controls: {
            variant: {
                label: "Nitro Variant",
                type: "select",
                defaultValue: eR.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: eR.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: eR.PremiumTypes.TIER_0 },
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
    lZ = {
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
                    item1SubText: f,
                    item1SubTextHasStrikethrough: y,
                    item2Label: g,
                    item2Amount: v,
                    item2FormatWithoutRate: E,
                    hasDiscount: S,
                    discountLabel: C,
                    discountAmount: T,
                } = e,
                j = p
                    ? [
                          {
                              id: 1,
                              label: m,
                              amount: b,
                              tooltip: "" !== h ? h : void 0,
                              labelSubText: "" !== x ? x : void 0,
                              subText: "" !== f ? f : void 0,
                              subTextHasStrikethrough: y,
                          },
                          ...("" !== g
                              ? [
                                    {
                                        id: 2,
                                        label: g,
                                        amount: v,
                                        icon: (0, s.jsx)(r.t, { size: "xs" }),
                                        formatWithoutRate: E,
                                    },
                                ]
                              : []),
                          ...(S ? [{ id: 3, label: C, amount: T }] : []),
                      ]
                    : [];
            return (0, s.jsx)("div", {
                className: U.SG,
                children: (0, s.jsx)(lq._D, {
                    label: t,
                    totalLineItemLabel: "" !== l ? l : void 0,
                    totalLineItemLabelSubText: "" !== a ? a : void 0,
                    totalLineItemValueSubText: "" !== n ? n : void 0,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: o,
                    lineItems: j,
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
                defaultValue: eR.WT.MONTH,
                options: [
                    { label: "Month", value: eR.WT.MONTH },
                    { label: "Year", value: eR.WT.YEAR },
                    { label: "Day", value: eR.WT.DAY },
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
    },
    lQ = { "nitro-wheel": r.t, gift: lY.GiftIcon, orbs: i.C },
    l0 = lW.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    l1 = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? lz.TagIcon : void 0;
            return (0, s.jsxs)(ea.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, s.jsx)(f.E, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, s.jsx)(G.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, ed.openModal)(
                                (e) =>
                                    (0, s.jsx)(lK.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? lQ[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, s.jsx)(ea.B, {
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
            countryCode: { label: "Country Code", type: "select", defaultValue: lF.d.US, options: l0 },
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
    l2 = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: N.Yri.USD,
        interval: eR.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    l3 = {
        [lq.I0.Subscription]: { type: lq.I0.Subscription, ...l2 },
        [lq.I0.SubscriptionApplication]: { type: lq.I0.SubscriptionApplication, ...l2 },
        [lq.I0.GuildProductOneTimePurchase]: { type: lq.I0.GuildProductOneTimePurchase, ...l2 },
        [lq.I0.PremiumAppsOneTimePurchase]: { type: lq.I0.PremiumAppsOneTimePurchase, ...l2 },
        [lq.I0.SubscriptionTrial]: { type: lq.I0.SubscriptionTrial, ...l2 },
        [lq.I0.OrbsRedemption]: { type: lq.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [lq.I0.Shop]: { type: lq.I0.Shop, purchaseButtonText: "Purchase" },
        [lq.I0.GiftNitro]: { type: lq.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [lq.I0.GiftShop]: { type: lq.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [lq.I0.GiftGameShop]: {
            type: lq.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
        [lq.I0.OrbsGameShop]: {
            type: lq.I0.OrbsGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
    },
    l6 = {
        title: "Unified Checkout",
        stories: [
            l1,
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
                            children: (0, s.jsx)(lq.Vm, { label: t, lineItems: n, currency: N.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            lX,
            lZ,
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
                        let m = e6.default.getCurrentUser(),
                            b = e_.A.getGuildsArray()[0];
                        return (0, s.jsx)(lq.f7, {
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
                            p(lq.JW, "Nitro"),
                            p(lq.DH, "Nitro Basic"),
                            p(lq.a6, "Boost"),
                            p(lq.jw, "App"),
                            p(lq.oo, "Nitro Credit"),
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
                            { id: "visa-1234", label: "Visa ending in 1234", icon: lJ.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: lJ.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: lJ.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: lJ.Be.AMEX },
                        ],
                        [i, r] = u.useState(n[0].id);
                    return (0, s.jsxs)("div", {
                        children: [
                            (0, s.jsx)(lq.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: l$.noop,
                                disabled: t,
                                error: l ? a : void 0,
                            }),
                            (0, s.jsxs)(f.E, {
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
                name: "Primitive: Legal Copy",
                id: "unified-checkout-legal-copy",
                component: function (e) {
                    let { type: t, immediateDelivery: l, paysafecard: a } = e,
                        [n, i] = u.useState(!1);
                    return (0, s.jsx)(lq._P, {
                        variant: l3[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? N.hes.PAYSAFE_CARD : N.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: lq.I0.Subscription,
                        options: [
                            { label: "Subscription", value: lq.I0.Subscription },
                            { label: "Subscription Trial", value: lq.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: lq.I0.OrbsRedemption },
                            { label: "Shop", value: lq.I0.Shop },
                            { label: "Nitro Gift", value: lq.I0.GiftNitro },
                            { label: "Shop Gift", value: lq.I0.GiftShop },
                            { label: "Game Shop Gift", value: lq.I0.GiftGameShop },
                            { label: "Orbs Game Shop Gift", value: lq.I0.OrbsGameShop },
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
                            (0, s.jsx)(f.E, { variant: "text-sm/normal", children: "Stateless Component:" }),
                            (0, s.jsx)(lq.y, { onClick: N.tEg }),
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)(f.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, s.jsx)(lq.Z4, { onComplete: N.tEg }),
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
                        children: (0, s.jsx)(lq.me, {
                            headingComponent: (0, s.jsx)(lq.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: eR.PremiumTypes.TIER_2,
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
                    return (0, s.jsx)(lq.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: lF.d.US, options: l0 },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: function (e) {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, s.jsx)(lq.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: lF.d.US,
                        options: l0,
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
var l8 = l(56359),
    l7 = l(734057),
    l4 = l(783878),
    l9 = l(711014),
    l5 = l(427262),
    ae = l(198498);
function at(e) {
    let { label: t, options: l, value: a, onChange: n } = e;
    return (0, s.jsx)(l4.Z, {
        label: t,
        selectionMode: "single",
        options: l,
        value: a,
        onSelectionChange: n,
        placeholder: 0 === l.length ? "Waiting for client to connect\u2026" : void 0,
    });
}
function al(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: ae.t, children: t });
}
let aa = "default";
var an =
    (((a = {}).PAYMENTS = "payments"),
    (a.VIRTUAL_CURRENCY = "virtual-currency"),
    (a.NITRO = "nitro"),
    (a.IDENTITY = "identity"),
    a);
let ai = ["Revenue Storybook", "Revenue Playground"],
    ar = {
        id: "payments",
        name: "Payments",
        groups: [
            eL,
            l6,
            {
                title: "Gift Card",
                stories: [
                    {
                        name: "Redemption Modal",
                        id: "gift-card-redemption-modal",
                        component: function () {
                            return (0, s.jsxs)(ea.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(f.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                                    }),
                                    (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Redemption Modal",
                                        onClick: () =>
                                            (0, tu.HF)({
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
                            return (0, s.jsxs)(ea.B, {
                                gap: 8,
                                children: [
                                    (0, s.jsx)(f.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption success modal (post-redemption).",
                                    }),
                                    (0, s.jsx)(G.$, {
                                        variant: "primary",
                                        text: "Open Success Modal",
                                        onClick: () =>
                                            (0, tu.cV)({
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
            { title: "Payment Elements", stories: [lU, lB, lw] },
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
            { title: "Checkout Review Step", stories: [eJ, eX] },
            {
                title: "Miscellaneous",
                stories: [
                    tX,
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
                            return (0, s.jsxs)(tB.wn, {
                                children: [
                                    (0, s.jsx)(ec.D, {
                                        variant: "heading-xl/semibold",
                                        children: "Redirect To Standalone",
                                    }),
                                    (0, s.jsx)(tB.nB, {}),
                                    (0, s.jsxs)(ea.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, s.jsx)(t5.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                            (0, s.jsx)(en.l, {
                                                label: "Flow Type",
                                                value: l,
                                                options: ll,
                                                onSelectionChange: a,
                                                selectionMode: "single",
                                                disabled: !e,
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)(f.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: "Some link outs require enabling the flow type to work.",
                                    }),
                                    (0, s.jsx)(ln, { flowType: i }),
                                    (0, s.jsx)(li, { flowType: i }),
                                    (0, s.jsx)(lr, { flowType: i }),
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
                                children: (0, s.jsx)(t9, {}),
                            });
                        },
                        id: "order-sku-test",
                        controls: {},
                    },
                    {
                        name: "Stripe Components",
                        id: "stripe-components",
                        component: function () {
                            return (0, s.jsx)(C.M, {
                                stepConfigs: [],
                                skuIDs: [],
                                activeSubscription: null,
                                children: (0, s.jsxs)(tB.wn, {
                                    children: [
                                        (0, s.jsx)(ec.D, {
                                            variant: "heading-xl/semibold",
                                            children: "Stripe Express Checkout Buttons",
                                        }),
                                        (0, s.jsx)(tB.Hq, {
                                            label: ld.DEFAULT,
                                            children: (0, s.jsx)("div", {
                                                children: (0, s.jsx)(tB.a8, {
                                                    errorLabel: ld.DEFAULT,
                                                    children: (0, s.jsx)(lo.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: {},
                                                    }),
                                                }),
                                            }),
                                        }),
                                        ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                            let t = ld[e];
                                            return (0, s.jsx)(
                                                tB.Hq,
                                                {
                                                    label: t,
                                                    children: (0, s.jsxs)("div", {
                                                        children: [
                                                            (0, s.jsx)(f.E, {
                                                                variant: "text-md/normal",
                                                                className: t3.cW,
                                                                children: "expressCheckoutElement.options:",
                                                            }),
                                                            (0, s.jsx)(f.E, {
                                                                variant: "text-md/normal",
                                                                children: (0, s.jsx)(lu.A, {
                                                                    className: t3.wD,
                                                                    children: `\`\`${lb(lc[e])} \`\``,
                                                                }),
                                                            }),
                                                            (0, s.jsx)(tB.a8, {
                                                                errorLabel: t,
                                                                children: (0, s.jsx)(lo.ExpressCheckoutElement, {
                                                                    onConfirm: (e) => {
                                                                        console.log(
                                                                            "ExpressCheckoutElement onConfirm event: ",
                                                                            e,
                                                                        );
                                                                    },
                                                                    options: lc[e],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e,
                                            );
                                        }),
                                        (0, s.jsx)(tB.Hq, { label: ld.CONFIGURABLE, children: (0, s.jsx)(lh, {}) }),
                                    ],
                                }),
                            });
                        },
                    },
                ],
            },
        ],
        tags: ai,
        IconComponent: n.d,
    },
    ao = {
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
            { title: "Orb Checkout", stories: [tK] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, tq.A)();
                            return (0, s.jsxs)("div", {
                                className: U.YG,
                                children: [
                                    (0, s.jsx)(f.E, {
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
        tags: ai,
        IconComponent: i.C,
    },
    as = {
        id: "nitro",
        name: "Nitro",
        groups: [
            tT,
            { title: "Marketing Home", stories: [tN] },
            tw,
            {
                title: "Nitro Upsells",
                stories: [
                    {
                        name: "Burst Reactions Upsell",
                        component: function () {
                            let e = u.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.resolve().then(l.bind(l, 32605));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await l.e("422540").then(l.bind(l, 530951));
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("641704"),
                                    ]).then(l.bind(l, 562011));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("235257"), l.e("66920")]).then(
                                        l.bind(l, 220763),
                                    );
                                    return (t) => (0, s.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                    (0, ed.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([l.e("235257"), l.e("276725")]).then(
                                            l.bind(l, 798612),
                                        );
                                        return (l) => (0, s.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, s.jsx)(tB.LB, {
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
                            let [e, t] = u.useState(eR.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = u.useCallback(() => {
                                    let { title: t, body: a } = t$[e];
                                    (0, ed.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([l.e("93513"), l.e("764864")]).then(
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
                            return (0, s.jsxs)(tB.LB, {
                                children: [
                                    (0, s.jsx)(tB.MG, {
                                        children: (0, s.jsx)(en.l, {
                                            label: "Upsell Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tH,
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
                                    (0, ed.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            l.e("935205"),
                                            l.e("677668"),
                                            l.e("766901"),
                                            l.e("256430"),
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
                            return (0, s.jsxs)(tB.LB, {
                                children: [
                                    (0, s.jsx)(tB.MG, {
                                        children: (0, s.jsx)(en.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tW,
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
                            let [e, t] = u.useState(tG.HL.AVATAR),
                                a = (0, ee.bG)([e6.default], () => e6.default.getCurrentUser()),
                                n = u.useCallback(() => {
                                    null != a &&
                                        (0, ed.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("93513"), l.e("779149")]).then(
                                                l.bind(l, 688796),
                                            );
                                            return (l) => (0, s.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, s.jsxs)(tB.LB, {
                                children: [
                                    (0, s.jsx)(tB.MG, {
                                        children: (0, s.jsx)(en.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tF,
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
                            let e = (0, ee.bG)([e6.default], () => e6.default.getCurrentUser()),
                                t = u.useCallback(() => {
                                    null != e &&
                                        (0, ed.openModalLazy)(async () => {
                                            let { default: e } = await l.e("435476").then(l.bind(l, 835071));
                                            return (t) => (0, s.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("840716"),
                                    ]).then(l.bind(l, 629959));
                                    return (t) => (0, s.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("661129"),
                                    ]).then(l.bind(l, 475312));
                                    return (t) => (0, s.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await l.e("493475").then(l.bind(l, 366638));
                                    return (t) => (0, s.jsx)(e, { handleLearnMore: () => {}, ...t });
                                });
                            }, []);
                            return (0, s.jsx)(tB.LB, {
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
                                (0, ed.openModalLazy)(async () => {
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
                            return (0, s.jsx)(tB.LB, {
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
            { title: "Clips", stories: [e9] },
        ],
        tags: ai,
        IconComponent: r.t,
    },
    au = {
        id: "identity",
        name: "Identity",
        groups: [
            ta,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, ee.bG)([e6.default], () => e6.default.getCurrentUser());
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
                                          (0, s.jsx)(tn.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: ts,
                                          }),
                                          (0, s.jsx)(ti.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-button",
                    },
                    {
                        name: "Avatar Decoration Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, ee.bG)([e6.default], () => e6.default.getCurrentUser());
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
                                          (0, s.jsx)(tn.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: ts,
                                          }),
                                          (0, s.jsx)(tr.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-decoration-button",
                    },
                    {
                        name: "Nameplate Button",
                        component: function (e) {
                            let [t, l] = u.useState(""),
                                a = (0, ee.bG)([e6.default], () => e6.default.getCurrentUser());
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
                                          (0, s.jsx)(tn.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: ts,
                                          }),
                                          (0, s.jsx)(to.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
            { title: "Profile Banner", stories: [X] },
            lH,
            {
                title: "User Profile Embeds",
                stories: [
                    {
                        name: "User Profile",
                        component: function () {
                            let e,
                                t,
                                l,
                                a =
                                    ((e = (0, ee.yK)([e3.A], () => e3.A.getFriendIDs())),
                                    (t = (0, ee.bG)([e6.default], () => e6.default.getCurrentUser())),
                                    u.useMemo(() => {
                                        let l = e
                                            .map((e) => {
                                                let t = e6.default.getUser(e);
                                                return null == t ? null : { id: e, label: l5.Ay.getName(t), value: e };
                                            })
                                            .filter((e) => null != e)
                                            .sort((e, t) => e.label.localeCompare(t.label));
                                        return null == t
                                            ? l
                                            : [
                                                  { id: t.id, label: `${l5.Ay.getName(t)} (You)`, value: t.id },
                                                  ...l.filter((e) => e.value !== t.id),
                                              ];
                                    }, [e, t])),
                                n =
                                    ((l = (0, ee.yK)([l9.Ay], () => l9.Ay.getFlattenedGuildIds())),
                                    u.useMemo(
                                        () =>
                                            l.reduce((e, t) => {
                                                let l = e_.A.getGuild(t);
                                                return null != l && e.push({ id: l.id, label: l.name, value: l.id }), e;
                                            }, []),
                                        [l],
                                    )),
                                [i, r] = u.useState(),
                                [o, d] = u.useState(aa),
                                c = i ?? a[0]?.value,
                                p = u.useMemo(
                                    () => [
                                        { id: "dm", label: "DM", value: "dm" },
                                        { id: aa, label: "Default (main profile)", value: aa },
                                        ...n,
                                    ],
                                    [n],
                                ),
                                m = (0, ee.bG)(
                                    [l7.A],
                                    () =>
                                        null == c
                                            ? void 0
                                            : (l7.A.getDMFromUserId(c) ?? l7.A.getSortedPrivateChannels()[0]?.id),
                                    [c],
                                ),
                                b = o === aa || "dm" === o ? void 0 : o,
                                h = "dm" === o ? m : void 0;
                            return (0, s.jsxs)(ea.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, s.jsxs)(ea.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        children: [
                                            (0, s.jsx)(at, { label: "User", options: a, value: c, onChange: r }),
                                            (0, s.jsx)(at, { label: "Context", options: p, value: o, onChange: d }),
                                        ],
                                    }),
                                    (0, s.jsx)(al, {
                                        children:
                                            null != c && (0, s.jsx)(l8.G, { userId: c, guildId: b, channelId: h }),
                                    }),
                                ],
                            });
                        },
                        id: "user-profile-embed",
                    },
                ],
            },
        ],
        tags: ai,
        IconComponent: o.UserIcon,
    },
    ad = { playgroundBaseUrl: "revenue", collections: [ar, ao, as, au] };
