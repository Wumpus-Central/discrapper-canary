n.d(t, { kO: () => Z, r3: () => z, PL: () => $ });
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
    h = n(427675),
    C = n(6938),
    A = n(590180),
    E = n(469778),
    f = n(937008),
    y = n(20742),
    S = n(430993),
    P = n(579151),
    T = n(599062),
    I = n(375708);
function _() {
    let { refreshCategories: e } = (0, P.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(y.rQ, { title: I.intl.string(I.t["p8+qtU"]) }),
            (0, l.jsx)(S.c, { children: (0, l.jsx)(T.h, { onRetry: e, errorOrigin: T.A.GIFT_MODAL }) }),
        ],
    });
}
var g = n(121005),
    x = n(800471),
    v = n(169801),
    N = n(534479),
    b = n(652215),
    R = n(202541);
function M(e) {
    let { handleStepChange: t } = e,
        n = (0, C.t4)((e) => e.selectedSkuId),
        { paymentSources: s, hasFetchedPaymentSources: o } = (0, p.jm)(),
        { application: m } = (0, d.V)(),
        E = (0, u.Hp)(),
        y = (0, h.gU)(),
        S = (0, h.Hu)(),
        { isGift: P } = (0, f.Pv)(),
        [T, I] = i.useState(!0),
        [g, x] = (0, a.yK)([A.A], () => [A.A.isFetchingCategories, A.A.error]);
    return (i.useEffect(() => {
        let e = null != m;
        S && o && e && I(g);
    }, [S, o, m, g]),
    i.useEffect(() => {
        if (T || E || null == n) return;
        let e = y[n];
        P &&
        (e?.productLine === b.EZt.COLLECTIBLES ||
            e?.productLine === b.EZt.APPLICATION ||
            e?.productLine === b.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [T, E, t, s, P, y, n]),
    T)
        ? (0, l.jsx)(N.A, {})
        : E
          ? (0, l.jsx)(c.oO, {})
          : null != x
            ? (0, l.jsx)(_, {})
            : null;
}
function j(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: d, continueSessionToInitialStep: h } = e,
        { hasPaymentSources: A, hasFetchedPaymentSources: y } = (0, p.jm)({ shouldAllowFetchPaymentSources: !0 }),
        {
            selectedSkuId: S,
            setSelectedPlanId: P,
            activeSubscription: T,
            defaultPlanId: I,
            startedPaymentFlowWithPaymentSources: _,
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        b = (0, u.Hp)(),
        M = (0, g.A)(),
        { hasFetchedRelatedSubscriptionPlans: j, subscriptionPriceOptionsLoading: O } = (0, m.Jn)(),
        { isGift: L } = (0, f.Pv)(),
        w = (0, v.A)({ isGift: L, skuId: S }),
        k = !M || !j || O || !y,
        D = (0, a.bG)([E.A], () => E.A.applicationIdsFetched.has(R.tv));
    return ((0, o.A)(
        "Payment Modal",
        k,
        5,
        {
            hasFetchedSubscriptions: M,
            hasFetchedSubscriptionPlans: j,
            subscriptionPriceOptionsLoading: O,
            hasFetchedPaymentSources: y,
        },
        { tags: { app_context: "billing" } },
    ),
    i.useEffect(() => {
        if ((D || (0, s.LM)(R.tv), k || b)) return;
        let e = (0, x.vT)({ isTrial: w, isGift: L, selectedSkuId: S, startedPaymentFlowWithPaymentSources: _ });
        null != h
            ? d(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: h })
            : null != n
              ? n !== R.gD.PREMIUM_GROUP_MONTH || A
                  ? d(r.pn.REVIEW)
                  : d(r.pn.ADD_PAYMENT_STEPS)
              : e
                ? (P((0, x.xT)(S, T, I)), d(r.pn.REVIEW))
                : null != t
                  ? d(r.pn.PLAN_SELECT)
                  : d(r.pn.SKU_SELECT);
    }, [h, T, b, D, n, k, d, t, S, P, w, I, L, _, A]),
    k)
        ? (0, l.jsx)(N.A, {})
        : b
          ? (0, l.jsx)(c.oO, {})
          : null;
}
var O = n(891197),
    L = n(69494),
    w = n(482132),
    k = n(293035);
function D() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(L.A, {}), (0, l.jsx)(w.dZ, { children: (0, l.jsx)(O.N, { className: k.D }) })],
    });
}
var U = n(830382),
    G = n(696208),
    F = n(297264),
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
function q() {
    let [e, t] = i.useState(!1);
    async function n() {
        t(!0), await (0, U.lo)();
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.A, {}),
            (0, l.jsx)(w.dZ, { children: (0, l.jsx)(W, { className: K.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(w.UX, { children: (0, l.jsx)(V, {}) }),
        ],
    });
}
let Z = { key: null, renderStep: (e) => (0, l.jsx)(M, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(j, { ...e }) },
    $ = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(q, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(D, {}), options: { renderHeader: !0 } },
    ];
