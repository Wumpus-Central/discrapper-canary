l.d(t, { _: () => Y });
var a = l(627968),
    n = l(64700),
    r = l(488428),
    i = l(835245),
    o = l(158954),
    s = l(311907),
    d = l(314116),
    c = l(435371),
    u = l(421380),
    p = l(397927),
    m = l(73825),
    h = l(793574),
    x = l(688810),
    b = l(323082),
    y = l(589078),
    f = l(541689),
    g = l(721923),
    v = l(300233),
    _ = l(599941),
    E = l(250253),
    C = l(937008),
    j = l(156312),
    S = l(166532),
    T = l(4630),
    A = l(546042),
    P = l(482132),
    k = l(615310),
    I = l(532794),
    R = l(216678),
    N = l(194509),
    M = l(761705),
    D = l(448362),
    O = l(71393),
    L = l(166403),
    B = l(652215),
    w = l(788868),
    V = l(985018),
    U = l(735499),
    G = l(681588);
function W(e) {
    let { selectedGuildForGuildSub: t } = e,
        l = (0, _.uk)(t?.id)[0];
    return null != t && null != l
        ? (0, a.jsx)("div", {
              children: l.subscription_listings_ids.map((e) =>
                  (0, a.jsx)(E.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let F = "checkout-error-boundary-test-modal",
    H = () => {
        let { setStep: e } = (0, k.Ay)();
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
function $(e) {
    let { errorType: t = "mock-error" } = e;
    if ("mock-error" === t) throw Error("Simulated error thrown inside a payment step");
    return "translation-key-error" === t
        ? (0, a.jsx)("div", {
              children: V.intl.format(U.default.cRB332, {
                  avatar: (0, a.jsx)("div", { children: "Sample Avatar" }),
                  nickname: (0, a.jsx)("div", { children: "Sample Nickname" }),
                  username: (0, a.jsx)("div", { children: "Sample Username" }),
              }),
          })
        : (0, a.jsx)("div", { children: "Unknown error type" });
}
let Y = {
    title: "Checkout",
    stories: [
        {
            name: "Checkout Test Panel",
            id: "checkout-test-panel",
            component: () => {
                let [e, t] = n.useState(w.pe.TIER_2),
                    [l, o] = n.useState(null),
                    d = (0, s.yK)([O.A], () => O.A.getGuildsArray()),
                    [_] = (0, s.yK)([L.A], () => [L.A.getPremiumSubscription()]),
                    E = d.map((e) => ({ id: e.id, value: e, label: e.name })),
                    [C, j] = n.useState(E.length > 0 ? E[0].value : null),
                    [S, A] = n.useState(""),
                    [P, k] = n.useState({ plan_id: w.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
                    V = "true" !== P.gift && null != _,
                    [U, F] = n.useState(E.length > 0 ? E[0].value : null),
                    { analyticsLocations: H } = (0, x.Ay)(h.A.PAYMENT_FLOW_TEST_PAGE),
                    [$, Y] = n.useState(""),
                    [z, q] = n.useState(B.dJq),
                    { balance: K, isFetching: J, error: X } = (0, M.W)(),
                    { isSubmitting: Z, responseMessage: Q, redeemVirtualCurrency: ee } = (0, M.Q)(),
                    [et, el] = n.useState(B.dJq),
                    [ea, en] = n.useState(""),
                    [er, ei] = n.useState(B.dJq);
                return (0, a.jsx)(x.f5, {
                    value: H,
                    children: (0, a.jsx)(p.IpV, {
                        className: G.XG,
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
                                                { id: "tier_2", value: w.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: w.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: w.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => t(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(N.A, {
                                            subscriptionTier: e,
                                            premiumModalAnalyticsLocation: {},
                                            color: u.XD.PRIMARY,
                                            look: u.pR.FILLED,
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
                                                { id: "tier_2", value: w.pe.TIER_2, label: "Nitro" },
                                                { id: "tier_1", value: w.pe.TIER_1, label: "Nitro Classic" },
                                                { id: "tier_0", value: w.pe.TIER_0, label: "Nitro Basic" },
                                                { id: "none", value: null, label: "None" },
                                            ],
                                            onSelectionChange: (e) => o(e),
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(p.Button, {
                                            variant: "primary",
                                            text: "Select Plan",
                                            onClick: () => (0, I.A)({ subscriptionTier: l, analyticsLocations: H }),
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
                                            options: E,
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
                                                            window.open(B.BVt.BILLING_PROMOTION_REDEMPTION(S));
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
                                                { id: "tier_2", value: w.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                                {
                                                    id: "tier_1",
                                                    value: w.gD.PREMIUM_MONTH_TIER_1,
                                                    label: "Nitro Classic",
                                                },
                                                {
                                                    id: "tier_0",
                                                    value: w.gD.PREMIUM_MONTH_TIER_0,
                                                    label: "Nitro Basic",
                                                },
                                            ],
                                            onSelectionChange: (e) => {
                                                k((t) => ({ ...t, plan_id: e }));
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
                                                k((t) => ({ ...t, gift: e }));
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
                                            window.open(B.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + r.stringify({ ...P }));
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
                                                          className: G.wG,
                                                          children: (0, a.jsx)(p.y$y, { type: p.tVU.SPINNING_CIRCLE }),
                                                      })
                                                    : (0, a.jsxs)("div", {
                                                          className: G.dB,
                                                          children: [
                                                              null !== X &&
                                                                  (0, a.jsxs)(p.Text, {
                                                                      variant: "text-sm/normal",
                                                                      children: [
                                                                          "Error fetching Virtual Currency Balance: ",
                                                                          X.message,
                                                                      ],
                                                                  }),
                                                              (0, a.jsx)(D.Gy, {
                                                                  balance: K ?? 0,
                                                                  balanceWidgetMode: D.k7.SELECTED,
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
                                            loading: Z,
                                            onClick: () => ee(et, (0, i.A)()),
                                        }),
                                        null != Q && (0, a.jsx)(p.Text, { variant: "text-sm/normal", children: Q }),
                                    ],
                                }),
                                (0, a.jsx)(p.cGx, {}),
                                (0, a.jsxs)(p.nVY, {
                                    label: "Creator Revenue",
                                    children: [
                                        (0, a.jsx)(p.l6P, {
                                            label: "Premium Server Subscription For",
                                            value: U,
                                            options: E,
                                            onSelectionChange: F,
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(p.Text, {
                                            variant: "text-md/semibold",
                                            children: "This is disabled because of a circular dependency",
                                        }),
                                        (0, a.jsx)(v.H, {
                                            guildId: U?.id,
                                            children: (0, a.jsx)(W, { selectedGuildForGuildSub: U }),
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
                                                    analyticsLocationObject: { page: B.liQ.IN_APP },
                                                    context: B.BRT.APP,
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
                                                            analyticsLocations: H,
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
                                                onClick: () => (0, m.YG)(),
                                            }),
                                            (0, a.jsx)(p.Button, {
                                                variant: "primary",
                                                text: "Reset SubscriptionStore",
                                                onClick: () => (0, b.uZ)(),
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
                    { analyticsLocations: n } = (0, x.Ay)(h.A.PAYMENT_FLOW_TEST_PAGE);
                return (0, a.jsx)(x.f5, {
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
                                                        (0, a.jsx)(P.dZ, { children: (0, a.jsx)($, { errorType: n }) }),
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
