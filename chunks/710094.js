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
    P = n(614277),
    w = n(474936),
    D = n(231338),
    L = n(388032),
    x = n(491881);
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
            analyticsData: F,
            analyticsLocation: V,
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
            selectedSkuPricePreview: eo,
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
        } = (0, E.JL)(),
        { isGift: ev, giftMessage: eI, giftRecipient: eT, claimableRewards: eS } = (0, g.wD)(),
        { paymentModalBanner: eA } = (0, y.zb)();
    o()(null != ed, "Step should be set");
    let eC = i.useRef(null),
        [eN, eR] = (0, l.Z)(!1, j);
    i.useEffect(() => {
        (0, h.t)();
    }, []);
    let eP = null != (n = null != k ? k : H) ? n : null,
        ew = null != eP && (!e_ || w.nG[eP].skus.includes(ea)) ? eP : null,
        eD = (0, f.N)(H),
        eL = (0, d.Ng)(),
        ex = { user_trial_offer_id: null == eD ? void 0 : eD.id };
    i.useEffect(() => {
        null != et && null != eC.current && eC.current.scrollIntoView({ behavior: "smooth" });
    }, [et]);
    let ej = i.useCallback(
            (e, t, n) => {
                q(e),
                    null != t && em(t),
                    null != n && eg(n),
                    M(b.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [M, q, em, eg],
        ),
        eM = (0, C.m)($, J),
        ek = null != ei && w.o4.has(ei.id) && null != eM && !(0, c.aQ)(eM) ? Error(L.intl.string(L.t["2ik8io"])) : null,
        eU = i.useRef(null),
        [eG, eB] = i.useState(null),
        eZ = !ev && null != eD && null != ea && w.nG[eD.trial_id].skus.includes(ea),
        eF = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids,
        eV = !ev && null != eL && null != eF && null != ei && eF.includes(ei.id),
        eH = ev && (0, m.pO)(eT),
        eY = null == Y && null == W && eh === D.GZ.SUBSCRIPTION,
        eW = (0, S.Kp)({
            isTrial: eZ,
            isGift: ev,
            selectedSkuId: ea,
            startedPaymentFlowWithPaymentSources: eE.current,
        }),
        eK = ev && eh === D.GZ.ONE_TIME,
        ez = eK || (eW ? eY && e_ : e_),
        eq = (0, u.id)(ei, ev, eS),
        eX = i.useCallback(
            () =>
                eW
                    ? void M(b.h8.SKU_SELECT)
                    : eq
                      ? void M(b.h8.SELECT_FREE_SKU)
                      : eK
                        ? M(b.h8.GIFT_CUSTOMIZATION)
                        : M(b.h8.PLAN_SELECT),
            [M, eW, eK, eq],
        ),
        eQ = !1,
        eJ = () => {
            M(b.h8.ADD_PAYMENT_STEPS);
        };
    return (
        eh === D.GZ.ONE_TIME
            ? ((eQ = (null == eo && null != J) || null != en),
              (a = (0, r.jsx)(A.Z, {
                  hasLegalTermsFlash: eN,
                  legalTermsNodeRef: eU,
                  onPaymentSourceChange: (e) => el(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eQ = null == eb || (!ev && null != eM && eh === D.GZ.SUBSCRIPTION && eZ && !eM.canRedeemTrial())),
              null == z || ey || ev
                  ? (o()(null != ei, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        selectedPlanId: ei.id,
                        planGroup: B,
                        paymentSources: $,
                        onPaymentSourceChange: (e) => el(null != e ? e.id : null),
                        priceOptions: ee,
                        currencies: Q,
                        onCurrencyChange: (e) => es(e),
                        handlePaymentSourceAdd: () => M(b.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ep,
                        legalTermsNodeRef: eU,
                        hasLegalTermsFlash: eN,
                        trialId: ew,
                        trialFooterMessageOverride: U,
                        reviewWarningMessage: G,
                        purchaseState: ef,
                        referralTrialOfferId: H,
                        isTrial: eZ || (null != k && null != U),
                        isDiscount: eV,
                        handleClose: K,
                    })))
                  : (o()(null != ei, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        premiumSubscription: z,
                        paymentSources: $,
                        priceOptions: ee,
                        onPaymentSourceChange: (e) => {
                            el(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eJ,
                        planId: ei.id,
                        setHasAcceptedTerms: ep,
                        legalTermsNodeRef: eU,
                        hasLegalTermsFlash: eN,
                        onInvoiceError: (e) => eB(e),
                        planGroup: B,
                        currencies: Q,
                        onCurrencyChange: (e) => es(e),
                        hasOpenInvoice: null != Z,
                        purchaseState: ef,
                        handleClose: K,
                    })))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(O.P, { giftMessage: eI }),
                !eH && (0, r.jsx)(N.Z, { isEligibleForTrial: eZ }),
                (0, r.jsxs)(P.C3, {
                    children: [
                        eO && eW && (0, r.jsx)("div", { className: x.bodyGradientPadding }),
                        null != eA && eA,
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
                        setPurchaseState: ec,
                        onBack: eX,
                        onNext: ej,
                        onPurchaseError: (e) => eu(e),
                        legalTermsNodeRef: eU,
                        flashLegalTerms: () => eR(!0),
                        invoiceError: eG,
                        planError: ek,
                        analyticsLocation: V,
                        baseAnalyticsData: F,
                        flowStartTime: X.startTime,
                        trialId: ew,
                        planGroup: B,
                        purchaseTokenAuthState: er,
                        openInvoiceId: Z,
                        backButtonEligible: ez,
                        metadata: ex,
                        isTrial: eZ,
                        disablePurchase: eQ,
                        onPaymentSourceAdd: eJ,
                    }),
                }),
            ],
        })
    );
}
