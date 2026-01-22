n.d(t, {
    Z: () => q,
    w: () => z,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(742280),
    u = n(442837),
    d = n(692547),
    f = n(481060),
    p = n(190947),
    _ = n(224550),
    h = n(275850),
    m = n(672971),
    g = n(975298),
    E = n(987209),
    b = n(563132),
    y = n(45572),
    O = n(919778),
    v = n(614223),
    S = n(405685),
    I = n(435020),
    T = n(246946),
    C = n(351402),
    A = n(509545),
    N = n(855775),
    P = n(55563),
    w = n(669079),
    R = n(74538),
    D = n(479446),
    x = n(374649),
    L = n(811334),
    j = n(314182),
    M = n(981632),
    k = n(396955),
    U = n(314404),
    G = n(459965),
    Z = n(251660),
    F = n(100413),
    B = n(474936),
    V = n(282793),
    H = n(231338),
    Y = n(353149),
    W = n(388032),
    K = n(400005);
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
            isPremium: S,
            startedPaymentFlowWithPaymentSourcesRef: C,
            setInvoicePreview: N,
            contextMetadata: D,
            inReverseTrial: L,
            setPurchasePreviewError: j,
            hasPaymentSources: M,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: Z,
            isEligibleForDiscount: F,
        } = (0, b.JL)(),
        { isGift: V, giftRecipient: H, selectedGiftStyle: Y } = (0, E.wD)(),
        W = (0, u.e7)([A.Z], () => A.Z.get(r));
    l()(null != W, "Missing plan");
    let K = [
            {
                planId: W.id,
                quantity: 1,
            },
        ],
        z = d === y.A.PURCHASING || d === y.A.COMPLETED,
        q = null != h ? h : "",
        Q = (0, u.e7)([P.Z], () => P.Z.get(q), [q]),
        X = null == Q ? void 0 : Q.eligiblePaymentGateways,
        [J, $] = (0, x.ED)({
            items: K,
            renewal: !1,
            preventFetch: L || V || z,
            applyEntitlements: !0,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            trialId: s,
            metadata: c,
        }),
        [ee, et] = (0, x.ED)({
            subscriptionId: null == _ ? void 0 : _.id,
            items: K,
            renewal: !0,
            preventFetch: V || z,
            trialId: s,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            metadata: c,
        }),
        [en, er] = (0, x.ED)({
            items: [
                {
                    planId: B.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1,
                },
            ],
            renewal: !0,
            preventFetch: !F,
            trialId: s,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            metadata: c,
        }),
        [ei, ea] = (0, x.o5)({
            paymentSourceId: o.paymentSourceId,
            skuId: h,
            subscriptionPlanId: r,
            currency: o.currency,
            preventFetch: !V || z,
            loadId: D.loadId,
        }),
        eo = V && (0, w.pO)(H),
        es = null != (n = null != (t = null != $ ? $ : et) ? t : er) ? n : ea;
    i.useEffect(() => {
        j(es);
    }, [es, j]);
    let el = (0, u.e7)([T.Z], () => T.Z.enabled),
        ec = o.paymentSourceId,
        eu = (0, I.$)(a, ec),
        { hasEntitlements: ed, entitlements: ef } = (0, G.H)(W.id, V),
        ep = (0, R.Ap)(o.paymentSourceId),
        e_ = (0, O.sE)(s, ec, r),
        eh = (0, v.Kp)({
            isTrial: f,
            isGift: V,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: C.current,
            inReverseTrial: L,
        }),
        [em, eg] = i.useState(null == J ? void 0 : J.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == em && eg(null == J ? void 0 : J.subscriptionPeriodEnd);
    }, [null == J ? void 0 : J.subscriptionPeriodEnd, em]);
    let eE = (0, g.Z)({
            forceFetch: !1,
            excludeReverseTrial: !1,
            excludeReverseTrialFromCountdown: !0,
        }),
        eb = !eh && eE.isFractionalPremiumActive && B.dJ.has(r),
        ey = i.useMemo(
            () =>
                (0, R.V7)({
                    skuId: h,
                    isPremium: S,
                    multiMonthPlans: [],
                    currentSubscription: _,
                    defaultPlanId: m,
                }),
            [h, _, m, S],
        ),
        eO = (0, v.$g)(eh, J, W),
        ev = i.useMemo(() => (f && null != J ? J : L && null != ee ? ee : void 0), [L, f, J, ee]);
    return (
        i.useEffect(() => {
            V ? N(ei) : N(J);
        }, [V, N, ei, J]),
        {
            disabled: z,
            activeSubscription: _,
            subscriptionPeriodEnd: em,
            plan: W,
            premiumPlanOptions: ey,
            discountInvoicePreview: en,
            oneTimePurchaseNitroGiftInvoicePreview: ei,
            trialInvoicePreview: ev,
            proratedInvoicePreview: J,
            renewalInvoicePreview: ee,
            error: es,
            isGift: V,
            isEmbeddedIAP: p,
            paymentSourceType: eu,
            hidePersonalInformation: el,
            giftRecipient: H,
            selectedGiftStyle: Y,
            isInOneStepSubscriptionCheckout: eh,
            enableNoPaymentTrial: e_,
            hasPaymentSources: M,
            paymentSourceId: ec,
            eligiblePaymentGateways: X,
            inReverseTrial: L,
            fractionalPremiumInfo: eE,
            planSwitchLoading: eO,
            showFractionalPremiumBanner: eb,
            isPrepaid: ep,
            isCustomGift: eo,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: Z,
            isEligibleForDiscount: F,
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
            setHasAcceptedTerms: b,
            legalTermsNodeRef: y,
            hasLegalTermsFlash: O,
            trialId: v,
            trialFooterMessageOverride: I,
            reviewWarningMessage: T,
            metadata: A,
            purchaseState: P,
            hideSubscriptionDetails: w,
            referralTrialOfferId: x,
            isTrial: G = !1,
            isDiscount: B = !1,
            handleClose: q,
        } = e,
        {
            activeSubscription: Q,
            disabled: X,
            isEmbeddedIAP: J,
            paymentSourceType: $,
            hidePersonalInformation: ee,
            giftRecipient: et,
            selectedGiftStyle: en,
            discountInvoicePreview: er,
            subscriptionPeriodEnd: ei,
            premiumPlanOptions: ea,
            isInOneStepSubscriptionCheckout: eo,
            enableNoPaymentTrial: es,
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
            isPrepaid: ev,
            isCustomGift: eS,
            enablePremiumBrandRefresh: eI,
            premiumBrandRefreshBackgroundClassName: eT,
            isPremiumGroupPurchase: eC,
            isEligibleForDiscount: eA,
            hasEntitlements: eN,
            entitlements: eP,
        } = z({
            selectedPlanId: n,
            paymentSources: a,
            priceOptions: s,
            trialId: v,
            metadata: A,
            purchaseState: P,
            isTrial: G,
        }),
        ew = (0, F.mn)({
            error: e_,
            isGift: eh,
            oneTimePurchaseNitroGiftInvoicePreview: em,
            trialInvoicePreview: eg,
            proratedInvoicePreview: eE,
            renewalInvoicePreview: eb,
            planSwitchLoading: ey,
        });
    if (null != ew && ew.type === F.G0.LOADING)
        return (0, r.jsx)("div", {
            className: K.spinnerWrapper,
            children: (0, r.jsx)(f.$jN, {}),
        });
    let eR = (0, r.jsx)(F.sx, {
            invoiceSummaryTypeWithPreview: ew,
            priceOptions: s,
            trialFooterMessageOverride: I,
            hideSubscriptionDetails: w,
            referralTrialOfferId: x,
            isTrial: G,
            inReverseTrial: ed,
            fractionalPremiumInfo: ef,
            plan: ep,
            showFractionalPremiumBanner: eO,
            isPrepaid: ev,
            isCustomGift: eS,
            enablePremiumBrandRefresh: eI,
            premiumBrandRefreshBackgroundClassName: eT,
        }),
        eD = c.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
        ex = W.intl.formatToPlainString(W.t["sBpy9/"], { planName: ep.name });
    eh && !eS
        ? (ex = W.intl.string(W.t.J5a0eb))
        : eh && eS
          ? (ex = "")
          : (0, R.PV)(ep.id) && (ex = R.ZP.getBillingReviewSubheader(null, ep));
    let eL = null != eu && eu.length > 0 && (ec === N.c || null === $) && el ? k.w.SELECT_PAYMENT_METHOD : void 0;
    return es
        ? null
        : (0, r.jsxs)("div", {
              className: K.stepBody,
              children: [
                  (0, r.jsx)(k.Y, { paymentRestrictionBannerType: eL }),
                  null != T &&
                      (0, r.jsxs)("div", {
                          className: K.reviewWarningMessageContainer,
                          children: [
                              (0, r.jsx)(f.d3s, {
                                  size: "custom",
                                  color: d.Z.unsafe_rawColors.YELLOW_300.css,
                                  width: 20,
                                  height: 20,
                              }),
                              (0, r.jsx)(f.Text, {
                                  className: K.reviewWarningMessage,
                                  variant: "text-sm/normal",
                                  children: T,
                              }),
                          ],
                      }),
                  eC &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-md/medium",
                                  children: W.intl.formatToPlainString(Y.default["h1i+H8"], {
                                      premiumGroupProductName: (0, V.sO)(),
                                      cooldownMonths: V.T9,
                                  }),
                              }),
                              (0, r.jsx)(L.UN, {}),
                          ],
                      }),
                  eo &&
                      !eC &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(L.UN, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(S.a, {
                                  planSkuId: null == ep ? void 0 : ep.skuId,
                                  referralTrialOfferId: x,
                              }),
                              (0, r.jsx)(U.O, {
                                  planOptions: ea,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: n,
                                  planGroup: i,
                                  subscriptionPeriodEnd: ei,
                                  showTotal: !1,
                                  discountInvoiceItems: eA ? (null == er ? void 0 : er.invoiceItems) : void 0,
                                  handleClose: q,
                              }),
                              (0, r.jsx)(L.UN, {}),
                          ],
                      }),
                  ed &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: K.trialHeader,
                          children: W.intl.format(W.t["7ZS2m1"], { trialEnd: null == Q ? void 0 : Q.currentPeriodEnd }),
                      }),
                  !G &&
                      "" !== ex &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          className: K.header,
                          children: ex,
                      }),
                  eS &&
                      null != en &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(M.Z, {
                                  defaultAnimationState: D.SR.LOOP,
                                  giftStyle: en,
                                  shouldAnimate: !0,
                                  className: K.giftMainAnimation,
                              }),
                              (0, r.jsx)(Z.s, { giftRecipient: et }),
                          ],
                      }),
                  eR,
                  (0, r.jsxs)("div", {
                      className: K.paymentSourceWrapper,
                      children: [
                          (0, r.jsx)(h.ZP, {
                              label: G ? W.intl.string(W.t["YH7B+D"]) : W.intl.string(W.t["mmDvV+"]),
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: ec,
                              prependOption:
                                  eN && !G
                                      ? {
                                            label: W.intl.string(W.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: g,
                              onPaymentSourceAdd: E,
                              hidePersonalInformation: ee,
                              isTrial: G,
                              paymentGatewayRestrictions: eu,
                              className: o()({ [K.premiumBrandRefreshInputBackground]: eI }),
                          }),
                          eN && null == ec
                              ? (0, r.jsx)("div", {
                                    className: K.paymentSourceOptionalWarning,
                                    children: W.intl.format(W.t["2wPRSF"], { months: eP.length }),
                                })
                              : null,
                          B
                              ? null
                              : (0, r.jsx)(p.b, {
                                    currencies: l,
                                    className: K.currencyWrapper,
                                    children: (0, r.jsx)(p.Z, {
                                        label: W.intl.string(W.t["/AAR02"]),
                                        selectedCurrency: s.currency,
                                        currencies: l,
                                        onChange: u,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(j.Z, {
                      isActive: O,
                      ref: y,
                      children: (0, r.jsx)(m.Z, {
                          onChange: b,
                          forceShow: !0,
                          finePrint:
                              null != (t = !ed && I)
                                  ? t
                                  : (0, r.jsx)(_.Z, {
                                        hide: G || B,
                                        subscriptionPlan: ep,
                                        renewalInvoice: eb,
                                        isGift: eh,
                                        paymentSourceType: $,
                                        isEmbeddedIAP: J,
                                        basePrice: (0, R.aS)(ep.id, !1, eh, s),
                                    }),
                          showPricingLink: ep.currency !== H.pK.USD,
                          showWithdrawalWaiver: eD,
                          disabled: X,
                          isTrial: G && null == I,
                          inReverseTrial: ed,
                          isDiscount: B,
                          subscriptionPlan: ep,
                          isGift: eh,
                      }),
                  }),
              ],
          });
}
