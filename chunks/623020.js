"use strict";
n.d(t, { _: () => F });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
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
    E = n(937008),
    g = n(156312),
    A = n(166532),
    I = n(50956),
    T = n(921925),
    S = n(592362),
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
        T = (0, O.W)(r, n),
        S = i.useMemo(() => {
            if (null == n) return !1;
            if (!A) return !0;
            let e = h.find((e) => e.id === n);
            return null != e && !e.enabled;
        }, [h, A, n]),
        y = i.useMemo(() => {
            if (null != a) {
                if ((0, m.xq)(a.id)) return w.LE;
                if ((0, m.z4)(a.id)) return w.DA;
            }
            return [];
        }, [a]),
        v = i.useMemo(
            () =>
                u === M.VV.ONE_TIME
                    ? null == n || S || null == o || null != l
                    : null == c || (!I && null != T && u === M.VV.SUBSCRIPTION && f && !T.canRedeemTrial()),
            [u, o, n, l, c, I, T, f, S],
        ),
        N = (0, m.J$)(s.paymentSourceId),
        C =
            u === M.VV.SUBSCRIPTION && null == a
                ? x.intl.string(x.t.YScQSF)
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
let U = (e) => {
        let { isUnifiedCheckoutUIEnabled: t, ...n } = e;
        return t ? (0, r.jsx)(R.Ay, { ...n }) : (0, r.jsx)(C.Ay, { ...n });
    },
    G = (e) => {
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
            onInvoiceError: v,
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
            x = d.id;
        if (null == n || i || s) {
            let e = {
                ...M,
                selectedPlanId: x,
                handlePaymentSourceAdd: S,
                trialId: L,
                trialFooterMessageOverride: R,
                reviewWarningMessage: O,
                referralTrialOfferId: b,
                isTrial: D,
                isDiscount: w,
            };
            return t ? (0, r.jsx)(N._, { ...e }) : (0, r.jsx)(f.A, { ...e });
        }
        {
            let e = {
                ...M,
                premiumSubscription: n,
                onPaymentSourceAdd: l,
                planId: x,
                onInvoiceError: v,
                invoiceError: c,
                hasOpenInvoice: C,
            };
            return (0, r.jsx)(p.A, { ...e, shouldUseUnifiedCheckoutUI: t });
        }
    };
