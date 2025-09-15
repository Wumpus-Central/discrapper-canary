n.d(t, {
    JL: () => $,
    PaymentContextProvider: () => et,
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
    E = n(266198),
    b = n(453227),
    y = n(47280),
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
    w = n(325100),
    D = n(659848),
    x = n(583046),
    L = n(897829),
    j = n(74179),
    M = n(896246),
    k = n(320317),
    U = n(994427),
    G = n(814076),
    B = n(712297),
    Z = n(585686),
    F = n(771206),
    V = n(362755),
    H = n(283307),
    Y = n(981631),
    W = n(474936),
    K = n(876414);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
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
function Q(e, t) {
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
let [J, $, ee] = (0, A.Z)();
function et(e) {
    var t, n, o;
    let {
            loadId: A,
            activeSubscription: z,
            stepConfigs: X,
            breadcrumbs: $ = [],
            skuIDs: ee,
            isGift: et = !1,
            children: en,
            defaultPlanId: er,
            purchaseType: ei = Y.GZQ.SUBSCRIPTION,
            applicationId: ea,
            referralCode: eo,
            excludeSubscriptionPlansBySKU: es = !1,
            excludeSKUPurchasePreviews: el = !1,
            wasTier2PremiumBeforePurchase: ec = !1,
        } = e,
        eu = (0, F.Z)(),
        ed = (0, h.Q)(),
        ef = (0, L.Z)(),
        e_ = ee[0],
        ep = (0, c.e7)([T.Z], () => T.Z.get(e_), [e_]),
        eh = null == ep ? void 0 : ep.eligiblePaymentGateways,
        {
            paymentSources: em,
            hasPaymentSources: eg,
            paymentSourceId: eE,
            setPaymentSourceId: eb,
            hasFetchedPaymentSources: ey,
        } = (0, j.Z)({
            isGift: et,
            activeSubscription: z,
            eligiblePaymentGateways: eh,
        }),
        eO = i.useRef(eg),
        {
            hasFetchedSubscriptionPlans: ev,
            priceOptions: eI,
            setCurrency: eT,
            currencyLoading: eS,
            currencies: eA,
        } = (0, x.Z)({
            activeSubscription: z,
            skuIDs: ee,
            paymentSourceId: eE,
            isGift: et,
            excludeSubscriptionPlansBySKU: es,
        }),
        eC = (0, G.Z)(),
        [eN, eR] = i.useState(!1),
        {
            step: eP,
            setStep: ew,
            steps: eD,
            breadcrumbsData: ex,
            previousStepRef: eL,
        } = (0, Z.Z)({
            stepConfigs: X,
            breadcrumbs: $,
        }),
        [ej, eM] = (0, U.Z)(eP),
        { paymentError: ek, paymentAuthenticationState: eU } = (0, M.Z)(),
        { purchaseError: eG, purchaseErrorBlockRef: eB, setPurchaseError: eZ } = (0, k.Z)(),
        eF = (0, u.Z)(() => {
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
            selectedSkuId: eV,
            selectedPlan: eH,
            selectedPlanNotification: eY,
            setSelectedSkuId: eW,
            setSelectedPlanId: eK,
            setSelectedPlanNotification: ez,
        } = (0, P.Z)(),
        [eq, eX] = (0, c.Wu)([v.Z], () => [v.Z.purchaseTokenAuthState, v.Z.purchaseTokenHash]),
        [eQ, eJ, e$, e0] = (0, c.Wu)([V.Z], () => [V.Z.browserCheckoutState, V.Z.loadId, V.Z.skuId, V.Z.planId]),
        [e1, e2] = i.useState(null),
        [e3, e4] = i.useState(null),
        [e8, e5] = i.useState(null),
        [e6, e7] = i.useState(null),
        [e9, te] = i.useState(null),
        [tt, tn] = i.useState(void 0),
        [tr, ti] = i.useState([]),
        [ta, to] = i.useState([]),
        ts = i.useMemo(() => null == eH || (0, N.PV)(eH.id), [eH]),
        tl = i.useRef(null != z ? z.planId : null);
    i.useEffect(() => {
        null == tl.current && null != z && (tl.current = z.planId);
    }, [z]);
    let { endsAt: tc } = (0, m.Z)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        tu = i.useRef(tc.isSame(s()(0)) ? null : tc);
    i.useEffect(() => {
        null != tu.current || tc.isSame(s()(0)) || (tu.current = tc);
    }, [tc]),
        (0, D.m)(e_, eE);
    let {
            skusById: td,
            hasFetchedSkus: tf,
            skuPricePreviewsById: t_,
            previewErrorsById: tp,
        } = (0, B.Z)({
            applicationId: null != ea ? ea : W.CL,
            skuIDs: ee,
            currentPaymentSourceId: eE,
            isGift: et,
            excludeSKUPurchasePreviews: el,
        }),
        th = td[null != eV ? eV : ""],
        tm = null != eV ? tp[eV] : null,
        [tg, tE] = i.useState(tm),
        tb = i.useMemo(() => {
            if (null == eV) return null;
            let e = t_[eV];
            return null == e ? null : e[null != eE ? eE : I.c];
        }, [eV, t_, eE]),
        { data: ty } = (0, p.IX)(ea),
        tO = O.Sb.useSetting(),
        tv = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    i.useEffect(() => {
        null != ty && (0, C.yE)(ty.flags, Y.udG.EMBEDDED) && tO && null == tv && (0, f.$h)();
    }, [ty, tO, tv]);
    let tI =
            (0, C.yE)(null != (t = null == ty ? void 0 : ty.flags) ? t : 0, Y.udG.EMBEDDED) &&
            (0, C.yE)(null != (n = null == ty ? void 0 : ty.flags) ? n : 0, Y.udG.EMBEDDED_IAP),
        tT = (0, c.e7)([_.ZP], () =>
            Array.from(_.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === ea;
            }),
        ),
        tS = null == tT ? void 0 : tT.compositeInstanceId,
        tA = (0, c.e7)([S.Z], () => (null != eV ? S.Z.getForSKU(eV) : null), [eV]),
        [tC, tN] = i.useState(null),
        tR = null != (o = null == z ? void 0 : z.inReverseTrial) && o && !et,
        tP = (0, y.ZP)({ location: "PaymentModal" }) && ts,
        { isDisplayingWowMomentConfirmation: tw } = (0, c.cj)([b.Z], () => ({
            isDisplayingWowMomentConfirmation: b.Z.isDisplayingWowMomentConfirmation,
        })),
        tD = tP ? K.premiumBrandRefreshBackground : void 0,
        { enabled: tx } = (0, g.l)({ location: "PaymentModal" }),
        { isEligible: tL } = (0, E.Q1)(),
        tj = !ec && !et && tL && eV === W.Si.TIER_2,
        tM = (0, w.uH)({ location: "PaymentModal" }),
        tk = i.useMemo(() => {
            if (tM) return H.cL.APPLE_PAYMENT_LINK;
        }, [tM]);
    return (0, r.jsx)(J.Provider, {
        value: Q(
            q(
                {
                    stripe: eu,
                    paymentElementsEnabled: tx,
                    contextMetadata: eF,
                    blockedPayments: ed,
                    activeSubscription: z,
                    hasFetchedSubscriptions: ef,
                    hasFetchedSubscriptionPlans: ev,
                    updatedSubscription: e6,
                    setUpdatedSubscription: e7,
                    subscriptionMetadataRequest: e9,
                    setSubscriptionMetadataRequest: te,
                    hasFetchedPaymentSources: ey,
                    paymentSources: em,
                    hasPaymentSources: eg,
                    paymentSourceId: eE,
                    setPaymentSourceId: eb,
                    priceOptions: eI,
                    setCurrency: eT,
                    currencyLoading: eS,
                    currencies: eA,
                },
                eC,
            ),
            {
                hasAcceptedTerms: eN,
                setHasAcceptedTerms: eR,
                step: eP,
                setStep: ew,
                steps: eD,
                stepConfigs: X,
                breadcrumbs: ex,
                previousStepRef: eL,
                purchaseState: ej,
                setPurchaseState: eM,
                paymentAuthenticationState: eU,
                paymentError: ek,
                purchaseError: eG,
                setPurchaseError: eZ,
                purchasePreviewError: tg,
                setPurchasePreviewError: tE,
                purchaseErrorBlockRef: eB,
                purchaseTokenAuthState: eq,
                purchaseTokenHash: eX,
                browserCheckoutState: eQ,
                browserCheckoutStateLoadId: eJ,
                browserCheckoutStateSkuId: e$,
                browserCheckoutStatePlanId: e0,
                bodyNode: e1,
                setBodyNode: e2,
                footerNode: e3,
                setFooterNode: e4,
                modalOverlayNode: e8,
                setModalOverlayNode: e5,
                selectedSkuId: eV,
                selectedSku: th,
                selectedStoreListing: tA,
                selectedPlan: eH,
                setSelectedSkuId: eW,
                setSelectedPlanId: eK,
                selectedPlanNotification: eY,
                setSelectedPlanNotification: ez,
                readySlideId: tt,
                setReadySlideId: tn,
                defaultPlanId: er,
                isPremium: ts,
                isGift: et,
                startingFractionalPremiumEndsAtRef: tu,
                startedPaymentFlowWithPaymentSourcesRef: eO,
                startingPremiumSubscriptionPlanIdRef: tl,
                hasFetchedSkus: tf,
                skusById: td,
                skuPricePreviewsById: t_,
                selectedSkuPricePreview: tb,
                application: ty,
                purchaseType: ei,
                isEmbeddedIAP: tI,
                activitySessionId: tS,
                devShelfFetchState: tv,
                entitlementsGranted: tr,
                setEntitlementsGranted: ti,
                appliedUserDiscounts: ta,
                setAppliedUserDiscounts: to,
                referralCode: eo,
                invoicePreview: tC,
                setInvoicePreview: tN,
                inReverseTrial: tR,
                enablePremiumBrandRefresh: tP,
                isDisplayingWowMomentConfirmation: tw,
                premiumBrandRefreshBackgroundClassName: tD,
                wasTier2PremiumBeforePurchase: ec,
                customCheckoutFlow: tk,
                shouldShowSeptemberMarketingMomentBanner: tj,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: Y.OBo,
            stripe: eu,
            children: en,
        }),
    });
}
