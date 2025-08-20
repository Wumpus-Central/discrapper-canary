n.d(t, { l: () => L }), n(388685), n(415506);
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
    C = n(678334),
    N = n(27034),
    R = n(474936),
    P = n(231338),
    w = n(388032),
    D = n(108626);
let x = 500;
function L(e) {
    var t, n;
    let a,
        {
            handleStepChange: L,
            trialId: j,
            trialFooterMessageOverride: M,
            reviewWarningMessage: k,
            planGroup: U,
            openInvoiceId: G,
            analyticsData: B,
            analyticsLocation: Z,
            referralTrialOfferId: V,
            initialPlanId: F,
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
        [eS, eA] = (0, s.Z)(!1, x);
    i.useEffect(() => {
        (0, p.t)();
    }, []);
    let eC = null != (n = null != j ? j : V) ? n : null,
        eN = null != eC && (!eu || R.nG[eC].skus.includes(er)) ? eC : null,
        eR = (0, d.N)(V),
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
                    L(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [L, K, e_, ep],
        ),
        ex = (0, S.m)(Q, X),
        eL = null != en && R.o4.has(en.id) && null != ex && !(0, l.aQ)(ex) ? Error(w.intl.string(w.t["2ik8io"])) : null,
        ej = i.useRef(null),
        [eM, ek] = i.useState(null),
        eU = !eb && null != eR && null != er && R.nG[eR.trial_id].skus.includes(er),
        eG = null == eP || null == (t = eP.discount) ? void 0 : t.plan_ids,
        eB = !eb && null != eP && null != eG && null != en && eG.includes(en.id),
        eZ = eb && (0, h.pO)(eO),
        eV = null == F && null == H && ef === P.GZ.SUBSCRIPTION,
        eF = (0, I.Kp)({
            isTrial: eU,
            isGift: eb,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eH = eb && ef === P.GZ.ONE_TIME,
        eY = eH || (eF ? eV && eu : eu),
        eW = (0, c.id)(en, eb, ev),
        eK = i.useCallback(
            () =>
                eF
                    ? void L(E.h8.SKU_SELECT)
                    : eW
                      ? void L(E.h8.SELECT_FREE_SKU)
                      : eH
                        ? L(E.h8.GIFT_CUSTOMIZATION)
                        : L(E.h8.PLAN_SELECT),
            [L, eF, eH, eW],
        ),
        ez = !1,
        eq = () => {
            L(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ef === P.GZ.ONE_TIME
            ? ((ez = null != ee),
              (a = (0, r.jsx)(T.Z, {
                  hasLegalTermsFlash: eS,
                  legalTermsNodeRef: ej,
                  onPaymentSourceChange: (e) => ea(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((ez = null == em || (!eb && null != ex && ef === P.GZ.SUBSCRIPTION && eU && !ex.canRedeemTrial())),
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
                        handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ed,
                        legalTermsNodeRef: ej,
                        hasLegalTermsFlash: eS,
                        trialId: eN,
                        trialFooterMessageOverride: M,
                        reviewWarningMessage: k,
                        purchaseState: ec,
                        referralTrialOfferId: V,
                        isTrial: eU || (null != j && null != M),
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
                        legalTermsNodeRef: ej,
                        hasLegalTermsFlash: eS,
                        onInvoiceError: (e) => ek(e),
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
                !eZ && (0, r.jsx)(A.Z, { isEligibleForTrial: eU }),
                (0, r.jsxs)(N.C3, {
                    children: [
                        eE && eF && (0, r.jsx)("div", { className: D.bodyGradientPadding }),
                        null != eI && eI,
                        (0, r.jsx)(v.Z, {}),
                        (0, r.jsx)(O.Z, {}),
                        a,
                    ],
                }),
                (0, r.jsx)(N.O3, {
                    children: (0, r.jsx)(C.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: eo,
                        onBack: eK,
                        onNext: eD,
                        onPurchaseError: (e) => es(e),
                        legalTermsNodeRef: ej,
                        flashLegalTerms: () => eA(!0),
                        invoiceError: eM,
                        planError: eL,
                        analyticsLocation: Z,
                        baseAnalyticsData: B,
                        flowStartTime: z.startTime,
                        trialId: eN,
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
