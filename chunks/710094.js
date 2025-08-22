n.d(t, { l: () => M }), n(388685), n(415506);
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
    h = n(365943),
    m = n(669079),
    g = n(987209),
    E = n(563132),
    b = n(409813),
    y = n(107998),
    O = n(809144),
    v = n(698708),
    I = n(844068),
    T = n(709113),
    S = n(614223),
    A = n(481595),
    C = n(435020),
    N = n(51499),
    R = n(678334),
    P = n(27034),
    w = n(474936),
    D = n(231338),
    x = n(388032),
    L = n(108626);
let j = 500;
function M(e) {
    var t, n;
    let a,
        {
            handleStepChange: M,
            trialId: k,
            trialFooterMessageOverride: U,
            reviewWarningMessage: G,
            planGroup: B,
            openInvoiceId: Z,
            analyticsData: V,
            analyticsLocation: F,
            referralTrialOfferId: H,
            initialPlanId: Y,
            subscriptionTier: W,
            handleClose: K,
        } = e,
        {
            activeSubscription: z,
            setUpdatedSubscription: q,
            contextMetadata: X,
            currencies: Q,
            paymentSourceId: J,
            paymentSources: $,
            priceOptions: ee,
            purchaseError: et,
            purchasePreviewError: en,
            purchaseTokenAuthState: er,
            selectedPlan: ei,
            selectedSkuId: ea,
            setCurrency: eo,
            setPaymentSourceId: es,
            setPurchaseState: el,
            setPurchaseError: ec,
            step: eu,
            purchaseState: ed,
            isPremium: ef,
            setHasAcceptedTerms: e_,
            purchaseType: ep,
            setEntitlementsGranted: eh,
            setAppliedUserDiscounts: em,
            startedPaymentFlowWithPaymentSourcesRef: eg,
            invoicePreview: eE,
            inReverseTrial: eb,
            enablePremiumBrandRefresh: ey,
        } = (0, E.JL)(),
        { isGift: eO, giftMessage: ev, giftRecipient: eI, claimableRewards: eT } = (0, g.wD)(),
        { paymentModalBanner: eS } = (0, y.zb)();
    o()(null != eu, "Step should be set");
    let eA = i.useRef(null),
        [eC, eN] = (0, l.Z)(!1, j);
    i.useEffect(() => {
        (0, h.t)();
    }, []);
    let eR = null != (n = null != k ? k : H) ? n : null,
        eP = null != eR && (!ef || w.nG[eR].skus.includes(ea)) ? eR : null,
        ew = (0, f.N)(H),
        eD = (0, d.Ng)(),
        ex = { user_trial_offer_id: null == ew ? void 0 : ew.id };
    i.useEffect(() => {
        null != et && null != eA.current && eA.current.scrollIntoView({ behavior: "smooth" });
    }, [et]);
    let eL = i.useCallback(
            (e, t, n) => {
                q(e),
                    null != t && eh(t),
                    null != n && em(n),
                    M(b.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [M, q, eh, em],
        ),
        ej = (0, C.m)($, J),
        eM = null != ei && w.o4.has(ei.id) && null != ej && !(0, c.aQ)(ej) ? Error(x.intl.string(x.t["2ik8io"])) : null,
        ek = i.useRef(null),
        [eU, eG] = i.useState(null),
        eB = !eO && null != ew && null != ea && w.nG[ew.trial_id].skus.includes(ea),
        eZ = null == eD || null == (t = eD.discount) ? void 0 : t.plan_ids,
        eV = !eO && null != eD && null != eZ && null != ei && eZ.includes(ei.id),
        eF = eO && (0, m.pO)(eI),
        eH = null == Y && null == W && ep === D.GZ.SUBSCRIPTION,
        eY = (0, S.Kp)({
            isTrial: eB,
            isGift: eO,
            selectedSkuId: ea,
            startedPaymentFlowWithPaymentSources: eg.current,
        }),
        eW = eO && ep === D.GZ.ONE_TIME,
        eK = eW || (eY ? eH && ef : ef),
        ez = (0, u.id)(ei, eO, eT),
        eq = i.useCallback(
            () =>
                eY
                    ? void M(b.h8.SKU_SELECT)
                    : ez
                      ? void M(b.h8.SELECT_FREE_SKU)
                      : eW
                        ? M(b.h8.GIFT_CUSTOMIZATION)
                        : M(b.h8.PLAN_SELECT),
            [M, eY, eW, ez],
        ),
        eX = !1,
        eQ = () => {
            M(b.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ep === D.GZ.ONE_TIME
            ? ((eX = null != en),
              (a = (0, r.jsx)(A.Z, {
                  hasLegalTermsFlash: eC,
                  legalTermsNodeRef: ek,
                  onPaymentSourceChange: (e) => es(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eX = null == eE || (!eO && null != ej && ep === D.GZ.SUBSCRIPTION && eB && !ej.canRedeemTrial())),
              null == z || eb || eO
                  ? (o()(null != ei, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        selectedPlanId: ei.id,
                        planGroup: B,
                        paymentSources: $,
                        onPaymentSourceChange: (e) => es(null != e ? e.id : null),
                        priceOptions: ee,
                        currencies: Q,
                        onCurrencyChange: (e) => eo(e),
                        handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: e_,
                        legalTermsNodeRef: ek,
                        hasLegalTermsFlash: eC,
                        trialId: eP,
                        trialFooterMessageOverride: U,
                        reviewWarningMessage: G,
                        purchaseState: ed,
                        referralTrialOfferId: H,
                        isTrial: eB || (null != k && null != U),
                        isDiscount: eV,
                        handleClose: K,
                    })))
                  : (o()(null != ei, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        premiumSubscription: z,
                        paymentSources: $,
                        priceOptions: ee,
                        onPaymentSourceChange: (e) => {
                            es(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eQ,
                        planId: ei.id,
                        setHasAcceptedTerms: e_,
                        legalTermsNodeRef: ek,
                        hasLegalTermsFlash: eC,
                        onInvoiceError: (e) => eG(e),
                        planGroup: B,
                        currencies: Q,
                        onCurrencyChange: (e) => eo(e),
                        hasOpenInvoice: null != Z,
                        purchaseState: ed,
                        handleClose: K,
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(O.P, { giftMessage: ev }),
                !eF && (0, r.jsx)(N.Z, { isEligibleForTrial: eB }),
                (0, r.jsxs)(P.C3, {
                    children: [
                        ey && eY && (0, r.jsx)("div", { className: L.bodyGradientPadding }),
                        null != eS && eS,
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(I.Z, {}), (0, r.jsx)(v.Z, {}), (0, r.jsx)(T.Z, {})],
                        }),
                        a,
                    ],
                }),
                (0, r.jsx)(P.O3, {
                    children: (0, r.jsx)(R.Z, {
                        premiumSubscription: null != z ? z : null,
                        setPurchaseState: el,
                        onBack: eq,
                        onNext: eL,
                        onPurchaseError: (e) => ec(e),
                        legalTermsNodeRef: ek,
                        flashLegalTerms: () => eN(!0),
                        invoiceError: eU,
                        planError: eM,
                        analyticsLocation: F,
                        baseAnalyticsData: V,
                        flowStartTime: X.startTime,
                        trialId: eP,
                        planGroup: B,
                        purchaseTokenAuthState: er,
                        openInvoiceId: Z,
                        backButtonEligible: eK,
                        metadata: ex,
                        isTrial: eB,
                        disablePurchase: eX,
                        onPaymentSourceAdd: eQ,
                    }),
                }),
            ],
        })
    );
}
