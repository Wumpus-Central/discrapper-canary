n.d(t, {
    JL: () => ee,
    Lq: () => $,
    PaymentContextProvider: () => en,
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
    O = n(622909),
    v = n(639119),
    S = n(695346),
    I = n(882712),
    T = n(855775),
    C = n(55563),
    A = n(551428),
    N = n(975104),
    P = n(74538),
    R = n(960048),
    w = n(735521),
    D = n(325100),
    x = n(659848),
    L = n(583046),
    j = n(897829),
    M = n(74179),
    k = n(896246),
    U = n(320317),
    G = n(994427),
    Z = n(814076),
    F = n(712297),
    B = n(585686),
    V = n(771206),
    H = n(362755),
    Y = n(283307),
    W = n(981631),
    K = n(474936),
    z = n(696970);
function q(e, t, n) {
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [$, ee, et] = (0, N.Z)();
function en(e) {
    var t, n, o, N;
    let {
            loadId: q,
            activeSubscription: X,
            stepConfigs: ee,
            breadcrumbs: et = [],
            skuIDs: en,
            isGift: er = !1,
            children: ei,
            defaultPlanId: ea,
            purchaseType: eo = W.GZQ.SUBSCRIPTION,
            applicationId: es,
            referralCode: el,
            paymentGateway: ec,
            excludeSubscriptionPlansBySKU: eu = !1,
            excludeSKUPurchasePreviews: ed = !1,
            wasTier2PremiumBeforePurchase: ef = !1,
            referralTrialOfferId: ep,
        } = e,
        e_ = (0, V.Z)(),
        em = (0, h.Q)(),
        eh = (0, j.Z)(),
        eg = en[0],
        eE = (0, u.e7)([C.Z], () => C.Z.get(eg), [eg]),
        eb = null == eE ? void 0 : eE.eligiblePaymentGateways,
        {
            paymentSources: ey,
            hasPaymentSources: eO,
            paymentSourceId: ev,
            setPaymentSourceId: eS,
            hasFetchedPaymentSources: eI,
        } = (0, M.Z)({
            isGift: er,
            activeSubscription: X,
            eligiblePaymentGateways: eb,
        }),
        eT = i.useRef(eO),
        {
            hasFetchedSubscriptionPlans: eC,
            priceOptions: eA,
            setCurrency: eN,
            currencyLoading: eP,
            currencies: eR,
        } = (0, L.Z)({
            activeSubscription: X,
            skuIDs: en,
            paymentSourceId: ev,
            isGift: er,
            excludeSubscriptionPlansBySKU: eu,
        }),
        ew = (0, Z.Z)(),
        [eD, ex] = i.useState(!1),
        {
            step: eL,
            setStep: ej,
            steps: eM,
            breadcrumbsData: ek,
            previousStepRef: eU,
        } = (0, B.Z)({
            stepConfigs: ee,
            breadcrumbs: et,
        }),
        [eG, eZ] = (0, G.Z)(eL),
        { paymentError: eF, paymentAuthenticationState: eB } = (0, k.Z)(),
        { purchaseError: eV, purchaseErrorBlockRef: eH, setPurchaseError: eY } = (0, U.Z)(),
        eW = (0, d.Z)(() => {
            let e = null != q ? q : (0, l.Z)();
            return (
                R.Z.addBreadcrumb({ message: "Checkout session ID: ".concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now(),
                }
            );
        }),
        {
            selectedSkuId: eK,
            selectedPlan: ez,
            selectedPlanNotification: eq,
            setSelectedSkuId: eQ,
            setSelectedPlanId: eX,
            setSelectedPlanNotification: eJ,
        } = (0, w.Z)(),
        [e$, e0] = (0, u.Wu)([I.Z], () => [I.Z.purchaseTokenAuthState, I.Z.purchaseTokenHash]),
        [e1, e3, e2, e4] = (0, u.Wu)([H.Z], () => [H.Z.browserCheckoutState, H.Z.loadId, H.Z.skuId, H.Z.planId]),
        [e5, e8] = i.useState(null),
        [e6, e7] = i.useState(null),
        [e9, te] = i.useState(null),
        [tt, tn] = i.useState(null),
        [tr, ti] = i.useState(null),
        [ta, to] = i.useState(void 0),
        [ts, tl] = i.useState([]),
        [tc, tu] = i.useState([]),
        td = i.useMemo(() => null == ez || (0, P.PV)(ez.id), [ez]),
        tf = i.useRef(null != X ? X.planId : null);
    i.useEffect(() => {
        null == tf.current && null != X && (tf.current = X.planId);
    }, [X]);
    let { endsAt: tp } = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        t_ = i.useRef(tp.isSame(s()(0)) ? null : tp);
    i.useEffect(() => {
        null != t_.current || tp.isSame(s()(0)) || (t_.current = tp);
    }, [tp]);
    let tm = i.useMemo(
        () => ({
            paymentSourceId: ev,
            paymentGateway: ec,
            loadId: q,
        }),
        [ev, ec, q],
    );
    (0, x.m)(eg, tm);
    let {
            skusById: th,
            hasFetchedSkus: tg,
            skuPricePreviewsById: tE,
            previewErrorsById: tb,
        } = (0, F.Z)({
            applicationId: null != es ? es : K.CL,
            skuIDs: en,
            currentPaymentSourceId: ev,
            isGift: er,
            excludeSKUPurchasePreviews: ed,
        }),
        ty = th[null != eK ? eK : ""],
        tO = null != eK ? tb[eK] : null,
        [tv, tS] = i.useState(tO),
        tI = i.useMemo(() => {
            if (null == eK) return null;
            let e = tE[eK];
            return null == e ? null : e[null != ev ? ev : T.c];
        }, [eK, tE, ev]),
        { data: tT } = (0, m.IX)(es),
        tC = S.Sb.useSetting(),
        tA = (0, u.e7)([f.Z], () => f.Z.getFetchState());
    i.useEffect(() => {
        null != tT && (0, c.yE)(tT.flags, W.udG.EMBEDDED) && tC && null == tA && (0, p.$h)();
    }, [tT, tC, tA]);
    let tN =
            (0, c.yE)(null != (n = null == tT ? void 0 : tT.flags) ? n : 0, W.udG.EMBEDDED) &&
            (0, c.yE)(null != (o = null == tT ? void 0 : tT.flags) ? o : 0, W.udG.EMBEDDED_IAP),
        tP = (0, u.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === es;
            }),
        ),
        tR = null == tP ? void 0 : tP.compositeInstanceId,
        tw = (0, u.e7)([A.Z], () => (null != eK ? A.Z.getForSKU(eK) : null), [eK]),
        [tD, tx] = i.useState(null),
        tL = null != (N = null == X ? void 0 : X.inReverseTrial) && N && !er,
        tj = (0, y.Z)({ location: "PaymentModal" }) && td,
        { isDisplayingWowMomentConfirmation: tM } = (0, u.cj)([b.Z], () => ({
            isDisplayingWowMomentConfirmation: b.Z.isDisplayingWowMomentConfirmation,
        })),
        tk = tj ? z.premiumBrandRefreshBackground : void 0,
        { enabled: tU } = (0, E.l)({ location: "PaymentContext" }),
        tG = (0, D.uH)({ location: "PaymentModal" }),
        tZ = i.useMemo(() => {
            if (tG) return Y.cL.APPLE_PAYMENT_LINK;
        }, [tG]),
        tF = i.useMemo(() => null != ez && ez.id === K.Xh.PREMIUM_GROUP_MONTH, [ez]),
        tB = (0, v.N)(null != ep ? ep : void 0),
        tV = !tF && !er && null != tB && null != eK && K.nG[tB.trial_id].skus.includes(eK),
        tH = (0, O.N)(),
        tY = null == tH || null == (t = tH.discount) ? void 0 : t.plan_ids.some((e) => K.GP[e].skuId === eK),
        tW = !!(!tF && !er && null != tH && null != eK && tY);
    return (0, r.jsx)($.Provider, {
        value: J(
            Q(
                {
                    stripe: e_,
                    paymentElementsEnabled: tU,
                    contextMetadata: eW,
                    blockedPayments: em,
                    activeSubscription: X,
                    hasFetchedSubscriptions: eh,
                    hasFetchedSubscriptionPlans: eC,
                    updatedSubscription: tt,
                    setUpdatedSubscription: tn,
                    subscriptionMetadataRequest: tr,
                    setSubscriptionMetadataRequest: ti,
                    hasFetchedPaymentSources: eI,
                    paymentSources: ey,
                    hasPaymentSources: eO,
                    paymentSourceId: ev,
                    setPaymentSourceId: eS,
                    priceOptions: eA,
                    setCurrency: eN,
                    currencyLoading: eP,
                    currencies: eR,
                },
                ew,
            ),
            {
                hasAcceptedTerms: eD,
                setHasAcceptedTerms: ex,
                step: eL,
                setStep: ej,
                steps: eM,
                stepConfigs: ee,
                breadcrumbs: ek,
                previousStepRef: eU,
                purchaseState: eG,
                setPurchaseState: eZ,
                paymentAuthenticationState: eB,
                paymentError: eF,
                purchaseError: eV,
                setPurchaseError: eY,
                purchasePreviewError: tv,
                setPurchasePreviewError: tS,
                purchaseErrorBlockRef: eH,
                purchaseTokenAuthState: e$,
                purchaseTokenHash: e0,
                browserCheckoutState: e1,
                browserCheckoutStateLoadId: e3,
                browserCheckoutStateSkuId: e2,
                browserCheckoutStatePlanId: e4,
                bodyNode: e5,
                setBodyNode: e8,
                footerNode: e6,
                setFooterNode: e7,
                modalOverlayNode: e9,
                setModalOverlayNode: te,
                selectedSkuId: eK,
                selectedSku: ty,
                selectedStoreListing: tw,
                selectedPlan: ez,
                setSelectedSkuId: eQ,
                setSelectedPlanId: eX,
                selectedPlanNotification: eq,
                setSelectedPlanNotification: eJ,
                readySlideId: ta,
                setReadySlideId: to,
                defaultPlanId: ea,
                isPremium: td,
                isGift: er,
                startingFractionalPremiumEndsAtRef: t_,
                startedPaymentFlowWithPaymentSourcesRef: eT,
                startingPremiumSubscriptionPlanIdRef: tf,
                hasFetchedSkus: tg,
                skusById: th,
                skuPricePreviewsById: tE,
                selectedSkuPricePreview: tI,
                application: tT,
                purchaseType: eo,
                isEmbeddedIAP: tN,
                activitySessionId: tR,
                devShelfFetchState: tA,
                entitlementsGranted: ts,
                setEntitlementsGranted: tl,
                appliedUserDiscounts: tc,
                setAppliedUserDiscounts: tu,
                referralCode: el,
                invoicePreview: tD,
                setInvoicePreview: tx,
                inReverseTrial: tL,
                enablePremiumBrandRefresh: tj,
                isDisplayingWowMomentConfirmation: tM,
                premiumBrandRefreshBackgroundClassName: tk,
                wasTier2PremiumBeforePurchase: ef,
                customCheckoutFlow: tZ,
                isPremiumGroupPurchase: tF,
                isEligibleForTrial: tV,
                isEligibleForDiscount: tW,
                userTrialOffer: tB,
                referralTrialOfferId: ep,
                discountOffer: tH,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: W.OBo,
            stripe: e_,
            children: ei,
        }),
    });
}
