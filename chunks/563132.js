(n.d(t, {
    JL: () => q,
    PaymentContextProvider: () => Q
}),
    n(388685),
    n(997841));
var r = n(255367),
    i = n(73800),
    a = n(245364),
    o = n(913527),
    s = n.n(o),
    l = n(772848),
    c = n(442837),
    u = n(211266),
    d = n(115130),
    _ = n(566620),
    f = n(317381),
    p = n(728345),
    h = n(211242),
    m = n(975298),
    g = n(892041),
    E = n(47280),
    b = n(695346),
    y = n(882712),
    O = n(855775),
    v = n(55563),
    I = n(551428),
    T = n(975104),
    S = n(630388),
    A = n(74538),
    N = n(960048),
    C = n(735521),
    R = n(659848),
    P = n(583046),
    w = n(897829),
    D = n(74179),
    L = n(896246),
    x = n(320317),
    k = n(994427),
    M = n(814076),
    j = n(712297),
    U = n(585686),
    G = n(771206),
    B = n(362755),
    V = n(981631),
    F = n(474936),
    Z = n(179742);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                H(e, t, n[t]);
            }));
    }
    return e;
}
function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [z, q, X] = (0, T.Z)();
function Q(e) {
    var t, n, o;
    let { loadId: T, activeSubscription: H, stepConfigs: W, breadcrumbs: q = [], skuIDs: X, isGift: Q = !1, children: J, defaultPlanId: $, purchaseType: ee = V.GZQ.SUBSCRIPTION, applicationId: et, referralCode: en, excludeSubscriptionPlansBySKU: er = !1, excludeSKUPurchasePreviews: ei = !1 } = e,
        ea = (0, G.Z)(),
        eo = (0, h.Q)(),
        es = (0, w.Z)(),
        el = X[0],
        ec = (0, c.e7)([v.Z], () => v.Z.get(el), [el]),
        eu = null == ec ? void 0 : ec.eligiblePaymentGateways,
        {
            paymentSources: ed,
            hasPaymentSources: e_,
            paymentSourceId: ef,
            setPaymentSourceId: ep,
            hasFetchedPaymentSources: eh
        } = (0, D.Z)({
            isGift: Q,
            activeSubscription: H,
            eligiblePaymentGateways: eu
        }),
        em = i.useRef(e_),
        {
            hasFetchedSubscriptionPlans: eg,
            priceOptions: eE,
            setCurrency: eb,
            currencyLoading: ey,
            currencies: eO
        } = (0, P.Z)({
            activeSubscription: H,
            skuIDs: X,
            paymentSourceId: ef,
            isGift: Q,
            excludeSubscriptionPlansBySKU: er
        }),
        ev = (0, M.Z)(),
        [eI, eT] = i.useState(!1),
        {
            step: eS,
            setStep: eA,
            steps: eN,
            breadcrumbsData: eC,
            previousStepRef: eR
        } = (0, U.Z)({
            stepConfigs: W,
            breadcrumbs: q
        }),
        [eP, ew] = (0, k.Z)(eS),
        { paymentError: eD, paymentAuthenticationState: eL } = (0, L.Z)(),
        { purchaseError: ex, purchaseErrorBlockRef: ek, setPurchaseError: eM } = (0, x.Z)(),
        ej = (0, u.Z)(() => {
            let e = null != T ? T : (0, l.Z)();
            return (
                N.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eU, selectedPlan: eG, selectedPlanNotification: eB, setSelectedSkuId: eV, setSelectedPlanId: eF, setSelectedPlanNotification: eZ } = (0, C.Z)(),
        [eH, eY] = (0, c.Wu)([y.Z], () => [y.Z.purchaseTokenAuthState, y.Z.purchaseTokenHash]),
        [eW, eK, ez, eq] = (0, c.Wu)([B.Z], () => [B.Z.browserCheckoutState, B.Z.loadId, B.Z.skuId, B.Z.planId]),
        [eX, eQ] = i.useState(null),
        [eJ, e$] = i.useState(null),
        [e0, e1] = i.useState(null),
        [e2, e3] = i.useState(null),
        [e4, e5] = i.useState(null),
        [e6, e8] = i.useState(void 0),
        [e7, e9] = i.useState([]),
        te = i.useMemo(() => null == eG || (0, A.PV)(eG.id), [eG]),
        tt = i.useRef(null != H ? H.planId : null);
    i.useEffect(() => {
        null == tt.current && null != H && (tt.current = H.planId);
    }, [H]);
    let { endsAt: tn } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0
        }),
        tr = i.useRef(tn.isSame(s()(0)) ? null : tn);
    (i.useEffect(() => {
        null != tr.current || tn.isSame(s()(0)) || (tr.current = tn);
    }, [tn]),
        (0, R.m)(el, ef));
    let {
            skusById: ti,
            hasFetchedSkus: ta,
            skuPricePreviewsById: to,
            previewErrorsById: ts
        } = (0, j.Z)({
            applicationId: null != et ? et : F.CL,
            skuIDs: X,
            currentPaymentSourceId: ef,
            isGift: Q,
            excludeSKUPurchasePreviews: ei
        }),
        tl = ti[null != eU ? eU : ''],
        tc = null != eU ? ts[eU] : null,
        [tu, td] = i.useState(tc),
        t_ = i.useMemo(() => {
            if (null == eU) return null;
            let e = to[eU];
            return null == e ? null : e[null != ef ? ef : O.c];
        }, [eU, to, ef]),
        { data: tf } = (0, p.IX)(et),
        tp = b.Sb.useSetting(),
        th = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tf && (0, S.yE)(tf.flags, V.udG.EMBEDDED) && tp && null == th && (0, _.$h)();
    }, [tf, tp, th]);
    let tm = (0, S.yE)(null != (t = null == tf ? void 0 : tf.flags) ? t : 0, V.udG.EMBEDDED) && (0, S.yE)(null != (n = null == tf ? void 0 : tf.flags) ? n : 0, V.udG.EMBEDDED_IAP),
        tg = (0, c.e7)([f.ZP], () =>
            Array.from(f.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === et;
            })
        ),
        tE = null == tg ? void 0 : tg.compositeInstanceId,
        tb = (0, c.e7)([I.Z], () => (null != eU ? I.Z.getForSKU(eU) : null), [eU]),
        [ty, tO] = i.useState(null),
        tv = null != (o = null == H ? void 0 : H.inReverseTrial) && o && !Q,
        tI = (0, E.Z)({ location: 'PaymentModal' }) && te,
        tT = tI ? Z.premiumBrandRefreshBackground : void 0,
        { enabled: tS } = (0, g.l)({ location: 'PaymentModal' });
    return (0, r.jsx)(z.Provider, {
        value: K(
            Y(
                {
                    stripe: ea,
                    paymentElementsEnabled: tS,
                    contextMetadata: ej,
                    blockedPayments: eo,
                    activeSubscription: H,
                    hasFetchedSubscriptions: es,
                    hasFetchedSubscriptionPlans: eg,
                    updatedSubscription: e2,
                    setUpdatedSubscription: e3,
                    subscriptionMetadataRequest: e4,
                    setSubscriptionMetadataRequest: e5,
                    hasFetchedPaymentSources: eh,
                    paymentSources: ed,
                    hasPaymentSources: e_,
                    paymentSourceId: ef,
                    setPaymentSourceId: ep,
                    priceOptions: eE,
                    setCurrency: eb,
                    currencyLoading: ey,
                    currencies: eO
                },
                ev
            ),
            {
                hasAcceptedTerms: eI,
                setHasAcceptedTerms: eT,
                step: eS,
                setStep: eA,
                steps: eN,
                stepConfigs: W,
                breadcrumbs: eC,
                previousStepRef: eR,
                purchaseState: eP,
                setPurchaseState: ew,
                paymentAuthenticationState: eL,
                paymentError: eD,
                purchaseError: ex,
                setPurchaseError: eM,
                purchasePreviewError: tu,
                setPurchasePreviewError: td,
                purchaseErrorBlockRef: ek,
                purchaseTokenAuthState: eH,
                purchaseTokenHash: eY,
                browserCheckoutState: eW,
                browserCheckoutStateLoadId: eK,
                browserCheckoutStateSkuId: ez,
                browserCheckoutStatePlanId: eq,
                bodyNode: eX,
                setBodyNode: eQ,
                footerNode: eJ,
                setFooterNode: e$,
                modalOverlayNode: e0,
                setModalOverlayNode: e1,
                selectedSkuId: eU,
                selectedSku: tl,
                selectedStoreListing: tb,
                selectedPlan: eG,
                setSelectedSkuId: eV,
                setSelectedPlanId: eF,
                selectedPlanNotification: eB,
                setSelectedPlanNotification: eZ,
                readySlideId: e6,
                setReadySlideId: e8,
                defaultPlanId: $,
                isPremium: te,
                startingFractionalPremiumEndsAtRef: tr,
                startedPaymentFlowWithPaymentSourcesRef: em,
                startingPremiumSubscriptionPlanIdRef: tt,
                hasFetchedSkus: ta,
                skusById: ti,
                skuPricePreviewsById: to,
                selectedSkuPricePreview: t_,
                application: tf,
                purchaseType: ee,
                isEmbeddedIAP: tm,
                activitySessionId: tE,
                devShelfFetchState: th,
                entitlementsGranted: e7,
                setEntitlementsGranted: e9,
                referralCode: en,
                invoicePreview: ty,
                setInvoicePreview: tO,
                inReverseTrial: tv,
                enablePremiumBrandRefresh: tI,
                premiumBrandRefreshBackgroundClassName: tT
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: V.OBo,
            stripe: ea,
            children: J
        })
    });
}
