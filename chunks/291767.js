n.d(t, { kO: () => q, r3: () => z, PL: () => $ });
var l = n(627968),
    i = n(64700),
    r = n(166532),
    a = n(702841),
    s = n(339048),
    o = n(428644),
    u = n(86379),
    c = n(682174),
    d = n(31823),
    p = n(426398),
    m = n(655857),
    C = n(427675),
    h = n(6938),
    E = n(590180),
    A = n(469778),
    f = n(937008),
    S = n(20742),
    y = n(430993),
    P = n(579151),
    T = n(599062),
    I = n(375708);
function _() {
    let { refreshCategories: e } = (0, P.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.rQ, { title: I.intl.string(I.t["p8+qtU"]) }),
            (0, l.jsx)(y.c, { children: (0, l.jsx)(T.h, { onRetry: e, errorOrigin: T.A.GIFT_MODAL }) }),
        ],
    });
}
var g = n(121005),
    v = n(800471),
    x = n(169801),
    N = n(534479),
    R = n(652215),
    b = n(202541);
function M(e) {
    let { handleStepChange: t } = e,
        n = (0, h.t4)((e) => e.selectedSkuId),
        { paymentSources: s, hasFetchedPaymentSources: o } = (0, p.jm)(),
        { application: m } = (0, d.V)(),
        A = (0, u.Hp)(),
        S = (0, C.gU)(),
        y = (0, C.Hu)(),
        { isGift: P } = (0, f.Pv)(),
        [T, I] = i.useState(!0),
        [g, v] = (0, a.yK)([E.A], () => [E.A.isFetchingCategories, E.A.error]);
    return (i.useEffect(() => {
        let e = null != m;
        y && o && e && I(g);
    }, [y, o, m, g]),
    i.useEffect(() => {
        if (T || A || null == n) return;
        let e = S[n];
        P &&
        (e?.productLine === R.EZt.COLLECTIBLES ||
            e?.productLine === R.EZt.APPLICATION ||
            e?.productLine === R.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [T, A, t, s, P, S, n]),
    T)
        ? (0, l.jsx)(N.A, {})
        : A
          ? (0, l.jsx)(c.oO, {})
          : null != v
            ? (0, l.jsx)(_, {})
            : null;
}
function O(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: d, continueSessionToInitialStep: C } = e,
        { hasPaymentSources: E } = (0, p.jm)(),
        {
            selectedSkuId: S,
            setSelectedPlanId: y,
            activeSubscription: P,
            defaultPlanId: T,
            startedPaymentFlowWithPaymentSources: I,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        _ = (0, u.Hp)(),
        R = (0, g.A)(),
        { hasFetchedRelatedSubscriptionPlans: M, subscriptionPriceOptionsLoading: O } = (0, m.Jn)(),
        { isGift: j } = (0, f.Pv)(),
        L = (0, x.A)({ isGift: j, skuId: S }),
        D = !R || !M || O,
        U = (0, a.bG)([A.A], () => A.A.applicationIdsFetched.has(b.tv));
    return ((0, o.A)(
        "Payment Modal",
        D,
        5,
        { hasFetchedSubscriptions: R, hasFetchedSubscriptionPlans: M, subscriptionPriceOptionsLoading: O },
        { tags: { app_context: "billing" } },
    ),
    i.useEffect(() => {
        if ((U || (0, s.LM)(b.tv), D || _)) return;
        let e = (0, v.vT)({ isTrial: L, isGift: j, selectedSkuId: S, startedPaymentFlowWithPaymentSources: I });
        null != C
            ? d(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: C })
            : null != n
              ? n !== b.gD.PREMIUM_GROUP_MONTH || E
                  ? d(r.pn.REVIEW)
                  : d(r.pn.ADD_PAYMENT_STEPS)
              : e
                ? (y((0, v.xT)(S, P, T)), d(r.pn.REVIEW))
                : null != t
                  ? d(r.pn.PLAN_SELECT)
                  : d(r.pn.SKU_SELECT);
    }, [C, P, _, U, n, D, d, t, S, y, L, T, j, I, E]),
    D)
        ? (0, l.jsx)(N.A, {})
        : _
          ? (0, l.jsx)(c.oO, {})
          : null;
}
var j = n(891197),
    L = n(69494),
    D = n(482132),
    U = n(293035);
function w() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(L.A, {}), (0, l.jsx)(D.dZ, { children: (0, l.jsx)(j.N, { className: U.D }) })],
    });
}
var k = n(830382),
    G = n(696208),
    F = n(534514),
    B = n(834730),
    Y = n(349288),
    H = n(94204);
function W(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)("div", {
            className: H.a,
            children: [
                (0, l.jsx)(F.D, { variant: "heading-xl/bold", children: I.intl.string(I.t.Q03WWV) }),
                (0, l.jsxs)("p", {
                    children: [
                        (0, l.jsx)(B.E, { variant: "text-md/normal", children: I.intl.string(I.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(B.E, { variant: "text-md/normal", children: I.intl.string(I.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(B.E, {
                            variant: "text-md/normal",
                            children: [
                                I.intl.string(I.t.Paa4v4),
                                "\xa0",
                                n
                                    ? I.intl.string(I.t.StGVvC)
                                    : (0, l.jsx)(Y.Anchor, { onClick: i, children: I.intl.string(I.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function V() {
    let e = i.useMemo(() => [{ variant: "primary", text: I.intl.string(I.t.g8vPzy), disabled: !0 }], []);
    return (0, l.jsx)(G.H, { actions: e });
}
var K = n(599961);
function Z() {
    let [e, t] = i.useState(!1);
    async function n() {
        t(!0), await (0, k.lo)();
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.A, {}),
            (0, l.jsx)(D.dZ, { children: (0, l.jsx)(W, { className: K.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(D.UX, { children: (0, l.jsx)(V, {}) }),
        ],
    });
}
let q = { key: null, renderStep: (e) => (0, l.jsx)(M, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(O, { ...e }) },
    $ = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(Z, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(w, {}), options: { renderHeader: !0 } },
    ];
