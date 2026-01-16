n.d(t, {
    G0: () => p,
    mn: () => _,
    sx: () => h,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(937615),
    l = n(811334),
    c = n(346071),
    u = n(42818),
    d = n(388032),
    f = n(400005),
    p = (function (e) {
        return (
            (e.PREMIUM_GIFT = "PREMIUM_GIFT"),
            (e.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
            (e.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
            (e.LOADING = "LOADING"),
            e
        );
    })({});
let _ = (e) => {
        let {
            error: t,
            isGift: n,
            oneTimePurchaseNitroGiftInvoicePreview: r,
            trialInvoicePreview: i,
            proratedInvoicePreview: a,
            renewalInvoicePreview: o,
            planSwitchLoading: s,
        } = e;
        return null != t
            ? null
            : n && null != r
              ? {
                    type: "PREMIUM_GIFT",
                    invoicePreview: r,
                }
              : null != i
                ? {
                      type: "PREMIUM_WITH_TRIAL",
                      invoicePreview: i,
                  }
                : null == a || null == o || s
                  ? {
                        type: "LOADING",
                        invoicePreview: null,
                    }
                  : {
                        type: "PREMIUM_DEFAULT",
                        invoicePreview: a,
                        renewalInvoicePreview: o,
                    };
    },
    h = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: i,
            hideSubscriptionDetails: p,
            referralTrialOfferId: _,
            isTrial: h,
            inReverseTrial: m,
            fractionalPremiumInfo: g,
            plan: E,
            showFractionalPremiumBanner: b,
            isPrepaid: y,
            isCustomGift: O,
            enablePremiumBrandRefresh: v,
            premiumBrandRefreshBackgroundClassName: S,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: I } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(u.e9, {
                plan: E,
                className: a()(f.invoice, S),
                isPrepaidPaymentSource: y,
                isCustomGift: O,
                invoicePreview: I,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.UN, { negativeMarginTop: !m }),
                    (0, r.jsxs)(l.aO, {
                        className: a()(f.invoice, S),
                        children: [
                            (0, r.jsxs)("div", {
                                className: f.trialPriceLine,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: d.intl.string(d.t.txajQG),
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: d.intl.format(d.t.hXcaLT, {
                                            price: (0, s.T4)(0, I.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: f.afterTrialPriceLine,
                                children: (0, r.jsx)(u.yT, {
                                    invoice: I,
                                    plan: E,
                                }),
                            }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: o } = t;
            return (
                h && I.subscriptionPeriodEnd !== o.subscriptionPeriodEnd && (e = I.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        b &&
                            (0, r.jsx)(c.n, {
                                fractionalPremiumInfo: g,
                                enablePremiumBrandRefresh: v,
                            }),
                        (0, r.jsxs)(l.aO, {
                            className: a()(f.invoice, S),
                            children: [
                                (0, r.jsx)(l.Z9, { children: d.intl.string(d.t["2eh+Co"]) }),
                                (0, r.jsx)(u.Lu, {
                                    invoice: I,
                                    newPlan: E,
                                    isPrepaidPaymentSource: y,
                                    referralTrialOfferId: _,
                                }),
                                y
                                    ? null
                                    : (0, r.jsx)(u.nd, {
                                          renewalInvoice: o,
                                          isTrial: h,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: i,
                                          hideSubscriptionDetails: p,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
