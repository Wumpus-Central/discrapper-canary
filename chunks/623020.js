"use strict";
n.d(t, { _: () => F });
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
    A = n(987616),
    I = n(615310),
    T = n(50956),
    S = n(921925),
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
            purchasePreviewError: o,
            purchaseType: l,
            invoicePreview: u,
            isEligibleForTrial: c,
            userTrialOffer: _,
            checkoutPaymentSources: f,
            hasCheckoutContextLoaded: p,
        } = (0, E.P5)(),
        g = (0, A.Hf)(),
        { isGift: I } = (0, m.Pv)(),
        T = (0, O.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!p) return !0;
            let e = f.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [f, p, n]),
        y = i.useMemo(() => {
            if (null != a) {
                if ((0, h.xq)(a.id)) return w.LE;
                if ((0, h.z4)(a.id)) return w.DA;
            }
            return [];
        }, [a]),
        v = i.useMemo(
            () =>
                l === M.VV.ONE_TIME
                    ? null == n || S || null == g || null != o
                    : null == u || (!I && null != T && l === M.VV.SUBSCRIPTION && c && !T.canRedeemTrial()),
            [l, g, n, o, u, I, T, c, S],
        ),
        N = (0, h.J$)(s.paymentSourceId),
        C =
            l === M.VV.SUBSCRIPTION && null == a
                ? x.intl.string(x.t.YScQSF)
                : (0, d.Ro)({
                      purchaseType: l,
                      plan: a,
                      premiumSubscription: e,
                      isGift: I,
                      planGroup: y,
                      isPrepaidPaymentSource: N,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: T,
        isEligibleForTrial: c,
        planGroup: y,
        disablePurchase: v,
        buttonText: C,
        userTrialOffer: _,
    };
}
let U = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(R.Ay, { ...n }) : (0, r.jsx)(C.Ay, { ...n });
    },
    G = (e) => {
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
            hasOpenInvoice: v,
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
            return t ? (0, r.jsx)(N._, { ...e }) : (0, r.jsx)(_.A, { ...e });
        }
        {
            let e = {
                ...w,
                premiumSubscription: n,
                onPaymentSourceAdd: o,
                planId: M,
                onInvoiceError: y,
                invoiceError: u,
                hasOpenInvoice: v,
            };
            return (0, r.jsx)(f.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    };
function F(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: d,
            reviewWarningMessage: _,
            planGroup: f,
            openInvoiceId: h,
            analyticsData: A,
            analyticsLocation: N,
            referralTrialOfferId: C,
            initialPlanId: R,
            subscriptionTier: O,
            handleClose: x,
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
        eu = (0, I.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: e_, claimableRewards: ef } = (0, m.Pv)();
    a()(null != eu, "Step should be set");
    let ep = i.useRef(null),
        [eh, em] = (0, l.A)(!1, P),
        { isEligibleForTrial: eE, planGroup: eg, disablePurchase: eA, userTrialOffer: eI } = k(),
        eT = s ?? C ?? null,
        eS = null != eT && (!J || w.TP[eT].skus.includes(z)) ? eT : null,
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
        ew = null == R && null == O && et === M.VV.SUBSCRIPTION,
        eM = (0, v.vT)({ isTrial: eE, isGift: ec, selectedSkuId: z, startedPaymentFlowWithPaymentSources: ei.current }),
        ex = ec && et === M.VV.ONE_TIME,
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
        et === M.VV.ONE_TIME
            ? (0, r.jsx)(U, {
                  isUnifiedCheckoutUIEnabled: F,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  onPaymentSourceChange: eB,
                  handlePaymentSourceAdd: eH,
              })
            : (0, r.jsx)(G, {
                  isUnifiedCheckoutUIEnabled: F,
                  activeSubscription: V,
                  isGift: ec,
                  onCurrencyChange: (e) => q(e),
                  onPaymentSourceAdd: eG,
                  handleClose: x,
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
    let ej = (0, r.jsx)(D.A, {
            premiumSubscription: V ?? null,
            setPurchaseState: X,
            onBack: eU,
            onNext: ev,
            legalTermsNodeRef: eC,
            flashLegalTerms: () => em(!0),
            invoiceError: eR,
            planError: eN,
            analyticsLocation: N,
            baseAnalyticsData: A,
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
                              (0, r.jsx)(T.Z, { giftMessage: ed }),
                              !eL && (0, r.jsx)(b.A, { isEligibleForTrial: eE }),
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
                          children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(y.A, {})],
                      }),
            [F],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eY, (0, r.jsxs)(L.dZ, { children: [eW, t] }), (0, r.jsx)(L.UX, { children: ej })],
    });
}
