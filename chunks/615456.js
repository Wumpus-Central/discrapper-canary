n.d(t, { PL: () => J, kO: () => $, r3: () => Q });
var l = n(477900),
    i = n(582128),
    r = n(166532),
    a = n(891197),
    s = n(69494),
    o = n(482132),
    u = n(801302);
function c() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(s.A, {}), (0, l.jsx)(o.dZ, { children: (0, l.jsx)(a.N, { className: u.D }) })],
    });
}
var d = n(830382),
    m = n(534514),
    p = n(834730),
    C = n(28863),
    h = n(696208),
    f = n(792996),
    E = n(203949);
function S(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)("div", {
            className: E.a,
            children: [
                (0, l.jsx)(m.D, { variant: "heading-xl/semibold", children: f.intl.string(f.t.Q03WWV) }),
                (0, l.jsxs)("p", {
                    children: [
                        (0, l.jsx)(p.E, { variant: "body-md/normal", children: f.intl.string(f.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(p.E, { variant: "body-md/normal", children: f.intl.string(f.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(p.E, {
                            variant: "body-md/normal",
                            children: [
                                f.intl.string(f.t.Paa4v4),
                                "\xa0",
                                n
                                    ? f.intl.string(f.t.StGVvC)
                                    : (0, l.jsx)(C.Anchor, { onClick: i, children: f.intl.string(f.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function g() {
    let e = i.useMemo(() => [{ variant: "primary", text: f.intl.string(f.t.g8vPzy), disabled: !0 }], []);
    return (0, l.jsx)(h.H, { actions: e });
}
var I = n(636950);
function y() {
    let [e, t] = i.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.A, {}),
            (0, l.jsx)(o.dZ, {
                children: (0, l.jsx)(S, {
                    className: I.r,
                    isEmailResent: e,
                    resendEmail: async function () {
                        (t(!0), await (0, d.lo)());
                    },
                }),
            }),
            (0, l.jsx)(o.UX, { children: (0, l.jsx)(g, {}) }),
        ],
    });
}
var A = n(164636),
    P = n(339048),
    v = n(428644),
    x = n(86379),
    _ = n(500597),
    T = n(590180),
    b = n(418200),
    N = n(20742),
    j = n(430993),
    R = n(969951),
    O = n(599062);
function M() {
    let { refreshCategories: e } = (0, R.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.rQ, { title: f.intl.string(f.t["p8+qtU"]) }),
            (0, l.jsx)(j.c, { children: (0, l.jsx)(O.h, { onRetry: e, errorOrigin: O.A.GIFT_MODAL }) }),
        ],
    });
}
var L = n(534479),
    k = n(121005),
    w = n(800471),
    D = n(169801),
    U = n(469778),
    G = n(120700),
    F = n(202475),
    B = n(31823),
    H = n(655857),
    W = n(427675),
    V = n(860215),
    Y = n(516106),
    K = n(652215),
    Z = n(682901);
function q(e) {
    let { handleStepChange: t } = e,
        { selectedSkuId: n, isExpressCheckoutEnabled: a } = (0, Y.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled("CheckoutOneTimePaymentPredicateStep"),
        })),
        { paymentSources: s, hasFetchedPaymentSources: o } = (0, F.j)(),
        { isOrderCreationEnabled: u } = (0, V._5)(),
        { application: c } = (0, B.V)(),
        d = (0, x.Hp)(),
        m = (0, W.gU)(),
        p = (0, W.Hu)(),
        { isGift: C } = (0, b.Pv)(),
        [h, f] = i.useState(!0),
        [E, S] = (0, A.yK)([T.A], () => [T.A.isFetchingCategories, T.A.error]);
    return (i.useEffect(() => {
        let e = null != c;
        p && o && e && f(E);
    }, [p, o, c, E]),
    i.useEffect(() => {
        if (h || d || null == n) return;
        let e = m[n];
        C &&
        (e?.productLine === K.EZt.COLLECTIBLES ||
            e?.productLine === K.EZt.APPLICATION ||
            e?.productLine === K.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length && (!a || u)
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [h, d, t, s, C, m, n, a, u]),
    h)
        ? (0, l.jsx)(L.A, {})
        : d
          ? (0, l.jsx)(_.oO, {})
          : null != S
            ? (0, l.jsx)(M, {})
            : null;
}
function z(e) {
    let { handleStepChange: t } = e,
        { hasPaymentSources: n, hasFetchedPaymentSources: a } = (0, F.j)({ shouldAllowFetchPaymentSources: !0 }),
        {
            selectedSkuId: s,
            setSelectedPlanId: o,
            activeSubscription: u,
            availableDefaultPlanId: c,
            isExpressCheckoutEnabled: d,
            premiumTenantParams: m,
            continueSessionToInitialStep: p,
            startingStepOverride: C,
            initialPlanId: h,
        } = (0, Y.t4)((e) => ({
            premiumTenantParams: e.getTenantParams(G.C.PREMIUM_CHECKOUT) ?? {},
            initialPlanId: e.getInitialPlanId(),
            continueSessionToInitialStep: e.getSharedCheckoutParams().continueSessionToInitialStep,
            startingStepOverride: e.getSharedCheckoutParams().startingStepOverride,
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            availableDefaultPlanId: e.getAvailableDefaultPlanId(),
            isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled("CheckoutSubscriptionPredicateStep"),
        })),
        { subscriptionTier: f } = m,
        E = (0, x.Hp)(),
        S = (0, k.A)(),
        { hasFetchedRelatedSubscriptionPlans: g, subscriptionPriceOptionsLoading: I } = (0, H.Jn)(),
        { isGift: y } = (0, b.Pv)(),
        T = (0, D.A)({ isGift: y, skuId: s }),
        N = !S || !g || I || !a,
        j = (0, A.bG)([U.A], () => U.A.applicationIdsFetched.has(Z.tv));
    (0, v.A)(
        "Payment Modal",
        N,
        5,
        {
            hasFetchedSubscriptions: S,
            hasFetchedSubscriptionPlans: g,
            subscriptionPriceOptionsLoading: I,
            hasFetchedPaymentSources: a,
        },
        { tags: { app_context: "billing" } },
    );
    let R = (0, Y.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: T }));
    return (i.useEffect(() => {
        (j || (0, P.LM)(Z.tv),
            N ||
                E ||
                (null == p || d
                    ? null != C
                        ? t(C)
                        : null != h
                          ? h !== Z.gD.PREMIUM_GROUP_MONTH || n
                              ? t(r.pn.REVIEW)
                              : t(r.pn.ADD_PAYMENT_STEPS)
                          : R
                            ? (o((0, w.x)(s, u, c)), t(r.pn.REVIEW))
                            : null != f
                              ? t(r.pn.PLAN_SELECT)
                              : t(r.pn.SKU_SELECT)
                    : t(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: p })));
    }, [d, p, C, u, E, j, h, N, t, f, s, o, T, c, y, R, n]),
    N)
        ? (0, l.jsx)(L.A, {})
        : E
          ? (0, l.jsx)(_.oO, {})
          : null;
}
let $ = { key: null, renderStep: (e) => (0, l.jsx)(q, { ...e }), options: { modalSizeGetter: () => "md" } },
    Q = { key: null, renderStep: (e) => (0, l.jsx)(z, { ...e }) },
    J = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(y, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(c, {}), options: { renderHeader: !0 } },
    ];
