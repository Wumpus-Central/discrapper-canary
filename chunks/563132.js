n.d(t, {
    JL: () => U,
    PaymentContextProvider: () => B
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    a = n(734530),
    s = n(772848),
    o = n(442837),
    l = n(211266),
    u = n(115130),
    c = n(566620),
    d = n(317381),
    f = n(728345),
    _ = n(211242),
    p = n(695346),
    h = n(882712),
    m = n(855775),
    g = n(551428),
    E = n(975104),
    v = n(630388),
    y = n(74538),
    I = n(960048),
    T = n(735521),
    b = n(583046),
    S = n(897829),
    A = n(74179),
    N = n(896246),
    C = n(320317),
    R = n(994427),
    O = n(814076),
    D = n(712297),
    L = n(585686),
    x = n(771206),
    w = n(362755),
    P = n(981631),
    M = n(474936);
let [k, U, G] = (0, E.Z)();
function B(e) {
    var t, n, E;
    let { loadId: U, activeSubscription: G, stepConfigs: B, breadcrumbs: Z = [], skuIDs: F, isGift: V = !1, children: j, defaultPlanId: H, purchaseType: Y = P.GZQ.SUBSCRIPTION, applicationId: W, referralCode: K, repeatPurchase: z = !1 } = e,
        q = (0, x.Z)(),
        Q = (0, _.Q)(),
        X = (0, S.Z)(),
        {
            paymentSources: J,
            hasPaymentSources: $,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            hasFetchedPaymentSources: en
        } = (0, A.Z)({
            isGift: V,
            activeSubscription: G
        }),
        ei = r.useRef($),
        {
            hasFetchedSubscriptionPlans: er,
            priceOptions: ea,
            setCurrency: es,
            currencyLoading: eo,
            currencies: el
        } = (0, b.Z)({
            activeSubscription: G,
            skuIDs: F,
            paymentSourceId: ee,
            isGift: V
        }),
        eu = (0, O.Z)(),
        [ec, ed] = r.useState(!1),
        {
            step: ef,
            setStep: e_,
            steps: ep,
            breadcrumbsData: eh,
            previousStepRef: em
        } = (0, L.Z)({
            stepConfigs: B,
            breadcrumbs: Z
        }),
        [eg, eE] = (0, R.Z)(ef),
        { paymentError: ev, paymentAuthenticationState: ey } = (0, N.Z)(),
        { purchaseError: eI, purchaseErrorBlockRef: eT, setPurchaseError: eb } = (0, C.Z)(),
        eS = (0, l.Z)(() => {
            let e = null != U ? U : (0, s.Z)();
            return (
                I.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eA, selectedPlan: eN, selectedPlanNotification: eC, setSelectedSkuId: eR, setSelectedPlanId: eO, setSelectedPlanNotification: eD } = (0, T.Z)(),
        [eL, ex] = (0, o.Wu)([h.Z], () => [h.Z.purchaseTokenAuthState, h.Z.purchaseTokenHash]),
        [ew, eP, eM, ek] = (0, o.Wu)([w.Z], () => [w.Z.browserCheckoutState, w.Z.loadId, w.Z.skuId, w.Z.planId]),
        [eU, eG] = r.useState(null),
        [eB, eZ] = r.useState(null),
        [eF, eV] = r.useState(null),
        [ej, eH] = r.useState(null),
        [eY, eW] = r.useState(null),
        [eK, ez] = r.useState(void 0),
        [eq, eQ] = r.useState([]),
        eX = r.useMemo(() => null == eN || (0, y.PV)(eN.id), [eN]),
        eJ = r.useRef(null != G ? G.planId : null);
    r.useEffect(() => {
        null == eJ.current && null != G && (eJ.current = G.planId);
    }, [G]);
    let {
            skusById: e$,
            hasFetchedSkus: e0,
            skuPricePreviewsById: e1,
            previewErrorsById: e2
        } = (0, D.Z)({
            applicationId: null != W ? W : M.CL,
            skuIDs: F,
            currentPaymentSourceId: ee,
            isGift: V
        }),
        e3 = null != eA ? e2[eA] : null,
        [e4, e6] = r.useState(e3),
        e5 = r.useMemo(() => {
            if (null == eA) return null;
            let e = e1[eA];
            return null == e ? null : e[null != ee ? ee : m.c];
        }, [eA, e1, ee]),
        { data: e7 } = (0, f.IX)(W),
        e8 = p.Sb.useSetting(),
        e9 = (0, o.e7)([u.Z], () => u.Z.getFetchState());
    r.useEffect(() => {
        null != e7 && (0, v.yE)(e7.flags, P.udG.EMBEDDED) && e8 && null == e9 && (0, c.$h)();
    }, [e7, e8, e9]);
    let te = (0, v.yE)(null !== (t = null == e7 ? void 0 : e7.flags) && void 0 !== t ? t : 0, P.udG.EMBEDDED) && (0, v.yE)(null !== (n = null == e7 ? void 0 : e7.flags) && void 0 !== n ? n : 0, P.udG.EMBEDDED_IAP),
        tt = (0, o.e7)([d.ZP], () =>
            Array.from(d.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === W;
            })
        ),
        tn = null == tt ? void 0 : tt.compositeInstanceId,
        ti = (0, o.e7)([g.Z], () => (null != eA ? g.Z.getForSKU(eA) : null), [eA]),
        tr = e$[null != eA ? eA : ''],
        [ta, ts] = r.useState(null),
        to = null !== (E = null == G ? void 0 : G.inReverseTrial) && void 0 !== E && E && !V;
    return (0, i.jsx)(k.Provider, {
        value: {
            stripe: q,
            contextMetadata: eS,
            blockedPayments: Q,
            activeSubscription: G,
            hasFetchedSubscriptions: X,
            hasFetchedSubscriptionPlans: er,
            updatedSubscription: ej,
            setUpdatedSubscription: eH,
            subscriptionMetadataRequest: eY,
            setSubscriptionMetadataRequest: eW,
            hasFetchedPaymentSources: en,
            paymentSources: J,
            hasPaymentSources: $,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            priceOptions: ea,
            setCurrency: es,
            currencyLoading: eo,
            currencies: el,
            ...eu,
            hasAcceptedTerms: ec,
            setHasAcceptedTerms: ed,
            step: ef,
            setStep: e_,
            steps: ep,
            stepConfigs: B,
            breadcrumbs: eh,
            previousStepRef: em,
            purchaseState: eg,
            setPurchaseState: eE,
            paymentAuthenticationState: ey,
            paymentError: ev,
            purchaseError: eI,
            setPurchaseError: eb,
            purchasePreviewError: e4,
            setPurchasePreviewError: e6,
            purchaseErrorBlockRef: eT,
            purchaseTokenAuthState: eL,
            purchaseTokenHash: ex,
            browserCheckoutState: ew,
            browserCheckoutStateLoadId: eP,
            browserCheckoutStateSkuId: eM,
            browserCheckoutStatePlanId: ek,
            bodyNode: eU,
            setBodyNode: eG,
            footerNode: eB,
            setFooterNode: eZ,
            modalOverlayNode: eF,
            setModalOverlayNode: eV,
            selectedSkuId: eA,
            selectedSku: tr,
            selectedStoreListing: ti,
            selectedPlan: eN,
            setSelectedSkuId: eR,
            setSelectedPlanId: eO,
            selectedPlanNotification: eC,
            setSelectedPlanNotification: eD,
            readySlideId: eK,
            setReadySlideId: ez,
            defaultPlanId: H,
            isPremium: eX,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            startingPremiumSubscriptionPlanIdRef: eJ,
            hasFetchedSkus: e0,
            skusById: e$,
            skuPricePreviewsById: e1,
            selectedSkuPricePreview: e5,
            application: e7,
            purchaseType: Y,
            isEmbeddedIAP: te,
            activitySessionId: tn,
            devShelfFetchState: e9,
            entitlementsGranted: eq,
            setEntitlementsGranted: eQ,
            referralCode: K,
            invoicePreview: ta,
            setInvoicePreview: ts,
            repeatPurchase: z,
            inReverseTrial: to
        },
        children: (0, i.jsx)(a.Elements, {
            options: P.OBo,
            stripe: q,
            children: j
        })
    });
}
