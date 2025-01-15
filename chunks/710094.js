t.d(n, {
    l: function () {
        return Z;
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
    g = t(409813),
    S = t(809144),
    E = t(698708),
    j = t(844068),
    y = t(614223),
    P = t(481595),
    I = t(51499),
    T = t(678334),
    N = t(614277),
    b = t(474936),
    C = t(231338),
    _ = t(388032);
function Z(e) {
    var n, t;
    let r,
        { handleStepChange: Z, trialId: O, trialFooterMessageOverride: A, reviewWarningMessage: R, planGroup: w, openInvoiceId: M, analyticsData: L, analyticsLocation: k, referralTrialOfferId: F, initialPlanId: D, subscriptionTier: U, handleClose: B } = e,
        { activeSubscription: G, setUpdatedSubscription: H, contextMetadata: W, currencies: V, paymentSourceId: z, paymentSources: K, priceOptions: Y, purchaseError: X, purchaseTokenAuthState: q, selectedPlan: J, selectedSkuId: Q, setCurrency: $, setPaymentSourceId: ee, setPurchaseState: en, setPurchaseError: et, step: ei, purchaseState: el, isPremium: er, setHasAcceptedTerms: es, purchaseType: ea, setEntitlementsGranted: ec, startedPaymentFlowWithPaymentSourcesRef: eo, invoicePreview: eu, inReverseTrial: ed } = (0, v.usePaymentContext)(),
        { isGift: em, giftMessage: ep, giftRecipient: ex, claimableRewards: eh } = (0, f.wD)();
    s()(null != ei, 'Step should be set');
    let ef = l.useRef(null),
        [ev, eg] = (0, a.Z)(!1, 500);
    (0, x.t)();
    let eS = null !== (t = null != O ? O : F) && void 0 !== t ? t : null,
        eE = null != eS && (!er || b.nG[eS].skus.includes(Q)) ? eS : null,
        ej = (0, d.N)(F),
        ey = (0, u.Ng)(),
        eP = { user_trial_offer_id: null == ej ? void 0 : ej.id };
    l.useEffect(() => {
        null != X && null != ef.current && ef.current.scrollIntoView({ behavior: 'smooth' });
    }, [X]);
    let eI = l.useCallback(
            (e, n) => {
                H(e),
                    null != n && ec(n),
                    Z(g.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [Z, H, ec]
        ),
        eT = null != z ? K[z] : null,
        eN = null != J && b.o4.has(J.id) && null != eT && !(0, c.aQ)(eT) ? Error(_.intl.string(_.t['2ik8io'])) : null,
        eb = l.useRef(null),
        [eC, e_] = l.useState(null),
        eZ = !em && null != ej && null != Q && b.nG[ej.trial_id].skus.includes(Q),
        eO = null == ey ? void 0 : null === (n = ey.discount) || void 0 === n ? void 0 : n.plan_ids,
        eA = !em && null != ey && null != eO && null != J && eO.includes(J.id),
        eR = em && (0, h.pO)(ex),
        ew = null == D && null == U && ea === C.GZ.SUBSCRIPTION,
        eM = (0, y.Kp)({
            isTrial: eZ,
            isGift: em,
            selectedSkuId: Q,
            startedPaymentFlowWithPaymentSources: eo.current
        }),
        eL = em && ea === C.GZ.ONE_TIME,
        ek = eL || (eM ? ew && er : er),
        eF = (0, o.id)(J, em, eh),
        eD = l.useCallback(() => {
            if (eM) {
                Z(g.h8.SKU_SELECT);
                return;
            }
            if (eF) {
                Z(g.h8.SELECT_FREE_SKU);
                return;
            }
            return eL ? Z(g.h8.GIFT_CUSTOMIZATION) : Z(g.h8.PLAN_SELECT);
        }, [Z, eM, eL, eF]),
        eU = !1;
    return (
        ea === C.GZ.ONE_TIME
            ? (r = (0, i.jsx)(P.Z, {
                  hasLegalTermsFlash: ev,
                  legalTermsNodeRef: eb,
                  onPaymentSourceChange: (e) => ee(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => Z(g.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eU = em ? null == eu : null != eT && ea === C.GZ.SUBSCRIPTION && eZ && !eT.canRedeemTrial()),
              null == G || ed || em
                  ? (s()(null != J, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(m.Z, {
                        selectedPlanId: J.id,
                        paymentSources: K,
                        onPaymentSourceChange: (e) => ee(null != e ? e.id : null),
                        priceOptions: Y,
                        currencies: V,
                        onCurrencyChange: (e) => $(e),
                        handlePaymentSourceAdd: () => Z(g.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: es,
                        legalTermsNodeRef: eb,
                        hasLegalTermsFlash: ev,
                        trialId: eE,
                        trialFooterMessageOverride: A,
                        reviewWarningMessage: R,
                        purchaseState: el,
                        referralTrialOfferId: F,
                        isTrial: eZ || (null != O && null != A),
                        isDiscount: eA,
                        handleClose: B
                    })))
                  : (s()(null != J, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(p.Z, {
                        premiumSubscription: G,
                        paymentSources: K,
                        priceOptions: Y,
                        onPaymentSourceChange: (e) => {
                            ee(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            Z(g.h8.ADD_PAYMENT_STEPS);
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
                        handleClose: B
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S.P, { giftMessage: ep }),
                !eR && (0, i.jsx)(I.Z, { isEligibleForTrial: eZ }),
                (0, i.jsxs)(N.C3, {
                    children: [(0, i.jsx)(j.Z, {}), (0, i.jsx)(E.Z, {}), r]
                }),
                (0, i.jsx)(N.O3, {
                    children: (0, i.jsx)(T.Z, {
                        premiumSubscription: null != G ? G : null,
                        setPurchaseState: en,
                        onBack: eD,
                        onNext: eI,
                        onPurchaseError: (e) => et(e),
                        legalTermsNodeRef: eb,
                        flashLegalTerms: () => eg(!0),
                        invoiceError: eC,
                        planError: eN,
                        analyticsLocation: k,
                        baseAnalyticsData: L,
                        flowStartTime: W.startTime,
                        trialId: eE,
                        planGroup: w,
                        purchaseTokenAuthState: q,
                        openInvoiceId: M,
                        backButtonEligible: ek,
                        metadata: eP,
                        isTrial: eZ,
                        disablePurchase: eU
                    })
                })
            ]
        })
    );
}
