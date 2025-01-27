r.d(n, {
    l: function () {
        return P;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(512722),
    u = r.n(l),
    c = r(330726),
    d = r(711459),
    f = r(717401),
    p = r(104494),
    h = r(639119),
    _ = r(716534),
    m = r(664891),
    g = r(911367),
    E = r(669079),
    v = r(987209),
    y = r(563132),
    b = r(409813),
    I = r(809144),
    T = r(698708),
    S = r(844068),
    A = r(614223),
    C = r(481595),
    N = r(51499),
    R = r(678334),
    O = r(614277),
    D = r(474936),
    L = r(231338),
    x = r(388032);
let w = 500;
function P(e) {
    var n, r;
    let i,
        { handleStepChange: a, trialId: l, trialFooterMessageOverride: P, reviewWarningMessage: M, planGroup: k, openInvoiceId: U, analyticsData: B, analyticsLocation: G, referralTrialOfferId: Z, initialPlanId: F, subscriptionTier: V, handleClose: j } = e,
        { activeSubscription: H, setUpdatedSubscription: Y, contextMetadata: W, currencies: K, paymentSourceId: z, paymentSources: q, priceOptions: Q, purchaseError: X, purchasePreviewError: J, purchaseTokenAuthState: $, selectedPlan: ee, selectedSkuId: et, setCurrency: en, setPaymentSourceId: er, setPurchaseState: ei, setPurchaseError: ea, step: eo, purchaseState: es, isPremium: el, setHasAcceptedTerms: eu, purchaseType: ec, setEntitlementsGranted: ed, startedPaymentFlowWithPaymentSourcesRef: ef, invoicePreview: ep, inReverseTrial: eh } = (0, y.usePaymentContext)(),
        { isGift: e_, giftMessage: em, giftRecipient: eg, claimableRewards: eE } = (0, v.wD)();
    u()(null != eo, 'Step should be set');
    let ev = s.useRef(null),
        [ey, eb] = (0, c.Z)(!1, w);
    (0, g.t)();
    let eI = null !== (r = null != l ? l : Z) && void 0 !== r ? r : null,
        eT = null != eI && (!el || D.nG[eI].skus.includes(et)) ? eI : null,
        eS = (0, h.N)(Z),
        eA = (0, p.Ng)(),
        eC = { user_trial_offer_id: null == eS ? void 0 : eS.id };
    s.useEffect(() => {
        null != X && null != ev.current && ev.current.scrollIntoView({ behavior: 'smooth' });
    }, [X]);
    let eN = s.useCallback(
            (e, n) => {
                Y(e),
                    null != n && ed(n),
                    a(b.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [a, Y, ed]
        ),
        eR = null != z ? q[z] : null,
        eO = null != ee && D.o4.has(ee.id) && null != eR && !(0, d.aQ)(eR) ? Error(x.intl.string(x.t['2ik8io'])) : null,
        eD = s.useRef(null),
        [eL, ex] = s.useState(null),
        ew = !e_ && null != eS && null != et && D.nG[eS.trial_id].skus.includes(et),
        eP = null == eA ? void 0 : null === (n = eA.discount) || void 0 === n ? void 0 : n.plan_ids,
        eM = !e_ && null != eA && null != eP && null != ee && eP.includes(ee.id),
        ek = e_ && (0, E.pO)(eg),
        eU = null == F && null == V && ec === L.GZ.SUBSCRIPTION,
        eB = (0, A.Kp)({
            isTrial: ew,
            isGift: e_,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: ef.current
        }),
        eG = e_ && ec === L.GZ.ONE_TIME,
        eZ = eG || (eB ? eU && el : el),
        eF = (0, f.id)(ee, e_, eE),
        eV = s.useCallback(() => {
            if (eB) {
                a(b.h8.SKU_SELECT);
                return;
            }
            if (eF) {
                a(b.h8.SELECT_FREE_SKU);
                return;
            }
            return eG ? a(b.h8.GIFT_CUSTOMIZATION) : a(b.h8.PLAN_SELECT);
        }, [a, eB, eG, eF]),
        ej = !1;
    return (
        ec === L.GZ.ONE_TIME
            ? ((ej = null != J),
              (i = (0, o.jsx)(C.Z, {
                  hasLegalTermsFlash: ey,
                  legalTermsNodeRef: eD,
                  onPaymentSourceChange: (e) => er(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => a(b.h8.ADD_PAYMENT_STEPS)
              })))
            : ((ej = e_ ? null == ep : null != eR && ec === L.GZ.SUBSCRIPTION && ew && !eR.canRedeemTrial()),
              null == H || eh || e_
                  ? (u()(null != ee, 'Expected plan to be selected'),
                    (i = (0, o.jsx)(_.Z, {
                        selectedPlanId: ee.id,
                        paymentSources: q,
                        onPaymentSourceChange: (e) => er(null != e ? e.id : null),
                        priceOptions: Q,
                        currencies: K,
                        onCurrencyChange: (e) => en(e),
                        handlePaymentSourceAdd: () => a(b.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: eu,
                        legalTermsNodeRef: eD,
                        hasLegalTermsFlash: ey,
                        trialId: eT,
                        trialFooterMessageOverride: P,
                        reviewWarningMessage: M,
                        purchaseState: es,
                        referralTrialOfferId: Z,
                        isTrial: ew || (null != l && null != P),
                        isDiscount: eM,
                        handleClose: j
                    })))
                  : (u()(null != ee, 'Expected plan to be selected'),
                    (i = (0, o.jsx)(m.Z, {
                        premiumSubscription: H,
                        paymentSources: q,
                        priceOptions: Q,
                        onPaymentSourceChange: (e) => {
                            er(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            a(b.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: ee.id,
                        setHasAcceptedTerms: eu,
                        legalTermsNodeRef: eD,
                        hasLegalTermsFlash: ey,
                        onInvoiceError: (e) => ex(e),
                        planGroup: k,
                        currencies: K,
                        onCurrencyChange: (e) => en(e),
                        hasOpenInvoice: null != U,
                        purchaseState: es,
                        handleClose: j
                    })))),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(I.P, { giftMessage: em }),
                !ek && (0, o.jsx)(N.Z, { isEligibleForTrial: ew }),
                (0, o.jsxs)(O.C3, {
                    children: [(0, o.jsx)(S.Z, {}), (0, o.jsx)(T.Z, {}), i]
                }),
                (0, o.jsx)(O.O3, {
                    children: (0, o.jsx)(R.Z, {
                        premiumSubscription: null != H ? H : null,
                        setPurchaseState: ei,
                        onBack: eV,
                        onNext: eN,
                        onPurchaseError: (e) => ea(e),
                        legalTermsNodeRef: eD,
                        flashLegalTerms: () => eb(!0),
                        invoiceError: eL,
                        planError: eO,
                        analyticsLocation: G,
                        baseAnalyticsData: B,
                        flowStartTime: W.startTime,
                        trialId: eT,
                        planGroup: k,
                        purchaseTokenAuthState: $,
                        openInvoiceId: U,
                        backButtonEligible: eZ,
                        metadata: eC,
                        isTrial: ew,
                        disablePurchase: ej
                    })
                })
            ]
        })
    );
}
