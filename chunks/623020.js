"use strict";
n.d(t, { _M: () => F });
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
    M = n(985018),
    k = n(763979);
let U = 500;
function G() {
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
function F(e) {
    let t,
        {
            handleStepChange: n,
            trialId: a,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            planGroup: O,
            openInvoiceId: F,
            analyticsData: V,
            analyticsLocation: B,
            referralTrialOfferId: j,
            initialPlanId: H,
            subscriptionTier: Y,
            handleClose: W,
        } = e,
        { enabled: K } = (0, u.T0)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: $,
            setUpdatedSubscription: z,
            contextMetadata: q,
            currencies: X,
            paymentSources: Z,
            priceOptions: Q,
            purchaseError: J,
            selectedPlan: ee,
            selectedSkuId: et,
            setCurrency: en,
            setPaymentSourceId: er,
            setPurchaseState: ei,
            step: ea,
            purchaseState: es,
            isPremium: eo,
            setHasAcceptedTerms: el,
            purchaseType: eu,
            setEntitlementsGranted: ec,
            setAppliedUserDiscounts: ed,
            startedPaymentFlowWithPaymentSourcesRef: e_,
            inReverseTrial: ef,
            enablePremiumBrandRefresh: eh,
            disablePurchasesForStorybook: ep,
            isPremiumGroupPurchase: em,
            isEligibleForDiscount: eg,
            discountOffer: eE,
        } = (0, A.P5)(),
        { isGift: eA, giftMessage: eI, giftRecipient: eT, claimableRewards: ey } = (0, E.Pv)();
    s()(null != ea, "Step should be set");
    let eS = i.useRef(null),
        [ev, eC] = (0, l.A)(!1, U),
        { paymentSource: eb, isEligibleForTrial: eN, planGroup: eR, disablePurchase: eO, userTrialOffer: eD } = G(),
        eL = a ?? j ?? null,
        ew = null != eL && (!eo || x.TP[eL].skus.includes(et)) ? eL : null,
        ex = { user_trial_offer_id: eD?.id };
    i.useEffect(() => {
        null != J && null != eS.current && eS.current.scrollIntoView({ behavior: "smooth" });
    }, [J]);
    let eP = i.useCallback(
            (e, t, r) => {
                z(e),
                    null != t && ec(t),
                    null != r && ed(r),
                    n(I.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, z, ec, ed],
        ),
        eM = null != ee && x.Er.has(ee.id) && null != eb && !(0, c.j2)(eb) ? Error(M.intl.string(M.t["2ik8ih"])) : null,
        ek = i.useRef(null),
        [eU, eG] = i.useState(null),
        eF = eE?.discount?.plan_ids,
        eV = eg && null != eE && null != eF && null != ee && eF.includes(ee.id),
        eB = eA && (0, p.Ik)(eT),
        ej = null == H && null == Y && eu === P.VV.SUBSCRIPTION,
        eH = (0, C.vT)({
            isTrial: eN,
            isGift: eA,
            selectedSkuId: et,
            startedPaymentFlowWithPaymentSources: e_.current,
        }),
        eY = eA && eu === P.VV.ONE_TIME,
        eW = eY || (eH ? ej && eo : eo),
        eK = (0, d.px)(ee, eA, ey),
        e$ = i.useCallback(
            () =>
                eH
                    ? void n(I.pn.SKU_SELECT)
                    : em
                      ? void n(I.pn.ADD_PAYMENT_STEPS)
                      : eK
                        ? void n(I.pn.SELECT_FREE_SKU)
                        : eY
                          ? n(I.pn.GIFT_CUSTOMIZATION)
                          : n(I.pn.PLAN_SELECT),
            [n, eH, eY, eK, em],
        ),
        ez = () => {
            n(I.pn.ADD_PAYMENT_STEPS);
        },
        eq = eO;
    ep && (eq = !0);
    let eX = O ?? eR,
        eZ = i.useCallback((e) => er(null != e ? e.id : null), [er]);
    if (eu === P.VV.ONE_TIME) {
        let e = {
            hasLegalTermsFlash: ev,
            legalTermsNodeRef: ek,
            onPaymentSourceChange: eZ,
            handlePaymentSourceAdd: () => n(I.pn.ADD_PAYMENT_STEPS),
        };
        t = K ? (0, r.jsx)(R.A, { ...e }) : (0, r.jsx)(N.A, { ...e });
    } else if (null == $ || ef || eA) {
        s()(null != ee, "Expected plan to be selected");
        let e = {
            selectedPlanId: ee.id,
            planGroup: eX,
            paymentSources: Z,
            onPaymentSourceChange: eZ,
            priceOptions: Q,
            currencies: X,
            onCurrencyChange: (e) => en(e),
            handlePaymentSourceAdd: () => n(I.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: el,
            legalTermsNodeRef: ek,
            hasLegalTermsFlash: ev,
            trialId: ew,
            trialFooterMessageOverride: _,
            reviewWarningMessage: g,
            purchaseState: es,
            referralTrialOfferId: j,
            isTrial: eN || (null != a && null != _),
            isDiscount: eV,
            handleClose: W,
        };
        t = K ? (0, r.jsx)(b._, { ...e }) : (0, r.jsx)(f.A, { ...e });
    } else
        s()(null != ee, "Expected plan to be selected"),
            (t = (0, r.jsx)(h.A, {
                premiumSubscription: $,
                paymentSources: Z,
                priceOptions: Q,
                onPaymentSourceChange: eZ,
                onPaymentSourceAdd: ez,
                planId: ee.id,
                setHasAcceptedTerms: el,
                legalTermsNodeRef: ek,
                hasLegalTermsFlash: ev,
                onInvoiceError: (e) => eG(e),
                planGroup: eX,
                currencies: X,
                onCurrencyChange: (e) => en(e),
                hasOpenInvoice: null != F,
                purchaseState: es,
                handleClose: W,
            }));
    let eQ = eh && eH && !em;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !K && (0, r.jsx)(T.Z, { giftMessage: eI }),
            !K && !eB && (0, r.jsx)(D.A, { isEligibleForTrial: eN }),
            (0, r.jsxs)(w.dZ, {
                children: [
                    !K && eQ && (0, r.jsx)("div", { className: k.AC }),
                    !K &&
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
                    premiumSubscription: $ ?? null,
                    setPurchaseState: ei,
                    onBack: e$,
                    onNext: eP,
                    legalTermsNodeRef: ek,
                    flashLegalTerms: () => eC(!0),
                    invoiceError: eU,
                    planError: eM,
                    analyticsLocation: B,
                    baseAnalyticsData: V,
                    flowStartTime: q.startTime,
                    trialId: ew,
                    planGroup: eX,
                    openInvoiceId: F,
                    backButtonEligible: eW,
                    metadata: ex,
                    isTrial: eN,
                    disablePurchase: eq,
                    onPaymentSourceAdd: ez,
                }),
            }),
        ],
    });
}
