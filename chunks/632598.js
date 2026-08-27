l.r(t),
    l.d(t, {
        nitroCollection: () => ne,
        virtualCurrencyCollection: () => a5,
        playgroundConfig: () => nl,
        identityCollection: () => nt,
        RevenuePlaygroundCollectionId: () => a4,
        paymentsCollection: () => a9,
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
    h = l(166532),
    b = l(735305),
    x = l(635358),
    f = l(702841),
    g = l(834730),
    E = l(28863),
    y = l(231723),
    v = l(228366),
    C = l(830382),
    S = l(73825),
    j = l(626797),
    T = l(951305),
    A = l(491057),
    I = l(424171),
    _ = l(97352),
    P = l(67480),
    R = l(26279);
let k = (e) => {
    let { skuId: t, isGift: l, applicationId: a } = e,
        { analyticsLocations: n } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
        i = c.useRef(null),
        r = c.useRef(null),
        [o, s] = c.useState(() => (0, d.A)());
    c.useEffect(() => {
        (i.current !== t || r.current !== l) && (s((0, d.A)()), (i.current = t), (r.current = l));
    }, [t, l]);
    let [u, h] = (0, f.yK)([P.A], () => [P.A.isFetching(t), P.A.get(t)]);
    return (
        c.useEffect(() => {
            null != h || u || (0, C.EX)(a, t, x.g.VARIANTS_GROUP).catch((e) => {});
        }, [a, t, h, u]),
        {
            loadId: o,
            analyticsLocations: n,
            handleClose: c.useCallback((e) => {}, []),
            handleComplete: c.useCallback(() => {}, []),
            isFetching: u,
            sku: h,
            skuId: t,
            isGift: l,
        }
    );
};
function N(e) {
    return (0, u.jsxs)("div", {
        style: { padding: 20 },
        children: [
            (0, u.jsx)(g.E, { variant: "text-md/normal", children: e.text }),
            (0, u.jsx)("div", {
                style: { marginTop: 16 },
                children: (0, u.jsx)(E.Anchor, {
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
            disablePurchases: h,
        } = e,
        b = `${a}-${n}-${d}`;
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
            overrideCustomCheckoutFlow: h ? R.uH.DEV_STORYBOOK_CHECKOUT : void 0,
            children: (0, u.jsx)(A.Qt, {
                children: (0, u.jsx)(T.dX, {
                    isGift: n,
                    children: (0, u.jsx)(
                        I.q,
                        {
                            transitionState: y.ip.ENTERED,
                            onClose: i,
                            onComplete: r,
                            applicationId: l,
                            skuId: a,
                            initialPlanId: o,
                            analyticsLocations: t,
                            renderHeader: m,
                        },
                        b,
                    ),
                }),
            }),
        },
        b,
    );
}
var D = l(652215);
let L = [
    {
        key: h.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, u.jsx)(b.x, { ...e, breadcrumbSteps: [h.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
        options: { renderHeader: !0 },
    },
    {
        key: h.pn.REVIEW,
        renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: h.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
        options: {},
    },
];
var O = l(162097),
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
    F = l(37402);
let W = {
        balance: { label: "Balance", type: "number", defaultValue: 150 },
        balanceWidgetMode: {
            label: "Balance Widget Mode",
            type: "select",
            options: [
                { label: "Default", value: F.k7.DEFAULT },
                { label: "Selected", value: F.k7.SELECTED },
            ],
            defaultValue: F.k7.DEFAULT,
        },
        showNotificationBadge: { label: "Show Notification Badge", type: "boolean", defaultValue: !1 },
        shouldUseTabularNums: { label: "Use Tabular Nums Font Variant", type: "boolean", defaultValue: !1 },
        disabled: { label: "Disabled", type: "boolean", defaultValue: !1 },
    },
    $ = {
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
                        (0, u.jsx)(F.Gy, { ...a, balance: t ? null : n, className: l ? B.jG : void 0 }),
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
                        (0, u.jsx)(F.Gy, { ...a, balance: n, className: l ? B.jG : void 0 }),
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
    J = l(859161),
    X = l(842291);
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
            c = (0, J.A)(r);
        return (0, u.jsxs)("div", {
            className: X.GI,
            children: [
                (0, u.jsx)(q.A, {
                    className: X.k5,
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
                        className: X.oz,
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
    eh = l(529427),
    eb = l(669874),
    ex = l(883645),
    ef = l(541689),
    eg = l(944304),
    eE = l(300233),
    ey = l(599941),
    ev = l(162093),
    eC = l(4630),
    eS = l(482132),
    ej = l(532794),
    eT = l(216678),
    eA = l(194509),
    eI = l(511484),
    e_ = l(794400),
    eP = l(761705),
    eR = l(71393),
    ek = l(166403),
    eN = l(202541),
    eM = l(127898);
function eD(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, ey.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, u.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, u.jsx)(ev.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let eL = "checkout-error-boundary-test-modal";
function eO() {
    let { setStep: e } = (0, ex.Ay)();
    return (0, u.jsx)(eS.dZ, {
        children: (0, u.jsxs)(en.B, {
            direction: "vertical",
            gap: 8,
            fullWidth: !1,
            children: [
                (0, u.jsx)(g.E, {
                    variant: "text-sm/normal",
                    children:
                        "PaymentModal Step within CheckoutRootProvider loaded. Click below to navigate to a mock error step that will throw \u2014 the CheckoutErrorBoundary baked into CheckoutRootProvider will catch it.",
                }),
                (0, u.jsx)(H.$, { variant: "primary", text: "Navigate to Error Step", onClick: () => e(h.pn.REVIEW) }),
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
            throw new e_.v({
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
                    n = (0, et.yK)([eR.A], () => eR.A.getGuildsArray()),
                    [i] = (0, et.yK)([ek.A], () => [ek.A.getPremiumSubscription()]),
                    r = n.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [o, s] = c.useState(r.length > 0 ? r[0].value : null),
                    [h, b] = c.useState(""),
                    [x, f] = c.useState({ plan_id: eN.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    y = "true" !== x.gift && null != i,
                    [v, C] = c.useState(r.length > 0 ? r[0].value : null),
                    { analyticsLocations: j } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
                    [T, A] = c.useState(""),
                    [I, _] = c.useState(D.dJq),
                    { balance: P, isFetching: R, error: k } = (0, eP.W)(),
                    { isSubmitting: N, responseMessage: M, redeemVirtualCurrency: L } = (0, eP.Q)(),
                    [O, V] = c.useState(D.dJq),
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
                                            ? (0, u.jsx)(eg.A, { guild: o, analyticsLocation: {} })
                                            : (0, u.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(en.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, u.jsx)(E.Anchor, {
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
                                                    value: h,
                                                    onChange: (e) => b(e),
                                                }),
                                                (0, u.jsx)(es.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: h.length < 1,
                                                    children: (0, u.jsx)(H.$, {
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
                                    shouldShow: y,
                                    children: (0, u.jsx)(H.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: y,
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
                                                (0, u.jsx)(g.E, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                R
                                                    ? (0, u.jsx)("div", {
                                                          className: B.wG,
                                                          children: (0, u.jsx)(ec.y, { type: ec.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, u.jsxs)("div", {
                                                          className: B.dB,
                                                          children: [
                                                              null !== k &&
                                                                  (0, u.jsxs)(g.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          k.message,
                                                                      ],
                                                                  }),
                                                              (0, u.jsx)(F.Gy, {
                                                                  balance: P ?? 0,
                                                                  balanceWidgetMode: F.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, u.jsx)(eo.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: O,
                                            onChange: (e) => V(e),
                                        }),
                                        (0, u.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: N,
                                            onClick: () => L(O, (0, d.A)()),
                                        }),
                                        null != M && (0, u.jsx)(g.E, { variant: "text-sm/normal", children: M }),
                                    ],
                                }),
                                (0, u.jsx)(er.c, {}),
                                (0, u.jsxs)(eu.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, u.jsx)(ei.l, {
                                            label: "Premium Server Subscription For",
                                            value: v,
                                            options: r,
                                            onSelectionChange: C,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, u.jsx)(g.E, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, u.jsx)(eE.H, {
                                            guildId: v?.id,
                                            children: (0, u.jsx)(eD, { selectedGuildForGuildSub: v }),
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
                                                    onChange: (e) => _(e),
                                                }),
                                            ],
                                        }),
                                        (0, u.jsx)(H.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, eC.openIAPPurchaseModal)({
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
                                                            checkoutFlow: eh.CL.PREMIUM_APPS_OTP_CHECKOUT,
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
                                                onClick: () => (0, S.YG)(),
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
                                (0, u.jsxs)(g.E, {
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
                                                        key: h.pn.PLAN_SELECT,
                                                        renderStep: () => (0, u.jsx)(eO, {}),
                                                        renderHeader: () =>
                                                            (0, u.jsx)(ee.rQ, {
                                                                title: "Checkout Error Boundary Test",
                                                            }),
                                                    },
                                                    {
                                                        key: h.pn.REVIEW,
                                                        renderStep: () =>
                                                            (0, u.jsx)(eS.dZ, {
                                                                children: (0, u.jsx)(eV, {
                                                                    errorType: a,
                                                                    errorHandlingBehavior: l,
                                                                }),
                                                            }),
                                                    },
                                                ];
                                            function i() {
                                                return (0, ed.closeModal)(eL);
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
                                                { onCloseRequest: i, onCloseCallback: i, modalKey: eL },
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
                                (0, u.jsx)(g.E, {
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
    eF = l(758836);
function eW() {
    return {
        options: [
            { value: eF.ck["0"], label: `${eF.ck["0"]} (Cat Ears)` },
            { value: eF.ck["1"], label: `${eF.ck["1"]} (Angry)` },
            { value: eF.ck["2"], label: `${eF.ck["2"]} (Aurora Bundle)` },
            { value: eF.ck["3"], label: `${eF.ck["3"]} (Heartbloom)` },
            { value: eF.ck["4"], label: `${eF.ck["4"]} (Aurora Dreams)` },
            { value: eF.ck["5"], label: `${eF.ck["5"]} (Sakura Ink)` },
            { value: eF.ck["6"], label: `${eF.ck["6"]} (Of Ink and Steel)` },
            { value: eF.ck["7"], label: `${eF.ck["7"]} (Twilight)` },
            { value: eF.ck["8"], label: `${eF.ck["8"]} (Red Dragon)` },
            { value: eF.ck["9"], label: `${eF.ck["9"]} (Aurora)` },
        ],
        defaultValue: eF.ck["0"],
    };
}
let e$ = [
        {
            key: h.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: h.pn.REVIEW, text: "Add Payment Steps Placeholder" }),
            options: { useBreadcrumbLabel: () => U.intl.string(U.t.QBnNHq) },
        },
        {
            key: h.pn.CONFIRM,
            renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: h.pn.REVIEW, text: "Confirm Step Placeholder" }),
            options: { useBreadcrumbLabel: () => U.intl.string(U.t.QBnNHq) },
        },
        {
            key: h.pn.PLAN_SELECT,
            renderStep: (e) => (0, u.jsx)(N, { ...e, originStep: h.pn.REVIEW, text: "Plan Select Step Placeholder" }),
            options: {
                useBreadcrumbLabel: () => U.intl.string(U.t.QBnNHq),
                modalSizeGetter: (e) => {
                    let { isGift: t } = e;
                    return t ? "xl" : "md";
                },
            },
        },
    ],
    ez = [{ key: h.pn.REVIEW, renderStep: (e) => (0, u.jsx)(eU.p, { ...e }) }, ...e$],
    eY = [{ key: h.pn.REVIEW, renderStep: (e) => (0, u.jsx)(eB.E, { ...e }) }, ...e$];
function eK() {
    return (0, u.jsx)(g.E, { variant: "text-sm/normal", children: "Purchase button is disabled for this story" });
}
let eq = { isGift: { label: "Is Gift", type: "boolean", defaultValue: !1 } },
    eJ = eW(),
    eX = {
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
                } = k({ skuId: t, isGift: l, applicationId: D.FYj }),
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
            skuId: { label: "SKU ID", type: "select", options: eJ.options, defaultValue: eJ.defaultValue },
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
                } = k({ skuId: t, isGift: l, applicationId: eN.tv }),
                d = eG.Ay.isPremiumSku(t),
                p = d ? eN.zE[t] : void 0,
                [m, h] = c.useState(p),
                b = c.useRef(!1);
            c.useEffect(() => {
                b.current || null == p || ((b.current = !0), h(p));
            }, [p, m]);
            let { isLoadedForPremiumSKUs: x, selectedPlan: g } = (function (e) {
                let { subscriptionPlanId: t } = e;
                c.useEffect(() => {
                    _.A.isLoadedForPremiumSKUs() || v.h.wait(() => (0, S.zS)());
                }, []);
                let l = (0, f.bG)([_.A], () => (null != t ? _.A.get(t) : null));
                return {
                    isLoadedForPremiumSKUs: (0, f.bG)([_.A], () => _.A.isLoadedForPremiumSKUs()),
                    selectedPlan: l,
                };
            })({ subscriptionPlanId: m });
            return !o && null != s && x && d && null != g
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
    e7 = l(287809),
    e4 = l(403362),
    e8 = l(784018),
    e9 = l(668025);
let e5 = {
    name: "Clip Embed Overlay",
    id: "clip-embed-overlay",
    component: function (e) {
        let { videoUrl: t, orientation: l, title: a, autoplay: n } = e,
            i = (0, et.yK)([e6.A, e7.default], () =>
                e6.A.getFriendIDs()
                    .map((e) => e7.default.getUser(e))
                    .filter(e4.Vq),
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
                        parentTransitionState: y.ip.ENTERED,
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
                                (0, u.jsx)(g.E, {
                                    variant: "text-sm/semibold",
                                    color: "text-default",
                                    children: "Participants",
                                }),
                                (0, u.jsxs)(g.E, {
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
                                  children: (0, u.jsx)(g.E, {
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
                                                  (0, u.jsx)(g.E, {
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
    th = l(425713),
    tb = l(277135);
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
    tg = l(116833),
    tE = l(720879);
let ty = {
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
var tv = l(624716),
    tC = l(872725);
let tS = { name: "Expressive Progress", component: tp.A, id: "expressive-progress", controls: {} },
    tj = { name: "Tab Tooltip", component: tv.A, id: "tab-tooltip", controls: {} },
    tT = {
        title: "Nitro Components",
        stories: [
            {
                name: "AnimatedBorderCard",
                component: function (e) {
                    return (0, u.jsx)("div", {
                        style: { maxWidth: 400 },
                        children: (0, u.jsx)(
                            tC.A,
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
                                        (0, u.jsx)(g.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: "This is sample card content using design system tokens.",
                                        }),
                                        (0, u.jsx)(g.E, {
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
            tS,
            {
                name: "Mini Premium Tooltip",
                component: function (e) {
                    let { badgeId: t, earnedOnText: l, variant: a } = e,
                        n = c.useRef(null),
                        i = c.useRef(null),
                        r = tx[t],
                        o = (0, th.I)(r).standard,
                        s = eN.VD[r].rarity,
                        d = (
                            U.intl.string(U.t.lG6a5x) +
                            " " +
                            U.intl.string(eN.VD[r].nameUnformatted)
                        ).toLocaleUpperCase();
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(g.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                children:
                                    'Hover or focus a badge to see the mini tooltip. Renders as `role="tooltip"` \u2014 title and body are announced via `aria-describedby` injected on the trigger by MiniPremiumTooltip.',
                            }),
                            (0, u.jsxs)("div", {
                                className: tb.k3,
                                children: [
                                    (0, u.jsx)("span", {
                                        className: tb.yU,
                                        children: (0, u.jsx)(tm.K, {
                                            targetElementRef: n,
                                            title: d,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: d,
                                            rarity: s,
                                            variant: a,
                                            children: (0, u.jsx)(E.Anchor, {
                                                href: "#",
                                                ref: n,
                                                "aria-label": U.intl.string(U.t["JEiq/c"]),
                                                children: (0, u.jsx)("img", {
                                                    alt: " ",
                                                    "aria-hidden": !0,
                                                    src: o,
                                                    className: tb.Jv,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, u.jsx)("span", {
                                        className: tb.yU,
                                        children: (0, u.jsx)(tm.K, {
                                            targetElementRef: i,
                                            title: d,
                                            body: l,
                                            badgeImage: o,
                                            badgeName: d,
                                            rarity: s,
                                            variant: a,
                                            children: (0, u.jsx)(E.Anchor, {
                                                href: "#",
                                                ref: i,
                                                "aria-label": U.intl.string(U.t["JEiq/c"]),
                                                children: (0, u.jsx)("img", {
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
                            progressCirclePercent: s,
                            progressCircleUrgency: d,
                            delay: p,
                            size: m,
                            gradientColor: h,
                            estimatedTooltipHeight: b,
                        } = e,
                        x = c.useRef(null),
                        f = c.useRef(null),
                        E = c.useMemo(
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
                        y = null != E ? (0, th.I)(E).standard : null,
                        v = c.useMemo(() => {
                            if (null == E) return "";
                            let e = eN.VD[E];
                            return (
                                U.intl.string(U.t.lG6a5x) +
                                " " +
                                U.intl.string(e.nameUnformatted)
                            ).toLocaleUpperCase();
                        }, [E]),
                        C = c.useMemo(() => {
                            if (!a || null == y) return;
                            let e = r
                                ? { progressCircleText: o, progressCirclePercent: s, progressCircleUrgency: d }
                                : {};
                            return {
                                type: "dynamic",
                                component: tg.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                                aspectRatio: "6/4",
                                props: { src: y, alt: v, ...e },
                            };
                        }, [a, y, v, r, o, s, d]),
                        S = {
                            title: t,
                            body: l,
                            graphic: C,
                            actions: c.useMemo(() => {
                                if (n) return [{ text: "Got it", variant: "primary" }];
                            }, [n]),
                            delay: p,
                            size: m,
                            gradientColor: c.useMemo(() => ("string" == typeof h && h in ty ? ty[h] : h), [h]),
                            estimatedTooltipHeight: b,
                        };
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(g.E, {
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
                                    (0, u.jsx)(tE.L, {
                                        targetElementRef: x,
                                        ...S,
                                        children: (0, u.jsx)(H.$, { buttonRef: x, variant: "primary", text: "Left" }),
                                    }),
                                    (0, u.jsx)(tE.L, {
                                        targetElementRef: f,
                                        ...S,
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
    t_ = l(97483),
    tP = l(750338),
    tR = l(387640),
    tk = l(576765),
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
                badgeText: h,
                badgeVariant: b,
                isReducedMotion: x,
                previewImageStyle: f,
            } = e;
            function g() {
                return (0, tA.P0)((0, tI.o)("CTA clicked!", t_.Ck.SUCCESS));
            }
            let E = tM[c],
                y =
                    "descriptionCta" === a
                        ? { descriptionCta: n, onClick: g }
                        : "actions" === a
                          ? {
                                actions: [
                                    {
                                        text: i,
                                        variant: r,
                                        onClick: g,
                                        ...(null != E ? { icon: E, iconPosition: d } : {}),
                                    },
                                    ...(o.length > 0 ? [{ text: o, variant: s, onClick: g }] : []),
                                ],
                            }
                          : {};
            return (0, u.jsx)("div", {
                children: (0, u.jsx)(tP.A, {
                    name: tR.NI.EMOJIS,
                    title: t,
                    description: l,
                    previewImage: tk.A,
                    videoUrl: tN.A,
                    shouldLoadVideo: !0,
                    index: p,
                    size: m,
                    badgeText: h.length > 0 ? h : void 0,
                    badgeVariant: b,
                    isReducedMotion: x,
                    previewImageStyle: f,
                    ...y,
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
                defaultValue: tR.A0.LARGE,
                options: [
                    { label: "Small", value: tR.A0.SMALL },
                    { label: "Medium", value: tR.A0.MEDIUM },
                    { label: "Large", value: tR.A0.LARGE },
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
                defaultValue: tR.Tb.CONTAINED,
                options: [
                    { label: "Contained", value: tR.Tb.CONTAINED },
                    { label: "Overlay", value: tR.Tb.OVERLAY },
                ],
            },
        },
    };
var tL = l(398590),
    tO = l(920050),
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
                            onCtaClick: () => (0, tA.P0)((0, tI.o)("CTA Clicked!", t_.Ck.SUCCESS)),
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
                    (0, tL.jH)(), (0, tw.pX)(D.BVt.ME), setTimeout(() => (0, tw.pX)(l), 200);
                },
            }),
            (0, u.jsxs)(g.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                style: { userSelect: "text" },
                children: [
                    "IDs from PerkCardIds.tsx:",
                    (0, u.jsx)("ul", {
                        style: { margin: "4px 0 0", paddingLeft: 24, listStyleType: "disc", columns: 3, columnGap: 24 },
                        children: Object.values(tO).map((e) => (0, u.jsx)("li", { children: e }, e)),
                    }),
                ],
            }),
        ],
    });
}
var tG = l(349738),
    tH = l(339984);
let tF = [
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
    t$ = [
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
var tJ = l(324861),
    tX = l(536637),
    tZ = l.n(tX),
    tQ = l(531260),
    t0 = l(87719),
    t1 =
        (((a = {})[(a.NONE = 0)] = "NONE"),
        (a[(a.IN_PROGRESS = 1)] = "IN_PROGRESS"),
        (a[(a.COMPLETED = 2)] = "COMPLETED"),
        (a[(a.CLAIMED = 3)] = "CLAIMED"),
        (a[(a.INELIGIBLE = 4)] = "INELIGIBLE"),
        (a[(a.ELIGIBLE = 5)] = "ELIGIBLE"),
        a);
let t2 = (0, l(945810).mj)({
    name: "2026-07-orbchievements",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var t3 = l(636537),
    t6 = l(913122);
async function t7(e) {
    v.h.wait(() => {
        v.h.dispatch({ type: "ORB_CHALLENGE_CLAIM", achievementIdentifier: e });
    });
    try {
        let t = await t3.Bo.post({ url: D.Rsh.ORB_USER_CHALLENGE_CLAIM(e), rejectWithError: !1 });
        return (
            v.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_SUCCESS", achievementIdentifier: e, response: t.body }), t.body
        );
    } catch (l) {
        let t = l instanceof t6.LG ? l : new t6.LG(l);
        v.h.dispatch({ type: "ORB_CHALLENGE_CLAIM_FAIL", achievementIdentifier: e, error: t });
    }
}
async function t4(e) {
    v.h.wait(() => {
        v.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH" });
    });
    try {
        let t = await t3.Bo.get({ url: D.Rsh.ORB_USER_CHALLENGES_LIST, rejectWithError: !1 });
        return (
            v.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_SUCCESS", response: t.body }),
            null != e && e(t.body),
            t.body
        );
    } catch (t) {
        let e = t instanceof t6.LG ? t : new t6.LG(t);
        v.h.dispatch({ type: "ORB_CHALLENGES_LIST_FETCH_FAIL", error: e });
    }
}
function t8(e) {
    return {
        achievementIdentifier: e.achievement_identifier,
        title: e.title,
        orbRewardAmount: e.reward_amount,
        achievementStatus: e.status,
    };
}
let t9 = new Set([null, t1.NONE, t1.IN_PROGRESS, t1.ELIGIBLE, t1.COMPLETED]);
function t5() {
    return {
        challenges: [],
        isFetchingChallenges: !1,
        hasFetchedChallenges: !1,
        fetchChallengesError: null,
        isClaimingChallengeMap: {},
        claimChallengeErrorMap: {},
        orbRewardMultiplier: null,
    };
}
class le extends et.Ay.Store {
    static displayName = "OrbChallengesStore";
    state = t5();
    constructor() {
        super(v.h, {
            ORB_CHALLENGES_LIST_FETCH: (e) => this.handleOrbChallengesFetchStart(e),
            ORB_CHALLENGES_LIST_FETCH_SUCCESS: (e) => this.handleOrbChallengesFetchSuccess(e),
            ORB_CHALLENGES_LIST_FETCH_FAIL: (e) => this.handleOrbChallengesFetchFail(e),
            ORB_CHALLENGE_CLAIM: (e) => this.handleOrbChallengeClaim(e),
            ORB_CHALLENGE_CLAIM_SUCCESS: (e) => this.handleOrbChallengeClaimSuccess(e),
            ORB_CHALLENGE_CLAIM_FAIL: (e) => this.handleOrbChallengeClaimFail(e),
            USER_DISCORD_ACHIEVEMENT_STATE_UPDATE: (e) => this.handleUserAchievementStateUpdate(e),
            LOGIN_SUCCESS: () => this.handleReset(),
        });
    }
    handleReset() {
        this.state = t5();
    }
    handleOrbChallengesFetchStart(e) {
        let {} = e;
        (this.state.isFetchingChallenges = !0), (this.state.fetchChallengesError = null);
    }
    handleOrbChallengesFetchSuccess(e) {
        let { response: t } = e;
        (this.state.challenges = t.achievements.map(t8)),
            (this.state.orbRewardMultiplier = t.orb_multiplier),
            (this.state.hasFetchedChallenges = !0),
            (this.state.isFetchingChallenges = !1);
    }
    handleOrbChallengesFetchFail(e) {
        let { error: t } = e;
        (this.state.fetchChallengesError = t), (this.state.isFetchingChallenges = !1);
    }
    handleOrbChallengeClaim(e) {
        let { achievementIdentifier: t } = e;
        (this.state.isClaimingChallengeMap[t] = !0), (this.state.claimChallengeErrorMap[t] = null);
    }
    handleOrbChallengeClaimSuccess(e) {
        let { achievementIdentifier: t, response: l } = e;
        (this.state.isClaimingChallengeMap[t] = !1),
            (this.state.claimChallengeErrorMap[t] = null),
            (this.state.challenges = this.state.challenges.map((e) => (e.achievementIdentifier === t ? t8(l) : e)));
    }
    handleOrbChallengeClaimFail(e) {
        let { achievementIdentifier: t, error: l } = e;
        (this.state.isClaimingChallengeMap[t] = !1), (this.state.claimChallengeErrorMap[t] = l);
    }
    handleUserAchievementStateUpdate(e) {
        let { payload: t } = e;
        return "achievement_completed" === t.type && t4(), !1;
    }
    get orbRewardMultiplier() {
        return this.state.orbRewardMultiplier;
    }
    get challenges() {
        return this.state.challenges;
    }
    get challengesForOrbWallet() {
        return this.state.challenges.filter((e) => t9.has(e.achievementStatus));
    }
    get hasFetchedChallenges() {
        return this.state.hasFetchedChallenges;
    }
    get isFetchingChallenges() {
        return this.state.isFetchingChallenges;
    }
    get fetchChallengesError() {
        return this.state.fetchChallengesError;
    }
}
let lt = new le();
var ll = l(503698),
    la = l.n(ll),
    ln = l(577473),
    li = l(34188),
    lr = l(303136),
    lo = l(626031),
    ls = l(628284),
    lu = l(320448),
    lc = l(742967),
    ld = l(642529),
    lp = l(137484),
    lm = l(427483);
function lh(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === t1.COMPLETED || t === t1.CLAIMED,
        n = (0, u.jsx)("div", {
            className: la()(lp.TK, { [lp.AM]: a }),
            children: (0, u.jsx)(lc.x, {
                className: lp.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: lm.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a ? (0, u.jsx)("div", { className: lp.Zs, children: n }) : n;
}
function lb(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: a,
            achievementStatus: n,
            onClaim: i,
            onDiscoveryClick: r,
        } = e,
        [o, s] = c.useState(!1),
        [d, p] = c.useState(!1);
    async function m() {
        null != i && (p(!0), await i(t).finally(() => p(!1)));
    }
    let h = null != r && n === t1.NONE,
        b = la()(lp.of, { [lp.D8]: o, [lp.or]: h }),
        x = (0, u.jsxs)(u.Fragment, {
            children: [
                (0, u.jsxs)("div", {
                    className: lp.Ub,
                    children: [
                        (0, u.jsx)(lh, { achievementStatus: n, animationState: o ? "on" : "off" }),
                        (0, u.jsxs)("div", {
                            className: lp.Du,
                            children: [
                                (0, u.jsx)(g.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, u.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: U.intl.format(
                                        n === t1.COMPLETED ? ld.default.mOsACs : ld.default.aBVuHF,
                                        { orbAmount: a },
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: a, handleClaim: n, hasDiscoveryClick: i } = t,
                        r = (0, u.jsx)(H.$, {
                            variant: "expressive",
                            size: "md",
                            text: U.intl.string(ld.default.WmfVjs),
                            loading: a,
                            onClick: n,
                        });
                    return a
                        ? r
                        : e === t1.COMPLETED
                          ? l
                              ? r
                              : (0, u.jsx)(ls.y, {
                                    color: tf.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": U.intl.string(ld.default.k6h2J3),
                                })
                          : i
                            ? (0, u.jsx)(lu._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(n, { isHovered: o, isClaiming: d, handleClaim: m, hasDiscoveryClick: h }),
            ],
        }),
        f = c.useMemo(() => ({ onMouseEnter: () => s(!0), onMouseLeave: () => s(!1) }), []);
    return h
        ? (0, u.jsx)(e0.D, { className: b, ...f, onClick: r, "aria-label": l, children: x })
        : (0, u.jsx)("div", { className: b, ...f, children: x });
}
var lx = l(653877),
    lf = l(268920),
    lg = l(633217);
function lE() {
    return (0, u.jsx)("div", {
        className: lx.s,
        children: (0, u.jsx)(lr.A, { src: lg.A, fallbackImage: lf.A, className: lx.Cb }),
    });
}
function ly(e) {
    let { nitroMultiplier: t, nitroRenewalDate: l } = e,
        a = null != l ? -1 * tZ()().diff(l, "days") : null;
    return (0, u.jsxs)("div", {
        className: lx.mT,
        children: [
            null != t &&
                1 !== t &&
                (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsxs)("div", {
                            className: lx.lh,
                            children: [
                                (0, u.jsx)(o.t, { size: "xxs", color: "white" }),
                                (0, u.jsxs)(g.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-overlay-light",
                                    children: [t, "x"],
                                }),
                            ],
                        }),
                        (0, u.jsx)("span", {
                            "aria-hidden": "true",
                            children: (0, u.jsx)(g.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: "\u2219",
                            }),
                        }),
                    ],
                }),
            (0, u.jsx)(g.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: U.intl.format(ld.default["+kdkTi"], { days: a }),
            }),
        ],
    });
}
function lv(e) {
    let { orbBalance: t, headerTagsContent: l } = e;
    return (0, u.jsxs)("div", {
        className: lx.SZ,
        children: [
            (0, u.jsx)(lE, {}),
            (0, u.jsxs)("div", {
                children: [
                    (0, u.jsx)(lo.t, {
                        value: t,
                        onValueChange: D.tEg,
                        onValueReached: D.tEg,
                        targetTotalCounterTime: 1500,
                        className: lx.xc,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    l,
                ],
            }),
        ],
    });
}
function lC(e) {
    let { isFullWidth: t = !1, className: l } = e;
    return (0, u.jsx)(er.c, { className: la()(lx.ts, { [lx.KU]: t }, l) });
}
function lS(e) {
    let { title: t, challenges: l, onClaim: a } = e;
    return (0, u.jsxs)("div", {
        className: lx.E6,
        children: [
            (0, u.jsx)(g.E, { variant: "text-sm/semibold", color: "text-muted", className: lx.zu, children: t }),
            l.map((e, t) =>
                (0, u.jsxs)(
                    c.Fragment,
                    {
                        children: [
                            t > 0 ? (0, u.jsx)(lC, { className: lx.Fu }) : null,
                            (0, u.jsx)(lb, { ...e, onClaim: a }),
                        ],
                    },
                    e.achievementIdentifier,
                ),
            ),
        ],
    });
}
function lj(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, u.jsxs)("div", {
        className: lx.W,
        children: [
            (0, u.jsx)(H.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: ln.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, u.jsx)(H.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: li.U, type: "icon" },
                fullWidth: !0,
                onClick: l,
            }),
        ],
    });
}
function lT(e) {
    let { orbBalance: t, headerTagsContent: l, renderPrimaryCard: a, orbChallengesCard: n, orbWalletFooter: i } = e,
        [r, o] = c.useState(!1);
    return (0, u.jsxs)("div", {
        className: la()(lx.ql, lx.Ut),
        children: [
            (0, u.jsx)(lv, { orbBalance: t, headerTagsContent: l }),
            r ? null : a({ onClose: () => o(!0) }),
            (0, u.jsx)(lC, { isFullWidth: !0 }),
            n,
            i,
        ],
    });
}
var lA = l(408278),
    lI = l(789645),
    l_ = l(696292),
    lP = l(839534),
    lR = l(617986);
function lk() {
    (0, lP.Cz)({ tab: eF.G2.ORBS, analyticsLocations: [], analyticsSource: p.A.ORBS_BALANCE_MENU });
}
function lN() {
    (0, lR.mA)({ fromContent: l_.u.ORBS_BALANCE_MENU });
}
var lM = l(600676);
function lD(e) {
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
        className: lM.Vm,
        children: [
            null != s
                ? (0, u.jsx)("div", {
                      className: lM.Fx,
                      children: (0, u.jsx)(lA.K, {
                          icon: lI.P,
                          "aria-label": U.intl.string(U.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: s,
                      }),
                  })
                : null,
            null != l && (0, u.jsx)("img", { alt: a, src: l, className: lM.db }),
            (0, u.jsxs)("div", {
                children: [
                    (0, u.jsx)(g.E, { variant: "text-md/bold", color: "text-default", className: lM.L8, children: t }),
                    null != n &&
                        (0, u.jsx)(g.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            className: lM.Gd,
                            children: n,
                        }),
                    (0, u.jsx)(H.$, { text: i, size: "sm", icon: r, onClick: o }),
                ],
            }),
        ],
    });
}
function lL(e) {
    let { onClose: t } = e;
    return (0, u.jsx)(lD, {
        title: U.intl.string(ld.default.o6s7yg),
        imageUrl: l(105644),
        imageAlt: U.intl.string(ld.default.qa1xyr),
        subTextDescription: U.intl.string(ld.default.HACucK),
        buttonText: U.intl.string(ld.default.o6s7yg),
        buttonIcon: { asset: li.U, type: "icon" },
        onCtaClick: lk,
        onClose: t,
    });
}
var lO = l(123576);
let lV = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: t1.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: t1.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: t1.NONE,
        orbRewardAmount: 100,
    },
];
async function lw(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function lU(e) {
    let { userHasPremium: t, orbBalance: l } = e;
    return (0, u.jsx)(lT, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, u.jsx)(ly, { nitroMultiplier: 1.2, nitroRenewalDate: tZ()().add(16, "day").toDate() })
            : (0, u.jsx)(lG, {}),
        renderPrimaryCard: (e) => {
            let { onClose: t } = e;
            return (0, u.jsx)(lL, { onClose: t });
        },
        orbChallengesCard: (0, u.jsx)(lS, { title: U.intl.string(ld.default.H6Ny8N), challenges: lV, onClaim: lw }),
        orbWalletFooter: (0, u.jsx)(lj, { onQuestsClick: lN, onShopClick: lk }),
    });
}
function lB() {
    return (0, t0.x)();
}
function lG() {
    return (0, u.jsxs)(e0.D, {
        className: lO.X,
        onClick: lB,
        children: [
            (0, u.jsx)(o.t, { size: "xxs", color: tf.A.colors.TEXT_BRAND }),
            (0, u.jsx)(g.E, {
                variant: "text-xs/medium",
                color: "text-brand",
                children: U.intl.string(ld.default["pJz0/A"]),
            }),
        ],
    });
}
function lH() {
    let e = (0, et.bG)([ek.A], () => ek.A.getPremiumTypeSubscription()),
        t = (0, tQ.A)(),
        { orbRewardMultiplier: l } = (0, et.cf)([lt], () => ({ orbRewardMultiplier: lt.orbRewardMultiplier }));
    if (null != e) {
        let a = (0, eG.fj)(e, t);
        return (0, u.jsx)(ly, { nitroMultiplier: l, nitroRenewalDate: a });
    }
    return (0, u.jsx)(lG, {});
}
function lF() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (function (e) {
        let t = (0, c.useRef)(!1),
            {
                challengesForOrbWallet: l,
                hasFetchedChallenges: a,
                isFetchingChallenges: n,
                fetchChallengesError: i,
            } = (0, et.cf)([lt], () => ({
                challengesForOrbWallet: lt.challengesForOrbWallet,
                hasFetchedChallenges: lt.hasFetchedChallenges,
                isFetchingChallenges: lt.isFetchingChallenges,
                fetchChallengesError: lt.fetchChallengesError,
            })),
            r = null != e && e.shouldFetch;
        return (
            (0, c.useEffect)(() => {
                !(r && !t.current) ||
                    a ||
                    n ||
                    null != i ||
                    t4(function () {
                        t.current = !0;
                    });
            }, [a, n, r, i]),
            { challengesForOrbWallet: l, hasFetchedChallenges: a, isFetchingChallenges: n, refetch: t4 }
        );
    })({ shouldFetch: !0 });
    return t ? (0, u.jsx)(lS, { title: U.intl.string(ld.default.H6Ny8N), challenges: e, onClaim: t7 }) : null;
}
function lW() {
    let { balance: e } = (0, eP.W)();
    return !(function (e) {
        let { location: t } = e;
        return t2.useConfig({ location: t }).enabled;
    })({ location: "StatefulOrbWallet" })
        ? null
        : (0, u.jsx)(lT, {
              orbBalance: e,
              headerTagsContent: (0, u.jsx)(lH, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return (0, u.jsx)(lL, { onClose: t });
              },
              orbChallengesCard: (0, u.jsx)(lF, {}),
              orbWalletFooter: (0, u.jsx)(lj, { onQuestsClick: lN, onShopClick: lk }),
          });
}
let l$ = {
    title: "Orb Wallet",
    stories: [
        {
            name: "Example Orb Wallet",
            id: "orb-wallet-stateless",
            component: function (e) {
                let { userHasPremium: t, orbBalance: l } = e;
                return (0, u.jsx)(lU, { userHasPremium: t, orbBalance: l });
            },
            controls: {
                userHasPremium: { label: "User Has Nitro", type: "boolean", defaultValue: !0 },
                orbBalance: { label: "Balance", type: "number", defaultValue: 4240 },
            },
        },
        { name: "User (Stateful) Orb Wallet", id: "orb-wallet-stateful", component: () => (0, u.jsx)(lW, {}) },
    ],
};
var lz = l(877062);
let lY = {
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
                                        lz.A.launch(t, (e) => {
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
    },
    lK = {
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
var lq = l(295405),
    lJ = l(71532),
    lX = l(818348),
    lZ = l(336899);
let lQ = eW();
async function l0(e) {
    return (await t3.Bo.post({ url: D.Rsh.ORDER_SIGN(e), rejectWithError: !0 })).body;
}
async function l1(e) {
    return (await t3.Bo.get({ url: D.Rsh.ORDER_UPDATE(e), rejectWithError: !0 })).body;
}
async function l2(e, t) {
    await t3.Bo.patch({
        url: D.Rsh.ORDER_UPDATE(e),
        body: { billing_facet: { payment_source_id: t } },
        rejectWithError: !0,
    });
}
function l3() {
    let [e, t] = c.useState(!1),
        [l, a] = c.useState(!1),
        [n, i] = c.useState(null),
        [r, o] = c.useState(null),
        [s, d] = c.useState(lQ.defaultValue),
        [p, m] = c.useState(null),
        h = (0, et.bG)([lq.A], () => lq.A.paymentSources),
        b = (0, et.bG)([lq.A], () => lq.A.hasFetchedPaymentSources),
        x = (0, et.bG)([lq.A], () => lq.A.defaultPaymentSourceId);
    c.useEffect(() => {
        b || (0, em.$o)();
    }, [b]),
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
            l2(r, p)
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
    let E = c.useMemo(
        () =>
            Object.values(h).map((e) => {
                var t;
                let l,
                    a = null != (l = lK[(t = e.type)]) ? l() : String(t);
                if (e.type === lX.he.CARD && "last4" in e) {
                    let t = e.last4 ?? "",
                        l = e.brand ?? "Unknown";
                    a += ` - ****${t} (${l})`;
                } else null != e.brand && "" !== e.brand && (a += ` - ${e.brand}`);
                return { id: e.id, value: e.id, label: a };
            }),
        [h],
    );
    async function y() {
        if (null == p || "" === p) return void i("Please select a payment source first.");
        if (null == s || "" === s || s === D.dJq) return void i("Please select a SKU ID.");
        t(!0), i(null), o(null);
        try {
            let e = await (0, C.Aj)(s, p, "US", !1, {
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
    async function v() {
        if (null == r || "" === r) return void i("No order ID available. Please create an order first.");
        a(!0);
        try {
            let e = await l0(r);
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
                            let n = await (0, lJ.Cv)();
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
                                      (n = (await l1(t)).status),
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
                                  let e = (await l1(t)).status;
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
                    (0, u.jsx)(g.E, {
                        variant: "text-md/normal",
                        className: lZ.cW,
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
                                    options: lQ.options,
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
                                        options: E,
                                        placeholder: "Select a payment source...",
                                        disabled: !b,
                                        label: "Payment Source",
                                        clearable: !0,
                                    }),
                                    !b &&
                                        (0, u.jsx)(g.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            className: lZ.cW,
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
                                onClick: y,
                                disabled: e || null == p || "" === p || null == s || "" === s || s === D.dJq,
                            }),
                            (0, u.jsx)(H.$, {
                                variant: "secondary",
                                size: "sm",
                                text: l ? "Signing Order..." : "Sign Order",
                                onClick: v,
                                disabled: l || null == r || "" === r,
                            }),
                        ],
                    }),
                    null != n &&
                        (0, u.jsx)("div", {
                            className: lZ.cW,
                            children: n
                                .split("\n")
                                .map((e, t) =>
                                    (0, u.jsx)(
                                        g.E,
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
var l6 = l(150934),
    l7 = l(36167);
let l4 = [
        { id: "tier_2", value: eN.gD.PREMIUM_MONTH_TIER_2, label: "Nitro (Monthly)" },
        { id: "tier_1", value: eN.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic (Monthly)" },
        { id: "tier_0", value: eN.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic (Monthly)" },
    ],
    l8 = [
        { id: "meta_quest", value: R.uH.META_QUEST_WEB_REDIRECT_CHECKOUT, label: "Meta Quest Web Redirect Checkout" },
    ];
function l9() {
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
function l5(e) {
    let { flowType: t } = e,
        [l, a] = c.useState(eN.gD.PREMIUM_MONTH_TIER_2),
        [n, i] = c.useState(!1),
        { error: r, handleSuccess: o, handleFailure: s } = l9(),
        p = c.useCallback(() => {
            let e = (0, d.A)();
            (0, l7.OD)({ planId: l, isGift: n, loadId: e, flowType: t }, o, s);
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
                        options: l4,
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
            null != r && (0, u.jsx)(g.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: r }),
        ],
    });
}
function ae(e) {
    let { flowType: t } = e,
        { error: l, handleSuccess: a, handleFailure: n } = l9(),
        i = c.useCallback(() => {
            if (null == t) return;
            let e = (0, d.A)(),
                l = D.BVt.BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE(t, e);
            (0, l7.xq)(l, a, n);
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
            null != l && (0, u.jsx)(g.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function at(e) {
    let { flowType: t } = e,
        [l, a] = c.useState(""),
        { error: n, handleSuccess: i, handleFailure: r } = l9(),
        o = c.useCallback(() => {
            if (0 === l.length || null == t) return;
            let e = (0, d.A)(),
                a = D.BVt.BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE(l, void 0, e, t);
            (0, l7.xq)(a, i, r);
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
            null != n && (0, u.jsx)(g.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var al = l(643909),
    aa = l(103557),
    an = l(558179);
let ai = {
        DEFAULT: "Express Checkout Element - Default (No Config)",
        GPAY_FILTERED: "Express Checkout Element - Filtered for Google Pay",
        APPLE_PAY_FILTERED: "Express Checkout Element - Filtered for Apple Pay",
        APPLE_AND_GPAY_DISABLED: "Express Checkout Element - Google Pay and Apple Pay Disabled",
        CONFIGURABLE: "Express Checkout Element - Configurable",
    },
    ar = {
        GPAY_FILTERED: { wallets: { googlePay: "always", applePay: "never" } },
        APPLE_PAY_FILTERED: { wallets: { googlePay: "never", applePay: "always" } },
        APPLE_AND_GPAY_DISABLED: { wallets: { googlePay: "never", applePay: "never" } },
    },
    ao = { appearance: { theme: "flat", variables: { spacingUnit: "12px", borderRadius: "36px" } } },
    as = {
        buttonType: { googlePay: "pay", applePay: "book" },
        buttonTheme: { applePay: "black", googlePay: "white" },
        buttonHeight: 40,
    };
function au(e) {
    return void 0 !== e ? JSON.stringify(e, null, 2) : "undefined";
}
function ac() {
    let [e, t] = c.useState(au(ao)),
        [l, a] = c.useState(ao),
        [n, i] = c.useState(au(as)),
        [r, o] = c.useState(as),
        [s, d] = c.useState(null),
        [p, m] = c.useState(
            (0, u.jsx)(tG.a8, {
                errorLabel: ai.CONFIGURABLE,
                elementOptions: ao,
                children: (0, u.jsx)(al.ExpressCheckoutElement, {
                    onConfirm: (e) => {
                        console.log("ExpressCheckoutElement onConfirm event: ", e);
                    },
                    options: as,
                }),
            }),
        );
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsxs)(g.E, {
                variant: "text-md/normal",
                className: lZ.cW,
                children: [
                    "Try configuring options for the Stripe Element container and Express Checkout Element here. Not all settings will change the appearance or functionality of the checkout button - use this to figure out the customizability of the Express Checkout Element.",
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)("br", {}),
                    "Start by changing the `borderRadius` or `buttonHeight` as a test!",
                ],
            }),
            (0, u.jsxs)(g.E, {
                variant: "text-md/normal",
                className: lZ.cW,
                children: [
                    (0, u.jsx)("b", { children: "elements.options:" }),
                    (0, u.jsx)("br", {}),
                    (0, u.jsx)(tG.Tu, {
                        href: "https://github.com/stripe/stripe-js/blob/master/types/stripe-js/elements-group.d.ts#L632",
                    }),
                ],
            }),
            (0, u.jsx)("div", {
                className: lZ.PC,
                children: (0, u.jsx)(aa.f, {
                    placeholder: "Stripe Elements Container Options",
                    showCharacterCount: !0,
                    value: e,
                    onChange: t,
                    rows: 7,
                }),
            }),
            (0, u.jsxs)(g.E, {
                variant: "text-md/normal",
                className: lZ.cW,
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
                className: lZ.PC,
                children: (0, u.jsx)(aa.f, {
                    placeholder: "Stripe Express Checkout Element Options",
                    showCharacterCount: !0,
                    value: n,
                    onChange: i,
                    rows: 7,
                }),
            }),
            null != s && (0, u.jsx)(g.E, { variant: "text-md/normal", color: "text-feedback-critical", children: s }),
            (0, u.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lZ.Ut,
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
                                            (0, u.jsxs)(g.E, {
                                                variant: "text-md/normal",
                                                className: lZ.cW,
                                                children: ["Element updated at: ", new Date().toString()],
                                            }),
                                            (0, u.jsx)(tG.a8, {
                                                errorLabel: ai.CONFIGURABLE,
                                                elementOptions: t,
                                                children: (0, u.jsx)(al.ExpressCheckoutElement, {
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
            (0, u.jsx)(g.E, { variant: "text-md/normal", className: lZ.cW, children: "Current Element Options:" }),
            (0, u.jsx)(g.E, {
                variant: "text-md/normal",
                children: (0, u.jsx)(an.A, { className: lZ.wD, children: `\`\` ${au(l)} \`\`` }),
            }),
            (0, u.jsx)(g.E, {
                variant: "text-md/normal",
                className: lZ.cW,
                children: "Current Express Checkout Element Options:",
            }),
            (0, u.jsx)(g.E, {
                variant: "text-md/normal",
                children: (0, u.jsx)(an.A, { className: lZ.wD, children: `\`\` ${au(r)} \`\`` }),
            }),
            p,
        ],
    });
}
var ad = l(683071),
    ap = l(942340),
    am = l(211528),
    ah = l(87725),
    ab = l(783327),
    ax = l(626584),
    af = l(667648),
    ag = l(624479),
    aE = l(957565),
    ay = l(247329);
function av(e) {
    let { label: t, value: l } = e;
    return (0, u.jsxs)("div", {
        className: ay.I,
        children: [
            (0, u.jsxs)(g.E, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, u.jsx)(g.E, { variant: "text-sm/normal", children: l }),
            (0, u.jsx)(lA.K, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: ag.CopyIcon,
                onClick: () => (0, aE.C)(l),
            }),
        ],
    });
}
function aC(e) {
    let { children: t, stepConfigs: l, bodyClassName: a } = e;
    return (0, u.jsx)(j.M, {
        stepConfigs: l,
        skuIDs: [],
        activeSubscription: null,
        children: (0, u.jsx)("div", { className: a, children: t }),
    });
}
var aS = l(887072);
let aj = new ax.A("PaymentElement.web.stories"),
    aT = {
        key: h.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, u.jsx)("div", {}),
        options: { renderHeader: !1, hideDefaultModalBody: !0 },
    };
function aA() {
    let { elementsAppearanceOptions: e } = (0, ap.E)();
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
                    return (0, u.jsx)(av, { label: t, value: l }, t);
                }),
            }),
        ],
    });
}
function aI(e) {
    let [t, l] = c.useState(0);
    return (0, u.jsx)(j.M, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, c.createElement)(a_, { ...e, key: t, forceRemount: () => l(t + 1) }),
    });
}
function a_(e) {
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
        p = (0, ab.S)(),
        { setLinkWalletEnabled: m, linkWalletEnabled: b } = (0, ah.t4)((e) => ({
            setLinkWalletEnabled: e.setLinkWalletEnabled,
            linkWalletEnabled: e.linkWalletEnabled,
        }));
    c.useEffect(() => {
        b !== t && (m(t), d());
    }, [t, b, m, d]);
    let { stripePaymentElementProps: x, stripeAddressElementProps: f } = (0, af.wD)({
            step: h.pn.PAYMENT_ELEMENT,
            handleStepChange: D.tEg,
            onBillingAddressChange: D.tEg,
            logger: aj,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0,
        }),
        {
            elementsOptions: g,
            isLoading: E,
            setupError: y,
            customPaymentMethodIdsToSourceTypes: v,
        } = (0, ap.p)({
            onSetupError: (e) => {
                aj.info("Stripe Payment Element options setup error: ", e);
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
    return E || null != y || null == p
        ? (0, u.jsx)(af.eR, {})
        : (0, u.jsxs)("div", {
              children: [
                  (0, u.jsx)("div", {
                      style: { marginBottom: 16 },
                      children: (0, u.jsx)(ad.w, {
                          type: "info",
                          children:
                              "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access.",
                      }),
                  }),
                  (0, u.jsxs)("div", {
                      className: aS.ny,
                      children: [
                          (0, u.jsx)(aA, {}),
                          (0, u.jsx)(aC, {
                              stepConfigs: [aT],
                              children: (0, u.jsx)("div", {
                                  className: la()(aS.o6, "joined-payment-address-elements" === s ? aS.fF : aS.u1),
                                  children: (0, u.jsxs)(al.Elements, {
                                      stripe: p,
                                      options: g,
                                      children: [
                                          "stripe-address-element" === s
                                              ? (0, u.jsx)("div", {
                                                    className: B.R,
                                                    children: (0, u.jsx)(am.Wf, {
                                                        ...x,
                                                        customPaymentMethodIdsToSourceTypes: v,
                                                        step: h.pn.PAYMENT_ELEMENT,
                                                    }),
                                                })
                                              : (0, u.jsx)(am.Wf, {
                                                    ...x,
                                                    customPaymentMethodIdsToSourceTypes: v,
                                                    step: h.pn.PAYMENT_ELEMENT,
                                                }),
                                          ("joined-payment-address-elements" === s || "stripe-address-element" === s) &&
                                              (0, u.jsx)(am.KS, {
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
let aP = {
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
    aR = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: function (e) {
            return (0, u.jsx)(aI, { ...e, storyType: "joined-payment-address-elements" });
        },
        controls: { ...aP },
    },
    ak = {
        name: "Stripe Payment Element",
        id: "stripe-payment-element",
        component: function (e) {
            return (0, u.jsx)(aI, { ...e, storyType: "stripe-payment-element" });
        },
        controls: { ...aP },
    },
    aN = {
        name: "Stripe Address Element",
        id: "stripe-address-element",
        component: function (e) {
            return (0, u.jsx)(aI, { ...e, storyType: "stripe-address-element" });
        },
        controls: { ...aP },
    };
var aM = l(786826);
let aD = {
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
                        helperText: h,
                    } = e,
                    [b, x] = c.useState("");
                return (0, u.jsx)("div", {
                    style: { maxWidth: 480, padding: 24 },
                    children: (0, u.jsx)(aM.f, {
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
                        helperText: h,
                        value: b,
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
var aL = l(435558),
    aO = l(96337),
    aV = l(997101),
    aw = l(597770),
    aU = l(278416),
    aB = l(480642),
    aG = l(936477),
    aH = l(812745);
let aF = {
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
                [h, b] = c.useState(0);
            return (0, u.jsxs)("div", {
                className: B.Cd,
                children: [
                    (0, u.jsx)(aG.q7, {
                        selection: h,
                        onChange: b,
                        planOptions: [
                            {
                                id: 0,
                                title: (0, u.jsx)(aG.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: l,
                                primaryText: a,
                                subtext: i ? (0, u.jsx)(aG.Lo, { strikethrough: r, price: n }) : void 0,
                            },
                            {
                                id: 1,
                                title: (0, u.jsx)(aG.ec, { size: "sm", color: "text-strong", premiumType: t }),
                                titleDescriber: o,
                                primaryText: s,
                                subtext: p ? (0, u.jsx)(aG.Lo, { strikethrough: m, price: d }) : void 0,
                            },
                        ],
                    }),
                    (0, u.jsxs)(g.E, { variant: "text-sm/normal", children: ["Selected plan index: ", h] }),
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
    aW = {
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
                    item1Amount: h,
                    item1Tooltip: b,
                    item1LabelSubText: x,
                    item1SubText: f,
                    item1SubTextHasStrikethrough: g,
                    item2Label: E,
                    item2Amount: y,
                    item2FormatWithoutRate: v,
                    hasDiscount: C,
                    discountLabel: S,
                    discountAmount: j,
                } = e,
                T = p
                    ? [
                          {
                              id: 1,
                              label: m,
                              amount: h,
                              tooltip: "" !== b ? b : void 0,
                              labelSubText: "" !== x ? x : void 0,
                              subText: "" !== f ? f : void 0,
                              subTextHasStrikethrough: g,
                          },
                          ...("" !== E
                              ? [
                                    {
                                        id: 2,
                                        label: E,
                                        amount: y,
                                        icon: (0, u.jsx)(o.t, { size: "xs" }),
                                        formatWithoutRate: v,
                                    },
                                ]
                              : []),
                          ...(C ? [{ id: 3, label: S, amount: j }] : []),
                      ]
                    : [];
            return (0, u.jsx)("div", {
                className: B.SG,
                children: (0, u.jsx)(aG._D, {
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
    a$ = { "nitro-wheel": o.t, gift: aw.GiftIcon, orbs: r.C },
    az = aO.A.map((e) => ({ id: e.alpha2, value: e.alpha2, label: e.name })),
    aY = {
        name: "Modal: Unified Checkout Stateless Modal",
        id: "unified-checkout-stateless-modal",
        component: function (e) {
            let { primaryButtonText: t, primaryButtonIcon: l, headerBadgeHasIcon: a, ...n } = e,
                i = a ? aU.TagIcon : void 0;
            return (0, u.jsxs)(en.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, u.jsx)(g.E, {
                        variant: "text-md/normal",
                        children: "Click the button below to open the Unified Checkout modal",
                    }),
                    (0, u.jsx)(H.$, {
                        variant: "primary",
                        text: "Open Unified Checkout Modal",
                        onClick: () =>
                            (0, ed.openModal)(
                                (e) =>
                                    (0, u.jsx)(aB.oH, {
                                        ...e,
                                        ...n,
                                        title: n.title,
                                        headerBadgeIcon: i,
                                        primaryButtonProps: {
                                            onClick: e.onClose,
                                            text: t,
                                            icon: "none" !== l ? a$[l] : void 0,
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
            countryCode: { label: "Country Code", type: "select", defaultValue: aV.d.US, options: az },
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
    aK = {
        purchaseButtonText: "Subscribe",
        totalDue: 999,
        renewalPrice: 1099,
        currency: D.Yri.USD,
        interval: eN.WT.MONTH,
        intervalCount: 1,
        startDate: new Date(),
    },
    aq = {
        [aG.I0.Subscription]: { type: aG.I0.Subscription, ...aK },
        [aG.I0.SubscriptionApplication]: { type: aG.I0.SubscriptionApplication, ...aK },
        [aG.I0.GuildProductOneTimePurchase]: { type: aG.I0.GuildProductOneTimePurchase, ...aK },
        [aG.I0.PremiumAppsOneTimePurchase]: { type: aG.I0.PremiumAppsOneTimePurchase, ...aK },
        [aG.I0.SubscriptionTrial]: { type: aG.I0.SubscriptionTrial, ...aK },
        [aG.I0.OrbsRedemption]: { type: aG.I0.OrbsRedemption, purchaseButtonText: "Redeem" },
        [aG.I0.Shop]: { type: aG.I0.Shop, purchaseButtonText: "Purchase" },
        [aG.I0.GiftNitro]: { type: aG.I0.GiftNitro, purchaseButtonText: "Buy Gift" },
        [aG.I0.GiftShop]: { type: aG.I0.GiftShop, purchaseButtonText: "Buy Gift" },
        [aG.I0.GiftGameShop]: {
            type: aG.I0.GiftGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
        [aG.I0.OrbsGameShop]: {
            type: aG.I0.OrbsGameShop,
            purchaseButtonText: "Buy Gift",
            applicationName: "Marvel Rivals",
            shouldAppendDisclaimer: !1,
        },
    },
    aJ = {
        title: "Unified Checkout",
        stories: [
            aY,
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
                            children: (0, u.jsx)(aG.Vm, { label: t, lineItems: n, currency: D.Yri.USD }),
                        })
                    );
                },
                controls: {
                    label: { label: "Label", type: "text", defaultValue: "Order Summary" },
                    hasDiscount: { label: "Has Discount", type: "boolean", defaultValue: !0 },
                    hasLineItems: { label: "Has Line Items", type: "boolean", defaultValue: !0 },
                },
            },
            aF,
            aW,
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
                        let m = e7.default.getCurrentUser(),
                            h = eR.A.getGuildsArray()[0];
                        return (0, u.jsx)(aG.f7, {
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
                                      ? { type: "guildSubscription", guild: h }
                                      : void 0,
                        });
                    }
                    return (0, u.jsxs)("div", {
                        className: B.SG,
                        children: [
                            p(aG.JW, "Nitro"),
                            p(aG.DH, "Nitro Basic"),
                            p(aG.a6, "Boost"),
                            p(aG.jw, "App"),
                            p(aG.oo, "Nitro Credit"),
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
                            { id: "visa-1234", label: "Visa ending in 1234", icon: aH.Be.VISA },
                            { id: "mastercard-5678", label: "Mastercard ending in 5678", icon: aH.Be.MASTERCARD },
                            { id: "paypal", label: "user@example.com", icon: aH.Be.PAYPAL },
                            { id: "amex-9012", label: "Amex ending in 9012", icon: aH.Be.AMEX },
                        ],
                        [i, r] = c.useState(n[0].id);
                    return (0, u.jsxs)("div", {
                        children: [
                            (0, u.jsx)(aG.v7, {
                                value: i,
                                options: n,
                                onChange: r,
                                onNew: aL.noop,
                                disabled: t,
                                error: l ? a : void 0,
                            }),
                            (0, u.jsxs)(g.E, {
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
                    return (0, u.jsx)(aG._P, {
                        variant: aq[t],
                        immediateDelivery: l ? { value: n, onChange: i } : void 0,
                        paymentSourceType: a ? D.hes.PAYSAFE_CARD : D.hes.CARD,
                    });
                },
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: aG.I0.Subscription,
                        options: [
                            { label: "Subscription", value: aG.I0.Subscription },
                            { label: "Subscription Trial", value: aG.I0.SubscriptionTrial },
                            { label: "Orbs Redemption", value: aG.I0.OrbsRedemption },
                            { label: "Shop", value: aG.I0.Shop },
                            { label: "Nitro Gift", value: aG.I0.GiftNitro },
                            { label: "Shop Gift", value: aG.I0.GiftShop },
                            { label: "Game Shop Gift", value: aG.I0.GiftGameShop },
                            { label: "Orbs Game Shop Gift", value: aG.I0.OrbsGameShop },
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
                            (0, u.jsx)(g.E, { variant: "text-sm/normal", children: "Stateless Component:" }),
                            (0, u.jsx)(aG.y, { onClick: D.tEg }),
                            (0, u.jsx)("br", {}),
                            (0, u.jsx)(g.E, { variant: "text-sm/normal", children: "Link with Modal:" }),
                            (0, u.jsx)(aG.Z4, { onComplete: D.tEg }),
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
                        children: (0, u.jsx)(aG.me, {
                            headingComponent: (0, u.jsx)(aG.ec, {
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
                    return (0, u.jsx)(aG.s7, { storeCountry: t });
                },
                controls: {
                    storeCountry: { label: "Store Country", type: "select", defaultValue: aV.d.US, options: az },
                },
            },
            {
                name: "Primitive: Store Relocation Notice",
                id: "checkout-store-relocation-notice",
                component: function (e) {
                    let { relocationCountry: t, relocationCurrencyCode: l, willForfeitGiftCardBalance: a } = e;
                    return (0, u.jsx)(aG.ch, {
                        relocationCountry: t,
                        relocationCurrencyCode: l,
                        willForfeitGiftCardBalance: a,
                    });
                },
                controls: {
                    relocationCountry: {
                        label: "Relocation Country",
                        type: "select",
                        defaultValue: aV.d.US,
                        options: az,
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
var aX = l(56359),
    aZ = l(734057),
    aQ = l(890497),
    a0 = l(711014),
    a1 = l(427262),
    a2 = l(198498);
function a3(e) {
    let { label: t, options: l, value: a, onChange: n } = e;
    return (0, u.jsx)(aQ.Z, {
        label: t,
        selectionMode: "single",
        options: l,
        value: a,
        onSelectionChange: n,
        placeholder: 0 === l.length ? "Waiting for client to connect\u2026" : void 0,
    });
}
function a6(e) {
    let { children: t } = e;
    return (0, u.jsx)("div", { className: a2.t, children: t });
}
let a7 = "default";
var a4 =
    (((n = {}).PAYMENTS = "payments"),
    (n.VIRTUAL_CURRENCY = "virtual-currency"),
    (n.NITRO = "nitro"),
    (n.IDENTITY = "identity"),
    n);
let a8 = ["Revenue Storybook", "Revenue Playground"],
    a9 = {
        id: "payments",
        name: "Payments",
        groups: [
            ew,
            aJ,
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
                                    (0, u.jsx)(g.E, {
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
                                    (0, u.jsx)(g.E, {
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
            { title: "Payment Elements", stories: [ak, aN, aR] },
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
                                    stepConfigs: L,
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
            { title: "Checkout Review Step", stories: [eX, eZ] },
            {
                title: "Miscellaneous",
                stories: [
                    lY,
                    {
                        name: "Redirect To Standalone",
                        id: "standalone-redirect",
                        component: function () {
                            let [e, t] = c.useState(!1),
                                [l, a] = c.useState(R.uH.META_QUEST_WEB_REDIRECT_CHECKOUT),
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
                                            (0, u.jsx)(l6.S, { label: "Enable Flow Type", checked: e, onChange: n }),
                                            (0, u.jsx)(ei.l, {
                                                label: "Flow Type",
                                                value: l,
                                                options: l8,
                                                onSelectionChange: a,
                                                selectionMode: "single",
                                                disabled: !e,
                                                fullWidth: !0,
                                            }),
                                        ],
                                    }),
                                    (0, u.jsx)(g.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: "Some link outs require enabling the flow type to work.",
                                    }),
                                    (0, u.jsx)(l5, { flowType: i }),
                                    (0, u.jsx)(ae, { flowType: i }),
                                    (0, u.jsx)(at, { flowType: i }),
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
                                children: (0, u.jsx)(l3, {}),
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
                                            label: ai.DEFAULT,
                                            children: (0, u.jsx)("div", {
                                                children: (0, u.jsx)(tG.a8, {
                                                    errorLabel: ai.DEFAULT,
                                                    children: (0, u.jsx)(al.ExpressCheckoutElement, {
                                                        onConfirm: (e) => {
                                                            console.log("ExpressCheckoutElement onConfirm event: ", e);
                                                        },
                                                        options: {},
                                                    }),
                                                }),
                                            }),
                                        }),
                                        ["GPAY_FILTERED", "APPLE_PAY_FILTERED", "APPLE_AND_GPAY_DISABLED"].map((e) => {
                                            let t = ai[e];
                                            return (0, u.jsx)(
                                                tG.Hq,
                                                {
                                                    label: t,
                                                    children: (0, u.jsxs)("div", {
                                                        children: [
                                                            (0, u.jsx)(g.E, {
                                                                variant: "text-md/normal",
                                                                className: lZ.cW,
                                                                children: "expressCheckoutElement.options:",
                                                            }),
                                                            (0, u.jsx)(g.E, {
                                                                variant: "text-md/normal",
                                                                children: (0, u.jsx)(an.A, {
                                                                    className: lZ.wD,
                                                                    children: `\`\`${au(ar[e])} \`\``,
                                                                }),
                                                            }),
                                                            (0, u.jsx)(tG.a8, {
                                                                errorLabel: t,
                                                                children: (0, u.jsx)(al.ExpressCheckoutElement, {
                                                                    onConfirm: (e) => {
                                                                        console.log(
                                                                            "ExpressCheckoutElement onConfirm event: ",
                                                                            e,
                                                                        );
                                                                    },
                                                                    options: ar[e],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e,
                                            );
                                        }),
                                        (0, u.jsx)(tG.Hq, { label: ai.CONFIGURABLE, children: (0, u.jsx)(ac, {}) }),
                                    ],
                                }),
                            });
                        },
                    },
                ],
            },
        ],
        tags: a8,
        IconComponent: i.d,
    },
    a5 = {
        id: "virtual-currency",
        name: "Virtual Currency",
        groups: [
            { title: "Balance Widget Pill", stories: [$, z] },
            {
                title: "Balance Widget",
                stories: [
                    {
                        name: "Balance Widget Card",
                        id: "balance-widget-card",
                        component: function (e) {
                            let { ctaText: t, linkText: l, linkPreText: a } = e;
                            return (0, u.jsx)(O.b, {
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
            l$,
            { title: "Orb Checkout", stories: [tq] },
            {
                title: "Orb Onboarding",
                stories: [
                    {
                        name: "Orb Onboarding Reset",
                        id: "orb-onboarding-reset",
                        component: function () {
                            let { resetOnboardingExperience: e } = (0, tJ.A)();
                            return (0, u.jsxs)("div", {
                                className: B.YG,
                                children: [
                                    (0, u.jsx)(g.E, {
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
        tags: a8,
        IconComponent: r.C,
    },
    ne = {
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
                                    let { default: e } = await Promise.all([l.e("978204"), l.e("422540")]).then(
                                        l.bind(l, 530951),
                                    );
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
                                            options: tF,
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
                                            options: t$,
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
                                a = (0, et.bG)([e7.default], () => e7.default.getCurrentUser()),
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
                            let e = (0, et.bG)([e7.default], () => e7.default.getCurrentUser()),
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
        tags: a8,
        IconComponent: o.t,
    },
    nt = {
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
                                a = (0, et.bG)([e7.default], () => e7.default.getCurrentUser());
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
                                a = (0, et.bG)([e7.default], () => e7.default.getCurrentUser());
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
                                a = (0, et.bG)([e7.default], () => e7.default.getCurrentUser());
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
            aD,
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
                                    (t = (0, et.bG)([e7.default], () => e7.default.getCurrentUser())),
                                    c.useMemo(() => {
                                        let l = e
                                            .map((e) => {
                                                let t = e7.default.getUser(e);
                                                return null == t ? null : { id: e, label: a1.Ay.getName(t), value: e };
                                            })
                                            .filter((e) => null != e)
                                            .sort((e, t) => e.label.localeCompare(t.label));
                                        return null == t
                                            ? l
                                            : [
                                                  { id: t.id, label: `${a1.Ay.getName(t)} (You)`, value: t.id },
                                                  ...l.filter((e) => e.value !== t.id),
                                              ];
                                    }, [e, t])),
                                n =
                                    ((l = (0, et.yK)([a0.Ay], () => a0.Ay.getFlattenedGuildIds())),
                                    c.useMemo(
                                        () =>
                                            l.reduce((e, t) => {
                                                let l = eR.A.getGuild(t);
                                                return null != l && e.push({ id: l.id, label: l.name, value: l.id }), e;
                                            }, []),
                                        [l],
                                    )),
                                [i, r] = c.useState(),
                                [o, s] = c.useState(a7),
                                d = i ?? a[0]?.value,
                                p = c.useMemo(
                                    () => [
                                        { id: "dm", label: "DM", value: "dm" },
                                        { id: a7, label: "Default (main profile)", value: a7 },
                                        ...n,
                                    ],
                                    [n],
                                ),
                                m = (0, et.bG)(
                                    [aZ.A],
                                    () =>
                                        null == d
                                            ? void 0
                                            : (aZ.A.getDMFromUserId(d) ?? aZ.A.getSortedPrivateChannels()[0]?.id),
                                    [d],
                                ),
                                h = o === a7 || "dm" === o ? void 0 : o,
                                b = "dm" === o ? m : void 0;
                            return (0, u.jsxs)(en.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, u.jsxs)(en.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        children: [
                                            (0, u.jsx)(a3, { label: "User", options: a, value: d, onChange: r }),
                                            (0, u.jsx)(a3, { label: "Context", options: p, value: o, onChange: s }),
                                        ],
                                    }),
                                    (0, u.jsx)(a6, {
                                        children:
                                            null != d && (0, u.jsx)(aX.G, { userId: d, guildId: h, channelId: b }),
                                    }),
                                ],
                            });
                        },
                        id: "user-profile-embed",
                    },
                ],
            },
        ],
        tags: a8,
        IconComponent: s.UserIcon,
    },
    nl = { playgroundBaseUrl: "revenue", collections: [a9, a5, ne, nt] };
