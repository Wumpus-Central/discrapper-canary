n.d(t, {
    P5: () => et,
    PaymentContextProvider: () => er,
    Qv: () => ee,
}),
    n(896048),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    o = n(989349),
    s = n.n(o),
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
    y = n(573359),
    b = n(170887),
    O = n(422936),
    v = n(234419),
    A = n(253932),
    I = n(293700),
    S = n(79387),
    T = n(67480),
    C = n(328968),
    N = n(786300),
    w = n(927578),
    R = n(728458),
    P = n(955529),
    D = n(483827),
    L = n(543027),
    x = n(853398),
    M = n(121005),
    j = n(369827),
    k = n(552574),
    U = n(935630),
    G = n(988023),
    V = n(289333),
    F = n(252293),
    B = n(615310),
    H = n(87952),
    Y = n(814626),
    W = n(305114),
    K = n(26279),
    z = n(652215),
    q = n(788868),
    Z = n(898772);

function Q(e, t, n) {
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

function X(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}

function J(e, t) {
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
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let [ee, et, en] = (0, N.A)();

function er(e) {
    var t, n, o, N;
    let {
            loadId: Q,
            activeSubscription: J,
            stepConfigs: et,
            breadcrumbs: en = [],
            skuIDs: er,
            isGift: ei = !1,
            children: ea,
            defaultPlanId: eo,
            purchaseType: es = z.VVm.SUBSCRIPTION,
            applicationId: el,
            referralCode: ec,
            paymentGateway: eu,
            excludeSubscriptionPlansBySKU: ed = !1,
            excludeSKUPurchasePreviews: ef = !1,
            wasTier2PremiumBeforePurchase: ep = !1,
            referralTrialOfferId: e_,
        } = e,
        eh = (0, H.A)(),
        em = (0, m.H)(),
        eg = (0, M.A)(),
        eE = er[0],
        ey = (0, u.bG)([T.A], () => T.A.get(eE), [eE]),
        eb = null == ey ? void 0 : ey.eligiblePaymentGateways,
        {
            paymentSources: eO,
            hasPaymentSources: ev,
            paymentSourceId: eA,
            setPaymentSourceId: eI,
            hasFetchedPaymentSources: eS,
        } = (0, j.A)({
            isGift: ei,
            activeSubscription: J,
            eligiblePaymentGateways: eb,
        }),
        eT = i.useRef(ev),
        {
            hasFetchedSubscriptionPlans: eC,
            priceOptions: eN,
            setCurrency: ew,
            currencyLoading: eR,
            currencies: eP,
        } = (0, x.A)({
            activeSubscription: J,
            skuIDs: er,
            paymentSourceId: eA,
            isGift: ei,
            excludeSubscriptionPlansBySKU: ed,
        }),
        eD = (0, V.A)(),
        [eL, ex] = i.useState(!1),
        {
            step: eM,
            setStep: ej,
            steps: ek,
            breadcrumbsData: eU,
            previousStepRef: eG,
        } = (0, B.A)({
            stepConfigs: et,
            breadcrumbs: en,
        }),
        [eV, eF] = (0, G.A)(eM),
        { paymentError: eB, paymentAuthenticationState: eH } = (0, k.A)(),
        { purchaseError: eY, purchaseErrorBlockRef: eW, setPurchaseError: eK } = (0, U.A)(),
        ez = (0, d.A)(() => {
            let e = null != Q ? Q : (0, l.A)();
            return (
                R.A.addBreadcrumb({
                    message: "Checkout session ID: ".concat(e),
                }),
                {
                    loadId: e,
                    startTime: Date.now(),
                }
            );
        }),
        {
            selectedSkuId: eq,
            selectedPlan: eZ,
            selectedPlanNotification: eQ,
            setSelectedSkuId: eX,
            setSelectedPlanId: eJ,
            setSelectedPlanNotification: e$,
        } = (0, P.A)(),
        [e0, e1] = (0, u.yK)([I.A], () => [I.A.purchaseTokenAuthState, I.A.purchaseTokenHash]),
        [e2, e3, e6, e4] = (0, u.yK)([Y.A], () => [Y.A.browserCheckoutState, Y.A.loadId, Y.A.skuId, Y.A.planId]),
        [e5, e7] = i.useState(null),
        [e8, e9] = i.useState(null),
        [te, tt] = i.useState(null),
        [tn, tr] = i.useState(null),
        [ti, ta] = i.useState(null),
        [to, ts] = i.useState(void 0),
        [tl, tc] = i.useState([]),
        [tu, td] = i.useState([]),
        tf = i.useMemo(() => null == eZ || (0, w.ys)(eZ.id), [eZ]),
        tp = i.useRef(null != J ? J.planId : null);
    i.useEffect(() => {
        null == tp.current && null != J && (tp.current = J.planId);
    }, [J]);
    let { endsAt: t_ } = (0, g.A)({
            forceFetch: !1,
            excludeReverseTrial: !0,
        }),
        th = i.useRef(t_.isSame(s()(0)) ? null : t_);
    i.useEffect(() => {
        null != th.current || t_.isSame(s()(0)) || (th.current = t_);
    }, [t_]);
    let tm = i.useMemo(
        () => ({
            paymentSourceId: eA,
            paymentGateway: eu,
            loadId: Q,
        }),
        [eA, eu, Q],
    );
    (0, L.A)(eE, tm);
    let {
            skusById: tg,
            hasFetchedSkus: tE,
            skuPricePreviewsById: ty,
            previewErrorsById: tb,
        } = (0, F.A)({
            applicationId: null != el ? el : q.tv,
            skuIDs: er,
            currentPaymentSourceId: eA,
            isGift: ei,
            excludeSKUPurchasePreviews: ef,
            loadId: ez.loadId,
        }),
        tO = tg[null != eq ? eq : ""],
        tv = null != eq ? tb[eq] : null,
        [tA, tI] = i.useState(tv),
        tS = i.useMemo(() => {
            var e;
            if (null == eq) return null;
            let t = ty[eq];
            return null == t ? null : null != (e = t[null != eA ? eA : S.B]) ? e : t[S.B];
        }, [eq, ty, eA]),
        tT = (0, u.bG)([W.A], () => W.A.getPaymentSourceRecords()),
        tC = (0, u.bG)([W.A], () => W.A.hasCheckoutContextForSession(ez.loadId)),
        { data: tN } = (0, h.YY)(el),
        tw = A.Q_.useSetting(),
        tR = (0, u.bG)([f.A], () => f.A.getFetchState());
    i.useEffect(() => {
        null != tN && (0, c.Lt)(tN.flags, z.gfo.EMBEDDED) && tw && null == tR && (0, p.SE)();
    }, [tN, tw, tR]);
    let tP =
            (0, c.Lt)(null != (t = null == tN ? void 0 : tN.flags) ? t : 0, z.gfo.EMBEDDED) &&
            (0, c.Lt)(null != (n = null == tN ? void 0 : tN.flags) ? n : 0, z.gfo.EMBEDDED_IAP),
        tD = (0, u.bG)([_.Ay], () =>
            Array.from(_.Ay.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === el;
            }),
        ),
        tL = null == tD ? void 0 : tD.compositeInstanceId,
        tx = (0, u.bG)([C.A], () => (null != eq ? C.A.getForSKU(eq) : null), [eq]),
        [tM, tj] = i.useState(null),
        tk = null != (o = null == J ? void 0 : J.inReverseTrial) && o && !ei,
        tU =
            (0, b.A)({
                location: "PaymentModal",
            }) && tf,
        { isDisplayingWowMomentConfirmation: tG } = (0, u.cf)([y.A], () => ({
            isDisplayingWowMomentConfirmation: y.A.isDisplayingWowMomentConfirmation,
        })),
        tV = tU ? Z.Ot : void 0,
        { enabled: tF } = (0, E.Y)({
            location: "PaymentContext",
        }),
        tB = (0, D.uR)({
            location: "PaymentModal",
        }),
        tH = i.useMemo(() => {
            if (tB) return K.uH.APPLE_PAYMENT_LINK;
        }, [tB]),
        tY = i.useMemo(() => null != eZ && eZ.id === q.gD.PREMIUM_GROUP_MONTH, [eZ]),
        tW = (0, v.V)(null != e_ ? e_ : void 0),
        tK = !tY && !ei && null != tW && null != eq && q.TP[tW.trial_id].skus.includes(eq),
        tz = (0, O.O)(),
        tq = null == tz || null == (N = tz.discount) ? void 0 : N.plan_ids.some((e) => q.hd[e].skuId === eq),
        tZ = !!(!tY && !ei && null != tz && null != eq && tq);
    return (0, r.jsx)(ee.Provider, {
        value: $(
            X(
                {
                    stripe: eh,
                    paymentElementsEnabled: tF,
                    contextMetadata: ez,
                    blockedPayments: em,
                    activeSubscription: J,
                    hasFetchedSubscriptions: eg,
                    hasFetchedSubscriptionPlans: eC,
                    updatedSubscription: tn,
                    setUpdatedSubscription: tr,
                    subscriptionMetadataRequest: ti,
                    setSubscriptionMetadataRequest: ta,
                    hasFetchedPaymentSources: eS,
                    paymentSources: eO,
                    hasPaymentSources: ev,
                    paymentSourceId: eA,
                    setPaymentSourceId: eI,
                    priceOptions: eN,
                    setCurrency: ew,
                    currencyLoading: eR,
                    currencies: eP,
                },
                eD,
            ),
            {
                hasAcceptedTerms: eL,
                setHasAcceptedTerms: ex,
                step: eM,
                setStep: ej,
                steps: ek,
                stepConfigs: et,
                breadcrumbs: eU,
                previousStepRef: eG,
                purchaseState: eV,
                setPurchaseState: eF,
                paymentAuthenticationState: eH,
                paymentError: eB,
                purchaseError: eY,
                setPurchaseError: eK,
                purchasePreviewError: tA,
                setPurchasePreviewError: tI,
                purchaseErrorBlockRef: eW,
                purchaseTokenAuthState: e0,
                purchaseTokenHash: e1,
                browserCheckoutState: e2,
                browserCheckoutStateLoadId: e3,
                browserCheckoutStateSkuId: e6,
                browserCheckoutStatePlanId: e4,
                bodyNode: e5,
                setBodyNode: e7,
                footerNode: e8,
                setFooterNode: e9,
                modalOverlayNode: te,
                setModalOverlayNode: tt,
                selectedSkuId: eq,
                selectedSku: tO,
                selectedStoreListing: tx,
                selectedPlan: eZ,
                setSelectedSkuId: eX,
                setSelectedPlanId: eJ,
                selectedPlanNotification: eQ,
                setSelectedPlanNotification: e$,
                readySlideId: to,
                setReadySlideId: ts,
                defaultPlanId: eo,
                isPremium: tf,
                isGift: ei,
                startingFractionalPremiumEndsAtRef: th,
                startedPaymentFlowWithPaymentSourcesRef: eT,
                startingPremiumSubscriptionPlanIdRef: tp,
                hasFetchedSkus: tE,
                skusById: tg,
                skuPricePreviewsById: ty,
                selectedSkuPricePreview: tS,
                checkoutPaymentSources: tT,
                hasCheckoutContextLoaded: tC,
                application: tN,
                purchaseType: es,
                isEmbeddedIAP: tP,
                activitySessionId: tL,
                devShelfFetchState: tR,
                entitlementsGranted: tl,
                setEntitlementsGranted: tc,
                appliedUserDiscounts: tu,
                setAppliedUserDiscounts: td,
                referralCode: ec,
                invoicePreview: tM,
                setInvoicePreview: tj,
                inReverseTrial: tk,
                enablePremiumBrandRefresh: tU,
                isDisplayingWowMomentConfirmation: tG,
                premiumBrandRefreshBackgroundClassName: tV,
                wasTier2PremiumBeforePurchase: ep,
                customCheckoutFlow: tH,
                isPremiumGroupPurchase: tY,
                isEligibleForTrial: tK,
                isEligibleForDiscount: tZ,
                userTrialOffer: tW,
                referralTrialOfferId: e_,
                discountOffer: tz,
            },
        ),
        children: (0, r.jsx)(a.Elements, {
            options: z.XL8,
            stripe: eh,
            children: ea,
        }),
    });
}
