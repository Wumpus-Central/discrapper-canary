"use strict";
n.d(t, { _: () => V });
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
    A = n(970077),
    I = n(987616),
    T = n(615310),
    S = n(50956),
    y = n(921925),
    v = n(520796),
    N = n(800471),
    C = n(367160),
    R = n(112242),
    O = n(800132),
    b = n(216641),
    D = n(69494),
    L = n(312649),
    w = n(482132),
    M = n(788868),
    x = n(818348),
    P = n(985018);
let k = 500;
function U() {
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
        } = (0, E.P5)(),
        p = (0, A.A)(),
        g = (0, I.Hf)(),
        { isGift: T } = (0, m.Pv)(),
        S = (0, b.W)(r, n),
        y = i.useMemo(() => {
            if (null == n) return !1;
            if (!f) return !0;
            let e = _.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [_, f, n]),
        v = i.useMemo(() => {
            if (null != p) {
                if ((0, h.xq)(p.id)) return M.LE;
                if ((0, h.z4)(p.id)) return M.DA;
            }
            return [];
        }, [p]),
        N = i.useMemo(
            () =>
                o === x.VV.ONE_TIME
                    ? null == n || y || null == g || null != a
                    : null == l || (!T && null != S && o === x.VV.SUBSCRIPTION && u && !S.canRedeemTrial()),
            [o, g, n, a, l, T, S, u, y],
        ),
        C = (0, h.J$)(s.paymentSourceId),
        R =
            o === x.VV.SUBSCRIPTION && null == p
                ? P.intl.string(P.t.YScQSF)
                : (0, d.Ro)({
                      purchaseType: o,
                      plan: p,
                      premiumSubscription: e,
                      isGift: T,
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
let G = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(O.Ay, { ...n }) : (0, r.jsx)(R.Ay, { ...n });
    },
    F = (e) => {
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
            trialFooterMessageOverride: N,
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
                trialFooterMessageOverride: N,
                reviewWarningMessage: R,
                referralTrialOfferId: O,
                isTrial: b,
                isDiscount: L,
            };
            return t ? (0, r.jsx)(C._, { ...e }) : (0, r.jsx)(_.A, { ...e });
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
function V(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: d,
            reviewWarningMessage: _,
            planGroup: f,
            openInvoiceId: h,
            analyticsData: I,
            analyticsLocation: C,
            referralTrialOfferId: R,
            initialPlanId: O,
            subscriptionTier: b,
            handleClose: P,
        } = e,
        V = (0, u.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: B,
            setUpdatedSubscription: H,
            contextMetadata: j,
            currencies: Y,
            paymentSources: W,
            priceOptions: K,
            purchaseError: $,
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
        eu = (0, A.A)(),
        ec = (0, T.bB)(),
        { isGift: ed, giftMessage: e_, giftRecipient: ef, claimableRewards: ep } = (0, m.Pv)();
    a()(null != ec, "Step should be set");
    let eh = i.useRef(null),
        [em, eE] = (0, l.A)(!1, k),
        { isEligibleForTrial: eg, planGroup: eA, disablePurchase: eI, userTrialOffer: eT } = U(),
        eS = s ?? R ?? null,
        ey = null != eS && (!J || M.TP[eS].skus.includes(z)) ? eS : null,
        ev = { user_trial_offer_id: eT?.id };
    i.useEffect(() => {
        null != $ && null != eh.current && eh.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let eN = i.useCallback(
            (e, t, r) => {
                H(e),
                    null != t && en(t),
                    null != r && er(r),
                    n(g.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, H, en, er],
        ),
        eC = null,
        eR = i.useRef(null),
        [eO, eb] = i.useState(null),
        eD = el?.discount?.plan_ids,
        eL = eo && null != el && null != eD && null != eu && eD.includes(eu.id),
        ew = ed && (0, p.Ik)(ef),
        eM = null == O && null == b && et === x.VV.SUBSCRIPTION,
        ex = (0, N.vT)({ isTrial: eg, isGift: ed, selectedSkuId: z, startedPaymentFlowWithPaymentSources: ei.current }),
        eP = ed && et === x.VV.ONE_TIME,
        ek = eP || (ex ? eM && J : J),
        eU = (0, c.px)(eu, ed, ep),
        eG = i.useCallback(
            () =>
                (q(void 0), ex)
                    ? void n(g.pn.SKU_SELECT)
                    : ea
                      ? void n(g.pn.ADD_PAYMENT_STEPS)
                      : eU
                        ? void n(g.pn.SELECT_FREE_SKU)
                        : eP
                          ? n(g.pn.GIFT_CUSTOMIZATION)
                          : n(g.pn.PLAN_SELECT),
            [q, n, ex, eP, eU, ea],
        ),
        eF = () => {
            n(g.pn.ADD_PAYMENT_STEPS);
        },
        eV = eI;
    es && (eV = !0);
    let eB = f ?? eA,
        eH = i.useCallback((e) => Z(null != e ? e.id : null), [Z]),
        ej = i.useCallback(() => {
            n(g.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        et === x.VV.ONE_TIME
            ? (0, r.jsx)(G, {
                  isUnifiedCheckoutUIEnabled: V,
                  hasLegalTermsFlash: em,
                  legalTermsNodeRef: eR,
                  onPaymentSourceChange: eH,
                  handlePaymentSourceAdd: ej,
              })
            : (0, r.jsx)(F, {
                  isUnifiedCheckoutUIEnabled: V,
                  activeSubscription: B,
                  isGift: ed,
                  onCurrencyChange: (e) => q(e),
                  onPaymentSourceAdd: eF,
                  handleClose: P,
                  invoiceError: eO,
                  selectedPlan: eu,
                  purchaseState: Q,
                  planGroup: eB,
                  paymentSources: W,
                  priceOptions: K,
                  currencies: Y,
                  hasLegalTermsFlash: em,
                  legalTermsNodeRef: eR,
                  onPaymentSourceChange: eH,
                  handlePaymentSourceAdd: ej,
                  setHasAcceptedTerms: ee,
                  onInvoiceError: eb,
                  hasOpenInvoice: null != h,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: _,
                  referralTrialOfferId: R,
                  isTrial: eg || (null != s && null != d),
                  trialId: ey,
                  isDiscount: eL,
              });
    let eY = (0, r.jsx)(L.A, {
            premiumSubscription: B ?? null,
            setPurchaseState: X,
            onBack: eG,
            onNext: eN,
            legalTermsNodeRef: eR,
            flashLegalTerms: () => eE(!0),
            invoiceError: eO,
            planError: eC,
            analyticsLocation: C,
            baseAnalyticsData: I,
            flowStartTime: j.startTime,
            trialId: ey,
            planGroup: eB,
            openInvoiceId: h,
            backButtonEligible: ek,
            metadata: ev,
            isTrial: eg,
            disablePurchase: eV,
            onPaymentSourceAdd: eF,
        }),
        eW = i.useMemo(
            () =>
                V
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(S.Z, { giftMessage: e_ }),
                              !ew && (0, r.jsx)(D.A, { isEligibleForTrial: eg }),
                          ],
                      }),
            [e_, ew, eg, V],
        ),
        eK = i.useMemo(
            () =>
                V
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(v.A, {})],
                      }),
            [V],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [eW, (0, r.jsxs)(w.dZ, { children: [eK, t] }), (0, r.jsx)(w.UX, { children: eY })],
    });
}
