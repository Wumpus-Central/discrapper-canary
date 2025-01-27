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
var o = r(200651),
    s = r(192379),
    l = r(734530);
var u = r(772848),
    c = r(442837),
    d = r(211266),
    f = r(115130),
    p = r(566620),
    h = r(317381),
    _ = r(728345),
    m = r(211242),
    g = r(695346),
    E = r(882712),
    v = r(855775),
    y = r(551428),
    b = r(975104),
    I = r(630388),
    T = r(74538),
    S = r(960048),
    A = r(735521),
    C = r(583046),
    N = r(897829),
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
let [G, Z, F] = (0, b.Z)();
function V(e) {
    var n, r, i;
    let { loadId: a, activeSubscription: b, stepConfigs: Z, breadcrumbs: F = [], skuIDs: V, isGift: j = !1, children: H, defaultPlanId: Y, purchaseType: W = U.GZQ.SUBSCRIPTION, applicationId: K, referralCode: z, repeatPurchase: q = !1 } = e,
        Q = (0, M.Z)(),
        X = (0, m.Q)(),
        J = (0, N.Z)(),
        {
            paymentSources: $,
            hasPaymentSources: ee,
            paymentSourceId: et,
            setPaymentSourceId: en,
            hasFetchedPaymentSources: er
        } = (0, R.Z)({
            isGift: j,
            activeSubscription: b
        }),
        ei = s.useRef(ee),
        {
            hasFetchedSubscriptionPlans: ea,
            priceOptions: eo,
            setCurrency: es,
            currencyLoading: el,
            currencies: eu
        } = (0, C.Z)({
            activeSubscription: b,
            skuIDs: V,
            paymentSourceId: et,
            isGift: j
        }),
        ec = (0, x.Z)(),
        [ed, ef] = s.useState(!1),
        {
            step: ep,
            setStep: eh,
            steps: e_,
            breadcrumbsData: em,
            previousStepRef: eg
        } = (0, P.Z)({
            stepConfigs: Z,
            breadcrumbs: F
        }),
        [eE, ev] = (0, L.Z)(ep),
        { paymentError: ey, paymentAuthenticationState: eb } = (0, O.Z)(),
        { purchaseError: eI, purchaseErrorBlockRef: eT, setPurchaseError: eS } = (0, D.Z)(),
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
        { selectedSkuId: eC, selectedPlan: eN, selectedPlanNotification: eR, setSelectedSkuId: eO, setSelectedPlanId: eD, setSelectedPlanNotification: eL } = (0, A.Z)(),
        [ex, ew] = (0, c.Wu)([E.Z], () => [E.Z.purchaseTokenAuthState, E.Z.purchaseTokenHash]),
        [eP, eM, ek, eU] = (0, c.Wu)([k.Z], () => [k.Z.browserCheckoutState, k.Z.loadId, k.Z.skuId, k.Z.planId]),
        [eB, eG] = s.useState(null),
        [eZ, eF] = s.useState(null),
        [eV, ej] = s.useState(null),
        [eH, eY] = s.useState(null),
        [eW, eK] = s.useState(null),
        [ez, eq] = s.useState(void 0),
        [eQ, eX] = s.useState([]),
        eJ = s.useMemo(() => null == eN || (0, T.PV)(eN.id), [eN]),
        e$ = s.useRef(null != b ? b.planId : null);
    s.useEffect(() => {
        null == e$.current && null != b && (e$.current = b.planId);
    }, [b]);
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
        e4 = null != eC ? e3[eC] : null,
        [e6, e5] = s.useState(e4),
        e7 = s.useMemo(() => {
            if (null == eC) return null;
            let e = e2[eC];
            return null == e ? null : e[null != et ? et : v.c];
        }, [eC, e2, et]),
        { data: e8 } = (0, _.IX)(K),
        e9 = g.Sb.useSetting(),
        te = (0, c.e7)([f.Z], () => f.Z.getFetchState());
    s.useEffect(() => {
        null != e8 && (0, I.yE)(e8.flags, U.udG.EMBEDDED) && e9 && null == te && (0, p.$h)();
    }, [e8, e9, te]);
    let tt = (0, I.yE)(null !== (n = null == e8 ? void 0 : e8.flags) && void 0 !== n ? n : 0, U.udG.EMBEDDED) && (0, I.yE)(null !== (r = null == e8 ? void 0 : e8.flags) && void 0 !== r ? r : 0, U.udG.EMBEDDED_IAP),
        tn = (0, c.e7)([h.ZP], () =>
            Array.from(h.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: n } = e;
                return n === K;
            })
        ),
        tr = null == tn ? void 0 : tn.compositeInstanceId,
        ti = (0, c.e7)([y.Z], () => (null != eC ? y.Z.getForSKU(eC) : null), [eC]),
        ta = e0[null != eC ? eC : ''],
        [to, ts] = s.useState(null),
        tl = null !== (i = null == b ? void 0 : b.inReverseTrial) && void 0 !== i && i && !j;
    return (0, o.jsx)(G.Provider, {
        value: {
            stripe: Q,
            contextMetadata: eA,
            blockedPayments: X,
            activeSubscription: b,
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
            priceOptions: eo,
            setCurrency: es,
            currencyLoading: el,
            currencies: eu,
            ...ec,
            hasAcceptedTerms: ed,
            setHasAcceptedTerms: ef,
            step: ep,
            setStep: eh,
            steps: e_,
            stepConfigs: Z,
            breadcrumbs: em,
            previousStepRef: eg,
            purchaseState: eE,
            setPurchaseState: ev,
            paymentAuthenticationState: eb,
            paymentError: ey,
            purchaseError: eI,
            setPurchaseError: eS,
            purchasePreviewError: e6,
            setPurchasePreviewError: e5,
            purchaseErrorBlockRef: eT,
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
            selectedSkuId: eC,
            selectedSku: ta,
            selectedStoreListing: ti,
            selectedPlan: eN,
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
            selectedSkuPricePreview: e7,
            application: e8,
            purchaseType: W,
            isEmbeddedIAP: tt,
            activitySessionId: tr,
            devShelfFetchState: te,
            entitlementsGranted: eQ,
            setEntitlementsGranted: eX,
            referralCode: z,
            invoicePreview: to,
            setInvoicePreview: ts,
            repeatPurchase: q,
            inReverseTrial: tl
        },
        children: (0, o.jsx)(l.Elements, {
            options: U.OBo,
            stripe: Q,
            children: H
        })
    });
}
