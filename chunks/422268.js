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
    h = n(523376);
let m = (e) => {
    let {
            showFractionalPremiumBanner: t,
            fractionalPremiumInfo: n,
            isPremiumGroupPurchase: m,
            paymentRestrictionBannerType: E,
            invoiceError: g,
            unifiedPlainNoticeText: A,
            invoicePreview: I,
            invoicePreviewComponent: T,
            shouldShowPlanSelectAndPromoBanner: S,
            shouldRenderInvoicePreviewSubscriptionDetailsDirectly: y,
            newPlan: v,
            planId: N,
            priceOptions: C,
            premiumPlanOptions: R,
            unifiedSubscriptionDetailsNode: O,
            isInvoiceBilledImmediately: b,
            paymentSelectContent: D,
            currencySelectComponent: L,
            legalContent: w,
        } = e,
        M = i.useMemo(() => {
            let e = [];
            return (
                t &&
                    e.push({
                        directContent: (0, r.jsx)(l.l$, { fractionalPremiumInfo: n }),
                        key: "fractional-premium-notice",
                    }),
                m && e.push({ type: "info", message: (0, o.Nn)(), key: "premium-group-purchase-notice" }),
                null != E &&
                    e.push({ type: "warning", message: (0, d.i)(E), key: "payment-restriction-banner-notice" }),
                null != g && e.push({ type: "critical", message: g.message, key: "invoice-error-notice" }),
                e
            );
        }, [m, E, g, t, n]),
        x = i.useMemo(() => (S ? (0, r.jsx)(a.P, { planSkuId: v.skuId }) : null), [S, v.skuId]),
        P = (0, c.J$)(C.paymentSourceId),
        k = null,
        U = null;
    S
        ? (U = (0, r.jsx)(l.XH, {
              headingSubText: A,
              planOptions: R,
              eligibleForMultiMonthPlans: !1,
              selectedPlanId: N,
              showSecondarySubTexts: !0,
          }))
        : null != I &&
          (k = (0, r.jsx)(u._, {
              type: f.N$.PREMIUM_SWITCH_PLAN,
              invoicePreview: I,
              subscriptionPlan: v,
              isPrepaidPaymentSource: P,
              isPremiumGroupPurchase: m,
              bottomSubText: A,
          }));
    let G = y ? T : (0, r.jsx)("div", { ref: O }),
        F = y ? null : T;
    return (0, r.jsx)(s.rg, {
        shouldShowGlobalNotices: !0,
        upperInlineNoticeProps: M,
        paymentSelectContent: (0, r.jsxs)(r.Fragment, { children: [D, L] }),
        subscriptionDetailsContent: G,
        purchaseItemContent: k,
        planSelectContent: U,
        invoiceSummaryContent: F,
        legalContent: w,
        invoiceTotalDueLabel: b ? p.intl.string(h.default.R0cZsM) : p.intl.string(h.default["11g67A"]),
        invoiceTotalDueValue: null != I ? (0, _.U5)(I) : void 0,
        promotionalNoticeContent: x,
    });
};
