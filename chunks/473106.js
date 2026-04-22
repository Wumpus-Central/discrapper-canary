l.d(t, { _: () => el });
var a = l(627968),
    n = l(64700),
    r = l(488428),
    i = l(835245),
    o = l(20742),
    s = l(311907),
    d = l(314116),
    c = l(990078),
    u = l(862482),
    p = l(573613),
    m = l(331322),
    b = l(691885),
    h = l(404778),
    x = l(821609),
    y = l(349288),
    v = l(292666),
    g = l(270003),
    f = l(834730),
    _ = l(289873),
    E = l(192308),
    C = l(73825),
    S = l(793574),
    j = l(688810),
    T = l(323082),
    P = l(589078),
    I = l(541689),
    A = l(721923),
    k = l(300233),
    R = l(599941),
    N = l(250253),
    M = l(937008),
    D = l(156312),
    L = l(166532),
    w = l(4630),
    O = l(546042),
    B = l(482132),
    V = l(615310),
    U = l(532794),
    G = l(216678),
    H = l(194509),
    W = l(761705),
    $ = l(448362),
    F = l(71393),
    z = l(166403),
    Y = l(652215),
    q = l(788868),
    K = l(985018),
    X = l(705018),
    Z = l(439519);
function J(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, R.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, a.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(N.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let Q = "checkout-error-boundary-test-modal",
    ee = () => {
        let { setStep: e } = (0, V.Ay)();
        return (0, a.jsx)(B.dZ, {
            children: (0, a.jsxs)(m.B, {
                direction: "vertical",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, a.jsx)(f.E, {
                        variant: "text-sm/normal",
                        children:
                            "PaymentModal Step within PaymentContext loaded. Click below to navigate to a mock error step that will throw — the CheckoutErrorBoundary baked into PaymentContextProvider will catch it.",
                    }),
                    (0, a.jsx)(x.$, {
                        variant: "primary",
                        text: "Navigate to Error Step",
                        onClick: () => e(L.pn.REVIEW),
                    }),
                ],
            }),
        });
    };
