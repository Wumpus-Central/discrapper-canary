l.d(t, { _: () => $ });
var a = l(627968),
    n = l(64700),
    r = l(488428),
    i = l(835245),
    o = l(158954),
    s = l(311907),
    u = l(314116),
    c = l(435371),
    d = l(421380),
    p = l(397927),
    m = l(384904),
    h = l(73825),
    x = l(793574),
    b = l(688810),
    y = l(589078),
    f = l(541689),
    g = l(721923),
    v = l(300233),
    E = l(599941),
    _ = l(250253),
    C = l(937008),
    j = l(156312),
    S = l(166532),
    T = l(4630),
    A = l(546042),
    P = l(482132),
    k = l(532794),
    R = l(216678),
    I = l(194509),
    N = l(761705),
    M = l(448362),
    D = l(71393),
    O = l(166403),
    L = l(652215),
    B = l(788868),
    w = l(985018),
    V = l(441425),
    U = l(895375);
function G(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, E.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, a.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(_.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let F = "checkout-error-boundary-test-modal",
    H = () => {
        let { setStep: e } = (0, j.P5)();
        return (0, a.jsx)(P.dZ, {
            children: (0, a.jsxs)(p.BJc, {
                direction: "vertical",
                gap: 8,
                fullWidth: !1,
                children: [
                    (0, a.jsx)(p.Text, {
                        variant: "text-sm/normal",
                        children:
                            "PaymentModal Step within PaymentContext loaded. Click below to navigate to a mock error step that will throw — the CheckoutErrorBoundary baked into PaymentContextProvider will catch it.",
                    }),
                    (0, a.jsx)(p.Button, {
                        variant: "primary",
                        text: "Navigate to Error Step",
                        onClick: () => e(S.pn.REVIEW),
                    }),
                ],
            }),
        });
    };
function W(e) {
    let { errorType: t = "mock-error" } = e;
    if ("mock-error" === t) throw Error("Simulated error thrown inside a payment step");
    return "translation-key-error" === t
        ? (0, a.jsx)("div", {
              children: w.intl.format(V.default.cRB332, {
                  avatar: (0, a.jsx)("div", { children: "Sample Avatar" }),
                  nickname: (0, a.jsx)("div", { children: "Sample Nickname" }),
                  username: (0, a.jsx)("div", { children: "Sample Username" }),
              }),
          })
        : (0, a.jsx)("div", { children: "Unknown error type" });
}
let $ = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = n.useState(B.pe.TIER_2),
                    [l, o] = n.useState(null),
                    u = (0, s.yK)([D.A], () => D.A.getGuildsArray()),
                    [E] = (0, s.yK)([O.A], () => [O.A.getPremiumSubscription()]),
                    _ = u.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [C, j] = n.useState(_.length > 0 ? _[0].value : null),
                    [S, A] = n.useState(""),
                    [P, w] = n.useState({ plan_id: B.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    V = "true" !== P.gift && null != E,
                    [F, H] = n.useState(_.length > 0 ? _[0].value : null),
                    { analyticsLocations: W } = (0, b.Ay)(x.A.PAYMENT_FLOW_TEST_PAGE),
                    [$, Y] = n.useState(""),
                    [z, q] = n.useState(L.dJq),
                    { balance: K, isFetching: J, error: X } = (0, N.W)(),
                    { isSubmitting: Q, responseMessage: Z, redeemVirtualCurrency: ee } = (0, N.Q)(),
                    [et, el] = n.useState(L.dJq),
                    [ea, en] = n.useState(""),
                    [er, ei] = n.useState(L.dJq);
                return (0, a.jsx)(b.f5, {
                    value: W,
                    children: (0, a.jsx)(p.IpV, {
                        className: U.XG,
                        children: (0, a.jsxs)(p.BJc, {
                            direction: "vertical",
                            gap: 24,
                            children: [
                                (0, a.jsxs)(p.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, a.jsx)(p.l6P, {
                                            label: "Gift",
                                            value: e,
                                            options: [
                                                { id: "tier_2", value: B.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: B.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: B.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(I.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: d.XD.PRIMARY,
                                            look: d.pR.FILLED,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.BJc, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "end",
                                    children: [
                                        (0, a.jsx)(p.l6P, {
                                            label: "Premium Select Plan",
                                            value: l,
                                            options: [
                                                { id: "tier_2", value: B.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: B.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: B.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => o(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, k.A)({ subscriptionTier: l, analyticsLocations: W }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(p.l6P, {
                                            label: "Boost",
                                            value: C,
                                            options: _,
                                            onSelectionChange: j,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        null != C
                                            ? (0, a.jsx)(g.A, { guild: C, analyticsLocation: {} })
                                            : (0, a.jsx)("div", { children: "No Guild to boost" }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsx)(p.MzZ, {
                                            href: "https://i.dis.gd/createPromo",
                                            children: "How to create promotion",
                                        }),
                                        (0, a.jsxs)(p.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(p.ksK, {
                                                    label: "Standalone: Trial Promotion Redemption",
                                                    placeholder: "Promotion Code",
                                                    value: S,
                                                    onChange: (e) => A(e),
                                                }),
                                                (0, a.jsx)(c.m_, {
                                                    text: "Need Promotion Code",
                                                    shouldShow: S.length < 1,
                                                    children: (0, a.jsx)(p.Button, {
                                                        variant: "primary",
                                                        text: "Open Link",
                                                        disabled: S.length < 1,
                                                        onClick: () => {
                                                            window.open(L.BVt.BILLING_PROMOTION_REDEMPTION(S));
                                                        },
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.nVY, {
                                    label: "Standalone: Gift/Subscription Purchase",
                                    children: [
                                        (0, a.jsx)(p.l6P, {
                                            label: "Plan",
                                            value: P.plan_id,
                                            options: [
                                                { id: "tier_2", value: B.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: B.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: B.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                w((t) => ({ ...t, plan_id: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(p.l6P, {
                                            label: "Type",
                                            value: P.gift,
                                            options: [
                                                { id: "gift", value: "true", label: "Gift" },
                                                { id: "not_gift", value: "false", label: "Not Gift" },
                                            ],
                                            onSelectionChange: (e) => {
                                                w((t) => ({ ...t, gift: e }));
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(c.m_, {
                                    text: "Already subscribed",
                                    shouldShow: V,
                                    children: (0, a.jsx)(p.Button, {
                                        variant: "primary",
                                        text: "Open Link",
                                        disabled: V,
                                        onClick: () => {
                                            window.open(L.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify({ ...P }));
                                        },
                                    }),
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.nVY, {
                                    label: "Redeem Virtual Currency for SKU",
                                    children: [
                                        (0, a.jsxs)(p.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(p.Text, {
                                                    variant: "text-sm/normal",
                                                    children: "Virtual Currency Balance:",
                                                }),
                                                J
                                                    ? (0, a.jsx)("div", {
                                                          className: U.wG,
                                                          children: (0, a.jsx)(p.y$y, { type: p.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, a.jsxs)("div", {
                                                          className: U.dB,
                                                          children: [
                                                              null !== X &&
                                                                  (0, a.jsxs)(p.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          X.message,
                                                                      ],
                                                                  }),
                                                              (0, a.jsx)(M.Gy, {
                                                                  balance: K ?? 0,
                                                                  balanceWidgetMode: M.k7.SELECTED,
                                                              }),
                                                          ],
                                                      }),
                                            ],
                                        }),
                                        (0, a.jsx)(p.ksK, {
                                            label: "SKU ID",
                                            placeholder: "SKU ID",
                                            value: et,
                                            onChange: (e) => el(e),
                                        }),
                                        (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            text: "Redeem Virtual Currency for SKU",
                                            loading: Q,
                                            onClick: () => ee(et, (0, i.A)()),
                                        }),
                                        null != Z && (0, a.jsx)(p.Text, { variant: "text-sm/normal", children: Z }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.nVY, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, a.jsx)(p.l6P, {
                                            label: "Premium Server Subscription For",
                                            value: F,
                                            options: _,
                                            onSelectionChange: H,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(p.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, a.jsx)(v.H, {
                                            guildId: F?.id,
                                            children: (0, a.jsx)(G, { selectedGuildForGuildSub: F }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: [
                                        (0, a.jsxs)(p.nVY, {
                                            label: "Activities & Application Payment Modals",
                                            children: [
                                                (0, a.jsx)(p.ksK, {
                                                    label: "Application Id",
                                                    placeholder: "Application Id",
                                                    value: $,
                                                    onChange: Y,
                                                }),
                                                (0, a.jsx)(p.ksK, {
                                                    label: "Sku Id",
                                                    placeholder: "Sku Id",
                                                    value: z,
                                                    onChange: (e) => q(e),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            text: "Open App Subs Modal for Activity",
                                            onClick: () =>
                                                (0, T.j)({
                                                    applicationId: $,
                                                    skuId: z,
                                                    openPremiumPaymentModal: () => !0,
                                                    analyticsLocations: [],
                                                    analyticsLocationObject: { page: L.liQ.IN_APP },
                                                    context: L.BRT.APP,
                                                }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsx)(p.BJc, {
                                    direction: "vertical",
                                    gap: 8,
                                    children: (0, a.jsx)(p.nVY, {
                                        label: "Standard Payment Modal Test",
                                        children: (0, a.jsxs)(p.BJc, {
                                            direction: "horizontal",
                                            gap: 8,
                                            align: "end",
                                            children: [
                                                (0, a.jsx)(p.ksK, {
                                                    label: "Application Id",
                                                    hideLabel: !0,
                                                    placeholder: "Application Id",
                                                    value: ea,
                                                    onChange: en,
                                                }),
                                                (0, a.jsx)(p.ksK, {
                                                    label: "SKU ID",
                                                    hideLabel: !0,
                                                    placeholder: "SKU ID",
                                                    value: er,
                                                    onChange: (e) => ei(e),
                                                }),
                                                (0, a.jsx)(p.Button, {
                                                    variant: "primary",
                                                    text: "Open Standard Payment Modal for SKU",
                                                    onClick: () =>
                                                        (0, R.A)({
                                                            applicationId: ea,
                                                            skuId: er,
                                                            analyticsLocations: W,
                                                            checkoutFlow: y.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                                        }),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsx)(p.nVY, {
                                    label: "Helpers",
                                    children: (0, a.jsxs)(p.BJc, {
                                        direction: "horizontal",
                                        gap: 8,
                                        align: "end",
                                        children: [
                                            (0, a.jsx)(p.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionPlanStore",
                                                onClick: () => (0, h.YG)(),
                                            }),
                                            (0, a.jsx)(p.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, m.uZ)(),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsx)(p.nVY, {
                                    label: "Dismissible Content Framework",
                                    children: (0, a.jsx)(p.Button, {
                                        variant: "primary",
                                        text: "Reset DismissibleContentFrameworkStore",
                                        onClick: () => (0, f.Ab)(),
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
                    { analyticsLocations: n } = (0, b.Ay)(x.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, a.jsx)(b.f5, {
                    value: n,
                    children: (0, a.jsxs)(p.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(p.Text, {
                                variant: "text-md/normal",
                                children: [
                                    "Opens a ",
                                    "<PaymentModal>",
                                    " with a step that throws to verify ",
                                    "<CheckoutErrorBoundary>",
                                    " catches it and logs to Sentry with checkout context.",
                                ],
                            }),
                            (0, a.jsx)(p.Button, {
                                variant: "primary",
                                text: "Open Error Boundary Test Modal",
                                onClick: () =>
                                    (function (e, t) {
                                        let { errorBoundaryVariant: l, errorType: n } = t,
                                            r = [
                                                {
                                                    key: S.pn.PLAN_SELECT,
                                                    renderStep: () => (0, a.jsx)(H, {}),
                                                    renderHeader: () =>
                                                        (0, a.jsx)(o.rQ0, { title: "Checkout Error Boundary Test" }),
                                                },
                                                {
                                                    key: S.pn.REVIEW,
                                                    renderStep: () =>
                                                        (0, a.jsx)(P.dZ, { children: (0, a.jsx)(W, { errorType: n }) }),
                                                },
                                            ],
                                            i = () => (0, p.OoC)(F);
                                        return (0, p.mMO)(
                                            async () => {
                                                let t;
                                                return (
                                                    "show-alert" === l
                                                        ? (t = (e) => {
                                                              i();
                                                              let t = "string" == typeof e ? e : e.message;
                                                              (0, u.A)({
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
                                                        return (0, a.jsx)(j.PaymentContextProvider, {
                                                            activeSubscription: null,
                                                            stepConfigs: r,
                                                            skuIDs: [],
                                                            shouldCrashOnUnhandledError: "crash-client" === l,
                                                            onUnhandledError: t,
                                                            children: (0, a.jsx)(C.dX, {
                                                                isGift: !1,
                                                                children: (0, a.jsx)(A.PaymentModal, {
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
                                            { onCloseRequest: i, onCloseCallback: i, modalKey: F },
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
