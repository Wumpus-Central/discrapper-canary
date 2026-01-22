n.d(t, {
    N$: () => p,
    eb: () => h,
    yf: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(580630),
    l = n(735164),
    c = n(156962),
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
            renewalInvoicePreview: s,
            planSwitchLoading: o,
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
                      renewalInvoicePreview: s,
                  }
                : null == a || null == s || o
                  ? {
                        type: "LOADING",
                        invoicePreview: null,
                    }
                  : {
                        type: "PREMIUM_DEFAULT",
                        invoicePreview: a,
                        renewalInvoicePreview: s,
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
            enablePremiumBrandRefresh: A,
            premiumBrandRefreshBackgroundClassName: v,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: S } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(u.DP, {
                plan: E,
                className: a()(f.SU, v),
                isPrepaidPaymentSource: y,
                isCustomGift: O,
                invoicePreview: S,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(l.pK, { negativeMarginTop: !m }),
                    (0, r.jsxs)(l.Yx, {
                        className: a()(f.SU, v),
                        children: [
                            (0, r.jsxs)("div", {
                                className: f.W3,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/bold",
                                        children: d.intl.string(d.t.txajQG),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        children: d.intl.format(d.t.hXcaLT, {
                                            price: (0, o.$g)(0, S.currency, {
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
                                    invoice: S,
                                    plan: E,
                                }),
                            }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: s } = t;
            return (
                h && S.subscriptionPeriodEnd !== s.subscriptionPeriodEnd && (e = S.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        b &&
                            (0, r.jsx)(c.v, {
                                fractionalPremiumInfo: g,
                                enablePremiumBrandRefresh: A,
                            }),
                        (0, r.jsxs)(l.Yx, {
                            className: a()(f.SU, v),
                            children: [
                                (0, r.jsx)(l.Xd, { children: d.intl.string(d.t["2eh+Co"]) }),
                                (0, r.jsx)(u.mT, {
                                    invoice: S,
                                    newPlan: E,
                                    isPrepaidPaymentSource: y,
                                    referralTrialOfferId: _,
                                }),
                                y
                                    ? null
                                    : (0, r.jsx)(u.m0, {
                                          renewalInvoice: s,
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
