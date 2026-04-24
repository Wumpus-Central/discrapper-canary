n.d(t, { IJ: () => _, N$: () => p, eb: () => b, yf: () => m });
var a,
    r = n(627968);
n(64700);
var l = n(834730),
    i = n(580630),
    s = n(735164),
    o = n(531506),
    c = n(692440),
    d = n(985018),
    u = n(814304),
    p =
        (((a = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (a.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (a.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
        (a.PREMIUM_SWITCH_PLAN = "PREMIUM_SWITCH_PLAN"),
        (a.LOADING = "LOADING"),
        a);
let _ = new Set(["PREMIUM_DEFAULT", "PREMIUM_SWITCH_PLAN"]),
    m = (e) => {
        let {
            error: t,
            isGift: n,
            oneTimePurchaseNitroGiftInvoicePreview: a,
            trialInvoicePreview: r,
            proratedInvoicePreview: l,
            renewalInvoicePreview: i,
            planSwitchLoading: s,
        } = e;
        return null != t
            ? null
            : n && null != a
              ? { type: "PREMIUM_GIFT", invoicePreview: a }
              : null != r
                ? { type: "PREMIUM_WITH_TRIAL", invoicePreview: r, renewalInvoicePreview: i }
                : null == l || null == i || s
                  ? { type: "LOADING", invoicePreview: null }
                  : { type: "PREMIUM_DEFAULT", invoicePreview: l, renewalInvoicePreview: i };
    },
    b = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: a,
            hideSubscriptionDetails: p,
            referralTrialOfferId: _,
            isTrial: m,
            inReverseTrial: b,
            fractionalPremiumInfo: f,
            plan: g,
            showFractionalPremiumBanner: h,
            isPrepaid: x,
            isCustomGift: v,
            enablePremiumBrandRefresh: A,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: y } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(c.DP, {
                plan: g,
                className: u.SU,
                isPrepaidPaymentSource: x,
                isCustomGift: v,
                invoicePreview: y,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.pK, { negativeMarginTop: !b, invisible: !0 }),
                    (0, r.jsxs)(s.Yx, {
                        className: u.SU,
                        children: [
                            (0, r.jsxs)("div", {
                                className: u.W3,
                                children: [
                                    (0, r.jsx)(l.E, { variant: "text-md/bold", children: d.intl.string(d.t.txajQG) }),
                                    (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        children: d.intl.format(d.t.hXcaLT, {
                                            price: (0, i.$g)(0, y.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: u.SV, children: (0, r.jsx)(c.tC, { invoice: y, plan: g }) }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: l } = t;
            return (
                m && y.subscriptionPeriodEnd !== l.subscriptionPeriodEnd && (e = y.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        h && !b && (0, r.jsx)(o.vi, { fractionalPremiumInfo: f, enablePremiumBrandRefresh: A }),
                        (0, r.jsxs)(s.Yx, {
                            className: u.SU,
                            children: [
                                (0, r.jsx)(s.Xd, { children: d.intl.string(d.t["2eh+Co"]) }),
                                (0, r.jsx)(c.mT, {
                                    invoice: y,
                                    newPlan: g,
                                    isPrepaidPaymentSource: x,
                                    referralTrialOfferId: _,
                                }),
                                x
                                    ? null
                                    : (0, r.jsx)(c.m0, {
                                          renewalInvoice: l,
                                          isTrial: m,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: a,
                                          hideSubscriptionDetails: p,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
