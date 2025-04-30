n.d(t, {
    JL: () => Y,
    PaymentContextProvider: () => K
}),
    n(388685),
    n(997841);
var r = n(255367),
    i = n(73800),
    a = n(957957),
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
    g = n(695346),
    E = n(882712),
    b = n(855775),
    y = n(55563),
    O = n(551428),
    v = n(975104),
    I = n(630388),
    S = n(74538),
    T = n(960048),
    A = n(735521),
    N = n(583046),
    C = n(897829),
    R = n(74179),
    P = n(896246),
    w = n(320317),
    D = n(994427),
    L = n(814076),
    x = n(712297),
    M = n(585686),
    k = n(771206),
    j = n(362755),
    U = n(981631),
    G = n(474936);
function B(e, t, n) {
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
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function F(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [H, Y, W] = (0, v.Z)();
function K(e) {
    var t, n, o;
    let { loadId: v, activeSubscription: B, stepConfigs: F, breadcrumbs: Y = [], skuIDs: W, isGift: K = !1, children: z, defaultPlanId: q, purchaseType: Q = U.GZQ.SUBSCRIPTION, applicationId: X, referralCode: J, repeatPurchase: $ = !1 } = e,
        ee = (0, k.Z)(),
        et = (0, h.Q)(),
        en = (0, C.Z)(),
        er = W[0],
        ei = (0, c.e7)([y.Z], () => y.Z.get(er), [er]),
        ea = null == ei ? void 0 : ei.eligiblePaymentGateways,
        {
            paymentSources: eo,
            hasPaymentSources: es,
            paymentSourceId: el,
            setPaymentSourceId: ec,
            hasFetchedPaymentSources: eu
        } = (0, R.Z)({
            isGift: K,
            activeSubscription: B,
            eligiblePaymentGateways: ea
        }),
        ed = i.useRef(es),
        {
            hasFetchedSubscriptionPlans: ef,
            priceOptions: e_,
            setCurrency: ep,
            currencyLoading: eh,
            currencies: em
        } = (0, N.Z)({
            activeSubscription: B,
            skuIDs: W,
            paymentSourceId: el,
            isGift: K
        }),
        eg = (0, L.Z)(),
        [eE, eb] = i.useState(!1),
        {
            step: ey,
            setStep: eO,
            steps: ev,
            breadcrumbsData: eI,
            previousStepRef: eS
        } = (0, M.Z)({
            stepConfigs: F,
            breadcrumbs: Y
        }),
        [eT, eA] = (0, D.Z)(ey),
        { paymentError: eN, paymentAuthenticationState: eC } = (0, P.Z)(),
        { purchaseError: eR, purchaseErrorBlockRef: eP, setPurchaseError: ew } = (0, w.Z)(),
        eD = (0, u.Z)(() => {
            let e = null != v ? v : (0, l.Z)();
            return (
                T.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eL, selectedPlan: ex, selectedPlanNotification: eM, setSelectedSkuId: ek, setSelectedPlanId: ej, setSelectedPlanNotification: eU } = (0, A.Z)(),
        [eG, eB] = (0, c.Wu)([E.Z], () => [E.Z.purchaseTokenAuthState, E.Z.purchaseTokenHash]),
        [eV, eF, eZ, eH] = (0, c.Wu)([j.Z], () => [j.Z.browserCheckoutState, j.Z.loadId, j.Z.skuId, j.Z.planId]),
        [eY, eW] = i.useState(null),
        [eK, ez] = i.useState(null),
        [eq, eQ] = i.useState(null),
        [eX, eJ] = i.useState(null),
        [e$, e0] = i.useState(null),
        [e1, e2] = i.useState(void 0),
        [e3, e4] = i.useState([]),
        e5 = i.useMemo(() => null == ex || (0, S.PV)(ex.id), [ex]),
        e6 = i.useRef(null != B ? B.planId : null);
    i.useEffect(() => {
        null == e6.current && null != B && (e6.current = B.planId);
    }, [B]);
    let { endsAt: e8 } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0
        }),
        e7 = i.useRef(e8.isSame(s()(0)) ? null : e8);
    i.useEffect(() => {
        null != e7.current || e8.isSame(s()(0)) || (e7.current = e8);
    }, [e8]);
    let {
            skusById: e9,
            hasFetchedSkus: te,
            skuPricePreviewsById: tt,
            previewErrorsById: tn
        } = (0, x.Z)({
            applicationId: null != X ? X : G.CL,
            skuIDs: W,
            currentPaymentSourceId: el,
            isGift: K
        }),
        tr = e9[null != eL ? eL : ''],
        ti = null != eL ? tn[eL] : null,
        [ta, to] = i.useState(ti),
        ts = i.useMemo(() => {
            if (null == eL) return null;
            let e = tt[eL];
            return null == e ? null : e[null != el ? el : b.c];
        }, [eL, tt, el]),
        { data: tl } = (0, p.IX)(X),
        tc = g.Sb.useSetting(),
        tu = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tl && (0, I.yE)(tl.flags, U.udG.EMBEDDED) && tc && null == tu && (0, f.$h)();
    }, [tl, tc, tu]);
    let td = (0, I.yE)(null != (t = null == tl ? void 0 : tl.flags) ? t : 0, U.udG.EMBEDDED) && (0, I.yE)(null != (n = null == tl ? void 0 : tl.flags) ? n : 0, U.udG.EMBEDDED_IAP),
        tf = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === X;
            })
        ),
        t_ = null == tf ? void 0 : tf.compositeInstanceId,
        tp = (0, c.e7)([O.Z], () => (null != eL ? O.Z.getForSKU(eL) : null), [eL]),
        [th, tm] = i.useState(null),
        tg = null != (o = null == B ? void 0 : B.inReverseTrial) && o && !K;
    return (0, r.jsx)(H.Provider, {
        value: Z(
            V(
                {
                    stripe: ee,
                    contextMetadata: eD,
                    blockedPayments: et,
                    activeSubscription: B,
                    hasFetchedSubscriptions: en,
                    hasFetchedSubscriptionPlans: ef,
                    updatedSubscription: eX,
                    setUpdatedSubscription: eJ,
                    subscriptionMetadataRequest: e$,
                    setSubscriptionMetadataRequest: e0,
                    hasFetchedPaymentSources: eu,
                    paymentSources: eo,
                    hasPaymentSources: es,
                    paymentSourceId: el,
                    setPaymentSourceId: ec,
                    priceOptions: e_,
                    setCurrency: ep,
                    currencyLoading: eh,
                    currencies: em
                },
                eg
            ),
            {
                hasAcceptedTerms: eE,
                setHasAcceptedTerms: eb,
                step: ey,
                setStep: eO,
                steps: ev,
                stepConfigs: F,
                breadcrumbs: eI,
                previousStepRef: eS,
                purchaseState: eT,
                setPurchaseState: eA,
                paymentAuthenticationState: eC,
                paymentError: eN,
                purchaseError: eR,
                setPurchaseError: ew,
                purchasePreviewError: ta,
                setPurchasePreviewError: to,
                purchaseErrorBlockRef: eP,
                purchaseTokenAuthState: eG,
                purchaseTokenHash: eB,
                browserCheckoutState: eV,
                browserCheckoutStateLoadId: eF,
                browserCheckoutStateSkuId: eZ,
                browserCheckoutStatePlanId: eH,
                bodyNode: eY,
                setBodyNode: eW,
                footerNode: eK,
                setFooterNode: ez,
                modalOverlayNode: eq,
                setModalOverlayNode: eQ,
                selectedSkuId: eL,
                selectedSku: tr,
                selectedStoreListing: tp,
                selectedPlan: ex,
                setSelectedSkuId: ek,
                setSelectedPlanId: ej,
                selectedPlanNotification: eM,
                setSelectedPlanNotification: eU,
                readySlideId: e1,
                setReadySlideId: e2,
                defaultPlanId: q,
                isPremium: e5,
                startingFractionalPremiumEndsAtRef: e7,
                startedPaymentFlowWithPaymentSourcesRef: ed,
                startingPremiumSubscriptionPlanIdRef: e6,
                hasFetchedSkus: te,
                skusById: e9,
                skuPricePreviewsById: tt,
                selectedSkuPricePreview: ts,
                application: tl,
                purchaseType: Q,
                isEmbeddedIAP: td,
                activitySessionId: t_,
                devShelfFetchState: tu,
                entitlementsGranted: e3,
                setEntitlementsGranted: e4,
                referralCode: J,
                invoicePreview: th,
                setInvoicePreview: tm,
                repeatPurchase: $,
                inReverseTrial: tg
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: U.OBo,
            stripe: ee,
            children: z
        })
    });
}
