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
            customCheckoutFlow: es,
        } = e,
        el = (0, B.Z)(),
        ec = (0, h.Q)(),
        eu = (0, D.Z)(),
        ed = Q[0],
        ef = (0, c.e7)([I.Z], () => I.Z.get(ed), [ed]),
        e_ = null == ef ? void 0 : ef.eligiblePaymentGateways,
        {
            paymentSources: ep,
            hasPaymentSources: eh,
            paymentSourceId: em,
            setPaymentSourceId: eg,
            hasFetchedPaymentSources: eE,
        } = (0, x.Z)({
            isGift: J,
            activeSubscription: Y,
            eligiblePaymentGateways: e_,
        }),
        eb = i.useRef(eh),
        {
            hasFetchedSubscriptionPlans: ey,
            priceOptions: eO,
            setCurrency: ev,
            currencyLoading: eI,
            currencies: eT,
        } = (0, w.Z)({
            activeSubscription: Y,
            skuIDs: Q,
            paymentSourceId: em,
            isGift: J,
            excludeSubscriptionPlansBySKU: ei,
        }),
        eS = (0, k.Z)(),
        [eA, eC] = i.useState(!1),
        {
            step: eN,
            setStep: eR,
            steps: eP,
            breadcrumbsData: ew,
            previousStepRef: eD,
        } = (0, G.Z)({
            stepConfigs: K,
            breadcrumbs: X,
        }),
        [ex, eL] = (0, M.Z)(eN),
        { paymentError: ej, paymentAuthenticationState: eM } = (0, L.Z)(),
        { purchaseError: ek, purchaseErrorBlockRef: eU, setPurchaseError: eG } = (0, j.Z)(),
        eB = (0, u.Z)(() => {
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
            selectedSkuId: eZ,
            selectedPlan: eV,
            selectedPlanNotification: eF,
            setSelectedSkuId: eH,
            setSelectedPlanId: eY,
            setSelectedPlanNotification: eW,
        } = (0, R.Z)(),
        [eK, ez] = (0, c.Wu)([O.Z], () => [O.Z.purchaseTokenAuthState, O.Z.purchaseTokenHash]),
        [eq, eX, eQ, eJ] = (0, c.Wu)([Z.Z], () => [Z.Z.browserCheckoutState, Z.Z.loadId, Z.Z.skuId, Z.Z.planId]),
        [e$, e0] = i.useState(null),
        [e1, e2] = i.useState(null),
        [e3, e4] = i.useState(null),
        [e8, e6] = i.useState(null),
        [e5, e7] = i.useState(null),
        [e9, te] = i.useState(void 0),
        [tt, tn] = i.useState([]),
        [tr, ti] = i.useState([]),
        ta = i.useMemo(() => null == eV || (0, C.PV)(eV.id), [eV]),
        to = i.useRef(null != Y ? Y.planId : null);
    i.useEffect(() => {
        null == to.current && null != Y && (to.current = Y.planId);
    }, [Y]);
    let { endsAt: ts } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        tl = i.useRef(ts.isSame(s()(0)) ? null : ts);
    i.useEffect(() => {
        null != tl.current || ts.isSame(s()(0)) || (tl.current = ts);
    }, [ts]),
        (0, P.m)(ed, em);
    let {
            skusById: tc,
            hasFetchedSkus: tu,
            skuPricePreviewsById: td,
            previewErrorsById: tf,
        } = (0, U.Z)({
            applicationId: null != en ? en : F.CL,
            skuIDs: Q,
            currentPaymentSourceId: em,
            isGift: J,
            excludeSKUPurchasePreviews: ea,
        }),
        t_ = tc[null != eZ ? eZ : ""],
        tp = null != eZ ? tf[eZ] : null,
        [th, tm] = i.useState(tp),
        tg = i.useMemo(() => {
            if (null == eZ) return null;
            let e = td[eZ];
            return null == e ? null : e[null != em ? em : v.c];
        }, [eZ, td, em]),
        { data: tE } = (0, p.IX)(en),
        tb = y.Sb.useSetting(),
        ty = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tE && (0, A.yE)(tE.flags, V.udG.EMBEDDED) && tb && null == ty && (0, f.$h)();
    }, [tE, tb, ty]);
    let tO =
            (0, A.yE)(null != (t = null == tE ? void 0 : tE.flags) ? t : 0, V.udG.EMBEDDED) &&
            (0, A.yE)(null != (n = null == tE ? void 0 : tE.flags) ? n : 0, V.udG.EMBEDDED_IAP),
        tv = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === en;
            }),
        ),
        tI = null == tv ? void 0 : tv.compositeInstanceId,
        tT = (0, c.e7)([T.Z], () => (null != eZ ? T.Z.getForSKU(eZ) : null), [eZ]),
        [tS, tA] = i.useState(null),
        tC = null != (o = null == Y ? void 0 : Y.inReverseTrial) && o && !J,
        tN = (0, b.ZP)({ location: "PaymentModal" }) && ta,
        { isDisplayingWowMomentConfirmation: tR } = (0, c.cj)([E.Z], () => ({
            isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation,
        })),
        tP = tN ? H.premiumBrandRefreshBackground : void 0,
        { enabled: tw } = (0, g.l)({ location: "PaymentModal" });
    return (0, r.jsx)(q.Provider, {
        value: z(
            W(
                {
                    stripe: el,
                    paymentElementsEnabled: tw,
                    contextMetadata: eB,
                    blockedPayments: ec,
                    activeSubscription: Y,
                    hasFetchedSubscriptions: eu,
                    hasFetchedSubscriptionPlans: ey,
                    updatedSubscription: e8,
                    setUpdatedSubscription: e6,
                    subscriptionMetadataRequest: e5,
                    setSubscriptionMetadataRequest: e7,
                    hasFetchedPaymentSources: eE,
                    paymentSources: ep,
                    hasPaymentSources: eh,
                    paymentSourceId: em,
                    setPaymentSourceId: eg,
                    priceOptions: eO,
                    setCurrency: ev,
                    currencyLoading: eI,
                    currencies: eT,
                },
                eS,
            ),
            {
                hasAcceptedTerms: eA,
                setHasAcceptedTerms: eC,
                step: eN,
                setStep: eR,
                steps: eP,
                stepConfigs: K,
                breadcrumbs: ew,
                previousStepRef: eD,
                purchaseState: ex,
                setPurchaseState: eL,
                paymentAuthenticationState: eM,
                paymentError: ej,
                purchaseError: ek,
                setPurchaseError: eG,
                purchasePreviewError: th,
                setPurchasePreviewError: tm,
                purchaseErrorBlockRef: eU,
                purchaseTokenAuthState: eK,
                purchaseTokenHash: ez,
                browserCheckoutState: eq,
                browserCheckoutStateLoadId: eX,
                browserCheckoutStateSkuId: eQ,
                browserCheckoutStatePlanId: eJ,
                bodyNode: e$,
                setBodyNode: e0,
                footerNode: e1,
                setFooterNode: e2,
                modalOverlayNode: e3,
                setModalOverlayNode: e4,
                selectedSkuId: eZ,
                selectedSku: t_,
                selectedStoreListing: tT,
                selectedPlan: eV,
                setSelectedSkuId: eH,
                setSelectedPlanId: eY,
                selectedPlanNotification: eF,
                setSelectedPlanNotification: eW,
                readySlideId: e9,
                setReadySlideId: te,
                defaultPlanId: ee,
                isPremium: ta,
                isGift: J,
                startingFractionalPremiumEndsAtRef: tl,
                startedPaymentFlowWithPaymentSourcesRef: eb,
                startingPremiumSubscriptionPlanIdRef: to,
                hasFetchedSkus: tu,
                skusById: tc,
                skuPricePreviewsById: td,
                selectedSkuPricePreview: tg,
                application: tE,
                purchaseType: et,
                isEmbeddedIAP: tO,
                activitySessionId: tI,
                devShelfFetchState: ty,
                entitlementsGranted: tt,
                setEntitlementsGranted: tn,
                appliedUserDiscounts: tr,
                setAppliedUserDiscounts: ti,
                referralCode: er,
                invoicePreview: tS,
                setInvoicePreview: tA,
                inReverseTrial: tC,
                enablePremiumBrandRefresh: tN,
                isDisplayingWowMomentConfirmation: tR,
                premiumBrandRefreshBackgroundClassName: tP,
                wasTier2PremiumBeforePurchase: eo,
                customCheckoutFlow: es,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: V.OBo,
            stripe: el,
            children: $,
        }),
    });
}
