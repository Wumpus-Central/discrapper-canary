"use strict";
n.d(t, { _: () => U });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(304072),
    u = n(608805),
    c = n(666468),
    d = n(810498),
    _ = n(367921),
    f = n(494230),
    p = n(369280),
    h = n(45938),
    m = n(927578),
    E = n(937008),
    g = n(156312),
    A = n(166532),
    I = n(50956),
    T = n(921925),
    S = n(592362),
    y = n(520796),
    v = n(800471),
    N = n(367160),
    C = n(112242),
    R = n(800132),
    O = n(216641),
    b = n(69494),
    D = n(312649),
    L = n(482132),
    w = n(788868),
    M = n(818348),
    x = n(985018);
let P = 500;
function k() {
    let {
            activeSubscription: e,
            hasPaymentSources: t,
            paymentSourceId: n,
            paymentSources: r,
            priceOptions: s,
            selectedPlan: a,
            selectedSkuPricePreview: o,
            purchasePreviewError: l,
            purchaseType: u,
            invoicePreview: c,
            inReverseTrial: d,
            isEligibleForTrial: f,
            userTrialOffer: p,
            checkoutPaymentSources: h,
            hasCheckoutContextLoaded: A,
        } = (0, g.P5)(),
        { isGift: I } = (0, E.Pv)(),
        T = (0, O.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!A) return !0;
            let e = h.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [h, A, n]),
        y = i.useMemo(() => {
            if (null != a) {
                if ((0, m.xq)(a.id)) return w.LE;
                if ((0, m.z4)(a.id)) return w.DA;
            }
            return [];
        }, [a]),
        v = i.useMemo(
            () =>
                u === M.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!I && null != T && u === M.VV.SUBSCRIPTION && f && !T.canRedeemTrial()),
            [u, o, n, l, c, I, T, f, S],
        ),
        N = (0, m.J$)(s.paymentSourceId),
        C =
            u === M.VV.SUBSCRIPTION && null == a
                ? x.intl.string(x.t.YScQSF)
                : (0, _.Ro)({
                      purchaseType: u,
                      plan: a,
                      premiumSubscription: e,
                      isGift: I,
                      planGroup: y,
                      isPrepaidPaymentSource: N,
                      inReverseTrial: d,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: T,
        isEligibleForTrial: f,
        planGroup: y,
        disablePurchase: v,
        buttonText: C,
        userTrialOffer: p,
    };
}
function U(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: _,
            reviewWarningMessage: m,
            planGroup: O,
            openInvoiceId: U,
            analyticsData: G,
            analyticsLocation: F,
            referralTrialOfferId: V,
            initialPlanId: B,
            subscriptionTier: H,
            handleClose: j,
        } = e,
        Y = (0, u.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: W,
            setUpdatedSubscription: K,
            contextMetadata: $,
            currencies: z,
            paymentSources: q,
            priceOptions: Z,
            purchaseError: X,
            selectedPlan: Q,
            selectedSkuId: J,
            setCurrency: ee,
            setPaymentSourceId: et,
            setPurchaseState: en,
            step: er,
            purchaseState: ei,
            isPremium: es,
            setHasAcceptedTerms: ea,
            purchaseType: eo,
            setEntitlementsGranted: el,
            setAppliedUserDiscounts: eu,
            startedPaymentFlowWithPaymentSourcesRef: ec,
            inReverseTrial: ed,
            disablePurchasesForStorybook: e_,
            isPremiumGroupPurchase: ef,
            isEligibleForDiscount: ep,
            discountOffer: eh,
        } = (0, g.P5)(),
        { isGift: em, giftMessage: eE, giftRecipient: eg, claimableRewards: eA } = (0, E.Pv)();
    a()(null != er, "Step should be set");
    let eI = i.useRef(null),
        [eT, eS] = (0, l.A)(!1, P),
        { paymentSource: ey, isEligibleForTrial: ev, planGroup: eN, disablePurchase: eC, userTrialOffer: eR } = k(),
        eO = s ?? V ?? null,
        eb = null != eO && (!es || w.TP[eO].skus.includes(J)) ? eO : null,
        eD = { user_trial_offer_id: eR?.id };
    i.useEffect(() => {
        null != X && null != eI.current && eI.current.scrollIntoView({ behavior: "smooth" });
    }, [X]);
    let eL = i.useCallback(
            (e, t, r) => {
                K(e),
                    null != t && el(t),
                    null != r && eu(r),
                    n(A.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, K, el, eu],
        ),
        ew = null != Q && w.Er.has(Q.id) && null != ey && !(0, c.j2)(ey) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
        eM = i.useRef(null),
        [ex, eP] = i.useState(null),
        ek = eh?.discount?.plan_ids,
        eU = ep && null != eh && null != ek && null != Q && ek.includes(Q.id),
        eG = em && (0, h.Ik)(eg),
        eF = null == B && null == H && eo === M.VV.SUBSCRIPTION,
        eV = (0, v.vT)({ isTrial: ev, isGift: em, selectedSkuId: J, startedPaymentFlowWithPaymentSources: ec.current }),
        eB = em && eo === M.VV.ONE_TIME,
        eH = eB || (eV ? eF && es : es),
        ej = (0, d.px)(Q, em, eA),
        eY = i.useCallback(
            () =>
                eV
                    ? void n(A.pn.SKU_SELECT)
                    : ef
                      ? void n(A.pn.ADD_PAYMENT_STEPS)
                      : ej
                        ? void n(A.pn.SELECT_FREE_SKU)
                        : eB
                          ? n(A.pn.GIFT_CUSTOMIZATION)
                          : n(A.pn.PLAN_SELECT),
            [n, eV, eB, ej, ef],
        ),
        eW = () => {
            n(A.pn.ADD_PAYMENT_STEPS);
        },
        eK = eC;
    e_ && (eK = !0);
    let e$ = O ?? eN,
        ez = i.useCallback((e) => et(null != e ? e.id : null), [et]);
    if (eo === M.VV.ONE_TIME) {
        let e = {
            hasLegalTermsFlash: eT,
            legalTermsNodeRef: eM,
            onPaymentSourceChange: ez,
            handlePaymentSourceAdd: () => n(A.pn.ADD_PAYMENT_STEPS),
        };
        t = Y ? (0, r.jsx)(R.Ay, { ...e }) : (0, r.jsx)(C.Ay, { ...e });
    } else if (null == W || ed || em) {
        a()(null != Q, "Expected plan to be selected");
        let e = {
            selectedPlanId: Q.id,
            planGroup: e$,
            paymentSources: q,
            onPaymentSourceChange: ez,
            priceOptions: Z,
            currencies: z,
            onCurrencyChange: (e) => ee(e),
            handlePaymentSourceAdd: () => n(A.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: ea,
            legalTermsNodeRef: eM,
            hasLegalTermsFlash: eT,
            trialId: eb,
            trialFooterMessageOverride: _,
            reviewWarningMessage: m,
            purchaseState: ei,
            referralTrialOfferId: V,
            isTrial: ev || (null != s && null != _),
            isDiscount: eU,
            handleClose: j,
        };
        t = Y ? (0, r.jsx)(N._, { ...e }) : (0, r.jsx)(f.A, { ...e });
    } else {
        a()(null != Q, "Expected plan to be selected");
        let e = {
            premiumSubscription: W,
            paymentSources: q,
            priceOptions: Z,
            onPaymentSourceChange: ez,
            onPaymentSourceAdd: eW,
            planId: Q.id,
            setHasAcceptedTerms: ea,
            legalTermsNodeRef: eM,
            hasLegalTermsFlash: eT,
            onInvoiceError: (e) => eP(e),
            invoiceError: ex,
            planGroup: e$,
            currencies: z,
            onCurrencyChange: (e) => ee(e),
            hasOpenInvoice: null != U,
            purchaseState: ei,
            handleClose: j,
        };
        t = (0, r.jsx)(p.A, { ...e, shouldUseUnifiedCheckoutUI: Y });
    }
    let eq = i.useMemo(
            () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(I.Z, { giftMessage: eE }),
                        !eG && (0, r.jsx)(b.A, { isEligibleForTrial: ev }),
                    ],
                }),
            [eE, eG, ev],
        ),
        eZ = i.useMemo(
            () =>
                (0, r.jsxs)(o.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(T.A, {}), (0, r.jsx)(y.A, {})],
                }),
            [],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !Y && eq,
            (0, r.jsxs)(L.dZ, { children: [!Y && eZ, t] }),
            (0, r.jsx)(L.UX, {
                children: (0, r.jsx)(D.A, {
                    premiumSubscription: W ?? null,
                    setPurchaseState: en,
                    onBack: eY,
                    onNext: eL,
                    legalTermsNodeRef: eM,
                    flashLegalTerms: () => eS(!0),
                    invoiceError: ex,
                    planError: ew,
                    analyticsLocation: F,
                    baseAnalyticsData: G,
                    flowStartTime: $.startTime,
                    trialId: eb,
                    planGroup: e$,
                    openInvoiceId: U,
                    backButtonEligible: eH,
                    metadata: eD,
                    isTrial: ev,
                    disablePurchase: eK,
                    onPaymentSourceAdd: eW,
                }),
            }),
        ],
    });
}
