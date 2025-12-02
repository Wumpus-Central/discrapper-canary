n.d(t, { l: () => L }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(330726),
    c = n(711459),
    u = n(717401),
    d = n(622909),
    f = n(639119),
    p = n(716534),
    _ = n(664891),
    m = n(669079),
    h = n(987209),
    g = n(563132),
    E = n(409813),
    b = n(809144),
    y = n(698708),
    O = n(844068),
    v = n(709113),
    S = n(614223),
    I = n(481595),
    T = n(435020),
    A = n(51499),
    C = n(678334),
    N = n(614277),
    P = n(474936),
    R = n(231338),
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
            analyticsData: Z,
            analyticsLocation: B,
            referralTrialOfferId: F,
            initialPlanId: V,
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
            selectedSkuPricePreview: ei,
            setCurrency: ea,
            setPaymentSourceId: eo,
            setPurchaseState: es,
            setPurchaseError: el,
            step: ec,
            purchaseState: eu,
            isPremium: ed,
            setHasAcceptedTerms: ef,
            purchaseType: ep,
            setEntitlementsGranted: e_,
            setAppliedUserDiscounts: em,
            startedPaymentFlowWithPaymentSourcesRef: eh,
            invoicePreview: eg,
            inReverseTrial: eE,
            enablePremiumBrandRefresh: eb,
            disablePurchasesForStorybook: ey,
        } = (0, g.JL)(),
        { isGift: eO, giftMessage: ev, giftRecipient: eS, claimableRewards: eI } = (0, h.wD)();
    o()(null != ec, "Step should be set");
    let eT = i.useRef(null),
        [eA, eC] = (0, l.Z)(!1, x),
        eN = null != (n = null != j ? j : F) ? n : null,
        eP = null != eN && (!ed || P.nG[eN].skus.includes(er)) ? eN : null,
        eR = (0, f.N)(F),
        ew = (0, d.N)(),
        eD = { user_trial_offer_id: null == eR ? void 0 : eR.id };
    i.useEffect(() => {
        null != $ && null != eT.current && eT.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let ex = i.useCallback(
            (e, t, n) => {
                K(e),
                    null != t && e_(t),
                    null != n && em(n),
                    L(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [L, K, e_, em],
        ),
        eL = (0, T.m)(Q, X),
        ej = null != en && P.o4.has(en.id) && null != eL && !(0, c.aQ)(eL) ? Error(w.intl.string(w.t["2ik8ih"])) : null,
        eM = i.useRef(null),
        [ek, eU] = i.useState(null),
        eG = !eO && null != eR && null != er && P.nG[eR.trial_id].skus.includes(er),
        eZ = null == ew || null == (t = ew.discount) ? void 0 : t.plan_ids,
        eB = !eO && null != ew && null != eZ && null != en && eZ.includes(en.id),
        eF = eO && (0, m.pO)(eS),
        eV = null == V && null == H && ep === R.GZ.SUBSCRIPTION,
        eH = (0, S.Kp)({
            isTrial: eG,
            isGift: eO,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eY = eO && ep === R.GZ.ONE_TIME,
        eW = eY || (eH ? eV && ed : ed),
        eK = (0, u.id)(en, eO, eI),
        ez = i.useCallback(
            () =>
                eH
                    ? void L(E.h8.SKU_SELECT)
                    : eK
                      ? void L(E.h8.SELECT_FREE_SKU)
                      : eY
                        ? L(E.h8.GIFT_CUSTOMIZATION)
                        : L(E.h8.PLAN_SELECT),
            [L, eH, eY, eK],
        ),
        eq = !1,
        eX = () => {
            L(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ep === R.GZ.ONE_TIME
            ? ((eq = (null == ei && null != X) || null != ee),
              (a = (0, r.jsx)(I.Z, {
                  hasLegalTermsFlash: eA,
                  legalTermsNodeRef: eM,
                  onPaymentSourceChange: (e) => eo(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eq = null == eg || (!eO && null != eL && ep === R.GZ.SUBSCRIPTION && eG && !eL.canRedeemTrial())),
              null == W || eE || eO
                  ? (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        selectedPlanId: en.id,
                        planGroup: U,
                        paymentSources: Q,
                        onPaymentSourceChange: (e) => eo(null != e ? e.id : null),
                        priceOptions: J,
                        currencies: q,
                        onCurrencyChange: (e) => ea(e),
                        handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ef,
                        legalTermsNodeRef: eM,
                        hasLegalTermsFlash: eA,
                        trialId: eP,
                        trialFooterMessageOverride: M,
                        reviewWarningMessage: k,
                        purchaseState: eu,
                        referralTrialOfferId: F,
                        isTrial: eG || (null != j && null != M),
                        isDiscount: eB,
                        handleClose: Y,
                    })))
                  : (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        premiumSubscription: W,
                        paymentSources: Q,
                        priceOptions: J,
                        onPaymentSourceChange: (e) => {
                            eo(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eX,
                        planId: en.id,
                        setHasAcceptedTerms: ef,
                        legalTermsNodeRef: eM,
                        hasLegalTermsFlash: eA,
                        onInvoiceError: (e) => eU(e),
                        planGroup: U,
                        currencies: q,
                        onCurrencyChange: (e) => ea(e),
                        hasOpenInvoice: null != G,
                        purchaseState: eu,
                        handleClose: Y,
                    })))),
        ey && (eq = !0),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.P, { giftMessage: ev }),
                !eF && (0, r.jsx)(A.Z, { isEligibleForTrial: eG }),
                (0, r.jsxs)(N.C3, {
                    children: [
                        eb && eH && (0, r.jsx)("div", { className: D.bodyGradientPadding }),
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(O.Z, {}), (0, r.jsx)(y.Z, {}), (0, r.jsx)(v.Z, {})],
                        }),
                        a,
                    ],
                }),
                (0, r.jsx)(N.O3, {
                    children: (0, r.jsx)(C.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: es,
                        onBack: ez,
                        onNext: ex,
                        onPurchaseError: (e) => el(e),
                        legalTermsNodeRef: eM,
                        flashLegalTerms: () => eC(!0),
                        invoiceError: ek,
                        planError: ej,
                        analyticsLocation: B,
                        baseAnalyticsData: Z,
                        flowStartTime: z.startTime,
                        trialId: eP,
                        planGroup: U,
                        purchaseTokenAuthState: et,
                        openInvoiceId: G,
                        backButtonEligible: eW,
                        metadata: eD,
                        isTrial: eG,
                        disablePurchase: eq,
                        onPaymentSourceAdd: eX,
                    }),
                }),
            ],
        })
    );
}
