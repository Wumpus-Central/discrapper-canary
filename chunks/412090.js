n.d(t, {
    _: () => R,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(397927),
    a = n(854354),
    s = n(270537),
    o = n(669510),
    l = n(234419),
    c = n(446929),
    u = n(692440),
    d = n(815545),
    f = n(494230),
    p = n(299301),
    _ = n(927578),
    h = n(788868),
    m = n(985018),
    g = n(756366),
    E = n(220264);

function b(e, t, n) {
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

function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e, t) => {
        if (1 === t)
            switch (e) {
                case h.WT.MONTH:
                    return m.intl.string(g.default.ajn5LL);
                case h.WT.YEAR:
                    return m.intl.string(g.default.FNijW7);
            }
        return m.intl.string(g.default.jxUJkZ);
    },
    S = (e, t, n) => {
        var r;
        return {
            id: null != (r = e.discount_id) ? r : t,
            label: n,
            amount: -e.amount,
        };
    },
    I = (e, t) => {
        let {
                isPrepaidPaymentSource: n,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                premiumTrialOffer: a,
            } = t,
            { newPlanInvoiceItem: s, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, d.qi)(e, i),
            c = r.type === p.N$.PREMIUM_DEFAULT ? o : void 0,
            {
                label: u,
                amount: f,
                amountWithoutDiscount: _,
                subscriptionDiscount: h,
                entitlementDiscount: E,
                trialDiscount: b,
            } = (0, d.Ol)(s, {
                overrideAmount: c,
                subscriptionPlan: i,
                premiumTrialOffer: a,
                isPrepaidPaymentSource: n,
                currency: e.currency,
            }),
            y = null != h || null != E || null != b,
            O = [
                {
                    id: s.id,
                    label: u,
                    amount: y ? _ : f,
                },
                ...l.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                })),
            ];
        return (
            null != b
                ? O.push(S(b, "trial-discount", m.intl.string(g.default["7LeLN4"])))
                : (null != h && O.push(S(h, "subscription-discount", m.intl.string(g.default["9yHcmL"]))),
                  null != E && O.push(S(E, "entitlement-discount", m.intl.string(m.t.A7Hpfs)))),
            O
        );
    },
    T = (e, t) => {
        let { isCustomGift: n, isPrepaidPaymentSource: r, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, u.Lw)(i, {
                    isCustomGift: n,
                    isPrepaidPaymentSource: r,
                }),
                amount: e.total - e.tax,
            },
        ];
    },
    C = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                premiumTrialOffer: o,
                isCustomGift: l,
            } = e,
            { invoicePreview: c } = n,
            u =
                n.type === p.N$.PREMIUM_GIFT
                    ? T(c, {
                          isCustomGift: l,
                          isPrepaidPaymentSource: t,
                          subscriptionPlan: i,
                      })
                    : I(c, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          premiumTrialOffer: o,
                      }),
            d = (0, a.l)(c, {
                manualLineItems: u,
                addTaxLineItem: !0,
            });
        return (0, r.jsx)(s.V, {
            label: m.intl.string(g.default.eoXh7B),
            lineItems: d,
            currency: c.currency,
        });
    },
    N = (e, t) => {
        let n = (0, d.Q8)(e),
            { intervalType: r, intervalCount: i } = (0, _.Ge)(e),
            a = e.currency;
        return {
            lineItems: n.map((e) => {
                let { subscriptionPlanPrice: n } = e,
                    { label: r } = (0, d.Ol)(e, {
                        premiumTrialOffer: t,
                        currency: a,
                    });
                return {
                    id: e.id,
                    label: r,
                    amount: n,
                    tooltip: e.tooltipText,
                };
            }),
            intervalType: r,
            intervalCount: i,
            currency: a,
            label: m.intl.format(g.default["57B1ks"], {
                renewalDate: e.subscriptionPeriodEnd,
            }),
            totalLineItemLabel: v(r, i),
        };
    },
    R = (e) => {
        let { referralTrialOfferId: t, selectedPlanId: n, priceOptions: a } = e,
            {
                error: s,
                isGift: u,
                oneTimePurchaseNitroGiftInvoicePreview: d,
                subscriptionPeriodEnd: _,
                trialInvoicePreview: h,
                proratedInvoicePreview: g,
                renewalInvoicePreview: b,
                planSwitchLoading: O,
                plan: v,
                isPrepaid: S,
                discountInvoiceItems: I,
                premiumPlanOptions: T,
                shouldAllowPlanSelect: R,
                isCustomGift: w,
            } = (0, f.L)(e),
            P = (0, p.yf)({
                error: s,
                isGift: u,
                oneTimePurchaseNitroGiftInvoicePreview: d,
                trialInvoicePreview: h,
                proratedInvoicePreview: g,
                renewalInvoicePreview: b,
                planSwitchLoading: O,
            }),
            D = (0, l.V)(t),
            x = (0, c.RO)({
                selectedPlanId: n,
                priceOptions: a,
                planOptions: T,
                eligibleForMultiMonthPlans: !1,
                subscriptionPeriodEnd: _,
                discountInvoiceItems: I,
            }),
            L = (0, r.jsx)(
                c.fJ,
                A(
                    y(
                        {
                            planOptions: T,
                        },
                        x,
                    ),
                    {
                        shouldUseUnifiedCheckoutUI: !0,
                    },
                ),
            );
        if (null == P || P.type === p.N$.LOADING) return null;
        let j = (0, r.jsx)(C, {
                invoiceSummaryTypeWithPreview: P,
                subscriptionPlan: v,
                isPrepaidPaymentSource: S,
                premiumTrialOffer: D,
                isCustomGift: w,
            }),
            M = null;
        if (
            !S &&
            (P.type === p.N$.PREMIUM_DEFAULT || P.type === p.N$.PREMIUM_WITH_TRIAL) &&
            null != P.renewalInvoicePreview
        ) {
            let e = N(P.renewalInvoicePreview, D);
            M = (0, r.jsx)(o._, y({}, e));
        }
        return (0, r.jsxs)("div", {
            children: [
                R ? L : null,
                (0, r.jsx)("div", {
                    style: {
                        height: 12,
                    },
                }),
                M,
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    className: E.S,
                    children: m.intl.string(m.t["YH7B+D"]),
                }),
                (0, r.jsx)("div", {
                    style: {
                        height: 24,
                    },
                }),
                j,
                (0, r.jsx)("div", {
                    style: {
                        height: 12,
                    },
                }),
            ],
        });
    };