function et(e) {
    let { errorType: t = "mock-error" } = e;
    if ("mock-error" === t) throw Error("Simulated error thrown inside a payment step");
    return "translation-key-error" === t
        ? (0, a.jsx)("div", {
              children: K.intl.format(X.default.cRB332, {
                  avatar: (0, a.jsx)("div", { children: "Sample Avatar" }),
                  nickname: (0, a.jsx)("div", { children: "Sample Nickname" }),
                  username: (0, a.jsx)("div", { children: "Sample Username" }),
              }),
          })
        : (0, a.jsx)("div", { children: "Unknown error type" });
}
let el = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = n.useState(q.pe.TIER_2),
                    [l, o] = n.useState(null),
                    d = (0, s.yK)([F.A], () => F.A.getGuildsArray()),
                    [E] = (0, s.yK)([z.A], () => [z.A.getPremiumSubscription()]),
                    R = d.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [N, M] = n.useState(R.length > 0 ? R[0].value : null),
                    [D, L] = n.useState(""),
                    [O, B] = n.useState({ plan_id: q.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    V = "true" !== O.gift && null != E,
                    [K, X] = n.useState(R.length > 0 ? R[0].value : null),
                    { analyticsLocations: Q } = (0, j.Ay)(S.A.PAYMENT_FLOW_TEST_PAGE),
                    [ee, et] = n.useState(""),
                    [el, ea] = n.useState(Y.dJq),
                    { balance: en, isFetching: er, error: ei } = (0, W.W)(),
                    { isSubmitting: eo, responseMessage: es, redeemVirtualCurrency: ed } = (0, W.Q)(),
                    [ec, eu] = n.useState(Y.dJq),
                    [ep, em] = n.useState(""),
                    [eb, eh] = n.useState(Y.dJq);
                return (0, a.jsx)(j.f5, {
                    value: Q,
                    children: (0, a.jsx)(p.Ip, {
                        className: Z.XG,
                        children: (0, a.jsxs)(m.B, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, a.jsxs)(m.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, a.jsx)(b.l, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: q.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: q.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: q.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(H.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: u.XD.PRIMARY,
                                            look: u.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(m.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, a.jsx)(b.l, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: q.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: q.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: q.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => o(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, U.A)({ subscriptionTier: l, analyticsLocations: Q }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(m.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(b.l, {
                                            label: "Boost",
                                            value: N,
                                            options: R,
                                            onSelectionChange: M,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != N
                                            ? (0, a.jsx)(A.A, { guild: N, analyticsLocation: {} })
                                            : (0, a.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(m.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(y.Anchor, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, a.jsxs)(m.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(v.k, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: D,
                                                    onChange: (e) => L(e),
                                                }),
                                                (0, a.jsx)(c.m, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: D.length < 1,
                                                    children: (0, a.jsx)(x.$, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: D.length < 1,
                                                        onClick: () => {
                                                            window.open(Y.BVt.BILLING_PROMOTION_REDEMPTION(D));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(g.n, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, a.jsx)(b.l, {
                                            label: "Plan",
                                            value: O.plan_id,
                                            options: [
                                                { id: "tier_2", value: q.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: q.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: q.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                B((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(b.l, {
                                            label: "Type",
                                            value: O.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                B((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.m, {
                                    text: "Already subscribed",
                                    shouldShow: V,
                                    children: (0, a.jsx)(x.$, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: V,
                                        onClick: () => {
                                            window.open(Y.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify({ ...O }));
                                        },
                                    }),
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(g.n, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, a.jsxs)(m.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                er
                                                    ? (0, a.jsx)("div", {
                                                          className: Z.wG,
                                                          children: (0, a.jsx)(_.y, { type: _.t.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, a.jsxs)("div", {
                                                          className: Z.dB,
                                                          children: [
                                                              null !== ei &&
                                                                  (0, a.jsxs)(f.E, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          ei.message,
                                                                      ],
                                                                  }),
                                                              (0, a.jsx)($.Gy, {
                                                                  balance: en ?? 0,
                                                                  balanceWidgetMode: $.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, a.jsx)(v.k, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: ec,
                                            onChange: (e) => eu(e),
                                        }),
                                        (0, a.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: eo,
                                            onClick: () => ed(ec, (0, i.A)()),
                                        }),
                                        null != es && (0, a.jsx)(f.E, { variant: "text-sm/normal", children: es }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(g.n, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, a.jsx)(b.l, {
                                            label: "Premium Server Subscription For",
                                            value: K,
                                            options: R,
                                            onSelectionChange: X,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(f.E, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, a.jsx)(k.H, {
                                            guildId: K?.id,
                                            children: (0, a.jsx)(J, { selectedGuildForGuildSub: K }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsxs)(m.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsxs)(g.n, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, a.jsx)(v.k, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: ee,
                                                    onChange: et,
                                                }),
                                                (0, a.jsx)(v.k, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: el,
                                                    onChange: (e) => ea(e),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, w.j)({
                                                    applicationId: ee,
                                                    skuId: el,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: Y.liQ.IN_APP },
                                                    context: Y.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsx)(m.B, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, a.jsx)(g.n, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, a.jsxs)(m.B, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(v.k, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: ep,
                                                    onChange: em,
                                                }),
                                                (0, a.jsx)(v.k, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: eb,
                                                    onChange: (e) => eh(e),
                                                }),
                                                (0, a.jsx)(x.$, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, G.A)({
                                                            applicationId: ep,
                                                            skuId: eb,
                                                            analyticsLocations: Q,
                                                            checkoutFlow: P.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsx)(g.n, {
                                    label: "Helpers",
                                    children: (0, a.jsxs)(m.B, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, a.jsx)(x.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, C.YG)(),
                                            }),
                                            (0, a.jsx)(x.$, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, T.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)(h.c, {}),
                                (0, a.jsx)(g.n, {
                                    label: "Dismissible Content Framework",
                                    children: (0, a.jsx)(x.$, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, I.Ab)(),
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
                    { analyticsLocations: n } = (0, j.Ay)(S.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, a.jsx)(j.f5, {
                    value: n,
                    children: (0, a.jsxs)(m.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(f.E, {
                                variant: "text-md/normal",
                                children: [
                                    "Opens a ",
                                    "<PaymentModal>",
                                    " with a step that throws to verify ",
                                    "<CheckoutErrorBoundary>",
                                    " catches it and logs to Sentry with checkout context.",
                                ],
                            }),
                            (0, a.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Error Boundary Test Modal",
                                onClick: () =>
                                    (function (e, t) {
                                        let { errorBoundaryVariant: l, errorType: n } = t,
                                            r = [
                                                {
                                                    key: L.pn.PLAN_SELECT,
                                                    renderStep: () => (0, a.jsx)(ee, {}),
                                                    renderHeader: () =>
                                                        (0, a.jsx)(o.rQ, { title: "Checkout Error Boundary Test" }),
                                                },
                                                {
                                                    key: L.pn.REVIEW,
                                                    renderStep: () =>
                                                        (0, a.jsx)(B.dZ, {
                                                            children: (0, a.jsx)(et, { errorType: n }),
                                                        }),
                                                },
                                            ],
                                            i = () => (0, E.closeModal)(Q);
                                        return (0, E.openModalLazy)(
                                            async () => {
                                                let t;
                                                return (
                                                    "show-alert" === l
                                                        ? (t = (e) => {
                                                              i();
                                                              let t = "string" == typeof e ? e : e.message;
                                                              (0, d.A)({
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
                                                    await Promise.resolve((n) => {
                                                        let { onClose: i, transitionState: o } = n;
                                                        return (0, a.jsx)(D.PaymentContextProvider, {
                                                            activeSubscription: null,
                                                            stepConfigs: r,
                                                            skuIDs: [],
                                                            shouldCrashOnUnhandledError: "crash-client" === l,
                                                            onUnhandledError: t,
                                                            children: (0, a.jsx)(M.dX, {
                                                                isGift: !1,
                                                                children: (0, a.jsx)(O.PaymentModal, {
                                                                    transitionState: o,
                                                                    onClose: i,
                                                                    initialPlanId: null,
                                                                    analyticsLocations: e,
                                                                }),
                                                            }),
                                                        });
                                                    })
                                                );
                                            },
                                            { onCloseRequest: i, onCloseCallback: i, modalKey: Q },
                                        );
                                    })(n, { errorBoundaryVariant: t, errorType: l }),
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
