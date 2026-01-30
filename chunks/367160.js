n.d(t, {
    _: () => O,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(637141),
    s = n(69882),
    l = n(241989),
    c = n(669510),
    u = n(234419),
    d = n(446929),
    f = n(494230),
    p = n(299301),
    _ = n(156312),
    h = n(222707),
    m = n(340034),
    g = n(888751),
    E = n(985018);

function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let O = (e) => {
    let {
            referralTrialOfferId: t,
            selectedPlanId: n,
            priceOptions: y,
            paymentSources: O,
            onPaymentSourceChange: v,
            handlePaymentSourceAdd: A,
            isTrial: I,
            planGroup: S,
        } = e,
        T = (0, f.L)(e),
        { isEligibleForTrial: C } = (0, _.P5)(),
        {
            error: N,
            isGift: w,
            giftRecipient: R,
            oneTimePurchaseNitroGiftInvoicePreview: P,
            subscriptionPeriodEnd: D,
            trialInvoicePreview: L,
            proratedInvoicePreview: x,
            renewalInvoicePreview: M,
            planSwitchLoading: j,
            plan: k,
            isPrepaid: U,
            discountInvoiceItems: G,
            premiumPlanOptions: F,
            shouldAllowPlanSelect: V,
            isCustomGift: B,
            hidePersonalInformation: H,
            hasEntitlements: Y,
            paymentSourceId: W,
            eligiblePaymentGateways: K,
            activeSubscription: z,
            fractionalPremiumInfo: q,
            isPremiumGroupPurchase: Z,
        } = T,
        Q = (0, r.jsx)(o.A, {
            shouldUseUnifiedCheckoutUI: !0,
            paymentSources: Object.values(O),
            selectedPaymentSourceId: W,
            newPaymentMethodOptionLabel: Y && !I ? E.intl.string(E.t.IGU7El) : null,
            onChange: v,
            onPaymentSourceAdd: A,
            hidePersonalInformation: H,
            isTrial: I,
            paymentGatewayRestrictions: K,
        }),
        X = (0, p.yf)({
            error: N,
            isGift: w,
            oneTimePurchaseNitroGiftInvoicePreview: P,
            trialInvoicePreview: L,
            proratedInvoicePreview: x,
            renewalInvoicePreview: M,
            planSwitchLoading: j,
        }),
        J = (0, u.V)(t),
        $ = (0, d.O8)(),
        ee = (0, h.pt)({
            fractionalPremiumInfo: q,
            selectedPlanId: n,
            planGroup: S,
            premiumSubscription: z,
            isGift: w,
        }),
        et = i.useMemo(
            () =>
                ee
                    ? (0, r.jsx)(m.l$, {
                          fractionalPremiumInfo: q,
                          isEligibleForTrial: C,
                          trialPeriodCopy: $,
                          subscriptionPeriodEnd: D,
                      })
                    : Z
                      ? (0, r.jsx)(a.wx6, {
                            type: "info",
                            children: (0, h.Nn)(),
                        })
                      : null,
            [ee, q, C, $, D, Z],
        );
    if (null == X || X.type === p.N$.LOADING) return (0, r.jsx)(s.Ed, {});
    let en = (0, r.jsx)(m.Z$, {
            invoiceSummaryTypeWithPreview: X,
            subscriptionPlan: k,
            isPrepaidPaymentSource: U,
            premiumTrialOffer: J,
            isCustomGift: B,
        }),
        er = null;
    if (
        !U &&
        (X.type === p.N$.PREMIUM_DEFAULT || X.type === p.N$.PREMIUM_WITH_TRIAL) &&
        null != X.renewalInvoicePreview
    ) {
        let e = (0, g.Gj)(X.invoicePreview, X.renewalInvoicePreview, J);
        er = (0, r.jsx)(c._, b({}, e));
    }
    let ei = (0, g.BZ)(X, k, {
            isPrepaidPaymentSource: U,
            giftRecipient: R,
            isPremiumGroupPurchase: Z,
        }),
        ea = V
            ? (0, r.jsx)(m.XH, {
                  selectedPlanId: n,
                  priceOptions: y,
                  planOptions: F,
                  eligibleForMultiMonthPlans: !1,
                  subscriptionPeriodEnd: D,
                  discountInvoiceItems: G,
              })
            : void 0,
        eo = V ? void 0 : (0, r.jsx)(l.f7, b({}, ei));
    return (0, r.jsx)(s.rg, {
        upperInlineNoticeContent: et,
        planSelectContent: ea,
        purchaseItemContent: eo,
        subscriptionDetailsContent: er,
        paymentSelectContent: Q,
        invoiceSummaryContent: en,
    });
};
