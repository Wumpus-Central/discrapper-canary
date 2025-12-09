n.d(t, {
    JL: () => J,
    Lq: () => X,
    PaymentContextProvider: () => ee,
}),
    n(388685),
    n(997841);
var r = n(54381),
    i = n(473749),
    a = n(575053),
    o = n(913527),
    s = n.n(o),
    l = n(772848),
    c = n(95015),
    u = n(442837),
    d = n(211266),
    f = n(115130),
    p = n(566620),
    _ = n(317381),
    m = n(728345),
    h = n(211242),
    g = n(975298),
    E = n(892041),
    b = n(453227),
    y = n(283066),
    O = n(695346),
    v = n(882712),
    S = n(855775),
    I = n(55563),
    T = n(551428),
    A = n(975104),
    C = n(74538),
    N = n(960048),
    P = n(735521),
    R = n(325100),
    D = n(659848),
    w = n(583046),
    x = n(897829),
    L = n(74179),
    j = n(896246),
    M = n(320317),
    k = n(994427),
    U = n(814076),
    G = n(712297),
    Z = n(585686),
    B = n(771206),
    F = n(362755),
    V = n(283307),
    H = n(981631),
    Y = n(474936),
    W = n(876414);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [X, J, $] = (0, A.Z)();
function ee(e) {
    var t, n, o;
    let {
            loadId: A,
            activeSubscription: K,
            stepConfigs: q,
            breadcrumbs: J = [],
            skuIDs: $,
            isGift: ee = !1,
            children: et,
            defaultPlanId: en,
            purchaseType: er = H.GZQ.SUBSCRIPTION,
            applicationId: ei,
            referralCode: ea,
            paymentGateway: eo,
            excludeSubscriptionPlansBySKU: es = !1,
            excludeSKUPurchasePreviews: el = !1,
            wasTier2PremiumBeforePurchase: ec = !1,
        } = e,
        eu = (0, B.Z)(),
        ed = (0, h.Q)(),
        ef = (0, x.Z)(),
        ep = $[0],
        e_ = (0, u.e7)([I.Z], () => I.Z.get(ep), [ep]),
        em = null == e_ ? void 0 : e_.eligiblePaymentGateways,
        {
            paymentSources: eh,
            hasPaymentSources: eg,
            paymentSourceId: eE,
            setPaymentSourceId: eb,
            hasFetchedPaymentSources: ey,
        } = (0, L.Z)({
            isGift: ee,
            activeSubscription: K,
            eligiblePaymentGateways: em,
        }),
        eO = i.useRef(eg),
        {
            hasFetchedSubscriptionPlans: ev,
            priceOptions: eS,
            setCurrency: eI,
            currencyLoading: eT,
            currencies: eA,
        } = (0, w.Z)({
            activeSubscription: K,
            skuIDs: $,
            paymentSourceId: eE,
            isGift: ee,
            excludeSubscriptionPlansBySKU: es,
        }),
        eC = (0, U.Z)(),
        [eN, eP] = i.useState(!1),
        {
            step: eR,
            setStep: eD,
            steps: ew,
            breadcrumbsData: ex,
            previousStepRef: eL,
        } = (0, Z.Z)({
            stepConfigs: q,
            breadcrumbs: J,
        }),
        [ej, eM] = (0, k.Z)(eR),
        { paymentError: ek, paymentAuthenticationState: eU } = (0, j.Z)(),
        { purchaseError: eG, purchaseErrorBlockRef: eZ, setPurchaseError: eB } = (0, M.Z)(),
        eF = (0, d.Z)(() => {
            let e = null != A ? A : (0, l.Z)();
            return (
                N.Z.addBreadcrumb({ message: "Checkout session ID: ".concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now(),
                }
            );
        }),
        {
            selectedSkuId: eV,
            selectedPlan: eH,
            selectedPlanNotification: eY,
            setSelectedSkuId: eW,
            setSelectedPlanId: eK,
            setSelectedPlanNotification: ez,
        } = (0, P.Z)(),
        [eq, eQ] = (0, u.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]),
        [eX, eJ, e$, e0] = (0, u.Wu)([F.Z], () => [F.Z.browserCheckoutState, F.Z.loadId, F.Z.skuId, F.Z.planId]),
        [e1, e3] = i.useState(null),
        [e2, e4] = i.useState(null),
        [e5, e8] = i.useState(null),
        [e6, e7] = i.useState(null),
        [e9, te] = i.useState(null),
        [tt, tn] = i.useState(void 0),
        [tr, ti] = i.useState([]),
        [ta, to] = i.useState([]),
        ts = i.useMemo(() => null == eH || (0, C.PV)(eH.id), [eH]),
        tl = i.useRef(null != K ? K.planId : null);
    i.useEffect(() => {
        null == tl.current && null != K && (tl.current = K.planId);
    }, [K]);
    let { endsAt: tc } = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        tu = i.useRef(tc.isSame(s()(0)) ? null : tc);
    i.useEffect(() => {
        null != tu.current || tc.isSame(s()(0)) || (tu.current = tc);
    }, [tc]);
    let td = i.useMemo(
        () => ({
            paymentSourceId: eE,
            paymentGateway: eo,
            loadId: A,
        }),
        [eE, eo, A],
    );
    (0, D.m)(ep, td);
    let {
            skusById: tf,
            hasFetchedSkus: tp,
            skuPricePreviewsById: t_,
            previewErrorsById: tm,
        } = (0, G.Z)({
            applicationId: null != ei ? ei : Y.CL,
            skuIDs: $,
            currentPaymentSourceId: eE,
            isGift: ee,
            excludeSKUPurchasePreviews: el,
        }),
        th = tf[null != eV ? eV : ""],
        tg = null != eV ? tm[eV] : null,
        [tE, tb] = i.useState(tg),
        ty = i.useMemo(() => {
            if (null == eV) return null;
            let e = t_[eV];
            return null == e ? null : e[null != eE ? eE : S.c];
        }, [eV, t_, eE]),
        { data: tO } = (0, m.IX)(ei),
        tv = O.Sb.useSetting(),
        tS = (0, u.e7)([f.Z], () => f.Z.getFetchState());
    i.useEffect(() => {
        null != tO && (0, c.yE)(tO.flags, H.udG.EMBEDDED) && tv && null == tS && (0, p.$h)();
    }, [tO, tv, tS]);
    let tI =
            (0, c.yE)(null != (t = null == tO ? void 0 : tO.flags) ? t : 0, H.udG.EMBEDDED) &&
            (0, c.yE)(null != (n = null == tO ? void 0 : tO.flags) ? n : 0, H.udG.EMBEDDED_IAP),
        tT = (0, u.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === ei;
            }),
        ),
        tA = null == tT ? void 0 : tT.compositeInstanceId,
        tC = (0, u.e7)([T.Z], () => (null != eV ? T.Z.getForSKU(eV) : null), [eV]),
        [tN, tP] = i.useState(null),
        tR = null != (o = null == K ? void 0 : K.inReverseTrial) && o && !ee,
        tD = (0, y.Z)({ location: "PaymentModal" }) && ts,
        { isDisplayingWowMomentConfirmation: tw } = (0, u.cj)([b.Z], () => ({
            isDisplayingWowMomentConfirmation: b.Z.isDisplayingWowMomentConfirmation,
        })),
        tx = tD ? W.premiumBrandRefreshBackground : void 0,
        { enabled: tL } = (0, E.l)({ location: "PaymentContext" }),
        tj = (0, R.uH)({ location: "PaymentModal" }),
        tM = i.useMemo(() => {
            if (tj) return V.cL.APPLE_PAYMENT_LINK;
        }, [tj]),
        tk = i.useMemo(() => null != eH && eH.id === Y.Xh.PREMIUM_GROUP_MONTH, [eH]);
    return (0, r.jsx)(X.Provider, {
        value: Q(
            z(
                {
                    stripe: eu,
                    paymentElementsEnabled: tL,
                    contextMetadata: eF,
                    blockedPayments: ed,
                    activeSubscription: K,
                    hasFetchedSubscriptions: ef,
                    hasFetchedSubscriptionPlans: ev,
                    updatedSubscription: e6,
                    setUpdatedSubscription: e7,
                    subscriptionMetadataRequest: e9,
                    setSubscriptionMetadataRequest: te,
                    hasFetchedPaymentSources: ey,
                    paymentSources: eh,
                    hasPaymentSources: eg,
                    paymentSourceId: eE,
                    setPaymentSourceId: eb,
                    priceOptions: eS,
                    setCurrency: eI,
                    currencyLoading: eT,
                    currencies: eA,
                },
                eC,
            ),
            {
                hasAcceptedTerms: eN,
                setHasAcceptedTerms: eP,
                step: eR,
                setStep: eD,
                steps: ew,
                stepConfigs: q,
                breadcrumbs: ex,
                previousStepRef: eL,
                purchaseState: ej,
                setPurchaseState: eM,
                paymentAuthenticationState: eU,
                paymentError: ek,
                purchaseError: eG,
                setPurchaseError: eB,
                purchasePreviewError: tE,
                setPurchasePreviewError: tb,
                purchaseErrorBlockRef: eZ,
                purchaseTokenAuthState: eq,
                purchaseTokenHash: eQ,
                browserCheckoutState: eX,
                browserCheckoutStateLoadId: eJ,
                browserCheckoutStateSkuId: e$,
                browserCheckoutStatePlanId: e0,
                bodyNode: e1,
                setBodyNode: e3,
                footerNode: e2,
                setFooterNode: e4,
                modalOverlayNode: e5,
                setModalOverlayNode: e8,
                selectedSkuId: eV,
                selectedSku: th,
                selectedStoreListing: tC,
                selectedPlan: eH,
                setSelectedSkuId: eW,
                setSelectedPlanId: eK,
                selectedPlanNotification: eY,
                setSelectedPlanNotification: ez,
                readySlideId: tt,
                setReadySlideId: tn,
                defaultPlanId: en,
                isPremium: ts,
                isGift: ee,
                startingFractionalPremiumEndsAtRef: tu,
                startedPaymentFlowWithPaymentSourcesRef: eO,
                startingPremiumSubscriptionPlanIdRef: tl,
                hasFetchedSkus: tp,
                skusById: tf,
                skuPricePreviewsById: t_,
                selectedSkuPricePreview: ty,
                application: tO,
                purchaseType: er,
                isEmbeddedIAP: tI,
                activitySessionId: tA,
                devShelfFetchState: tS,
                entitlementsGranted: tr,
                setEntitlementsGranted: ti,
                appliedUserDiscounts: ta,
                setAppliedUserDiscounts: to,
                referralCode: ea,
                invoicePreview: tN,
                setInvoicePreview: tP,
                inReverseTrial: tR,
                enablePremiumBrandRefresh: tD,
                isDisplayingWowMomentConfirmation: tw,
                premiumBrandRefreshBackgroundClassName: tx,
                wasTier2PremiumBeforePurchase: ec,
                customCheckoutFlow: tM,
                isPremiumGroupPurchase: tk,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: H.OBo,
            stripe: eu,
            children: et,
        }),
    });
}
