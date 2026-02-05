"use strict";
n.d(t, { _M: () => U });
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
    p = n(369280),
    h = n(45938),
    m = n(927578),
    g = n(937008),
    E = n(156312),
    A = n(166532);
n(566980);
var I = n(50956),
    T = n(921925),
    y = n(592362),
    S = n(520796),
    v = n(800471),
    C = n(367160),
    b = n(112242),
    N = n(216641),
    R = n(69494),
    O = n(312649),
    D = n(482132),
    L = n(788868),
    w = n(818348),
    x = n(985018),
    P = n(763979);
let M = 500;
function k() {
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
            userTrialOffer: p,
            checkoutPaymentSources: h,
            hasCheckoutContextLoaded: A,
        } = (0, E.P5)(),
        { isGift: I } = (0, g.Pv)(),
        T = (0, N.W)(r, n),
        y = i.useMemo(() => {
            if (null == n) return !1;
            if (!A) return !0;
            let e = h.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [h, A, n]),
        S = i.useMemo(() => {
            if (null != s) {
                if ((0, m.xq)(s.id)) return L.LE;
                if ((0, m.z4)(s.id)) return L.DA;
            }
            return [];
        }, [s]),
        v = i.useMemo(
            () =>
                u === w.VV.ONE_TIME
                    ? null == n || y || null == o || null != l
                    : null == c || (!I && null != T && u === w.VV.SUBSCRIPTION && f && !T.canRedeemTrial()),
            [u, o, n, l, c, I, T, f, y],
        ),
        C = (0, m.J$)(a.paymentSourceId),
        b =
            u === w.VV.SUBSCRIPTION && null == s
                ? x.intl.string(x.t.YScQSF)
                : (0, _.Ro)({
                      purchaseType: u,
                      plan: s,
                      premiumSubscription: e,
                      isGift: I,
                      planGroup: S,
                      isPrepaidPaymentSource: C,
                      inReverseTrial: d,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: T,
        isEligibleForTrial: f,
        planGroup: S,
        disablePurchase: v,
        buttonText: b,
        userTrialOffer: p,
    };
}
function U(e) {
    let t,
        {
            handleStepChange: n,
            trialId: a,
            trialFooterMessageOverride: _,
            reviewWarningMessage: m,
            planGroup: N,
            openInvoiceId: U,
            analyticsData: G,
            analyticsLocation: V,
            referralTrialOfferId: F,
            initialPlanId: B,
            subscriptionTier: j,
            handleClose: H,
        } = e,
        { enabled: Y } = (0, u.T0)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: W,
            setUpdatedSubscription: K,
            contextMetadata: z,
            currencies: $,
            paymentSources: q,
            priceOptions: Z,
            purchaseError: Q,
            purchaseTokenAuthState: X,
            selectedPlan: J,
            selectedSkuId: ee,
            setCurrency: et,
            setPaymentSourceId: en,
            setPurchaseState: er,
            setPurchaseError: ei,
            step: ea,
            purchaseState: es,
            isPremium: eo,
            setHasAcceptedTerms: el,
            purchaseType: eu,
            setEntitlementsGranted: ec,
            setAppliedUserDiscounts: ed,
            startedPaymentFlowWithPaymentSourcesRef: e_,
            inReverseTrial: ef,
            enablePremiumBrandRefresh: ep,
            disablePurchasesForStorybook: eh,
            isPremiumGroupPurchase: em,
            isEligibleForDiscount: eg,
            discountOffer: eE,
        } = (0, E.P5)(),
        { isGift: eA, giftMessage: eI, giftRecipient: eT, claimableRewards: ey } = (0, g.Pv)();
    s()(null != ea, "Step should be set");
    let eS = i.useRef(null),
        [ev, eC] = (0, l.A)(!1, M),
        { paymentSource: eb, isEligibleForTrial: eN, planGroup: eR, disablePurchase: eO, userTrialOffer: eD } = k(),
        eL = a ?? F ?? null,
        ew = null != eL && (!eo || L.TP[eL].skus.includes(ee)) ? eL : null,
        ex = { user_trial_offer_id: eD?.id };
    i.useEffect(() => {
        null != Q && null != eS.current && eS.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let eP = i.useCallback(
            (e, t, r) => {
                K(e),
                    null != t && ec(t),
                    null != r && ed(r),
                    n(A.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, K, ec, ed],
        ),
        eM = null != J && L.Er.has(J.id) && null != eb && !(0, c.j2)(eb) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
        ek = i.useRef(null),
        [eU, eG] = i.useState(null),
        eV = eE?.discount?.plan_ids,
        eF = eg && null != eE && null != eV && null != J && eV.includes(J.id),
        eB = eA && (0, h.Ik)(eT),
        ej = null == B && null == j && eu === w.VV.SUBSCRIPTION,
        eH = (0, v.vT)({
            isTrial: eN,
            isGift: eA,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: e_.current,
        }),
        eY = eA && eu === w.VV.ONE_TIME,
        eW = eY || (eH ? ej && eo : eo),
        eK = (0, d.px)(J, eA, ey),
        ez = i.useCallback(
            () =>
                eH
                    ? void n(A.pn.SKU_SELECT)
                    : em
                      ? void n(A.pn.ADD_PAYMENT_STEPS)
                      : eK
                        ? void n(A.pn.SELECT_FREE_SKU)
                        : eY
                          ? n(A.pn.GIFT_CUSTOMIZATION)
                          : n(A.pn.PLAN_SELECT),
            [n, eH, eY, eK, em],
        ),
        e$ = () => {
            n(A.pn.ADD_PAYMENT_STEPS);
        },
        eq = eO;
    eh && (eq = !0);
    let eZ = N ?? eR;
    if (eu === w.VV.ONE_TIME)
        t = (0, r.jsx)(b.A, {
            hasLegalTermsFlash: ev,
            legalTermsNodeRef: ek,
            onPaymentSourceChange: (e) => en(null != e ? e.id : null),
            handlePaymentSourceAdd: () => n(A.pn.ADD_PAYMENT_STEPS),
        });
    else if (null == W || ef || eA) {
        s()(null != J, "Expected plan to be selected");
        let e = {
            selectedPlanId: J.id,
            planGroup: eZ,
            paymentSources: q,
            onPaymentSourceChange: (e) => en(null != e ? e.id : null),
            priceOptions: Z,
            currencies: $,
            onCurrencyChange: (e) => et(e),
            handlePaymentSourceAdd: () => n(A.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: el,
            legalTermsNodeRef: ek,
            hasLegalTermsFlash: ev,
            trialId: ew,
            trialFooterMessageOverride: _,
            reviewWarningMessage: m,
            purchaseState: es,
            referralTrialOfferId: F,
            isTrial: eN || (null != a && null != _),
            isDiscount: eF,
            handleClose: H,
        };
        t = Y ? (0, r.jsx)(C._, { ...e }) : (0, r.jsx)(f.A, { ...e });
    } else
        s()(null != J, "Expected plan to be selected"),
            (t = (0, r.jsx)(p.A, {
                premiumSubscription: W,
                paymentSources: q,
                priceOptions: Z,
                onPaymentSourceChange: (e) => {
                    en(null != e ? e.id : null);
                },
                onPaymentSourceAdd: e$,
                planId: J.id,
                setHasAcceptedTerms: el,
                legalTermsNodeRef: ek,
                hasLegalTermsFlash: ev,
                onInvoiceError: (e) => eG(e),
                planGroup: eZ,
                currencies: $,
                onCurrencyChange: (e) => et(e),
                hasOpenInvoice: null != U,
                purchaseState: es,
                handleClose: H,
            }));
    let eQ = ep && eH && !em && !Y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.Z, { giftMessage: eI }),
            !eB && (0, r.jsx)(R.A, { isEligibleForTrial: eN }),
            (0, r.jsxs)(D.dZ, {
                children: [
                    eQ && (0, r.jsx)("div", { className: P.AC }),
                    (0, r.jsxs)(o.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(T.A, {}), (0, r.jsx)(S.A, {})],
                    }),
                    t,
                ],
            }),
            (0, r.jsx)(D.UX, {
                children: (0, r.jsx)(O.A, {
                    premiumSubscription: W ?? null,
                    setPurchaseState: er,
                    onBack: ez,
                    onNext: eP,
                    onPurchaseError: (e) => ei(e),
                    legalTermsNodeRef: ek,
                    flashLegalTerms: () => eC(!0),
                    invoiceError: eU,
                    planError: eM,
                    analyticsLocation: V,
                    baseAnalyticsData: G,
                    flowStartTime: z.startTime,
                    trialId: ew,
                    planGroup: eZ,
                    purchaseTokenAuthState: X,
                    openInvoiceId: U,
                    backButtonEligible: eW,
                    metadata: ex,
                    isTrial: eN,
                    disablePurchase: eq,
                    onPaymentSourceAdd: e$,
                }),
            }),
        ],
    });
}
