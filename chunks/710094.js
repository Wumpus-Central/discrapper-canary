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
    w = n(474936),
    R = n(231338),
    P = n(388032),
    D = n(348987);
let L = 500;
function x(e) {
    var t, n;
    let a,
        { handleStepChange: x, trialId: k, trialFooterMessageOverride: j, reviewWarningMessage: M, planGroup: U, openInvoiceId: G, analyticsData: B, analyticsLocation: Z, referralTrialOfferId: F, initialPlanId: V, subscriptionTier: H, handleClose: Y } = e,
        { activeSubscription: W, setUpdatedSubscription: K, contextMetadata: z, currencies: q, paymentSourceId: $, paymentSources: X, priceOptions: Q, purchaseError: J, purchasePreviewError: ee, purchaseTokenAuthState: et, selectedPlan: en, selectedSkuId: er, setCurrency: ei, setPaymentSourceId: ea, setPurchaseState: eo, setPurchaseError: es, step: el, purchaseState: ec, isPremium: eu, setHasAcceptedTerms: ed, purchaseType: ef, setEntitlementsGranted: e_, startedPaymentFlowWithPaymentSourcesRef: ep, invoicePreview: eh, inReverseTrial: em, enablePremiumBrandRefresh: eg } = (0, g.JL)(),
        { isGift: eE, giftMessage: eb, giftRecipient: ey, claimableRewards: eO } = (0, m.wD)(),
        { paymentModalBanner: ev } = (0, b.zb)();
    o()(null != el, 'Step should be set');
    let eI = i.useRef(null),
        [eT, eS] = (0, s.Z)(!1, L);
    i.useEffect(() => {
        (0, p.t)();
    }, []);
    let eA = null != (n = null != k ? k : F) ? n : null,
        eN = null != eA && (!eu || w.nG[eA].skus.includes(er)) ? eA : null,
        eC = (0, d.N)(F),
        ew = (0, u.Ng)(),
        eR = { user_trial_offer_id: null == eC ? void 0 : eC.id };
    i.useEffect(() => {
        null != J && null != eI.current && eI.current.scrollIntoView({ behavior: 'smooth' });
    }, [J]);
    let eP = i.useCallback(
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
        eD = (0, S.m)(X, $),
        eL = null != en && w.o4.has(en.id) && null != eD && !(0, l.aQ)(eD) ? Error(P.intl.string(P.t['2ik8io'])) : null,
        ex = i.useRef(null),
        [ek, ej] = i.useState(null),
        eM = !eE && null != eC && null != er && w.nG[eC.trial_id].skus.includes(er),
        eU = null == ew || null == (t = ew.discount) ? void 0 : t.plan_ids,
        eG = !eE && null != ew && null != eU && null != en && eU.includes(en.id),
        eB = eE && (0, h.pO)(ey),
        eZ = null == V && null == H && ef === R.GZ.SUBSCRIPTION,
        eF = (0, I.Kp)({
            isTrial: eM,
            isGift: eE,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: ep.current
        }),
        eV = eE && ef === R.GZ.ONE_TIME,
        eH = eV || (eF ? eZ && eu : eu),
        eY = (0, c.id)(en, eE, eO),
        eW = i.useCallback(() => (eF ? void x(E.h8.SKU_SELECT) : eY ? void x(E.h8.SELECT_FREE_SKU) : eV ? x(E.h8.GIFT_CUSTOMIZATION) : x(E.h8.PLAN_SELECT)), [x, eF, eV, eY]),
        eK = !1,
        ez = () => {
            x(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ef === R.GZ.ONE_TIME
            ? ((eK = null != ee),
              (a = (0, r.jsx)(T.Z, {
                  hasLegalTermsFlash: eT,
                  legalTermsNodeRef: ex,
                  onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS)
              })))
            : ((eK = null == eh || (!eE && null != eD && ef === R.GZ.SUBSCRIPTION && eM && !eD.canRedeemTrial())),
              null == W || em || eE
                  ? (o()(null != en, 'Expected plan to be selected'),
                    (a = (0, r.jsx)(f.Z, {
                        selectedPlanId: en.id,
                        planGroup: U,
                        paymentSources: X,
                        onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
                        priceOptions: Q,
                        currencies: q,
                        onCurrencyChange: (e) => ei(e),
                        handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ed,
                        legalTermsNodeRef: ex,
                        hasLegalTermsFlash: eT,
                        trialId: eN,
                        trialFooterMessageOverride: j,
                        reviewWarningMessage: M,
                        purchaseState: ec,
                        referralTrialOfferId: F,
                        isTrial: eM || (null != k && null != j),
                        isDiscount: eG,
                        handleClose: Y
                    })))
                  : (o()(null != en, 'Expected plan to be selected'),
                    (a = (0, r.jsx)(_.Z, {
                        premiumSubscription: W,
                        paymentSources: X,
                        priceOptions: Q,
                        onPaymentSourceChange: (e) => {
                            ea(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: ez,
                        planId: en.id,
                        setHasAcceptedTerms: ed,
                        legalTermsNodeRef: ex,
                        hasLegalTermsFlash: eT,
                        onInvoiceError: (e) => ej(e),
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
                !eB && (0, r.jsx)(A.Z, { isEligibleForTrial: eM }),
                (0, r.jsxs)(C.C3, {
                    children: [eg && eF && (0, r.jsx)('div', { className: D.bodyGradientPadding }), null != ev && ev, (0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), a]
                }),
                (0, r.jsx)(C.O3, {
                    children: (0, r.jsx)(N.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: eo,
                        onBack: eW,
                        onNext: eP,
                        onPurchaseError: (e) => es(e),
                        legalTermsNodeRef: ex,
                        flashLegalTerms: () => eS(!0),
                        invoiceError: ek,
                        planError: eL,
                        analyticsLocation: Z,
                        baseAnalyticsData: B,
                        flowStartTime: z.startTime,
                        trialId: eN,
                        planGroup: U,
                        purchaseTokenAuthState: et,
                        openInvoiceId: G,
                        backButtonEligible: eH,
                        metadata: eR,
                        isTrial: eM,
                        disablePurchase: eK,
                        onPaymentSourceAdd: ez
                    })
                })
            ]
        })
    );
}
