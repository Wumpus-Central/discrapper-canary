l.r(t),
    l.d(t, {
        nitroCollection: () => aW,
        virtualCurrencyCollection: () => a$,
        playgroundConfig: () => az,
        identityCollection: () => aF,
        RevenuePlaygroundCollectionId: () => aB,
        paymentsCollection: () => aH,
    });
var a,
    n,
    i = l(700623),
    r = l(318254),
    o = l(403581),
    s = l(950305),
    u = l(477900),
    c = l(582128),
    d = l(132500),
    p = l(793574),
    m = l(688810),
    b = l(166532),
    h = l(735305),
    x = l(635358),
    f = l(702841),
    y = l(834730),
    g = l(28863),
    v = l(231723),
    E = l(228366),
    S = l(830382),
    C = l(73825),
    j = l(626797),
    T = l(951305),
    A = l(491057),
    I = l(424171),
    P = l(97352),
    _ = l(67480),
    k = l(26279);
let R = (e) => {
    let { skuId: t, isGift: l, applicationId: a } = e,
        { analyticsLocations: n } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
        i = c.useRef(null),
        r = c.useRef(null),
        [o, s] = c.useState(() => (0, d.A)());
    c.useEffect(() => {
        (i.current !== t || r.current !== l) && (s((0, d.A)()), (i.current = t), (r.current = l));
    }, [t, l]);
    let [u, b] = (0, f.yK)([_.A], () => [_.A.isFetching(t), _.A.get(t)]);
    return (
        c.useEffect(() => {
            null != b || u || (0, S.EX)(a, t, x.g.VARIANTS_GROUP).catch((e) => {});
        }, [a, t, b, u]),
        {
            loadId: o,
            analyticsLocations: n,
            handleClose: c.useCallback((e) => {}, []),
            handleComplete: c.useCallback(() => {}, []),
            isFetching: u,
            sku: b,
            skuId: t,
            isGift: l,
        }
    );
};
function N(e) {
    return (0, u.jsxs)("div", {
        style: { padding: 20 },
        children: [
            (0, u.jsx)(y.E, { variant: "text-md/normal", children: e.text }),
            (0, u.jsx)("div", {
                style: { marginTop: 16 },
                children: (0, u.jsx)(g.Anchor, {
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
            purchaseType: s,
            stepConfigs: c,
            loadId: d,
            excludeSubscriptionPlansBySKU: p,
            renderHeader: m,
            disablePurchases: b,
        } = e,
        h = `${a}-${n}-${d}`;
    return (0, u.jsx)(
        j.M,
        {
            stepConfigs: c,
            applicationId: l,
            skuIDs: null != a ? [a] : [],
            isGift: n,
            activeSubscription: null,
            purchaseType: s,
            excludeSubscriptionPlansBySKU: p,
            overrideCustomCheckoutFlow: b ? k.uH.DEV_STORYBOOK_CHECKOUT : void 0,
            children: (0, u.jsx)(A.Qt, {
                children: (0, u.jsx)(T.dX, {
                    isGift: n,
                    children: (0, u.jsx)(
                        I.q,
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
var D = l(652215);
let O = [
    {
        key: b.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, u.jsx)(h.x, { ...e, breadcrumbSteps: [b.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
        options: { renderHeader: !0 },
    },
    {
        key: b.pn.REVIEW,
        renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: b.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
        options: {},
    },
];
var L = l(162097),
    V = l(70926),
    w = l(240248),
    U = l(375708),
    B = l(161528);
let G = {
    name: "Balance Widget Menu",
    id: "balance-widget-menu",
    component: function (e) {
        let { ctaText: t, linkText: l, showNotificationBadge: a, cardAlignment: n } = e;
        return (0, u.jsx)("div", {
            className: B.tH,
            children: (0, u.jsx)(V.SS, {
                className: B.oz,
                ctaText: (0, w.uJ)(t) ? U.intl.string(U.t["J+vlIR"]) : t,
                ctaOnClick: D.tEg,
                showNotificationBadge: a,
                cardAlignment: n,
                linkText: (0, w.uJ)(l) ? U.intl.string(U.t.XRdyjz) : l,
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
var H = l(821609),
    $ = l(65738);
let W = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: $.k7.DEFAULT },
                { label: "Selected", value: $.k7.SELECTED },
            ],
            defaultValue: $.k7.DEFAULT,
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
                [n, i] = (0, c.useState)(a.balance);
            return (
                (0, c.useEffect)(() => {
                    null == n && null != a.balance && i(a.balance);
                }, [a.balance, n]),
                (0, u.jsxs)("div", {
                    className: B.YG,
                    children: [
                        (0, u.jsx)($.Gy, { ...a, balance: t ? null : n, className: l ? B.jG : void 0 }),
                        (0, u.jsx)(H.$, { onClick: () => i(a.balance), text: "Update Balance" }),
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
                [n, i] = (0, c.useState)(a.balance);
            return (
                (0, c.useEffect)(() => {
                    i(a.balance);
                }, [a.balance]),
                (0, u.jsxs)("div", {
                    className: B.YG,
                    children: [
                        (0, u.jsx)($.Gy, { ...a, balance: n, className: l ? B.jG : void 0 }),
                        (0, u.jsx)(H.$, {
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
var Y = l(97808),
    K = l(778712),
    q = l(714719),
    X = l(859161),
    J = l(842291);
let Z = {
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
                showAvatar: s,
            } = e,
            c = (0, X.A)(r);
        return (0, u.jsxs)("div", {
            className: J.GI,
            children: [
                (0, u.jsx)(q.A, {
                    className: J.k5,
                    bannerSrc: "" === t ? null : t,
                    backgroundColor: l,
                    showGifTag: o,
                    width: a,
                    height: n,
                    cutout:
                        "center" === i
                            ? { align: "center", insetBottom: 0, radius: c }
                            : { align: "start", insetStart: 16, insetBottom: 0, radius: c },
                }),
                s &&
                    (0, u.jsx)("div", {
                        className: J.oz,
                        style: { top: n, left: "center" === i ? a / 2 : 16 + c },
                        children: (0, u.jsx)(Y.Js, {
                            src: null,
                            size: r,
                            status: D.clD.ONLINE,
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
            defaultValue: K._3.SIZE_96,
            options: [
                { label: "80", value: K._3.SIZE_80 },
                { label: "96", value: K._3.SIZE_96 },
                { label: "120", value: K._3.SIZE_120 },
            ],
        },
        backgroundColor: { label: "Background color", type: "color", defaultValue: "#5865f2" },
        bannerSrc: { label: "Banner image URL", type: "text", defaultValue: "" },
        showGifTag: { label: "Show GIF tag", type: "boolean", defaultValue: !1 },
        showAvatar: { label: "Overlay avatar", type: "boolean", defaultValue: !0 },
    },
};
var Q = l(488428),
    ee = l(20742),
    et = l(17928),
    el = l(862482),
    ea = l(364522),
    en = l(331322),
    ei = l(691885),
    er = l(404778),
    eo = l(95477),
    es = l(866665),
    eu = l(270003),
    ec = l(289873),
    ed = l(192308),
    ep = l(297264),
    em = l(277984),
    eb = l(529427),
    eh = l(669874),
    ex = l(883645),
    ef = l(541689),
    ey = l(944304),
    eg = l(300233),
    ev = l(599941),
    eE = l(162093),
    eS = l(4630),
    eC = l(482132),
    ej = l(532794),
    eT = l(216678),
    eA = l(194509),
    eI = l(511484),
    eP = l(794400),
    e_ = l(761705),
    ek = l(71393),
    eR = l(166403),
    eN = l(202541),
    eM = l(127898);
function eD(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, ev.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, u.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, u.jsx)(eE.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let eO = "checkout-error-boundary-test-modal";
function eL() {
    let { setStep: e } = (0, ex.Ay)();
    return (0, u.jsx)(eC.dZ, {
        children: (0, u.jsxs)(en.B, {
            direction: "vertical",
            gap: 8,
            fullWidth: !1,
            children: [
                (0, u.jsx)(y.E, {
                    variant: "text-sm/normal",
                    children:
                        "PaymentModal Step within CheckoutRootProvider loaded. Click below to navigate to a mock error step that will throw \u2014 the CheckoutErrorBoundary baked into CheckoutRootProvider will catch it.",
                }),
                (0, u.jsx)(H.$, { variant: "primary", text: "Navigate to Error Step", onClick: () => e(b.pn.REVIEW) }),
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
            throw new eh.v({
                message: "Simulated CheckoutError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "revenue-error":
            throw new eP.v({
                message: "Simulated RevenueError thrown inside a payment step",
                errorHandlingBehavior: l,
                extraSentryInformation: { simulatedFrom: "revenue playground" },
            });
        case "translation-key-error":
            return (0, u.jsx)("div", {
                children: U.intl.format(eM.default.cRB332, {
                    avatar: (0, u.jsx)("div", { children: "Sample Avatar" }),
                    nickname: (0, u.jsx)("div", { children: "Sample Nickname" }),
                    username: (0, u.jsx)("div", { children: "Sample Username" }),
                }),
            });
        default:
            return (0, u.jsx)("div", { children: "Unknown error type" });
    }
}
let ew = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: function () {
                let [e, t] = c.useState(eN.pe.TIER_2),
                    [l, a] = c.useState(null),
                    n = (0, et.yK)([ek.A], () => ek.A.getGuildsArray()),
                    [i] = (0, et.yK)([eR.A], () => [eR.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, s] = c.useState(r.length > 0 ? r[0].value : null),
                    [b, h] = c.useState(""),
                    [x, f] = c.useState({ plan_id: eN.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    v = "true" !== x.gift && null != i,
                    [E, S] = c.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: j } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
                    [T, A] = c.useState(""),
                    [I, P] = c.useState(D.dJq),
                    { balance: _, isFetching: k, error: R } = (0, e_.W)(),
                    { isSubmitting: N, responseMessage: M, redeemVirtualCurrency: O } = (0, e_.Q)(),
                    [L, V] = c.useState(D.dJq),
                    [w, U] = c.useState(""),
                    [G, W] = c.useState(D.dJq);
                return (0, u.jsx)(m.f5, {
                    value: j,
                    children: (0, u.jsx)(ea.Ip, {
                        className: B.XG,
                        children: (0, u.jsxs)(en.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, u.jsxs)(en.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, u.jsx)(ei.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: eN.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eN.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eN.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, u.jsx)(eA.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: el.XD.PRIMARY,
                                            look: el.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(en.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, u.jsx)(ei.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: eN.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: eN.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: eN.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => a(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, u.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, ej.A)({ subscriptionTier: l, analyticsLocations: j }),
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(en.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, u.jsx)(ei.l, {
                                            label: "Boost",
                                            value: o,
                                            options: r,
                                            onSelectionChange: s,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != o
                                            ? (0, u.jsx)(ey.A, { guild: o, analyticsLocation: {} })
                                            : (0, u.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(en.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, u.jsx)(g.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, u.jsxs)(en.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, u.jsx)(eo.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: b,
                                                    onChange: (e) => h(e),
                                                }),
                                                (0, u.jsx)(es.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: b.length < 1,
                                                    children: (0, u.jsx)(H.$, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: b.length < 1,
                                                        onClick: () => {
                                                            window.open(D.BVt.BILLING_PROMOTION_REDEMPTION(b));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(eu.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, u.jsx)(ei.l, {
                                            label: "Plan",
                                            value: x.plan_id,
                                            options: [
                                                { id: "tier_2", value: eN.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: eN.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: eN.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                f((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, u.jsx)(ei.l, {
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
                                (0, u.jsx)(es.m, {
                                    text: "Already subscribed",
                                    shouldShow: v,
                                    children: (0, u.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: v,
                                        onClick: () => {
                                            window.open(D.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + Q.stringify({ ...x }));
                                        },
                                    }),
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(eu.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, u.jsxs)(en.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, u.jsx)(y.E, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                k
                                                    ? (0, u.jsx)("div", {
                                                          className: B.wG,
                                                          children: (0, u.jsx)(ec.y, { type: ec.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, u.jsxs)("div", {
                                                          className: B.dB,
                                                          children: [
                                                              null !== R &&
                                                                  (0, u.jsxs)(y.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          R.message,
                                                                      ],
                                                                  }),
                                                              (0, u.jsx)($.Gy, {
                                                                  balance: _ ?? 0,
                                                                  balanceWidgetMode: $.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, u.jsx)(eo.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: L,
                                            onChange: (e) => V(e),
                                        }),
                                        (0, u.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: N,
                                            onClick: () => O(L, (0, d.A)()),
                                        }),
                                        null != M && (0, u.jsx)(y.E, { variant: "text-sm/normal", children: M }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(eu.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, u.jsx)(ei.l, {
                                            label: "Premium Server Subscription For",
                                            value: E,
                                            options: r,
                                            onSelectionChange: S,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, u.jsx)(y.E, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, u.jsx)(eg.H, {
                                            guildId: E?.id,
                                            children: (0, u.jsx)(eD, { selectedGuildForGuildSub: E }),
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(en.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, u.jsxs)(eu.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, u.jsx)(eo.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: T,
                                                    onChange: A,
                                                }),
                                                (0, u.jsx)(eo.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: I,
                                                    onChange: (e) => P(e),
                                                }),
                                            ],
                                        }),
                                        (0, u.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, eS.openIAPPurchaseModal)({
                                                    applicationId: T,
                                                    skuId: I,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: D.liQ.IN_APP },
                                                    context: D.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsx)(en.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, u.jsx)(eu.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, u.jsxs)(en.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, u.jsx)(eo.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: w,
                                                    onChange: U,
                                                }),
                                                (0, u.jsx)(eo.k, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: G,
                                                    onChange: (e) => W(e),
                                                }),
                                                (0, u.jsx)(H.$, {
                                                    variant: "primary",
                                                    text: "Open Premium Apps Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, eT.q)({
                                                            applicationId: w,
                                                            skuId: G,
                                                            analyticsLocations: j,
                                                            checkoutFlow: eb.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsx)(eu.n, {
                                    label: "Helpers",
                                    children: (0, u.jsxs)(en.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, u.jsx)(H.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, C.YG)(),
                                            }),
                                            (0, u.jsx)(H.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, em.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsx)(eu.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, u.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, ef.Ab)(),
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
                    { analyticsLocations: a } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, u.jsxs)(m.f5, {
                    value: a,
                    children: [
                        (0, u.jsxs)(en.B, {
                            direction: "vertical",
                            gap: 8,
                            children: [
                                (0, u.jsx)(ep.D, {
                                    variant: "heading-lg/semibold",
                                    children: "Checkout Error Boundary",
                                }),
                                (0, u.jsxs)(y.E, {
                                    variant: "text-md/normal",
                                    children: [
                                        "Opens a ",
                                        "<PaymentModal>",
                                        " with a step that throws to verify ",
                                        "<CheckoutErrorBoundary>",
                                        " catches it and logs to Sentry with checkout context. For a plain Error, the Variant control (close-and-alert vs. rethrow) drives the boundary. For a CheckoutError/RevenueError, the error carries its own behavior \u2014 so Variant is baked into the thrown error and the boundary honors it over its prop.",
                                    ],
                                }),
                                (0, u.jsx)(H.$, {
                                    variant: "primary",
                                    text: "Open Error Boundary Test Modal",
                                    onClick: () =>
                                        (function (e, t) {
                                            let { errorHandlingBehavior: l, errorType: a } = t,
                                                n = [
                                                    {
                                                        key: b.pn.PLAN_SELECT,
                                                        renderStep: () => (0, u.jsx)(eL, {}),
                                                        renderHeader: () =>
                                                            (0, u.jsx)(ee.rQ, {
                                                                title: "Checkout Error Boundary Test",
                                                            }),
                                                    },
                                                    {
                                                        key: b.pn.REVIEW,
                                                        renderStep: () =>
                                                            (0, u.jsx)(eC.dZ, {
                                                                children: (0, u.jsx)(eV, {
                                                                    errorType: a,
                                                                    errorHandlingBehavior: l,
                                                                }),
                                                            }),
                                                    },
                                                ];
                                            function i() {
                                                return (0, ed.closeModal)(eO);
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
                                                        return (0, u.jsx)(j.M, {
                                                            activeSubscription: null,
                                                            stepConfigs: n,
                                                            skuIDs: [],
                                                            errorHandlingBehavior: l,
                                                            onErrorReported: t,
                                                            children: (0, u.jsx)(T.dX, {
                                                                isGift: !1,
                                                                children: (0, u.jsx)(I.q, {
                                                                    transitionState: r,
                                                                    onClose: i,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    });
                                                },
                                                { onCloseRequest: i, onCloseCallback: i, modalKey: eO },
                                            );
                                        })(a, { errorHandlingBehavior: t, errorType: l }),
                                }),
                            ],
                        }),
                        (0, u.jsxs)(en.B, {
                            direction: "vertical",
                            gap: 8,
                            padding: { top: 16 },
                            children: [
                                (0, u.jsx)(ep.D, { variant: "heading-lg/semibold", children: "Other Checkout Errors" }),
                                (0, u.jsx)(y.E, {
                                    variant: "text-md/normal",
                                    children: "Simulate known checkout error from discountOfferHasTierError():",
                                }),
                                (0, u.jsx)(H.$, {
                                    variant: "critical-primary",
                                    text: "Simulate Error",
                                    onClick: () =>
                                        void (console.log("Simulating error in discountOfferHasTier()"),
                                        (0, eI.U9)({ discount: null }, eN.pe.TIER_2)),
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
var eU = l(773882),
    eB = l(809029),
    eG = l(158045),
    eH = l(492518),
    e$ = l(758836);
function eW() {
    return {
        options: [
            { value: e$.ck["0"], label: `${e$.ck["0"]} (Cat Ears)` },
            { value: e$.ck["1"], label: `${e$.ck["1"]} (Angry)` },
            { value: e$.ck["2"], label: `${e$.ck["2"]} (Aurora Bundle)` },
            { value: e$.ck["3"], label: `${e$.ck["3"]} (Heartbloom)` },
            { value: e$.ck["4"], label: `${e$.ck["4"]} (Aurora Dreams)` },
            { value: e$.ck["5"], label: `${e$.ck["5"]} (Sakura Ink)` },
            { value: e$.ck["6"], label: `${e$.ck["6"]} (Of Ink and Steel)` },
            { value: e$.ck["7"], label: `${e$.ck["7"]} (Twilight)` },
            { value: e$.ck["8"], label: `${e$.ck["8"]} (Red Dragon)` },
            { value: e$.ck["9"], label: `${e$.ck["9"]} (Aurora)` },
        ],
        defaultValue: e$.ck["0"],
    };
}
let eF = [
        {
            key: b.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: b.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => U.intl.string(U.t.QBnNHq) },
        },
        {
            key: b.pn.CONFIRM,
            renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: b.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => U.intl.string(U.t.QBnNHq) },
        },
        {
            key: b.pn.PLAN_SELECT,
            renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: b.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => U.intl.string(U.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    ez = [{ key: b.pn.REVIEW, renderStep: (e) => (0, u.jsx)(eU.p, { ...e }) }, ...eF],
    eY = [{ key: b.pn.REVIEW, renderStep: (e) => (0, u.jsx)(eB.E, { ...e }) }, ...eF];
function eK() {
    return (0, u.jsx)(y.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" });
}
let eq = { isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 } },
    eX = eW(),
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
                    sku: s,
                } = R({ skuId: t, isGift: l, applicationId: D.FYj }),
                c = eG.Ay.isPremiumSku(t);
            return o || null == s || c
                ? (0, u.jsx)(eH.k, {})
                : (0, u.jsxs)("div", {
                      className: B.Cd,
                      children: [
                          (0, u.jsx)(M, {
                              stepConfigs: ez,
                              analyticsLocations: a,
                              applicationId: D.FYj,
                              initialPlanId: void 0,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: D.VVm.ONE_TIME,
                              disablePurchases: !0,
                              excludeSubscriptionPlansBySKU: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, u.jsx)(eK, {}),
                      ],
                  });
        },
        controls: {
            skuId: { label: "SKU ID", type: "select", options: eX.options, defaultValue: eX.defaultValue },
            ...eq,
        },
    },
    eZ = {
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
                    sku: s,
                } = R({ skuId: t, isGift: l, applicationId: eN.tv }),
                d = eG.Ay.isPremiumSku(t),
                p = d ? eN.zE[t] : void 0,
                [m, b] = c.useState(p),
                h = c.useRef(!1);
            c.useEffect(() => {
                h.current || null == p || ((h.current = !0), b(p));
            }, [p, m]);
            let { isLoadedForPremiumSKUs: x, selectedPlan: y } = (function (e) {
                let { subscriptionPlanId: t } = e;
                c.useEffect(() => {
                    P.A.isLoadedForPremiumSKUs() || E.h.wait(() => (0, C.zS)());
                }, []);
                let l = (0, f.bG)([P.A], () => (null != t ? P.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, f.bG)([P.A], () => P.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: m });
            return !o && null != s && x && d && null != y
                ? (0, u.jsxs)("div", {
                      className: B.Cd,
                      children: [
                          (0, u.jsx)(M, {
                              stepConfigs: eY,
                              analyticsLocations: a,
                              applicationId: eN.tv,
                              initialPlanId: p,
                              skuId: t,
                              isGift: l,
                              loadId: n,
                              purchaseType: D.VVm.SUBSCRIPTION,
                              disablePurchases: !0,
                              onClose: i,
                              onComplete: r,
                          }),
                          (0, u.jsx)(eK, {}),
                      ],
                  })
                : (0, u.jsx)(eH.k, {});
        },
        controls: {
            skuId: {
                label: "SKU ID",
                type: "select",
                options: [
                    { value: eN.pe.TIER_0, label: `${eN.pe.TIER_0} (Nitro Basic)` },
                    { value: eN.pe.TIER_2, label: `${eN.pe.TIER_2} (Nitro Standard)` },
                ],
                defaultValue: eN.pe.TIER_0,
            },
            ...eq,
        },
    };
var eQ = l(993077),
    e0 = l(939249),
    e1 = l(658675),
    e2 = l(478531),
    e3 = l(664111),
    e6 = l(994500),
    e4 = l(287809),
    e7 = l(403362),
    e8 = l(784018),
    e9 = l(668025);
let e5 = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, et.yK)([e6.A, e4.default], () =>
                e6.A.getFriendIDs()
                    .map((e) => e4.default.getUser(e))
                    .filter(e7.Vq),
            ),
            [r, o] = c.useState(new Set()),
            s = c.useCallback((e, t) => {
                o((l) => {
                    let a = new Set(l);
                    return t ? a.add(e) : a.delete(e), a;
                });
            }, []),
            d = c.useMemo(() => Array.from(r), [r]),
            p = c.useCallback(() => (0, u.jsx)(e2.A, { title: a, participantIds: d }), [a, d]),
            m = "landscape" === l ? 640 : 360;
        return (0, u.jsxs)("div", {
            className: e9.iE,
            children: [
                (0, u.jsx)("div", {
                    className: e9.j,
                    style: { width: m, height: "landscape" === l ? 360 : 640 },
                    children: (0, u.jsx)(e3.default, {
                        src: t,
                        initialActive: !1,
                        autoplay: n,
                        orientation: l,
                        renderOverlay: p,
                        parentTransitionState: v.ip.ENTERED,
                    }),
                }),
                (0, u.jsxs)(eQ.Z, {
                    className: e9.nd,
                    type: eQ.s.PRIMARY,
                    style: { width: m },
                    children: [
                        (0, u.jsxs)("div", {
                            className: e9.Iv,
                            children: [
                                (0, u.jsx)(y.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    children: "Participants",
                                }),
                                (0, u.jsxs)(y.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [r.size, " selected"],
                                }),
                            ],
                        }),
                        (0, u.jsx)(er.c, {}),
                        0 === i.length
                            ? (0, u.jsx)("div", {
                                  className: e9.p$,
                                  children: (0, u.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: "No friends found in local store.",
                                  }),
                              })
                            : (0, u.jsx)("div", {
                                  className: e9.p_,
                                  onScroll: (e) => e.stopPropagation(),
                                  children: i.map((e) => {
                                      let t = r.has(e.id);
                                      return (0, u.jsxs)(
                                          e0.D,
                                          {
                                              className: e9.nM,
                                              role: "checkbox",
                                              "aria-checked": t,
                                              onClick: () => s(e.id, !t),
                                              children: [
                                                  (0, u.jsx)(e1.P, { checked: t }),
                                                  (0, u.jsx)(Y.eu, {
                                                      src: e.getAvatarURL(void 0, 24),
                                                      size: K._3.SIZE_24,
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, u.jsx)(y.E, {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: e8.kz },
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
var te = l(930349);
function tt() {
    return (0, u.jsx)("div", { style: { width: "100%", height: "100%", borderRadius: "8px", background: "red" } });
}
function tl() {
    return (0, u.jsx)("div", { style: { width: "60%", height: "60%", borderRadius: "50%", background: "red" } });
}
let ta = {
        label: "Variant",
        type: "select",
        defaultValue: "square",
        options: [
            { label: "Square", value: "square" },
            { label: "Bar", value: "bar" },
        ],
    },
    tn = {
        title: "Editable Tile Button",
        stories: [
            {
                name: "Add Button",
                component: function (e) {
                    let { variant: t, accessibleLabel: l, accessibleValue: a } = e;
                    return (0, u.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, u.jsx)(te.A, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: a,
                                renderPreview: () => (0, u.jsx)(tt, {}),
                            }),
                            (0, u.jsx)(te.A, {
                                affordance: "add",
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: l,
                                accessibleValue: a,
                                renderPreview: () => (0, u.jsx)(tl, {}),
                            }),
                        ],
                    });
                },
                id: "add-tile-button",
                controls: {
                    variant: ta,
                    accessibleLabel: { label: "Accessible Label", type: "text", defaultValue: "Avatar image" },
                    accessibleValue: { label: "Accessible Value", type: "text", defaultValue: "me.png" },
                },
            },
            {
                name: "Edit Button",
                component: function (e) {
                    let { variant: t, showOverlayOnHover: l, accessibleLabel: a, accessibleValue: n } = e;
                    return (0, u.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, u.jsx)(te.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, u.jsx)(tt, {}),
                            }),
                            (0, u.jsx)(te.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                renderPreview: () => (0, u.jsx)(tl, {}),
                            }),
                        ],
                    });
                },
                id: "edit-tile-button",
                controls: {
                    variant: ta,
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
                    return (0, u.jsxs)("div", {
                        style: { display: "flex", gap: "16px", alignItems: "center" },
                        children: [
                            (0, u.jsx)(te.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, u.jsx)(tt, {}),
                            }),
                            (0, u.jsx)(te.A, {
                                variant: t,
                                onClick: () => {},
                                accessibleLabel: a,
                                accessibleValue: n,
                                showOverlayOnHover: l,
                                affordance: o,
                                renderPreview: () => (0, u.jsx)(tl, {}),
                            }),
                        ],
                    });
                },
                id: "deletable-edit-tile-button",
                controls: {
                    variant: ta,
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
var ti = l(687021),
    tr = l(487233),
    to = l(120386),
    ts = l(374654);
let tu = { value: "", label: "No Guild (main profile)" };
var tc = l(99696),
    td = l(599147),
    tp = l(808411),
    tm = l(461536),
    tb = l(425713),
    th = l(277135);
let tx = {
    bronze: eN.Ac.PREMIUM_TENURE_1_MONTH,
    silver: eN.Ac.PREMIUM_TENURE_3_MONTH,
    gold: eN.Ac.PREMIUM_TENURE_6_MONTH,
    platinum: eN.Ac.PREMIUM_TENURE_12_MONTH,
    diamond: eN.Ac.PREMIUM_TENURE_24_MONTH,
    emerald: eN.Ac.PREMIUM_TENURE_36_MONTH,
    ruby: eN.Ac.PREMIUM_TENURE_60_MONTH,
    opal: eN.Ac.PREMIUM_TENURE_72_MONTH,
};
var tf = l(661531),
    ty = l(116833),
    tg = l(720879);
let tv = {
    bronze: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
    },
    silver: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
    },
    gold: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
    },
    platinum: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
    },
    diamond: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
    },
    emerald: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
    },
    ruby: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
    },
    opal: {
        type: "custom",
        start: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
        end: tf.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
    },
};
var tE = l(624716),
    tS = l(872725);
let tC = { name: "Expressive Progress", component: tp.A, id: "expressive-progress", controls: {} },
    tj = { name: "Tab Tooltip", component: tE.A, id: "tab-tooltip", controls: {} },
    tT = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, u.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, u.jsx)(
                            tS.A,
                            {
                                fit: e.fit,
                                glowAmount: e.glowAmount,
                                blurAmount: e.blurAmount,
                                hueRotate: e.hueRotate,
                                cardType: eQ.s.PRIMARY,
                                glowing: !0,
                                children: (0, u.jsxs)("div", {
                                    style: { padding: 16, display: "flex", flexDirection: "column", gap: 8 },
                                    children: [
                                        (0, u.jsx)(ep.D, { variant: "heading-lg/semibold", children: "Card Title" }),
                                        (0, u.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "This is sample card content using design system tokens.",
                                        }),
                                        (0, u.jsx)(y.E, {
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
                    return (0, u.jsx)(td.o, {});
                },
                id: "cancellation-flow",
                controls: {},
            },
            tC,
            {
                name: "Mini Premium Tooltip",
                component: function (e) {
                    let { badgeId: t, earnedOnText: l, variant: a } = e,
                        n = c.useRef(null),
                        i = c.useRef(null),
                        r = tx[t],
                        o = (0, tb.I)(r).standard,
                        s = eN.VD[r].rarity,
                        d = (
                            U.intl.string(U.t.lG6a5x) +
                            " " +
                            U.intl.string(eN.VD[r].nameUnformatted)
                        ).toLocaleUpperCase();
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(y.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children:
                                    'Hover or focus a badge to see the mini tooltip. Renders as `role="tooltip"` \u2014 title and body are announced via `aria-describedby` injected on the trigger by MiniPremiumTooltip.',
                            }),
                            (0, u.jsxs)("div", {
                                className: th.k3,
                                children: [
                                    (0, u.jsx)("span", {
                                        className: th.yU,
                                        children: (0, u.jsx)(tm.K, {
                                            targetElementRef: n,
                                            title: d,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: d,
                                            rarity: s,
                                            variant: a,
                                            children: (0, u.jsx)(g.Anchor, {
                                                href: "#",
                                                ref: n,
                                                "aria-label": U.intl.string(U.t["JEiq/c"]),
                                                children: (0, u.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: th.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, u.jsx)("span", {
                                        className: th.yU,
                                        children: (0, u.jsx)(tm.K, {
                                            targetElementRef: i,
                                            title: d,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: d,
                                            rarity: s,
                                            variant: a,
                                            children: (0, u.jsx)(g.Anchor, {
                                                href: "#",
                                                ref: i,
                                                "aria-label": U.intl.string(U.t["JEiq/c"]),
                                                children: (0, u.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: th.Jv,
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
                            progressCirclePercent: s,
                            progressCircleUrgency: d,
                            delay: p,
                            size: m,
                            gradientColor: b,
                            estimatedTooltipHeight: h,
                        } = e,
                        x = c.useRef(null),
                        f = c.useRef(null),
                        g = c.useMemo(
                            () =>
                                ({
                                    bronze: eN.Ac.PREMIUM_TENURE_1_MONTH,
                                    silver: eN.Ac.PREMIUM_TENURE_3_MONTH,
                                    gold: eN.Ac.PREMIUM_TENURE_6_MONTH,
                                    platinum: eN.Ac.PREMIUM_TENURE_12_MONTH,
                                    diamond: eN.Ac.PREMIUM_TENURE_24_MONTH,
                                    emerald: eN.Ac.PREMIUM_TENURE_36_MONTH,
                                    ruby: eN.Ac.PREMIUM_TENURE_60_MONTH,
                                    opal: eN.Ac.PREMIUM_TENURE_72_MONTH,
                                })[i],
                            [i],
                        ),
                        v = null != g ? (0, tb.I)(g).standard : null,
                        E = c.useMemo(() => {
                            if (null == g) return "";
                            let e = eN.VD[g];
                            return (
                                U.intl.string(U.t.lG6a5x) +
                                " " +
                                U.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [g]),
                        S = c.useMemo(() => {
                            if (!a || null == v) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: s, progressCircleUrgency: d }
                                : {};
                            return {
                                type: "dynamic",
                                component: ty.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: v, alt: E, ...e },
                            };
                        }, [a, v, E, r, o, s, d]),
                        C = {
                            title: t,
                            body: l,
                            graphic: S,
                            actions: c.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: c.useMemo(() => ("string" == typeof b && b in tv ? tv[b] : b), [b]),
                            estimatedTooltipHeight: h,
                        };
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(y.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children: "Hover or focus these buttons.",
                            }),
                            (0, u.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "16px",
                                    width: "100%",
                                    marginTop: "200px",
                                },
                                children: [
                                    (0, u.jsx)(tg.L, {
                                        targetElementRef: x,
                                        ...C,
                                        children: (0, u.jsx)(H.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, u.jsx)(tg.L, {
                                        targetElementRef: f,
                                        ...C,
                                        children: (0, u.jsx)(H.$, { buttonRef: f, variant: "primary", text: "Right" }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                id: "premium-tooltip",
                controls: {
                    title: { label: "Title", type: "text", defaultValue: U.intl.string(U.t.lG6a5x).toUpperCase() },
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
            tj,
        ],
    };
var tA = l(691540),
    tI = l(857250),
    tP = l(97483),
    t_ = l(750338),
    tk = l(387640),
    tR = l(576765),
    tN = l(88433);
let tM = { none: void 0, nitroWheel: o.t },
    tD = {
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
                action2Variant: s,
                icon: c,
                iconPosition: d,
                index: p,
                size: m,
                badgeText: b,
                badgeVariant: h,
                isReducedMotion: x,
                previewImageStyle: f,
            } = e;
            function y() {
                return (0, tA.P0)((0, tI.o)("CTA clicked!", tP.Ck.SUCCESS));
            }
            let g = tM[c],
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
                                        ...(null != g ? { icon: g, iconPosition: d } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: s, onClick: y }] : []),
                                ],
                            }
                          : {};
            return (0, u.jsx)("div", {
                children: (0, u.jsx)(t_.A, {
                    name: tk.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tR.A,
                    videoUrl: tN.A,
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
                defaultValue: tk.A0.LARGE,
                options: [
                    { label: "Small", value: tk.A0.SMALL },
                    { label: "Medium", value: tk.A0.MEDIUM },
                    { label: "Large", value: tk.A0.LARGE },
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
                defaultValue: tk.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: tk.Tb.CONTAINED },
                    { label: "Overlay", value: tk.Tb.OVERLAY },
                ],
            },
        },
    };
var tO = l(398590),
    tL = l(920050),
    tV = l(744064),
    tw = l(976860);
let tU = {
    title: "Perks",
    stories: [
        {
            name: "Perk Card",
            component: function (e) {
                let { ...t } = e;
                return (0, u.jsxs)("div", {
                    style: { maxWidth: "100%", width: t.featured ? 752 : 364 },
                    children: [
                        (0, u.jsx)(tV.S, {
                            ...t,
                            id: "test-id",
                            progress: null != t.progress && t.progress > 0 ? t.progress : void 0,
                            onCtaClick: () => (0, tA.P0)((0, tI.o)("CTA Clicked!", tP.Ck.SUCCESS)),
                        }),
                        (0, u.jsx)(tB, {}),
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
function tB() {
    let [e, t] = (0, c.useState)("customSounds"),
        l = `${D.BVt.NITRO_HOME}?perk=${e}`;
    return (0, u.jsxs)("div", {
        style: { marginTop: 64, display: "flex", flexDirection: "column", gap: 10 },
        children: [
            (0, u.jsx)(eo.k, { label: "Deep Linking", value: e, onChange: (e) => t(e), placeholder: "Perk ID" }),
            (0, u.jsx)(H.$, {
                text: "Test Deep Link",
                variant: "primary",
                size: "sm",
                onClick: () => {
                    (0, tO.jH)(), (0, tw.pX)(D.BVt.ME), setTimeout(() => (0, tw.pX)(l), 200);
                },
            }),
            (0, u.jsxs)(y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                style: { userSelect: "text" },
                children: [
                    "IDs from PerkCardIds.tsx:",
                    (0, u.jsx)("ul", {
                        style: { margin: "4px 0 0", paddingLeft: 24, listStyleType: "disc", columns: 3, columnGap: 24 },
                        children: Object.values(tL).map((e) => (0, u.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var tG = l(349738),
    tH = l(339984);
let t$ = [
        { id: "avatar_decoration", label: "Avatar Decoration", value: eN.e.AVATAR_DECORATION_MODAL_UPSELL },
        { id: "profile_effect", label: "Profile Effect", value: eN.e.PROFILE_EFFECT_MODAL_UPSELL },
        { id: "nameplate", label: "Nameplate", value: eN.e.NAMEPLATE_MODAL_UPSELL },
    ],
    tW = {
        [eN.e.AVATAR_DECORATION_MODAL_UPSELL]: {
            title: "Express Yourself with Avatar Decorations",
            body: "Stand out with unique avatar decorations exclusive to Nitro subscribers.",
        },
        [eN.e.PROFILE_EFFECT_MODAL_UPSELL]: {
            title: "Animate Your Profile with Profile Effects",
            body: "Add dynamic effects to your profile with Nitro.",
        },
        [eN.e.NAMEPLATE_MODAL_UPSELL]: {
            title: "Personalize with a Nameplate",
            body: "Show off your style with a custom nameplate, available with Nitro.",
        },
    },
    tF = [
        { id: "near_limit", label: "Near Limit (99 guilds)", value: 99 },
        { id: "at_limit", label: "At Limit (100 guilds)", value: D.qlD },
    ],
    tz = [
        { id: "avatar", label: "Avatar", value: tH.HL.AVATAR },
        { id: "banner", label: "Banner", value: tH.HL.BANNER },
    ];
var tY = l(652165);
let tK = "1271174907081789524",
    tq = {
        name: "Orb Checkout Modals",
        id: "orb-checkout-modal",
        component: function (e) {
            let { skuId: t } = e;
            return (0, u.jsx)("div", {
                className: B.YG,
                children: (0, u.jsx)(H.$, {
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
                    { skuId: tK, skuName: "Oni's Curse (Deco)" },
                ].map((e) => {
                    let { skuId: t, skuName: l } = e;
                    return { label: l, value: t };
                }),
                defaultValue: tK,
            },
        },
    };
var tX = l(324861),
    tJ = l(536637),
    tZ = l.n(tJ),
    tQ = l(503698),
    t0 = l.n(tQ),
    t1 = l(577473),
    t2 = l(34188),
    t3 = l(303136),
    t6 = l(628284),
    t4 = l(320448),
    t7 = l(742967),
    t8 =
        (((a = {})[(a.NONE = 0)] = "NONE"),
        (a[(a.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (a[(a.COMPLETED = 2)] = "COMPLETED"),
        (a[(a.CLAIMED = 3)] = "CLAIMED"),
        (a[(a.INELIGIBLE = 4)] = "INELIGIBLE"),
        (a[(a.ELIGIBLE = 5)] = "ELIGIBLE"),
        a),
    t9 = l(642529),
    t5 = l(137484),
    le = l(427483);
function lt(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === t8.COMPLETED || t === t8.CLAIMED,
        n = (0, u.jsx)("div", {
            className: t0()(t5.TK, { [t5.AM]: a }),
            children: (0, u.jsx)(t7.x, {
                className: t5.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: le.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a ? (0, u.jsx)("div", { className: t5.Zs, children: n }) : n;
}
function ll(e) {
    let { id: t, title: l, description: a, achievementStatus: n, onClaim: i, onDiscoveryClick: r } = e,
        [o, s] = c.useState(!1),
        [d, p] = c.useState(!1);
    async function m() {
        null != i && (p(!0), await i(t).finally(() => p(!1)));
    }
    let b = null != r && n === t8.NONE,
        h = t0()(t5.of, { [t5.D8]: o, [t5.or]: b }),
        x = (0, u.jsxs)(u.Fragment, {
            children: [
                (0, u.jsxs)("div", {
                    className: t5.Ub,
                    children: [
                        (0, u.jsx)(lt, { achievementStatus: n, animationState: o ? "on" : "off" }),
                        (0, u.jsxs)("div", {
                            className: t5.Du,
                            children: [
                                (0, u.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, u.jsx)(y.E, { variant: "text-sm/normal", color: "text-muted", children: a }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: a, handleClaim: n, hasDiscoveryClick: i } = t,
                        r = (0, u.jsx)(H.$, {
                            variant: "expressive",
                            size: "md",
                            text: U.intl.string(t9.default.WmfVjs),
                            loading: a,
                            onClick: n,
                        });
                    return a
                        ? r
                        : e === t8.COMPLETED
                          ? l
                              ? r
                              : (0, u.jsx)(t6.y, {
                                    color: tf.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": U.intl.string(t9.default.k6h2J3),
                                })
                          : i
                            ? (0, u.jsx)(t4._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(n, { isHovered: o, isClaiming: d, handleClaim: m, hasDiscoveryClick: b }),
            ],
        }),
        f = c.useMemo(() => ({ onMouseEnter: () => s(!0), onMouseLeave: () => s(!1) }), []);
    return b
        ? (0, u.jsx)(e0.D, { className: h, ...f, onClick: r, "aria-label": l, children: x })
        : (0, u.jsx)("div", { className: h, ...f, children: x });
}
var la = l(653877),
    ln = l(268920),
    li = l(633217);
function lr() {
    return (0, u.jsx)("div", {
        className: la.s,
        children: (0, u.jsx)(t3.A, { src: li.A, fallbackImage: ln.A, className: la.Cb }),
    });
}
function lo(e) {
    let { nitroMultiplier: t, nitroRenewalDate: l } = e,
        a = null != l ? -1 * tZ()().diff(l, "days") : null;
    return (0, u.jsxs)("div", {
        className: la.mT,
        children: [
            (0, u.jsxs)("div", {
                className: la.lh,
                children: [
                    (0, u.jsx)(o.t, { size: "xxs", color: "white" }),
                    (0, u.jsxs)(y.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: [t, "x"] }),
                ],
            }),
            (0, u.jsx)("span", {
                "aria-hidden": "true",
                children: (0, u.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", children: "\u2219" }),
            }),
            (0, u.jsx)(y.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: U.intl.format(t9.default["+kdkTi"], { days: a }),
            }),
        ],
    });
}
function ls(e) {
    let { orbBalance: t, headerTagsContent: l } = e;
    return (0, u.jsxs)("div", {
        className: la.SZ,
        children: [
            (0, u.jsx)(lr, {}),
            (0, u.jsxs)("div", {
                children: [
                    (0, u.jsx)(y.E, { variant: "display-md", color: "text-strong", className: la.xc, children: t }),
                    l,
                ],
            }),
        ],
    });
}
function lu(e) {
    let { isFullWidth: t = !1, className: l } = e;
    return (0, u.jsx)(er.c, { className: t0()(la.ts, { [la.KU]: t }, l) });
}
function lc(e) {
    let { title: t, challenges: l, onClaim: a } = e;
    return (0, u.jsxs)("div", {
        className: la.E6,
        children: [
            (0, u.jsx)(y.E, { variant: "text-sm/semibold", color: "text-muted", className: la.zu, children: t }),
            l.map((e, t) =>
                (0, u.jsxs)(
                    c.Fragment,
                    {
                        children: [
                            t > 0 ? (0, u.jsx)(lu, { className: la.Fu }) : null,
                            (0, u.jsx)(ll, { ...e, onClaim: a }),
                        ],
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function ld(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, u.jsxs)("div", {
        className: la.W,
        children: [
            (0, u.jsx)(H.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: t1.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, u.jsx)(H.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: t2.U, type: "icon" },
                fullWidth: !0,
                onClick: l,
            }),
        ],
    });
}
function lp(e) {
    let { orbBalance: t, headerTagsContent: l, renderPrimaryCard: a, orbChallengesCard: n, orbWalletFooter: i } = e,
        [r, o] = c.useState(!1);
    return (0, u.jsxs)("div", {
        className: t0()(la.ql, la.Ut),
        children: [
            (0, u.jsx)(ls, { orbBalance: t, headerTagsContent: l }),
            r ? null : a({ onClose: () => o(!0) }),
            (0, u.jsx)(lu, { isFullWidth: !0 }),
            n,
            i,
        ],
    });
}
var lm = l(408278),
    lb = l(789645),
    lh = l(696292),
    lx = l(839534),
    lf = l(617986);
function ly() {
    (0, lx.Cz)({ tab: e$.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU });
}
function lg() {
    (0, lf.mA)({ fromContent: lh.u.ORBS_BALANCE_MENU });
}
var lv = l(600676);
function lE(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: a,
        subTextDescription: n,
        buttonText: i,
        buttonIcon: r,
        onCtaClick: o,
        onClose: s,
    } = e;
    return (0, u.jsxs)("div", {
        className: lv.Vm,
        children: [
            null != s
                ? (0, u.jsx)("div", {
                      className: lv.Fx,
                      children: (0, u.jsx)(lm.K, {
                          icon: lb.P,
                          "aria-label": U.intl.string(U.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: s,
                      }),
                  })
                : null,
            null != l && (0, u.jsx)("img", { alt: a, src: l, className: lv.db }),
            (0, u.jsxs)("div", {
                children: [
                    (0, u.jsx)(y.E, { variant: "text-md/bold", color: "text-default", className: lv.L8, children: t }),
                    null != n &&
                        (0, u.jsx)(y.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            className: lv.Gd,
                            children: n,
                        }),
                    (0, u.jsx)(H.$, { text: i, size: "sm", icon: r, onClick: o }),
                ],
            }),
        ],
    });
}
function lS(e) {
    let { onClose: t } = e;
    return (0, u.jsx)(lE, {
        title: U.intl.string(t9.default.o6s7yg),
        imageUrl: l(105644),
        imageAlt: U.intl.string(t9.default.qa1xyr),
        subTextDescription: U.intl.string(t9.default.HACucK),
        buttonText: U.intl.string(t9.default.o6s7yg),
        buttonIcon: { asset: t2.U, type: "icon" },
        onCtaClick: ly,
        onClose: t,
    });
}
let lC = [
    {
        id: "1",
        title: "Challenge Task",
        description: "Claim XX Orbs",
        achievementStatus: t8.COMPLETED,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        id: "2",
        title: "Challenge Task",
        description: "Earn XX Orbs",
        achievementStatus: t8.NONE,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    { id: "3", title: "Challenge Task", description: "Earn XX Orbs", achievementStatus: t8.NONE },
];
function lj() {
    async function e(e) {
        console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
    }
    return (0, u.jsx)(lp, {
        orbBalance: 4240,
        renderPrimaryCard: (e) => {
            let { onClose: t } = e;
            return (0, u.jsx)(lS, { onClose: t });
        },
        orbChallengesCard: (0, u.jsx)(lc, { title: U.intl.string(t9.default.H6Ny8N), challenges: lC, onClaim: e }),
        orbWalletFooter: (0, u.jsx)(ld, { onQuestsClick: lg, onShopClick: ly }),
        headerTagsContent: (0, u.jsx)(lo, { nitroMultiplier: 1.2, nitroRenewalDate: tZ()().add(16, "day").toDate() }),
    });
}
var lT = l(877062);
let lA = {
    name: "Deep Link Test",
    id: "deep-link-test",
    component: function (e) {
        let { deepLinkUrl: t } = e;
        return (0, u.jsx)(j.M, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, u.jsxs)(tG.wn, {
                children: [
                    (0, u.jsx)(ep.D, { variant: "heading-xl/semibold", children: "Deep Link Test" }),
                    (0, u.jsx)(tG.Hq, {
                        label: "Test Deeplinking with a Custom Path",
                        direction: "vertical",
                        children: (0, u.jsx)(H.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Test Deeplink",
                            onClick: function () {
                                console.log("Opening deep link... ", t),
                                    lT.A.launch(t, (e) => {
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
var lI = l(636537);
let lP = {
    [D.hes.CARD]: () => U.intl.string(U.t["ei5/p8"]),
    [D.hes.PAYPAL]: () => U.intl.string(U.t["2dgEq+"]),
    [D.hes.SOFORT]: () => U.intl.string(U.t["edKX/1"]),
    [D.hes.GIROPAY]: () => U.intl.string(U.t["y+0MQZ"]),
    [D.hes.PRZELEWY24]: () => U.intl.string(U.t.u25uL0),
    [D.hes.PAYSAFE_CARD]: () => U.intl.string(U.t.boznHN),
    [D.hes.GCASH]: () => U.intl.string(U.t.PjehcF),
    [D.hes.GRABPAY_MY]: () => U.intl.string(U.t.T5davE),
    [D.hes.MOMO_WALLET]: () => U.intl.string(U.t.J0A1Vk),
    [D.hes.VENMO]: () => U.intl.string(U.t.jYOezc),
    [D.hes.KAKAOPAY]: () => U.intl.string(U.t.CSVexi),
    [D.hes.GOPAY_WALLET]: () => U.intl.string(U.t["43J8JK"]),
    [D.hes.BANCONTACT]: () => U.intl.string(U.t["1ITkfq"]),
    [D.hes.EPS]: () => U.intl.string(U.t["5BSDU6"]),
    [D.hes.IDEAL]: () => U.intl.string(U.t.nSbwqC),
    [D.hes.CASH_APP]: () => U.intl.string(U.t["+rbTmL"]),
    [D.hes.APPLE]: () => U.intl.string(U.t.RFi12i),
};
var l_ = l(295405),
    lk = l(71532),
    lR = l(818348),
    lN = l(336899);
let lM = eW();
async function lD(e) {
    return (await lI.Bo.post({ url: D.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function lO(e) {
    return (await lI.Bo.get({ url: D.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function lL(e, t) {
    await lI.Bo.patch({
        url: D.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function lV() {
    let [e, t] = c.useState(!1),
        [l, a] = c.useState(!1),
        [n, i] = c.useState(null),
        [r, o] = c.useState(null),
        [s, d] = c.useState(lM.defaultValue),
        [p, m] = c.useState(null),
        b = (0, et.bG)([l_.A], () => l_.A.paymentSources),
        h = (0, et.bG)([l_.A], () => l_.A.hasFetchedPaymentSources),
        x = (0, et.bG)([l_.A], () => l_.A.defaultPaymentSourceId);
    c.useEffect(() => {
        h || (0, em.$o)();
    }, [h]),
        c.useEffect(() => {
            null != x && null == p && m(x);
        }, [x, p]);
    let f = c.useRef(null);
    c.useEffect(() => {
        if (null == r || "" === r) {
            f.current = p;
            return;
        }
        if (p !== f.current) {
            if (null == p || "" === p) {
                f.current = p;
                return;
            }
            lL(r, p)
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
    let g = c.useMemo(
        () =>
            Object.values(b).map((e) => {
                var t;
                let l,
                    a = null != (l = lP[(t = e.type)]) ? l() : String(t);
                if (e.type === lR.he.CARD && "last4" in e) {
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
        if (null == s || "" === s || s === D.dJq) return void i("Please select a SKU ID.");
        t(!0), i(null), o(null);
        try {
            let e = await (0, S.Aj)(s, p, "US", !1, {
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
    async function E() {
        if (null == r || "" === r) return void i("No order ID available. Please create an order first.");
        a(!0);
        try {
            let e = await lD(r);
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
                            let n = await (0, lk.Cv)();
                            if (null == n) throw Error("Stripe not loaded");
                            let s = a.client_secret;
                            if (null == s || "" === s) throw Error("No client secret found in 3DS context");
                            let { error: u, paymentIntent: c } = await n.confirmCardPayment(s, {
                                payment_method: a.payment_method_id,
                            });
                            if (null != u) throw Error(`3DS authentication failed: ${u.message}`);
                            if (null == c) throw Error("No payment intent returned from 3DS authentication");
                            let d = e.id ?? r ?? "Unknown";
                            o(null),
                                i(`3DS authentication completed successfully!
Order ID: ${d}`);
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
                                      d().catch((e) => {
                                          let a = e instanceof Error ? e.message : String(e);
                                          l(`Failed to poll order status!
Order ID: ${t}
Error: ${a}`);
                                      });
                                  }, a));
                          }
                          function c() {
                              null != s && clearTimeout(s);
                          }
                          async function d() {
                              let e = Date.now() - o;
                              if (e >= 3e4) {
                                  try {
                                      var n;
                                      (n = (await lO(t)).status),
                                          l(`Order signing timed out.
Order ID: ${t}
Status: ${n ?? "unknown"}
Please check the order status manually.`),
                                          c();
                                  } catch (a) {
                                      let e = a instanceof Error ? a.message : String(a);
                                      l(`Order signing timed out.
Order ID: ${t}
Error: ${e}`),
                                          c();
                                  }
                                  return;
                              }
                              try {
                                  let e = (await lO(t)).status;
                                  if (2 === e) {
                                      l(`Order signed successfully!
Order ID: ${t}
Payment redirect completed.`),
                                          a(null),
                                          c();
                                      return;
                                  }
                                  if (1 === e) {
                                      l(`Order signed unsuccessfully
Order ID: ${t}`),
                                          c();
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
                                        c());
                              }
                          }
                          d().catch((e) => {
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
    return (0, u.jsxs)(tG.wn, {
        children: [
            (0, u.jsx)(ep.D, { variant: "heading-xl/semibold", children: "Order SKU Test" }),
            (0, u.jsxs)(tG.Hq, {
                label: "Test Order Creation, Signing & 3DS",
                direction: "vertical",
                children: [
                    (0, u.jsx)(y.E, {
                        variant: "text-md/normal",
                        className: lN.cW,
                        children:
                            "This section tests the orderSKU function, order signing, and 3DS authentication. Select SKU ID and payment source from the dropdowns below. Check the console for detailed logs.",
                    }),
                    (0, u.jsxs)(eu.n, {
                        label: "Configuration",
                        children: [
                            (0, u.jsx)("div", {
                                style: { marginBottom: "16px" },
                                children: (0, u.jsx)(ei.l, {
                                    selectionMode: "single",
                                    value: s,
                                    onSelectionChange: d,
                                    options: lM.options,
                                    formatOption: (e) => {
                                        let { value: t, label: l } = e;
                                        return { id: t, value: t, label: l };
                                    },
                                    placeholder: "Select a SKU...",
                                    label: "SKU ID",
                                    clearable: !0,
                                }),
                            }),
                            (0, u.jsxs)("div", {
                                style: { marginBottom: "16px" },
                                children: [
                                    (0, u.jsx)(ei.l, {
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
                                        (0, u.jsx)(y.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: lN.cW,
                                            children: "Loading payment sources...",
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, u.jsxs)("div", {
                        style: { display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" },
                        children: [
                            (0, u.jsx)(H.$, {
                                variant: "primary",
                                size: "sm",
                                text: e ? "Creating Order..." : "Create Order",
                                onClick: v,
                                disabled: e || null == p || "" === p || null == s || "" === s || s === D.dJq,
                            }),
                            (0, u.jsx)(H.$, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: E,
                                disabled: l || null == r || "" === r,
                            }),
                        ],
                    }),
                    null != n &&
                        (0, u.jsx)("div", {
                            className: lN.cW,
                            children: n
                                .split("\n")
                                .map((e, t) =>
                                    (0, u.jsx)(
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
var lw = l(150934),
    lU = l(36167);
let lB = [
        { id: "tier_2", value: eN.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eN.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eN.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    lG = [
        { id: "meta_quest", value: k.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function lH() {
    let [e, t] = c.useState(null);
    return {
        error: e,
        handleSuccess: c.useCallback((e, l) => {
            l.searchParams.append("handoff_token", e.body.handoff_token);
            let a = l.href;
            t(null), window.open(a, "_blank");
        }, []),
        handleFailure: c.useCallback((e, l) => {
            t(`Failed to generate handoff for ${l}`);
        }, []),
    };
}
function l$(e) {
    let { flowType: t } = e,
        [l, a] = c.useState(eN.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = c.useState(!1),
        { error: r, handleSuccess: o, handleFailure: s } = lH(),
        p = c.useCallback(() => {
            let e = (0, d.A)();
            (0, lU.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, s);
        }, [l, n, t, o, s]);
    return (0, u.jsxs)(tG.Hq, {
        label: "Nitro Checkout",
        direction: "vertical",
        children: [
            (0, u.jsxs)(en.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, u.jsx)(ei.l, {
                        label: "Plan",
                        value: l,
                        options: lB,
                        onSelectionChange: a,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, u.jsx)(ei.l, {
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
            (0, u.jsx)(H.$, { variant: "primary", size: "sm", text: "Open Nitro Checkout", onClick: p }),
            null != r && (0, u.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: r }),
        ],
    });
}
function lW(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = lH(),
        i = c.useCallback(() => {
            if (null == t) return;
            let e = (0, d.A)(),
                l = D.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, lU.xq)(l, a, n);
        }, [t, a, n]);
    return (0, u.jsxs)(tG.Hq, {
        label: "Manage Subscription",
        direction: "vertical",
        children: [
            (0, u.jsx)(H.$, {
                variant: "primary",
                size: "sm",
                text: "Open Manage Subscription",
                onClick: i,
                disabled: null == t,
            }),
            null != l && (0, u.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function lF(e) {
    let { flowType: t } = e,
        [l, a] = c.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = lH(),
        o = c.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, d.A)(),
                a = D.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, lU.xq)(a, i, r);
        }, [l, i, r, t]);
    return (0, u.jsxs)(tG.Hq, {
        label: "Guild Boosts",
        direction: "vertical",
        children: [
            (0, u.jsx)(eo.k, { label: "Guild ID", placeholder: "Guild ID", value: l, onChange: a }),
            (0, u.jsx)(H.$, {
                variant: "primary",
                size: "sm",
                text: "Open Guild Boost Checkout",
                disabled: 0 === l.length || null == t,
                onClick: o,
            }),
            null != n && (0, u.jsx)(y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var lz = l(643909),
    lY = l(103557),
    lK = l(558179);
let lq = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    lX = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    lJ = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    lZ = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    };
function lQ(e) {
    return void 0 !== e ? JSON.stringify(e, null, 2) : "undefined";
}
function l0() {
    let [e, t] = c.useState(lQ(lJ)),
        [l, a] = c.useState(lJ),
        [n, i] = c.useState(lQ(lZ)),
        [r, o] = c.useState(lZ),
        [s, d] = c.useState(null),
        [p, m] = c.useState(
            (0, u.jsx)(tG.a8, {
                errorLabel: lq.CONFIGURABLE,
                elementOptions: lJ,
                children: (0, u.jsx)(lz.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: lZ,
                }),
            }),
        );
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsxs)(y.E, {
                variant: "text-md/normal",
                className: lN.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, u.jsxs)(y.E, {
                variant: "text-md/normal",
                className: lN.cW,
                children: [
                    (0, u.jsx)("b", { children: "elements.options:" }),
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)(tG.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, u.jsx)("div", {
                className: lN.PC,
                children: (0, u.jsx)(lY.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, u.jsxs)(y.E, {
                variant: "text-md/normal",
                className: lN.cW,
                children: [
                    (0, u.jsx)("b", { children: "expressCheckoutElement.options:" }),
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)(tG.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements/express-checkout.d.ts#L314",
                    }),
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)(tG.Tu, {
                        href: "https://docs.stripe.com/elements/express-checkout-element/migration#customize-express-checkout-element",
                    }),
                ],
            }),
            (0, u.jsx)("div", {
                className: lN.PC,
                children: (0, u.jsx)(lY.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: n,
                    onChange: i,
                    rows: 7,
                }),
            }),
            null != s && (0, u.jsx)(y.E, { variant: "text-md/normal", color: "text-feedback-critical", children: s }),
            (0, u.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lN.Ut,
                children: (0, u.jsx)(H.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Apply Changes",
                    onClick: function () {
                        try {
                            let t = JSON.parse(e),
                                l = JSON.parse(n);
                            m(null),
                                m(
                                    (0, u.jsxs)(u.Fragment, {
                                        children: [
                                            (0, u.jsxs)(y.E, {
                                                variant: "text-md/normal",
                                                className: lN.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, u.jsx)(tG.a8, {
                                                errorLabel: lq.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, u.jsx)(lz.ExpressCheckoutElement, {
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
                                d(null);
                        } catch (e) {
                            console.error("ConfigurableStripeExpressCheckoutElement - error parsing JSON: ", e),
                                d("Error parsing JSON. Check console for more information.");
                        }
                    },
                }),
            }),
            (0, u.jsx)(y.E, { variant: "text-md/normal", className: lN.cW, children: "Current Element Options:" }),
            (0, u.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, u.jsx)(lK.A, { className: lN.wD, children: `\`\` ${lQ(l)} \`\`` }),
            }),
            (0, u.jsx)(y.E, {
                variant: "text-md/normal",
                className: lN.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, u.jsx)(y.E, {
                variant: "text-md/normal",
                children: (0, u.jsx)(lK.A, { className: lN.wD, children: `\`\` ${lQ(r)} \`\`` }),
            }),
            p,
        ],
    });
}
var l1 = l(683071),
    l2 = l(942340),
    l3 = l(211528),
    l6 = l(87725),
    l4 = l(783327),
    l7 = l(626584),
    l8 = l(667648),
    l9 = l(624479),
    l5 = l(957565),
    ae = l(247329);
function at(e) {
    let { label: t, value: l } = e;
    return (0, u.jsxs)("div", {
        className: ae.I,
        children: [
            (0, u.jsxs)(y.E, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, u.jsx)(y.E, { variant: "text-sm/normal", children: l }),
            (0, u.jsx)(lm.K, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: l9.CopyIcon,
                onClick: () => (0, l5.C)(l),
            }),
        ],
    });
}
function al(e) {
    let { children: t, stepConfigs: l, bodyClassName: a } = e;
    return (0, u.jsx)(j.M, {
        stepConfigs: l,
        skuIDs: [],
        activeSubscription: null,
        children: (0, u.jsx)("div", { className: a, children: t }),
    });
}
var aa = l(887072);
let an = new l7.A("PaymentElement.web.stories"),
    ai = {
        key: b.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, u.jsx)("div", {}),
        options: { renderHeader: !1, hideDefaultModalBody: !0 },
    };
function ar() {
    let { elementsAppearanceOptions: e } = (0, l2.E)();
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(ep.D, {
                variant: "heading-lg/semibold",
                className: B.tm,
                children: "Defaults for Current Theme",
            }),
            (0, u.jsx)("div", {
                children: Object.entries(e).map((e) => {
                    let [t, l] = e;
                    return (0, u.jsx)(at, { label: t, value: l }, t);
                }),
            }),
        ],
    });
}
function ao(e) {
    let [t, l] = c.useState(0);
    return (0, u.jsx)(j.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, c.createElement)(as, { ...e, key: t, forceRemount: () => l(t + 1) }),
    });
}
function as(e) {
    let {
            linkEnabled: t,
            theme: l,
            colorText: a,
            colorBackground: n,
            inputBackgroundColor: i,
            tabBackgroundColor: r,
            tabSelectedBackgroundColor: o,
            storyType: s,
            forceRemount: d,
        } = e,
        p = (0, l4.S)(),
        { setLinkWalletEnabled: m, linkWalletEnabled: h } = (0, l6.t4)((e) => ({
            setLinkWalletEnabled: e.setLinkWalletEnabled,
            linkWalletEnabled: e.linkWalletEnabled,
        }));
    c.useEffect(() => {
        h !== t && (m(t), d());
    }, [t, h, m, d]);
    let { stripePaymentElementProps: x, stripeAddressElementProps: f } = (0, l8.wD)({
            step: b.pn.PAYMENT_ELEMENT,
            handleStepChange: D.tEg,
            onBillingAddressChange: D.tEg,
            logger: an,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0,
        }),
        {
            elementsOptions: y,
            isLoading: g,
            setupError: v,
            customPaymentMethodIdsToSourceTypes: E,
        } = (0, l2.p)({
            onSetupError: (e) => {
                an.info("Stripe Payment Element options setup error: ", e);
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
        ? (0, u.jsx)(l8.eR, {})
        : (0, u.jsxs)("div", {
              children: [
                  (0, u.jsx)("div", {
                      style: { marginBottom: 16 },
                      children: (0, u.jsx)(l1.w, {
                          type: "info",
                          children:
                              "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                      }),
                  }),
                  (0, u.jsxs)("div", {
                      className: aa.ny,
                      children: [
                          (0, u.jsx)(ar, {}),
                          (0, u.jsx)(al, {
                              stepConfigs: [ai],
                              children: (0, u.jsx)("div", {
                                  className: t0()(aa.o6, "joined-payment-address-elements" === s ? aa.fF : aa.u1),
                                  children: (0, u.jsxs)(lz.Elements, {
                                      stripe: p,
                                      options: y,
                                      children: [
                                          "stripe-address-element" === s
                                              ? (0, u.jsx)("div", {
                                                    className: B.R,
                                                    children: (0, u.jsx)(l3.Wf, {
                                                        ...x,
                                                        customPaymentMethodIdsToSourceTypes: E,
                                                        step: b.pn.PAYMENT_ELEMENT,
                                                    }),
                                                })
                                              : (0, u.jsx)(l3.Wf, {
                                                    ...x,
                                                    customPaymentMethodIdsToSourceTypes: E,
                                                    step: b.pn.PAYMENT_ELEMENT,
                                                }),
                                          ("joined-payment-address-elements" === s || "stripe-address-element" === s) &&
                                              (0, u.jsx)(l3.KS, {
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
let au = {
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
    ac = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: function (e) {
            return (0, u.jsx)(ao, { ...e, storyType: "joined-payment-address-elements" });
        },
        controls: { ...au },
    },
    ad = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: function (e) {
            return (0, u.jsx)(ao, { ...e, storyType: "stripe-payment-element" });
        },
        controls: { ...au },
    },
    ap = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: function (e) {
            return (0, u.jsx)(ao, { ...e, storyType: "stripe-address-element" });
        },
        controls: { ...au },
    };
var am = l(786826);
let ab = {
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
                        required: s,
                        disabled: d,
                        error: p,
                        description: m,
                        helperText: b,
                    } = e,
                    [h, x] = c.useState("");
                return (0, u.jsx)("div", {
                    style: { maxWidth: 480, padding: 24 },
                    children: (0, u.jsx)(am.f, {
                        label: t,
                        placeholder: l,
                        toolbarVariant: a,
                        autosize: n,
                        rows: i,
                        minLength: r,
                        maxLength: o,
                        required: s,
                        disabled: d,
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
var ah = l(435558),
    ax = l(96337),
    af = l(997101),
    ay = l(597770),
    ag = l(278416),
    av = l(480642),
    aE = l(936477),
    aS = l(812745);
let aC = {
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
                    rightPrimaryText: s,
                    rightSubtext: d,
                    rightShowSubtext: p,
                    rightSubtextStrikethrough: m,
                } = e,
                [b, h] = c.useState(0);
            return (0, u.jsxs)("div", {
                className: B.Cd,
                children: [
                    (0, u.jsx)(aE.q7, {
                        selection: b,
                        onChange: h,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, u.jsx)(aE.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: a,
                                subtext: i ? (0, u.jsx)(aE.Lo, { strikethrough: r, price: n }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, u.jsx)(aE.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: o,
                                primaryText: s,
                                subtext: p ? (0, u.jsx)(aE.Lo, { strikethrough: m, price: d }) : void 0,
                            },
                        ],
                    }),
                    (0, u.jsxs)(y.E, { variant: "text-sm/normal", children: ["Selected plan index: ", b] }),
                ],
            });
        },
        controls: {
            variant: {
                label: "Nitro Variant",
                type: "select",
                defaultValue: eN.PremiumTypes.TIER_2,
                options: [
                    { label: "Nitro", value: eN.PremiumTypes.TIER_2 },
                    { label: "Nitro Basic", value: eN.PremiumTypes.TIER_0 },
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
    aj = {
        name: "Primitive: Subscription Details Accordion",
        id: "unified-checkout-subscription-details",
        component: function (e) {
            let {
                    label: t,
                    totalLineItemLabel: l,
                    totalLineItemLabelSubText: a,
                    totalLineItemValueSubText: n,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: r,
                    intervalType: s,
                    intervalCount: c,
                    currency: d,
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
                              subText: "" !== f ? f : void 0,
                              subTextHasStrikethrough: y,
                          },
                          ...("" !== g
                              ? [
                                    {
                                        id: 2,
                                        label: g,
                                        amount: v,
                                        icon: (0, u.jsx)(o.t, { size: "xs" }),
                                        formatWithoutRate: E,
                                    },
                                ]
                              : []),
                          ...(S ? [{ id: 3, label: C, amount: j }] : []),
                      ]
                    : [];
            return (0, u.jsx)("div", {
                className: B.SG,
                children: (0, u.jsx)(aE._D, {
                    label: t,
                    totalLineItemLabel: "" !== l ? l : void 0,
                    totalLineItemLabelSubText: "" !== a ? a : void 0,
                    totalLineItemValueSubText: "" !== n ? n : void 0,
                    showTotalWhenCollapsed: i,
                    defaultExpanded: r,
                    lineItems: T,
                    intervalType: s,
                    intervalCount: c,
                    currency: d,
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
                defaultValue: eN.WT.MONTH,
                options: [
                    { label: "Month", value: eN.WT.MONTH },
                    { label: "Year", value: eN.WT.YEAR },
                    { label: "Day", value: eN.WT.DAY },
                ],
            },
            intervalCount: { label: "Interval Count", type: "number", defaultValue: 1 },
            currency: {
                label: "Currency",
                type: "select",
                defaultValue: D.Yri.USD,
                options: [
                    { label: "USD", value: D.Yri.USD },
                    { label: "EUR", value: D.Yri.EUR },
                    { label: "GBP", value: D.Yri.GBP },
                    { label: "CAD", value: D.Yri.CAD },
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
    aT = { "nitro-wheel": o.t, gift: ay.GiftIcon, orbs: r.C },
    aA = ax.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    aI = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? ag.TagIcon : void 0;
            return (0, u.jsxs)(en.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, u.jsx)(y.E, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, u.jsx)(H.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, ed.openModal)(
                                (e) =>
                                    (0, u.jsx)(av.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? aT[l] : void 0,
                                        },
                                        onBackClick: e.onClose,
                                        children: (0, u.jsx)(en.B, {
                                            gap: 16,
                                            children: (0, u.jsx)("div", {
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
            countryCode: { label: "Country Code", type: "select", defaultValue: af.d.US, options: aA },
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
    aP = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: D.Yri.USD,
        interval: eN.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    a_ = {
        [aE.I0.Subscription]: { type: aE.I0.Subscription, ...aP },
        [aE.I0.SubscriptionApplication]: { type: aE.I0.SubscriptionApplication, ...aP },
        [aE.I0.GuildProductOneTimePurchase]: { type: aE.I0.GuildProductOneTimePurchase, ...aP },
        [aE.I0.PremiumAppsOneTimePurchase]: { type: aE.I0.PremiumAppsOneTimePurchase, ...aP },
        [aE.I0.SubscriptionTrial]: { type: aE.I0.SubscriptionTrial, ...aP },
        [aE.I0.OrbsRedemption]: { type: aE.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [aE.I0.Shop]: { type: aE.I0.Shop, purchaseButtonText: "Purchase" },
        [aE.I0.GiftNitro]: { type: aE.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [aE.I0.GiftShop]: { type: aE.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [aE.I0.GiftGameShop]: {
            type: aE.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
        [aE.I0.OrbsGameShop]: {
            type: aE.I0.OrbsGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
    },
    ak = {
        title: "Unified Checkout",
        stories: [
            aI,
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
                        (0, u.jsx)("div", {
                            className: B.SG,
                            children: (0, u.jsx)(aE.Vm, { label: t, lineItems: n, currency: D.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            aC,
            aj,
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
                        hasPriceIcon: r,
                        hasStrikethroughPrice: s,
                        strikethroughPrice: c,
                        targetType: d,
                    } = e;
                    function p(e, p) {
                        let m = e4.default.getCurrentUser(),
                            b = ek.A.getGuildsArray()[0];
                        return (0, u.jsx)(aE.f7, {
                            header: l ? t : void 0,
                            headerIconSrc: "https://cdn.discordapp.com/embed/avatars/1.png",
                            label: `${a} ${p}`,
                            description: n,
                            price: i,
                            PriceIcon: r ? o.t : void 0,
                            priceSubText: s ? c : void 0,
                            priceSubTextHasStrikethrough: s,
                            graphic: (0, u.jsx)(e, {}),
                            target:
                                "gift" === d
                                    ? { type: "gift", user: m }
                                    : "guildSubscription" === d
                                      ? { type: "guildSubscription", guild: b }
                                      : void 0,
                        });
                    }
                    return (0, u.jsxs)("div", {
                        className: B.SG,
                        children: [
                            p(aE.JW, "Nitro"),
                            p(aE.DH, "Nitro Basic"),
                            p(aE.a6, "Boost"),
                            p(aE.jw, "App"),
                            p(aE.oo, "Nitro Credit"),
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
                            { id: "visa-1234", label: "Visa ending in 1234", icon: aS.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: aS.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: aS.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: aS.Be.AMEX },
                        ],
                        [i, r] = c.useState(n[0].id);
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(aE.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: ah.noop,
                                disabled: t,
                                error: l ? a : void 0,
                            }),
                            (0, u.jsxs)(y.E, {
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
                        [n, i] = c.useState(!1);
                    return (0, u.jsx)(aE._P, {
                        variant: a_[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? D.hes.PAYSAFE_CARD : D.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: aE.I0.Subscription,
                        options: [
                            { label: "Subscription", value: aE.I0.Subscription },
                            { label: "Subscription Trial", value: aE.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: aE.I0.OrbsRedemption },
                            { label: "Shop", value: aE.I0.Shop },
                            { label: "Nitro Gift", value: aE.I0.GiftNitro },
                            { label: "Shop Gift", value: aE.I0.GiftShop },
                            { label: "Game Shop Gift", value: aE.I0.GiftGameShop },
                            { label: "Orbs Game Shop Gift", value: aE.I0.OrbsGameShop },
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
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(y.E, { variant: "text-sm/normal", children: "Stateless Component:" }),
                            (0, u.jsx)(aE.y, { onClick: D.tEg }),
                            (0, u.jsx)("br", {}),
                            (0, u.jsx)(y.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, u.jsx)(aE.Z4, { onComplete: D.tEg }),
                        ],
                    });
                },
            },
            {
                name: "Primitive: Plan Radio Group",
                id: "unified-checkout-plan-radio-group",
                component: function () {
                    let [e, t] = c.useState("yearly");
                    return (0, u.jsx)("div", {
                        children: (0, u.jsx)(aE.me, {
                            headingComponent: (0, u.jsx)(aE.ec, {
                                size: "sm",
                                color: "text-strong",
                                premiumType: eN.PremiumTypes.TIER_2,
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
                    return (0, u.jsx)(aE.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: af.d.US, options: aA },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: function (e) {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, u.jsx)(aE.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: af.d.US,
                        options: aA,
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
var aR = l(56359),
    aN = l(734057),
    aM = l(783878),
    aD = l(711014),
    aO = l(427262),
    aL = l(198498);
function aV(e) {
    let { label: t, options: l, value: a, onChange: n } = e;
    return (0, u.jsx)(aM.Z, {
        label: t,
        selectionMode: "single",
        options: l,
        value: a,
        onSelectionChange: n,
        placeholder: 0 === l.length ? "Waiting for client to connect\u2026" : void 0,
    });
}
function aw(e) {
    let { children: t } = e;
    return (0, u.jsx)("div", { className: aL.t, children: t });
}
let aU = "default";
var aB =
    (((n = {}).PAYMENTS = "payments"),
    (n.VIRTUAL_CURRENCY = "virtual-currency"),
    (n.NITRO = "nitro"),
    (n.IDENTITY = "identity"),
    n);
let aG = ["Revenue Storybook", "Revenue Playground"],
    aH = {
        id: "payments",
        name: "Payments",
        groups: [
            ew,
            ak,
            {
                title: "Gift Card",
                stories: [
                    {
                        name: "Redemption Modal",
                        id: "gift-card-redemption-modal",
                        component: function () {
                            return (0, u.jsxs)(en.B, {
                                gap: 8,
                                children: [
                                    (0, u.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption modal (enter code form). On success it will open the success modal.",
                                    }),
                                    (0, u.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Open Redemption Modal",
                                        onClick: () =>
                                            (0, tc.HF)({
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
                            return (0, u.jsxs)(en.B, {
                                gap: 8,
                                children: [
                                    (0, u.jsx)(y.E, {
                                        variant: "text-sm/normal",
                                        children:
                                            "Click the button below to open the gift card redemption success modal (post-redemption).",
                                    }),
                                    (0, u.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Open Success Modal",
                                        onClick: () =>
                                            (0, tc.cV)({
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
            { title: "Payment Elements", stories: [ad, ap, ac] },
            {
                title: "Add Payment (Legacy Checkout)",
                stories: [
                    {
                        name: "Add Payment Step",
                        id: "add-payment-step",
                        component: function () {
                            let { analyticsLocations: e } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
                                t = c.useMemo(() => (0, d.A)(), []),
                                l = c.useCallback(() => {}, []);
                            return (0, u.jsx)(
                                M,
                                {
                                    stepConfigs: O,
                                    analyticsLocations: e,
                                    applicationId: D.FYj,
                                    initialPlanId: void 0,
                                    skuId: null,
                                    isGift: !1,
                                    loadId: t,
                                    purchaseType: D.VVm.ONE_TIME,
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
            { title: "Checkout Review Step", stories: [eJ, eZ] },
            {
                title: "Miscellaneous",
                stories: [
                    lA,
                    {
                        name: "Redirect To Standalone",
                        id: "standalone-redirect",
                        component: function () {
                            let [e, t] = c.useState(!1),
                                [l, a] = c.useState(k.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
                                n = c.useCallback((e) => {
                                    t(e);
                                }, []),
                                i = e ? l : void 0;
                            return (0, u.jsxs)(tG.wn, {
                                children: [
                                    (0, u.jsx)(ep.D, {
                                        variant: "heading-xl/semibold",
                                        children: "Redirect To Standalone",
                                    }),
                                    (0, u.jsx)(tG.nB, {}),
                                    (0, u.jsxs)(en.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, u.jsx)(lw.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                            (0, u.jsx)(ei.l, {
                                                label: "Flow Type",
                                                value: l,
                                                options: lG,
                                                onSelectionChange: a,
                                                selectionMode: "single",
                                                disabled: !e,
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                    (0, u.jsx)(y.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: "Some link outs require enabling the flow type to work.",
                                    }),
                                    (0, u.jsx)(l$, { flowType: i }),
                                    (0, u.jsx)(lW, { flowType: i }),
                                    (0, u.jsx)(lF, { flowType: i }),
                                ],
                            });
                        },
                    },
                    {
                        name: "Order SKU",
                        component: function () {
                            return (0, u.jsx)(j.M, {
                                stepConfigs: [],
                                skuIDs: [],
                                activeSubscription: null,
                                children: (0, u.jsx)(lV, {}),
                            });
                        },
                        id: "order-sku-test",
                        controls: {},
                    },
                    {
                        name: "Stripe Components",
                        id: "stripe-components",
                        component: function () {
                            return (0, u.jsx)(j.M, {
                                stepConfigs: [],
                                skuIDs: [],
                                activeSubscription: null,
                                children: (0, u.jsxs)(tG.wn, {
                                    children: [
                                        (0, u.jsx)(ep.D, {
                                            variant: "heading-xl/semibold",
                                            children: "Stripe Express Checkout Buttons",
                                        }),
                                        (0, u.jsx)(tG.Hq, {
                                            label: lq.DEFAULT,
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(tG.a8, {
                                                    errorLabel: lq.DEFAULT,
                                                    children: (0, u.jsx)(lz.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: {},
                                                    }),
                                                }),
                                            }),
                                        }),
                                        ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                            let t = lq[e];
                                            return (0, u.jsx)(
                                                tG.Hq,
                                                {
                                                    label: t,
                                                    children: (0, u.jsxs)("div", {
                                                        children: [
                                                            (0, u.jsx)(y.E, {
                                                                variant: "text-md/normal",
                                                                className: lN.cW,
                                                                children: "expressCheckoutElement.options:",
                                                            }),
                                                            (0, u.jsx)(y.E, {
                                                                variant: "text-md/normal",
                                                                children: (0, u.jsx)(lK.A, {
                                                                    className: lN.wD,
                                                                    children: `\`\`${lQ(lX[e])} \`\``,
                                                                }),
                                                            }),
                                                            (0, u.jsx)(tG.a8, {
                                                                errorLabel: t,
                                                                children: (0, u.jsx)(lz.ExpressCheckoutElement, {
                                                                    onConfirm: (e) => {
                                                                        console.log(
                                                                            "ExpressCheckoutElement onConfirm event: ",
                                                                            e,
                                                                        );
                                                                    },
                                                                    options: lX[e],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e,
                                            );
                                        }),
                                        (0, u.jsx)(tG.Hq, { label: lq.CONFIGURABLE, children: (0, u.jsx)(l0, {}) }),
                                    ],
                                }),
                            });
                        },
                    },
                ],
            },
        ],
        tags: aG,
        IconComponent: i.d,
    },
    a$ = {
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
                        component: function (e) {
                            let { ctaText: t, linkText: l, linkPreText: a } = e;
                            return (0, u.jsx)(L.b, {
                                ctaText: (0, w.uJ)(t) ? U.intl.string(U.t.H57f41) : t,
                                linkText: (0, w.uJ)(l) ? U.intl.string(U.t["7f4H7D"]) : l,
                                linkPreText: (0, w.uJ)(a) ? void 0 : a,
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
            {
                title: "Orb Wallet",
                stories: [
                    {
                        name: "Orb Wallet",
                        id: "orb-wallet",
                        component: function () {
                            return (0, u.jsx)(lj, {});
                        },
                    },
                ],
            },
            { title: "Orb Checkout", stories: [tq] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, tX.A)();
                            return (0, u.jsxs)("div", {
                                className: B.YG,
                                children: [
                                    (0, u.jsx)(y.E, {
                                        variant: "text-md/normal",
                                        color: "text-feedback-info",
                                        style: { marginBottom: "8px" },
                                        children: "Use this to reset your user's DCF Orb Onboarding state.",
                                    }),
                                    (0, u.jsx)(H.$, { onClick: () => e(), text: "Reset Announcement Modal State" }),
                                ],
                            });
                        },
                        controls: {},
                    },
                ],
            },
        ],
        tags: aG,
        IconComponent: r.C,
    },
    aW = {
        id: "nitro",
        name: "Nitro",
        groups: [
            tT,
            { title: "Marketing Home", stories: [tD] },
            tU,
            {
                title: "Nitro Upsells",
                stories: [
                    {
                        name: "Burst Reactions Upsell",
                        component: function () {
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.resolve().then(l.bind(l, 32605));
                                    return (t) => (0, u.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await l.e("422540").then(l.bind(l, 530951));
                                    return (t) => (0, u.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("641704"),
                                    ]).then(l.bind(l, 562011));
                                    return (t) => (0, u.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([l.e("235257"), l.e("66920")]).then(
                                        l.bind(l, 220763),
                                    );
                                    return (t) => (0, u.jsx)(e, { ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let [e] = c.useState("This is a sample long message that exceeds the character limit."),
                                t = c.useCallback(() => {
                                    (0, ed.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([l.e("235257"), l.e("276725")]).then(
                                            l.bind(l, 798612),
                                        );
                                        return (l) => (0, u.jsx)(t, { channel: null, content: e, ...l });
                                    });
                                }, [e]);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let [e, t] = c.useState(eN.e.AVATAR_DECORATION_MODAL_UPSELL),
                                a = c.useCallback(() => {
                                    let { title: t, body: a } = tW[e];
                                    (0, ed.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([l.e("93513"), l.e("764864")]).then(
                                            l.bind(l, 393027),
                                        );
                                        return (l) =>
                                            (0, u.jsx)(n, {
                                                premiumUpsellType: e,
                                                title: t,
                                                body: a,
                                                onSecondaryClick: () => l.onClose(),
                                                ...l,
                                            });
                                    });
                                }, [e]);
                            return (0, u.jsxs)(tG.LB, {
                                children: [
                                    (0, u.jsx)(tG.MG, {
                                        children: (0, u.jsx)(ei.l, {
                                            label: "Upsell Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: t$,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, u.jsx)(H.$, {
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
                            let [e, t] = c.useState(100),
                                a = c.useCallback(() => {
                                    (0, ed.openModalLazy)(async () => {
                                        let { default: t } = await Promise.all([
                                            l.e("935205"),
                                            l.e("677668"),
                                            l.e("766901"),
                                            l.e("256430"),
                                        ]).then(l.bind(l, 39613));
                                        return (l) =>
                                            (0, u.jsx)(t, {
                                                guildCount: e,
                                                analyticsSource: {},
                                                analyticsLocation: {},
                                                analyticsLocations: [],
                                                ...l,
                                            });
                                    });
                                }, [e]);
                            return (0, u.jsxs)(tG.LB, {
                                children: [
                                    (0, u.jsx)(tG.MG, {
                                        children: (0, u.jsx)(ei.l, {
                                            label: "Guild Count State",
                                            placeholder: "Select state",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tF,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, u.jsx)(H.$, {
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
                            let [e, t] = c.useState(tH.HL.AVATAR),
                                a = (0, et.bG)([e4.default], () => e4.default.getCurrentUser()),
                                n = c.useCallback(() => {
                                    null != a &&
                                        (0, ed.openModalLazy)(async () => {
                                            let { default: t } = await Promise.all([l.e("93513"), l.e("779149")]).then(
                                                l.bind(l, 688796),
                                            );
                                            return (l) => (0, u.jsx)(t, { uploadType: e, ...l });
                                        });
                                }, [a, e]);
                            return (0, u.jsxs)(tG.LB, {
                                children: [
                                    (0, u.jsx)(tG.MG, {
                                        children: (0, u.jsx)(ei.l, {
                                            label: "Upload Type",
                                            placeholder: "Select type",
                                            onSelectionChange: (e) => t(e),
                                            value: e,
                                            options: tz,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, u.jsx)(H.$, {
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
                            let e = (0, et.bG)([e4.default], () => e4.default.getCurrentUser()),
                                t = c.useCallback(() => {
                                    null != e &&
                                        (0, ed.openModalLazy)(async () => {
                                            let { default: e } = await l.e("435476").then(l.bind(l, 835071));
                                            return (t) => (0, u.jsx)(e, { ...t });
                                        });
                                }, [e]);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("840716"),
                                    ]).then(l.bind(l, 629959));
                                    return (t) => (0, u.jsx)(e, { analyticsSource: {}, ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        l.e("935205"),
                                        l.e("766901"),
                                        l.e("661129"),
                                    ]).then(l.bind(l, 475312));
                                    return (t) => (0, u.jsx)(e, { source: {}, ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let { default: e } = await l.e("493475").then(l.bind(l, 366638));
                                    return (t) => (0, u.jsx)(e, { handleLearnMore: () => {}, ...t });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
                            let e = c.useCallback(() => {
                                (0, ed.openModalLazy)(async () => {
                                    let [{ default: e }, { EmojiIntention: t }] = await Promise.all([
                                        Promise.resolve().then(l.bind(l, 148361)),
                                        Promise.resolve().then(l.bind(l, 307731)),
                                    ]);
                                    return (l) =>
                                        (0, u.jsx)(e, {
                                            onUpsellClicked: () => {},
                                            onClose: l.onClose,
                                            channel: null,
                                            emojiDescriptor: void 0,
                                            pickerIntention: t.CHAT,
                                            analyticsLocation: {},
                                        });
                                });
                            }, []);
                            return (0, u.jsx)(tG.LB, {
                                children: (0, u.jsx)(H.$, {
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
            { title: "Clips", stories: [e5] },
        ],
        tags: aG,
        IconComponent: o.t,
    },
    aF = {
        id: "identity",
        name: "Identity",
        groups: [
            tn,
            {
                title: "Editable Tile Button Examples",
                stories: [
                    {
                        name: "Avatar Button",
                        component: function (e) {
                            let [t, l] = c.useState(""),
                                a = (0, et.bG)([e4.default], () => e4.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, u.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, u.jsx)(ti.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tu,
                                          }),
                                          (0, u.jsx)(tr.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-button",
                    },
                    {
                        name: "Avatar Decoration Button",
                        component: function (e) {
                            let [t, l] = c.useState(""),
                                a = (0, et.bG)([e4.default], () => e4.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, u.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, u.jsx)(ti.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tu,
                                          }),
                                          (0, u.jsx)(to.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "avatar-decoration-button",
                    },
                    {
                        name: "Nameplate Button",
                        component: function (e) {
                            let [t, l] = c.useState(""),
                                a = (0, et.bG)([e4.default], () => e4.default.getCurrentUser());
                            return null == a
                                ? null
                                : (0, u.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: 16,
                                          alignItems: "flex-start",
                                      },
                                      children: [
                                          (0, u.jsx)(ti.v, {
                                              guildId: t,
                                              onChange: function (e) {
                                                  l(e?.id ?? "");
                                              },
                                              globalOption: tu,
                                          }),
                                          (0, u.jsx)(ts.A, { user: a, guildId: "" === t ? null : t }),
                                      ],
                                  });
                        },
                        id: "nameplate-button",
                    },
                ],
            },
            { title: "Profile Banner", stories: [Z] },
            ab,
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
                                    ((e = (0, et.yK)([e6.A], () => e6.A.getFriendIDs())),
                                    (t = (0, et.bG)([e4.default], () => e4.default.getCurrentUser())),
                                    c.useMemo(() => {
                                        let l = e
                                            .map((e) => {
                                                let t = e4.default.getUser(e);
                                                return null == t ? null : { id: e, label: aO.Ay.getName(t), value: e };
                                            })
                                            .filter((e) => null != e)
                                            .sort((e, t) => e.label.localeCompare(t.label));
                                        return null == t
                                            ? l
                                            : [
                                                  { id: t.id, label: `${aO.Ay.getName(t)} (You)`, value: t.id },
                                                  ...l.filter((e) => e.value !== t.id),
                                              ];
                                    }, [e, t])),
                                n =
                                    ((l = (0, et.yK)([aD.Ay], () => aD.Ay.getFlattenedGuildIds())),
                                    c.useMemo(
                                        () =>
                                            l.reduce((e, t) => {
                                                let l = ek.A.getGuild(t);
                                                return null != l && e.push({ id: l.id, label: l.name, value: l.id }), e;
                                            }, []),
                                        [l],
                                    )),
                                [i, r] = c.useState(),
                                [o, s] = c.useState(aU),
                                d = i ?? a[0]?.value,
                                p = c.useMemo(
                                    () => [
                                        { id: "dm", label: "DM", value: "dm" },
                                        { id: aU, label: "Default (main profile)", value: aU },
                                        ...n,
                                    ],
                                    [n],
                                ),
                                m = (0, et.bG)(
                                    [aN.A],
                                    () =>
                                        null == d
                                            ? void 0
                                            : (aN.A.getDMFromUserId(d) ?? aN.A.getSortedPrivateChannels()[0]?.id),
                                    [d],
                                ),
                                b = o === aU || "dm" === o ? void 0 : o,
                                h = "dm" === o ? m : void 0;
                            return (0, u.jsxs)(en.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, u.jsxs)(en.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        children: [
                                            (0, u.jsx)(aV, { label: "User", options: a, value: d, onChange: r }),
                                            (0, u.jsx)(aV, { label: "Context", options: p, value: o, onChange: s }),
                                        ],
                                    }),
                                    (0, u.jsx)(aw, {
                                        children:
                                            null != d && (0, u.jsx)(aR.G, { userId: d, guildId: b, channelId: h }),
                                    }),
                                ],
                            });
                        },
                        id: "user-profile-embed",
                    },
                ],
            },
        ],
        tags: aG,
        IconComponent: s.UserIcon,
    },
    az = { playgroundBaseUrl: "revenue", collections: [aH, a$, aW, aF] };
