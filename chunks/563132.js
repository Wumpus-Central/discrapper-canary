n.d(t, {
    JL: () => J,
    Lq: () => Q,
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
    _ = n(566620),
    p = n(317381),
    h = n(728345),
    m = n(211242),
    g = n(975298),
    E = n(892041),
    b = n(453227),
    y = n(283066),
    O = n(695346),
    v = n(882712),
    I = n(855775),
    T = n(55563),
    S = n(551428),
    A = n(975104),
    C = n(74538),
    N = n(960048),
    R = n(735521),
    P = n(325100),
    D = n(659848),
    w = n(583046),
    L = n(897829),
    x = n(74179),
    M = n(896246),
    k = n(320317),
    j = n(994427),
    U = n(814076),
    G = n(712297),
    B = n(585686),
    Z = n(771206),
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
function X(e, t) {
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
let [Q, J, $] = (0, A.Z)();
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
            excludeSubscriptionPlansBySKU: eo = !1,
            excludeSKUPurchasePreviews: es = !1,
            wasTier2PremiumBeforePurchase: el = !1,
        } = e,
        ec = (0, Z.Z)(),
        eu = (0, m.Q)(),
        ed = (0, L.Z)(),
        ef = $[0],
        e_ = (0, u.e7)([T.Z], () => T.Z.get(ef), [ef]),
        ep = null == e_ ? void 0 : e_.eligiblePaymentGateways,
        {
            paymentSources: eh,
            hasPaymentSources: em,
            paymentSourceId: eg,
            setPaymentSourceId: eE,
            hasFetchedPaymentSources: eb,
        } = (0, x.Z)({
            isGift: ee,
            activeSubscription: K,
            eligiblePaymentGateways: ep,
        }),
        ey = i.useRef(em),
        {
            hasFetchedSubscriptionPlans: eO,
            priceOptions: ev,
            setCurrency: eI,
            currencyLoading: eT,
            currencies: eS,
        } = (0, w.Z)({
            activeSubscription: K,
            skuIDs: $,
            paymentSourceId: eg,
            isGift: ee,
            excludeSubscriptionPlansBySKU: eo,
        }),
        eA = (0, U.Z)(),
        [eC, eN] = i.useState(!1),
        {
            step: eR,
            setStep: eP,
            steps: eD,
            breadcrumbsData: ew,
            previousStepRef: eL,
        } = (0, B.Z)({
            stepConfigs: q,
            breadcrumbs: J,
        }),
        [ex, eM] = (0, j.Z)(eR),
        { paymentError: ek, paymentAuthenticationState: ej } = (0, M.Z)(),
        { purchaseError: eU, purchaseErrorBlockRef: eG, setPurchaseError: eB } = (0, k.Z)(),
        eZ = (0, d.Z)(() => {
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
            selectedSkuId: eF,
            selectedPlan: eV,
            selectedPlanNotification: eH,
            setSelectedSkuId: eY,
            setSelectedPlanId: eW,
            setSelectedPlanNotification: eK,
        } = (0, R.Z)(),
        [ez, eq] = (0, u.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]),
        [eX, eQ, eJ, e$] = (0, u.Wu)([F.Z], () => [F.Z.browserCheckoutState, F.Z.loadId, F.Z.skuId, F.Z.planId]),
        [e0, e1] = i.useState(null),
        [e3, e2] = i.useState(null),
        [e4, e5] = i.useState(null),
        [e8, e6] = i.useState(null),
        [e7, e9] = i.useState(null),
        [te, tt] = i.useState(void 0),
        [tn, tr] = i.useState([]),
        [ti, ta] = i.useState([]),
        to = i.useMemo(() => null == eV || (0, C.PV)(eV.id), [eV]),
        ts = i.useRef(null != K ? K.planId : null);
    i.useEffect(() => {
        null == ts.current && null != K && (ts.current = K.planId);
    }, [K]);
    let { endsAt: tl } = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        tc = i.useRef(tl.isSame(s()(0)) ? null : tl);
    i.useEffect(() => {
        null != tc.current || tl.isSame(s()(0)) || (tc.current = tl);
    }, [tl]),
        (0, D.m)(ef, eg);
    let {
            skusById: tu,
            hasFetchedSkus: td,
            skuPricePreviewsById: tf,
            previewErrorsById: t_,
        } = (0, G.Z)({
            applicationId: null != ei ? ei : Y.CL,
            skuIDs: $,
            currentPaymentSourceId: eg,
            isGift: ee,
            excludeSKUPurchasePreviews: es,
        }),
        tp = tu[null != eF ? eF : ""],
        th = null != eF ? t_[eF] : null,
        [tm, tg] = i.useState(th),
        tE = i.useMemo(() => {
            if (null == eF) return null;
            let e = tf[eF];
            return null == e ? null : e[null != eg ? eg : I.c];
        }, [eF, tf, eg]),
        { data: tb } = (0, h.IX)(ei),
        ty = O.Sb.useSetting(),
        tO = (0, u.e7)([f.Z], () => f.Z.getFetchState());
    i.useEffect(() => {
        null != tb && (0, c.yE)(tb.flags, H.udG.EMBEDDED) && ty && null == tO && (0, _.$h)();
    }, [tb, ty, tO]);
    let tv =
            (0, c.yE)(null != (t = null == tb ? void 0 : tb.flags) ? t : 0, H.udG.EMBEDDED) &&
            (0, c.yE)(null != (n = null == tb ? void 0 : tb.flags) ? n : 0, H.udG.EMBEDDED_IAP),
        tI = (0, u.e7)([p.ZP], () =>
            Array.from(p.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === ei;
            }),
        ),
        tT = null == tI ? void 0 : tI.compositeInstanceId,
        tS = (0, u.e7)([S.Z], () => (null != eF ? S.Z.getForSKU(eF) : null), [eF]),
        [tA, tC] = i.useState(null),
        tN = null != (o = null == K ? void 0 : K.inReverseTrial) && o && !ee,
        tR = (0, y.Z)({ location: "PaymentModal" }) && to,
        { isDisplayingWowMomentConfirmation: tP } = (0, u.cj)([b.Z], () => ({
            isDisplayingWowMomentConfirmation: b.Z.isDisplayingWowMomentConfirmation,
        })),
        tD = tR ? W.premiumBrandRefreshBackground : void 0,
        { enabled: tw } = (0, E.l)({ location: "PaymentContext" }),
        tL = (0, P.uH)({ location: "PaymentModal" }),
        tx = i.useMemo(() => {
            if (tL) return V.cL.APPLE_PAYMENT_LINK;
        }, [tL]);
    return (0, r.jsx)(Q.Provider, {
        value: X(
            z(
                {
                    stripe: ec,
                    paymentElementsEnabled: tw,
                    contextMetadata: eZ,
                    blockedPayments: eu,
                    activeSubscription: K,
                    hasFetchedSubscriptions: ed,
                    hasFetchedSubscriptionPlans: eO,
                    updatedSubscription: e8,
                    setUpdatedSubscription: e6,
                    subscriptionMetadataRequest: e7,
                    setSubscriptionMetadataRequest: e9,
                    hasFetchedPaymentSources: eb,
                    paymentSources: eh,
                    hasPaymentSources: em,
                    paymentSourceId: eg,
                    setPaymentSourceId: eE,
                    priceOptions: ev,
                    setCurrency: eI,
                    currencyLoading: eT,
                    currencies: eS,
                },
                eA,
            ),
            {
                hasAcceptedTerms: eC,
                setHasAcceptedTerms: eN,
                step: eR,
                setStep: eP,
                steps: eD,
                stepConfigs: q,
                breadcrumbs: ew,
                previousStepRef: eL,
                purchaseState: ex,
                setPurchaseState: eM,
                paymentAuthenticationState: ej,
                paymentError: ek,
                purchaseError: eU,
                setPurchaseError: eB,
                purchasePreviewError: tm,
                setPurchasePreviewError: tg,
                purchaseErrorBlockRef: eG,
                purchaseTokenAuthState: ez,
                purchaseTokenHash: eq,
                browserCheckoutState: eX,
                browserCheckoutStateLoadId: eQ,
                browserCheckoutStateSkuId: eJ,
                browserCheckoutStatePlanId: e$,
                bodyNode: e0,
                setBodyNode: e1,
                footerNode: e3,
                setFooterNode: e2,
                modalOverlayNode: e4,
                setModalOverlayNode: e5,
                selectedSkuId: eF,
                selectedSku: tp,
                selectedStoreListing: tS,
                selectedPlan: eV,
                setSelectedSkuId: eY,
                setSelectedPlanId: eW,
                selectedPlanNotification: eH,
                setSelectedPlanNotification: eK,
                readySlideId: te,
                setReadySlideId: tt,
                defaultPlanId: en,
                isPremium: to,
                isGift: ee,
                startingFractionalPremiumEndsAtRef: tc,
                startedPaymentFlowWithPaymentSourcesRef: ey,
                startingPremiumSubscriptionPlanIdRef: ts,
                hasFetchedSkus: td,
                skusById: tu,
                skuPricePreviewsById: tf,
                selectedSkuPricePreview: tE,
                application: tb,
                purchaseType: er,
                isEmbeddedIAP: tv,
                activitySessionId: tT,
                devShelfFetchState: tO,
                entitlementsGranted: tn,
                setEntitlementsGranted: tr,
                appliedUserDiscounts: ti,
                setAppliedUserDiscounts: ta,
                referralCode: ea,
                invoicePreview: tA,
                setInvoicePreview: tC,
                inReverseTrial: tN,
                enablePremiumBrandRefresh: tR,
                isDisplayingWowMomentConfirmation: tP,
                premiumBrandRefreshBackgroundClassName: tD,
                wasTier2PremiumBeforePurchase: el,
                customCheckoutFlow: tx,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: H.OBo,
            stripe: ec,
            children: et,
        }),
    });
}
