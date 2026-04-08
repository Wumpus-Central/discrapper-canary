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
            handlePaymentSourceAdd: I,
            setHasAcceptedTerms: T,
            onInvoiceError: S,
            hasOpenInvoice: y,
            trialFooterMessageOverride: v,
            reviewWarningMessage: N,
            referralTrialOfferId: R,
            isTrial: O,
            trialId: b,
            isDiscount: D,
        } = e;
        a()(null != c, "Expected plan to be selected");
        let L = {
                paymentSources: h,
                priceOptions: m,
                planGroup: p,
                currencies: E,
                onCurrencyChange: s,
                setHasAcceptedTerms: T,
                legalTermsNodeRef: A,
                hasLegalTermsFlash: g,
                handleClose: l,
                purchaseState: d,
            },
            w = c.id;
        if (null == n || i) {
            let e = {
                ...L,
                selectedPlanId: w,
                handlePaymentSourceAdd: I,
                trialId: b,
                trialFooterMessageOverride: v,
                reviewWarningMessage: N,
                referralTrialOfferId: R,
                isTrial: O,
                isDiscount: D,
            };
            return t ? (0, r.jsx)(C._, { ...e }) : (0, r.jsx)(_.A, { ...e });
        }
        {
            let e = {
                ...L,
                premiumSubscription: n,
                onPaymentSourceAdd: o,
                planId: w,
                onInvoiceError: S,
                invoiceError: u,
                hasOpenInvoice: y,
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
            setPurchaseState: Z,
            purchaseState: X,
            isPremium: Q,
            setHasAcceptedTerms: J,
            purchaseType: ee,
            setEntitlementsGranted: et,
            setAppliedUserDiscounts: en,
            startedPaymentFlowWithPaymentSourcesRef: er,
            disablePurchasesForStorybook: ei,
            isPremiumGroupPurchase: es,
            isEligibleForDiscount: ea,
            discountOffer: eo,
        } = (0, E.P5)(),
        el = (0, A.A)(),
        eu = (0, T.bB)(),
        { isGift: ec, giftMessage: ed, giftRecipient: e_, claimableRewards: ef } = (0, m.Pv)();
    a()(null != eu, "Step should be set");
    let ep = i.useRef(null),
        [eh, em] = (0, l.A)(!1, k),
        { isEligibleForTrial: eE, planGroup: eg, disablePurchase: eA, userTrialOffer: eI } = U(),
        eT = s ?? R ?? null,
        eS = null != eT && (!Q || M.TP[eT].skus.includes(z)) ? eT : null,
        ey = { user_trial_offer_id: eI?.id };
    i.useEffect(() => {
        null != $ && null != ep.current && ep.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let ev = i.useCallback(
            (e, t, r) => {
                H(e),
                    null != t && et(t),
                    null != r && en(r),
                    n(g.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, H, et, en],
        ),
        eN = null,
        eC = i.useRef(null),
        [eR, eO] = i.useState(null),
        eb = eo?.discount?.plan_ids,
        eD = ea && null != eo && null != eb && null != el && eb.includes(el.id),
        eL = ec && (0, p.Ik)(e_),
        ew = null == O && null == b && ee === x.VV.SUBSCRIPTION,
        eM = (0, N.vT)({ isTrial: eE, isGift: ec, selectedSkuId: z, startedPaymentFlowWithPaymentSources: er.current }),
        ex = ec && ee === x.VV.ONE_TIME,
        eP = ex || (eM ? ew && Q : Q),
        ek = (0, c.px)(el, ec, ef),
        eU = i.useCallback(
            () =>
                (q(void 0), eM)
                    ? void n(g.pn.SKU_SELECT)
                    : es
                      ? void n(g.pn.ADD_PAYMENT_STEPS)
                      : ek
                        ? void n(g.pn.SELECT_FREE_SKU)
                        : ex
                          ? n(g.pn.GIFT_CUSTOMIZATION)
                          : n(g.pn.PLAN_SELECT),
            [q, n, eM, ex, ek, es],
        ),
        eG = () => {
            n(g.pn.ADD_PAYMENT_STEPS);
        },
        eF = eA;
    ei && (eF = !0);
    let eV = f ?? eg,
        eB = i.useCallback(() => {
            n(g.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        ee === x.VV.ONE_TIME
            ? (0, r.jsx)(G, {
                  isUnifiedCheckoutUIEnabled: V,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  handlePaymentSourceAdd: eB,
              })
            : (0, r.jsx)(F, {
                  isUnifiedCheckoutUIEnabled: V,
                  activeSubscription: B,
                  isGift: ec,
                  onCurrencyChange: (e) => q(e),
                  onPaymentSourceAdd: eG,
                  handleClose: P,
                  invoiceError: eR,
                  selectedPlan: el,
                  purchaseState: X,
                  planGroup: eV,
                  paymentSources: W,
                  priceOptions: K,
                  currencies: Y,
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eC,
                  handlePaymentSourceAdd: eB,
                  setHasAcceptedTerms: J,
                  onInvoiceError: eO,
                  hasOpenInvoice: null != h,
                  trialFooterMessageOverride: d,
                  reviewWarningMessage: _,
                  referralTrialOfferId: R,
                  isTrial: eE || (null != s && null != d),
                  trialId: eS,
                  isDiscount: eD,
              });
    let eH = (0, r.jsx)(L.A, {
            premiumSubscription: B ?? null,
            setPurchaseState: Z,
            onBack: eU,
            onNext: ev,
            legalTermsNodeRef: eC,
            flashLegalTerms: () => em(!0),
            invoiceError: eR,
            planError: eN,
            analyticsLocation: C,
            baseAnalyticsData: I,
            flowStartTime: j.startTime,
            trialId: eS,
            planGroup: eV,
            openInvoiceId: h,
            backButtonEligible: eP,
            metadata: ey,
            isTrial: eE,
            disablePurchase: eF,
            onPaymentSourceAdd: eG,
        }),
        ej = i.useMemo(
            () =>
                V
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(S.Z, { giftMessage: ed }),
                              !eL && (0, r.jsx)(D.A, { isEligibleForTrial: eE }),
                          ],
                      }),
            [ed, eL, eE, V],
        ),
        eY = i.useMemo(
            () =>
                V
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          padding: { bottom: 8 },
                          children: [(0, r.jsx)(y.A, {}), (0, r.jsx)(v.A, {})],
                      }),
            [V],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [ej, (0, r.jsxs)(w.dZ, { children: [eY, t] }), (0, r.jsx)(w.UX, { children: eH })],
    });
}
