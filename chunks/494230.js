"use strict";
n.d(t, { A: () => $, L: () => z });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(997101),
    c = n(311907),
    d = n(827734),
    _ = n(397927),
    f = n(821189),
    p = n(821891),
    h = n(637141),
    m = n(953689),
    g = n(531260),
    E = n(937008),
    A = n(156312),
    I = n(566980),
    T = n(62590),
    y = n(800471),
    S = n(104745),
    v = n(222707),
    C = n(216641),
    b = n(351906),
    N = n(615405),
    R = n(97352),
    O = n(79387),
    D = n(67480),
    L = n(45938),
    w = n(927578),
    x = n(242874),
    P = n(543767),
    M = n(735164),
    k = n(778307),
    U = n(75825),
    G = n(218075),
    V = n(446929),
    F = n(344159),
    B = n(285719),
    j = n(299301),
    H = n(788868),
    Y = n(818348),
    W = n(985018),
    K = n(982571);
let z = (e) => {
    let {
            selectedPlanId: t,
            paymentSources: n,
            priceOptions: r,
            trialId: a,
            metadata: s,
            purchaseState: o,
            isTrial: u = !1,
        } = e,
        {
            isEmbeddedIAP: d,
            activeSubscription: _,
            selectedSkuId: f,
            defaultPlanId: p,
            isPremium: h,
            startedPaymentFlowWithPaymentSourcesRef: m,
            setInvoicePreview: S,
            contextMetadata: v,
            inReverseTrial: N,
            setPurchasePreviewError: O,
            hasPaymentSources: x,
            enablePremiumBrandRefresh: M,
            premiumBrandRefreshBackgroundClassName: k,
            isPremiumGroupPurchase: U,
            isEligibleForDiscount: G,
        } = (0, A.P5)(),
        { isGift: V, giftRecipient: B, selectedGiftStyle: j } = (0, E.Pv)(),
        Y = (0, c.bG)([R.A], () => R.A.get(t));
    l()(null != Y, "Missing plan");
    let W = [{ planId: Y.id, quantity: 1 }],
        K = o === I.h.PURCHASING || o === I.h.COMPLETED,
        z = f ?? "",
        $ = (0, c.bG)([D.A], () => D.A.get(z), [z]),
        q = $?.eligiblePaymentGateways,
        [Z, Q] = (0, P.Kq)({
            items: W,
            renewal: !1,
            preventFetch: N || V || K,
            applyEntitlements: !0,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            trialId: a,
            metadata: s,
        }),
        [X, J] = (0, P.Kq)({
            subscriptionId: _?.id,
            items: W,
            renewal: !0,
            preventFetch: V || K,
            trialId: a,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: s,
        }),
        [ee, et] = (0, P.Kq)({
            items: [{ planId: H.gD.PREMIUM_MONTH_TIER_2, quantity: 1 }],
            renewal: !0,
            preventFetch: !G,
            trialId: a,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            metadata: s,
        }),
        [en, er] = (0, P.FP)({
            paymentSourceId: r.paymentSourceId,
            skuId: f,
            subscriptionPlanId: t,
            currency: r.currency,
            preventFetch: !V || K,
            loadId: v.loadId,
        }),
        ei = V && (0, L.Ik)(B),
        ea = Q ?? J ?? et ?? er;
    i.useEffect(() => {
        O(ea);
    }, [ea, O]);
    let es = (0, c.bG)([b.A], () => b.A.enabled),
        eo = r.paymentSourceId,
        el = (0, C.g)(n, eo),
        { hasEntitlements: eu, entitlements: ec } = (0, F.X)(Y.id, V),
        ed = (0, w.J$)(r.paymentSourceId),
        e_ = (0, T.$o)(a, eo, t),
        ef = (0, y.vT)({
            isTrial: u,
            isGift: V,
            selectedSkuId: f,
            startedPaymentFlowWithPaymentSources: m.current,
            inReverseTrial: N,
        }),
        [ep, eh] = i.useState(Z?.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == ep && eh(Z?.subscriptionPeriodEnd);
    }, [Z?.subscriptionPeriodEnd, ep]);
    let em = (0, g.A)({ forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 }),
        eg = !ef && em.isFractionalPremiumActive && H.JM.has(t),
        eE = i.useMemo(
            () => (0, w.Tm)({ skuId: f, isPremium: h, multiMonthPlans: [], currentSubscription: _, defaultPlanId: p }),
            [f, _, p, h],
        ),
        eA = (0, y.UB)(ef, Z, Y),
        eI = i.useMemo(() => (u && null != Z ? Z : N && null != X ? X : void 0), [N, u, Z, X]);
    return (
        i.useEffect(() => {
            V ? S(en) : S(Z);
        }, [V, S, en, Z]),
        {
            disabled: K,
            activeSubscription: _,
            subscriptionPeriodEnd: ep,
            plan: Y,
            premiumPlanOptions: eE,
            discountInvoicePreview: ee,
            oneTimePurchaseNitroGiftInvoicePreview: en,
            trialInvoicePreview: eI,
            proratedInvoicePreview: Z,
            renewalInvoicePreview: X,
            error: ea,
            isGift: V,
            isEmbeddedIAP: d,
            paymentSourceType: el,
            hidePersonalInformation: es,
            giftRecipient: B,
            selectedGiftStyle: j,
            isInOneStepSubscriptionCheckout: ef,
            shouldAllowPlanSelect: ef && !U,
            enableNoPaymentTrial: e_,
            hasPaymentSources: x,
            paymentSourceId: eo,
            eligiblePaymentGateways: q,
            inReverseTrial: N,
            fractionalPremiumInfo: em,
            planSwitchLoading: eA,
            showFractionalPremiumBannerInInvoiceSummary: eg,
            isPrepaid: ed,
            isCustomGift: ei,
            enablePremiumBrandRefresh: M,
            premiumBrandRefreshBackgroundClassName: k,
            isPremiumGroupPurchase: U,
            isEligibleForDiscount: G,
            discountInvoiceItems: G ? ee?.invoiceItems : void 0,
            hasEntitlements: eu,
            entitlements: ec,
        }
    );
};
function $(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            paymentSources: i,
            priceOptions: a,
            currencies: o,
            onCurrencyChange: l,
            onPaymentSourceChange: c,
            handlePaymentSourceAdd: g,
            setHasAcceptedTerms: E,
            legalTermsNodeRef: A,
            hasLegalTermsFlash: I,
            trialId: T,
            trialFooterMessageOverride: y,
            reviewWarningMessage: C,
            metadata: b,
            purchaseState: R,
            hideSubscriptionDetails: D,
            referralTrialOfferId: L,
            isTrial: P = !1,
            isDiscount: F = !1,
            handleClose: H,
        } = e,
        {
            activeSubscription: $,
            disabled: q,
            isEmbeddedIAP: Z,
            paymentSourceType: Q,
            hidePersonalInformation: X,
            giftRecipient: J,
            selectedGiftStyle: ee,
            subscriptionPeriodEnd: et,
            premiumPlanOptions: en,
            shouldAllowPlanSelect: er,
            enableNoPaymentTrial: ei,
            hasPaymentSources: ea,
            paymentSourceId: es,
            eligiblePaymentGateways: eo,
            inReverseTrial: el,
            fractionalPremiumInfo: eu,
            plan: ec,
            error: ed,
            isGift: e_,
            oneTimePurchaseNitroGiftInvoicePreview: ef,
            trialInvoicePreview: ep,
            proratedInvoicePreview: eh,
            renewalInvoicePreview: em,
            planSwitchLoading: eg,
            showFractionalPremiumBannerInInvoiceSummary: eE,
            isPrepaid: eA,
            isCustomGift: eI,
            enablePremiumBrandRefresh: eT,
            premiumBrandRefreshBackgroundClassName: ey,
            isPremiumGroupPurchase: eS,
            discountInvoiceItems: ev,
            hasEntitlements: eC,
            entitlements: eb,
        } = z({
            selectedPlanId: t,
            paymentSources: i,
            priceOptions: a,
            trialId: T,
            metadata: b,
            purchaseState: R,
            isTrial: P,
        }),
        eN = (0, j.yf)({
            error: ed,
            isGift: e_,
            oneTimePurchaseNitroGiftInvoicePreview: ef,
            trialInvoicePreview: ep,
            proratedInvoicePreview: eh,
            renewalInvoicePreview: em,
            planSwitchLoading: eg,
        });
    if (null != eN && eN.type === j.N$.LOADING)
        return (0, r.jsx)("div", { className: K.zp, children: (0, r.jsx)(_.y$y, {}) });
    let eR = (0, r.jsx)(j.eb, {
            invoiceSummaryTypeWithPreview: eN,
            priceOptions: a,
            trialFooterMessageOverride: y,
            hideSubscriptionDetails: D,
            referralTrialOfferId: L,
            isTrial: P,
            inReverseTrial: el,
            fractionalPremiumInfo: eu,
            plan: ec,
            showFractionalPremiumBanner: eE,
            isPrepaid: eA,
            isCustomGift: eI,
            enablePremiumBrandRefresh: eT,
            premiumBrandRefreshBackgroundClassName: ey,
        }),
        eO = u.M.EEA_COUNTRIES.has(N.A.ipCountryCodeWithFallback),
        eD = W.intl.formatToPlainString(W.t["sBpy9/"], { planName: ec.name });
    e_ && !eI
        ? (eD = W.intl.string(W.t.J5a0eb))
        : e_ && eI
          ? (eD = "")
          : (0, w.ys)(ec.id) && (eD = w.Ay.getBillingReviewSubheader(null, ec));
    let eL = null != eo && eo.length > 0 && (es === O.B || null === Q) && ea ? G.f.SELECT_PAYMENT_METHOD : void 0;
    return ei
        ? null
        : (0, r.jsxs)("div", {
              className: K.Du,
              children: [
                  (0, r.jsx)(G.j, { paymentRestrictionBannerType: eL }),
                  null != C &&
                      (0, r.jsxs)("div", {
                          className: K.Je,
                          children: [
                              (0, r.jsx)(_.mir, {
                                  size: "custom",
                                  color: d.A.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(_.Text, { className: K.CJ, variant: "text-sm/normal", children: C }),
                          ],
                      }),
                  eS &&
                      (0, r.jsx)("div", {
                          className: K.Ni,
                          children: (0, r.jsx)(_.wx6, {
                              type: "info",
                              children: (0, r.jsx)(_.Text, { variant: "text-sm/medium", children: (0, v.Nn)() }),
                          }),
                      }),
                  er &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(M.pK, { negativeMarginTop: !0, negativeMarginBottom: !0 }),
                              (0, r.jsx)(S.P, { planSkuId: ec?.skuId, referralTrialOfferId: L }),
                              (0, r.jsx)(V.$p, {
                                  planOptions: en,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: t,
                                  planGroup: n,
                                  subscriptionPeriodEnd: et,
                                  showTotal: !1,
                                  discountInvoiceItems: ev,
                                  handleClose: H,
                              }),
                              (0, r.jsx)(M.pK, {}),
                          ],
                      }),
                  el &&
                      (0, r.jsx)(_.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: K.KB,
                          children: W.intl.format(W.t["7ZS2m1"], { trialEnd: $?.currentPeriodEnd }),
                      }),
                  !P &&
                      "" !== eD &&
                      (0, r.jsx)(_.Heading, { variant: "heading-md/semibold", className: K.wx, children: eD }),
                  eI &&
                      null != ee &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(U.A, {
                                  defaultAnimationState: x.oA.LOOP,
                                  giftStyle: ee,
                                  shouldAnimate: !0,
                                  className: K.Os,
                              }),
                              (0, r.jsx)(B.Z, { giftRecipient: J }),
                          ],
                      }),
                  eR,
                  (0, r.jsxs)("div", {
                      className: K.LC,
                      children: [
                          (0, r.jsx)(h.A, {
                              label: P ? W.intl.string(W.t["YH7B+D"]) : W.intl.string(W.t["mmDvV+"]),
                              paymentSources: Object.values(i),
                              selectedPaymentSourceId: es,
                              prependOption: eC && !P ? { label: W.intl.string(W.t.IGU7El), value: null } : null,
                              onChange: c,
                              onPaymentSourceAdd: g,
                              hidePersonalInformation: X,
                              isTrial: P,
                              paymentGatewayRestrictions: eo,
                              className: s()({ [K.E4]: eT }),
                          }),
                          eC && null == es
                              ? (0, r.jsx)("div", {
                                    className: K.QN,
                                    children: W.intl.format(W.t["2wPRSF"], { months: eb.length }),
                                })
                              : null,
                          F
                              ? null
                              : (0, r.jsx)(f.f, {
                                    currencies: o,
                                    className: K.p2,
                                    children: (0, r.jsx)(f.A, {
                                        label: W.intl.string(W.t["/AAR02"]),
                                        selectedCurrency: a.currency,
                                        currencies: o,
                                        onChange: l,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(k.A, {
                      isActive: I,
                      ref: A,
                      children: (0, r.jsx)(m.A, {
                          onChange: E,
                          forceShow: !0,
                          finePrint:
                              (!el && y) ??
                              (0, r.jsx)(p.A, {
                                  hide: P || F,
                                  subscriptionPlan: ec,
                                  renewalInvoice: em,
                                  isGift: e_,
                                  paymentSourceType: Q,
                                  isEmbeddedIAP: Z,
                                  basePrice: (0, w.y8)(ec.id, !1, e_, a),
                              }),
                          showPricingLink: ec.currency !== Y.Yr.USD,
                          showWithdrawalWaiver: eO,
                          disabled: q,
                          isTrial: P && null == y,
                          inReverseTrial: el,
                          isDiscount: F,
                          subscriptionPlan: ec,
                          isGift: e_,
                      }),
                  }),
              ],
          });
}
