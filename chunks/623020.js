"use strict";
n.d(t, { _: () => G });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(397927),
    l = n(304072),
    u = n(742810),
    c = n(666468),
    d = n(810498),
    _ = n(367921),
    f = n(271849),
    p = n(369280),
    h = n(45938),
    m = n(927578),
    E = n(937008),
    g = n(156312),
    A = n(166532),
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
let P = 500;
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
            inReverseTrial: d,
            isEligibleForTrial: f,
            userTrialOffer: p,
            checkoutPaymentSources: h,
            hasCheckoutContextLoaded: A,
        } = (0, g.P5)(),
        { isGift: I } = (0, E.Pv)(),
        T = (0, R.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!A) return !0;
            let e = h.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [h, A, n]),
        y = i.useMemo(() => {
            if (null != a) {
                if ((0, m.xq)(a.id)) return L.LE;
                if ((0, m.z4)(a.id)) return L.DA;
            }
            return [];
        }, [a]),
        v = i.useMemo(
            () =>
                u === w.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!I && null != T && u === w.VV.SUBSCRIPTION && f && !T.canRedeemTrial()),
            [u, o, n, l, c, I, T, f, S],
        ),
        N = (0, m.J$)(s.paymentSourceId),
        C =
            u === w.VV.SUBSCRIPTION && null == a
                ? M.intl.string(M.t.YScQSF)
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
let k = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(C.Ay, { ...n }) : (0, r.jsx)(N.Ay, { ...n });
    },
    U = (e) => {
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
            purchaseState: _,
            planGroup: h,
            paymentSources: m,
            priceOptions: E,
            currencies: g,
            hasLegalTermsFlash: A,
            legalTermsNodeRef: I,
            onPaymentSourceChange: T,
            handlePaymentSourceAdd: S,
            setHasAcceptedTerms: y,
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
                setHasAcceptedTerms: y,
                legalTermsNodeRef: I,
                hasLegalTermsFlash: A,
                handleClose: u,
                purchaseState: _,
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
            return t ? (0, r.jsx)(v._, { ...e }) : (0, r.jsx)(f.A, { ...e });
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
            return (0, r.jsx)(p.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    };
function G(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: _,
            reviewWarningMessage: f,
            planGroup: p,
            openInvoiceId: m,
            analyticsData: v,
            analyticsLocation: N,
            referralTrialOfferId: C,
            initialPlanId: R,
            subscriptionTier: G,
            handleClose: F,
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
            selectedPlan: z,
            selectedSkuId: q,
            setCurrency: Z,
            setPaymentSourceId: X,
            setPurchaseState: Q,
            step: J,
            purchaseState: ee,
            isPremium: et,
            setHasAcceptedTerms: en,
            purchaseType: er,
            setEntitlementsGranted: ei,
            setAppliedUserDiscounts: es,
            startedPaymentFlowWithPaymentSourcesRef: ea,
            inReverseTrial: eo,
            disablePurchasesForStorybook: el,
            isPremiumGroupPurchase: eu,
            isEligibleForDiscount: ec,
            discountOffer: ed,
        } = (0, g.P5)(),
        { isGift: e_, giftMessage: ef, giftRecipient: ep, claimableRewards: eh } = (0, E.Pv)();
    a()(null != J, "Step should be set");
    let em = i.useRef(null),
        [eE, eg] = (0, l.A)(!1, P),
        { paymentSource: eA, isEligibleForTrial: eI, planGroup: eT, disablePurchase: eS, userTrialOffer: ey } = x(),
        ev = s ?? C ?? null,
        eN = null != ev && (!et || L.TP[ev].skus.includes(q)) ? ev : null,
        eC = { user_trial_offer_id: ey?.id };
    i.useEffect(() => {
        null != $ && null != em.current && em.current.scrollIntoView({ behavior: "smooth" });
    }, [$]);
    let eR = i.useCallback(
            (e, t, r) => {
                H(e),
                    null != t && ei(t),
                    null != r && es(r),
                    n(A.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, H, ei, es],
        ),
        eO = null != z && L.Er.has(z.id) && null != eA && !(0, c.j2)(eA) ? Error(M.intl.string(M.t["2ik8ih"])) : null,
        eb = i.useRef(null),
        [eD, eL] = i.useState(null),
        ew = ed?.discount?.plan_ids,
        eM = ec && null != ed && null != ew && null != z && ew.includes(z.id),
        eP = e_ && (0, h.Ik)(ep),
        ex = null == R && null == G && er === w.VV.SUBSCRIPTION,
        ek = (0, y.vT)({ isTrial: eI, isGift: e_, selectedSkuId: q, startedPaymentFlowWithPaymentSources: ea.current }),
        eU = e_ && er === w.VV.ONE_TIME,
        eG = eU || (ek ? ex && et : et),
        eF = (0, d.px)(z, e_, eh),
        eV = i.useCallback(
            () =>
                (Z(void 0), ek)
                    ? void n(A.pn.SKU_SELECT)
                    : eu
                      ? void n(A.pn.ADD_PAYMENT_STEPS)
                      : eF
                        ? void n(A.pn.SELECT_FREE_SKU)
                        : eU
                          ? n(A.pn.GIFT_CUSTOMIZATION)
                          : n(A.pn.PLAN_SELECT),
            [Z, n, ek, eU, eF, eu],
        ),
        eB = () => {
            n(A.pn.ADD_PAYMENT_STEPS);
        },
        eH = eS;
    el && (eH = !0);
    let ej = p ?? eT,
        eY = i.useCallback((e) => X(null != e ? e.id : null), [X]),
        eW = i.useCallback(() => {
            n(A.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        er === w.VV.ONE_TIME
            ? (0, r.jsx)(k, {
                  isUnifiedCheckoutUIEnabled: V,
                  hasLegalTermsFlash: eE,
                  legalTermsNodeRef: eb,
                  onPaymentSourceChange: eY,
                  handlePaymentSourceAdd: eW,
              })
            : (0, r.jsx)(U, {
                  isUnifiedCheckoutUIEnabled: V,
                  activeSubscription: B,
                  inReverseTrial: eo,
                  isGift: e_,
                  onCurrencyChange: (e) => Z(e),
                  onPaymentSourceAdd: eB,
                  handleClose: F,
                  invoiceError: eD,
                  selectedPlan: z,
                  purchaseState: ee,
                  planGroup: ej,
                  paymentSources: W,
                  priceOptions: K,
                  currencies: Y,
                  hasLegalTermsFlash: eE,
                  legalTermsNodeRef: eb,
                  onPaymentSourceChange: eY,
                  handlePaymentSourceAdd: eW,
                  setHasAcceptedTerms: en,
                  onInvoiceError: eL,
                  hasOpenInvoice: null != m,
                  trialFooterMessageOverride: _,
                  reviewWarningMessage: f,
                  referralTrialOfferId: C,
                  isTrial: eI || (null != s && null != _),
                  trialId: eN,
                  isDiscount: eM,
              });
    let eK = (0, r.jsx)(b.A, {
            premiumSubscription: B ?? null,
            setPurchaseState: Q,
            onBack: eV,
            onNext: eR,
            legalTermsNodeRef: eb,
            flashLegalTerms: () => eg(!0),
            invoiceError: eD,
            planError: eO,
            analyticsLocation: N,
            baseAnalyticsData: v,
            flowStartTime: j.startTime,
            trialId: eN,
            planGroup: ej,
            openInvoiceId: m,
            backButtonEligible: eG,
            metadata: eC,
            isTrial: eI,
            disablePurchase: eH,
            onPaymentSourceAdd: eB,
        }),
        e$ = i.useMemo(
            () =>
                V
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(I.Z, { giftMessage: ef }),
                              !eP && (0, r.jsx)(O.A, { isEligibleForTrial: eI }),
                          ],
                      }),
            [ef, eP, eI, V],
        ),
        ez = i.useMemo(
            () =>
                V
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [(0, r.jsx)(T.A, {}), (0, r.jsx)(S.A, {})],
                      }),
            [V],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [e$, (0, r.jsxs)(D.dZ, { children: [ez, t] }), (0, r.jsx)(D.UX, { children: eK })],
    });
}