function F(e) {
    let t,
        {
            handleStepChange: n,
            trialId: s,
            trialFooterMessageOverride: _,
            reviewWarningMessage: f,
            planGroup: p,
            openInvoiceId: m,
            analyticsData: N,
            analyticsLocation: C,
            referralTrialOfferId: R,
            initialPlanId: O,
            subscriptionTier: F,
            handleClose: V,
        } = e,
        B = (0, u.D7)({ location: "payment_modal_review_step" }),
        {
            activeSubscription: H,
            setUpdatedSubscription: j,
            contextMetadata: Y,
            currencies: W,
            paymentSources: K,
            priceOptions: $,
            purchaseError: z,
            selectedPlan: q,
            selectedSkuId: Z,
            setCurrency: X,
            setPaymentSourceId: Q,
            setPurchaseState: J,
            step: ee,
            purchaseState: et,
            isPremium: en,
            setHasAcceptedTerms: er,
            purchaseType: ei,
            setEntitlementsGranted: es,
            setAppliedUserDiscounts: ea,
            startedPaymentFlowWithPaymentSourcesRef: eo,
            inReverseTrial: el,
            disablePurchasesForStorybook: eu,
            isPremiumGroupPurchase: ec,
            isEligibleForDiscount: ed,
            discountOffer: e_,
        } = (0, g.P5)(),
        { isGift: ef, giftMessage: ep, giftRecipient: eh, claimableRewards: em } = (0, E.Pv)();
    a()(null != ee, "Step should be set");
    let eE = i.useRef(null),
        [eg, eA] = (0, l.A)(!1, P),
        { paymentSource: eI, isEligibleForTrial: eT, planGroup: eS, disablePurchase: ey, userTrialOffer: ev } = k(),
        eN = s ?? R ?? null,
        eC = null != eN && (!en || w.TP[eN].skus.includes(Z)) ? eN : null,
        eR = { user_trial_offer_id: ev?.id };
    i.useEffect(() => {
        null != z && null != eE.current && eE.current.scrollIntoView({ behavior: "smooth" });
    }, [z]);
    let eO = i.useCallback(
            (e, t, r) => {
                j(e),
                    null != t && es(t),
                    null != r && ea(r),
                    n(A.pn.CONFIRM, { fulfillment: { subscription: e, entitlements: t } });
            },
            [n, j, es, ea],
        ),
        eb = null != q && w.Er.has(q.id) && null != eI && !(0, c.j2)(eI) ? Error(x.intl.string(x.t["2ik8ih"])) : null,
        eD = i.useRef(null),
        [eL, ew] = i.useState(null),
        eM = e_?.discount?.plan_ids,
        ex = ed && null != e_ && null != eM && null != q && eM.includes(q.id),
        eP = ef && (0, h.Ik)(eh),
        ek = null == O && null == F && ei === M.VV.SUBSCRIPTION,
        eU = (0, v.vT)({ isTrial: eT, isGift: ef, selectedSkuId: Z, startedPaymentFlowWithPaymentSources: eo.current }),
        eG = ef && ei === M.VV.ONE_TIME,
        eF = eG || (eU ? ek && en : en),
        eV = (0, d.px)(q, ef, em),
        eB = i.useCallback(
            () =>
                eU
                    ? void n(A.pn.SKU_SELECT)
                    : ec
                      ? void n(A.pn.ADD_PAYMENT_STEPS)
                      : eV
                        ? void n(A.pn.SELECT_FREE_SKU)
                        : eG
                          ? n(A.pn.GIFT_CUSTOMIZATION)
                          : n(A.pn.PLAN_SELECT),
            [n, eU, eG, eV, ec],
        ),
        eH = () => {
            n(A.pn.ADD_PAYMENT_STEPS);
        },
        ej = ey;
    eu && (ej = !0);
    let eY = p ?? eS,
        eW = i.useCallback((e) => Q(null != e ? e.id : null), [Q]),
        eK = i.useCallback(() => {
            n(A.pn.ADD_PAYMENT_STEPS);
        }, [n]);
    t =
        ei === M.VV.ONE_TIME
            ? (0, r.jsx)(U, {
                  isUnifiedCheckoutUIEnabled: B,
                  hasLegalTermsFlash: eg,
                  legalTermsNodeRef: eD,
                  onPaymentSourceChange: eW,
                  handlePaymentSourceAdd: eK,
              })
            : (0, r.jsx)(G, {
                  isUnifiedCheckoutUIEnabled: B,
                  activeSubscription: H,
                  inReverseTrial: el,
                  isGift: ef,
                  onCurrencyChange: (e) => X(e),
                  onPaymentSourceAdd: eH,
                  handleClose: V,
                  invoiceError: eL,
                  selectedPlan: q,
                  purchaseState: et,
                  planGroup: eY,
                  paymentSources: K,
                  priceOptions: $,
                  currencies: W,
                  hasLegalTermsFlash: eg,
                  legalTermsNodeRef: eD,
                  onPaymentSourceChange: eW,
                  handlePaymentSourceAdd: eK,
                  setHasAcceptedTerms: er,
                  onInvoiceError: ew,
                  hasOpenInvoice: null != m,
                  trialFooterMessageOverride: _,
                  reviewWarningMessage: f,
                  referralTrialOfferId: R,
                  isTrial: eT || (null != s && null != _),
                  trialId: eC,
                  isDiscount: ex,
              });
    let e$ = (0, r.jsx)(D.A, {
            premiumSubscription: H ?? null,
            setPurchaseState: J,
            onBack: eB,
            onNext: eO,
            legalTermsNodeRef: eD,
            flashLegalTerms: () => eA(!0),
            invoiceError: eL,
            planError: eb,
            analyticsLocation: C,
            baseAnalyticsData: N,
            flowStartTime: Y.startTime,
            trialId: eC,
            planGroup: eY,
            openInvoiceId: m,
            backButtonEligible: eF,
            metadata: eR,
            isTrial: eT,
            disablePurchase: ej,
            onPaymentSourceAdd: eH,
        }),
        ez = i.useMemo(
            () =>
                B
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(I.Z, { giftMessage: ep }),
                              !eP && (0, r.jsx)(b.A, { isEligibleForTrial: eT }),
                          ],
                      }),
            [ep, eP, eT, B],
        ),
        eq = i.useMemo(
            () =>
                B
                    ? null
                    : (0, r.jsxs)(o.BJc, {
                          direction: "vertical",
                          gap: 8,
                          children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(T.A, {}), (0, r.jsx)(y.A, {})],
                      }),
            [B],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [ez, (0, r.jsxs)(L.dZ, { children: [eq, t] }), (0, r.jsx)(L.UX, { children: e$ })],
    });
}
