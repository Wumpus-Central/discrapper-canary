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
    S = n(592362),
    y = n(520796),
    v = n(800471),
    C = n(367160),
    N = n(112242),
    b = n(216641),
    R = n(69494),
    O = n(312649),
    D = n(482132),
    L = n(788868),
    w = n(818348),
    x = n(985018),
    M = n(763979);
let P = 500;
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
        T = (0, b.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!A) return !0;
            let e = h.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [h, A, n]),
        y = i.useMemo(() => {
            if (null != s) {
                if ((0, m.xq)(s.id)) return L.LE;
                if ((0, m.z4)(s.id)) return L.DA;
            }
            return [];
        }, [s]),
        v = i.useMemo(
            () =>
                u === w.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!I && null != T && u === w.VV.SUBSCRIPTION && f && !T.canRedeemTrial()),
            [u, o, n, l, c, I, T, f, S],
        ),
        C = (0, m.J$)(a.paymentSourceId),
        N =
            u === w.VV.SUBSCRIPTION && null == s
                ? x.intl.string(x.t.YScQSF)
                : (0, _.Ro)({
                      purchaseType: u,
                      plan: s,
                      premiumSubscription: e,
                      isGift: I,
                      planGroup: y,
                      isPrepaidPaymentSource: C,
                      inReverseTrial: d,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: T,
        isEligibleForTrial: f,
        planGroup: y,
        disablePurchase: v,
        buttonText: N,
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
            planGroup: b,
            openInvoiceId: U,
            analyticsData: G,
            analyticsLocation: F,
            referralTrialOfferId: V,
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
            priceOptions: X,
            purchaseError: Z,
            selectedPlan: Q,
            selectedSkuId: J,
            setCurrency: ee,
            setPaymentSourceId: et,
            setPurchaseState: en,
            step: er,
            purchaseState: ei,
            isPremium: ea,
            setHasAcceptedTerms: es,
            purchaseType: eo,
            setEntitlementsGranted: el,
            setAppliedUserDiscounts: eu,
            startedPaymentFlowWithPaymentSourcesRef: ec,
            inReverseTrial: ed,
            enablePremiumBrandRefresh: e_,
            disablePurchasesForStorybook: ef,
            isPremiumGroupPurchase: ep,
            isEligibleForDiscount: eh,
            discountOffer: em,
        } = (0, E.P5)(),
        { isGift: eg, giftMessage: eE, giftRecipient: eA, claimableRewards: eI } = (0, g.Pv)();
    s()(null != er, "Step should be set");
    let eT = i.useRef(null),
        [eS, ey] = (0, l.A)(!1, P),
        { paymentSource: ev, isEligibleForTrial: eC, planGroup: eN, disablePurchase: eb, userTrialOffer: eR } = k(),
        eO = a ?? V ?? null,
        eD = null != eO && (!ea || L.TP[eO].skus.includes(J)) ? eO : null,
        eL = { user_trial_offer_id: eR?.id };
    i.useEffect(() => {
        null != Z && null != eT.current && eT.current.scrollIntoView({ behavior: "smooth" });
    }, [Z]);
    let ew = i.useCallback(
            (e, t, r) => {
                K(e),
                    null != t && el(t),
                    null != r && eu(r),
                    n(A.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, K, el, eu],
        ),
        ex = null != Q && L.Er.has(Q.id) && null != ev && !(0, c.j2)(ev) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
        eM = i.useRef(null),
        [eP, ek] = i.useState(null),
        eU = em?.discount?.plan_ids,
        eG = eh && null != em && null != eU && null != Q && eU.includes(Q.id),
        eF = eg && (0, h.Ik)(eA),
        eV = null == B && null == j && eo === w.VV.SUBSCRIPTION,
        eB = (0, v.vT)({ isTrial: eC, isGift: eg, selectedSkuId: J, startedPaymentFlowWithPaymentSources: ec.current }),
        ej = eg && eo === w.VV.ONE_TIME,
        eH = ej || (eB ? eV && ea : ea),
        eY = (0, d.px)(Q, eg, eI),
        eW = i.useCallback(
            () =>
                eB
                    ? void n(A.pn.SKU_SELECT)
                    : ep
                      ? void n(A.pn.ADD_PAYMENT_STEPS)
                      : eY
                        ? void n(A.pn.SELECT_FREE_SKU)
                        : ej
                          ? n(A.pn.GIFT_CUSTOMIZATION)
                          : n(A.pn.PLAN_SELECT),
            [n, eB, ej, eY, ep],
        ),
        eK = () => {
            n(A.pn.ADD_PAYMENT_STEPS);
        },
        ez = eb;
    ef && (ez = !0);
    let e$ = b ?? eN;
    if (eo === w.VV.ONE_TIME)
        t = (0, r.jsx)(N.A, {
            hasLegalTermsFlash: eS,
            legalTermsNodeRef: eM,
            onPaymentSourceChange: (e) => et(null != e ? e.id : null),
            handlePaymentSourceAdd: () => n(A.pn.ADD_PAYMENT_STEPS),
        });
    else if (null == W || ed || eg) {
        s()(null != Q, "Expected plan to be selected");
        let e = {
            selectedPlanId: Q.id,
            planGroup: e$,
            paymentSources: q,
            onPaymentSourceChange: (e) => et(null != e ? e.id : null),
            priceOptions: X,
            currencies: $,
            onCurrencyChange: (e) => ee(e),
            handlePaymentSourceAdd: () => n(A.pn.ADD_PAYMENT_STEPS),
            setHasAcceptedTerms: es,
            legalTermsNodeRef: eM,
            hasLegalTermsFlash: eS,
            trialId: eD,
            trialFooterMessageOverride: _,
            reviewWarningMessage: m,
            purchaseState: ei,
            referralTrialOfferId: V,
            isTrial: eC || (null != a && null != _),
            isDiscount: eG,
            handleClose: H,
        };
        t = Y ? (0, r.jsx)(C._, { ...e }) : (0, r.jsx)(f.A, { ...e });
    } else
        s()(null != Q, "Expected plan to be selected"),
            (t = (0, r.jsx)(p.A, {
                premiumSubscription: W,
                paymentSources: q,
                priceOptions: X,
                onPaymentSourceChange: (e) => {
                    et(null != e ? e.id : null);
                },
                onPaymentSourceAdd: eK,
                planId: Q.id,
                setHasAcceptedTerms: es,
                legalTermsNodeRef: eM,
                hasLegalTermsFlash: eS,
                onInvoiceError: (e) => ek(e),
                planGroup: e$,
                currencies: $,
                onCurrencyChange: (e) => ee(e),
                hasOpenInvoice: null != U,
                purchaseState: ei,
                handleClose: H,
            }));
    let eq = e_ && eB && !ep && !Y;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.Z, { giftMessage: eE }),
            !eF && (0, r.jsx)(R.A, { isEligibleForTrial: eC }),
            (0, r.jsxs)(D.dZ, {
                children: [
                    eq && (0, r.jsx)("div", { className: M.AC }),
                    (0, r.jsxs)(o.BJc, {
                        direction: "vertical",
                        gap: 8,
                        children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(T.A, {}), (0, r.jsx)(y.A, {})],
                    }),
                    t,
                ],
            }),
            (0, r.jsx)(D.UX, {
                children: (0, r.jsx)(O.A, {
                    premiumSubscription: W ?? null,
                    setPurchaseState: en,
                    onBack: eW,
                    onNext: ew,
                    legalTermsNodeRef: eM,
                    flashLegalTerms: () => ey(!0),
                    invoiceError: eP,
                    planError: ex,
                    analyticsLocation: F,
                    baseAnalyticsData: G,
                    flowStartTime: z.startTime,
                    trialId: eD,
                    planGroup: e$,
                    openInvoiceId: U,
                    backButtonEligible: eH,
                    metadata: eL,
                    isTrial: eC,
                    disablePurchase: ez,
                    onPaymentSourceAdd: eK,
                }),
            }),
        ],
    });
}
