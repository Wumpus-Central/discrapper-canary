n.d(t, {
    P5: () => ee,
    PaymentContextProvider: () => en,
    Qv: () => J,
}),
    n(896048),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(989349),
    o = n.n(s),
    l = n(835245),
    c = n(665260),
    u = n(311907),
    d = n(444927),
    f = n(10716),
    p = n(795816),
    _ = n(933958),
    h = n(627363),
    m = n(86379),
    g = n(531260),
    E = n(446044),
    b = n(573359),
    y = n(170887),
    O = n(422936),
    A = n(234419),
    v = n(253932),
    S = n(293700),
    I = n(79387),
    T = n(67480),
    C = n(328968),
    N = n(786300),
    R = n(927578),
    w = n(728458),
    P = n(955529),
    D = n(483827),
    x = n(543027),
    L = n(853398),
    j = n(121005),
    M = n(369827),
    k = n(552574),
    U = n(935630),
    G = n(988023),
    V = n(289333),
    F = n(252293),
    B = n(615310),
    H = n(87952),
    Y = n(814626),
    W = n(26279),
    K = n(652215),
    z = n(788868),
    q = n(898772);

function X(e, t, n) {
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

function Z(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}

function Q(e, t) {
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

function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [J, ee, et] = (0, N.A)();

function en(e) {
    var t, n, s, N;
    let {
            loadId: X,
            activeSubscription: Q,
            stepConfigs: ee,
            breadcrumbs: et = [],
            skuIDs: en,
            isGift: er = !1,
            children: ei,
            defaultPlanId: ea,
            purchaseType: es = K.VVm.SUBSCRIPTION,
            applicationId: eo,
            referralCode: el,
            paymentGateway: ec,
            excludeSubscriptionPlansBySKU: eu = !1,
            excludeSKUPurchasePreviews: ed = !1,
            wasTier2PremiumBeforePurchase: ef = !1,
            referralTrialOfferId: ep,
        } = e,
        e_ = (0, H.A)(),
        eh = (0, m.H)(),
        em = (0, j.A)(),
        eg = en[0],
        eE = (0, u.bG)([T.A], () => T.A.get(eg), [eg]),
        eb = null == eE ? void 0 : eE.eligiblePaymentGateways,
        {
            paymentSources: ey,
            hasPaymentSources: eO,
            paymentSourceId: eA,
            setPaymentSourceId: ev,
            hasFetchedPaymentSources: eS,
        } = (0, M.A)({
            isGift: er,
            activeSubscription: Q,
            eligiblePaymentGateways: eb,
        }),
        eI = i.useRef(eO),
        {
            hasFetchedSubscriptionPlans: eT,
            priceOptions: eC,
            setCurrency: eN,
            currencyLoading: eR,
            currencies: ew,
        } = (0, L.A)({
            activeSubscription: Q,
            skuIDs: en,
            paymentSourceId: eA,
            isGift: er,
            excludeSubscriptionPlansBySKU: eu,
        }),
        eP = (0, V.A)(),
        [eD, ex] = i.useState(!1),
        {
            step: eL,
            setStep: ej,
            steps: eM,
            breadcrumbsData: ek,
            previousStepRef: eU,
        } = (0, B.A)({
            stepConfigs: ee,
            breadcrumbs: et,
        }),
        [eG, eV] = (0, G.A)(eL),
        { paymentError: eF, paymentAuthenticationState: eB } = (0, k.A)(),
        { purchaseError: eH, purchaseErrorBlockRef: eY, setPurchaseError: eW } = (0, U.A)(),
        eK = (0, d.A)(() => {
            let e = null != X ? X : (0, l.A)();
            return (
                w.A.addBreadcrumb({
                    message: "Checkout session ID: ".concat(e),
                }),
                {
                    loadId: e,
                    startTime: Date.now(),
                }
            );
        }),
        {
            selectedSkuId: ez,
            selectedPlan: eq,
            selectedPlanNotification: eX,
            setSelectedSkuId: eZ,
            setSelectedPlanId: eQ,
            setSelectedPlanNotification: e$,
        } = (0, P.A)(),
        [eJ, e0] = (0, u.yK)([S.A], () => [S.A.purchaseTokenAuthState, S.A.purchaseTokenHash]),
        [e1, e2, e3, e6] = (0, u.yK)([Y.A], () => [Y.A.browserCheckoutState, Y.A.loadId, Y.A.skuId, Y.A.planId]),
        [e4, e5] = i.useState(null),
        [e7, e8] = i.useState(null),
        [e9, te] = i.useState(null),
        [tt, tn] = i.useState(null),
        [tr, ti] = i.useState(null),
        [ta, ts] = i.useState(void 0),
        [to, tl] = i.useState([]),
        [tc, tu] = i.useState([]),
        td = i.useMemo(() => null == eq || (0, R.ys)(eq.id), [eq]),
        tf = i.useRef(null != Q ? Q.planId : null);
    i.useEffect(() => {
        null == tf.current && null != Q && (tf.current = Q.planId);
    }, [Q]);
    let { endsAt: tp } = (0, g.A)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        t_ = i.useRef(tp.isSame(o()(0)) ? null : tp);
    i.useEffect(() => {
        null != t_.current || tp.isSame(o()(0)) || (t_.current = tp);
    }, [tp]);
    let th = i.useMemo(
        () => ({
            paymentSourceId: eA,
            paymentGateway: ec,
            loadId: X,
        }),
        [eA, ec, X],
    );
    (0, x.A)(eg, th);
    let {
            skusById: tm,
            hasFetchedSkus: tg,
            skuPricePreviewsById: tE,
            previewErrorsById: tb,
        } = (0, F.A)({
            applicationId: null != eo ? eo : z.tv,
            skuIDs: en,
            currentPaymentSourceId: eA,
            isGift: er,
            excludeSKUPurchasePreviews: ed,
        }),
        ty = tm[null != ez ? ez : ""],
        tO = null != ez ? tb[ez] : null,
        [tA, tv] = i.useState(tO),
        tS = i.useMemo(() => {
            if (null == ez) return null;
            let e = tE[ez];
            return null == e ? null : e[null != eA ? eA : I.B];
        }, [ez, tE, eA]),
        { data: tI } = (0, h.YY)(eo),
        tT = v.Q_.useSetting(),
        tC = (0, u.bG)([f.A], () => f.A.getFetchState());
    i.useEffect(() => {
        null != tI && (0, c.Lt)(tI.flags, K.gfo.EMBEDDED) && tT && null == tC && (0, p.SE)();
    }, [tI, tT, tC]);
    let tN =
            (0, c.Lt)(null != (t = null == tI ? void 0 : tI.flags) ? t : 0, K.gfo.EMBEDDED) &&
            (0, c.Lt)(null != (n = null == tI ? void 0 : tI.flags) ? n : 0, K.gfo.EMBEDDED_IAP),
        tR = (0, u.bG)([_.Ay], () =>
            Array.from(_.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === eo;
            }),
        ),
        tw = null == tR ? void 0 : tR.compositeInstanceId,
        tP = (0, u.bG)([C.A], () => (null != ez ? C.A.getForSKU(ez) : null), [ez]),
        [tD, tx] = i.useState(null),
        tL = null != (s = null == Q ? void 0 : Q.inReverseTrial) && s && !er,
        tj =
            (0, y.A)({
                location: "PaymentModal",
            }) && td,
        { isDisplayingWowMomentConfirmation: tM } = (0, u.cf)([b.A], () => ({
            isDisplayingWowMomentConfirmation: b.A.isDisplayingWowMomentConfirmation,
        })),
        tk = tj ? q.Ot : void 0,
        { enabled: tU } = (0, E.Y)({
            location: "PaymentContext",
        }),
        tG = (0, D.uR)({
            location: "PaymentModal",
        }),
        tV = i.useMemo(() => {
            if (tG) return W.uH.APPLE_PAYMENT_LINK;
        }, [tG]),
        tF = i.useMemo(() => null != eq && eq.id === z.gD.PREMIUM_GROUP_MONTH, [eq]),
        tB = (0, A.V)(null != ep ? ep : void 0),
        tH = !tF && !er && null != tB && null != ez && z.TP[tB.trial_id].skus.includes(ez),
        tY = (0, O.O)(),
        tW = null == tY || null == (N = tY.discount) ? void 0 : N.plan_ids.some((e) => z.hd[e].skuId === ez),
        tK = !!(!tF && !er && null != tY && null != ez && tW);
    return (0, r.jsx)(J.Provider, {
        value: $(
            Z(
                {
                    stripe: e_,
                    paymentElementsEnabled: tU,
                    contextMetadata: eK,
                    blockedPayments: eh,
                    activeSubscription: Q,
                    hasFetchedSubscriptions: em,
                    hasFetchedSubscriptionPlans: eT,
                    updatedSubscription: tt,
                    setUpdatedSubscription: tn,
                    subscriptionMetadataRequest: tr,
                    setSubscriptionMetadataRequest: ti,
                    hasFetchedPaymentSources: eS,
                    paymentSources: ey,
                    hasPaymentSources: eO,
                    paymentSourceId: eA,
                    setPaymentSourceId: ev,
                    priceOptions: eC,
                    setCurrency: eN,
                    currencyLoading: eR,
                    currencies: ew,
                },
                eP,
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
                setPurchaseState: eV,
                paymentAuthenticationState: eB,
                paymentError: eF,
                purchaseError: eH,
                setPurchaseError: eW,
                purchasePreviewError: tA,
                setPurchasePreviewError: tv,
                purchaseErrorBlockRef: eY,
                purchaseTokenAuthState: eJ,
                purchaseTokenHash: e0,
                browserCheckoutState: e1,
                browserCheckoutStateLoadId: e2,
                browserCheckoutStateSkuId: e3,
                browserCheckoutStatePlanId: e6,
                bodyNode: e4,
                setBodyNode: e5,
                footerNode: e7,
                setFooterNode: e8,
                modalOverlayNode: e9,
                setModalOverlayNode: te,
                selectedSkuId: ez,
                selectedSku: ty,
                selectedStoreListing: tP,
                selectedPlan: eq,
                setSelectedSkuId: eZ,
                setSelectedPlanId: eQ,
                selectedPlanNotification: eX,
                setSelectedPlanNotification: e$,
                readySlideId: ta,
                setReadySlideId: ts,
                defaultPlanId: ea,
                isPremium: td,
                isGift: er,
                startingFractionalPremiumEndsAtRef: t_,
                startedPaymentFlowWithPaymentSourcesRef: eI,
                startingPremiumSubscriptionPlanIdRef: tf,
                hasFetchedSkus: tg,
                skusById: tm,
                skuPricePreviewsById: tE,
                selectedSkuPricePreview: tS,
                application: tI,
                purchaseType: es,
                isEmbeddedIAP: tN,
                activitySessionId: tw,
                devShelfFetchState: tC,
                entitlementsGranted: to,
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
                customCheckoutFlow: tV,
                isPremiumGroupPurchase: tF,
                isEligibleForTrial: tH,
                isEligibleForDiscount: tK,
                userTrialOffer: tB,
                referralTrialOfferId: ep,
                discountOffer: tY,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: K.XL8,
            stripe: e_,
            children: ei,
        }),
    });
}
