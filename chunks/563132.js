n.d(t, {
    JL: () => H,
    PaymentContextProvider: () => Y
}),
    n(388685),
    n(997841);
var r = n(200651),
    i = n(192379),
    o = n(734530),
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
    g = n(695346),
    E = n(882712),
    b = n(855775),
    y = n(551428),
    v = n(975104),
    O = n(630388),
    I = n(74538),
    S = n(960048),
    T = n(735521),
    N = n(583046),
    A = n(897829),
    C = n(74179),
    R = n(896246),
    P = n(320317),
    w = n(994427),
    D = n(814076),
    L = n(712297),
    x = n(585686),
    M = n(771206),
    k = n(362755),
    j = n(981631),
    U = n(474936);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
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
function F(e, t) {
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
let [Z, H, W] = (0, v.Z)();
function Y(e) {
    var t, n, a;
    let { loadId: v, activeSubscription: G, stepConfigs: V, breadcrumbs: H = [], skuIDs: W, isGift: Y = !1, children: K, defaultPlanId: z, purchaseType: q = j.GZQ.SUBSCRIPTION, applicationId: Q, referralCode: X, repeatPurchase: J = !1 } = e,
        $ = (0, M.Z)(),
        ee = (0, h.Q)(),
        et = (0, A.Z)(),
        {
            paymentSources: en,
            hasPaymentSources: er,
            paymentSourceId: ei,
            setPaymentSourceId: eo,
            hasFetchedPaymentSources: ea
        } = (0, C.Z)({
            isGift: Y,
            activeSubscription: G
        }),
        es = i.useRef(er),
        {
            hasFetchedSubscriptionPlans: el,
            priceOptions: ec,
            setCurrency: eu,
            currencyLoading: ed,
            currencies: ef
        } = (0, N.Z)({
            activeSubscription: G,
            skuIDs: W,
            paymentSourceId: ei,
            isGift: Y
        }),
        e_ = (0, D.Z)(),
        [ep, eh] = i.useState(!1),
        {
            step: em,
            setStep: eg,
            steps: eE,
            breadcrumbsData: eb,
            previousStepRef: ey
        } = (0, x.Z)({
            stepConfigs: V,
            breadcrumbs: H
        }),
        [ev, eO] = (0, w.Z)(em),
        { paymentError: eI, paymentAuthenticationState: eS } = (0, R.Z)(),
        { purchaseError: eT, purchaseErrorBlockRef: eN, setPurchaseError: eA } = (0, P.Z)(),
        eC = (0, u.Z)(() => {
            let e = null != v ? v : (0, l.Z)();
            return (
                S.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eR, selectedPlan: eP, selectedPlanNotification: ew, setSelectedSkuId: eD, setSelectedPlanId: eL, setSelectedPlanNotification: ex } = (0, T.Z)(),
        [eM, ek] = (0, c.Wu)([E.Z], () => [E.Z.purchaseTokenAuthState, E.Z.purchaseTokenHash]),
        [ej, eU, eG, eB] = (0, c.Wu)([k.Z], () => [k.Z.browserCheckoutState, k.Z.loadId, k.Z.skuId, k.Z.planId]),
        [eV, eF] = i.useState(null),
        [eZ, eH] = i.useState(null),
        [eW, eY] = i.useState(null),
        [eK, ez] = i.useState(null),
        [eq, eQ] = i.useState(null),
        [eX, eJ] = i.useState(void 0),
        [e$, e0] = i.useState([]),
        e1 = i.useMemo(() => null == eP || (0, I.PV)(eP.id), [eP]),
        e2 = i.useRef(null != G ? G.planId : null);
    i.useEffect(() => {
        null == e2.current && null != G && (e2.current = G.planId);
    }, [G]);
    let { endsAt: e3 } = (0, m.Z)(),
        e4 = i.useRef(e3.isSame(s()(0)) ? null : e3);
    i.useEffect(() => {
        null != e4.current || e3.isSame(s()(0)) || (e4.current = e3);
    }, [e3]);
    let {
            skusById: e5,
            hasFetchedSkus: e6,
            skuPricePreviewsById: e8,
            previewErrorsById: e7
        } = (0, L.Z)({
            applicationId: null != Q ? Q : U.CL,
            skuIDs: W,
            currentPaymentSourceId: ei,
            isGift: Y
        }),
        e9 = null != eR ? e7[eR] : null,
        [te, tt] = i.useState(e9),
        tn = i.useMemo(() => {
            if (null == eR) return null;
            let e = e8[eR];
            return null == e ? null : e[null != ei ? ei : b.c];
        }, [eR, e8, ei]),
        { data: tr } = (0, p.IX)(Q),
        ti = g.Sb.useSetting(),
        to = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tr && (0, O.yE)(tr.flags, j.udG.EMBEDDED) && ti && null == to && (0, f.$h)();
    }, [tr, ti, to]);
    let ta = (0, O.yE)(null != (t = null == tr ? void 0 : tr.flags) ? t : 0, j.udG.EMBEDDED) && (0, O.yE)(null != (n = null == tr ? void 0 : tr.flags) ? n : 0, j.udG.EMBEDDED_IAP),
        ts = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === Q;
            })
        ),
        tl = null == ts ? void 0 : ts.compositeInstanceId,
        tc = (0, c.e7)([y.Z], () => (null != eR ? y.Z.getForSKU(eR) : null), [eR]),
        tu = e5[null != eR ? eR : ''],
        [td, tf] = i.useState(null),
        t_ = null != (a = null == G ? void 0 : G.inReverseTrial) && a && !Y;
    return (0, r.jsx)(Z.Provider, {
        value: F(
            B(
                {
                    stripe: $,
                    contextMetadata: eC,
                    blockedPayments: ee,
                    activeSubscription: G,
                    hasFetchedSubscriptions: et,
                    hasFetchedSubscriptionPlans: el,
                    updatedSubscription: eK,
                    setUpdatedSubscription: ez,
                    subscriptionMetadataRequest: eq,
                    setSubscriptionMetadataRequest: eQ,
                    hasFetchedPaymentSources: ea,
                    paymentSources: en,
                    hasPaymentSources: er,
                    paymentSourceId: ei,
                    setPaymentSourceId: eo,
                    priceOptions: ec,
                    setCurrency: eu,
                    currencyLoading: ed,
                    currencies: ef
                },
                e_
            ),
            {
                hasAcceptedTerms: ep,
                setHasAcceptedTerms: eh,
                step: em,
                setStep: eg,
                steps: eE,
                stepConfigs: V,
                breadcrumbs: eb,
                previousStepRef: ey,
                purchaseState: ev,
                setPurchaseState: eO,
                paymentAuthenticationState: eS,
                paymentError: eI,
                purchaseError: eT,
                setPurchaseError: eA,
                purchasePreviewError: te,
                setPurchasePreviewError: tt,
                purchaseErrorBlockRef: eN,
                purchaseTokenAuthState: eM,
                purchaseTokenHash: ek,
                browserCheckoutState: ej,
                browserCheckoutStateLoadId: eU,
                browserCheckoutStateSkuId: eG,
                browserCheckoutStatePlanId: eB,
                bodyNode: eV,
                setBodyNode: eF,
                footerNode: eZ,
                setFooterNode: eH,
                modalOverlayNode: eW,
                setModalOverlayNode: eY,
                selectedSkuId: eR,
                selectedSku: tu,
                selectedStoreListing: tc,
                selectedPlan: eP,
                setSelectedSkuId: eD,
                setSelectedPlanId: eL,
                selectedPlanNotification: ew,
                setSelectedPlanNotification: ex,
                readySlideId: eX,
                setReadySlideId: eJ,
                defaultPlanId: z,
                isPremium: e1,
                startingFractionalPremiumEndsAtRef: e4,
                startedPaymentFlowWithPaymentSourcesRef: es,
                startingPremiumSubscriptionPlanIdRef: e2,
                hasFetchedSkus: e6,
                skusById: e5,
                skuPricePreviewsById: e8,
                selectedSkuPricePreview: tn,
                application: tr,
                purchaseType: q,
                isEmbeddedIAP: ta,
                activitySessionId: tl,
                devShelfFetchState: to,
                entitlementsGranted: e$,
                setEntitlementsGranted: e0,
                referralCode: X,
                invoicePreview: td,
                setInvoicePreview: tf,
                repeatPurchase: J,
                inReverseTrial: t_
            }
        ),
        children: (0, r.jsx)(o.Elements, {
            options: j.OBo,
            stripe: $,
            children: K
        })
    });
}
