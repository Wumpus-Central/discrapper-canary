n.d(t, {
    A: () => q,
    L: () => z,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(284009),
    l = n.n(s),
    c = n(997101),
    u = n(311907),
    d = n(827734),
    f = n(397927),
    p = n(821189),
    _ = n(821891),
    h = n(637141),
    m = n(953689),
    g = n(531260),
    E = n(937008),
    y = n(156312),
    b = n(566980),
    O = n(62590),
    v = n(210507),
    A = n(800471),
    I = n(104745),
    S = n(216641),
    T = n(351906),
    C = n(615405),
    N = n(97352),
    w = n(79387),
    R = n(67480),
    P = n(45938),
    D = n(927578),
    L = n(242874),
    x = n(543767),
    M = n(735164),
    j = n(778307),
    k = n(75825),
    U = n(218075),
    G = n(446929),
    F = n(344159),
    V = n(285719),
    B = n(299301),
    H = n(788868),
    Y = n(818348),
    W = n(985018),
    K = n(982571);
let z = (e) => {
    var t, n;
    let {
            selectedPlanId: r,
            paymentSources: a,
            priceOptions: o,
            trialId: s,
            metadata: c,
            purchaseState: d,
            isTrial: f = !1,
        } = e,
        {
            isEmbeddedIAP: p,
            activeSubscription: _,
            selectedSkuId: h,
            defaultPlanId: m,
            isPremium: v,
            startedPaymentFlowWithPaymentSourcesRef: I,
            setInvoicePreview: C,
            contextMetadata: w,
            inReverseTrial: L,
            setPurchasePreviewError: M,
            hasPaymentSources: j,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: G,
            isEligibleForDiscount: V,
        } = (0, y.P5)(),
        { isGift: B, giftRecipient: Y, selectedGiftStyle: W } = (0, E.Pv)(),
        K = (0, u.bG)([N.A], () => N.A.get(r));
    l()(null != K, "Missing plan");
    let z = [
            {
                planId: K.id,
                quantity: 1,
            },
        ],
        q = d === b.h.PURCHASING || d === b.h.COMPLETED,
        Z = null != h ? h : "",
        Q = (0, u.bG)([R.A], () => R.A.get(Z), [Z]),
        X = null == Q ? void 0 : Q.eligiblePaymentGateways,
        [J, $] = (0, x.Kq)({
            items: z,
            renewal: !1,
            preventFetch: L || B || q,
            applyEntitlements: !0,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            trialId: s,
            metadata: c,
        }),
        [ee, et] = (0, x.Kq)({
            subscriptionId: null == _ ? void 0 : _.id,
            items: z,
            renewal: !0,
            preventFetch: B || q,
            trialId: s,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            metadata: c,
        }),
        [en, er] = (0, x.Kq)({
            items: [
                {
                    planId: H.gD.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !V,
            trialId: s,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            metadata: c,
        }),
        [ei, ea] = (0, x.FP)({
            paymentSourceId: o.paymentSourceId,
            skuId: h,
            subscriptionPlanId: r,
            currency: o.currency,
            preventFetch: !B || q,
            loadId: w.loadId,
        }),
        eo = B && (0, P.Ik)(Y),
        es = null != (t = null != (n = null != $ ? $ : et) ? n : er) ? t : ea;
    i.useEffect(() => {
        M(es);
    }, [es, M]);
    let el = (0, u.bG)([T.A], () => T.A.enabled),
        ec = o.paymentSourceId,
        eu = (0, S.g)(a, ec),
        { hasEntitlements: ed, entitlements: ef } = (0, F.X)(K.id, B),
        ep = (0, D.J$)(o.paymentSourceId),
        e_ = (0, O.$o)(s, ec, r),
        eh = (0, A.vT)({
            isTrial: f,
            isGift: B,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: I.current,
            inReverseTrial: L,
        }),
        [em, eg] = i.useState(null == J ? void 0 : J.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == em && eg(null == J ? void 0 : J.subscriptionPeriodEnd);
    }, [null == J ? void 0 : J.subscriptionPeriodEnd, em]);
    let eE = (0, g.A)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        ey = !eh && eE.isFractionalPremiumActive && H.JM.has(r),
        eb = i.useMemo(
            () =>
                (0, D.Tm)({
                    skuId: h,
                    isPremium: v,
                    multiMonthPlans: [],
                    currentSubscription: _,
                    defaultPlanId: m,
                }),
            [h, _, m, v],
        ),
        eO = (0, A.UB)(eh, J, K),
        ev = i.useMemo(() => (f && null != J ? J : L && null != ee ? ee : void 0), [L, f, J, ee]);
    return (
        i.useEffect(() => {
            B ? C(ei) : C(J);
        }, [B, C, ei, J]),
        {
            disabled: q,
            activeSubscription: _,
            subscriptionPeriodEnd: em,
            plan: K,
            premiumPlanOptions: eb,
            discountInvoicePreview: en,
            oneTimePurchaseNitroGiftInvoicePreview: ei,
            trialInvoicePreview: ev,
            proratedInvoicePreview: J,
            renewalInvoicePreview: ee,
            error: es,
            isGift: B,
            isEmbeddedIAP: p,
            paymentSourceType: eu,
            hidePersonalInformation: el,
            giftRecipient: Y,
            selectedGiftStyle: W,
            isInOneStepSubscriptionCheckout: eh,
            shouldAllowPlanSelect: eh && !G,
            enableNoPaymentTrial: e_,
            hasPaymentSources: j,
            paymentSourceId: ec,
            eligiblePaymentGateways: X,
            inReverseTrial: L,
            fractionalPremiumInfo: eE,
            planSwitchLoading: eO,
            showFractionalPremiumBannerInInvoiceSummary: ey,
            isPrepaid: ep,
            isCustomGift: eo,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: G,
            isEligibleForDiscount: V,
            discountInvoiceItems: V ? (null == en ? void 0 : en.invoiceItems) : void 0,
            hasEntitlements: ed,
            entitlements: ef,
        }
    );
};

function q(e) {
    var t;
    let {
            selectedPlanId: n,
            planGroup: i,
            paymentSources: a,
            priceOptions: s,
            currencies: l,
            onCurrencyChange: u,
            onPaymentSourceChange: g,
            handlePaymentSourceAdd: E,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: b,
            hasLegalTermsFlash: O,
            trialId: A,
            trialFooterMessageOverride: S,
            reviewWarningMessage: T,
            metadata: N,
            purchaseState: R,
            hideSubscriptionDetails: P,
            referralTrialOfferId: x,
            isTrial: F = !1,
            isDiscount: H = !1,
            handleClose: q,
        } = e,
        {
            activeSubscription: Z,
            disabled: Q,
            isEmbeddedIAP: X,
            paymentSourceType: J,
            hidePersonalInformation: $,
            giftRecipient: ee,
            selectedGiftStyle: et,
            subscriptionPeriodEnd: en,
            premiumPlanOptions: er,
            shouldAllowPlanSelect: ei,
            enableNoPaymentTrial: ea,
            hasPaymentSources: eo,
            paymentSourceId: es,
            eligiblePaymentGateways: el,
            inReverseTrial: ec,
            fractionalPremiumInfo: eu,
            plan: ed,
            error: ef,
            isGift: ep,
            oneTimePurchaseNitroGiftInvoicePreview: e_,
            trialInvoicePreview: eh,
            proratedInvoicePreview: em,
            renewalInvoicePreview: eg,
            planSwitchLoading: eE,
            showFractionalPremiumBannerInInvoiceSummary: ey,
            isPrepaid: eb,
            isCustomGift: eO,
            enablePremiumBrandRefresh: ev,
            premiumBrandRefreshBackgroundClassName: eA,
            isPremiumGroupPurchase: eI,
            discountInvoiceItems: eS,
            hasEntitlements: eT,
            entitlements: eC,
        } = z({
            selectedPlanId: n,
            paymentSources: a,
            priceOptions: s,
            trialId: A,
            metadata: N,
            purchaseState: R,
            isTrial: F,
        }),
        eN = (0, B.yf)({
            error: ef,
            isGift: ep,
            oneTimePurchaseNitroGiftInvoicePreview: e_,
            trialInvoicePreview: eh,
            proratedInvoicePreview: em,
            renewalInvoicePreview: eg,
            planSwitchLoading: eE,
        });
    if (null != eN && eN.type === B.N$.LOADING)
        return (0, r.jsx)("div", {
            className: K.zp,
            children: (0, r.jsx)(f.y$y, {}),
        });
    let ew = (0, r.jsx)(B.eb, {
            invoiceSummaryTypeWithPreview: eN,
            priceOptions: s,
            trialFooterMessageOverride: S,
            hideSubscriptionDetails: P,
            referralTrialOfferId: x,
            isTrial: F,
            inReverseTrial: ec,
            fractionalPremiumInfo: eu,
            plan: ed,
            showFractionalPremiumBanner: ey,
            isPrepaid: eb,
            isCustomGift: eO,
            enablePremiumBrandRefresh: ev,
            premiumBrandRefreshBackgroundClassName: eA,
        }),
        eR = c.M.EEA_COUNTRIES.has(C.A.ipCountryCodeWithFallback),
        eP = W.intl.formatToPlainString(W.t["sBpy9/"], {
            planName: ed.name,
        });
    ep && !eO
        ? (eP = W.intl.string(W.t.J5a0eb))
        : ep && eO
          ? (eP = "")
          : (0, D.ys)(ed.id) && (eP = D.Ay.getBillingReviewSubheader(null, ed));
    let eD = null != el && el.length > 0 && (es === w.B || null === J) && eo ? U.f.SELECT_PAYMENT_METHOD : void 0;
    return ea
        ? null
        : (0, r.jsxs)("div", {
              className: K.Du,
              children: [
                  (0, r.jsx)(U.j, {
                      paymentRestrictionBannerType: eD,
                  }),
                  null != T &&
                      (0, r.jsxs)("div", {
                          className: K.Je,
                          children: [
                              (0, r.jsx)(f.mir, {
                                  size: "custom",
                                  color: d.A.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(f.Text, {
                                  className: K.CJ,
                                  variant: "text-sm/normal",
                                  children: T,
                              }),
                          ],
                      }),
                  eI &&
                      (0, r.jsx)("div", {
                          className: K.Ni,
                          children: (0, r.jsx)(f.wx6, {
                              type: "info",
                              children: (0, r.jsx)(f.Text, {
                                  variant: "text-sm/medium",
                                  children: (0, v.Nn)(),
                              }),
                          }),
                      }),
                  ei &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(M.pK, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(I.P, {
                                  planSkuId: null == ed ? void 0 : ed.skuId,
                                  referralTrialOfferId: x,
                              }),
                              (0, r.jsx)(G.$p, {
                                  planOptions: er,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: n,
                                  planGroup: i,
                                  subscriptionPeriodEnd: en,
                                  showTotal: !1,
                                  discountInvoiceItems: eS,
                                  handleClose: q,
                              }),
                              (0, r.jsx)(M.pK, {}),
                          ],
                      }),
                  ec &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: K.KB,
                          children: W.intl.format(W.t["7ZS2m1"], {
                              trialEnd: null == Z ? void 0 : Z.currentPeriodEnd,
                          }),
                      }),
                  !F &&
                      "" !== eP &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          className: K.wx,
                          children: eP,
                      }),
                  eO &&
                      null != et &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(k.A, {
                                  defaultAnimationState: L.oA.LOOP,
                                  giftStyle: et,
                                  shouldAnimate: !0,
                                  className: K.Os,
                              }),
                              (0, r.jsx)(V.Z, {
                                  giftRecipient: ee,
                              }),
                          ],
                      }),
                  ew,
                  (0, r.jsxs)("div", {
                      className: K.LC,
                      children: [
                          (0, r.jsx)(h.A, {
                              label: F ? W.intl.string(W.t["YH7B+D"]) : W.intl.string(W.t["mmDvV+"]),
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: es,
                              prependOption:
                                  eT && !F
                                      ? {
                                            label: W.intl.string(W.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: g,
                              onPaymentSourceAdd: E,
                              hidePersonalInformation: $,
                              isTrial: F,
                              paymentGatewayRestrictions: el,
                              className: o()({
                                  [K.E4]: ev,
                              }),
                          }),
                          eT && null == es
                              ? (0, r.jsx)("div", {
                                    className: K.QN,
                                    children: W.intl.format(W.t["2wPRSF"], {
                                        months: eC.length,
                                    }),
                                })
                              : null,
                          H
                              ? null
                              : (0, r.jsx)(p.f, {
                                    currencies: l,
                                    className: K.p2,
                                    children: (0, r.jsx)(p.A, {
                                        label: W.intl.string(W.t["/AAR02"]),
                                        selectedCurrency: s.currency,
                                        currencies: l,
                                        onChange: u,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(j.A, {
                      isActive: O,
                      ref: b,
                      children: (0, r.jsx)(m.A, {
                          onChange: y,
                          forceShow: !0,
                          finePrint:
                              null != (t = !ec && S)
                                  ? t
                                  : (0, r.jsx)(_.A, {
                                        hide: F || H,
                                        subscriptionPlan: ed,
                                        renewalInvoice: eg,
                                        isGift: ep,
                                        paymentSourceType: J,
                                        isEmbeddedIAP: X,
                                        basePrice: (0, D.y8)(ed.id, !1, ep, s),
                                    }),
                          showPricingLink: ed.currency !== Y.Yr.USD,
                          showWithdrawalWaiver: eR,
                          disabled: Q,
                          isTrial: F && null == S,
                          inReverseTrial: ec,
                          isDiscount: H,
                          subscriptionPlan: ed,
                          isGift: ep,
                      }),
                  }),
              ],
          });
}
