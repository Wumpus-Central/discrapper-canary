n.d(t, { IJ: () => p, N$: () => m, eb: () => f, yf: () => _ });
var a,
    r = n(627968);
n(64700);
var l = n(834730),
    i = n(580630),
    s = n(735164),
    o = n(156962),
    u = n(692440),
    c = n(985018),
    d = n(814304),
    m =
        (((a = {}).PREMIUM_GIFT = "PREMIUM_GIFT"),
        (a.PREMIUM_WITH_TRIAL = "PREMIUM_WITH_TRIAL"),
        (a.PREMIUM_DEFAULT = "PREMIUM_DEFAULT"),
        (a.PREMIUM_SWITCH_PLAN = "PREMIUM_SWITCH_PLAN"),
        (a.LOADING = "LOADING"),
        a);
let p = new Set(["PREMIUM_DEFAULT", "PREMIUM_SWITCH_PLAN"]),
    _ = (e) => {
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
    f = (e) => {
        let {
            invoiceSummaryTypeWithPreview: t,
            priceOptions: n,
            trialFooterMessageOverride: a,
            hideSubscriptionDetails: m,
            referralTrialOfferId: p,
            isTrial: _,
            inReverseTrial: f,
            fractionalPremiumInfo: g,
            plan: b,
            showFractionalPremiumBanner: v,
            isPrepaid: x,
            isCustomGift: h,
            enablePremiumBrandRefresh: I,
        } = e;
        if (null == t || "LOADING" === t.type) return null;
        let { invoicePreview: A } = t;
        if ("PREMIUM_GIFT" === t.type)
            return (0, r.jsx)(u.DP, {
                plan: b,
                className: d.SU,
                isPrepaidPaymentSource: x,
                isCustomGift: h,
                invoicePreview: A,
            });
        if ("PREMIUM_WITH_TRIAL" === t.type)
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(s.pK, { negativeMarginTop: !f, invisible: !0 }),
                    (0, r.jsxs)(s.Yx, {
                        className: d.SU,
                        children: [
                            (0, r.jsxs)("div", {
                                className: d.W3,
                                children: [
                                    (0, r.jsx)(l.E, { variant: "text-md/bold", children: c.intl.string(c.t.txajQG) }),
                                    (0, r.jsx)(l.E, {
                                        variant: "text-md/normal",
                                        children: c.intl.format(c.t.hXcaLT, {
                                            price: (0, i.$g)(0, A.currency, {
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", { className: d.SV, children: (0, r.jsx)(u.tC, { invoice: A, plan: b }) }),
                        ],
                    }),
                ],
            });
        if ("PREMIUM_DEFAULT" === t.type) {
            let e,
                { renewalInvoicePreview: l } = t;
            return (
                _ && A.subscriptionPeriodEnd !== l.subscriptionPeriodEnd && (e = A.subscriptionPeriodEnd),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        v && !f && (0, r.jsx)(o.vi, { fractionalPremiumInfo: g, enablePremiumBrandRefresh: I }),
                        (0, r.jsxs)(s.Yx, {
                            className: d.SU,
                            children: [
                                (0, r.jsx)(s.Xd, { children: c.intl.string(c.t["2eh+Co"]) }),
                                (0, r.jsx)(u.mT, {
                                    invoice: A,
                                    newPlan: b,
                                    isPrepaidPaymentSource: x,
                                    referralTrialOfferId: p,
                                }),
                                x
                                    ? null
                                    : (0, r.jsx)(u.m0, {
                                          renewalInvoice: l,
                                          isTrial: _,
                                          priceOptions: n,
                                          overrideRenewalDate: e,
                                          trialFooterMessageOverride: a,
                                          hideSubscriptionDetails: m,
                                      }),
                            ],
                        }),
                    ],
                })
            );
        }
    };
