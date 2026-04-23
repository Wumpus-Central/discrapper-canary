"use strict";
n.d(t, { n: () => E }), n(321073);
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
    h = n(327105);
let E = (e) => {
    let {
            disabled: t,
            showFractionalPremiumBanner: n,
            fractionalPremiumInfo: E,
            isPremiumGroupPurchase: m,
            paymentRestrictionBannerType: g,
            invoiceError: A,
            unifiedPlainNoticeText: I,
            invoicePreview: T,
            invoicePreviewComponent: S,
            shouldShowPlanSelectAndPromoBanner: y,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: N,
            newPlan: v,
            planId: C,
            priceOptions: O,
            premiumPlanOptions: R,
            unifiedSubscriptionDetailsNode: b,
            isInvoiceBilledImmediately: D,
            paymentSelectContent: L,
            currencySelectComponent: w,
            legalContent: M,
        } = e,
        P = i.useMemo(() => {
            let e = [];
            return (
                n &&
                    e.push({
                        directContent: (0, r.jsx)(l.l$, { fractionalPremiumInfo: E }),
                        key: "fractional-premium-notice",
                    }),
                m && e.push({ type: "info", message: (0, o.Nn)(), key: "premium-group-purchase-notice" }),
                null != g &&
                    e.push({ type: "warning", message: (0, d.i)(g), key: "payment-restriction-banner-notice" }),
                null != A && e.push({ type: "critical", message: A.message, key: "invoice-error-notice" }),
                e
            );
        }, [m, g, A, n, E]),
        x = i.useMemo(() => (0, c.l6)(O, T?.checkoutContext?.available_plans), [O, T]),
        k = i.useMemo(() => (y ? (0, r.jsx)(a.P, { planSkuId: v.skuId }) : null), [y, v.skuId]),
        U = (0, c.J$)(O.paymentSourceId),
        G = null,
        F = null;
    y
        ? (F = (0, r.jsx)(l.XH, {
              disabled: t,
              headingSubText: I,
              planOptions: R,
              selectedPlanId: C,
              showPlanStatusSubText: !0,
              priceOptions: x,
          }))
        : null != T &&
          (G = (0, r.jsx)(u._, {
              type: f.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: T,
              subscriptionPlan: v,
              isPrepaidPaymentSource: U,
              isPremiumGroupPurchase: m,
              bottomSubText: I,
          }));
    let V = N ? S : (0, r.jsx)("div", { ref: b }),
        B = N ? null : S;
    return (0, r.jsx)(s.T_, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: P,
        paymentSelectContent: (0, r.jsxs)(r.Fragment, { children: [L, w] }),
        subscriptionDetailsContent: V,
        purchaseItemContent: G,
        planSelectContent: F,
        invoiceSummaryContent: B,
        legalContent: M,
        invoiceTotalDueLabel: D ? p.intl.string(h.default.R0cZsM) : p.intl.string(h.default["11g67A"]),
        invoiceTotalDueValue: null != T ? (0, _.U5)(T) : void 0,
        promotionalNoticeContent: k,
    });
};
