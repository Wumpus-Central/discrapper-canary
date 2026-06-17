"use strict";
n.d(t, { L: () => L, z: () => w });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(339048),
    o = n(428644),
    l = n(86379),
    u = n(545075),
    c = n(31823),
    d = n(426398),
    _ = n(655857),
    h = n(427675),
    f = n(211159),
    p = n(590180),
    E = n(469778),
    m = n(937008),
    g = n(166532),
    A = n(20742),
    I = n(430993),
    T = n(315949),
    S = n(599062),
    y = n(375708);
function C() {
    let { refreshCategories: e } = (0, T.A)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(A.rQ, { title: y.intl.string(y.t["p8+qtU"]) }),
            (0, i.jsx)(I.c, { children: (0, i.jsx)(S.h, { onRetry: e, errorOrigin: S.A.GIFT_MODAL }) }),
        ],
    });
}
var N = n(121005),
    v = n(800471),
    R = n(169801),
    O = n(534479),
    b = n(652215),
    D = n(788868);
function L(e) {
    let { handleStepChange: t } = e,
        n = (0, f.t4)((e) => e.selectedSkuId),
        { paymentSources: a, hasFetchedPaymentSources: o } = (0, d.jm)(),
        { application: _ } = (0, c.V)(),
        E = (0, l.Hp)(),
        A = (0, h.gU)(),
        I = (0, h.Hu)(),
        { isGift: T } = (0, m.Pv)(),
        [S, y] = r.useState(!0),
        [N, v] = (0, s.yK)([p.A], () => [p.A.isFetchingCategories, p.A.error]);
    return (r.useEffect(() => {
        let e = null != _;
        I && o && e && y(N);
    }, [I, o, _, N]),
    r.useEffect(() => {
        if (S || E || null == n) return;
        let e = A[n];
        T &&
        (e?.productLine === b.EZt.COLLECTIBLES ||
            e?.productLine === b.EZt.APPLICATION ||
            e?.productLine === b.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(g.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(a).length
              ? t(g.pn.ADD_PAYMENT_STEPS)
              : t(g.pn.REVIEW);
    }, [S, E, t, a, T, A, n]),
    S)
        ? (0, i.jsx)(O.A, {})
        : E
          ? (0, i.jsx)(u.oO, {})
          : null != v
            ? (0, i.jsx)(C, {})
            : null;
}
function w(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: c, continueSessionToInitialStep: h } = e,
        { hasPaymentSources: p } = (0, d.jm)(),
        {
            selectedSkuId: A,
            setSelectedPlanId: I,
            activeSubscription: T,
            defaultPlanId: S,
            startedPaymentFlowWithPaymentSources: y,
        } = (0, f.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        C = (0, l.Hp)(),
        b = (0, N.A)(),
        { hasFetchedRelatedSubscriptionPlans: L, subscriptionPriceOptionsLoading: w } = (0, _.Jn)(),
        { isGift: M } = (0, m.Pv)(),
        P = (0, R.A)({ isGift: M, skuId: A }),
        x = !b || !L || w,
        k = (0, s.bG)([E.A], () => E.A.applicationIdsFetched.has(D.tv));
    return ((0, o.A)(
        "Payment Modal",
        x,
        5,
        { hasFetchedSubscriptions: b, hasFetchedSubscriptionPlans: L, subscriptionPriceOptionsLoading: w },
        { tags: { app_context: "billing" } },
    ),
    r.useEffect(() => {
        if ((k || (0, a.LM)(D.tv), x || C)) return;
        let e = (0, v.vT)({ isTrial: P, isGift: M, selectedSkuId: A, startedPaymentFlowWithPaymentSources: y });
        null != h
            ? c(g.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: h })
            : null != n
              ? n !== D.gD.PREMIUM_GROUP_MONTH || p
                  ? c(g.pn.REVIEW)
                  : c(g.pn.ADD_PAYMENT_STEPS)
              : e
                ? (I((0, v.xT)(A, T, S)), c(g.pn.REVIEW))
                : null != t
                  ? c(g.pn.PLAN_SELECT)
                  : c(g.pn.SKU_SELECT);
    }, [h, T, C, k, n, x, c, t, A, I, P, S, M, y, p]),
    x)
        ? (0, i.jsx)(O.A, {})
        : C
          ? (0, i.jsx)(u.oO, {})
          : null;
}
