"use strict";
n.d(t, { _: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(403581),
    a = n(262427),
    o = n(854354),
    l = n(69882),
    u = n(669510),
    c = n(234419),
    d = n(446929),
    _ = n(815545),
    f = n(271849),
    p = n(299301),
    h = n(927578),
    E = n(156312),
    m = n(222707),
    g = n(421094),
    A = n(340034),
    I = n(134638),
    T = n(888751),
    S = n(788868),
    y = n(985018),
    N = n(327105);
let v = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: v,
            handlePaymentSourceAdd: C,
            isTrial: O,
            planGroup: R,
            isDiscount: b,
            metadata: D,
        } = e,
        L = (0, f.L)(e),
        { isEligibleForTrial: w, discountOffer: M, selectedStoreListing: P } = (0, E.P5)(),
        x = D?.guild_id ?? void 0,
        {
            isGift: k,
            giftRecipient: U,
            invoiceSummaryTypeWithPreview: G,
            subscriptionPeriodEnd: F,
            proratedInvoicePreview: V,
            plan: B,
            isPrepaid: H,
            premiumPlanOptions: j,
            shouldAllowPlanSelect: Y,
            isCustomGift: W,
            hasEntitlements: K,
            paymentSourceType: $,
            eligiblePaymentGateways: z,
            activeSubscription: q,
            fractionalPremiumInfo: X,
            disabled: Q,
            isPremiumGroupPurchase: Z,
            currencyDropdownProps: J,
            paymentSourceOptionalWarningCopy: ee,
        } = L,
        et = (0, r.jsx)(g.K, {
            label: y.intl.string(y.t["u+Cw58"]),
            handlePaymentSourceAdd: C,
            isTrial: O,
            isDiscount: b,
            disabled: Q,
            hasEntitlements: K,
            eligiblePaymentGateways: z,
            currencyDropdownProps: J,
            shouldUseUnifiedCheckoutUI: !0,
        }),
        en = (0, c.V)(t),
        { copy: er, daysCount: ei, userTrialOffer: es } = (0, d.O8)(),
        ea = (0, m.pt)({
            fractionalPremiumInfo: X,
            selectedPlanId: n,
            planGroup: R,
            premiumSubscription: q,
            isGift: k,
        }),
        eo = i.useMemo(() => null != M && null != M.discount && null != V && (0, _.Ro)(V, M.discount.id), [M, V]),
        el = i.useMemo(() => {
            if (null != G && G.type === p.N$.PREMIUM_WITH_TRIAL && null != es)
                return (0, r.jsx)(a.J, {
                    gradientColor: "nitro-pink",
                    Icon: s.t,
                    text: y.intl.format(N.default.IAsfR5, { daysCount: ei }),
                });
            if (null != M && eo) {
                let e = M.discount;
                if (e.user_usage_limit_interval === S.Ff.MONTH)
                    return (0, r.jsx)(a.J, {
                        gradientColor: "nitro-pink",
                        Icon: s.t,
                        text: y.intl.format(N.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [es, eo, M, ei, G]),
        eu = i.useMemo(() => {
            let e = [];
            return (
                null != ee && e.push({ type: "info", message: ee, key: "payment-source-optional-warning" }),
                ea
                    ? e.push({
                          directContent: (0, r.jsx)(A.l$, {
                              fractionalPremiumInfo: X,
                              isEligibleForTrial: w,
                              trialPeriodCopy: er,
                              subscriptionPeriodEnd: F,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : Z && e.push({ type: "info", message: (0, m.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [ee, ea, X, w, er, F, Z]),
        ec = (0, h.l6)(v, null != G ? G.invoicePreview?.checkoutContext?.available_plans : void 0),
        ed = {
            shouldShowGlobalNotices: !0,
            upperInlineNoticeProps: eu,
            planSelectContent: Y
                ? (0, r.jsx)(A.XH, {
                      disabled: L.disabled,
                      selectedPlanId: n,
                      priceOptions: ec,
                      planOptions: j,
                      subscriptionPeriodEnd: F,
                  })
                : void 0,
            paymentSelectContent: et,
            promotionalNoticeContent: el,
        };
    if (null == G) return (0, r.jsx)(l.T_, { ...ed, legalContent: null });
    if (G.type === p.N$.LOADING) return (0, r.jsx)(l.Ed, {});
    let e_ = null != en ? en.subscription_trial : void 0,
        ef =
            G.type === p.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(A.W9, {
                      invoiceSummaryTypeWithPreview: G,
                      subscriptionPlan: B,
                      isPrepaidPaymentSource: H,
                      subscriptionTrial: e_,
                      isCustomGift: W,
                  }),
        ep = null;
    if (
        !H &&
        (p.IJ.has(G.type) || G.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in G &&
        null != G.renewalInvoicePreview
    ) {
        let e = (0, T.Gj)(G.invoicePreview, G.renewalInvoicePreview, e_, {
            discountOffer: M,
            isSubscriptionUpdate: null != q,
            fractionalPremiumInfo: X,
        });
        ep = (0, r.jsx)(u._, { ...e });
    }
    let eh = Y
            ? void 0
            : (0, r.jsx)(I._, {
                  type: G.type,
                  invoicePreview: G.invoicePreview,
                  storeListing: P,
                  subscriptionPlan: B,
                  isPrepaidPaymentSource: H,
                  giftRecipient: U,
                  isPremiumGroupPurchase: Z,
                  guildId: x,
              }),
        eE = (0, r.jsx)(A.PI, {
            planGroup: R,
            activeSubscription: q,
            isTrial: O,
            plan: B,
            isGift: k,
            paymentSourceType: $,
            isPrepaidPaymentSource: H,
            invoiceSummaryTypeWithPreview: G,
            fractionalPremiumInfo: X,
        }),
        em =
            G.type === p.N$.PREMIUM_WITH_TRIAL
                ? (0, T.ib)(G.invoicePreview.currency)
                : (0, o.kw)({ subscriptionInvoiceRecord: G.invoicePreview });
    return (0, r.jsx)(l.T_, {
        ...ed,
        purchaseItemContent: eh,
        subscriptionDetailsContent: ep,
        invoiceSummaryContent: ef,
        legalContent: eE,
        invoiceTotalDueValue: em,
        invoiceTotalDueLabel: y.intl.string(N.default.R0cZsM),
    });
};
