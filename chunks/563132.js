r.r(n),
    r.d(n, {
        PaymentContext: function () {
            return G;
        },
        PaymentContextProvider: function () {
            return V;
        },
        useForwardedPaymentContext: function () {
            return F;
        },
        usePaymentContext: function () {
            return Z;
        }
    });
var i = r(47120);
var a = r(789020);
var s = r(200651),
    o = r(192379),
    l = r(734530);
var u = r(772848),
    c = r(442837),
    d = r(211266),
    f = r(115130),
    _ = r(566620),
    h = r(317381),
    p = r(728345),
    m = r(211242),
    g = r(695346),
    E = r(882712),
    v = r(855775),
    I = r(551428),
    T = r(975104),
    b = r(630388),
    y = r(74538),
    S = r(960048),
    A = r(735521),
    N = r(583046),
    C = r(897829),
    R = r(74179),
    O = r(896246),
    D = r(320317),
    L = r(994427),
    x = r(814076),
    w = r(712297),
    P = r(585686),
    M = r(771206),
    k = r(362755),
    U = r(981631),
    B = r(474936);
let [G, Z, F] = (0, T.Z)();
function V(e) {
    var n, r, i;
    let { loadId: a, activeSubscription: T, stepConfigs: Z, breadcrumbs: F = [], skuIDs: V, isGift: j = !1, children: H, defaultPlanId: Y, purchaseType: W = U.GZQ.SUBSCRIPTION, applicationId: K, referralCode: z, repeatPurchase: q = !1 } = e,
        Q = (0, M.Z)(),
        X = (0, m.Q)(),
        J = (0, C.Z)(),
        {
            paymentSources: $,
            hasPaymentSources: ee,
            paymentSourceId: et,
            setPaymentSourceId: en,
            hasFetchedPaymentSources: er
        } = (0, R.Z)({
            isGift: j,
            activeSubscription: T
        }),
        ei = o.useRef(ee),
        {
            hasFetchedSubscriptionPlans: ea,
            priceOptions: es,
            setCurrency: eo,
            currencyLoading: el,
            currencies: eu
        } = (0, N.Z)({
            activeSubscription: T,
            skuIDs: V,
            paymentSourceId: et,
            isGift: j
        }),
        ec = (0, x.Z)(),
        [ed, ef] = o.useState(!1),
        {
            step: e_,
            setStep: eh,
            steps: ep,
            breadcrumbsData: em,
            previousStepRef: eg
        } = (0, P.Z)({
            stepConfigs: Z,
            breadcrumbs: F
        }),
        [eE, ev] = (0, L.Z)(e_),
        { paymentError: eI, paymentAuthenticationState: eT } = (0, O.Z)(),
        { purchaseError: eb, purchaseErrorBlockRef: ey, setPurchaseError: eS } = (0, D.Z)(),
        eA = (0, d.Z)(() => {
            let e = null != a ? a : (0, u.Z)();
            return (
                S.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eN, selectedPlan: eC, selectedPlanNotification: eR, setSelectedSkuId: eO, setSelectedPlanId: eD, setSelectedPlanNotification: eL } = (0, A.Z)(),
        [ex, ew] = (0, c.Wu)([E.Z], () => [E.Z.purchaseTokenAuthState, E.Z.purchaseTokenHash]),
        [eP, eM, ek, eU] = (0, c.Wu)([k.Z], () => [k.Z.browserCheckoutState, k.Z.loadId, k.Z.skuId, k.Z.planId]),
        [eB, eG] = o.useState(null),
        [eZ, eF] = o.useState(null),
        [eV, ej] = o.useState(null),
        [eH, eY] = o.useState(null),
        [eW, eK] = o.useState(null),
        [ez, eq] = o.useState(void 0),
        [eQ, eX] = o.useState([]),
        eJ = o.useMemo(() => null == eC || (0, y.PV)(eC.id), [eC]),
        e$ = o.useRef(null != T ? T.planId : null);
    o.useEffect(() => {
        null == e$.current && null != T && (e$.current = T.planId);
    }, [T]);
    let {
            skusById: e0,
            hasFetchedSkus: e1,
            skuPricePreviewsById: e2,
            previewErrorsById: e3
        } = (0, w.Z)({
            applicationId: null != K ? K : B.CL,
            skuIDs: V,
            currentPaymentSourceId: et,
            isGift: j
        }),
        e4 = null != eN ? e3[eN] : null,
        e6 = o.useMemo(() => {
            if (null == eN) return null;
            let e = e2[eN];
            return null == e ? null : e[null != et ? et : v.c];
        }, [eN, e2, et]),
        { data: e5 } = (0, p.IX)(K),
        e7 = g.Sb.useSetting(),
        e8 = (0, c.e7)([f.Z], () => f.Z.getFetchState());
    o.useEffect(() => {
        null != e5 && (0, b.yE)(e5.flags, U.udG.EMBEDDED) && e7 && null == e8 && (0, _.$h)();
    }, [e5, e7, e8]);
    let e9 = (0, b.yE)(null !== (n = null == e5 ? void 0 : e5.flags) && void 0 !== n ? n : 0, U.udG.EMBEDDED) && (0, b.yE)(null !== (r = null == e5 ? void 0 : e5.flags) && void 0 !== r ? r : 0, U.udG.EMBEDDED_IAP),
        te = (0, c.e7)([h.ZP], () =>
            Array.from(h.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: n } = e;
                return n === K;
            })
        ),
        tt = null == te ? void 0 : te.compositeInstanceId,
        tn = (0, c.e7)([I.Z], () => (null != eN ? I.Z.getForSKU(eN) : null), [eN]),
        tr = e0[null != eN ? eN : ''],
        [ti, ta] = o.useState(null),
        ts = null !== (i = null == T ? void 0 : T.inReverseTrial) && void 0 !== i && i && !j;
    return (0, s.jsx)(G.Provider, {
        value: {
            stripe: Q,
            contextMetadata: eA,
            blockedPayments: X,
            activeSubscription: T,
            hasFetchedSubscriptions: J,
            hasFetchedSubscriptionPlans: ea,
            updatedSubscription: eH,
            setUpdatedSubscription: eY,
            subscriptionMetadataRequest: eW,
            setSubscriptionMetadataRequest: eK,
            hasFetchedPaymentSources: er,
            paymentSources: $,
            hasPaymentSources: ee,
            paymentSourceId: et,
            setPaymentSourceId: en,
            priceOptions: es,
            setCurrency: eo,
            currencyLoading: el,
            currencies: eu,
            ...ec,
            hasAcceptedTerms: ed,
            setHasAcceptedTerms: ef,
            step: e_,
            setStep: eh,
            steps: ep,
            stepConfigs: Z,
            breadcrumbs: em,
            previousStepRef: eg,
            purchaseState: eE,
            setPurchaseState: ev,
            paymentAuthenticationState: eT,
            paymentError: eI,
            purchaseError: eb,
            setPurchaseError: eS,
            purchasePreviewError: e4,
            purchaseErrorBlockRef: ey,
            purchaseTokenAuthState: ex,
            purchaseTokenHash: ew,
            browserCheckoutState: eP,
            browserCheckoutStateLoadId: eM,
            browserCheckoutStateSkuId: ek,
            browserCheckoutStatePlanId: eU,
            bodyNode: eB,
            setBodyNode: eG,
            footerNode: eZ,
            setFooterNode: eF,
            modalOverlayNode: eV,
            setModalOverlayNode: ej,
            selectedSkuId: eN,
            selectedSku: tr,
            selectedStoreListing: tn,
            selectedPlan: eC,
            setSelectedSkuId: eO,
            setSelectedPlanId: eD,
            selectedPlanNotification: eR,
            setSelectedPlanNotification: eL,
            readySlideId: ez,
            setReadySlideId: eq,
            defaultPlanId: Y,
            isPremium: eJ,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            startingPremiumSubscriptionPlanIdRef: e$,
            hasFetchedSkus: e1,
            skusById: e0,
            skuPricePreviewsById: e2,
            selectedSkuPricePreview: e6,
            application: e5,
            purchaseType: W,
            isEmbeddedIAP: e9,
            activitySessionId: tt,
            devShelfFetchState: e8,
            entitlementsGranted: eQ,
            setEntitlementsGranted: eX,
            referralCode: z,
            invoicePreview: ti,
            setInvoicePreview: ta,
            repeatPurchase: q,
            inReverseTrial: ts
        },
        children: (0, s.jsx)(l.Elements, {
            options: U.OBo,
            stripe: Q,
            children: H
        })
    });
}
