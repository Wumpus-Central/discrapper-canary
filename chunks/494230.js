n.d(t, {
    A: () => Z,
    L: () => q,
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
    v = n(800471),
    A = n(104745),
    I = n(216641),
    S = n(351906),
    T = n(615405),
    C = n(97352),
    N = n(79387),
    w = n(67480),
    R = n(45938),
    P = n(927578),
    D = n(242874),
    L = n(543767),
    x = n(735164),
    M = n(778307),
    j = n(75825),
    k = n(218075),
    U = n(446929),
    G = n(344159),
    F = n(285719),
    V = n(299301),
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
            isPremium: A,
            startedPaymentFlowWithPaymentSourcesRef: T,
            setInvoicePreview: N,
            contextMetadata: D,
            inReverseTrial: x,
            setPurchasePreviewError: M,
            hasPaymentSources: j,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: F,
            isEligibleForDiscount: V,
        } = (0, y.P5)(),
        { isGift: H, giftRecipient: Y, selectedGiftStyle: W } = (0, E.Pv)(),
        K = (0, u.bG)([C.A], () => C.A.get(r));
    l()(null != K, "Missing plan");
    let z = [
            {
                planId: K.id,
                quantity: 1,
            },
        ],
        q = d === b.h.PURCHASING || d === b.h.COMPLETED,
        Z = null != h ? h : "",
        Q = (0, u.bG)([w.A], () => w.A.get(Z), [Z]),
        X = null == Q ? void 0 : Q.eligiblePaymentGateways,
        [J, $] = (0, L.Kq)({
            items: z,
            renewal: !1,
            preventFetch: x || H || q,
            applyEntitlements: !0,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            trialId: s,
            metadata: c,
        }),
        [ee, et] = (0, L.Kq)({
            subscriptionId: null == _ ? void 0 : _.id,
            items: z,
            renewal: !0,
            preventFetch: H || q,
            trialId: s,
            paymentSourceId: o.paymentSourceId,
            currency: o.currency,
            metadata: c,
        }),
        [en, er] = (0, L.Kq)({
            items: [
                {
                    planId: B.gD.PREMIUM_MONTH_TIER_2,
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
        [ei, ea] = (0, L.FP)({
            paymentSourceId: o.paymentSourceId,
            skuId: h,
            subscriptionPlanId: r,
            currency: o.currency,
            preventFetch: !H || q,
            loadId: D.loadId,
        }),
        eo = H && (0, R.Ik)(Y),
        es = null != (t = null != (n = null != $ ? $ : et) ? n : er) ? t : ea;
    i.useEffect(() => {
        M(es);
    }, [es, M]);
    let el = (0, u.bG)([S.A], () => S.A.enabled),
        ec = o.paymentSourceId,
        eu = (0, I.g)(a, ec),
        { hasEntitlements: ed, entitlements: ef } = (0, G.X)(K.id, H),
        ep = (0, P.J$)(o.paymentSourceId),
        e_ = (0, O.$o)(s, ec, r),
        eh = (0, v.vT)({
            isTrial: f,
            isGift: H,
            selectedSkuId: h,
            startedPaymentFlowWithPaymentSources: T.current,
            inReverseTrial: x,
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
        ey = !eh && eE.isFractionalPremiumActive && B.JM.has(r),
        eb = i.useMemo(
            () =>
                (0, P.Tm)({
                    skuId: h,
                    isPremium: A,
                    multiMonthPlans: [],
                    currentSubscription: _,
                    defaultPlanId: m,
                }),
            [h, _, m, A],
        ),
        eO = (0, v.UB)(eh, J, K),
        ev = i.useMemo(() => (f && null != J ? J : x && null != ee ? ee : void 0), [x, f, J, ee]);
    return (
        i.useEffect(() => {
            H ? N(ei) : N(J);
        }, [H, N, ei, J]),
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
            isGift: H,
            isEmbeddedIAP: p,
            paymentSourceType: eu,
            hidePersonalInformation: el,
            giftRecipient: Y,
            selectedGiftStyle: W,
            isInOneStepSubscriptionCheckout: eh,
            shouldAllowPlanSelect: eh && !F,
            enableNoPaymentTrial: e_,
            hasPaymentSources: j,
            paymentSourceId: ec,
            eligiblePaymentGateways: X,
            inReverseTrial: x,
            fractionalPremiumInfo: eE,
            planSwitchLoading: eO,
            showFractionalPremiumBanner: ey,
            isPrepaid: ep,
            isCustomGift: eo,
            enablePremiumBrandRefresh: k,
            premiumBrandRefreshBackgroundClassName: U,
            isPremiumGroupPurchase: F,
            isEligibleForDiscount: V,
            discountInvoiceItems: V ? (null == en ? void 0 : en.invoiceItems) : void 0,
            hasEntitlements: ed,
            entitlements: ef,
        }
    );
};

function Z(e) {
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
            trialId: v,
            trialFooterMessageOverride: I,
            reviewWarningMessage: S,
            metadata: C,
            purchaseState: w,
            hideSubscriptionDetails: R,
            referralTrialOfferId: L,
            isTrial: G = !1,
            isDiscount: B = !1,
            handleClose: Z,
        } = e,
        {
            activeSubscription: Q,
            disabled: X,
            isEmbeddedIAP: J,
            paymentSourceType: $,
            hidePersonalInformation: ee,
            giftRecipient: et,
            selectedGiftStyle: en,
            subscriptionPeriodEnd: er,
            premiumPlanOptions: ei,
            shouldAllowPlanSelect: ea,
            enableNoPaymentTrial: eo,
            hasPaymentSources: es,
            paymentSourceId: el,
            eligiblePaymentGateways: ec,
            inReverseTrial: eu,
            fractionalPremiumInfo: ed,
            plan: ef,
            error: ep,
            isGift: e_,
            oneTimePurchaseNitroGiftInvoicePreview: eh,
            trialInvoicePreview: em,
            proratedInvoicePreview: eg,
            renewalInvoicePreview: eE,
            planSwitchLoading: ey,
            showFractionalPremiumBanner: eb,
            isPrepaid: eO,
            isCustomGift: ev,
            enablePremiumBrandRefresh: eA,
            premiumBrandRefreshBackgroundClassName: eI,
            isPremiumGroupPurchase: eS,
            discountInvoiceItems: eT,
            hasEntitlements: eC,
            entitlements: eN,
        } = q({
            selectedPlanId: n,
            paymentSources: a,
            priceOptions: s,
            trialId: v,
            metadata: C,
            purchaseState: w,
            isTrial: G,
        }),
        ew = (0, V.yf)({
            error: ep,
            isGift: e_,
            oneTimePurchaseNitroGiftInvoicePreview: eh,
            trialInvoicePreview: em,
            proratedInvoicePreview: eg,
            renewalInvoicePreview: eE,
            planSwitchLoading: ey,
        });
    if (null != ew && ew.type === V.N$.LOADING)
        return (0, r.jsx)("div", {
            className: z.zp,
            children: (0, r.jsx)(f.y$y, {}),
        });
    let eR = (0, r.jsx)(V.eb, {
            invoiceSummaryTypeWithPreview: ew,
            priceOptions: s,
            trialFooterMessageOverride: I,
            hideSubscriptionDetails: R,
            referralTrialOfferId: L,
            isTrial: G,
            inReverseTrial: eu,
            fractionalPremiumInfo: ed,
            plan: ef,
            showFractionalPremiumBanner: eb,
            isPrepaid: eO,
            isCustomGift: ev,
            enablePremiumBrandRefresh: eA,
            premiumBrandRefreshBackgroundClassName: eI,
        }),
        eP = c.M.EEA_COUNTRIES.has(T.A.ipCountryCodeWithFallback),
        eD = K.intl.formatToPlainString(K.t["sBpy9/"], {
            planName: ef.name,
        });
    e_ && !ev
        ? (eD = K.intl.string(K.t.J5a0eb))
        : e_ && ev
          ? (eD = "")
          : (0, P.ys)(ef.id) && (eD = P.Ay.getBillingReviewSubheader(null, ef));
    let eL = null != ec && ec.length > 0 && (el === N.B || null === $) && es ? k.f.SELECT_PAYMENT_METHOD : void 0;
    return eo
        ? null
        : (0, r.jsxs)("div", {
              className: z.Du,
              children: [
                  (0, r.jsx)(k.j, {
                      paymentRestrictionBannerType: eL,
                  }),
                  null != S &&
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
                                  children: S,
                              }),
                          ],
                      }),
                  eS &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: "text-md/medium",
                                  children: K.intl.formatToPlainString(W.default["h1i+H8"], {
                                      premiumGroupProductName: (0, H.DP)(),
                                      cooldownMonths: H.wl,
                                  }),
                              }),
                              (0, r.jsx)(x.pK, {}),
                          ],
                      }),
                  ea &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(x.pK, {
                                  negativeMarginTop: !0,
                                  negativeMarginBottom: !0,
                              }),
                              (0, r.jsx)(A.P, {
                                  planSkuId: null == ef ? void 0 : ef.skuId,
                                  referralTrialOfferId: L,
                              }),
                              (0, r.jsx)(U.$p, {
                                  planOptions: ei,
                                  eligibleForMultiMonthPlans: !1,
                                  selectedPlanId: n,
                                  planGroup: i,
                                  subscriptionPeriodEnd: er,
                                  showTotal: !1,
                                  discountInvoiceItems: eT,
                                  handleClose: Z,
                              }),
                              (0, r.jsx)(x.pK, {}),
                          ],
                      }),
                  eu &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/normal",
                          color: "always-white",
                          className: z.KB,
                          children: K.intl.format(K.t["7ZS2m1"], {
                              trialEnd: null == Q ? void 0 : Q.currentPeriodEnd,
                          }),
                      }),
                  !G &&
                      "" !== eD &&
                      (0, r.jsx)(f.Heading, {
                          variant: "heading-md/semibold",
                          className: z.wx,
                          children: eD,
                      }),
                  ev &&
                      null != en &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(j.A, {
                                  defaultAnimationState: D.oA.LOOP,
                                  giftStyle: en,
                                  shouldAnimate: !0,
                                  className: z.Os,
                              }),
                              (0, r.jsx)(F.Z, {
                                  giftRecipient: et,
                              }),
                          ],
                      }),
                  eR,
                  (0, r.jsxs)("div", {
                      className: z.LC,
                      children: [
                          (0, r.jsx)(h.A, {
                              label: G ? K.intl.string(K.t["YH7B+D"]) : K.intl.string(K.t["mmDvV+"]),
                              paymentSources: Object.values(a),
                              selectedPaymentSourceId: el,
                              prependOption:
                                  eC && !G
                                      ? {
                                            label: K.intl.string(K.t.IGU7El),
                                            value: null,
                                        }
                                      : null,
                              onChange: g,
                              onPaymentSourceAdd: E,
                              hidePersonalInformation: ee,
                              isTrial: G,
                              paymentGatewayRestrictions: ec,
                              className: o()({
                                  [z.E4]: eA,
                              }),
                          }),
                          eC && null == el
                              ? (0, r.jsx)("div", {
                                    className: z.QN,
                                    children: K.intl.format(K.t["2wPRSF"], {
                                        months: eN.length,
                                    }),
                                })
                              : null,
                          B
                              ? null
                              : (0, r.jsx)(p.f, {
                                    currencies: l,
                                    className: z.p2,
                                    children: (0, r.jsx)(p.A, {
                                        label: K.intl.string(K.t["/AAR02"]),
                                        selectedCurrency: s.currency,
                                        currencies: l,
                                        onChange: u,
                                    }),
                                }),
                      ],
                  }),
                  (0, r.jsx)(M.A, {
                      isActive: O,
                      ref: b,
                      children: (0, r.jsx)(m.A, {
                          onChange: y,
                          forceShow: !0,
                          finePrint:
                              null != (t = !eu && I)
                                  ? t
                                  : (0, r.jsx)(_.A, {
                                        hide: G || B,
                                        subscriptionPlan: ef,
                                        renewalInvoice: eE,
                                        isGift: e_,
                                        paymentSourceType: $,
                                        isEmbeddedIAP: J,
                                        basePrice: (0, P.y8)(ef.id, !1, e_, s),
                                    }),
                          showPricingLink: ef.currency !== Y.Yr.USD,
                          showWithdrawalWaiver: eP,
                          disabled: X,
                          isTrial: G && null == I,
                          inReverseTrial: eu,
                          isDiscount: B,
                          subscriptionPlan: ef,
                          isGift: e_,
                      }),
                  }),
              ],
          });
}
