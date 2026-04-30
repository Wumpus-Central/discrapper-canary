n.d(t, { _: () => x }), n(321073);
var l = n(627968),
    i = n(64700),
    a = n(403581),
    r = n(262427),
    s = n(854354),
    o = n(164928),
    u = n(669510),
    c = n(234419),
    d = n(337092),
    p = n(815545),
    m = n(209030),
    h = n(299301),
    C = n(927578),
    A = n(902958),
    E = n(222707),
    y = n(421094),
    P = n(340034),
    S = n(134638),
    _ = n(888751),
    T = n(788868),
    f = n(375708),
    N = n(327105);
let x = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: x,
            handlePaymentSourceAdd: I,
            isTrial: g,
            planGroup: v,
            isDiscount: M,
            metadata: j,
        } = e,
        b = (0, m.L)(e),
        { isEligibleForTrial: R, discountOffer: L, selectedStoreListing: O } = (0, A.P5)(),
        D = j?.guild_id ?? void 0,
        {
            isGift: w,
            giftRecipient: U,
            invoiceSummaryTypeWithPreview: k,
            subscriptionPeriodEnd: Y,
            proratedInvoicePreview: G,
            plan: F,
            isPrepaid: B,
            premiumPlanOptions: W,
            shouldAllowPlanSelect: H,
            isCustomGift: V,
            hasEntitlements: K,
            paymentSourceType: Z,
            eligiblePaymentGateways: q,
            activeSubscription: z,
            fractionalPremiumInfo: $,
            disabled: J,
            isPremiumGroupPurchase: X,
            currencyDropdownProps: Q,
            paymentSourceOptionalWarningCopy: ee,
        } = b,
        et = (0, l.jsx)(y.K, {
            label: f.intl.string(f.t["u+Cw58"]),
            handlePaymentSourceAdd: I,
            isTrial: g,
            isDiscount: M,
            disabled: J,
            hasEntitlements: K,
            eligiblePaymentGateways: q,
            currencyDropdownProps: Q,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        en = (0, c.V)(t),
        { copy: el, daysCount: ei, userTrialOffer: ea } = (0, d.O8)(),
        er = (0, E.pt)({
            fractionalPremiumInfo: $,
            selectedPlanId: n,
            planGroup: v,
            premiumSubscription: z,
            isGift: w,
        }),
        es = i.useMemo(() => null != L && null != L.discount && null != G && (0, p.Ro)(G, L.discount.id), [L, G]),
        eo = i.useMemo(() => {
            if (null != k && k.type === h.N$.PREMIUM_WITH_TRIAL && null != ea)
                return (0, l.jsx)(r.J, {
                    gradientColor: "nitro-pink",
                    Icon: a.t,
                    text: f.intl.format(N.default.IAsfR5, { daysCount: ei }),
                });
            if (null != L && es) {
                let e = L.discount;
                if (e.user_usage_limit_interval === T.Ff.MONTH)
                    return (0, l.jsx)(r.J, {
                        gradientColor: "nitro-pink",
                        Icon: a.t,
                        text: f.intl.format(N.default.wCkwJf, {
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
                          directContent: (0, l.jsx)(P.l$, {
                              fractionalPremiumInfo: $,
                              isEligibleForTrial: R,
                              trialPeriodCopy: el,
                              subscriptionPeriodEnd: Y,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : X && e.push({ type: "info", message: (0, E.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ee, er, $, R, el, Y, X]),
        ec = (0, C.l6)(x, null != k ? k.invoicePreview?.checkoutContext?.available_plans : void 0),
        ed = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eu,
            planSelectContent: H
                ? (0, l.jsx)(P.XH, {
                      disabled: b.disabled,
                      selectedPlanId: n,
                      priceOptions: ec,
                      planOptions: W,
                      subscriptionPeriodEnd: Y,
                  })
                : void 0,
            paymentSelectContent: et,
            promotionalNoticeContent: eo,
        };
    if (null == k) return (0, l.jsx)(o.T, { ...ed, legalContent: null });
    if (k.type === h.N$.LOADING) return (0, l.jsx)(o.E, {});
    let ep = null != en ? en.subscription_trial : void 0,
        em =
            k.type === h.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, l.jsx)(P.W9, {
                      invoiceSummaryTypeWithPreview: k,
                      subscriptionPlan: F,
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
        let e = (0, _.Gj)(k.invoicePreview, k.renewalInvoicePreview, ep, {
            discountOffer: L,
            isSubscriptionUpdate: null != z,
            fractionalPremiumInfo: $,
        });
        eh = (0, l.jsx)(u._, { ...e });
    }
    let eC = H
            ? void 0
            : (0, l.jsx)(S._, {
                  type: k.type,
                  invoicePreview: k.invoicePreview,
                  storeListing: O,
                  subscriptionPlan: F,
                  isPrepaidPaymentSource: B,
                  giftRecipient: U,
                  isPremiumGroupPurchase: X,
                  guildId: D,
              }),
        eA = (0, l.jsx)(P.PI, {
            planGroup: v,
            activeSubscription: z,
            isTrial: g,
            plan: F,
            isGift: w,
            paymentSourceType: Z,
            isPrepaidPaymentSource: B,
            invoiceSummaryTypeWithPreview: k,
            fractionalPremiumInfo: $,
        }),
        eE =
            k.type === h.N$.PREMIUM_WITH_TRIAL
                ? (0, _.ib)(k.invoicePreview.currency)
                : (0, s.kw)({ subscriptionInvoiceRecord: k.invoicePreview });
    return (0, l.jsx)(o.T, {
        ...ed,
        purchaseItemContent: eC,
        subscriptionDetailsContent: eh,
        invoiceSummaryContent: em,
        legalContent: eA,
        invoiceTotalDueValue: eE,
        invoiceTotalDueLabel: f.intl.string(N.default.R0cZsM),
    });
};
