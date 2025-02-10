n.d(t, { l: () => L }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(512722),
    s = n.n(a),
    o = n(330726),
    l = n(711459),
    u = n(717401),
    c = n(104494),
    d = n(639119),
    f = n(716534),
    _ = n(664891),
    p = n(911367),
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    v = n(809144),
    y = n(698708),
    I = n(844068),
    T = n(614223),
    b = n(481595),
    S = n(51499),
    A = n(678334),
    N = n(614277),
    C = n(474936),
    R = n(231338),
    O = n(388032);
let D = 500;
function L(e) {
    var t, n;
    let a,
        { handleStepChange: L, trialId: x, trialFooterMessageOverride: w, reviewWarningMessage: P, planGroup: M, openInvoiceId: k, analyticsData: U, analyticsLocation: G, referralTrialOfferId: B, initialPlanId: Z, subscriptionTier: F, handleClose: V } = e,
        { activeSubscription: j, setUpdatedSubscription: H, contextMetadata: Y, currencies: W, paymentSourceId: K, paymentSources: z, priceOptions: q, purchaseError: Q, purchasePreviewError: X, purchaseTokenAuthState: J, selectedPlan: $, selectedSkuId: ee, setCurrency: et, setPaymentSourceId: en, setPurchaseState: ei, setPurchaseError: er, step: ea, purchaseState: es, isPremium: eo, setHasAcceptedTerms: el, purchaseType: eu, setEntitlementsGranted: ec, startedPaymentFlowWithPaymentSourcesRef: ed, invoicePreview: ef, inReverseTrial: e_ } = (0, g.JL)(),
        { isGift: ep, giftMessage: eh, giftRecipient: em, claimableRewards: eg } = (0, m.wD)();
    s()(null != ea, 'Step should be set');
    let eE = r.useRef(null),
        [ev, ey] = (0, o.Z)(!1, D);
    (0, p.t)();
    let eI = null !== (n = null != x ? x : B) && void 0 !== n ? n : null,
        eT = null != eI && (!eo || C.nG[eI].skus.includes(ee)) ? eI : null,
        eb = (0, d.N)(B),
        eS = (0, c.Ng)(),
        eA = { user_trial_offer_id: null == eb ? void 0 : eb.id };
    r.useEffect(() => {
        null != Q && null != eE.current && eE.current.scrollIntoView({ behavior: 'smooth' });
    }, [Q]);
    let eN = r.useCallback(
            (e, t) => {
                H(e),
                    null != t && ec(t),
                    L(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t
                        }
                    });
            },
            [L, H, ec]
        ),
        eC = null != K ? z[K] : null,
        eR = null != $ && C.o4.has($.id) && null != eC && !(0, l.aQ)(eC) ? Error(O.intl.string(O.t['2ik8io'])) : null,
        eO = r.useRef(null),
        [eD, eL] = r.useState(null),
        ex = !ep && null != eb && null != ee && C.nG[eb.trial_id].skus.includes(ee),
        ew = null == eS ? void 0 : null === (t = eS.discount) || void 0 === t ? void 0 : t.plan_ids,
        eP = !ep && null != eS && null != ew && null != $ && ew.includes($.id),
        eM = ep && (0, h.pO)(em),
        ek = null == Z && null == F && eu === R.GZ.SUBSCRIPTION,
        eU = (0, T.Kp)({
            isTrial: ex,
            isGift: ep,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: ed.current
        }),
        eG = ep && eu === R.GZ.ONE_TIME,
        eB = eG || (eU ? ek && eo : eo),
        eZ = (0, u.id)($, ep, eg),
        eF = r.useCallback(() => {
            if (eU) {
                L(E.h8.SKU_SELECT);
                return;
            }
            if (eZ) {
                L(E.h8.SELECT_FREE_SKU);
                return;
            }
            return eG ? L(E.h8.GIFT_CUSTOMIZATION) : L(E.h8.PLAN_SELECT);
        }, [L, eU, eG, eZ]),
        eV = !1;
    return (
        eu === R.GZ.ONE_TIME
            ? ((eV = null != X),
              (a = (0, i.jsx)(b.Z, {
                  hasLegalTermsFlash: ev,
                  legalTermsNodeRef: eO,
                  onPaymentSourceChange: (e) => en(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS)
              })))
            : ((eV = ep ? null == ef : null != eC && eu === R.GZ.SUBSCRIPTION && ex && !eC.canRedeemTrial()),
              null == j || e_ || ep
                  ? (s()(null != $, 'Expected plan to be selected'),
                    (a = (0, i.jsx)(f.Z, {
                        selectedPlanId: $.id,
                        paymentSources: z,
                        onPaymentSourceChange: (e) => en(null != e ? e.id : null),
                        priceOptions: q,
                        currencies: W,
                        onCurrencyChange: (e) => et(e),
                        handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eO,
                        hasLegalTermsFlash: ev,
                        trialId: eT,
                        trialFooterMessageOverride: w,
                        reviewWarningMessage: P,
                        purchaseState: es,
                        referralTrialOfferId: B,
                        isTrial: ex || (null != x && null != w),
                        isDiscount: eP,
                        handleClose: V
                    })))
                  : (s()(null != $, 'Expected plan to be selected'),
                    (a = (0, i.jsx)(_.Z, {
                        premiumSubscription: j,
                        paymentSources: z,
                        priceOptions: q,
                        onPaymentSourceChange: (e) => {
                            en(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            L(E.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: $.id,
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eO,
                        hasLegalTermsFlash: ev,
                        onInvoiceError: (e) => eL(e),
                        planGroup: M,
                        currencies: W,
                        onCurrencyChange: (e) => et(e),
                        hasOpenInvoice: null != k,
                        purchaseState: es,
                        handleClose: V
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.P, { giftMessage: eh }),
                !eM && (0, i.jsx)(S.Z, { isEligibleForTrial: ex }),
                (0, i.jsxs)(N.C3, {
                    children: [(0, i.jsx)(I.Z, {}), (0, i.jsx)(y.Z, {}), a]
                }),
                (0, i.jsx)(N.O3, {
                    children: (0, i.jsx)(A.Z, {
                        premiumSubscription: null != j ? j : null,
                        setPurchaseState: ei,
                        onBack: eF,
                        onNext: eN,
                        onPurchaseError: (e) => er(e),
                        legalTermsNodeRef: eO,
                        flashLegalTerms: () => ey(!0),
                        invoiceError: eD,
                        planError: eR,
                        analyticsLocation: G,
                        baseAnalyticsData: U,
                        flowStartTime: Y.startTime,
                        trialId: eT,
                        planGroup: M,
                        purchaseTokenAuthState: J,
                        openInvoiceId: k,
                        backButtonEligible: eB,
                        metadata: eA,
                        isTrial: ex,
                        disablePurchase: eV
                    })
                })
            ]
        })
    );
}
