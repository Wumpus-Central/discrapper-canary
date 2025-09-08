n.d(t, {
    JL: () => Q,
    PaymentContextProvider: () => $,
}),
    n(388685),
    n(997841);
var r = n(951288),
    i = n(647438),
    a = n(289008),
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
    g = n(892041),
    E = n(453227),
    b = n(47280),
    y = n(951570),
    O = n(695346),
    v = n(882712),
    I = n(855775),
    T = n(55563),
    S = n(551428),
    A = n(975104),
    C = n(630388),
    N = n(74538),
    R = n(960048),
    P = n(735521),
    w = n(659848),
    D = n(583046),
    x = n(897829),
    L = n(74179),
    j = n(896246),
    M = n(320317),
    k = n(994427),
    U = n(814076),
    G = n(712297),
    B = n(585686),
    Z = n(771206),
    F = n(362755),
    V = n(981631),
    H = n(474936),
    Y = n(876414);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [X, Q, J] = (0, A.Z)();
function $(e) {
    var t, n, o;
    let {
            loadId: A,
            activeSubscription: W,
            stepConfigs: z,
            breadcrumbs: Q = [],
            skuIDs: J,
            isGift: $ = !1,
            children: ee,
            defaultPlanId: et,
            purchaseType: en = V.GZQ.SUBSCRIPTION,
            applicationId: er,
            referralCode: ei,
            excludeSubscriptionPlansBySKU: ea = !1,
            excludeSKUPurchasePreviews: eo = !1,
            wasTier2PremiumBeforePurchase: es = !1,
            customCheckoutFlow: el,
        } = e,
        ec = (0, Z.Z)(),
        eu = (0, h.Q)(),
        ed = (0, x.Z)(),
        ef = J[0],
        e_ = (0, c.e7)([T.Z], () => T.Z.get(ef), [ef]),
        ep = null == e_ ? void 0 : e_.eligiblePaymentGateways,
        {
            paymentSources: eh,
            hasPaymentSources: em,
            paymentSourceId: eg,
            setPaymentSourceId: eE,
            hasFetchedPaymentSources: eb,
        } = (0, L.Z)({
            isGift: $,
            activeSubscription: W,
            eligiblePaymentGateways: ep,
        }),
        ey = i.useRef(em),
        {
            hasFetchedSubscriptionPlans: eO,
            priceOptions: ev,
            setCurrency: eI,
            currencyLoading: eT,
            currencies: eS,
        } = (0, D.Z)({
            activeSubscription: W,
            skuIDs: J,
            paymentSourceId: eg,
            isGift: $,
            excludeSubscriptionPlansBySKU: ea,
        }),
        eA = (0, U.Z)(),
        [eC, eN] = i.useState(!1),
        {
            step: eR,
            setStep: eP,
            steps: ew,
            breadcrumbsData: eD,
            previousStepRef: ex,
        } = (0, B.Z)({
            stepConfigs: z,
            breadcrumbs: Q,
        }),
        [eL, ej] = (0, k.Z)(eR),
        { paymentError: eM, paymentAuthenticationState: ek } = (0, j.Z)(),
        { purchaseError: eU, purchaseErrorBlockRef: eG, setPurchaseError: eB } = (0, M.Z)(),
        eZ = (0, u.Z)(() => {
            let e = null != A ? A : (0, l.Z)();
            return (
                R.Z.addBreadcrumb({ message: "Checkout session ID: ".concat(e) }),
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
        } = (0, P.Z)(),
        [ez, eq] = (0, c.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]),
        [eX, eQ, eJ, e$] = (0, c.Wu)([F.Z], () => [F.Z.browserCheckoutState, F.Z.loadId, F.Z.skuId, F.Z.planId]),
        [e0, e1] = i.useState(null),
        [e2, e3] = i.useState(null),
        [e4, e8] = i.useState(null),
        [e6, e5] = i.useState(null),
        [e7, e9] = i.useState(null),
        [te, tt] = i.useState(void 0),
        [tn, tr] = i.useState([]),
        [ti, ta] = i.useState([]),
        to = i.useMemo(() => null == eV || (0, N.PV)(eV.id), [eV]),
        ts = i.useRef(null != W ? W.planId : null);
    i.useEffect(() => {
        null == ts.current && null != W && (ts.current = W.planId);
    }, [W]);
    let { endsAt: tl } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        tc = i.useRef(tl.isSame(s()(0)) ? null : tl);
    i.useEffect(() => {
        null != tc.current || tl.isSame(s()(0)) || (tc.current = tl);
    }, [tl]),
        (0, w.m)(ef, eg);
    let {
            skusById: tu,
            hasFetchedSkus: td,
            skuPricePreviewsById: tf,
            previewErrorsById: t_,
        } = (0, G.Z)({
            applicationId: null != er ? er : H.CL,
            skuIDs: J,
            currentPaymentSourceId: eg,
            isGift: $,
            excludeSKUPurchasePreviews: eo,
        }),
        tp = tu[null != eF ? eF : ""],
        th = null != eF ? t_[eF] : null,
        [tm, tg] = i.useState(th),
        tE = i.useMemo(() => {
            if (null == eF) return null;
            let e = tf[eF];
            return null == e ? null : e[null != eg ? eg : I.c];
        }, [eF, tf, eg]),
        { data: tb } = (0, p.IX)(er),
        ty = O.Sb.useSetting(),
        tO = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != tb && (0, C.yE)(tb.flags, V.udG.EMBEDDED) && ty && null == tO && (0, f.$h)();
    }, [tb, ty, tO]);
    let tv =
            (0, C.yE)(null != (t = null == tb ? void 0 : tb.flags) ? t : 0, V.udG.EMBEDDED) &&
            (0, C.yE)(null != (n = null == tb ? void 0 : tb.flags) ? n : 0, V.udG.EMBEDDED_IAP),
        tI = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === er;
            }),
        ),
        tT = null == tI ? void 0 : tI.compositeInstanceId,
        tS = (0, c.e7)([S.Z], () => (null != eF ? S.Z.getForSKU(eF) : null), [eF]),
        [tA, tC] = i.useState(null),
        tN = null != (o = null == W ? void 0 : W.inReverseTrial) && o && !$,
        tR = (0, b.ZP)({ location: "PaymentModal" }) && to,
        { isDisplayingWowMomentConfirmation: tP } = (0, c.cj)([E.Z], () => ({
            isDisplayingWowMomentConfirmation: E.Z.isDisplayingWowMomentConfirmation,
        })),
        tw = tR ? Y.premiumBrandRefreshBackground : void 0,
        { enabled: tD } = (0, g.l)({ location: "PaymentModal" }),
        { isEligible: tx } = (0, y.Q1)(),
        tL = tx && eF === H.Si.TIER_2;
    return (0, r.jsx)(X.Provider, {
        value: q(
            K(
                {
                    stripe: ec,
                    paymentElementsEnabled: tD,
                    contextMetadata: eZ,
                    blockedPayments: eu,
                    activeSubscription: W,
                    hasFetchedSubscriptions: ed,
                    hasFetchedSubscriptionPlans: eO,
                    updatedSubscription: e6,
                    setUpdatedSubscription: e5,
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
                steps: ew,
                stepConfigs: z,
                breadcrumbs: eD,
                previousStepRef: ex,
                purchaseState: eL,
                setPurchaseState: ej,
                paymentAuthenticationState: ek,
                paymentError: eM,
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
                footerNode: e2,
                setFooterNode: e3,
                modalOverlayNode: e4,
                setModalOverlayNode: e8,
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
                defaultPlanId: et,
                isPremium: to,
                isGift: $,
                startingFractionalPremiumEndsAtRef: tc,
                startedPaymentFlowWithPaymentSourcesRef: ey,
                startingPremiumSubscriptionPlanIdRef: ts,
                hasFetchedSkus: td,
                skusById: tu,
                skuPricePreviewsById: tf,
                selectedSkuPricePreview: tE,
                application: tb,
                purchaseType: en,
                isEmbeddedIAP: tv,
                activitySessionId: tT,
                devShelfFetchState: tO,
                entitlementsGranted: tn,
                setEntitlementsGranted: tr,
                appliedUserDiscounts: ti,
                setAppliedUserDiscounts: ta,
                referralCode: ei,
                invoicePreview: tA,
                setInvoicePreview: tC,
                inReverseTrial: tN,
                enablePremiumBrandRefresh: tR,
                isDisplayingWowMomentConfirmation: tP,
                premiumBrandRefreshBackgroundClassName: tw,
                wasTier2PremiumBeforePurchase: es,
                customCheckoutFlow: el,
                shouldShowSeptemberMarketingMomentBanner: tL,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: V.OBo,
            stripe: ec,
            children: ee,
        }),
    });
}
