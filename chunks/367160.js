"use strict";
n.d(t, { _: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(637141),
    o = n(262427),
    l = n(854354),
    u = n(69882),
    c = n(669510),
    d = n(234419),
    _ = n(446929),
    f = n(494230),
    p = n(299301),
    h = n(156312),
    m = n(222707),
    E = n(340034),
    g = n(134638),
    A = n(888751),
    I = n(788868),
    T = n(985018),
    S = n(756366);
let y = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: y,
            onPaymentSourceChange: v,
            handlePaymentSourceAdd: N,
            isTrial: C,
            planGroup: R,
            isDiscount: O,
            metadata: b,
        } = e,
        D = (0, f.L)(e),
        { isEligibleForTrial: L, selectedStoreListing: w, discountOffer: M } = (0, h.P5)(),
        x = b?.guild_id ?? void 0,
        {
            error: P,
            isGift: k,
            giftRecipient: U,
            oneTimePurchaseNitroGiftInvoicePreview: G,
            subscriptionPeriodEnd: F,
            trialInvoicePreview: V,
            proratedInvoicePreview: B,
            renewalInvoicePreview: H,
            planSwitchLoading: j,
            plan: Y,
            isPrepaid: W,
            discountInvoiceItems: K,
            premiumPlanOptions: $,
            shouldAllowPlanSelect: z,
            isCustomGift: q,
            hidePersonalInformation: Z,
            hasEntitlements: X,
            paymentSourceId: Q,
            paymentSourceType: J,
            eligiblePaymentGateways: ee,
            activeSubscription: et,
            fractionalPremiumInfo: en,
            isPremiumGroupPurchase: er,
            currencyDropdownProps: ei,
            paymentSourcesForDropdown: es,
            defaultPaymentSourceId: ea,
            paymentSourceOptionalWarningCopy: eo,
        } = D,
        el = i.useMemo(() => (O ? null : (0, r.jsx)(E.rk, { ...ei })), [O, ei]),
        eu = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.A, {
                    shouldUseUnifiedCheckoutUI: !0,
                    paymentSources: es,
                    selectedPaymentSourceId: Q,
                    defaultPaymentSourceId: ea,
                    newPaymentMethodOptionLabel: X && !C ? T.intl.string(T.t.IGU7El) : null,
                    onChange: v,
                    onPaymentSourceAdd: N,
                    hidePersonalInformation: Z,
                    isTrial: C,
                    paymentGatewayRestrictions: ee,
                }),
                el,
            ],
        }),
        ec = (0, p.yf)({
            error: P,
            isGift: k,
            oneTimePurchaseNitroGiftInvoicePreview: G,
            trialInvoicePreview: V,
            proratedInvoicePreview: B,
            renewalInvoicePreview: H,
            planSwitchLoading: j,
        }),
        ed = (0, d.V)(t),
        { copy: e_, daysCount: ef, userTrialOffer: ep } = (0, _.O8)(),
        eh = (0, m.pt)({
            fractionalPremiumInfo: en,
            selectedPlanId: n,
            planGroup: R,
            premiumSubscription: et,
            isGift: k,
        }),
        em = i.useMemo(() => {
            if (null != ec && ec.type === p.N$.PREMIUM_WITH_TRIAL && null != ep)
                return (0, r.jsx)(o.J, {
                    gradientColor: "nitro-pink",
                    Icon: s.tvc,
                    text: T.intl.format(S.default.IAsfR5, { daysCount: ef }),
                });
            if (null != M) {
                let e = M.discount;
                if (e.user_usage_limit_interval === I.Ff.MONTH)
                    return (0, r.jsx)(o.J, {
                        gradientColor: "nitro-pink",
                        Icon: s.tvc,
                        text: T.intl.format(S.default.wCkwJf, {
                            percentOff: e.amount,
                            intervalCount: e.user_usage_limit_interval_count,
                        }),
                    });
            }
            return null;
        }, [ep, M, ef, ec]),
        eE = i.useMemo(() => {
            let e = [];
            return (
                null != eo && e.push({ type: "info", message: eo, key: "payment-source-optional-warning" }),
                eh
                    ? e.push({
                          directContent: (0, r.jsx)(E.l$, {
                              fractionalPremiumInfo: en,
                              isEligibleForTrial: L,
                              trialPeriodCopy: e_,
                              subscriptionPeriodEnd: F,
                          }),
                          key: "fractional-premium-notice",
                      })
                    : er && e.push({ type: "info", message: (0, m.Nn)(), key: "premium-group-purchase-notice" }),
                e.length > 0 ? e : null
            );
        }, [eo, eh, en, L, e_, F, er]);
    if (null == ec || ec.type === p.N$.LOADING) return (0, r.jsx)(u.Ed, {});
    let eg = null != ed ? ed.subscription_trial : void 0,
        eA =
            ec.type === p.N$.PREMIUM_WITH_TRIAL
                ? null
                : (0, r.jsx)(E.W9, {
                      invoiceSummaryTypeWithPreview: ec,
                      subscriptionPlan: Y,
                      isPrepaidPaymentSource: W,
                      subscriptionTrial: eg,
                      isCustomGift: q,
                  }),
        eI = null;
    if (
        !W &&
        (p.IJ.has(ec.type) || ec.type === p.N$.PREMIUM_WITH_TRIAL) &&
        "renewalInvoicePreview" in ec &&
        null != ec.renewalInvoicePreview
    ) {
        let e = (0, A.Gj)(ec.invoicePreview, ec.renewalInvoicePreview, eg, { discountOffer: M });
        eI = (0, r.jsx)(c._, { ...e });
    }
    let eT = z
            ? (0, r.jsx)(E.XH, {
                  disabled: D.disabled,
                  selectedPlanId: n,
                  priceOptions: y,
                  planOptions: $,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: F,
                  discountInvoiceItems: K,
              })
            : void 0,
        eS = z
            ? void 0
            : (0, r.jsx)(g._, {
                  type: ec.type,
                  invoicePreview: ec.invoicePreview,
                  subscriptionPlan: Y,
                  storeListing: w,
                  isPrepaidPaymentSource: W,
                  giftRecipient: U,
                  isPremiumGroupPurchase: er,
                  guildId: x,
              }),
        ey = (0, r.jsx)(E.PI, {
            planGroup: R,
            activeSubscription: et,
            isTrial: C,
            plan: Y,
            isGift: k,
            paymentSourceType: J,
            invoiceSummaryTypeWithPreview: ec,
        }),
        ev =
            ec.type === p.N$.PREMIUM_WITH_TRIAL
                ? (0, A.ib)(ec.invoicePreview.currency)
                : (0, l.kw)({ subscriptionInvoiceRecord: ec.invoicePreview });
    return (0, r.jsx)(u.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: eE,
        planSelectContent: eT,
        purchaseItemContent: eS,
        subscriptionDetailsContent: eI,
        paymentSelectContent: eu,
        invoiceSummaryContent: eA,
        legalContent: ey,
        invoiceTotalDueValue: ev,
        invoiceTotalDueLabel: T.intl.string(S.default.R0cZsM),
        promotionalNoticeContent: em,
    });
};
