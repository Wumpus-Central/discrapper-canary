n.d(t, { l: () => L }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(512722),
    a = n.n(o),
    s = n(330726),
    l = n(711459),
    c = n(717401),
    u = n(104494),
    d = n(639119),
    f = n(716534),
    _ = n(664891),
    p = n(911367),
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    b = n(107998),
    y = n(809144),
    v = n(698708),
    O = n(844068),
    I = n(614223),
    S = n(481595),
    T = n(435020),
    N = n(51499),
    A = n(678334),
    C = n(614277),
    R = n(474936),
    P = n(231338),
    w = n(388032);
let D = 500;
function L(e) {
    var t, n;
    let o,
        { handleStepChange: L, trialId: x, trialFooterMessageOverride: M, reviewWarningMessage: k, planGroup: j, openInvoiceId: U, analyticsData: G, analyticsLocation: B, referralTrialOfferId: F, initialPlanId: V, subscriptionTier: Z, handleClose: H } = e,
        { activeSubscription: W, setUpdatedSubscription: Y, contextMetadata: K, currencies: z, paymentSourceId: q, paymentSources: Q, priceOptions: X, purchaseError: J, purchasePreviewError: $, purchaseTokenAuthState: ee, selectedPlan: et, selectedSkuId: en, setCurrency: er, setPaymentSourceId: ei, setPurchaseState: eo, setPurchaseError: ea, step: es, purchaseState: el, isPremium: ec, setHasAcceptedTerms: eu, purchaseType: ed, setEntitlementsGranted: ef, startedPaymentFlowWithPaymentSourcesRef: e_, invoicePreview: ep, inReverseTrial: eh } = (0, g.JL)(),
        { isGift: em, giftMessage: eg, giftRecipient: eE, claimableRewards: eb } = (0, m.wD)(),
        { paymentModalBanner: ey } = (0, b.zb)();
    a()(null != es, 'Step should be set');
    let ev = i.useRef(null),
        [eO, eI] = (0, s.Z)(!1, D);
    (0, p.t)();
    let eS = null != (n = null != x ? x : F) ? n : null,
        eT = null != eS && (!ec || R.nG[eS].skus.includes(en)) ? eS : null,
        eN = (0, d.N)(F),
        eA = (0, u.Ng)(),
        eC = { user_trial_offer_id: null == eN ? void 0 : eN.id };
    i.useEffect(() => {
        null != J && null != ev.current && ev.current.scrollIntoView({ behavior: 'smooth' });
    }, [J]);
    let eR = i.useCallback(
            (e, t) => {
                Y(e),
                    null != t && ef(t),
                    L(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t
                        }
                    });
            },
            [L, Y, ef]
        ),
        eP = (0, T.m)(Q, q),
        ew = null != et && R.o4.has(et.id) && null != eP && !(0, l.aQ)(eP) ? Error(w.NW.string(w.t['2ik8io'])) : null,
        eD = i.useRef(null),
        [eL, ex] = i.useState(null),
        eM = !em && null != eN && null != en && R.nG[eN.trial_id].skus.includes(en),
        ek = null == eA || null == (t = eA.discount) ? void 0 : t.plan_ids,
        ej = !em && null != eA && null != ek && null != et && ek.includes(et.id),
        eU = em && (0, h.pO)(eE),
        eG = null == V && null == Z && ed === P.GZ.SUBSCRIPTION,
        eB = (0, I.Kp)({
            isTrial: eM,
            isGift: em,
            selectedSkuId: en,
            startedPaymentFlowWithPaymentSources: e_.current
        }),
        eF = em && ed === P.GZ.ONE_TIME,
        eV = eF || (eB ? eG && ec : ec),
        eZ = (0, c.id)(et, em, eb),
        eH = i.useCallback(() => (eB ? void L(E.h8.SKU_SELECT) : eZ ? void L(E.h8.SELECT_FREE_SKU) : eF ? L(E.h8.GIFT_CUSTOMIZATION) : L(E.h8.PLAN_SELECT)), [L, eB, eF, eZ]),
        eW = !1;
    return (
        ed === P.GZ.ONE_TIME
            ? ((eW = null != $),
              (o = (0, r.jsx)(S.Z, {
                  hasLegalTermsFlash: eO,
                  legalTermsNodeRef: eD,
                  onPaymentSourceChange: (e) => ei(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS)
              })))
            : ((eW = em ? null == ep : null != eP && ed === P.GZ.SUBSCRIPTION && eM && !eP.canRedeemTrial()),
              null == W || eh || em
                  ? (a()(null != et, 'Expected plan to be selected'),
                    (o = (0, r.jsx)(f.Z, {
                        selectedPlanId: et.id,
                        paymentSources: Q,
                        onPaymentSourceChange: (e) => ei(null != e ? e.id : null),
                        priceOptions: X,
                        currencies: z,
                        onCurrencyChange: (e) => er(e),
                        handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: eu,
                        legalTermsNodeRef: eD,
                        hasLegalTermsFlash: eO,
                        trialId: eT,
                        trialFooterMessageOverride: M,
                        reviewWarningMessage: k,
                        purchaseState: el,
                        referralTrialOfferId: F,
                        isTrial: eM || (null != x && null != M),
                        isDiscount: ej,
                        handleClose: H
                    })))
                  : (a()(null != et, 'Expected plan to be selected'),
                    (o = (0, r.jsx)(_.Z, {
                        premiumSubscription: W,
                        paymentSources: Q,
                        priceOptions: X,
                        onPaymentSourceChange: (e) => {
                            ei(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            L(E.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: et.id,
                        setHasAcceptedTerms: eu,
                        legalTermsNodeRef: eD,
                        hasLegalTermsFlash: eO,
                        onInvoiceError: (e) => ex(e),
                        planGroup: j,
                        currencies: z,
                        onCurrencyChange: (e) => er(e),
                        hasOpenInvoice: null != U,
                        purchaseState: el,
                        handleClose: H
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.P, { giftMessage: eg }),
                !eU && (0, r.jsx)(N.Z, { isEligibleForTrial: eM }),
                (0, r.jsxs)(C.C3, {
                    children: [null != ey && ey, (0, r.jsx)(O.Z, {}), (0, r.jsx)(v.Z, {}), o]
                }),
                (0, r.jsx)(C.O3, {
                    children: (0, r.jsx)(A.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: eo,
                        onBack: eH,
                        onNext: eR,
                        onPurchaseError: (e) => ea(e),
                        legalTermsNodeRef: eD,
                        flashLegalTerms: () => eI(!0),
                        invoiceError: eL,
                        planError: ew,
                        analyticsLocation: B,
                        baseAnalyticsData: G,
                        flowStartTime: K.startTime,
                        trialId: eT,
                        planGroup: j,
                        purchaseTokenAuthState: ee,
                        openInvoiceId: U,
                        backButtonEligible: eV,
                        metadata: eC,
                        isTrial: eM,
                        disablePurchase: eW
                    })
                })
            ]
        })
    );
}
