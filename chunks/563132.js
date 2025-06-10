n.d(t, {
    JL: () => K,
    PaymentContextProvider: () => q
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
    T = n(630388),
    S = n(74538),
    A = n(960048),
    N = n(735521),
    C = n(583046),
    R = n(897829),
    P = n(74179),
    w = n(896246),
    D = n(320317),
    L = n(994427),
    x = n(814076),
    k = n(712297),
    M = n(585686),
    j = n(771206),
    U = n(362755),
    G = n(981631),
    B = n(474936),
    F = n(179742);
function V(e, t, n) {
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
function Z(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [W, K, z] = (0, I.Z)();
function q(e) {
    var t, n, o;
    let { loadId: I, activeSubscription: V, stepConfigs: H, breadcrumbs: K = [], skuIDs: z, isGift: q = !1, children: X, defaultPlanId: Q, purchaseType: J = G.GZQ.SUBSCRIPTION, applicationId: $, referralCode: ee, excludeSubscriptionPlansBySKU: et = !1, excludeSKUPurchasePreviews: en = !1 } = e,
        er = (0, j.Z)(),
        ei = (0, h.Q)(),
        ea = (0, R.Z)(),
        eo = z[0],
        es = (0, c.e7)([O.Z], () => O.Z.get(eo), [eo]),
        el = null == es ? void 0 : es.eligiblePaymentGateways,
        {
            paymentSources: ec,
            hasPaymentSources: eu,
            paymentSourceId: ed,
            setPaymentSourceId: ef,
            hasFetchedPaymentSources: e_
        } = (0, P.Z)({
            isGift: q,
            activeSubscription: V,
            eligiblePaymentGateways: el
        }),
        ep = i.useRef(eu),
        {
            hasFetchedSubscriptionPlans: eh,
            priceOptions: em,
            setCurrency: eg,
            currencyLoading: eE,
            currencies: eb
        } = (0, C.Z)({
            activeSubscription: V,
            skuIDs: z,
            paymentSourceId: ed,
            isGift: q,
            excludeSubscriptionPlansBySKU: et
        }),
        ey = (0, x.Z)(),
        [eO, ev] = i.useState(!1),
        {
            step: eI,
            setStep: eT,
            steps: eS,
            breadcrumbsData: eA,
            previousStepRef: eN
        } = (0, M.Z)({
            stepConfigs: H,
            breadcrumbs: K
        }),
        [eC, eR] = (0, L.Z)(eI),
        { paymentError: eP, paymentAuthenticationState: ew } = (0, w.Z)(),
        { purchaseError: eD, purchaseErrorBlockRef: eL, setPurchaseError: ex } = (0, D.Z)(),
        ek = (0, u.Z)(() => {
            let e = null != I ? I : (0, l.Z)();
            return (
                A.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eM, selectedPlan: ej, selectedPlanNotification: eU, setSelectedSkuId: eG, setSelectedPlanId: eB, setSelectedPlanNotification: eF } = (0, N.Z)(),
        [eV, eZ] = (0, c.Wu)([b.Z], () => [b.Z.purchaseTokenAuthState, b.Z.purchaseTokenHash]),
        [eH, eY, eW, eK] = (0, c.Wu)([U.Z], () => [U.Z.browserCheckoutState, U.Z.loadId, U.Z.skuId, U.Z.planId]),
        [ez, eq] = i.useState(null),
        [eX, eQ] = i.useState(null),
        [eJ, e$] = i.useState(null),
        [e0, e1] = i.useState(null),
        [e2, e3] = i.useState(null),
        [e4, e5] = i.useState(void 0),
        [e6, e8] = i.useState([]),
        e7 = i.useMemo(() => null == ej || (0, S.PV)(ej.id), [ej]),
        e9 = i.useRef(null != V ? V.planId : null);
    i.useEffect(() => {
        null == e9.current && null != V && (e9.current = V.planId);
    }, [V]);
    let { endsAt: te } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0
        }),
        tt = i.useRef(te.isSame(s()(0)) ? null : te);
    i.useEffect(() => {
        null != tt.current || te.isSame(s()(0)) || (tt.current = te);
    }, [te]);
    let {
            skusById: tn,
            hasFetchedSkus: tr,
            skuPricePreviewsById: ti,
            previewErrorsById: ta
        } = (0, k.Z)({
            applicationId: null != $ ? $ : B.CL,
            skuIDs: z,
            currentPaymentSourceId: ed,
            isGift: q,
            excludeSKUPurchasePreviews: en
        }),
        to = tn[null != eM ? eM : ''],
        ts = null != eM ? ta[eM] : null,
        [tl, tc] = i.useState(ts),
        tu = i.useMemo(() => {
            if (null == eM) return null;
            let e = ti[eM];
            return null == e ? null : e[null != ed ? ed : y.c];
        }, [eM, ti, ed]),
        { data: td } = (0, p.IX)($),
        tf = E.Sb.useSetting(),
        t_ = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != td && (0, T.yE)(td.flags, G.udG.EMBEDDED) && tf && null == t_ && (0, f.$h)();
    }, [td, tf, t_]);
    let tp = (0, T.yE)(null != (t = null == td ? void 0 : td.flags) ? t : 0, G.udG.EMBEDDED) && (0, T.yE)(null != (n = null == td ? void 0 : td.flags) ? n : 0, G.udG.EMBEDDED_IAP),
        th = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === $;
            })
        ),
        tm = null == th ? void 0 : th.compositeInstanceId,
        tg = (0, c.e7)([v.Z], () => (null != eM ? v.Z.getForSKU(eM) : null), [eM]),
        [tE, tb] = i.useState(null),
        ty = null != (o = null == V ? void 0 : V.inReverseTrial) && o && !q,
        tO = (0, g.Z)({ location: 'PaymentModal' }) && e7,
        tv = tO ? F.premiumRebrandBackground : void 0;
    return (0, r.jsx)(W.Provider, {
        value: Y(
            Z(
                {
                    stripe: er,
                    contextMetadata: ek,
                    blockedPayments: ei,
                    activeSubscription: V,
                    hasFetchedSubscriptions: ea,
                    hasFetchedSubscriptionPlans: eh,
                    updatedSubscription: e0,
                    setUpdatedSubscription: e1,
                    subscriptionMetadataRequest: e2,
                    setSubscriptionMetadataRequest: e3,
                    hasFetchedPaymentSources: e_,
                    paymentSources: ec,
                    hasPaymentSources: eu,
                    paymentSourceId: ed,
                    setPaymentSourceId: ef,
                    priceOptions: em,
                    setCurrency: eg,
                    currencyLoading: eE,
                    currencies: eb
                },
                ey
            ),
            {
                hasAcceptedTerms: eO,
                setHasAcceptedTerms: ev,
                step: eI,
                setStep: eT,
                steps: eS,
                stepConfigs: H,
                breadcrumbs: eA,
                previousStepRef: eN,
                purchaseState: eC,
                setPurchaseState: eR,
                paymentAuthenticationState: ew,
                paymentError: eP,
                purchaseError: eD,
                setPurchaseError: ex,
                purchasePreviewError: tl,
                setPurchasePreviewError: tc,
                purchaseErrorBlockRef: eL,
                purchaseTokenAuthState: eV,
                purchaseTokenHash: eZ,
                browserCheckoutState: eH,
                browserCheckoutStateLoadId: eY,
                browserCheckoutStateSkuId: eW,
                browserCheckoutStatePlanId: eK,
                bodyNode: ez,
                setBodyNode: eq,
                footerNode: eX,
                setFooterNode: eQ,
                modalOverlayNode: eJ,
                setModalOverlayNode: e$,
                selectedSkuId: eM,
                selectedSku: to,
                selectedStoreListing: tg,
                selectedPlan: ej,
                setSelectedSkuId: eG,
                setSelectedPlanId: eB,
                selectedPlanNotification: eU,
                setSelectedPlanNotification: eF,
                readySlideId: e4,
                setReadySlideId: e5,
                defaultPlanId: Q,
                isPremium: e7,
                startingFractionalPremiumEndsAtRef: tt,
                startedPaymentFlowWithPaymentSourcesRef: ep,
                startingPremiumSubscriptionPlanIdRef: e9,
                hasFetchedSkus: tr,
                skusById: tn,
                skuPricePreviewsById: ti,
                selectedSkuPricePreview: tu,
                application: td,
                purchaseType: J,
                isEmbeddedIAP: tp,
                activitySessionId: tm,
                devShelfFetchState: t_,
                entitlementsGranted: e6,
                setEntitlementsGranted: e8,
                referralCode: ee,
                invoicePreview: tE,
                setInvoicePreview: tb,
                inReverseTrial: ty,
                enablePremiumRebrandDesign: tO,
                premiumRebrandBackgroundClassName: tv
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: G.OBo,
            stripe: er,
            children: X
        })
    });
}
