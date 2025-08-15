n.d(t, { l: () => x }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
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
    D = n(108626);
let L = 500;
function x(e) {
    var t, n;
    let a,
        {
            handleStepChange: x,
            trialId: M,
            trialFooterMessageOverride: k,
            reviewWarningMessage: j,
            planGroup: U,
            openInvoiceId: G,
            analyticsData: B,
            analyticsLocation: V,
            referralTrialOfferId: F,
            initialPlanId: Z,
            subscriptionTier: H,
            handleClose: Y,
        } = e,
        {
            activeSubscription: W,
            setUpdatedSubscription: K,
            contextMetadata: z,
            currencies: q,
            paymentSourceId: X,
            paymentSources: Q,
            priceOptions: J,
            purchaseError: $,
            purchasePreviewError: ee,
            purchaseTokenAuthState: et,
            selectedPlan: en,
            selectedSkuId: er,
            setCurrency: ei,
            setPaymentSourceId: ea,
            setPurchaseState: eo,
            setPurchaseError: es,
            step: el,
            purchaseState: ec,
            isPremium: eu,
            setHasAcceptedTerms: ed,
            purchaseType: ef,
            setEntitlementsGranted: e_,
            setAppliedUserDiscounts: ep,
            startedPaymentFlowWithPaymentSourcesRef: eh,
            invoicePreview: em,
            inReverseTrial: eg,
            enablePremiumBrandRefresh: eE,
        } = (0, g.JL)(),
        { isGift: eb, giftMessage: ey, giftRecipient: eO, claimableRewards: ev } = (0, m.wD)(),
        { paymentModalBanner: eI } = (0, b.zb)();
    o()(null != el, "Step should be set");
    let eT = i.useRef(null),
        [eS, eA] = (0, s.Z)(!1, L);
    i.useEffect(() => {
        (0, p.t)();
    }, []);
    let eN = null != (n = null != M ? M : F) ? n : null,
        eC = null != eN && (!eu || R.nG[eN].skus.includes(er)) ? eN : null,
        eR = (0, d.N)(F),
        eP = (0, u.Ng)(),
        ew = { user_trial_offer_id: null == eR ? void 0 : eR.id };
    i.useEffect(() => {
        null != $ && null != eT.current && eT.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let eD = i.useCallback(
            (e, t, n) => {
                K(e),
                    null != t && e_(t),
                    null != n && ep(n),
                    x(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [x, K, e_, ep],
        ),
        eL = (0, S.m)(Q, X),
        ex = null != en && R.o4.has(en.id) && null != eL && !(0, l.aQ)(eL) ? Error(w.intl.string(w.t["2ik8io"])) : null,
        eM = i.useRef(null),
        [ek, ej] = i.useState(null),
        eU = !eb && null != eR && null != er && R.nG[eR.trial_id].skus.includes(er),
        eG = null == eP || null == (t = eP.discount) ? void 0 : t.plan_ids,
        eB = !eb && null != eP && null != eG && null != en && eG.includes(en.id),
        eV = eb && (0, h.pO)(eO),
        eF = null == Z && null == H && ef === P.GZ.SUBSCRIPTION,
        eZ = (0, I.Kp)({
            isTrial: eU,
            isGift: eb,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eH = eb && ef === P.GZ.ONE_TIME,
        eY = eH || (eZ ? eF && eu : eu),
        eW = (0, c.id)(en, eb, ev),
        eK = i.useCallback(
            () =>
                eZ
                    ? void x(E.h8.SKU_SELECT)
                    : eW
                      ? void x(E.h8.SELECT_FREE_SKU)
                      : eH
                        ? x(E.h8.GIFT_CUSTOMIZATION)
                        : x(E.h8.PLAN_SELECT),
            [x, eZ, eH, eW],
        ),
        ez = !1,
        eq = () => {
            x(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ef === P.GZ.ONE_TIME
            ? ((ez = null != ee),
              (a = (0, r.jsx)(T.Z, {
                  hasLegalTermsFlash: eS,
                  legalTermsNodeRef: eM,
                  onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => x(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((ez = null == em || (!eb && null != eL && ef === P.GZ.SUBSCRIPTION && eU && !eL.canRedeemTrial())),
              null == W || eg || eb
                  ? (o()(null != en, "Expected plan to be selected"),
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
                        legalTermsNodeRef: eM,
                        hasLegalTermsFlash: eS,
                        trialId: eC,
                        trialFooterMessageOverride: k,
                        reviewWarningMessage: j,
                        purchaseState: ec,
                        referralTrialOfferId: F,
                        isTrial: eU || (null != M && null != k),
                        isDiscount: eB,
                        handleClose: Y,
                    })))
                  : (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        premiumSubscription: W,
                        paymentSources: Q,
                        priceOptions: J,
                        onPaymentSourceChange: (e) => {
                            ea(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eq,
                        planId: en.id,
                        setHasAcceptedTerms: ed,
                        legalTermsNodeRef: eM,
                        hasLegalTermsFlash: eS,
                        onInvoiceError: (e) => ej(e),
                        planGroup: U,
                        currencies: q,
                        onCurrencyChange: (e) => ei(e),
                        hasOpenInvoice: null != G,
                        purchaseState: ec,
                        handleClose: Y,
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.P, { giftMessage: ey }),
                !eV && (0, r.jsx)(A.Z, { isEligibleForTrial: eU }),
                (0, r.jsxs)(C.C3, {
                    children: [
                        eE && eZ && (0, r.jsx)("div", { className: D.bodyGradientPadding }),
                        null != eI && eI,
                        (0, r.jsx)(v.Z, {}),
                        (0, r.jsx)(O.Z, {}),
                        a,
                    ],
                }),
                (0, r.jsx)(C.O3, {
                    children: (0, r.jsx)(N.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: eo,
                        onBack: eK,
                        onNext: eD,
                        onPurchaseError: (e) => es(e),
                        legalTermsNodeRef: eM,
                        flashLegalTerms: () => eA(!0),
                        invoiceError: ek,
                        planError: ex,
                        analyticsLocation: V,
                        baseAnalyticsData: B,
                        flowStartTime: z.startTime,
                        trialId: eC,
                        planGroup: U,
                        purchaseTokenAuthState: et,
                        openInvoiceId: G,
                        backButtonEligible: eY,
                        metadata: ew,
                        isTrial: eU,
                        disablePurchase: ez,
                        onPaymentSourceAdd: eq,
                    }),
                }),
            ],
        })
    );
}
