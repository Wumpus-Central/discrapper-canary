"use strict";
n.d(t, { _: () => B });
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
    m = n(413748),
    E = n(937008),
    g = n(156312),
    A = n(166532),
    I = n(970077),
    T = n(987616),
    S = n(615310),
    y = n(50956),
    v = n(921925),
    N = n(520796),
    C = n(800471),
    R = n(367160),
    O = n(112242),
    b = n(800132),
    D = n(216641),
    L = n(69494),
    w = n(312649),
    M = n(482132),
    x = n(788868),
    P = n(818348),
    k = n(985018);
let U = 500;
function G() {
    let {
            activeSubscription: e,
            hasPaymentSources: t,
            paymentSourceId: n,
            paymentSources: r,
            priceOptions: s,
            purchasePreviewError: a,
            purchaseType: o,
            invoicePreview: l,
            isEligibleForTrial: u,
            userTrialOffer: c,
            checkoutPaymentSources: _,
            hasCheckoutContextLoaded: f,
        } = (0, g.P5)(),
        p = (0, I.A)(),
        m = (0, T.Hf)(),
        { isGift: A } = (0, E.Pv)(),
        S = (0, D.W)(r, n),
        y = i.useMemo(() => {
            if (null == n) return !1;
            if (!f) return !0;
            let e = _.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [_, f, n]),
        v = i.useMemo(() => {
            if (null != p) {
                if ((0, h.xq)(p.id)) return x.LE;
                if ((0, h.z4)(p.id)) return x.DA;
            }
            return [];
        }, [p]),
        N = i.useMemo(
            () =>
                o === P.VV.ONE_TIME
                    ? null == n || y || null == m || null != a
                    : null == l || (!A && null != S && o === P.VV.SUBSCRIPTION && u && !S.canRedeemTrial()),
            [o, m, n, a, l, A, S, u, y],
        ),
        C = (0, h.J$)(s.paymentSourceId),
        R =
            o === P.VV.SUBSCRIPTION && null == p
                ? k.intl.string(k.t.YScQSF)
                : (0, d.Ro)({
                      purchaseType: o,
                      plan: p,
                      premiumSubscription: e,
                      isGift: A,
                      planGroup: v,
                      isPrepaidPaymentSource: C,
                      paymentSourceId: n,
                      hasPaymentSources: t,
                  });
    return {
        paymentSource: S,
        isEligibleForTrial: u,
        planGroup: v,
        disablePurchase: N,
        buttonText: R,
        userTrialOffer: c,
    };
}
let F = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(b.Ay, { ...n }) : (0, r.jsx)(O.Ay, { ...n });
    },
    V = (e) => {
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
                priceOptions: E,
                currencies: A,
                hasLegalTermsFlash: I,
                legalTermsNodeRef: T,
                handlePaymentSourceAdd: S,
                setHasAcceptedTerms: y,
                onInvoiceError: v,
                hasOpenInvoice: N,
                trialFooterMessageOverride: C,
                reviewWarningMessage: O,
                referralTrialOfferId: b,
                isTrial: D,
                trialId: L,
                isDiscount: w,
            } = e,
            { selectedPlanId: M, selectedSkuId: x } = (0, m.t)((e) => ({
                selectedPlanId: e.selectedPlanId,
                selectedSkuId: e.selectedSkuId,
            })),
            { hasFetchedSubscriptionPlans: P, unifiedCheckoutFlow: k } = (0, g.P5)();
        a()(null != c, "Expected plan to be selected: flow=%s, planId=%s, hasFetchedPlans=%s, skuId=%s", k, M, P, x);
        let U = {
                paymentSources: h,
                priceOptions: E,
                planGroup: p,
                currencies: A,
                onCurrencyChange: s,
                setHasAcceptedTerms: y,
                legalTermsNodeRef: T,
                hasLegalTermsFlash: I,
                handleClose: l,
                purchaseState: d,
            },
            G = c.id;
        if (null == n || i) {
            let e = {
                ...U,
                selectedPlanId: G,
                handlePaymentSourceAdd: S,
                trialId: L,
                trialFooterMessageOverride: C,
                reviewWarningMessage: O,
                referralTrialOfferId: b,
                isTrial: D,
                isDiscount: w,
            };
            return t ? (0, r.jsx)(R._, { ...e }) : (0, r.jsx)(_.A, { ...e });
        }
        {
            let e = {
                ...U,
                premiumSubscription: n,
                onPaymentSourceAdd: o,
                planId: G,
                onInvoiceError: v,
                invoiceError: u,
                hasOpenInvoice: N,
            };
            return (0, r.jsx)(f.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    };
function B(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: d,
            reviewWarningMessage: _,
            planGroup: f,
            openInvoiceId: h,
            analyticsData: T,
            analyticsLocation: R,
            referralTrialOfferId: O,
            initialPlanId: b,
            subscriptionTier: D,
            handleClose: k,
        } = e,
        B = (0, u.D7)({ location: "payment_modal_review_step" }),
        H = (0, m.t)((e) => e.selectedSkuId),
        {
            activeSubscription: j,
            setUpdatedSubscription: Y,
            contextMetadata: W,
            currencies: K,
            paymentSources: $,
            priceOptions: z,
            purchaseError: q,
            setCurrency: Z,
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
        } = (0, g.P5)(),
        eu = (0, I.A)(),
        ec = (0, S.bB)(),
        { isGift: ed, giftMessage: e_, giftRecipient: ef, claimableRewards: ep } = (0, E.Pv)();
    a()(null != ec, "Step should be set");
    let eh = i.useRef(null),
        [em, eE] = (0, l.A)(!1, U),
        { isEligibleForTrial: eg, planGroup: eA, disablePurchase: eI, userTrialOffer: eT } = G(),
        eS = s ?? O ?? null,
        ey = null != eS && (!J || x.TP[eS].skus.includes(H)) ? eS : null,
        ev = { user_trial_offer_id: eT?.id };
    i.useEffect(() => {
        null != q && null != eh.current && eh.current.scrollIntoView({ behavior: "smooth" });
    }, [q]);
    let eN = i.useCallback(
            (e, t, r) => {
                Y(e),
                    null != t && en(t),
                    null != r && er(r),
                    n(A.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, Y, en, er],
        ),
        eC = null,
        eR = i.useRef(null),
        [eO, eb] = i.useState(null),
        eD = el?.discount?.plan_ids,
        eL = eo && null != el && null != eD && null != eu && eD.includes(eu.id),
        ew = ed && (0, p.Ik)(ef),
        eM = null == b && null == D && et === P.VV.SUBSCRIPTION,
        ex = (0, C.vT)({ isTrial: eg, isGift: ed, selectedSkuId: H, startedPaymentFlowWithPaymentSources: ei.current }),
        eP = ed && et === P.VV.ONE_TIME,
        ek = eP || (ex ? eM && J : J),
        eU = (0, c.px)(eu, ed, ep),
        eG = i.useCallback(
            () =>
                (Z(void 0), ex)
                    ? void n(A.pn.SKU_SELECT)
                    : ea
                      ? void n(A.pn.ADD_PAYMENT_STEPS)
                      : eU
                        ? void n(A.pn.SELECT_FREE_SKU)
                        : eP
                          ? n(A.pn.GIFT_CUSTOMIZATION)
                          : n(A.pn.PLAN_SELECT),
            [Z, n, ex, eP, eU, ea],
        ),
        eF = () => {
            n(A.pn.ADD_PAYMENT_STEPS);
        },
        eV = eI;
    es && (eV = !0);
    let eB = f ?? eA,
        eH = i.useCallback(() => {
            n(A.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        et === P.VV.ONE_TIME
            ? (0, r.jsx)(F, {
                  isUnifiedCheckoutUIEnabled: B,
                  hasLegalTermsFlash: em,
                  legalTermsNodeRef: eR,
                  handlePaymentSourceAdd: eH,
              })
            : (0, r.jsx)(V, {
                  isUnifiedCheckoutUIEnabled: B,
                  activeSubscription: j,
                  isGift: ed,
                  onCurrencyChange: (e) => Z(e),
                  onPaymentSourceAdd: eF,
                  handleClose: k,
                  invoiceError: eO,
                  selectedPlan: eu,
                  purchaseState: Q,
                  planGroup: eB,
                  paymentSources: $,
                  priceOptions: z,
                  currencies: K,
                  hasLegalTermsFlash: em,
                  legalTermsNodeRef: eR,
                  handlePaymentSourceAdd: eH,
                  setHasAcceptedTerms: ee,
                  onInvoiceError: eb,
                  hasOpenInvoice: null != h,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: _,
                  referralTrialOfferId: O,
                  isTrial: eg || (null != s && null != d),
                  trialId: ey,
                  isDiscount: eL,
              });
    let ej = (0, r.jsx)(w.A, {
            premiumSubscription: j ?? null,
            setPurchaseState: X,
            onBack: eG,
            onNext: eN,
            legalTermsNodeRef: eR,
            flashLegalTerms: () => eE(!0),
            invoiceError: eO,
            planError: eC,
            analyticsLocation: R,
            baseAnalyticsData: T,
            flowStartTime: W.startTime,
            trialId: ey,
            planGroup: eB,
            openInvoiceId: h,
            backButtonEligible: ek,
            metadata: ev,
            isTrial: eg,
            disablePurchase: eV,
            onPaymentSourceAdd: eF,
        }),
        eY = i.useMemo(
            () =>
                B
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(y.Z, { giftMessage: e_ }),
                              !ew && (0, r.jsx)(L.A, { isEligibleForTrial: eg }),
                          ],
                      }),
            [e_, ew, eg, B],
        ),
        eW = i.useMemo(
            () =>
                B
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, r.jsx)(v.A, {}), (0, r.jsx)(N.A, {})],
                      }),
            [B],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eY, (0, r.jsxs)(M.dZ, { children: [eW, t] }), (0, r.jsx)(M.UX, { children: ej })],
    });
}
