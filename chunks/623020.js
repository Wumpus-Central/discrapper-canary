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
    R = n(216641),
    O = n(69494),
    D = n(312649),
    L = n(482132),
    w = n(788868),
    x = n(818348),
    P = n(985018),
    M = n(763979);
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
        y = (0, R.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!I) return !0;
            let e = p.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [p, I, n]),
        v = i.useMemo(() => {
            if (null != s) {
                if ((0, g.xq)(s.id)) return w.LE;
                if ((0, g.z4)(s.id)) return w.DA;
            }
            return [];
        }, [s]),
        C = i.useMemo(
            () =>
                u === x.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!T && null != y && u === x.VV.SUBSCRIPTION && f && !y.canRedeemTrial()),
            [u, o, n, l, c, T, y, f, S],
        ),
        b = (0, g.J$)(a.paymentSourceId),
        N =
            u === x.VV.SUBSCRIPTION && null == s
                ? P.intl.string(P.t.YScQSF)
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
            planGroup: R,
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
            enablePremiumBrandRefresh: ef,
            disablePurchasesForStorybook: eh,
            isPremiumGroupPurchase: ep,
            isEligibleForDiscount: em,
            discountOffer: eg,
        } = (0, A.P5)(),
        { isGift: eE, giftMessage: eA, giftRecipient: eI, claimableRewards: eT } = (0, E.Pv)();
    s()(null != ei, "Step should be set");
    let ey = i.useRef(null),
        [eS, ev] = (0, l.A)(!1, k),
        { paymentSource: eC, isEligibleForTrial: eb, planGroup: eN, disablePurchase: eR, userTrialOffer: eO } = U(),
        eD = a ?? B ?? null,
        eL = null != eD && (!es || w.TP[eD].skus.includes(ee)) ? eD : null,
        ew = { user_trial_offer_id: eO?.id };
    i.useEffect(() => {
        null != Q && null != ey.current && ey.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let ex = i.useCallback(
            (e, t, r) => {
                $(e),
                    null != t && eu(t),
                    null != r && ec(r),
                    n(I.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, $, eu, ec],
        ),
        eP = null != J && w.Er.has(J.id) && null != eC && !(0, c.j2)(eC) ? Error(P.intl.string(P.t["2ik8ih"])) : null,
        eM = i.useRef(null),
        [ek, eU] = i.useState(null),
        eG = eg?.discount?.plan_ids,
        eF = em && null != eg && null != eG && null != J && eG.includes(J.id),
        eV = eE && (0, p.Ik)(eI),
        eB = null == j && null == H && el === x.VV.SUBSCRIPTION,
        ej = (0, C.vT)({
            isTrial: eb,
            isGift: eE,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: ed.current,
        }),
        eH = eE && el === x.VV.ONE_TIME,
        eY = eH || (ej ? eB && es : es),
        eW = (0, d.px)(J, eE, eT),
        eK = i.useCallback(
            () =>
                ej
                    ? void n(I.pn.SKU_SELECT)
                    : ep
                      ? void n(I.pn.ADD_PAYMENT_STEPS)
                      : eW
                        ? void n(I.pn.SELECT_FREE_SKU)
                        : eH
                          ? n(I.pn.GIFT_CUSTOMIZATION)
                          : n(I.pn.PLAN_SELECT),
            [n, ej, eH, eW, ep],
        ),
        e$ = () => {
            n(I.pn.ADD_PAYMENT_STEPS);
        },
        ez = eR;
    eh && (ez = !0);
    let eq = R ?? eN;
    if (el === x.VV.ONE_TIME)
        t = (0, r.jsx)(N.A, {
            hasLegalTermsFlash: eS,
            legalTermsNodeRef: eM,
            onPaymentSourceChange: (e) => en(null != e ? e.id : null),
            handlePaymentSourceAdd: () => n(I.pn.ADD_PAYMENT_STEPS),
        });
    else if (null == K || e_ || eE) {
        s()(null != J, "Expected plan to be selected");
        let e = {
            selectedPlanId: J.id,
            planGroup: eq,
            paymentSources: X,
            onPaymentSourceChange: (e) => en(null != e ? e.id : null),
            priceOptions: Z,
            currencies: q,
            onCurrencyChange: (e) => et(e),
            handlePaymentSourceAdd: () => n(I.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: eo,
            legalTermsNodeRef: eM,
            hasLegalTermsFlash: eS,
            trialId: eL,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            purchaseState: ea,
            referralTrialOfferId: B,
            isTrial: eb || (null != a && null != _),
            isDiscount: eF,
            handleClose: Y,
        };
        t = W ? (0, r.jsx)(b._, { ...e }) : (0, r.jsx)(f.A, { ...e });
    } else
        s()(null != J, "Expected plan to be selected"),
            (t = (0, r.jsx)(h.A, {
                premiumSubscription: K,
                paymentSources: X,
                priceOptions: Z,
                onPaymentSourceChange: (e) => {
                    en(null != e ? e.id : null);
                },
                onPaymentSourceAdd: e$,
                planId: J.id,
                setHasAcceptedTerms: eo,
                legalTermsNodeRef: eM,
                hasLegalTermsFlash: eS,
                onInvoiceError: (e) => eU(e),
                planGroup: eq,
                currencies: q,
                onCurrencyChange: (e) => et(e),
                hasOpenInvoice: null != G,
                purchaseState: ea,
                handleClose: Y,
            }));
    let eX = ef && ej && !ep && !W;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.Z, { giftMessage: eA }),
            !eV && (0, r.jsx)(O.A, { isEligibleForTrial: eb }),
            (0, r.jsxs)(L.dZ, {
                children: [
                    eX && (0, r.jsx)("div", { className: M.AC }),
                    (0, r.jsxs)(o.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(y.A, {}), (0, r.jsx)(v.A, {})],
                    }),
                    t,
                ],
            }),
            (0, r.jsx)(L.UX, {
                children: (0, r.jsx)(D.A, {
                    premiumSubscription: K ?? null,
                    setPurchaseState: er,
                    onBack: eK,
                    onNext: ex,
                    legalTermsNodeRef: eM,
                    flashLegalTerms: () => ev(!0),
                    invoiceError: ek,
                    planError: eP,
                    analyticsLocation: V,
                    baseAnalyticsData: F,
                    flowStartTime: z.startTime,
                    trialId: eL,
                    planGroup: eq,
                    openInvoiceId: G,
                    backButtonEligible: eY,
                    metadata: ew,
                    isTrial: eb,
                    disablePurchase: ez,
                    onPaymentSourceAdd: e$,
                }),
            }),
        ],
    });
}
