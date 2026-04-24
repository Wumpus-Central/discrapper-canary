n.d(t, { _: () => N }), n(321073);
var l = n(627968),
    a = n(64700),
    i = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(69882),
    u = n(669510),
    c = n(234419),
    d = n(337092),
    p = n(815545),
    m = n(209030),
    h = n(299301),
    A = n(927578),
    C = n(156312),
    _ = n(222707),
    E = n(421094),
    y = n(340034),
    f = n(134638),
    P = n(888751),
    S = n(788868),
    T = n(985018),
    x = n(327105);
let N = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: N,
            handlePaymentSourceAdd: g,
            isTrial: I,
            planGroup: v,
            isDiscount: b,
            metadata: M,
        } = e,
        L = (0, m.L)(e),
        { isEligibleForTrial: R, discountOffer: j, selectedStoreListing: O } = (0, C.P5)(),
        D = M?.guild_id ?? void 0,
        {
            isGift: w,
            giftRecipient: U,
            invoiceSummaryTypeWithPreview: k,
            subscriptionPeriodEnd: Y,
            proratedInvoicePreview: F,
            plan: G,
            isPrepaid: B,
            premiumPlanOptions: W,
            shouldAllowPlanSelect: H,
            isCustomGift: V,
            hasEntitlements: K,
            paymentSourceType: Z,
            eligiblePaymentGateways: q,
            activeSubscription: z,
            fractionalPremiumInfo: $,
            disabled: X,
            isPremiumGroupPurchase: J,
            currencyDropdownProps: Q,
            paymentSourceOptionalWarningCopy: ee,
        } = L,
        et = (0, l.jsx)(E.K, {
            label: T.intl.string(T.t["u+Cw58"]),
            handlePaymentSourceAdd: g,
            isTrial: I,
            isDiscount: b,
            disabled: X,
            hasEntitlements: K,
            eligiblePaymentGateways: q,
            currencyDropdownProps: Q,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        en = (0, c.V)(t),
        { copy: el, daysCount: ea, userTrialOffer: ei } = (0, d.O8)(),
        er = (0, _.pt)({
            fractionalPremiumInfo: $,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: z,
            isGift: w,
        }),
        es = a.useMemo(() => null != j && null != j.discount && null != F && (0, p.Ro)(F, j.discount.id), [j, F]),
        eo = a.useMemo(() => {
            if (null != k && k.type === h.N$.PREMIUM_WITH_TRIAL && null != ei)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: i.t,
                    text: T.intl.format(x.default.IAsfR5, { daysCount: ea }),
                });
            if (null != j && es) {
                let e = j.discount;
                if (e.user_usage_limit_interval === S.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: i.t,
                        text: T.intl.format(x.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [ei, es, j, ea, k]),
        eu = a.useMemo(() => {
            let e = [];
            return (
                null != ee && e.push({ type: "info", message: ee, key: "payment-source-optional-warning" }),
                er
                    ? e.push({
                          directContent: (0, l.jsx)(y.l$, {
                              fractionalPremiumInfo: $,
                              isEligibleForTrial: R,
                              trialPeriodCopy: el,
                              subscriptionPeriodEnd: Y,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : J && e.push({ type: "info", message: (0, _.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ee, er, $, R, el, Y, J]),
        ec = (0, A.l6)(N, null != k ? k.invoicePreview?.checkoutContext?.available_plans : void 0),
        ed = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eu,
            planSelectContent: H
                ? (0, l.jsx)(y.XH, {
                      disabled: L.disabled,
                      selectedPlanId: n,
                      priceOptions: ec,
                      planOptions: W,
                      subscriptionPeriodEnd: Y,
                  })
                : void 0,
            paymentSelectContent: et,
            promotionalNoticeContent: eo,
        };
    if (null == k) return (0, l.jsx)(o.T_, { ...ed, legalContent: null });
    if (k.type === h.N$.LOADING) return (0, l.jsx)(o.Ed, {});
    let ep = null != en ? en.subscription_trial : void 0,
        em =
            k.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(y.W9, {
                      invoiceSummaryTypeWithPreview: k,
                      subscriptionPlan: G,
                      isPrepaidPaymentSource: B,
                      subscriptionTrial: ep,
                      isCustomGift: V,
                  }),
        eh = null;
    if (
        !B &&
        (h.IJ.has(k.type) || k.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in k &&
        null != k.renewalInvoicePreview
    ) {
        let e = (0, P.Gj)(k.invoicePreview, k.renewalInvoicePreview, ep, {
            discountOffer: j,
            isSubscriptionUpdate: null != z,
            fractionalPremiumInfo: $,
        });
        eh = (0, l.jsx)(u._, { ...e });
    }
    let eA = H
            ? void 0
            : (0, l.jsx)(f._, {
                  type: k.type,
                  invoicePreview: k.invoicePreview,
                  storeListing: O,
                  subscriptionPlan: G,
                  isPrepaidPaymentSource: B,
                  giftRecipient: U,
                  isPremiumGroupPurchase: J,
                  guildId: D,
              }),
        eC = (0, l.jsx)(y.PI, {
            planGroup: v,
            activeSubscription: z,
            isTrial: I,
            plan: G,
            isGift: w,
            paymentSourceType: Z,
            isPrepaidPaymentSource: B,
            invoiceSummaryTypeWithPreview: k,
            fractionalPremiumInfo: $,
        }),
        e_ =
            k.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, P.ib)(k.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: k.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...ed,
        purchaseItemContent: eA,
        subscriptionDetailsContent: eh,
        invoiceSummaryContent: em,
        legalContent: eC,
        invoiceTotalDueValue: e_,
        invoiceTotalDueLabel: T.intl.string(x.default.R0cZsM),
    });
};
