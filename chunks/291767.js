n.d(t, { kO: () => q, r3: () => z, PL: () => Q });
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
    f = n(469778),
    A = n(951305),
    S = n(20742),
    y = n(430993),
    P = n(579151),
    I = n(599062),
    _ = n(375708);
function T() {
    let { refreshCategories: e } = (0, P.A)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(S.rQ, { title: _.intl.string(_.t["p8+qtU"]) }),
            (0, l.jsx)(y.c, { children: (0, l.jsx)(I.h, { onRetry: e, errorOrigin: I.A.GIFT_MODAL }) }),
        ],
    });
}
var g = n(121005),
    x = n(800471),
    v = n(169801),
    N = n(534479),
    M = n(652215),
    R = n(202541);
function b(e) {
    let { handleStepChange: t } = e,
        n = (0, h.t4)((e) => e.selectedSkuId),
        { paymentSources: s, hasFetchedPaymentSources: o } = (0, p.jm)(),
        { application: m } = (0, d.V)(),
        f = (0, u.Hp)(),
        S = (0, C.gU)(),
        y = (0, C.Hu)(),
        { isGift: P } = (0, A.Pv)(),
        [I, _] = i.useState(!0),
        [g, x] = (0, a.yK)([E.A], () => [E.A.isFetchingCategories, E.A.error]);
    return (i.useEffect(() => {
        let e = null != m;
        y && o && e && _(g);
    }, [y, o, m, g]),
    i.useEffect(() => {
        if (I || f || null == n) return;
        let e = S[n];
        P &&
        (e?.productLine === M.EZt.COLLECTIBLES ||
            e?.productLine === M.EZt.APPLICATION ||
            e?.productLine === M.EZt.SOCIAL_LAYER_GAME_ITEM)
            ? t(r.pn.GIFT_CUSTOMIZATION)
            : 0 === Object.keys(s).length
              ? t(r.pn.ADD_PAYMENT_STEPS)
              : t(r.pn.REVIEW);
    }, [I, f, t, s, P, S, n]),
    I)
        ? (0, l.jsx)(N.A, {})
        : f
          ? (0, l.jsx)(c.oO, {})
          : null != x
            ? (0, l.jsx)(T, {})
            : null;
}
function j(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: d, continueSessionToInitialStep: C } = e,
        { hasPaymentSources: E, hasFetchedPaymentSources: S } = (0, p.jm)({ shouldAllowFetchPaymentSources: !0 }),
        {
            selectedSkuId: y,
            setSelectedPlanId: P,
            activeSubscription: I,
            defaultPlanId: _,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
        })),
        T = (0, u.Hp)(),
        M = (0, g.A)(),
        { hasFetchedRelatedSubscriptionPlans: b, subscriptionPriceOptionsLoading: j } = (0, m.Jn)(),
        { isGift: O } = (0, A.Pv)(),
        L = (0, v.A)({ isGift: O, skuId: y }),
        k = !M || !b || j || !S,
        w = (0, a.bG)([f.A], () => f.A.applicationIdsFetched.has(R.tv));
    (0, o.A)(
        "Payment Modal",
        k,
        5,
        {
            hasFetchedSubscriptions: M,
            hasFetchedSubscriptionPlans: b,
            subscriptionPriceOptionsLoading: j,
            hasFetchedPaymentSources: S,
        },
        { tags: { app_context: "billing" } },
    );
    let D = (0, h.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: L }));
    return (i.useEffect(() => {
        w || (0, s.LM)(R.tv),
            k ||
                T ||
                (null != C
                    ? d(r.pn.ADD_PAYMENT_STEPS, { emitPaymentFlowLoadedEvent: !0, trackedFromStep: C })
                    : null != n
                      ? n !== R.gD.PREMIUM_GROUP_MONTH || E
                          ? d(r.pn.REVIEW)
                          : d(r.pn.ADD_PAYMENT_STEPS)
                      : D
                        ? (P((0, x.x)(y, I, _)), d(r.pn.REVIEW))
                        : null != t
                          ? d(r.pn.PLAN_SELECT)
                          : d(r.pn.SKU_SELECT));
    }, [C, I, T, w, n, k, d, t, y, P, L, _, O, D, E]),
    k)
        ? (0, l.jsx)(N.A, {})
        : T
          ? (0, l.jsx)(c.oO, {})
          : null;
}
var O = n(891197),
    L = n(69494),
    k = n(482132),
    w = n(293035);
function D() {
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(L.A, {}), (0, l.jsx)(k.dZ, { children: (0, l.jsx)(O.N, { className: w.D }) })],
    });
}
var U = n(830382),
    G = n(696208),
    F = n(297264),
    H = n(834730),
    B = n(349288),
    Y = n(94204);
function W(e) {
    let { className: t, isEmailResent: n, resendEmail: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsxs)("div", {
            className: Y.a,
            children: [
                (0, l.jsx)(F.D, { variant: "heading-xl/bold", children: _.intl.string(_.t.Q03WWV) }),
                (0, l.jsxs)("p", {
                    children: [
                        (0, l.jsx)(H.E, { variant: "text-md/normal", children: _.intl.string(_.t.BxPxhI) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsx)(H.E, { variant: "text-md/normal", children: _.intl.string(_.t.Y3fdOp) }),
                        (0, l.jsx)("br", {}),
                        (0, l.jsxs)(H.E, {
                            variant: "text-md/normal",
                            children: [
                                _.intl.string(_.t.Paa4v4),
                                "\xa0",
                                n
                                    ? _.intl.string(_.t.StGVvC)
                                    : (0, l.jsx)(B.Anchor, { onClick: i, children: _.intl.string(_.t.Ex7sk9) }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function V() {
    let e = i.useMemo(() => [{ variant: "primary", text: _.intl.string(_.t.g8vPzy), disabled: !0 }], []);
    return (0, l.jsx)(G.H, { actions: e });
}
var K = n(599961);
function Z() {
    let [e, t] = i.useState(!1);
    async function n() {
        t(!0), await (0, U.lo)();
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.A, {}),
            (0, l.jsx)(k.dZ, { children: (0, l.jsx)(W, { className: K.r, isEmailResent: e, resendEmail: n }) }),
            (0, l.jsx)(k.UX, { children: (0, l.jsx)(V, {}) }),
        ],
    });
}
let q = { key: null, renderStep: (e) => (0, l.jsx)(b, { ...e }), options: { modalSizeGetter: () => "md" } },
    z = { key: null, renderStep: (e) => (0, l.jsx)(j, { ...e }) },
    Q = [
        { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(Z, {}) },
        { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(D, {}), options: { renderHeader: !0 } },
    ];
