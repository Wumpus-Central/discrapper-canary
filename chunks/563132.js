n.d(t, {
    JL: () => X,
    PaymentContextProvider: () => J,
}),
    n(388685),
    n(997841);
var r = n(255367),
    i = n(73800),
    o = n(245364),
    a = n(913527),
    s = n.n(a),
    l = n(772848),
    c = n(442837),
    u = n(211266),
    d = n(115130),
    f = n(566620),
    _ = n(317381),
    p = n(728345),
    h = n(211242),
    m = n(975298),
    g = n(892041),
    E = n(453227),
    b = n(47280),
    y = n(695346),
    O = n(882712),
    v = n(855775),
    I = n(55563),
    T = n(551428),
    S = n(975104),
    A = n(630388),
    N = n(74538),
    C = n(960048),
    R = n(735521),
    P = n(659848),
    w = n(583046),
    D = n(897829),
    L = n(74179),
    x = n(896246),
    M = n(320317),
    k = n(994427),
    j = n(814076),
    U = n(712297),
    G = n(585686),
    B = n(771206),
    Z = n(362755),
    F = n(981631),
    V = n(474936),
    H = n(179742);
function Y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [q, X, Q] = (0, S.Z)();
function J(e) {
    var t, n, a;
    let {
            loadId: S,
            activeSubscription: Y,
            stepConfigs: K,
            breadcrumbs: X = [],
            skuIDs: Q,
            isGift: J = !1,
            children: $,
            defaultPlanId: ee,
            purchaseType: et = F.GZQ.SUBSCRIPTION,
            applicationId: en,
            referralCode: er,
            excludeSubscriptionPlansBySKU: ei = !1,
            excludeSKUPurchasePreviews: eo = !1,
            wasTier2PremiumBeforePurchase: ea = !1,
        } = e,
        es = (0, B.Z)(),
        el = (0, h.Q)(),
        ec = (0, D.Z)(),
        eu = Q[0],
        ed = (0, c.e7)([I.Z], () => I.Z.get(eu), [eu]),
        ef = null == ed ? void 0 : ed.eligiblePaymentGateways,
        {
            paymentSources: e_,
            hasPaymentSources: ep,
            paymentSourceId: eh,
            setPaymentSourceId: em,
            hasFetchedPaymentSources: eg,
        } = (0, L.Z)({
            isGift: J,
            activeSubscription: Y,
            eligiblePaymentGateways: ef,
        }),
        eE = i.useRef(ep),
        {
            hasFetchedSubscriptionPlans: eb,
            priceOptions: ey,
            setCurrency: eO,
            currencyLoading: ev,
            currencies: eI,
        } = (0, w.Z)({
            activeSubscription: Y,
            skuIDs: Q,
            paymentSourceId: eh,
            isGift: J,
            excludeSubscriptionPlansBySKU: ei,
        }),
        eT = (0, j.Z)(),
        [eS, eA] = i.useState(!1),
        {
            step: eN,
            setStep: eC,
            steps: eR,
            breadcrumbsData: eP,
            previousStepRef: ew,
        } = (0, G.Z)({
            stepConfigs: K,
            breadcrumbs: X,
        }),
        [eD, eL] = (0, k.Z)(eN),
        { paymentError: ex, paymentAuthenticationState: eM } = (0, x.Z)(),
        { purchaseError: ek, purchaseErrorBlockRef: ej, setPurchaseError: eU } = (0, M.Z)(),
        eG = (0, u.Z)(() => {
            let e = null != S ? S : (0, l.Z)();
            return (
                C.Z.addBreadcrumb({ message: "Checkout session ID: ".concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now(),
                }
            );
        }),
        {
            selectedSkuId: eB,
            selectedPlan: eZ,
            selectedPlanNotification: eF,
            setSelectedSkuId: eV,
            setSelectedPlanId: eH,
            setSelectedPlanNotification: eY,
        } = (0, R.Z)(),
        [eW, eK] = (0, c.Wu)([O.Z], () => [O.Z.purchaseTokenAuthState, O.Z.purchaseTokenHash]),
        [ez, eq, eX, eQ] = (0, c.Wu)([Z.Z], () => [Z.Z.browserCheckoutState, Z.Z.loadId, Z.Z.skuId, Z.Z.planId]),
        [eJ, e$] = i.useState(null),
        [e0, e1] = i.useState(null),
        [e2, e3] = i.useState(null),
        [e5, e4] = i.useState(null),
        [e6, e8] = i.useState(null),
        [e7, e9] = i.useState(void 0),
        [te, tt] = i.useState([]),
        tn = i.useMemo(() => null == eZ || (0, N.PV)(eZ.id), [eZ]),
        tr = i.useRef(null != Y ? Y.planId : null);
    i.useEffect(() => {
        null == tr.current && null != Y && (tr.current = Y.planId);
    }, [Y]);
    let { endsAt: ti } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        to = i.useRef(ti.isSame(s()(0)) ? null : ti);
    i.useEffect(() => {
        null != to.current || ti.isSame(s()(0)) || (to.current = ti);
    }, [ti]),
        (0, P.m)(eu, eh);
    let {
            skusById: ta,
            hasFetchedSkus: ts,
            skuPricePreviewsById: tl,
            previewErrorsById: tc,
        } = (0, U.Z)({
            applicationId: null != en ? en : V.CL,
            skuIDs: Q,
            currentPaymentSourceId: eh,
            isGift: J,
            excludeSKUPurchasePreviews: eo,
        }),
        tu = ta[null != eB ? eB : ""],
        td = null != eB ? tc[eB] : null,
        [tf, t_] = i.useState(td),
        tp = i.useMemo(() => {
            if (null == eB) return null;
            let e = tl[eB];
            return null == e ? null : e[null != eh ? eh : v.c];
        }, [eB, tl, eh]),
        { data: th } = (0, p.IX)(en),
        tm = y.Sb.useSetting(),
        tg = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != th && (0, A.yE)(th.flags, F.udG.EMBEDDED) && tm && null == tg && (0, f.$h)();
    }, [th, tm, tg]);
    let tE =
            (0, A.yE)(null != (t = null == th ? void 0 : th.flags) ? t : 0, F.udG.EMBEDDED) &&
            (0, A.yE)(null != (n = null == th ? void 0 : th.flags) ? n : 0, F.udG.EMBEDDED_IAP),
        tb = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === en;
            }),
        ),
        ty = null == tb ? void 0 : tb.compositeInstanceId,
        tO = (0, c.e7)([T.Z], () => (null != eB ? T.Z.getForSKU(eB) : null), [eB]),
        [tv, tI] = i.useState(null),
        tT = null != (a = null == Y ? void 0 : Y.inReverseTrial) && a && !J,
        tS = (0, b.Z)({ location: "PaymentModal" }) && tn,
        { isDisplayingWowMomentConfirmation: tA } = (0, c.cj)([E.Z], () => ({
            isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation,
        })),
        tN = tS ? H.premiumBrandRefreshBackground : void 0,
        { enabled: tC } = (0, g.l)({ location: "PaymentModal" });
    return (0, r.jsx)(q.Provider, {
        value: z(
            W(
                {
                    stripe: es,
                    paymentElementsEnabled: tC,
                    contextMetadata: eG,
                    blockedPayments: el,
                    activeSubscription: Y,
                    hasFetchedSubscriptions: ec,
                    hasFetchedSubscriptionPlans: eb,
                    updatedSubscription: e5,
                    setUpdatedSubscription: e4,
                    subscriptionMetadataRequest: e6,
                    setSubscriptionMetadataRequest: e8,
                    hasFetchedPaymentSources: eg,
                    paymentSources: e_,
                    hasPaymentSources: ep,
                    paymentSourceId: eh,
                    setPaymentSourceId: em,
                    priceOptions: ey,
                    setCurrency: eO,
                    currencyLoading: ev,
                    currencies: eI,
                },
                eT,
            ),
            {
                hasAcceptedTerms: eS,
                setHasAcceptedTerms: eA,
                step: eN,
                setStep: eC,
                steps: eR,
                stepConfigs: K,
                breadcrumbs: eP,
                previousStepRef: ew,
                purchaseState: eD,
                setPurchaseState: eL,
                paymentAuthenticationState: eM,
                paymentError: ex,
                purchaseError: ek,
                setPurchaseError: eU,
                purchasePreviewError: tf,
                setPurchasePreviewError: t_,
                purchaseErrorBlockRef: ej,
                purchaseTokenAuthState: eW,
                purchaseTokenHash: eK,
                browserCheckoutState: ez,
                browserCheckoutStateLoadId: eq,
                browserCheckoutStateSkuId: eX,
                browserCheckoutStatePlanId: eQ,
                bodyNode: eJ,
                setBodyNode: e$,
                footerNode: e0,
                setFooterNode: e1,
                modalOverlayNode: e2,
                setModalOverlayNode: e3,
                selectedSkuId: eB,
                selectedSku: tu,
                selectedStoreListing: tO,
                selectedPlan: eZ,
                setSelectedSkuId: eV,
                setSelectedPlanId: eH,
                selectedPlanNotification: eF,
                setSelectedPlanNotification: eY,
                readySlideId: e7,
                setReadySlideId: e9,
                defaultPlanId: ee,
                isPremium: tn,
                startingFractionalPremiumEndsAtRef: to,
                startedPaymentFlowWithPaymentSourcesRef: eE,
                startingPremiumSubscriptionPlanIdRef: tr,
                hasFetchedSkus: ts,
                skusById: ta,
                skuPricePreviewsById: tl,
                selectedSkuPricePreview: tp,
                application: th,
                purchaseType: et,
                isEmbeddedIAP: tE,
                activitySessionId: ty,
                devShelfFetchState: tg,
                entitlementsGranted: te,
                setEntitlementsGranted: tt,
                referralCode: er,
                invoicePreview: tv,
                setInvoicePreview: tI,
                inReverseTrial: tT,
                enablePremiumBrandRefresh: tS,
                isDisplayingWowMomentConfirmation: tA,
                premiumBrandRefreshBackgroundClassName: tN,
                wasTier2PremiumBeforePurchase: ea,
            },
        ),
        children: (0, r.jsx)(o.Elements, {
            options: F.OBo,
            stripe: es,
            children: $,
        }),
    });
}
