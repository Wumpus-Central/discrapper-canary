"use strict";
n.d(t, { _: () => U });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(304072),
    u = n(742810),
    c = n(810498),
    d = n(367921),
    _ = n(271849),
    f = n(369280),
    p = n(45938),
    h = n(927578),
    m = n(937008),
    E = n(156312),
    g = n(166532),
    A = n(50956),
    I = n(921925),
    T = n(520796),
    S = n(800471),
    y = n(367160),
    v = n(112242),
    N = n(800132),
    C = n(216641),
    R = n(69494),
    O = n(312649),
    b = n(482132),
    D = n(788868),
    L = n(818348),
    w = n(985018);
let M = 500;
function P() {
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
            inReverseTrial: _,
            isEligibleForTrial: f,
            userTrialOffer: p,
            checkoutPaymentSources: g,
            hasCheckoutContextLoaded: A,
        } = (0, E.P5)(),
        { isGift: I } = (0, m.Pv)(),
        T = (0, C.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!A) return !0;
            let e = g.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [g, A, n]),
        y = i.useMemo(() => {
            if (null != a) {
                if ((0, h.xq)(a.id)) return D.LE;
                if ((0, h.z4)(a.id)) return D.DA;
            }
            return [];
        }, [a]),
        v = i.useMemo(
            () =>
                u === L.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!I && null != T && u === L.VV.SUBSCRIPTION && f && !T.canRedeemTrial()),
            [u, o, n, l, c, I, T, f, S],
        ),
        N = (0, h.J$)(s.paymentSourceId),
        R =
            u === L.VV.SUBSCRIPTION && null == a
                ? w.intl.string(w.t.YScQSF)
                : (0, d.Ro)({
                      purchaseType: u,
                      plan: a,
                      premiumSubscription: e,
                      isGift: I,
                      planGroup: y,
                      isPrepaidPaymentSource: N,
                      inReverseTrial: _,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: T,
        isEligibleForTrial: f,
        planGroup: y,
        disablePurchase: v,
        buttonText: R,
        userTrialOffer: p,
    };
}
let x = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(N.Ay, { ...n }) : (0, r.jsx)(v.Ay, { ...n });
    },
    k = (e) => {
        let {
            isUnifiedCheckoutUIEnabled: t,
            activeSubscription: n,
            inReverseTrial: i,
            isGift: s,
            onCurrencyChange: o,
            onPaymentSourceAdd: l,
            handleClose: u,
            invoiceError: c,
            selectedPlan: d,
            purchaseState: p,
            planGroup: h,
            paymentSources: m,
            priceOptions: E,
            currencies: g,
            hasLegalTermsFlash: A,
            legalTermsNodeRef: I,
            onPaymentSourceChange: T,
            handlePaymentSourceAdd: S,
            setHasAcceptedTerms: v,
            onInvoiceError: N,
            hasOpenInvoice: C,
            trialFooterMessageOverride: R,
            reviewWarningMessage: O,
            referralTrialOfferId: b,
            isTrial: D,
            trialId: L,
            isDiscount: w,
        } = e;
        a()(null != d, "Expected plan to be selected");
        let M = {
                paymentSources: m,
                priceOptions: E,
                planGroup: h,
                currencies: g,
                onCurrencyChange: o,
                onPaymentSourceChange: T,
                setHasAcceptedTerms: v,
                legalTermsNodeRef: I,
                hasLegalTermsFlash: A,
                handleClose: u,
                purchaseState: p,
            },
            P = d.id;
        if (null == n || i || s) {
            let e = {
                ...M,
                selectedPlanId: P,
                handlePaymentSourceAdd: S,
                trialId: L,
                trialFooterMessageOverride: R,
                reviewWarningMessage: O,
                referralTrialOfferId: b,
                isTrial: D,
                isDiscount: w,
            };
            return t ? (0, r.jsx)(y._, { ...e }) : (0, r.jsx)(_.A, { ...e });
        }
        {
            let e = {
                ...M,
                premiumSubscription: n,
                onPaymentSourceAdd: l,
                planId: P,
                onInvoiceError: N,
                invoiceError: c,
                hasOpenInvoice: C,
            };
            return (0, r.jsx)(f.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    };
function U(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: d,
            reviewWarningMessage: _,
            planGroup: f,
            openInvoiceId: h,
            analyticsData: y,
            analyticsLocation: v,
            referralTrialOfferId: N,
            initialPlanId: C,
            subscriptionTier: w,
            handleClose: U,
        } = e,
        G = (0, u.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: F,
            setUpdatedSubscription: V,
            contextMetadata: B,
            currencies: H,
            paymentSources: j,
            priceOptions: Y,
            purchaseError: W,
            selectedPlan: K,
            selectedSkuId: $,
            setCurrency: z,
            setPaymentSourceId: q,
            setPurchaseState: Z,
            step: X,
            purchaseState: Q,
            isPremium: J,
            setHasAcceptedTerms: ee,
            purchaseType: et,
            setEntitlementsGranted: en,
            setAppliedUserDiscounts: er,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            inReverseTrial: es,
            disablePurchasesForStorybook: ea,
            isPremiumGroupPurchase: eo,
            isEligibleForDiscount: el,
            discountOffer: eu,
        } = (0, E.P5)(),
        { isGift: ec, giftMessage: ed, giftRecipient: e_, claimableRewards: ef } = (0, m.Pv)();
    a()(null != X, "Step should be set");
    let ep = i.useRef(null),
        [eh, em] = (0, l.A)(!1, M),
        { isEligibleForTrial: eE, planGroup: eg, disablePurchase: eA, userTrialOffer: eI } = P(),
        eT = s ?? N ?? null,
        eS = null != eT && (!J || D.TP[eT].skus.includes($)) ? eT : null,
        ey = { user_trial_offer_id: eI?.id };
    i.useEffect(() => {
        null != W && null != ep.current && ep.current.scrollIntoView({ behavior: "smooth" });
    }, [W]);
    let ev = i.useCallback(
            (e, t, r) => {
                V(e),
                    null != t && en(t),
                    null != r && er(r),
                    n(g.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, V, en, er],
        ),
        eN = null,
        eC = i.useRef(null),
        [eR, eO] = i.useState(null),
        eb = eu?.discount?.plan_ids,
        eD = el && null != eu && null != eb && null != K && eb.includes(K.id),
        eL = ec && (0, p.Ik)(e_),
        ew = null == C && null == w && et === L.VV.SUBSCRIPTION,
        eM = (0, S.vT)({ isTrial: eE, isGift: ec, selectedSkuId: $, startedPaymentFlowWithPaymentSources: ei.current }),
        eP = ec && et === L.VV.ONE_TIME,
        ex = eP || (eM ? ew && J : J),
        ek = (0, c.px)(K, ec, ef),
        eU = i.useCallback(
            () =>
                (z(void 0), eM)
                    ? void n(g.pn.SKU_SELECT)
                    : eo
                      ? void n(g.pn.ADD_PAYMENT_STEPS)
                      : ek
                        ? void n(g.pn.SELECT_FREE_SKU)
                        : eP
                          ? n(g.pn.GIFT_CUSTOMIZATION)
                          : n(g.pn.PLAN_SELECT),
            [z, n, eM, eP, ek, eo],
        ),
        eG = () => {
            n(g.pn.ADD_PAYMENT_STEPS);
        },
        eF = eA;
    ea && (eF = !0);
    let eV = f ?? eg,
        eB = i.useCallback((e) => q(null != e ? e.id : null), [q]),
        eH = i.useCallback(() => {
            n(g.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        et === L.VV.ONE_TIME
            ? (0, r.jsx)(x, {
                  isUnifiedCheckoutUIEnabled: G,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  onPaymentSourceChange: eB,
                  handlePaymentSourceAdd: eH,
              })
            : (0, r.jsx)(k, {
                  isUnifiedCheckoutUIEnabled: G,
                  activeSubscription: F,
                  inReverseTrial: es,
                  isGift: ec,
                  onCurrencyChange: (e) => z(e),
                  onPaymentSourceAdd: eG,
                  handleClose: U,
                  invoiceError: eR,
                  selectedPlan: K,
                  purchaseState: Q,
                  planGroup: eV,
                  paymentSources: j,
                  priceOptions: Y,
                  currencies: H,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  onPaymentSourceChange: eB,
                  handlePaymentSourceAdd: eH,
                  setHasAcceptedTerms: ee,
                  onInvoiceError: eO,
                  hasOpenInvoice: null != h,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: _,
                  referralTrialOfferId: N,
                  isTrial: eE || (null != s && null != d),
                  trialId: eS,
                  isDiscount: eD,
              });
    let ej = (0, r.jsx)(O.A, {
            premiumSubscription: F ?? null,
            setPurchaseState: Z,
            onBack: eU,
            onNext: ev,
            legalTermsNodeRef: eC,
            flashLegalTerms: () => em(!0),
            invoiceError: eR,
            planError: eN,
            analyticsLocation: v,
            baseAnalyticsData: y,
            flowStartTime: B.startTime,
            trialId: eS,
            planGroup: eV,
            openInvoiceId: h,
            backButtonEligible: ex,
            metadata: ey,
            isTrial: eE,
            disablePurchase: eF,
            onPaymentSourceAdd: eG,
        }),
        eY = i.useMemo(
            () =>
                G
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(A.Z, { giftMessage: ed }),
                              !eL && (0, r.jsx)(R.A, { isEligibleForTrial: eE }),
                          ],
                      }),
            [ed, eL, eE, G],
        ),
        eW = i.useMemo(
            () =>
                G
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [(0, r.jsx)(I.A, {}), (0, r.jsx)(T.A, {})],
                      }),
            [G],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eY, (0, r.jsxs)(b.dZ, { children: [eW, t] }), (0, r.jsx)(b.UX, { children: ej })],
    });
}
