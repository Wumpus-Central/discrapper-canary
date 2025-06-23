n.d(t, {
    JL: () => z,
    PaymentContextProvider: () => X
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
    g = n(483454),
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
    R = n(583046),
    P = n(897829),
    w = n(74179),
    D = n(896246),
    L = n(320317),
    x = n(994427),
    k = n(814076),
    M = n(712297),
    j = n(585686),
    U = n(771206),
    G = n(362755),
    B = n(981631),
    V = n(474936),
    F = n(179742);
function Z(e, t, n) {
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
function H(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [K, z, q] = (0, T.Z)();
function X(e) {
    var t, n, o;
    let { loadId: T, activeSubscription: Z, stepConfigs: Y, breadcrumbs: z = [], skuIDs: q, isGift: X = !1, children: Q, defaultPlanId: J, purchaseType: $ = B.GZQ.SUBSCRIPTION, applicationId: ee, referralCode: et, excludeSubscriptionPlansBySKU: en = !1, excludeSKUPurchasePreviews: er = !1 } = e,
        ei = (0, U.Z)(),
        ea = (0, h.Q)(),
        eo = (0, P.Z)(),
        es = q[0],
        el = (0, c.e7)([v.Z], () => v.Z.get(es), [es]),
        ec = null == el ? void 0 : el.eligiblePaymentGateways,
        {
            paymentSources: eu,
            hasPaymentSources: ed,
            paymentSourceId: ef,
            setPaymentSourceId: e_,
            hasFetchedPaymentSources: ep
        } = (0, w.Z)({
            isGift: X,
            activeSubscription: Z,
            eligiblePaymentGateways: ec
        }),
        eh = i.useRef(ed),
        {
            hasFetchedSubscriptionPlans: em,
            priceOptions: eg,
            setCurrency: eE,
            currencyLoading: eb,
            currencies: ey
        } = (0, R.Z)({
            activeSubscription: Z,
            skuIDs: q,
            paymentSourceId: ef,
            isGift: X,
            excludeSubscriptionPlansBySKU: en
        }),
        eO = (0, k.Z)(),
        [ev, eI] = i.useState(!1),
        {
            step: eT,
            setStep: eS,
            steps: eA,
            breadcrumbsData: eN,
            previousStepRef: eC
        } = (0, j.Z)({
            stepConfigs: Y,
            breadcrumbs: z
        }),
        [eR, eP] = (0, x.Z)(eT),
        { paymentError: ew, paymentAuthenticationState: eD } = (0, D.Z)(),
        { purchaseError: eL, purchaseErrorBlockRef: ex, setPurchaseError: ek } = (0, L.Z)(),
        eM = (0, u.Z)(() => {
            let e = null != T ? T : (0, l.Z)();
            return (
                N.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: ej, selectedPlan: eU, selectedPlanNotification: eG, setSelectedSkuId: eB, setSelectedPlanId: eV, setSelectedPlanNotification: eF } = (0, C.Z)(),
        [eZ, eH] = (0, c.Wu)([y.Z], () => [y.Z.purchaseTokenAuthState, y.Z.purchaseTokenHash]),
        [eY, eW, eK, ez] = (0, c.Wu)([G.Z], () => [G.Z.browserCheckoutState, G.Z.loadId, G.Z.skuId, G.Z.planId]),
        [eq, eX] = i.useState(null),
        [eQ, eJ] = i.useState(null),
        [e$, e0] = i.useState(null),
        [e1, e2] = i.useState(null),
        [e3, e4] = i.useState(null),
        [e5, e6] = i.useState(void 0),
        [e8, e7] = i.useState([]),
        e9 = i.useMemo(() => null == eU || (0, A.PV)(eU.id), [eU]),
        te = i.useRef(null != Z ? Z.planId : null);
    i.useEffect(() => {
        null == te.current && null != Z && (te.current = Z.planId);
    }, [Z]);
    let { endsAt: tt } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0
        }),
        tn = i.useRef(tt.isSame(s()(0)) ? null : tt);
    i.useEffect(() => {
        null != tn.current || tt.isSame(s()(0)) || (tn.current = tt);
    }, [tt]);
    let {
            skusById: tr,
            hasFetchedSkus: ti,
            skuPricePreviewsById: ta,
            previewErrorsById: to
        } = (0, M.Z)({
            applicationId: null != ee ? ee : V.CL,
            skuIDs: q,
            currentPaymentSourceId: ef,
            isGift: X,
            excludeSKUPurchasePreviews: er
        }),
        ts = tr[null != ej ? ej : ''],
        tl = null != ej ? to[ej] : null,
        [tc, tu] = i.useState(tl),
        td = i.useMemo(() => {
            if (null == ej) return null;
            let e = ta[ej];
            return null == e ? null : e[null != ef ? ef : O.c];
        }, [ej, ta, ef]),
        { data: tf } = (0, p.IX)(ee),
        t_ = b.Sb.useSetting(),
        tp = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tf && (0, S.yE)(tf.flags, B.udG.EMBEDDED) && t_ && null == tp && (0, f.$h)();
    }, [tf, t_, tp]);
    let th = (0, S.yE)(null != (t = null == tf ? void 0 : tf.flags) ? t : 0, B.udG.EMBEDDED) && (0, S.yE)(null != (n = null == tf ? void 0 : tf.flags) ? n : 0, B.udG.EMBEDDED_IAP),
        tm = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === ee;
            })
        ),
        tg = null == tm ? void 0 : tm.compositeInstanceId,
        tE = (0, c.e7)([I.Z], () => (null != ej ? I.Z.getForSKU(ej) : null), [ej]),
        [tb, ty] = i.useState(null),
        tO = null != (o = null == Z ? void 0 : Z.inReverseTrial) && o && !X,
        tv = (0, E.Z)({ location: 'PaymentModal' }) && e9,
        tI = tv ? F.premiumBrandRefreshBackground : void 0,
        { enabled: tT } = (0, g.I9)({ location: 'PaymentModal' }),
        { elementsOptions: tS } = (0, g.ai)({ shouldGenerateSetupIntent: !1 });
    return (0, r.jsx)(K.Provider, {
        value: W(
            H(
                {
                    stripe: ei,
                    paymentElementsEnabled: tT,
                    contextMetadata: eM,
                    blockedPayments: ea,
                    activeSubscription: Z,
                    hasFetchedSubscriptions: eo,
                    hasFetchedSubscriptionPlans: em,
                    updatedSubscription: e1,
                    setUpdatedSubscription: e2,
                    subscriptionMetadataRequest: e3,
                    setSubscriptionMetadataRequest: e4,
                    hasFetchedPaymentSources: ep,
                    paymentSources: eu,
                    hasPaymentSources: ed,
                    paymentSourceId: ef,
                    setPaymentSourceId: e_,
                    priceOptions: eg,
                    setCurrency: eE,
                    currencyLoading: eb,
                    currencies: ey
                },
                eO
            ),
            {
                hasAcceptedTerms: ev,
                setHasAcceptedTerms: eI,
                step: eT,
                setStep: eS,
                steps: eA,
                stepConfigs: Y,
                breadcrumbs: eN,
                previousStepRef: eC,
                purchaseState: eR,
                setPurchaseState: eP,
                paymentAuthenticationState: eD,
                paymentError: ew,
                purchaseError: eL,
                setPurchaseError: ek,
                purchasePreviewError: tc,
                setPurchasePreviewError: tu,
                purchaseErrorBlockRef: ex,
                purchaseTokenAuthState: eZ,
                purchaseTokenHash: eH,
                browserCheckoutState: eY,
                browserCheckoutStateLoadId: eW,
                browserCheckoutStateSkuId: eK,
                browserCheckoutStatePlanId: ez,
                bodyNode: eq,
                setBodyNode: eX,
                footerNode: eQ,
                setFooterNode: eJ,
                modalOverlayNode: e$,
                setModalOverlayNode: e0,
                selectedSkuId: ej,
                selectedSku: ts,
                selectedStoreListing: tE,
                selectedPlan: eU,
                setSelectedSkuId: eB,
                setSelectedPlanId: eV,
                selectedPlanNotification: eG,
                setSelectedPlanNotification: eF,
                readySlideId: e5,
                setReadySlideId: e6,
                defaultPlanId: J,
                isPremium: e9,
                startingFractionalPremiumEndsAtRef: tn,
                startedPaymentFlowWithPaymentSourcesRef: eh,
                startingPremiumSubscriptionPlanIdRef: te,
                hasFetchedSkus: ti,
                skusById: tr,
                skuPricePreviewsById: ta,
                selectedSkuPricePreview: td,
                application: tf,
                purchaseType: $,
                isEmbeddedIAP: th,
                activitySessionId: tg,
                devShelfFetchState: tp,
                entitlementsGranted: e8,
                setEntitlementsGranted: e7,
                referralCode: et,
                invoicePreview: tb,
                setInvoicePreview: ty,
                inReverseTrial: tO,
                enablePremiumBrandRefresh: tv,
                premiumBrandRefreshBackgroundClassName: tI
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: H({}, B.OBo, tT && tS),
            stripe: ei,
            children: Q
        })
    });
}
