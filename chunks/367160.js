n.d(t, { _: () => N }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(69882),
    u = n(669510),
    c = n(234419),
    d = n(446929),
    p = n(815545),
    m = n(271849),
    h = n(299301),
    A = n(927578),
    _ = n(156312),
    C = n(222707),
    E = n(421094),
    y = n(340034),
    f = n(134638),
    P = n(888751),
    S = n(788868),
    x = n(985018),
    T = n(327105);
let N = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: N,
            handlePaymentSourceAdd: g,
            isTrial: I,
            planGroup: v,
            isDiscount: b,
            metadata: R,
        } = e,
        M = (0, m.L)(e),
        { isEligibleForTrial: j, discountOffer: L, selectedStoreListing: O } = (0, _.P5)(),
        D = R?.guild_id ?? void 0,
        {
            isGift: U,
            giftRecipient: w,
            invoiceSummaryTypeWithPreview: k,
            subscriptionPeriodEnd: F,
            proratedInvoicePreview: G,
            plan: B,
            isPrepaid: Y,
            premiumPlanOptions: W,
            shouldAllowPlanSelect: V,
            isCustomGift: H,
            hasEntitlements: K,
            paymentSourceType: Z,
            eligiblePaymentGateways: q,
            activeSubscription: z,
            fractionalPremiumInfo: $,
            disabled: X,
            isPremiumGroupPurchase: J,
            currencyDropdownProps: Q,
            paymentSourceOptionalWarningCopy: ee,
        } = M,
        et = (0, l.jsx)(E.K, {
            label: x.intl.string(x.t["u+Cw58"]),
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
        { copy: el, daysCount: ei, userTrialOffer: ea } = (0, d.O8)(),
        er = (0, C.pt)({
            fractionalPremiumInfo: $,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: z,
            isGift: U,
        }),
        es = i.useMemo(() => null != L && null != L.discount && null != G && (0, p.Ro)(G, L.discount.id), [L, G]),
        eo = i.useMemo(() => {
            if (null != k && k.type === h.N$.PREMIUM_WITH_TRIAL && null != ea)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: a.t,
                    text: x.intl.format(T.default.IAsfR5, { daysCount: ei }),
                });
            if (null != L && es) {
                let e = L.discount;
                if (e.user_usage_limit_interval === S.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: a.t,
                        text: x.intl.format(T.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [ea, es, L, ei, k]),
        eu = i.useMemo(() => {
            let e = [];
            return (
                null != ee && e.push({ type: "info", message: ee, key: "payment-source-optional-warning" }),
                er
                    ? e.push({
                          directContent: (0, l.jsx)(y.l$, {
                              fractionalPremiumInfo: $,
                              isEligibleForTrial: j,
                              trialPeriodCopy: el,
                              subscriptionPeriodEnd: F,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : J && e.push({ type: "info", message: (0, C.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ee, er, $, j, el, F, J]),
        ec = (0, A.l6)(N, null != k ? k.invoicePreview?.checkoutContext?.available_plans : void 0),
        ed = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eu,
            planSelectContent: V
                ? (0, l.jsx)(y.XH, {
                      disabled: M.disabled,
                      selectedPlanId: n,
                      priceOptions: ec,
                      planOptions: W,
                      subscriptionPeriodEnd: F,
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
                      subscriptionPlan: B,
                      isPrepaidPaymentSource: Y,
                      subscriptionTrial: ep,
                      isCustomGift: H,
                  }),
        eh = null;
    if (
        !Y &&
        (h.IJ.has(k.type) || k.type === h.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in k &&
        null != k.renewalInvoicePreview
    ) {
        let e = (0, P.Gj)(k.invoicePreview, k.renewalInvoicePreview, ep, {
            discountOffer: L,
            isSubscriptionUpdate: null != z,
            fractionalPremiumInfo: $,
        });
        eh = (0, l.jsx)(u._, { ...e });
    }
    let eA = V
            ? void 0
            : (0, l.jsx)(f._, {
                  type: k.type,
                  invoicePreview: k.invoicePreview,
                  storeListing: O,
                  subscriptionPlan: B,
                  isPrepaidPaymentSource: Y,
                  giftRecipient: w,
                  isPremiumGroupPurchase: J,
                  guildId: D,
              }),
        e_ = (0, l.jsx)(y.PI, {
            planGroup: v,
            activeSubscription: z,
            isTrial: I,
            plan: B,
            isGift: U,
            paymentSourceType: Z,
            isPrepaidPaymentSource: Y,
            invoiceSummaryTypeWithPreview: k,
            fractionalPremiumInfo: $,
        }),
        eC =
            k.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, P.ib)(k.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: k.invoicePreview });
    return (0, l.jsx)(o.T_, {
        ...ed,
        purchaseItemContent: eA,
        subscriptionDetailsContent: eh,
        invoiceSummaryContent: em,
        legalContent: e_,
        invoiceTotalDueValue: eC,
        invoiceTotalDueLabel: x.intl.string(T.default.R0cZsM),
    });
};
