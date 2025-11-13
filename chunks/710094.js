n.d(t, { l: () => L }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(330726),
    c = n(711459),
    u = n(717401),
    d = n(622909),
    f = n(639119),
    _ = n(716534),
    p = n(664891),
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    b = n(809144),
    y = n(698708),
    O = n(844068),
    v = n(709113),
    I = n(614223),
    T = n(481595),
    S = n(435020),
    A = n(51499),
    C = n(678334),
    N = n(614277),
    R = n(474936),
    P = n(231338),
    D = n(388032),
    w = n(108626);
let x = 500;
function L(e) {
    var t, n;
    let a,
        {
            handleStepChange: L,
            trialId: M,
            trialFooterMessageOverride: j,
            reviewWarningMessage: k,
            planGroup: U,
            openInvoiceId: G,
            analyticsData: B,
            analyticsLocation: Z,
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
            purchaseType: e_,
            setEntitlementsGranted: ep,
            setAppliedUserDiscounts: eh,
            startedPaymentFlowWithPaymentSourcesRef: em,
            invoicePreview: eg,
            inReverseTrial: eE,
            enablePremiumBrandRefresh: eb,
            disablePurchasesForStorybook: ey,
        } = (0, g.JL)(),
        { isGift: eO, giftMessage: ev, giftRecipient: eI, claimableRewards: eT } = (0, m.wD)();
    o()(null != ec, "Step should be set");
    let eS = i.useRef(null),
        [eA, eC] = (0, l.Z)(!1, x),
        eN = null != (n = null != M ? M : F) ? n : null,
        eR = null != eN && (!ed || R.nG[eN].skus.includes(er)) ? eN : null,
        eP = (0, f.N)(F),
        eD = (0, d.N)(),
        ew = { user_trial_offer_id: null == eP ? void 0 : eP.id };
    i.useEffect(() => {
        null != $ && null != eS.current && eS.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let ex = i.useCallback(
            (e, t, n) => {
                K(e),
                    null != t && ep(t),
                    null != n && eh(n),
                    L(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [L, K, ep, eh],
        ),
        eL = (0, S.m)(Q, X),
        eM = null != en && R.o4.has(en.id) && null != eL && !(0, c.aQ)(eL) ? Error(D.intl.string(D.t["2ik8ih"])) : null,
        ej = i.useRef(null),
        [ek, eU] = i.useState(null),
        eG = !eO && null != eP && null != er && R.nG[eP.trial_id].skus.includes(er),
        eB = null == eD || null == (t = eD.discount) ? void 0 : t.plan_ids,
        eZ = !eO && null != eD && null != eB && null != en && eB.includes(en.id),
        eF = eO && (0, h.pO)(eI),
        eV = null == V && null == H && e_ === P.GZ.SUBSCRIPTION,
        eH = (0, I.Kp)({
            isTrial: eG,
            isGift: eO,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: em.current,
        }),
        eY = eO && e_ === P.GZ.ONE_TIME,
        eW = eY || (eH ? eV && ed : ed),
        eK = (0, u.id)(en, eO, eT),
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
        e_ === P.GZ.ONE_TIME
            ? ((eq = (null == ei && null != X) || null != ee),
              (a = (0, r.jsx)(T.Z, {
                  hasLegalTermsFlash: eA,
                  legalTermsNodeRef: ej,
                  onPaymentSourceChange: (e) => eo(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eq = null == eg || (!eO && null != eL && e_ === P.GZ.SUBSCRIPTION && eG && !eL.canRedeemTrial())),
              null == W || eE || eO
                  ? (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        selectedPlanId: en.id,
                        planGroup: U,
                        paymentSources: Q,
                        onPaymentSourceChange: (e) => eo(null != e ? e.id : null),
                        priceOptions: J,
                        currencies: q,
                        onCurrencyChange: (e) => ea(e),
                        handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ef,
                        legalTermsNodeRef: ej,
                        hasLegalTermsFlash: eA,
                        trialId: eR,
                        trialFooterMessageOverride: j,
                        reviewWarningMessage: k,
                        purchaseState: eu,
                        referralTrialOfferId: F,
                        isTrial: eG || (null != M && null != j),
                        isDiscount: eZ,
                        handleClose: Y,
                    })))
                  : (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        premiumSubscription: W,
                        paymentSources: Q,
                        priceOptions: J,
                        onPaymentSourceChange: (e) => {
                            eo(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eX,
                        planId: en.id,
                        setHasAcceptedTerms: ef,
                        legalTermsNodeRef: ej,
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
                        eb && eH && (0, r.jsx)("div", { className: w.bodyGradientPadding }),
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
                        legalTermsNodeRef: ej,
                        flashLegalTerms: () => eC(!0),
                        invoiceError: ek,
                        planError: eM,
                        analyticsLocation: Z,
                        baseAnalyticsData: B,
                        flowStartTime: z.startTime,
                        trialId: eR,
                        planGroup: U,
                        purchaseTokenAuthState: et,
                        openInvoiceId: G,
                        backButtonEligible: eW,
                        metadata: ew,
                        isTrial: eG,
                        disablePurchase: eq,
                        onPaymentSourceAdd: eX,
                    }),
                }),
            ],
        })
    );
}
