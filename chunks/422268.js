"use strict";
n.d(t, { n: () => m }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(69882),
    a = n(104745),
    o = n(222707),
    l = n(340034),
    u = n(134638),
    c = n(927578),
    d = n(218075),
    _ = n(692440),
    f = n(299301),
    p = n(985018),
    h = n(756366);
let m = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: m,
            isPremiumGroupPurchase: E,
            paymentRestrictionBannerType: g,
            invoiceError: A,
            unifiedPlainNoticeText: I,
            invoicePreview: T,
            invoicePreviewComponent: S,
            shouldShowPlanSelectAndPromoBanner: y,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: v,
            newPlan: N,
            planId: C,
            priceOptions: R,
            premiumPlanOptions: O,
            unifiedSubscriptionDetailsNode: b,
            isInvoiceBilledImmediately: D,
            paymentSelectContent: L,
            currencySelectComponent: w,
            legalContent: M,
        } = e,
        x = i.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, r.jsx)(l.l$, { fractionalPremiumInfo: m }),
                        key: "fractional-premium-notice",
                    }),
                E && e.push({ type: "info", message: (0, o.Nn)(), key: "premium-group-purchase-notice" }),
                null != g &&
                    e.push({ type: "warning", message: (0, d.i)(g), key: "payment-restriction-banner-notice" }),
                null != A && e.push({ type: "critical", message: A.message, key: "invoice-error-notice" }),
                e
            );
        }, [E, g, A, n, m]),
        P = i.useMemo(() => (y ? (0, r.jsx)(a.P, { planSkuId: N.skuId }) : null), [y, N.skuId]),
        k = (0, c.J$)(R.paymentSourceId),
        U = null,
        G = null;
    y
        ? (G = (0, r.jsx)(l.XH, {
              disabled: t,
              headingSubText: I,
              planOptions: O,
              eligibleForMultiMonthPlans: !1,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
          }))
        : null != T &&
          (U = (0, r.jsx)(u._, {
              type: f.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: T,
              subscriptionPlan: N,
              isPrepaidPaymentSource: k,
              isPremiumGroupPurchase: E,
              bottomSubText: I,
          }));
    let F = v ? S : (0, r.jsx)("div", { ref: b }),
        V = v ? null : S;
    return (0, r.jsx)(s.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: x,
        paymentSelectContent: (0, r.jsxs)(r.Fragment, { children: [L, w] }),
        subscriptionDetailsContent: F,
        purchaseItemContent: U,
        planSelectContent: G,
        invoiceSummaryContent: V,
        legalContent: M,
        invoiceTotalDueLabel: D ? p.intl.string(h.default.R0cZsM) : p.intl.string(h.default["11g67A"]),
        invoiceTotalDueValue: null != T ? (0, _.U5)(T) : void 0,
        promotionalNoticeContent: P,
    });
};
