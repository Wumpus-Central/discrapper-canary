t.d(n, {
    l: function () {
        return O;
    }
}),
    t(47120),
    t(411104);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(330726),
    c = t(711459),
    o = t(717401),
    u = t(104494),
    d = t(639119),
    m = t(716534),
    p = t(664891),
    x = t(911367),
    h = t(669079),
    f = t(987209),
    v = t(563132),
    E = t(409813),
    S = t(809144),
    g = t(698708),
    j = t(844068),
    y = t(614223),
    I = t(481595),
    P = t(51499),
    T = t(678334),
    N = t(614277),
    b = t(474936),
    C = t(231338),
    _ = t(388032);
function O(e) {
    var n, t;
    let r,
        { handleStepChange: O, trialId: A, trialFooterMessageOverride: Z, reviewWarningMessage: R, planGroup: w, openInvoiceId: M, analyticsData: L, analyticsLocation: k, referralTrialOfferId: F, initialPlanId: D, subscriptionTier: U, handleClose: G } = e,
        { activeSubscription: B, setUpdatedSubscription: H, contextMetadata: W, currencies: V, paymentSourceId: K, paymentSources: z, priceOptions: Y, purchaseError: X, purchaseTokenAuthState: q, selectedPlan: J, selectedSkuId: Q, setCurrency: $, setPaymentSourceId: ee, setPurchaseState: en, setPurchaseError: et, step: ei, purchaseState: el, isPremium: er, setHasAcceptedTerms: es, purchaseType: ea, setEntitlementsGranted: ec, startedPaymentFlowWithPaymentSourcesRef: eo, invoicePreview: eu, inReverseTrial: ed } = (0, v.usePaymentContext)(),
        { isGift: em, giftMessage: ep, giftRecipient: ex, claimableRewards: eh } = (0, f.wD)();
    s()(null != ei, 'Step should be set');
    let ef = l.useRef(null),
        [ev, eE] = (0, a.Z)(!1, 500);
    (0, x.t)();
    let eS = null !== (t = null != A ? A : F) && void 0 !== t ? t : null,
        eg = null != eS && (!er || b.nG[eS].skus.includes(Q)) ? eS : null,
        ej = (0, d.N)(F),
        ey = (0, u.Ng)(),
        eI = { user_trial_offer_id: null == ej ? void 0 : ej.id };
    l.useEffect(() => {
        null != X && null != ef.current && ef.current.scrollIntoView({ behavior: 'smooth' });
    }, [X]);
    let eP = l.useCallback(
            (e, n) => {
                H(e),
                    null != n && ec(n),
                    O(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [O, H, ec]
        ),
        eT = null != K ? z[K] : null,
        eN = null != J && b.o4.has(J.id) && null != eT && !(0, c.aQ)(eT) ? Error(_.intl.string(_.t['2ik8io'])) : null,
        eb = l.useRef(null),
        [eC, e_] = l.useState(null),
        eO = !em && null != ej && null != Q && b.nG[ej.trial_id].skus.includes(Q),
        eA = null == ey ? void 0 : null === (n = ey.discount) || void 0 === n ? void 0 : n.plan_ids,
        eZ = !em && null != ey && null != eA && null != J && eA.includes(J.id),
        eR = em && (0, h.pO)(ex),
        ew = null == D && null == U && ea === C.GZ.SUBSCRIPTION,
        eM = (0, y.Kp)({
            isTrial: eO,
            isGift: em,
            selectedSkuId: Q,
            startedPaymentFlowWithPaymentSources: eo.current
        }),
        eL = em && ea === C.GZ.ONE_TIME,
        ek = eL || (eM ? ew && er : er),
        eF = (0, o.id)(J, em, eh),
        eD = l.useCallback(() => {
            if (eM) {
                O(E.h8.SKU_SELECT);
                return;
            }
            if (eF) {
                O(E.h8.SELECT_FREE_SKU);
                return;
            }
            return eL ? O(E.h8.GIFT_CUSTOMIZATION) : O(E.h8.PLAN_SELECT);
        }, [O, eM, eL, eF]),
        eU = !1;
    return (
        ea === C.GZ.ONE_TIME
            ? (r = (0, i.jsx)(I.Z, {
                  hasLegalTermsFlash: ev,
                  legalTermsNodeRef: eb,
                  onPaymentSourceChange: (e) => ee(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => O(E.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eU = em ? null == eu : null != eT && ea === C.GZ.SUBSCRIPTION && eO && !eT.canRedeemTrial()),
              null == B || ed || em
                  ? (s()(null != J, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(m.Z, {
                        selectedPlanId: J.id,
                        paymentSources: z,
                        onPaymentSourceChange: (e) => ee(null != e ? e.id : null),
                        priceOptions: Y,
                        currencies: V,
                        onCurrencyChange: (e) => $(e),
                        handlePaymentSourceAdd: () => O(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: es,
                        legalTermsNodeRef: eb,
                        hasLegalTermsFlash: ev,
                        trialId: eg,
                        trialFooterMessageOverride: Z,
                        reviewWarningMessage: R,
                        purchaseState: el,
                        referralTrialOfferId: F,
                        isTrial: eO || (null != A && null != Z),
                        isDiscount: eZ,
                        handleClose: G
                    })))
                  : (s()(null != J, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(p.Z, {
                        premiumSubscription: B,
                        paymentSources: z,
                        priceOptions: Y,
                        onPaymentSourceChange: (e) => {
                            ee(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            O(E.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: J.id,
                        setHasAcceptedTerms: es,
                        legalTermsNodeRef: eb,
                        hasLegalTermsFlash: ev,
                        onInvoiceError: (e) => e_(e),
                        planGroup: w,
                        currencies: V,
                        onCurrencyChange: (e) => $(e),
                        hasOpenInvoice: null != M,
                        purchaseState: el,
                        handleClose: G
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S.P, { giftMessage: ep }),
                !eR && (0, i.jsx)(P.Z, { isEligibleForTrial: eO }),
                (0, i.jsxs)(N.C3, {
                    children: [(0, i.jsx)(j.Z, {}), (0, i.jsx)(g.Z, {}), r]
                }),
                (0, i.jsx)(N.O3, {
                    children: (0, i.jsx)(T.Z, {
                        premiumSubscription: null != B ? B : null,
                        setPurchaseState: en,
                        onBack: eD,
                        onNext: eP,
                        onPurchaseError: (e) => et(e),
                        legalTermsNodeRef: eb,
                        flashLegalTerms: () => eE(!0),
                        invoiceError: eC,
                        planError: eN,
                        analyticsLocation: k,
                        baseAnalyticsData: L,
                        flowStartTime: W.startTime,
                        trialId: eg,
                        planGroup: w,
                        purchaseTokenAuthState: q,
                        openInvoiceId: M,
                        backButtonEligible: ek,
                        metadata: eI,
                        isTrial: eO,
                        disablePurchase: eU
                    })
                })
            ]
        })
    );
}
