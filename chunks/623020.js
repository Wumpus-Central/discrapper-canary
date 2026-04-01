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
function x() {
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
        I = (0, C.W)(r, n),
        T = i.useMemo(() => {
            if (null == n) return !1;
            if (!g) return !0;
            let e = p.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [p, g, n]),
        S = i.useMemo(() => {
            if (null != a) {
                if ((0, h.xq)(a.id)) return D.LE;
                if ((0, h.z4)(a.id)) return D.DA;
            }
            return [];
        }, [a]),
        y = i.useMemo(
            () =>
                u === L.VV.ONE_TIME
                    ? null == n || T || null == o || null != l
                    : null == c || (!A && null != I && u === L.VV.SUBSCRIPTION && _ && !I.canRedeemTrial()),
            [u, o, n, l, c, A, I, _, T],
        ),
        v = (0, h.J$)(s.paymentSourceId),
        N =
            u === L.VV.SUBSCRIPTION && null == a
                ? w.intl.string(w.t.YScQSF)
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
let P = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(N.Ay, { ...n }) : (0, r.jsx)(v.Ay, { ...n });
    },
    k = (e) => {
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
            onInvoiceError: v,
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
            return t ? (0, r.jsx)(y._, { ...e }) : (0, r.jsx)(_.A, { ...e });
        }
        {
            let e = {
                ...w,
                premiumSubscription: n,
                onPaymentSourceAdd: o,
                planId: M,
                onInvoiceError: v,
                invoiceError: u,
                hasOpenInvoice: N,
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
            disablePurchasesForStorybook: es,
            isPremiumGroupPurchase: ea,
            isEligibleForDiscount: eo,
            discountOffer: el,
        } = (0, E.P5)(),
        { isGift: eu, giftMessage: ec, giftRecipient: ed, claimableRewards: e_ } = (0, m.Pv)();
    a()(null != X, "Step should be set");
    let ef = i.useRef(null),
        [ep, eh] = (0, l.A)(!1, M),
        { isEligibleForTrial: em, planGroup: eE, disablePurchase: eg, userTrialOffer: eA } = x(),
        eI = s ?? N ?? null,
        eT = null != eI && (!J || D.TP[eI].skus.includes($)) ? eI : null,
        eS = { user_trial_offer_id: eA?.id };
    i.useEffect(() => {
        null != W && null != ef.current && ef.current.scrollIntoView({ behavior: "smooth" });
    }, [W]);
    let ey = i.useCallback(
            (e, t, r) => {
                V(e),
                    null != t && en(t),
                    null != r && er(r),
                    n(g.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, V, en, er],
        ),
        ev = null,
        eN = i.useRef(null),
        [eC, eR] = i.useState(null),
        eO = el?.discount?.plan_ids,
        eb = eo && null != el && null != eO && null != K && eO.includes(K.id),
        eD = eu && (0, p.Ik)(ed),
        eL = null == C && null == w && et === L.VV.SUBSCRIPTION,
        ew = (0, S.vT)({ isTrial: em, isGift: eu, selectedSkuId: $, startedPaymentFlowWithPaymentSources: ei.current }),
        eM = eu && et === L.VV.ONE_TIME,
        ex = eM || (ew ? eL && J : J),
        eP = (0, c.px)(K, eu, e_),
        ek = i.useCallback(
            () =>
                (z(void 0), ew)
                    ? void n(g.pn.SKU_SELECT)
                    : ea
                      ? void n(g.pn.ADD_PAYMENT_STEPS)
                      : eP
                        ? void n(g.pn.SELECT_FREE_SKU)
                        : eM
                          ? n(g.pn.GIFT_CUSTOMIZATION)
                          : n(g.pn.PLAN_SELECT),
            [z, n, ew, eM, eP, ea],
        ),
        eU = () => {
            n(g.pn.ADD_PAYMENT_STEPS);
        },
        eG = eg;
    es && (eG = !0);
    let eF = f ?? eE,
        eV = i.useCallback((e) => q(null != e ? e.id : null), [q]),
        eB = i.useCallback(() => {
            n(g.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        et === L.VV.ONE_TIME
            ? (0, r.jsx)(P, {
                  isUnifiedCheckoutUIEnabled: G,
                  hasLegalTermsFlash: ep,
                  legalTermsNodeRef: eN,
                  onPaymentSourceChange: eV,
                  handlePaymentSourceAdd: eB,
              })
            : (0, r.jsx)(k, {
                  isUnifiedCheckoutUIEnabled: G,
                  activeSubscription: F,
                  isGift: eu,
                  onCurrencyChange: (e) => z(e),
                  onPaymentSourceAdd: eU,
                  handleClose: U,
                  invoiceError: eC,
                  selectedPlan: K,
                  purchaseState: Q,
                  planGroup: eF,
                  paymentSources: j,
                  priceOptions: Y,
                  currencies: H,
                  hasLegalTermsFlash: ep,
                  legalTermsNodeRef: eN,
                  onPaymentSourceChange: eV,
                  handlePaymentSourceAdd: eB,
                  setHasAcceptedTerms: ee,
                  onInvoiceError: eR,
                  hasOpenInvoice: null != h,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: _,
                  referralTrialOfferId: N,
                  isTrial: em || (null != s && null != d),
                  trialId: eT,
                  isDiscount: eb,
              });
    let eH = (0, r.jsx)(O.A, {
            premiumSubscription: F ?? null,
            setPurchaseState: Z,
            onBack: ek,
            onNext: ey,
            legalTermsNodeRef: eN,
            flashLegalTerms: () => eh(!0),
            invoiceError: eC,
            planError: ev,
            analyticsLocation: v,
            baseAnalyticsData: y,
            flowStartTime: B.startTime,
            trialId: eT,
            planGroup: eF,
            openInvoiceId: h,
            backButtonEligible: ex,
            metadata: eS,
            isTrial: em,
            disablePurchase: eG,
            onPaymentSourceAdd: eU,
        }),
        ej = i.useMemo(
            () =>
                G
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(A.Z, { giftMessage: ec }),
                              !eD && (0, r.jsx)(R.A, { isEligibleForTrial: em }),
                          ],
                      }),
            [ec, eD, em, G],
        ),
        eY = i.useMemo(
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
        children: [ej, (0, r.jsxs)(b.dZ, { children: [eY, t] }), (0, r.jsx)(b.UX, { children: eH })],
    });
}
