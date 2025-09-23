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
    w = n(614277),
    D = n(474936),
    x = n(231338),
    L = n(388032),
    j = n(491881);
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
            selectedSkuPricePreview: es,
            setCurrency: el,
            setPaymentSourceId: ec,
            setPurchaseState: eu,
            setPurchaseError: ed,
            step: ef,
            purchaseState: e_,
            isPremium: ep,
            setHasAcceptedTerms: eh,
            purchaseType: em,
            setEntitlementsGranted: eg,
            setAppliedUserDiscounts: eE,
            startedPaymentFlowWithPaymentSourcesRef: eb,
            invoicePreview: ey,
            inReverseTrial: eO,
            enablePremiumBrandRefresh: ev,
            shouldShowSeptemberMarketingMomentBanner: eI,
        } = (0, b.JL)(),
        { isGift: eT, giftMessage: eS, giftRecipient: eA, claimableRewards: eC } = (0, E.wD)(),
        { paymentModalBanner: eN } = (0, O.zb)();
    o()(null != ef, "Step should be set");
    let eR = i.useRef(null),
        [eP, ew] = (0, l.Z)(!1, M);
    i.useEffect(() => {
        (0, m.t)();
    }, []);
    let eD = null != (n = null != U ? U : Y) ? n : null,
        ex = null != eD && (!ep || D.nG[eD].skus.includes(eo)) ? eD : null,
        eL = (0, f.N)(Y),
        ej = (0, d.Ng)(),
        eM = { user_trial_offer_id: null == eL ? void 0 : eL.id };
    i.useEffect(() => {
        null != en && null != eR.current && eR.current.scrollIntoView({ behavior: "smooth" });
    }, [en]);
    let ek = i.useCallback(
            (e, t, n) => {
                X(e),
                    null != t && eg(t),
                    null != n && eE(n),
                    k(y.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [k, X, eg, eE],
        ),
        eU = (0, N.m)(ee, $),
        eG = null != ea && D.o4.has(ea.id) && null != eU && !(0, c.aQ)(eU) ? Error(L.intl.string(L.t["2ik8io"])) : null,
        eB = i.useRef(null),
        [eZ, eF] = i.useState(null),
        eV = !eT && null != eL && null != eo && D.nG[eL.trial_id].skus.includes(eo),
        eH = null == ej || null == (t = ej.discount) ? void 0 : t.plan_ids,
        eY = !eT && null != ej && null != eH && null != ea && eH.includes(ea.id),
        eW = eT && (0, g.pO)(eA),
        eK = null == W && null == K && em === x.GZ.SUBSCRIPTION,
        ez = (0, A.Kp)({
            isTrial: eV,
            isGift: eT,
            selectedSkuId: eo,
            startedPaymentFlowWithPaymentSources: eb.current,
        }),
        eq = eT && em === x.GZ.ONE_TIME,
        eX = eq || (ez ? eK && ep : ep),
        eQ = (0, u.id)(ea, eT, eC),
        eJ = i.useCallback(
            () =>
                ez
                    ? void k(y.h8.SKU_SELECT)
                    : eQ
                      ? void k(y.h8.SELECT_FREE_SKU)
                      : eq
                        ? k(y.h8.GIFT_CUSTOMIZATION)
                        : k(y.h8.PLAN_SELECT),
            [k, ez, eq, eQ],
        ),
        e$ = !1,
        e0 = () => {
            k(y.h8.ADD_PAYMENT_STEPS);
        };
    return (
        em === x.GZ.ONE_TIME
            ? ((e$ = (null == es && null != $) || null != er),
              (a = (0, r.jsx)(C.Z, {
                  hasLegalTermsFlash: eP,
                  legalTermsNodeRef: eB,
                  onPaymentSourceChange: (e) => ec(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => k(y.h8.ADD_PAYMENT_STEPS),
              })))
            : ((e$ = null == ey || (!eT && null != eU && em === x.GZ.SUBSCRIPTION && eV && !eU.canRedeemTrial())),
              null == q || eO || eT
                  ? (o()(null != ea, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        selectedPlanId: ea.id,
                        planGroup: Z,
                        paymentSources: ee,
                        onPaymentSourceChange: (e) => ec(null != e ? e.id : null),
                        priceOptions: et,
                        currencies: J,
                        onCurrencyChange: (e) => el(e),
                        handlePaymentSourceAdd: () => k(y.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: eh,
                        legalTermsNodeRef: eB,
                        hasLegalTermsFlash: eP,
                        trialId: ex,
                        trialFooterMessageOverride: G,
                        reviewWarningMessage: B,
                        purchaseState: e_,
                        referralTrialOfferId: Y,
                        isTrial: eV || (null != U && null != G),
                        isDiscount: eY,
                        handleClose: z,
                    })))
                  : (o()(null != ea, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        premiumSubscription: q,
                        paymentSources: ee,
                        priceOptions: et,
                        onPaymentSourceChange: (e) => {
                            ec(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: e0,
                        planId: ea.id,
                        setHasAcceptedTerms: eh,
                        legalTermsNodeRef: eB,
                        hasLegalTermsFlash: eP,
                        onInvoiceError: (e) => eF(e),
                        planGroup: Z,
                        currencies: J,
                        onCurrencyChange: (e) => el(e),
                        hasOpenInvoice: null != F,
                        purchaseState: e_,
                        handleClose: z,
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(v.P, { giftMessage: eS }),
                !eW && (0, r.jsx)(R.Z, { isEligibleForTrial: eV }),
                (0, r.jsxs)(w.C3, {
                    children: [
                        ev && ez && (0, r.jsx)("div", { className: j.bodyGradientPadding }),
                        null != eN && eN,
                        !0 === eI && (0, r.jsx)(h.Y, {}),
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
                        setPurchaseState: eu,
                        onBack: eJ,
                        onNext: ek,
                        onPurchaseError: (e) => ed(e),
                        legalTermsNodeRef: eB,
                        flashLegalTerms: () => ew(!0),
                        invoiceError: eZ,
                        planError: eG,
                        analyticsLocation: H,
                        baseAnalyticsData: V,
                        flowStartTime: Q.startTime,
                        trialId: ex,
                        planGroup: Z,
                        purchaseTokenAuthState: ei,
                        openInvoiceId: F,
                        backButtonEligible: eX,
                        metadata: eM,
                        isTrial: eV,
                        disablePurchase: e$,
                        onPaymentSourceAdd: e0,
                    }),
                }),
            ],
        })
    );
}
