"use strict";
n.d(t, { _M: () => G });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(397927),
    l = n(304072),
    u = n(608805),
    c = n(666468),
    d = n(810498),
    _ = n(367921),
    f = n(494230),
    h = n(369280),
    p = n(45938),
    g = n(927578),
    E = n(937008),
    A = n(156312),
    I = n(166532);
n(566980);
var T = n(50956),
    y = n(921925),
    S = n(592362),
    v = n(520796),
    C = n(800471),
    b = n(367160),
    N = n(112242),
    R = n(800132),
    O = n(216641),
    D = n(69494),
    L = n(312649),
    w = n(482132),
    x = n(788868),
    P = n(818348),
    M = n(985018);
let k = 500;
function U() {
    let {
            activeSubscription: e,
            hasPaymentSources: t,
            paymentSourceId: n,
            paymentSources: r,
            priceOptions: a,
            selectedPlan: s,
            selectedSkuPricePreview: o,
            purchasePreviewError: l,
            purchaseType: u,
            invoicePreview: c,
            inReverseTrial: d,
            isEligibleForTrial: f,
            userTrialOffer: h,
            checkoutPaymentSources: p,
            hasCheckoutContextLoaded: I,
        } = (0, A.P5)(),
        { isGift: T } = (0, E.Pv)(),
        y = (0, O.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!I) return !0;
            let e = p.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [p, I, n]),
        v = i.useMemo(() => {
            if (null != s) {
                if ((0, g.xq)(s.id)) return x.LE;
                if ((0, g.z4)(s.id)) return x.DA;
            }
            return [];
        }, [s]),
        C = i.useMemo(
            () =>
                u === P.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!T && null != y && u === P.VV.SUBSCRIPTION && f && !y.canRedeemTrial()),
            [u, o, n, l, c, T, y, f, S],
        ),
        b = (0, g.J$)(a.paymentSourceId),
        N =
            u === P.VV.SUBSCRIPTION && null == s
                ? M.intl.string(M.t.YScQSF)
                : (0, _.Ro)({
                      purchaseType: u,
                      plan: s,
                      premiumSubscription: e,
                      isGift: T,
                      planGroup: v,
                      isPrepaidPaymentSource: b,
                      inReverseTrial: d,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: y,
        isEligibleForTrial: f,
        planGroup: v,
        disablePurchase: C,
        buttonText: N,
        userTrialOffer: h,
    };
}
function G(e) {
    let t,
        {
            handleStepChange: n,
            trialId: a,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            planGroup: O,
            openInvoiceId: G,
            analyticsData: F,
            analyticsLocation: V,
            referralTrialOfferId: B,
            initialPlanId: j,
            subscriptionTier: H,
            handleClose: Y,
        } = e,
        { enabled: W } = (0, u.T0)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: K,
            setUpdatedSubscription: $,
            contextMetadata: z,
            currencies: q,
            paymentSources: X,
            priceOptions: Z,
            purchaseError: Q,
            selectedPlan: J,
            selectedSkuId: ee,
            setCurrency: et,
            setPaymentSourceId: en,
            setPurchaseState: er,
            step: ei,
            purchaseState: ea,
            isPremium: es,
            setHasAcceptedTerms: eo,
            purchaseType: el,
            setEntitlementsGranted: eu,
            setAppliedUserDiscounts: ec,
            startedPaymentFlowWithPaymentSourcesRef: ed,
            inReverseTrial: e_,
            disablePurchasesForStorybook: ef,
            isPremiumGroupPurchase: eh,
            isEligibleForDiscount: ep,
            discountOffer: em,
        } = (0, A.P5)(),
        { isGift: eg, giftMessage: eE, giftRecipient: eA, claimableRewards: eI } = (0, E.Pv)();
    s()(null != ei, "Step should be set");
    let eT = i.useRef(null),
        [ey, eS] = (0, l.A)(!1, k),
        { paymentSource: ev, isEligibleForTrial: eC, planGroup: eb, disablePurchase: eN, userTrialOffer: eR } = U(),
        eO = a ?? B ?? null,
        eD = null != eO && (!es || x.TP[eO].skus.includes(ee)) ? eO : null,
        eL = { user_trial_offer_id: eR?.id };
    i.useEffect(() => {
        null != Q && null != eT.current && eT.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let ew = i.useCallback(
            (e, t, r) => {
                $(e),
                    null != t && eu(t),
                    null != r && ec(r),
                    n(I.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, $, eu, ec],
        ),
        ex = null != J && x.Er.has(J.id) && null != ev && !(0, c.j2)(ev) ? Error(M.intl.string(M.t["2ik8ih"])) : null,
        eP = i.useRef(null),
        [eM, ek] = i.useState(null),
        eU = em?.discount?.plan_ids,
        eG = ep && null != em && null != eU && null != J && eU.includes(J.id),
        eF = eg && (0, p.Ik)(eA),
        eV = null == j && null == H && el === P.VV.SUBSCRIPTION,
        eB = (0, C.vT)({
            isTrial: eC,
            isGift: eg,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: ed.current,
        }),
        ej = eg && el === P.VV.ONE_TIME,
        eH = ej || (eB ? eV && es : es),
        eY = (0, d.px)(J, eg, eI),
        eW = i.useCallback(
            () =>
                eB
                    ? void n(I.pn.SKU_SELECT)
                    : eh
                      ? void n(I.pn.ADD_PAYMENT_STEPS)
                      : eY
                        ? void n(I.pn.SELECT_FREE_SKU)
                        : ej
                          ? n(I.pn.GIFT_CUSTOMIZATION)
                          : n(I.pn.PLAN_SELECT),
            [n, eB, ej, eY, eh],
        ),
        eK = () => {
            n(I.pn.ADD_PAYMENT_STEPS);
        },
        e$ = eN;
    ef && (e$ = !0);
    let ez = O ?? eb,
        eq = i.useCallback((e) => en(null != e ? e.id : null), [en]);
    if (el === P.VV.ONE_TIME) {
        let e = {
            hasLegalTermsFlash: ey,
            legalTermsNodeRef: eP,
            onPaymentSourceChange: eq,
            handlePaymentSourceAdd: () => n(I.pn.ADD_PAYMENT_STEPS),
        };
        t = W ? (0, r.jsx)(R.A, { ...e }) : (0, r.jsx)(N.A, { ...e });
    } else if (null == K || e_ || eg) {
        s()(null != J, "Expected plan to be selected");
        let e = {
            selectedPlanId: J.id,
            planGroup: ez,
            paymentSources: X,
            onPaymentSourceChange: eq,
            priceOptions: Z,
            currencies: q,
            onCurrencyChange: (e) => et(e),
            handlePaymentSourceAdd: () => n(I.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: eo,
            legalTermsNodeRef: eP,
            hasLegalTermsFlash: ey,
            trialId: eD,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            purchaseState: ea,
            referralTrialOfferId: B,
            isTrial: eC || (null != a && null != _),
            isDiscount: eG,
            handleClose: Y,
        };
        t = W ? (0, r.jsx)(b._, { ...e }) : (0, r.jsx)(f.A, { ...e });
    } else
        s()(null != J, "Expected plan to be selected"),
            (t = (0, r.jsx)(h.A, {
                premiumSubscription: K,
                paymentSources: X,
                priceOptions: Z,
                onPaymentSourceChange: eq,
                onPaymentSourceAdd: eK,
                planId: J.id,
                setHasAcceptedTerms: eo,
                legalTermsNodeRef: eP,
                hasLegalTermsFlash: ey,
                onInvoiceError: (e) => ek(e),
                planGroup: ez,
                currencies: q,
                onCurrencyChange: (e) => et(e),
                hasOpenInvoice: null != G,
                purchaseState: ea,
                handleClose: Y,
            }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !W && (0, r.jsx)(T.Z, { giftMessage: eE }),
            !W && !eF && (0, r.jsx)(D.A, { isEligibleForTrial: eC }),
            (0, r.jsxs)(w.dZ, {
                children: [
                    !W &&
                        (0, r.jsxs)(o.BJc, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(y.A, {}), (0, r.jsx)(v.A, {})],
                        }),
                    t,
                ],
            }),
            (0, r.jsx)(w.UX, {
                children: (0, r.jsx)(L.A, {
                    premiumSubscription: K ?? null,
                    setPurchaseState: er,
                    onBack: eW,
                    onNext: ew,
                    legalTermsNodeRef: eP,
                    flashLegalTerms: () => eS(!0),
                    invoiceError: eM,
                    planError: ex,
                    analyticsLocation: V,
                    baseAnalyticsData: F,
                    flowStartTime: z.startTime,
                    trialId: eD,
                    planGroup: ez,
                    openInvoiceId: G,
                    backButtonEligible: eH,
                    metadata: eL,
                    isTrial: eC,
                    disablePurchase: e$,
                    onPaymentSourceAdd: eK,
                }),
            }),
        ],
    });
}
