n.d(t, { IJ: () => p, N$: () => m, eb: () => g, yf: () => f });
var l,
    a = n(627968);
n(64700);
var r = n(834730),
    i = n(580630),
    s = n(735164),
    u = n(531506),
    o = n(692440),
    c = n(375708),
    d = n(814304),
    m =
        (((l = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (l.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (l.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
        (l.PREMIUM_SWITCH_PLAN = "PREMIUM_SWITCH_PLAN"),
        (l.LOADING = "LOADING"),
        l);
let p = new Set(["PREMIUM_DEFAULT", "PREMIUM_SWITCH_PLAN"]),
    f = (e) => {
        let {
            error: t,
            isGift: n,
            oneTimePurchaseNitroGiftInvoicePreview: l,
            trialInvoicePreview: a,
            proratedInvoicePreview: r,
            renewalInvoicePreview: i,
            planSwitchLoading: s,
        } = e;
        if (null != t) return null;
        if (s);
        else if (n && null != l) return { type: "PREMIUM_GIFT", invoicePreview: l };
        else if (null != a) return { type: "PREMIUM_WITH_TRIAL", invoicePreview: a, renewalInvoicePreview: i };
        else if (null != r && null != i)
            return { type: "PREMIUM_DEFAULT", invoicePreview: r, renewalInvoicePreview: i };
        return { type: "LOADING", invoicePreview: null };
    },
    g = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: l,
            hideSubscriptionDetails: m,
            referralTrialOfferId: p,
            isTrial: f,
            inReverseTrial: g,
            fractionalPremiumInfo: v,
            plan: x,
            showFractionalPremiumBanner: b,
            isPrepaid: h,
            isCustomGift: y,
            enablePremiumBrandRefresh: A,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: I } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, a.jsx)(o.DP, {
                plan: x,
                className: d.SU,
                isPrepaidPaymentSource: h,
                isCustomGift: y,
                invoicePreview: I,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(s.pK, { negativeMarginTop: !g, invisible: !0 }),
                    (0, a.jsxs)(s.Yx, {
                        className: d.SU,
                        children: [
                            (0, a.jsxs)("div", {
                                className: d.W3,
                                children: [
                                    (0, a.jsx)(r.E, { variant: "text-md/bold", children: c.intl.string(c.t.txajQG) }),
                                    (0, a.jsx)(r.E, {
                                        variant: "text-md/normal",
                                        children: c.intl.format(c.t.hXcaLT, {
                                            price: (0, i.$g)(0, I.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", { className: d.SV, children: (0, a.jsx)(o.tC, { invoice: I, plan: x }) }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: r } = t;
            return (
                f && I.subscriptionPeriodEnd !== r.subscriptionPeriodEnd && (e = I.subscriptionPeriodEnd),
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        b && !g && (0, a.jsx)(u.vi, { fractionalPremiumInfo: v, enablePremiumBrandRefresh: A }),
                        (0, a.jsxs)(s.Yx, {
                            className: d.SU,
                            children: [
                                (0, a.jsx)(s.Xd, { children: c.intl.string(c.t["2eh+Co"]) }),
                                (0, a.jsx)(o.mT, {
                                    invoice: I,
                                    newPlan: x,
                                    isPrepaidPaymentSource: h,
                                    referralTrialOfferId: p,
                                }),
                                h
                                    ? null
                                    : (0, a.jsx)(o.m0, {
                                          renewalInvoice: r,
                                          isTrial: f,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: l,
                                          hideSubscriptionDetails: m,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
