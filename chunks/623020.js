"use strict";
n.d(t, { _: () => G });
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
    A = n(615310),
    I = n(50956),
    T = n(921925),
    S = n(520796),
    y = n(800471),
    v = n(367160),
    N = n(112242),
    C = n(800132),
    R = n(216641),
    O = n(69494),
    b = n(312649),
    D = n(482132),
    L = n(788868),
    w = n(818348),
    M = n(985018);
let x = 500;
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
            isEligibleForTrial: _,
            userTrialOffer: f,
            checkoutPaymentSources: p,
            hasCheckoutContextLoaded: g,
        } = (0, E.P5)(),
        { isGift: A } = (0, m.Pv)(),
        I = (0, R.W)(r, n),
        T = i.useMemo(() => {
            if (null == n) return !1;
            if (!g) return !0;
            let e = p.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [p, g, n]),
        S = i.useMemo(() => {
            if (null != a) {
                if ((0, h.xq)(a.id)) return L.LE;
                if ((0, h.z4)(a.id)) return L.DA;
            }
            return [];
        }, [a]),
        y = i.useMemo(
            () =>
                u === w.VV.ONE_TIME
                    ? null == n || T || null == o || null != l
                    : null == c || (!A && null != I && u === w.VV.SUBSCRIPTION && _ && !I.canRedeemTrial()),
            [u, o, n, l, c, A, I, _, T],
        ),
        v = (0, h.J$)(s.paymentSourceId),
        N =
            u === w.VV.SUBSCRIPTION && null == a
                ? M.intl.string(M.t.YScQSF)
                : (0, d.Ro)({
                      purchaseType: u,
                      plan: a,
                      premiumSubscription: e,
                      isGift: A,
                      planGroup: S,
                      isPrepaidPaymentSource: v,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: I,
        isEligibleForTrial: _,
        planGroup: S,
        disablePurchase: y,
        buttonText: N,
        userTrialOffer: f,
    };
}
let k = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(C.Ay, { ...n }) : (0, r.jsx)(N.Ay, { ...n });
    },
    U = (e) => {
        let {
            isUnifiedCheckoutUIEnabled: t,
            activeSubscription: n,
            isGift: i,
            onCurrencyChange: s,
            onPaymentSourceAdd: o,
            handleClose: l,
            invoiceError: u,
            selectedPlan: c,
            purchaseState: d,
            planGroup: p,
            paymentSources: h,
            priceOptions: m,
            currencies: E,
            hasLegalTermsFlash: g,
            legalTermsNodeRef: A,
            onPaymentSourceChange: I,
            handlePaymentSourceAdd: T,
            setHasAcceptedTerms: S,
            onInvoiceError: y,
            hasOpenInvoice: N,
            trialFooterMessageOverride: C,
            reviewWarningMessage: R,
            referralTrialOfferId: O,
            isTrial: b,
            trialId: D,
            isDiscount: L,
        } = e;
        a()(null != c, "Expected plan to be selected");
        let w = {
                paymentSources: h,
                priceOptions: m,
                planGroup: p,
                currencies: E,
                onCurrencyChange: s,
                onPaymentSourceChange: I,
                setHasAcceptedTerms: S,
                legalTermsNodeRef: A,
                hasLegalTermsFlash: g,
                handleClose: l,
                purchaseState: d,
            },
            M = c.id;
        if (null == n || i) {
            let e = {
                ...w,
                selectedPlanId: M,
                handlePaymentSourceAdd: T,
                trialId: D,
                trialFooterMessageOverride: C,
                reviewWarningMessage: R,
                referralTrialOfferId: O,
                isTrial: b,
                isDiscount: L,
            };
            return t ? (0, r.jsx)(v._, { ...e }) : (0, r.jsx)(_.A, { ...e });
        }
        {
            let e = {
                ...w,
                premiumSubscription: n,
                onPaymentSourceAdd: o,
                planId: M,
                onInvoiceError: y,
                invoiceError: u,
                hasOpenInvoice: N,
            };
            return (0, r.jsx)(f.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    };
function G(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: d,
            reviewWarningMessage: _,
            planGroup: f,
            openInvoiceId: h,
            analyticsData: v,
            analyticsLocation: N,
            referralTrialOfferId: C,
            initialPlanId: R,
            subscriptionTier: M,
            handleClose: G,
        } = e,
        F = (0, u.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: V,
            setUpdatedSubscription: B,
            contextMetadata: H,
            currencies: j,
            paymentSources: Y,
            priceOptions: W,
            purchaseError: K,
            selectedPlan: $,
            selectedSkuId: z,
            setCurrency: q,
            setPaymentSourceId: Z,
            setPurchaseState: X,
            purchaseState: Q,
            isPremium: J,
            setHasAcceptedTerms: ee,
            purchaseType: et,
            setEntitlementsGranted: en,
            setAppliedUserDiscounts: er,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            disablePurchasesForStorybook: es,
            isPremiumGroupPurchase: ea,
            isEligibleForDiscount: eo,
            discountOffer: el,
        } = (0, E.P5)(),
        eu = (0, A.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: e_, claimableRewards: ef } = (0, m.Pv)();
    a()(null != eu, "Step should be set");
    let ep = i.useRef(null),
        [eh, em] = (0, l.A)(!1, x),
        { isEligibleForTrial: eE, planGroup: eg, disablePurchase: eA, userTrialOffer: eI } = P(),
        eT = s ?? C ?? null,
        eS = null != eT && (!J || L.TP[eT].skus.includes(z)) ? eT : null,
        ey = { user_trial_offer_id: eI?.id };
    i.useEffect(() => {
        null != K && null != ep.current && ep.current.scrollIntoView({ behavior: "smooth" });
    }, [K]);
    let ev = i.useCallback(
            (e, t, r) => {
                B(e),
                    null != t && en(t),
                    null != r && er(r),
                    n(g.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, B, en, er],
        ),
        eN = null,
        eC = i.useRef(null),
        [eR, eO] = i.useState(null),
        eb = el?.discount?.plan_ids,
        eD = eo && null != el && null != eb && null != $ && eb.includes($.id),
        eL = ec && (0, p.Ik)(e_),
        ew = null == R && null == M && et === w.VV.SUBSCRIPTION,
        eM = (0, y.vT)({ isTrial: eE, isGift: ec, selectedSkuId: z, startedPaymentFlowWithPaymentSources: ei.current }),
        ex = ec && et === w.VV.ONE_TIME,
        eP = ex || (eM ? ew && J : J),
        ek = (0, c.px)($, ec, ef),
        eU = i.useCallback(
            () =>
                (q(void 0), eM)
                    ? void n(g.pn.SKU_SELECT)
                    : ea
                      ? void n(g.pn.ADD_PAYMENT_STEPS)
                      : ek
                        ? void n(g.pn.SELECT_FREE_SKU)
                        : ex
                          ? n(g.pn.GIFT_CUSTOMIZATION)
                          : n(g.pn.PLAN_SELECT),
            [q, n, eM, ex, ek, ea],
        ),
        eG = () => {
            n(g.pn.ADD_PAYMENT_STEPS);
        },
        eF = eA;
    es && (eF = !0);
    let eV = f ?? eg,
        eB = i.useCallback((e) => Z(null != e ? e.id : null), [Z]),
        eH = i.useCallback(() => {
            n(g.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        et === w.VV.ONE_TIME
            ? (0, r.jsx)(k, {
                  isUnifiedCheckoutUIEnabled: F,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  onPaymentSourceChange: eB,
                  handlePaymentSourceAdd: eH,
              })
            : (0, r.jsx)(U, {
                  isUnifiedCheckoutUIEnabled: F,
                  activeSubscription: V,
                  isGift: ec,
                  onCurrencyChange: (e) => q(e),
                  onPaymentSourceAdd: eG,
                  handleClose: G,
                  invoiceError: eR,
                  selectedPlan: $,
                  purchaseState: Q,
                  planGroup: eV,
                  paymentSources: Y,
                  priceOptions: W,
                  currencies: j,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  onPaymentSourceChange: eB,
                  handlePaymentSourceAdd: eH,
                  setHasAcceptedTerms: ee,
                  onInvoiceError: eO,
                  hasOpenInvoice: null != h,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: _,
                  referralTrialOfferId: C,
                  isTrial: eE || (null != s && null != d),
                  trialId: eS,
                  isDiscount: eD,
              });
    let ej = (0, r.jsx)(b.A, {
            premiumSubscription: V ?? null,
            setPurchaseState: X,
            onBack: eU,
            onNext: ev,
            legalTermsNodeRef: eC,
            flashLegalTerms: () => em(!0),
            invoiceError: eR,
            planError: eN,
            analyticsLocation: N,
            baseAnalyticsData: v,
            flowStartTime: H.startTime,
            trialId: eS,
            planGroup: eV,
            openInvoiceId: h,
            backButtonEligible: eP,
            metadata: ey,
            isTrial: eE,
            disablePurchase: eF,
            onPaymentSourceAdd: eG,
        }),
        eY = i.useMemo(
            () =>
                F
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(I.Z, { giftMessage: ed }),
                              !eL && (0, r.jsx)(O.A, { isEligibleForTrial: eE }),
                          ],
                      }),
            [ed, eL, eE, F],
        ),
        eW = i.useMemo(
            () =>
                F
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [(0, r.jsx)(T.A, {}), (0, r.jsx)(S.A, {})],
                      }),
            [F],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eY, (0, r.jsxs)(D.dZ, { children: [eW, t] }), (0, r.jsx)(D.UX, { children: ej })],
    });
}
