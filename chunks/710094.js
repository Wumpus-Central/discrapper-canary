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
    C = n(51499),
    A = n(678334),
    N = n(614277),
    P = n(474936),
    R = n(231338),
    w = n(388032),
    D = n(267180);
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
            analyticsLocation: F,
            referralTrialOfferId: B,
            initialPlanId: V,
            subscriptionTier: H,
            handleClose: Y,
        } = e,
        {
            activeSubscription: W,
            setUpdatedSubscription: K,
            contextMetadata: z,
            currencies: q,
            paymentSourceId: Q,
            paymentSources: X,
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
            isPremiumGroupPurchase: eO,
        } = (0, g.JL)(),
        { isGift: ev, giftMessage: eS, giftRecipient: eI, claimableRewards: eT } = (0, h.wD)();
    o()(null != ec, "Step should be set");
    let eC = i.useRef(null),
        [eA, eN] = (0, l.Z)(!1, x),
        eP = null != (n = null != j ? j : B) ? n : null,
        eR = null != eP && (!ed || P.nG[eP].skus.includes(er)) ? eP : null,
        ew = (0, f.N)(B),
        eD = (0, d.N)(),
        ex = { user_trial_offer_id: null == ew ? void 0 : ew.id };
    i.useEffect(() => {
        null != $ && null != eC.current && eC.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let eL = i.useCallback(
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
        ej = (0, T.m)(X, Q),
        eM = null != en && P.o4.has(en.id) && null != ej && !(0, c.aQ)(ej) ? Error(w.intl.string(w.t["2ik8ih"])) : null,
        ek = i.useRef(null),
        [eU, eG] = i.useState(null),
        eZ = !ev && null != ew && null != er && P.nG[ew.trial_id].skus.includes(er),
        eF = null == eD || null == (t = eD.discount) ? void 0 : t.plan_ids,
        eB = !ev && null != eD && null != eF && null != en && eF.includes(en.id),
        eV = ev && (0, m.pO)(eI),
        eH = null == V && null == H && ep === R.GZ.SUBSCRIPTION,
        eY = (0, S.Kp)({
            isTrial: eZ,
            isGift: ev,
            selectedSkuId: er,
            startedPaymentFlowWithPaymentSources: eh.current,
        }),
        eW = ev && ep === R.GZ.ONE_TIME,
        eK = eW || (eY ? eH && ed : ed),
        ez = (0, u.id)(en, ev, eT),
        eq = i.useCallback(
            () =>
                eY
                    ? void L(E.h8.SKU_SELECT)
                    : eO
                      ? void L(E.h8.ADD_PAYMENT_STEPS)
                      : ez
                        ? void L(E.h8.SELECT_FREE_SKU)
                        : eW
                          ? L(E.h8.GIFT_CUSTOMIZATION)
                          : L(E.h8.PLAN_SELECT),
            [L, eY, eW, ez, eO],
        ),
        eQ = !1,
        eX = () => {
            L(E.h8.ADD_PAYMENT_STEPS);
        };
    return (
        ep === R.GZ.ONE_TIME
            ? ((eQ = (null == ei && null != Q) || null != ee),
              (a = (0, r.jsx)(I.Z, {
                  hasLegalTermsFlash: eA,
                  legalTermsNodeRef: ek,
                  onPaymentSourceChange: (e) => eo(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
              })))
            : ((eQ = null == eg || (!ev && null != ej && ep === R.GZ.SUBSCRIPTION && eZ && !ej.canRedeemTrial())),
              null == W || eE || ev
                  ? (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(p.Z, {
                        selectedPlanId: en.id,
                        planGroup: U,
                        paymentSources: X,
                        onPaymentSourceChange: (e) => eo(null != e ? e.id : null),
                        priceOptions: J,
                        currencies: q,
                        onCurrencyChange: (e) => ea(e),
                        handlePaymentSourceAdd: () => L(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ef,
                        legalTermsNodeRef: ek,
                        hasLegalTermsFlash: eA,
                        trialId: eR,
                        trialFooterMessageOverride: M,
                        reviewWarningMessage: k,
                        purchaseState: eu,
                        referralTrialOfferId: B,
                        isTrial: eZ || (null != j && null != M),
                        isDiscount: eB,
                        handleClose: Y,
                    })))
                  : (o()(null != en, "Expected plan to be selected"),
                    (a = (0, r.jsx)(_.Z, {
                        premiumSubscription: W,
                        paymentSources: X,
                        priceOptions: J,
                        onPaymentSourceChange: (e) => {
                            eo(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: eX,
                        planId: en.id,
                        setHasAcceptedTerms: ef,
                        legalTermsNodeRef: ek,
                        hasLegalTermsFlash: eA,
                        onInvoiceError: (e) => eG(e),
                        planGroup: U,
                        currencies: q,
                        onCurrencyChange: (e) => ea(e),
                        hasOpenInvoice: null != G,
                        purchaseState: eu,
                        handleClose: Y,
                    })))),
        ey && (eQ = !0),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.P, { giftMessage: eS }),
                !eV && (0, r.jsx)(C.Z, { isEligibleForTrial: eZ }),
                (0, r.jsxs)(N.C3, {
                    children: [
                        eb && eY && !eO && (0, r.jsx)("div", { className: D.bodyGradientPadding }),
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(O.Z, {}), (0, r.jsx)(y.Z, {}), (0, r.jsx)(v.Z, {})],
                        }),
                        a,
                    ],
                }),
                (0, r.jsx)(N.O3, {
                    children: (0, r.jsx)(A.Z, {
                        premiumSubscription: null != W ? W : null,
                        setPurchaseState: es,
                        onBack: eq,
                        onNext: eL,
                        onPurchaseError: (e) => el(e),
                        legalTermsNodeRef: ek,
                        flashLegalTerms: () => eN(!0),
                        invoiceError: eU,
                        planError: eM,
                        analyticsLocation: F,
                        baseAnalyticsData: Z,
                        flowStartTime: z.startTime,
                        trialId: eR,
                        planGroup: U,
                        purchaseTokenAuthState: et,
                        openInvoiceId: G,
                        backButtonEligible: eK,
                        metadata: ex,
                        isTrial: eZ,
                        disablePurchase: eQ,
                        onPaymentSourceAdd: eX,
                    }),
                }),
            ],
        })
    );
}
