n.d(t, {
    JL: () => X,
    PaymentContextProvider: () => J,
}),
    n(388685),
    n(997841);
var r = n(951288),
    i = n(647438),
    a = n(289008),
    o = n(913527),
    s = n.n(o),
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
    C = n(74538),
    N = n(960048),
    R = n(735521),
    P = n(659848),
    w = n(583046),
    D = n(897829),
    x = n(74179),
    L = n(896246),
    j = n(320317),
    M = n(994427),
    k = n(814076),
    U = n(712297),
    G = n(585686),
    B = n(771206),
    Z = n(362755),
    V = n(981631),
    F = n(474936),
    H = n(876414);
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
    var t, n, o;
    let {
            loadId: S,
            activeSubscription: Y,
            stepConfigs: K,
            breadcrumbs: X = [],
            skuIDs: Q,
            isGift: J = !1,
            children: $,
            defaultPlanId: ee,
            purchaseType: et = V.GZQ.SUBSCRIPTION,
            applicationId: en,
            referralCode: er,
            excludeSubscriptionPlansBySKU: ei = !1,
            excludeSKUPurchasePreviews: ea = !1,
            wasTier2PremiumBeforePurchase: eo = !1,
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
        } = (0, x.Z)({
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
        eT = (0, k.Z)(),
        [eS, eA] = i.useState(!1),
        {
            step: eC,
            setStep: eN,
            steps: eR,
            breadcrumbsData: eP,
            previousStepRef: ew,
        } = (0, G.Z)({
            stepConfigs: K,
            breadcrumbs: X,
        }),
        [eD, ex] = (0, M.Z)(eC),
        { paymentError: eL, paymentAuthenticationState: ej } = (0, L.Z)(),
        { purchaseError: eM, purchaseErrorBlockRef: ek, setPurchaseError: eU } = (0, j.Z)(),
        eG = (0, u.Z)(() => {
            let e = null != S ? S : (0, l.Z)();
            return (
                N.Z.addBreadcrumb({ message: "Checkout session ID: ".concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now(),
                }
            );
        }),
        {
            selectedSkuId: eB,
            selectedPlan: eZ,
            selectedPlanNotification: eV,
            setSelectedSkuId: eF,
            setSelectedPlanId: eH,
            setSelectedPlanNotification: eY,
        } = (0, R.Z)(),
        [eW, eK] = (0, c.Wu)([O.Z], () => [O.Z.purchaseTokenAuthState, O.Z.purchaseTokenHash]),
        [ez, eq, eX, eQ] = (0, c.Wu)([Z.Z], () => [Z.Z.browserCheckoutState, Z.Z.loadId, Z.Z.skuId, Z.Z.planId]),
        [eJ, e$] = i.useState(null),
        [e0, e1] = i.useState(null),
        [e2, e3] = i.useState(null),
        [e4, e8] = i.useState(null),
        [e6, e5] = i.useState(null),
        [e7, e9] = i.useState(void 0),
        [te, tt] = i.useState([]),
        [tn, tr] = i.useState([]),
        ti = i.useMemo(() => null == eZ || (0, C.PV)(eZ.id), [eZ]),
        ta = i.useRef(null != Y ? Y.planId : null);
    i.useEffect(() => {
        null == ta.current && null != Y && (ta.current = Y.planId);
    }, [Y]);
    let { endsAt: to } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        ts = i.useRef(to.isSame(s()(0)) ? null : to);
    i.useEffect(() => {
        null != ts.current || to.isSame(s()(0)) || (ts.current = to);
    }, [to]),
        (0, P.m)(eu, eh);
    let {
            skusById: tl,
            hasFetchedSkus: tc,
            skuPricePreviewsById: tu,
            previewErrorsById: td,
        } = (0, U.Z)({
            applicationId: null != en ? en : F.CL,
            skuIDs: Q,
            currentPaymentSourceId: eh,
            isGift: J,
            excludeSKUPurchasePreviews: ea,
        }),
        tf = tl[null != eB ? eB : ""],
        t_ = null != eB ? td[eB] : null,
        [tp, th] = i.useState(t_),
        tm = i.useMemo(() => {
            if (null == eB) return null;
            let e = tu[eB];
            return null == e ? null : e[null != eh ? eh : v.c];
        }, [eB, tu, eh]),
        { data: tg } = (0, p.IX)(en),
        tE = y.Sb.useSetting(),
        tb = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tg && (0, A.yE)(tg.flags, V.udG.EMBEDDED) && tE && null == tb && (0, f.$h)();
    }, [tg, tE, tb]);
    let ty =
            (0, A.yE)(null != (t = null == tg ? void 0 : tg.flags) ? t : 0, V.udG.EMBEDDED) &&
            (0, A.yE)(null != (n = null == tg ? void 0 : tg.flags) ? n : 0, V.udG.EMBEDDED_IAP),
        tO = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === en;
            }),
        ),
        tv = null == tO ? void 0 : tO.compositeInstanceId,
        tI = (0, c.e7)([T.Z], () => (null != eB ? T.Z.getForSKU(eB) : null), [eB]),
        [tT, tS] = i.useState(null),
        tA = null != (o = null == Y ? void 0 : Y.inReverseTrial) && o && !J,
        tC = (0, b.ZP)({ location: "PaymentModal" }) && ti,
        { isDisplayingWowMomentConfirmation: tN } = (0, c.cj)([E.Z], () => ({
            isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation,
        })),
        tR = tC ? H.premiumBrandRefreshBackground : void 0,
        { enabled: tP } = (0, g.l)({ location: "PaymentModal" });
    return (0, r.jsx)(q.Provider, {
        value: z(
            W(
                {
                    stripe: es,
                    paymentElementsEnabled: tP,
                    contextMetadata: eG,
                    blockedPayments: el,
                    activeSubscription: Y,
                    hasFetchedSubscriptions: ec,
                    hasFetchedSubscriptionPlans: eb,
                    updatedSubscription: e4,
                    setUpdatedSubscription: e8,
                    subscriptionMetadataRequest: e6,
                    setSubscriptionMetadataRequest: e5,
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
                step: eC,
                setStep: eN,
                steps: eR,
                stepConfigs: K,
                breadcrumbs: eP,
                previousStepRef: ew,
                purchaseState: eD,
                setPurchaseState: ex,
                paymentAuthenticationState: ej,
                paymentError: eL,
                purchaseError: eM,
                setPurchaseError: eU,
                purchasePreviewError: tp,
                setPurchasePreviewError: th,
                purchaseErrorBlockRef: ek,
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
                selectedSku: tf,
                selectedStoreListing: tI,
                selectedPlan: eZ,
                setSelectedSkuId: eF,
                setSelectedPlanId: eH,
                selectedPlanNotification: eV,
                setSelectedPlanNotification: eY,
                readySlideId: e7,
                setReadySlideId: e9,
                defaultPlanId: ee,
                isPremium: ti,
                isGift: J,
                startingFractionalPremiumEndsAtRef: ts,
                startedPaymentFlowWithPaymentSourcesRef: eE,
                startingPremiumSubscriptionPlanIdRef: ta,
                hasFetchedSkus: tc,
                skusById: tl,
                skuPricePreviewsById: tu,
                selectedSkuPricePreview: tm,
                application: tg,
                purchaseType: et,
                isEmbeddedIAP: ty,
                activitySessionId: tv,
                devShelfFetchState: tb,
                entitlementsGranted: te,
                setEntitlementsGranted: tt,
                appliedUserDiscounts: tn,
                setAppliedUserDiscounts: tr,
                referralCode: er,
                invoicePreview: tT,
                setInvoicePreview: tS,
                inReverseTrial: tA,
                enablePremiumBrandRefresh: tC,
                isDisplayingWowMomentConfirmation: tN,
                premiumBrandRefreshBackgroundClassName: tR,
                wasTier2PremiumBeforePurchase: eo,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: V.OBo,
            stripe: es,
            children: $,
        }),
    });
}
