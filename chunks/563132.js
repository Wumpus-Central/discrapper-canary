n.d(t, {
    JL: () => W,
    PaymentContextProvider: () => z
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
    g = n(247490),
    E = n(695346),
    b = n(882712),
    y = n(855775),
    O = n(55563),
    v = n(551428),
    I = n(975104),
    S = n(630388),
    T = n(74538),
    A = n(960048),
    N = n(735521),
    C = n(583046),
    P = n(897829),
    R = n(74179),
    w = n(896246),
    D = n(320317),
    L = n(994427),
    x = n(814076),
    k = n(712297),
    M = n(585686),
    j = n(771206),
    U = n(362755),
    G = n(981631),
    B = n(474936);
function F(e, t, n) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [Y, W, K] = (0, I.Z)();
function z(e) {
    var t, n, o;
    let { loadId: I, activeSubscription: F, stepConfigs: Z, breadcrumbs: W = [], skuIDs: K, isGift: z = !1, children: q, defaultPlanId: Q, purchaseType: X = G.GZQ.SUBSCRIPTION, applicationId: J, referralCode: $, repeatPurchase: ee = !1, excludeSubscriptionPlansBySKU: et = !1 } = e,
        en = (0, j.Z)(),
        er = (0, h.Q)(),
        ei = (0, P.Z)(),
        ea = K[0],
        eo = (0, c.e7)([O.Z], () => O.Z.get(ea), [ea]),
        es = null == eo ? void 0 : eo.eligiblePaymentGateways,
        {
            paymentSources: el,
            hasPaymentSources: ec,
            paymentSourceId: eu,
            setPaymentSourceId: ed,
            hasFetchedPaymentSources: ef
        } = (0, R.Z)({
            isGift: z,
            activeSubscription: F,
            eligiblePaymentGateways: es
        }),
        e_ = i.useRef(ec),
        {
            hasFetchedSubscriptionPlans: ep,
            priceOptions: eh,
            setCurrency: em,
            currencyLoading: eg,
            currencies: eE
        } = (0, C.Z)({
            activeSubscription: F,
            skuIDs: K,
            paymentSourceId: eu,
            isGift: z,
            excludeSubscriptionPlansBySKU: et
        }),
        eb = (0, x.Z)(),
        [ey, eO] = i.useState(!1),
        {
            step: ev,
            setStep: eI,
            steps: eS,
            breadcrumbsData: eT,
            previousStepRef: eA
        } = (0, M.Z)({
            stepConfigs: Z,
            breadcrumbs: W
        }),
        [eN, eC] = (0, L.Z)(ev),
        { paymentError: eP, paymentAuthenticationState: eR } = (0, w.Z)(),
        { purchaseError: ew, purchaseErrorBlockRef: eD, setPurchaseError: eL } = (0, D.Z)(),
        ex = (0, u.Z)(() => {
            let e = null != I ? I : (0, l.Z)();
            return (
                A.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: ek, selectedPlan: eM, selectedPlanNotification: ej, setSelectedSkuId: eU, setSelectedPlanId: eG, setSelectedPlanNotification: eB } = (0, N.Z)(),
        [eF, eV] = (0, c.Wu)([b.Z], () => [b.Z.purchaseTokenAuthState, b.Z.purchaseTokenHash]),
        [eZ, eH, eY, eW] = (0, c.Wu)([U.Z], () => [U.Z.browserCheckoutState, U.Z.loadId, U.Z.skuId, U.Z.planId]),
        [eK, ez] = i.useState(null),
        [eq, eQ] = i.useState(null),
        [eX, eJ] = i.useState(null),
        [e$, e0] = i.useState(null),
        [e1, e2] = i.useState(null),
        [e3, e4] = i.useState(void 0),
        [e5, e6] = i.useState([]),
        e8 = i.useMemo(() => null == eM || (0, T.PV)(eM.id), [eM]),
        e7 = i.useRef(null != F ? F.planId : null);
    i.useEffect(() => {
        null == e7.current && null != F && (e7.current = F.planId);
    }, [F]);
    let { endsAt: e9 } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0
        }),
        te = i.useRef(e9.isSame(s()(0)) ? null : e9);
    i.useEffect(() => {
        null != te.current || e9.isSame(s()(0)) || (te.current = e9);
    }, [e9]);
    let {
            skusById: tt,
            hasFetchedSkus: tn,
            skuPricePreviewsById: tr,
            previewErrorsById: ti
        } = (0, k.Z)({
            applicationId: null != J ? J : B.CL,
            skuIDs: K,
            currentPaymentSourceId: eu,
            isGift: z
        }),
        ta = tt[null != ek ? ek : ''],
        to = null != ek ? ti[ek] : null,
        [ts, tl] = i.useState(to),
        tc = i.useMemo(() => {
            if (null == ek) return null;
            let e = tr[ek];
            return null == e ? null : e[null != eu ? eu : y.c];
        }, [ek, tr, eu]),
        { data: tu } = (0, p.IX)(J),
        td = E.Sb.useSetting(),
        tf = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tu && (0, S.yE)(tu.flags, G.udG.EMBEDDED) && td && null == tf && (0, f.$h)();
    }, [tu, td, tf]);
    let t_ = (0, S.yE)(null != (t = null == tu ? void 0 : tu.flags) ? t : 0, G.udG.EMBEDDED) && (0, S.yE)(null != (n = null == tu ? void 0 : tu.flags) ? n : 0, G.udG.EMBEDDED_IAP),
        tp = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === J;
            })
        ),
        th = null == tp ? void 0 : tp.compositeInstanceId,
        tm = (0, c.e7)([v.Z], () => (null != ek ? v.Z.getForSKU(ek) : null), [ek]),
        [tg, tE] = i.useState(null),
        tb = null != (o = null == F ? void 0 : F.inReverseTrial) && o && !z,
        ty = (0, g.Z)({ location: 'PaymentModal' }) && e8;
    return (0, r.jsx)(Y.Provider, {
        value: H(
            V(
                {
                    stripe: en,
                    contextMetadata: ex,
                    blockedPayments: er,
                    activeSubscription: F,
                    hasFetchedSubscriptions: ei,
                    hasFetchedSubscriptionPlans: ep,
                    updatedSubscription: e$,
                    setUpdatedSubscription: e0,
                    subscriptionMetadataRequest: e1,
                    setSubscriptionMetadataRequest: e2,
                    hasFetchedPaymentSources: ef,
                    paymentSources: el,
                    hasPaymentSources: ec,
                    paymentSourceId: eu,
                    setPaymentSourceId: ed,
                    priceOptions: eh,
                    setCurrency: em,
                    currencyLoading: eg,
                    currencies: eE
                },
                eb
            ),
            {
                hasAcceptedTerms: ey,
                setHasAcceptedTerms: eO,
                step: ev,
                setStep: eI,
                steps: eS,
                stepConfigs: Z,
                breadcrumbs: eT,
                previousStepRef: eA,
                purchaseState: eN,
                setPurchaseState: eC,
                paymentAuthenticationState: eR,
                paymentError: eP,
                purchaseError: ew,
                setPurchaseError: eL,
                purchasePreviewError: ts,
                setPurchasePreviewError: tl,
                purchaseErrorBlockRef: eD,
                purchaseTokenAuthState: eF,
                purchaseTokenHash: eV,
                browserCheckoutState: eZ,
                browserCheckoutStateLoadId: eH,
                browserCheckoutStateSkuId: eY,
                browserCheckoutStatePlanId: eW,
                bodyNode: eK,
                setBodyNode: ez,
                footerNode: eq,
                setFooterNode: eQ,
                modalOverlayNode: eX,
                setModalOverlayNode: eJ,
                selectedSkuId: ek,
                selectedSku: ta,
                selectedStoreListing: tm,
                selectedPlan: eM,
                setSelectedSkuId: eU,
                setSelectedPlanId: eG,
                selectedPlanNotification: ej,
                setSelectedPlanNotification: eB,
                readySlideId: e3,
                setReadySlideId: e4,
                defaultPlanId: Q,
                isPremium: e8,
                startingFractionalPremiumEndsAtRef: te,
                startedPaymentFlowWithPaymentSourcesRef: e_,
                startingPremiumSubscriptionPlanIdRef: e7,
                hasFetchedSkus: tn,
                skusById: tt,
                skuPricePreviewsById: tr,
                selectedSkuPricePreview: tc,
                application: tu,
                purchaseType: X,
                isEmbeddedIAP: t_,
                activitySessionId: th,
                devShelfFetchState: tf,
                entitlementsGranted: e5,
                setEntitlementsGranted: e6,
                referralCode: $,
                invoicePreview: tg,
                setInvoicePreview: tE,
                repeatPurchase: ee,
                inReverseTrial: tb,
                enablePremiumRebrandDesign: ty
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: G.OBo,
            stripe: en,
            children: q
        })
    });
}
