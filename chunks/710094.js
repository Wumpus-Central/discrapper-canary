n.d(t, { l: () => k }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(330726),
    c = n(711459),
    u = n(717401),
    d = n(104494),
    f = n(639119),
    _ = n(716534),
    p = n(664891),
    h = n(657517),
    m = n(365943),
    g = n(669079),
    E = n(987209),
    b = n(563132),
    y = n(409813),
    O = n(107998),
    v = n(809144),
    I = n(698708),
    T = n(844068),
    S = n(709113),
    A = n(614223),
    C = n(481595),
    N = n(435020),
    R = n(51499),
    P = n(678334),
    w = n(27034),
    D = n(474936),
    x = n(231338),
    L = n(388032),
    j = n(108626);
let M = 500;
function k(e) {
    var t, n;
    let a,
        {
            handleStepChange: k,
            trialId: U,
            trialFooterMessageOverride: G,
            reviewWarningMessage: B,
            planGroup: Z,
            openInvoiceId: F,
            analyticsData: V,
            analyticsLocation: H,
            referralTrialOfferId: Y,
            initialPlanId: W,
            subscriptionTier: K,
            handleClose: z,
        } = e,
        {
            activeSubscription: q,
            setUpdatedSubscription: X,
            contextMetadata: Q,
            currencies: J,
            paymentSourceId: $,
            paymentSources: ee,
            priceOptions: et,
            purchaseError: en,
            purchasePreviewError: er,
            purchaseTokenAuthState: ei,
            selectedPlan: ea,
            selectedSkuId: eo,
            setCurrency: es,
            setPaymentSourceId: el,
            setPurchaseState: ec,
            setPurchaseError: eu,
            step: ed,
            purchaseState: ef,
            isPremium: e_,
            setHasAcceptedTerms: ep,
            purchaseType: eh,
            setEntitlementsGranted: em,
            setAppliedUserDiscounts: eg,
            startedPaymentFlowWithPaymentSourcesRef: eE,
            invoicePreview: eb,
            inReverseTrial: ey,
            enablePremiumBrandRefresh: eO,
            shouldShowSeptemberMarketingMomentBanner: ev,
        } = (0, b.JL)(),
        { isGift: eI, giftMessage: eT, giftRecipient: eS, claimableRewards: eA } = (0, E.wD)(),
        { paymentModalBanner: eC } = (0, O.zb)();
    o()(null != ed, "Step should be set");
    let eN = i.useRef(null),
        [eR, eP] = (0, l.Z)(!1, M);
    i.useEffect(() => {
        (0, m.t)();
    }, []);
    let ew = null != (n = null != U ? U : Y) ? n : null,
        eD = null != ew && (!e_ || D.nG[ew].skus.includes(eo)) ? ew : null,
        ex = (0, f.N)(Y),
        eL = (0, d.Ng)(),
        ej = { user_trial_offer_id: null == ex ? void 0 : ex.id };
    i.useEffect(() => {
        null != en && null != eN.current && eN.current.scrollIntoView({ behavior: "smooth" });
    }, [en]);
    let eM = i.useCallback(
            (e, t, n) => {
                X(e),
                    null != t && em(t),
                    null != n && eg(n),
                    k(y.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [k, X, em, eg],
        ),
        ek = (0, N.m)(ee, $),
        eU = null != ea && D.o4.has(ea.id) && null != ek && !(0, c.aQ)(ek) ? Error(L.intl.string(L.t["2ik8io"])) : null,
        eG = i.useRef(null),
        [eB, eZ] = i.useState(null),
        eF = !eI && null != ex && null != eo && D.nG[ex.trial_id].skus.includes(eo),
        eV = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids,
        eH = !eI && null != eL && null != eV && null != ea && eV.includes(ea.id),
        eY = eI && (0, g.pO)(eS),
        eW = null == W && null == K && eh === x.GZ.SUBSCRIPTION,
        eK = (0, A.Kp)({
            isTrial: eF,
            isGift: eI,
            selectedSkuId: eo,
            startedPaymentFlowWithPaymentSources: eE.current,
        }),
        ez = eI && eh === x.GZ.ONE_TIME,
        eq = ez || (eK ? eW && e_ : e_),
        eX = (0, u.id)(ea, eI, eA),
        eQ = i.useCallback(
            () =>
                eK
                    ? void k(y.h8.SKU_SELECT)
                    : eX
                      ? void k(y.h8.SELECT_FREE_SKU)
                      : ez
                        ? k(y.h8.GIFT_CUSTOMIZATION)
                        : k(y.h8.PLAN_SELECT),
            [k, eK, ez, eX],
        ),
        eJ = !1,
        e$ = () => {
            k(y.h8.ADD_PAYMENT_STEPS);
        };
    return (
        eh === x.GZ.ONE_TIME
            ? ((eJ = null != er),
              (a = (0, r.jsx)(C.Z, {
                  hasLegalTermsFlash: eR,
                  legalTermsNodeRef: eG,
                  onPaymentSourceChange: (e) => el(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => k(y.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eJ = null == eb || (!eI && null != ek && eh === x.GZ.SUBSCRIPTION && eF && !ek.canRedeemTrial())),
              null == q || ey || eI
                  ? (o()(null != ea, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        selectedPlanId: ea.id,
                        planGroup: Z,
                        paymentSources: ee,
                        onPaymentSourceChange: (e) => el(null != e ? e.id : null),
                        priceOptions: et,
                        currencies: J,
                        onCurrencyChange: (e) => es(e),
                        handlePaymentSourceAdd: () => k(y.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ep,
                        legalTermsNodeRef: eG,
                        hasLegalTermsFlash: eR,
                        trialId: eD,
                        trialFooterMessageOverride: G,
                        reviewWarningMessage: B,
                        purchaseState: ef,
                        referralTrialOfferId: Y,
                        isTrial: eF || (null != U && null != G),
                        isDiscount: eH,
                        handleClose: z,
                    })))
                  : (o()(null != ea, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        premiumSubscription: q,
                        paymentSources: ee,
                        priceOptions: et,
                        onPaymentSourceChange: (e) => {
                            el(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: e$,
                        planId: ea.id,
                        setHasAcceptedTerms: ep,
                        legalTermsNodeRef: eG,
                        hasLegalTermsFlash: eR,
                        onInvoiceError: (e) => eZ(e),
                        planGroup: Z,
                        currencies: J,
                        onCurrencyChange: (e) => es(e),
                        hasOpenInvoice: null != F,
                        purchaseState: ef,
                        handleClose: z,
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(v.P, { giftMessage: eT }),
                !eY && (0, r.jsx)(R.Z, { isEligibleForTrial: eF }),
                (0, r.jsxs)(w.C3, {
                    children: [
                        eO && eK && (0, r.jsx)("div", { className: j.bodyGradientPadding }),
                        null != eC && eC,
                        null != ev && ev && (0, r.jsx)(h.Y, {}),
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(T.Z, {}), (0, r.jsx)(I.Z, {}), (0, r.jsx)(S.Z, {})],
                        }),
                        a,
                    ],
                }),
                (0, r.jsx)(w.O3, {
                    children: (0, r.jsx)(P.Z, {
                        premiumSubscription: null != q ? q : null,
                        setPurchaseState: ec,
                        onBack: eQ,
                        onNext: eM,
                        onPurchaseError: (e) => eu(e),
                        legalTermsNodeRef: eG,
                        flashLegalTerms: () => eP(!0),
                        invoiceError: eB,
                        planError: eU,
                        analyticsLocation: H,
                        baseAnalyticsData: V,
                        flowStartTime: Q.startTime,
                        trialId: eD,
                        planGroup: Z,
                        purchaseTokenAuthState: ei,
                        openInvoiceId: F,
                        backButtonEligible: eq,
                        metadata: ej,
                        isTrial: eF,
                        disablePurchase: eJ,
                        onPaymentSourceAdd: e$,
                    }),
                }),
            ],
        })
    );
}
