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
    x = n(108626);
let L = 500;
function M(e) {
    var t, n;
    let a,
        {
            handleStepChange: M,
            trialId: j,
            trialFooterMessageOverride: k,
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
            disablePurchasesForStorybook: eO,
        } = (0, g.JL)(),
        { isGift: ev, giftMessage: eI, giftRecipient: eT, claimableRewards: eS } = (0, m.wD)(),
        { paymentModalBanner: eA } = (0, b.zb)();
    o()(null != eu, "Step should be set");
    let eC = i.useRef(null),
        [eN, eR] = (0, l.Z)(!1, L),
        eP = null != (n = null != j ? j : V) ? n : null,
        ew = null != eP && (!ef || P.nG[eP].skus.includes(ei)) ? eP : null,
        eD = (0, f.N)(V),
        ex = (0, d.Ng)(),
        eL = { user_trial_offer_id: null == eD ? void 0 : eD.id };
    i.useEffect(() => {
        null != ee && null != eC.current && eC.current.scrollIntoView({ behavior: "smooth" });
    }, [ee]);
    let eM = i.useCallback(
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
        ej = (0, A.m)(J, Q),
        ek = null != er && P.o4.has(er.id) && null != ej && !(0, c.aQ)(ej) ? Error(D.intl.string(D.t["2ik8ih"])) : null,
        eU = i.useRef(null),
        [eG, eB] = i.useState(null),
        eZ = !ev && null != eD && null != ei && P.nG[eD.trial_id].skus.includes(ei),
        eF = null == ex || null == (t = ex.discount) ? void 0 : t.plan_ids,
        eV = !ev && null != ex && null != eF && null != er && eF.includes(er.id),
        eH = ev && (0, h.pO)(eT),
        eY = null == H && null == Y && ep === w.GZ.SUBSCRIPTION,
        eW = (0, T.Kp)({
            isTrial: eZ,
            isGift: ev,
            selectedSkuId: ei,
            startedPaymentFlowWithPaymentSources: eg.current,
        }),
        eK = ev && ep === w.GZ.ONE_TIME,
        ez = eK || (eW ? eY && ef : ef),
        eq = (0, u.id)(er, ev, eS),
        eX = i.useCallback(
            () =>
                eW
                    ? void M(E.h8.SKU_SELECT)
                    : eq
                      ? void M(E.h8.SELECT_FREE_SKU)
                      : eK
                        ? M(E.h8.GIFT_CUSTOMIZATION)
                        : M(E.h8.PLAN_SELECT),
            [M, eW, eK, eq],
        ),
        eQ = !1,
        eJ = () => {
            M(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ep === w.GZ.ONE_TIME
            ? ((eQ = (null == ea && null != Q) || null != et),
              (a = (0, r.jsx)(S.Z, {
                  hasLegalTermsFlash: eN,
                  legalTermsNodeRef: eU,
                  onPaymentSourceChange: (e) => es(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eQ = null == eE || (!ev && null != ej && ep === w.GZ.SUBSCRIPTION && eZ && !ej.canRedeemTrial())),
              null == K || eb || ev
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
                        legalTermsNodeRef: eU,
                        hasLegalTermsFlash: eN,
                        trialId: ew,
                        trialFooterMessageOverride: k,
                        reviewWarningMessage: U,
                        purchaseState: ed,
                        referralTrialOfferId: V,
                        isTrial: eZ || (null != j && null != k),
                        isDiscount: eV,
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
                        onPaymentSourceAdd: eJ,
                        planId: er.id,
                        setHasAcceptedTerms: e_,
                        legalTermsNodeRef: eU,
                        hasLegalTermsFlash: eN,
                        onInvoiceError: (e) => eB(e),
                        planGroup: G,
                        currencies: X,
                        onCurrencyChange: (e) => eo(e),
                        hasOpenInvoice: null != B,
                        purchaseState: ed,
                        handleClose: W,
                    })))),
        eO && (eQ = !0),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.P, { giftMessage: eI }),
                !eH && (0, r.jsx)(C.Z, { isEligibleForTrial: eZ }),
                (0, r.jsxs)(R.C3, {
                    children: [
                        ey && eW && (0, r.jsx)("div", { className: x.bodyGradientPadding }),
                        null != eA && eA,
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
                        onBack: eX,
                        onNext: eM,
                        onPurchaseError: (e) => ec(e),
                        legalTermsNodeRef: eU,
                        flashLegalTerms: () => eR(!0),
                        invoiceError: eG,
                        planError: ek,
                        analyticsLocation: F,
                        baseAnalyticsData: Z,
                        flowStartTime: q.startTime,
                        trialId: ew,
                        planGroup: G,
                        purchaseTokenAuthState: en,
                        openInvoiceId: B,
                        backButtonEligible: ez,
                        metadata: eL,
                        isTrial: eZ,
                        disablePurchase: eQ,
                        onPaymentSourceAdd: eJ,
                    }),
                }),
            ],
        })
    );
}
