n.d(t, {
    A: () => X,
    L: () => q,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
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
    b = n(156312),
    y = n(566980),
    O = n(62590),
    A = n(800471),
    v = n(104745),
    S = n(216641),
    I = n(351906),
    T = n(615405),
    C = n(97352),
    N = n(79387),
    R = n(67480),
    w = n(45938),
    P = n(927578),
    D = n(242874),
    x = n(543767),
    L = n(735164),
    j = n(778307),
    M = n(75825),
    k = n(218075),
    U = n(446929),
    G = n(344159),
    V = n(285719),
    F = n(299301),
    B = n(788868),
    H = n(88001),
    Y = n(818348),
    W = n(519412),
    K = n(985018),
    z = n(982571);
let q = (e) => {
    var t, n;
    let {
            selectedPlanId: r,
            paymentSources: a,
            priceOptions: s,
            trialId: o,
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
            startedPaymentFlowWithPaymentSourcesRef: T,
            setInvoicePreview: N,
            contextMetadata: D,
            inReverseTrial: L,
            setPurchasePreviewError: j,
            hasPaymentSources: M,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: V,
            isEligibleForDiscount: F,
        } = (0, b.P5)(),
        { isGift: H, giftRecipient: Y, selectedGiftStyle: W } = (0, E.Pv)(),
        K = (0, u.bG)([C.A], () => C.A.get(r));
    l()(null != K, "Missing plan");
    let z = [
            {
                planId: K.id,
                quantity: 1,
            },
        ],
        q = d === y.h.PURCHASING || d === y.h.COMPLETED,
        X = null != h ? h : "",
        Z = (0, u.bG)([R.A], () => R.A.get(X), [X]),
        Q = null == Z ? void 0 : Z.eligiblePaymentGateways,
        [$, J] = (0, x.Kq)({
            items: z,
            renewal: !1,
            preventFetch: L || H || q,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            trialId: o,
            metadata: c,
        }),
        [ee, et] = (0, x.Kq)({
            subscriptionId: null == _ ? void 0 : _.id,
            items: z,
            renewal: !0,
            preventFetch: H || q,
            trialId: o,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            metadata: c,
        }),
        [en, er] = (0, x.Kq)({
            items: [
                {
                    planId: B.gD.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !F,
            trialId: o,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            metadata: c,
        }),
        [ei, ea] = (0, x.FP)({
            paymentSourceId: s.paymentSourceId,
            skuId: h,
            subscriptionPlanId: r,
            currency: s.currency,
            preventFetch: !H || q,
            loadId: D.loadId,
        }),
        es = H && (0, w.Ik)(Y),
        eo = null != (t = null != (n = null != J ? J : et) ? n : er) ? t : ea;
    i.useEffect(() => {
        j(eo);
    }, [eo, j]);
    let el = (0, u.bG)([I.A], () => I.A.enabled),
        ec = s.paymentSourceId,
        eu = (0, S.g)(a, ec),
        { hasEntitlements: ed, entitlements: ef } = (0, G.X)(K.id, H),
        ep = (0, P.J$)(s.paymentSourceId),
        e_ = (0, O.$o)(o, ec, r),
        eh = (0, A.vT)({
            isTrial: f,
            isGift: H,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: T.current,
            inReverseTrial: L,
        }),
        [em, eg] = i.useState(null == $ ? void 0 : $.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == em && eg(null == $ ? void 0 : $.subscriptionPeriodEnd);
    }, [null == $ ? void 0 : $.subscriptionPeriodEnd, em]);
    let eE = (0, g.A)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        eb = !eh && eE.isFractionalPremiumActive && B.JM.has(r),
        ey = i.useMemo(
            () =>
                (0, P.Tm)({
                    skuId: h,
                    isPremium: v,
                    multiMonthPlans: [],
                    currentSubscription: _,
                    defaultPlanId: m,
                }),
            [h, _, m, v],
        ),
        eO = (0, A.UB)(eh, $, K),
        eA = i.useMemo(() => (f && null != $ ? $ : L && null != ee ? ee : void 0), [L, f, $, ee]);
    return (
        i.useEffect(() => {
            H ? N(ei) : N($);
        }, [H, N, ei, $]),
        {
            disabled: q,
            activeSubscription: _,
            subscriptionPeriodEnd: em,
            plan: K,
            premiumPlanOptions: ey,
            discountInvoicePreview: en,
            oneTimePurchaseNitroGiftInvoicePreview: ei,
            trialInvoicePreview: eA,
            proratedInvoicePreview: $,
            renewalInvoicePreview: ee,
            error: eo,
            isGift: H,
            isEmbeddedIAP: p,
            paymentSourceType: eu,
            hidePersonalInformation: el,
            giftRecipient: Y,
            selectedGiftStyle: W,
            isInOneStepSubscriptionCheckout: eh,
            enableNoPaymentTrial: e_,
            hasPaymentSources: M,
            paymentSourceId: ec,
            eligiblePaymentGateways: Q,
            inReverseTrial: L,
            fractionalPremiumInfo: eE,
            planSwitchLoading: eO,
            showFractionalPremiumBanner: eb,
            isPrepaid: ep,
            isCustomGift: es,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: V,
            isEligibleForDiscount: F,
            hasEntitlements: ed,
            entitlements: ef,
        }
    );
};
function X(e) {
    var t;
    let {
            selectedPlanId: n,
            planGroup: i,
            paymentSources: a,
            priceOptions: o,
            currencies: l,
            onCurrencyChange: u,
            onPaymentSourceChange: g,
            handlePaymentSourceAdd: E,
            setHasAcceptedTerms: b,
            legalTermsNodeRef: y,
            hasLegalTermsFlash: O,
            trialId: A,
            trialFooterMessageOverride: S,
            reviewWarningMessage: I,
            metadata: C,
            purchaseState: R,
            hideSubscriptionDetails: w,
            referralTrialOfferId: x,
            isTrial: G = !1,
            isDiscount: B = !1,
            handleClose: X,
        } = e,
        {
            activeSubscription: Z,
            disabled: Q,
            isEmbeddedIAP: $,
            paymentSourceType: J,
            hidePersonalInformation: ee,
            giftRecipient: et,
            selectedGiftStyle: en,
            discountInvoicePreview: er,
            subscriptionPeriodEnd: ei,
            premiumPlanOptions: ea,
            isInOneStepSubscriptionCheckout: es,
            enableNoPaymentTrial: eo,
            hasPaymentSources: el,
            paymentSourceId: ec,
            eligiblePaymentGateways: eu,
            inReverseTrial: ed,
            fractionalPremiumInfo: ef,
            plan: ep,
            error: e_,
            isGift: eh,
            oneTimePurchaseNitroGiftInvoicePreview: em,
            trialInvoicePreview: eg,
            proratedInvoicePreview: eE,
            renewalInvoicePreview: eb,
            planSwitchLoading: ey,
            showFractionalPremiumBanner: eO,
            isPrepaid: eA,
            isCustomGift: ev,
            enablePremiumBrandRefresh: eS,
            premiumBrandRefreshBackgroundClassName: eI,
            isPremiumGroupPurchase: eT,
            isEligibleForDiscount: eC,
            hasEntitlements: eN,
            entitlements: eR,
        } = q({
            selectedPlanId: n,
            paymentSources: a,
            priceOptions: o,
            trialId: A,
            metadata: C,
            purchaseState: R,
            isTrial: G,
        }),
        ew = (0, F.yf)({
            error: e_,
            isGift: eh,
            oneTimePurchaseNitroGiftInvoicePreview: em,
            trialInvoicePreview: eg,
            proratedInvoicePreview: eE,
            renewalInvoicePreview: eb,
            planSwitchLoading: ey,
        });
    if (null != ew && ew.type === F.N$.LOADING)
        return (0, r.jsx)("div", {
            className: z.zp,
            children: (0, r.jsx)(f.y$y, {}),
        });
    let eP = (0, r.jsx)(F.eb, {
            invoiceSummaryTypeWithPreview: ew,
            priceOptions: o,
            trialFooterMessageOverride: S,
            hideSubscriptionDetails: w,
            referralTrialOfferId: x,
            isTrial: G,
            inReverseTrial: ed,
            fractionalPremiumInfo: ef,
            plan: ep,
            showFractionalPremiumBanner: eO,
            isPrepaid: eA,
            isCustomGift: ev,
            enablePremiumBrandRefresh: eS,
            premiumBrandRefreshBackgroundClassName: eI,
        }),
        eD = c.M.EEA_COUNTRIES.has(T.A.ipCountryCodeWithFallback),
        ex = K.intl.formatToPlainString(K.t["sBpy9/"], { planName: ep.name });
    eh && !ev
        ? (ex = K.intl.string(K.t.J5a0eb))
        : eh && ev
          ? (ex = "")
          : (0, P.ys)(ep.id) && (ex = P.Ay.getBillingReviewSubheader(null, ep));
    let eL = null != eu && eu.length > 0 && (ec === N.B || null === J) && el ? k.f.SELECT_PAYMENT_METHOD : void 0;
    return eo
        ? null
        : (0, r.jsxs)("div", {
              className: z.Du,
              children: [
                  (0, r.jsx)(k.j, { paymentRestrictionBannerType: eL }),
                  null != I &&
                      (0, r.jsxs)("div", {
                          className: z.Je,
                          children: [
                              (0, r.jsx)(f.mir, {
                                  size: "custom",
                                  color: d.A.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(f.Text, {
                                  className: z.CJ,
                                  variant: "text-sm/normal",
                                  children: I,
                              }),
                          ],
                      }),
                  eT &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-md/medium",
                                  children: K.intl.formatToPlainString(W.default["h1i+H8"], {
                                      premiumGroupProductName: (0, H.DP)(),
                                      cooldownMonths: H.wl,
                                  }),
                              }),
                              (0, r.jsx)(L.pK, {}),
                          ],
                      }),
                  es &&
                      !eT &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(L.pK, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(v.P, {
                                  planSkuId: null == ep ? void 0 : ep.skuId,
                                  referralTrialOfferId: x,
                              }),
                              (0, r.jsx)(U.$, {
                                  planOptions: ea,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: n,
                                  planGroup: i,
                                  subscriptionPeriodEnd: ei,
                                  showTotal: !1,
                                  discountInvoiceItems: eC ? (null == er ? void 0 : er.invoiceItems) : void 0,
                                  handleClose: X,
                              }),
                              (0, r.jsx)(L.pK, {}),
                          ],
                      }),
                  ed &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: z.KB,
                          children: K.intl.format(K.t["7ZS2m1"], { trialEnd: null == Z ? void 0 : Z.currentPeriodEnd }),
                      }),
                  !G &&
                      "" !== ex &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          className: z.wx,
                          children: ex,
                      }),
                  ev &&
                      null != en &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(M.A, {
                                  defaultAnimationState: D.oA.LOOP,
                                  giftStyle: en,
                                  shouldAnimate: !0,
                                  className: z.Os,
                              }),
                              (0, r.jsx)(V.Z, { giftRecipient: et }),
                          ],
                      }),
                  eP,
                  (0, r.jsxs)("div", {
                      className: z.LC,
                      children: [
                          (0, r.jsx)(h.Ay, {
                              label: G ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: ec,
                              prependOption:
                                  eN && !G
                                      ? {
                                            label: K.intl.string(K.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: g,
                              onPaymentSourceAdd: E,
                              hidePersonalInformation: ee,
                              isTrial: G,
                              paymentGatewayRestrictions: eu,
                              className: s()({ [z.E4]: eS }),
                          }),
                          eN && null == ec
                              ? (0, r.jsx)("div", {
                                    className: z.QN,
                                    children: K.intl.format(K.t["2wPRSF"], { months: eR.length }),
                                })
                              : null,
                          B
                              ? null
                              : (0, r.jsx)(p.f, {
                                    currencies: l,
                                    className: z.p2,
                                    children: (0, r.jsx)(p.A, {
                                        label: K.intl.string(K.t["/AAR02"]),
                                        selectedCurrency: o.currency,
                                        currencies: l,
                                        onChange: u,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(j.A, {
                      isActive: O,
                      ref: y,
                      children: (0, r.jsx)(m.A, {
                          onChange: b,
                          forceShow: !0,
                          finePrint:
                              null != (t = !ed && S)
                                  ? t
                                  : (0, r.jsx)(_.A, {
                                        hide: G || B,
                                        subscriptionPlan: ep,
                                        renewalInvoice: eb,
                                        isGift: eh,
                                        paymentSourceType: J,
                                        isEmbeddedIAP: $,
                                        basePrice: (0, P.y8)(ep.id, !1, eh, o),
                                    }),
                          showPricingLink: ep.currency !== Y.Yr.USD,
                          showWithdrawalWaiver: eD,
                          disabled: Q,
                          isTrial: G && null == S,
                          inReverseTrial: ed,
                          isDiscount: B,
                          subscriptionPlan: ep,
                          isGift: eh,
                      }),
                  }),
              ],
          });
}
