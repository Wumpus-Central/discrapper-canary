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
    h = n(669079),
    m = n(987209),
    g = n(563132),
    E = n(409813),
    b = n(107998),
    y = n(809144),
    O = n(698708),
    v = n(844068),
    I = n(709113),
    T = n(614223),
    S = n(481595),
    A = n(435020),
    C = n(51499),
    N = n(678334),
    R = n(614277),
    P = n(474936),
    w = n(231338),
    D = n(388032),
    L = n(108626);
let x = 500;
function M(e) {
    var t, n;
    let a,
        {
            handleStepChange: M,
            trialId: k,
            trialFooterMessageOverride: j,
            reviewWarningMessage: U,
            planGroup: G,
            openInvoiceId: B,
            analyticsData: Z,
            analyticsLocation: F,
            referralTrialOfferId: V,
            initialPlanId: H,
            subscriptionTier: Y,
            handleClose: W,
        } = e,
        {
            activeSubscription: K,
            setUpdatedSubscription: z,
            contextMetadata: q,
            currencies: X,
            paymentSourceId: Q,
            paymentSources: J,
            priceOptions: $,
            purchaseError: ee,
            purchasePreviewError: et,
            purchaseTokenAuthState: en,
            selectedPlan: er,
            selectedSkuId: ei,
            selectedSkuPricePreview: ea,
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
        } = (0, g.JL)(),
        { isGift: eO, giftMessage: ev, giftRecipient: eI, claimableRewards: eT } = (0, m.wD)(),
        { paymentModalBanner: eS } = (0, b.zb)();
    o()(null != eu, "Step should be set");
    let eA = i.useRef(null),
        [eC, eN] = (0, l.Z)(!1, x),
        eR = null != (n = null != k ? k : V) ? n : null,
        eP = null != eR && (!ef || P.nG[eR].skus.includes(ei)) ? eR : null,
        ew = (0, f.N)(V),
        eD = (0, d.Ng)(),
        eL = { user_trial_offer_id: null == ew ? void 0 : ew.id };
    i.useEffect(() => {
        null != ee && null != eA.current && eA.current.scrollIntoView({ behavior: "smooth" });
    }, [ee]);
    let ex = i.useCallback(
            (e, t, n) => {
                z(e),
                    null != t && eh(t),
                    null != n && em(n),
                    M(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [M, z, eh, em],
        ),
        eM = (0, A.m)(J, Q),
        ek = null != er && P.o4.has(er.id) && null != eM && !(0, c.aQ)(eM) ? Error(D.intl.string(D.t["2ik8ih"])) : null,
        ej = i.useRef(null),
        [eU, eG] = i.useState(null),
        eB = !eO && null != ew && null != ei && P.nG[ew.trial_id].skus.includes(ei),
        eZ = null == eD || null == (t = eD.discount) ? void 0 : t.plan_ids,
        eF = !eO && null != eD && null != eZ && null != er && eZ.includes(er.id),
        eV = eO && (0, h.pO)(eI),
        eH = null == H && null == Y && ep === w.GZ.SUBSCRIPTION,
        eY = (0, T.Kp)({
            isTrial: eB,
            isGift: eO,
            selectedSkuId: ei,
            startedPaymentFlowWithPaymentSources: eg.current,
        }),
        eW = eO && ep === w.GZ.ONE_TIME,
        eK = eW || (eY ? eH && ef : ef),
        ez = (0, u.id)(er, eO, eT),
        eq = i.useCallback(
            () =>
                eY
                    ? void M(E.h8.SKU_SELECT)
                    : ez
                      ? void M(E.h8.SELECT_FREE_SKU)
                      : eW
                        ? M(E.h8.GIFT_CUSTOMIZATION)
                        : M(E.h8.PLAN_SELECT),
            [M, eY, eW, ez],
        ),
        eX = !1,
        eQ = () => {
            M(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ep === w.GZ.ONE_TIME
            ? ((eX = (null == ea && null != Q) || null != et),
              (a = (0, r.jsx)(S.Z, {
                  hasLegalTermsFlash: eC,
                  legalTermsNodeRef: ej,
                  onPaymentSourceChange: (e) => es(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eX = null == eE || (!eO && null != eM && ep === w.GZ.SUBSCRIPTION && eB && !eM.canRedeemTrial())),
              null == K || eb || eO
                  ? (o()(null != er, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        selectedPlanId: er.id,
                        planGroup: G,
                        paymentSources: J,
                        onPaymentSourceChange: (e) => es(null != e ? e.id : null),
                        priceOptions: $,
                        currencies: X,
                        onCurrencyChange: (e) => eo(e),
                        handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: e_,
                        legalTermsNodeRef: ej,
                        hasLegalTermsFlash: eC,
                        trialId: eP,
                        trialFooterMessageOverride: j,
                        reviewWarningMessage: U,
                        purchaseState: ed,
                        referralTrialOfferId: V,
                        isTrial: eB || (null != k && null != j),
                        isDiscount: eF,
                        handleClose: W,
                    })))
                  : (o()(null != er, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        premiumSubscription: K,
                        paymentSources: J,
                        priceOptions: $,
                        onPaymentSourceChange: (e) => {
                            es(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eQ,
                        planId: er.id,
                        setHasAcceptedTerms: e_,
                        legalTermsNodeRef: ej,
                        hasLegalTermsFlash: eC,
                        onInvoiceError: (e) => eG(e),
                        planGroup: G,
                        currencies: X,
                        onCurrencyChange: (e) => eo(e),
                        hasOpenInvoice: null != B,
                        purchaseState: ed,
                        handleClose: W,
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.P, { giftMessage: ev }),
                !eV && (0, r.jsx)(C.Z, { isEligibleForTrial: eB }),
                (0, r.jsxs)(R.C3, {
                    children: [
                        ey && eY && (0, r.jsx)("div", { className: L.bodyGradientPadding }),
                        null != eS && eS,
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(v.Z, {}), (0, r.jsx)(O.Z, {}), (0, r.jsx)(I.Z, {})],
                        }),
                        a,
                    ],
                }),
                (0, r.jsx)(R.O3, {
                    children: (0, r.jsx)(N.Z, {
                        premiumSubscription: null != K ? K : null,
                        setPurchaseState: el,
                        onBack: eq,
                        onNext: ex,
                        onPurchaseError: (e) => ec(e),
                        legalTermsNodeRef: ej,
                        flashLegalTerms: () => eN(!0),
                        invoiceError: eU,
                        planError: ek,
                        analyticsLocation: F,
                        baseAnalyticsData: Z,
                        flowStartTime: q.startTime,
                        trialId: eP,
                        planGroup: G,
                        purchaseTokenAuthState: en,
                        openInvoiceId: B,
                        backButtonEligible: eK,
                        metadata: eL,
                        isTrial: eB,
                        disablePurchase: eX,
                        onPaymentSourceAdd: eQ,
                    }),
                }),
            ],
        })
    );
}
