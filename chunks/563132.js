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
    let { loadId: I, activeSubscription: V, stepConfigs: H, breadcrumbs: K = [], skuIDs: z, isGift: q = !1, children: Q, defaultPlanId: X, purchaseType: J = G.GZQ.SUBSCRIPTION, applicationId: $, referralCode: ee, repeatPurchase: et = !1, excludeSubscriptionPlansBySKU: en = !1, excludeSKUPurchasePreviews: er = !1 } = e,
        ei = (0, j.Z)(),
        ea = (0, h.Q)(),
        eo = (0, P.Z)(),
        es = z[0],
        el = (0, c.e7)([O.Z], () => O.Z.get(es), [es]),
        ec = null == el ? void 0 : el.eligiblePaymentGateways,
        {
            paymentSources: eu,
            hasPaymentSources: ed,
            paymentSourceId: ef,
            setPaymentSourceId: e_,
            hasFetchedPaymentSources: ep
        } = (0, R.Z)({
            isGift: q,
            activeSubscription: V,
            eligiblePaymentGateways: ec
        }),
        eh = i.useRef(ed),
        {
            hasFetchedSubscriptionPlans: em,
            priceOptions: eg,
            setCurrency: eE,
            currencyLoading: eb,
            currencies: ey
        } = (0, C.Z)({
            activeSubscription: V,
            skuIDs: z,
            paymentSourceId: ef,
            isGift: q,
            excludeSubscriptionPlansBySKU: en
        }),
        eO = (0, x.Z)(),
        [ev, eI] = i.useState(!1),
        {
            step: eS,
            setStep: eT,
            steps: eA,
            breadcrumbsData: eN,
            previousStepRef: eC
        } = (0, M.Z)({
            stepConfigs: H,
            breadcrumbs: K
        }),
        [eP, eR] = (0, L.Z)(eS),
        { paymentError: ew, paymentAuthenticationState: eD } = (0, w.Z)(),
        { purchaseError: eL, purchaseErrorBlockRef: ex, setPurchaseError: ek } = (0, D.Z)(),
        eM = (0, u.Z)(() => {
            let e = null != I ? I : (0, l.Z)();
            return (
                A.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: ej, selectedPlan: eU, selectedPlanNotification: eG, setSelectedSkuId: eB, setSelectedPlanId: eF, setSelectedPlanNotification: eV } = (0, N.Z)(),
        [eZ, eH] = (0, c.Wu)([b.Z], () => [b.Z.purchaseTokenAuthState, b.Z.purchaseTokenHash]),
        [eY, eW, eK, ez] = (0, c.Wu)([U.Z], () => [U.Z.browserCheckoutState, U.Z.loadId, U.Z.skuId, U.Z.planId]),
        [eq, eQ] = i.useState(null),
        [eX, eJ] = i.useState(null),
        [e$, e0] = i.useState(null),
        [e1, e2] = i.useState(null),
        [e3, e4] = i.useState(null),
        [e5, e6] = i.useState(void 0),
        [e8, e7] = i.useState([]),
        e9 = i.useMemo(() => null == eU || (0, T.PV)(eU.id), [eU]),
        te = i.useRef(null != V ? V.planId : null);
    i.useEffect(() => {
        null == te.current && null != V && (te.current = V.planId);
    }, [V]);
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
        } = (0, k.Z)({
            applicationId: null != $ ? $ : B.CL,
            skuIDs: z,
            currentPaymentSourceId: ef,
            isGift: q,
            excludeSKUPurchasePreviews: er
        }),
        ts = tr[null != ej ? ej : ''],
        tl = null != ej ? to[ej] : null,
        [tc, tu] = i.useState(tl),
        td = i.useMemo(() => {
            if (null == ej) return null;
            let e = ta[ej];
            return null == e ? null : e[null != ef ? ef : y.c];
        }, [ej, ta, ef]),
        { data: tf } = (0, p.IX)($),
        t_ = E.Sb.useSetting(),
        tp = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tf && (0, S.yE)(tf.flags, G.udG.EMBEDDED) && t_ && null == tp && (0, f.$h)();
    }, [tf, t_, tp]);
    let th = (0, S.yE)(null != (t = null == tf ? void 0 : tf.flags) ? t : 0, G.udG.EMBEDDED) && (0, S.yE)(null != (n = null == tf ? void 0 : tf.flags) ? n : 0, G.udG.EMBEDDED_IAP),
        tm = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === $;
            })
        ),
        tg = null == tm ? void 0 : tm.compositeInstanceId,
        tE = (0, c.e7)([v.Z], () => (null != ej ? v.Z.getForSKU(ej) : null), [ej]),
        [tb, ty] = i.useState(null),
        tO = null != (o = null == V ? void 0 : V.inReverseTrial) && o && !q,
        tv = (0, g.Z)({ location: 'PaymentModal' }) && e9,
        tI = tv ? F.premiumRebrandBackground : void 0;
    return (0, r.jsx)(W.Provider, {
        value: Y(
            Z(
                {
                    stripe: ei,
                    contextMetadata: eM,
                    blockedPayments: ea,
                    activeSubscription: V,
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
                step: eS,
                setStep: eT,
                steps: eA,
                stepConfigs: H,
                breadcrumbs: eN,
                previousStepRef: eC,
                purchaseState: eP,
                setPurchaseState: eR,
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
                setBodyNode: eQ,
                footerNode: eX,
                setFooterNode: eJ,
                modalOverlayNode: e$,
                setModalOverlayNode: e0,
                selectedSkuId: ej,
                selectedSku: ts,
                selectedStoreListing: tE,
                selectedPlan: eU,
                setSelectedSkuId: eB,
                setSelectedPlanId: eF,
                selectedPlanNotification: eG,
                setSelectedPlanNotification: eV,
                readySlideId: e5,
                setReadySlideId: e6,
                defaultPlanId: X,
                isPremium: e9,
                startingFractionalPremiumEndsAtRef: tn,
                startedPaymentFlowWithPaymentSourcesRef: eh,
                startingPremiumSubscriptionPlanIdRef: te,
                hasFetchedSkus: ti,
                skusById: tr,
                skuPricePreviewsById: ta,
                selectedSkuPricePreview: td,
                application: tf,
                purchaseType: J,
                isEmbeddedIAP: th,
                activitySessionId: tg,
                devShelfFetchState: tp,
                entitlementsGranted: e8,
                setEntitlementsGranted: e7,
                referralCode: ee,
                invoicePreview: tb,
                setInvoicePreview: ty,
                repeatPurchase: et,
                inReverseTrial: tO,
                enablePremiumRebrandDesign: tv,
                premiumRebrandBackgroundClassName: tI
            }
        ),
        children: (0, r.jsx)(a.Elements, {
            options: G.OBo,
            stripe: ei,
            children: Q
        })
    });
}
