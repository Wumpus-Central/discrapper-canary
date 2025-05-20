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
    P = n(74179),
    R = n(896246),
    w = n(320317),
    D = n(994427),
    L = n(814076),
    x = n(712297),
    k = n(585686),
    M = n(771206),
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
function F(e) {
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
function V(e, t) {
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
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [H, Y, W] = (0, v.Z)();
function K(e) {
    var t, n, o;
    let { loadId: v, activeSubscription: B, stepConfigs: V, breadcrumbs: Y = [], skuIDs: W, isGift: K = !1, children: z, defaultPlanId: q, purchaseType: Q = U.GZQ.SUBSCRIPTION, applicationId: X, referralCode: J, repeatPurchase: $ = !1, excludeSubscriptionPlansBySKU: ee = !1 } = e,
        et = (0, M.Z)(),
        en = (0, h.Q)(),
        er = (0, C.Z)(),
        ei = W[0],
        ea = (0, c.e7)([y.Z], () => y.Z.get(ei), [ei]),
        eo = null == ea ? void 0 : ea.eligiblePaymentGateways,
        {
            paymentSources: es,
            hasPaymentSources: el,
            paymentSourceId: ec,
            setPaymentSourceId: eu,
            hasFetchedPaymentSources: ed
        } = (0, P.Z)({
            isGift: K,
            activeSubscription: B,
            eligiblePaymentGateways: eo
        }),
        ef = i.useRef(el),
        {
            hasFetchedSubscriptionPlans: e_,
            priceOptions: ep,
            setCurrency: eh,
            currencyLoading: em,
            currencies: eg
        } = (0, N.Z)({
            activeSubscription: B,
            skuIDs: W,
            paymentSourceId: ec,
            isGift: K,
            excludeSubscriptionPlansBySKU: ee
        }),
        eE = (0, L.Z)(),
        [eb, ey] = i.useState(!1),
        {
            step: eO,
            setStep: ev,
            steps: eI,
            breadcrumbsData: eS,
            previousStepRef: eT
        } = (0, k.Z)({
            stepConfigs: V,
            breadcrumbs: Y
        }),
        [eA, eN] = (0, D.Z)(eO),
        { paymentError: eC, paymentAuthenticationState: eP } = (0, R.Z)(),
        { purchaseError: eR, purchaseErrorBlockRef: ew, setPurchaseError: eD } = (0, w.Z)(),
        eL = (0, u.Z)(() => {
            let e = null != v ? v : (0, l.Z)();
            return (
                T.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: ex, selectedPlan: ek, selectedPlanNotification: eM, setSelectedSkuId: ej, setSelectedPlanId: eU, setSelectedPlanNotification: eG } = (0, A.Z)(),
        [eB, eF] = (0, c.Wu)([E.Z], () => [E.Z.purchaseTokenAuthState, E.Z.purchaseTokenHash]),
        [eV, eZ, eH, eY] = (0, c.Wu)([j.Z], () => [j.Z.browserCheckoutState, j.Z.loadId, j.Z.skuId, j.Z.planId]),
        [eW, eK] = i.useState(null),
        [ez, eq] = i.useState(null),
        [eQ, eX] = i.useState(null),
        [eJ, e$] = i.useState(null),
        [e0, e1] = i.useState(null),
        [e2, e3] = i.useState(void 0),
        [e4, e5] = i.useState([]),
        e6 = i.useMemo(() => null == ek || (0, S.PV)(ek.id), [ek]),
        e8 = i.useRef(null != B ? B.planId : null);
    i.useEffect(() => {
        null == e8.current && null != B && (e8.current = B.planId);
    }, [B]);
    let { endsAt: e7 } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0
        }),
        e9 = i.useRef(e7.isSame(s()(0)) ? null : e7);
    i.useEffect(() => {
        null != e9.current || e7.isSame(s()(0)) || (e9.current = e7);
    }, [e7]);
    let {
            skusById: te,
            hasFetchedSkus: tt,
            skuPricePreviewsById: tn,
            previewErrorsById: tr
        } = (0, x.Z)({
            applicationId: null != X ? X : G.CL,
            skuIDs: W,
            currentPaymentSourceId: ec,
            isGift: K
        }),
        ti = te[null != ex ? ex : ''],
        ta = null != ex ? tr[ex] : null,
        [to, ts] = i.useState(ta),
        tl = i.useMemo(() => {
            if (null == ex) return null;
            let e = tn[ex];
            return null == e ? null : e[null != ec ? ec : b.c];
        }, [ex, tn, ec]),
        { data: tc } = (0, p.IX)(X),
        tu = g.Sb.useSetting(),
        td = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tc && (0, I.yE)(tc.flags, U.udG.EMBEDDED) && tu && null == td && (0, f.$h)();
    }, [tc, tu, td]);
    let tf = (0, I.yE)(null != (t = null == tc ? void 0 : tc.flags) ? t : 0, U.udG.EMBEDDED) && (0, I.yE)(null != (n = null == tc ? void 0 : tc.flags) ? n : 0, U.udG.EMBEDDED_IAP),
        t_ = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === X;
            })
        ),
        tp = null == t_ ? void 0 : t_.compositeInstanceId,
        th = (0, c.e7)([O.Z], () => (null != ex ? O.Z.getForSKU(ex) : null), [ex]),
        [tm, tg] = i.useState(null),
        tE = null != (o = null == B ? void 0 : B.inReverseTrial) && o && !K;
    return (0, r.jsx)(H.Provider, {
        value: Z(
            F(
                {
                    stripe: et,
                    contextMetadata: eL,
                    blockedPayments: en,
                    activeSubscription: B,
                    hasFetchedSubscriptions: er,
                    hasFetchedSubscriptionPlans: e_,
                    updatedSubscription: eJ,
                    setUpdatedSubscription: e$,
                    subscriptionMetadataRequest: e0,
                    setSubscriptionMetadataRequest: e1,
                    hasFetchedPaymentSources: ed,
                    paymentSources: es,
                    hasPaymentSources: el,
                    paymentSourceId: ec,
                    setPaymentSourceId: eu,
                    priceOptions: ep,
                    setCurrency: eh,
                    currencyLoading: em,
                    currencies: eg
                },
                eE
            ),
            {
                hasAcceptedTerms: eb,
                setHasAcceptedTerms: ey,
                step: eO,
                setStep: ev,
                steps: eI,
                stepConfigs: V,
                breadcrumbs: eS,
                previousStepRef: eT,
                purchaseState: eA,
                setPurchaseState: eN,
                paymentAuthenticationState: eP,
                paymentError: eC,
                purchaseError: eR,
                setPurchaseError: eD,
                purchasePreviewError: to,
                setPurchasePreviewError: ts,
                purchaseErrorBlockRef: ew,
                purchaseTokenAuthState: eB,
                purchaseTokenHash: eF,
                browserCheckoutState: eV,
                browserCheckoutStateLoadId: eZ,
                browserCheckoutStateSkuId: eH,
                browserCheckoutStatePlanId: eY,
                bodyNode: eW,
                setBodyNode: eK,
                footerNode: ez,
                setFooterNode: eq,
                modalOverlayNode: eQ,
                setModalOverlayNode: eX,
                selectedSkuId: ex,
                selectedSku: ti,
                selectedStoreListing: th,
                selectedPlan: ek,
                setSelectedSkuId: ej,
                setSelectedPlanId: eU,
                selectedPlanNotification: eM,
                setSelectedPlanNotification: eG,
                readySlideId: e2,
                setReadySlideId: e3,
                defaultPlanId: q,
                isPremium: e6,
                startingFractionalPremiumEndsAtRef: e9,
                startedPaymentFlowWithPaymentSourcesRef: ef,
                startingPremiumSubscriptionPlanIdRef: e8,
                hasFetchedSkus: tt,
                skusById: te,
                skuPricePreviewsById: tn,
                selectedSkuPricePreview: tl,
                application: tc,
                purchaseType: Q,
                isEmbeddedIAP: tf,
                activitySessionId: tp,
                devShelfFetchState: td,
                entitlementsGranted: e4,
                setEntitlementsGranted: e5,
                referralCode: J,
                invoicePreview: tm,
                setInvoicePreview: tg,
                repeatPurchase: $,
                inReverseTrial: tE
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: U.OBo,
            stripe: et,
            children: z
        })
    });
}
