(n.d(t, { l: () => x }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(330726),
    l = n(711459),
    c = n(717401),
    u = n(104494),
    d = n(639119),
    f = n(716534),
    _ = n(664891),
    p = n(365943),
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    b = n(107998),
    y = n(809144),
    O = n(698708),
    v = n(844068),
    I = n(614223),
    T = n(481595),
    S = n(435020),
    A = n(51499),
    N = n(678334),
    C = n(27034),
    R = n(474936),
    P = n(231338),
    w = n(388032),
    D = n(348987);
let L = 500;
function x(e) {
    var t, n;
    let a,
        { handleStepChange: x, trialId: M, trialFooterMessageOverride: k, reviewWarningMessage: j, planGroup: U, openInvoiceId: G, analyticsData: B, analyticsLocation: V, referralTrialOfferId: F, initialPlanId: Z, subscriptionTier: H, handleClose: Y } = e,
        { activeSubscription: W, setUpdatedSubscription: K, contextMetadata: z, currencies: q, paymentSourceId: X, paymentSources: Q, priceOptions: J, purchaseError: $, purchasePreviewError: ee, purchaseTokenAuthState: et, selectedPlan: en, selectedSkuId: er, setCurrency: ei, setPaymentSourceId: ea, setPurchaseState: eo, setPurchaseError: es, step: el, purchaseState: ec, isPremium: eu, setHasAcceptedTerms: ed, purchaseType: ef, setEntitlementsGranted: e_, startedPaymentFlowWithPaymentSourcesRef: ep, invoicePreview: eh, inReverseTrial: em, enablePremiumBrandRefresh: eg } = (0, g.JL)(),
        { isGift: eE, giftMessage: eb, giftRecipient: ey, claimableRewards: eO } = (0, m.wD)(),
        { paymentModalBanner: ev } = (0, b.zb)();
    o()(null != el, 'Step should be set');
    let eI = i.useRef(null),
        [eT, eS] = (0, s.Z)(!1, L);
    i.useEffect(() => {
        (0, p.t)();
    }, []);
    let eA = null != (n = null != M ? M : F) ? n : null,
        eN = null != eA && (!eu || R.nG[eA].skus.includes(er)) ? eA : null,
        eC = (0, d.N)(F),
        eR = (0, u.Ng)(),
        eP = { user_trial_offer_id: null == eC ? void 0 : eC.id };
    i.useEffect(() => {
        null != $ && null != eI.current && eI.current.scrollIntoView({ behavior: 'smooth' });
    }, [$]);
    let ew = i.useCallback(
            (e, t) => {
                (K(e),
                    null != t && e_(t),
                    x(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t
                        }
                    }));
            },
            [x, K, e_]
        ),
        eD = (0, S.m)(Q, X),
        eL = null != en && R.o4.has(en.id) && null != eD && !(0, l.aQ)(eD) ? Error(w.intl.string(w.t['2ik8io'])) : null,
        ex = i.useRef(null),
        [eM, ek] = i.useState(null),
        ej = !eE && null != eC && null != er && R.nG[eC.trial_id].skus.includes(er),
        eU = null == eR || null == (t = eR.discount) ? void 0 : t.plan_ids,
        eG = !eE && null != eR && null != eU && null != en && eU.includes(en.id),
        eB = eE && (0, h.pO)(ey),
        eV = null == Z && null == H && ef === P.GZ.SUBSCRIPTION,
        eF = (0, I.Kp)({
            isTrial: ej,
            isGift: eE,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: ep.current
        }),
        eZ = eE && ef === P.GZ.ONE_TIME,
        eH = eZ || (eF ? eV && eu : eu),
        eY = (0, c.id)(en, eE, eO),
        eW = i.useCallback(() => (eF ? void x(E.h8.SKU_SELECT) : eY ? void x(E.h8.SELECT_FREE_SKU) : eZ ? x(E.h8.GIFT_CUSTOMIZATION) : x(E.h8.PLAN_SELECT)), [x, eF, eZ, eY]),
        eK = !1,
        ez = () => {
            x(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ef === P.GZ.ONE_TIME
            ? ((eK = null != ee),
              (a = (0, r.jsx)(T.Z, {
                  hasLegalTermsFlash: eT,
                  legalTermsNodeRef: ex,
                  onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS)
              })))
            : ((eK = null == eh || (!eE && null != eD && ef === P.GZ.SUBSCRIPTION && ej && !eD.canRedeemTrial())),
              null == W || em || eE
                  ? (o()(null != en, 'Expected plan to be selected'),
                    (a = (0, r.jsx)(f.Z, {
                        selectedPlanId: en.id,
                        planGroup: U,
                        paymentSources: Q,
                        onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
                        priceOptions: J,
                        currencies: q,
                        onCurrencyChange: (e) => ei(e),
                        handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ed,
                        legalTermsNodeRef: ex,
                        hasLegalTermsFlash: eT,
                        trialId: eN,
                        trialFooterMessageOverride: k,
                        reviewWarningMessage: j,
                        purchaseState: ec,
                        referralTrialOfferId: F,
                        isTrial: ej || (null != M && null != k),
                        isDiscount: eG,
                        handleClose: Y
                    })))
                  : (o()(null != en, 'Expected plan to be selected'),
                    (a = (0, r.jsx)(_.Z, {
                        premiumSubscription: W,
                        paymentSources: Q,
                        priceOptions: J,
                        onPaymentSourceChange: (e) => {
                            ea(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: ez,
                        planId: en.id,
                        setHasAcceptedTerms: ed,
                        legalTermsNodeRef: ex,
                        hasLegalTermsFlash: eT,
                        onInvoiceError: (e) => ek(e),
                        planGroup: U,
                        currencies: q,
                        onCurrencyChange: (e) => ei(e),
                        hasOpenInvoice: null != G,
                        purchaseState: ec,
                        handleClose: Y
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.P, { giftMessage: eb }),
                !eB && (0, r.jsx)(A.Z, { isEligibleForTrial: ej }),
                (0, r.jsxs)(C.C3, {
                    children: [eg && eF && (0, r.jsx)('div', { className: D.bodyGradientPadding }), null != ev && ev, (0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), a]
                }),
                (0, r.jsx)(C.O3, {
                    children: (0, r.jsx)(N.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: eo,
                        onBack: eW,
                        onNext: ew,
                        onPurchaseError: (e) => es(e),
                        legalTermsNodeRef: ex,
                        flashLegalTerms: () => eS(!0),
                        invoiceError: eM,
                        planError: eL,
                        analyticsLocation: V,
                        baseAnalyticsData: B,
                        flowStartTime: z.startTime,
                        trialId: eN,
                        planGroup: U,
                        purchaseTokenAuthState: et,
                        openInvoiceId: G,
                        backButtonEligible: eH,
                        metadata: eP,
                        isTrial: ej,
                        disablePurchase: eK,
                        onPaymentSourceAdd: ez
                    })
                })
            ]
        })
    );
}
