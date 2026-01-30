n.d(t, {
    N$: () => p,
    eb: () => h,
    yf: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(580630),
    l = n(735164),
    c = n(934581),
    u = n(692440),
    d = n(985018),
    f = n(982571),
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
                      renewalInvoicePreview: o,
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
            showFractionalPremiumBanner: y,
            isPrepaid: b,
            isCustomGift: O,
            enablePremiumBrandRefresh: v,
            premiumBrandRefreshBackgroundClassName: A,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: I } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(u.DP, {
                plan: E,
                className: a()(f.SU, A),
                isPrepaidPaymentSource: b,
                isCustomGift: O,
                invoicePreview: I,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.pK, {
                        negativeMarginTop: !m,
                    }),
                    (0, r.jsxs)(l.Yx, {
                        className: a()(f.SU, A),
                        children: [
                            (0, r.jsxs)("div", {
                                className: f.W3,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/bold",
                                        children: d.intl.string(d.t.txajQG),
                                    }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        children: d.intl.format(d.t.hXcaLT, {
                                            price: (0, s.$g)(0, I.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: f.SV,
                                children: (0, r.jsx)(u.tC, {
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
                        y &&
                            (0, r.jsx)(c.vi, {
                                fractionalPremiumInfo: g,
                                enablePremiumBrandRefresh: v,
                            }),
                        (0, r.jsxs)(l.Yx, {
                            className: a()(f.SU, A),
                            children: [
                                (0, r.jsx)(l.Xd, {
                                    children: d.intl.string(d.t["2eh+Co"]),
                                }),
                                (0, r.jsx)(u.mT, {
                                    invoice: I,
                                    newPlan: E,
                                    isPrepaidPaymentSource: b,
                                    referralTrialOfferId: _,
                                }),
                                b
                                    ? null
                                    : (0, r.jsx)(u.m0, {
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
