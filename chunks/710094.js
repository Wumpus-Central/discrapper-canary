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
        { activeSubscription: H, setUpdatedSubscription: Y, contextMetadata: W, currencies: K, paymentSourceId: z, paymentSources: q, priceOptions: Q, purchaseError: X, purchaseTokenAuthState: J, selectedPlan: $, selectedSkuId: ee, setCurrency: et, setPaymentSourceId: en, setPurchaseState: er, setPurchaseError: ei, step: ea, purchaseState: eo, isPremium: es, setHasAcceptedTerms: el, purchaseType: eu, setEntitlementsGranted: ec, startedPaymentFlowWithPaymentSourcesRef: ed, invoicePreview: ef, inReverseTrial: ep } = (0, y.usePaymentContext)(),
        { isGift: eh, giftMessage: e_, giftRecipient: em, claimableRewards: eg } = (0, v.wD)();
    u()(null != ea, 'Step should be set');
    let eE = s.useRef(null),
        [ev, ey] = (0, c.Z)(!1, w);
    (0, g.t)();
    let eb = null !== (r = null != l ? l : Z) && void 0 !== r ? r : null,
        eI = null != eb && (!es || D.nG[eb].skus.includes(ee)) ? eb : null,
        eT = (0, h.N)(Z),
        eS = (0, p.Ng)(),
        eA = { user_trial_offer_id: null == eT ? void 0 : eT.id };
    s.useEffect(() => {
        null != X && null != eE.current && eE.current.scrollIntoView({ behavior: 'smooth' });
    }, [X]);
    let eC = s.useCallback(
            (e, n) => {
                Y(e),
                    null != n && ec(n),
                    a(b.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [a, Y, ec]
        ),
        eN = null != z ? q[z] : null,
        eR = null != $ && D.o4.has($.id) && null != eN && !(0, d.aQ)(eN) ? Error(x.intl.string(x.t['2ik8io'])) : null,
        eO = s.useRef(null),
        [eD, eL] = s.useState(null),
        ex = !eh && null != eT && null != ee && D.nG[eT.trial_id].skus.includes(ee),
        ew = null == eS ? void 0 : null === (n = eS.discount) || void 0 === n ? void 0 : n.plan_ids,
        eP = !eh && null != eS && null != ew && null != $ && ew.includes($.id),
        eM = eh && (0, E.pO)(em),
        ek = null == F && null == V && eu === L.GZ.SUBSCRIPTION,
        eU = (0, A.Kp)({
            isTrial: ex,
            isGift: eh,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: ed.current
        }),
        eB = eh && eu === L.GZ.ONE_TIME,
        eG = eB || (eU ? ek && es : es),
        eZ = (0, f.id)($, eh, eg),
        eF = s.useCallback(() => {
            if (eU) {
                a(b.h8.SKU_SELECT);
                return;
            }
            if (eZ) {
                a(b.h8.SELECT_FREE_SKU);
                return;
            }
            return eB ? a(b.h8.GIFT_CUSTOMIZATION) : a(b.h8.PLAN_SELECT);
        }, [a, eU, eB, eZ]),
        eV = !1;
    return (
        eu === L.GZ.ONE_TIME
            ? (i = (0, o.jsx)(C.Z, {
                  hasLegalTermsFlash: ev,
                  legalTermsNodeRef: eO,
                  onPaymentSourceChange: (e) => en(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => a(b.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eV = eh ? null == ef : null != eN && eu === L.GZ.SUBSCRIPTION && ex && !eN.canRedeemTrial()),
              null == H || ep || eh
                  ? (u()(null != $, 'Expected plan to be selected'),
                    (i = (0, o.jsx)(_.Z, {
                        selectedPlanId: $.id,
                        paymentSources: q,
                        onPaymentSourceChange: (e) => en(null != e ? e.id : null),
                        priceOptions: Q,
                        currencies: K,
                        onCurrencyChange: (e) => et(e),
                        handlePaymentSourceAdd: () => a(b.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eO,
                        hasLegalTermsFlash: ev,
                        trialId: eI,
                        trialFooterMessageOverride: P,
                        reviewWarningMessage: M,
                        purchaseState: eo,
                        referralTrialOfferId: Z,
                        isTrial: ex || (null != l && null != P),
                        isDiscount: eP,
                        handleClose: j
                    })))
                  : (u()(null != $, 'Expected plan to be selected'),
                    (i = (0, o.jsx)(m.Z, {
                        premiumSubscription: H,
                        paymentSources: q,
                        priceOptions: Q,
                        onPaymentSourceChange: (e) => {
                            en(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            a(b.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: $.id,
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eO,
                        hasLegalTermsFlash: ev,
                        onInvoiceError: (e) => eL(e),
                        planGroup: k,
                        currencies: K,
                        onCurrencyChange: (e) => et(e),
                        hasOpenInvoice: null != U,
                        purchaseState: eo,
                        handleClose: j
                    })))),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(I.P, { giftMessage: e_ }),
                !eM && (0, o.jsx)(N.Z, { isEligibleForTrial: ex }),
                (0, o.jsxs)(O.C3, {
                    children: [(0, o.jsx)(S.Z, {}), (0, o.jsx)(T.Z, {}), i]
                }),
                (0, o.jsx)(O.O3, {
                    children: (0, o.jsx)(R.Z, {
                        premiumSubscription: null != H ? H : null,
                        setPurchaseState: er,
                        onBack: eF,
                        onNext: eC,
                        onPurchaseError: (e) => ei(e),
                        legalTermsNodeRef: eO,
                        flashLegalTerms: () => ey(!0),
                        invoiceError: eD,
                        planError: eR,
                        analyticsLocation: G,
                        baseAnalyticsData: B,
                        flowStartTime: W.startTime,
                        trialId: eI,
                        planGroup: k,
                        purchaseTokenAuthState: J,
                        openInvoiceId: U,
                        backButtonEligible: eG,
                        metadata: eA,
                        isTrial: ex,
                        disablePurchase: eV
                    })
                })
            ]
        })
    );
}
