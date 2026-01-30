n.d(t, {
    XH: () => E,
    Z$: () => g,
    l$: () => b,
});
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(854354),
    o = n(270537),
    s = n(934581),
    l = n(446929),
    c = n(299301),
    u = n(888751),
    d = n(985018),
    f = n(756366);

function p(e, t, n) {
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

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                premiumTrialOffer: s,
                isCustomGift: l,
            } = e,
            { invoicePreview: p } = n,
            _ =
                n.type === c.N$.PREMIUM_GIFT
                    ? (0, u.fk)(p, {
                          isCustomGift: l,
                          isPrepaidPaymentSource: t,
                          subscriptionPlan: i,
                      })
                    : (0, u.iQ)(p, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          premiumTrialOffer: s,
                      }),
            h = (0, a.lp)(p, {
                manualLineItems: _,
                addTaxLineItem: !0,
            });
        return (0, r.jsx)(o.V, {
            label: d.intl.string(f.default.eoXh7B),
            lineItems: h,
            currency: p.currency,
            totalDueLabel: d.intl.string(f.default.R0cZsM),
        });
    },
    E = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: s,
            } = e,
            c = (0, l.RO)({
                selectedPlanId: t,
                priceOptions: n,
                planOptions: i,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: o,
                discountInvoiceItems: s,
            });
        return (0, r.jsx)(
            l.fJ,
            m(
                _(
                    {
                        planOptions: i,
                    },
                    c,
                ),
                {
                    shouldUseUnifiedCheckoutUI: !0,
                },
            ),
        );
    },
    y = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: r, subscriptionPeriodEnd: i } = e,
            a = n
                ? {
                      variant: s.uA.TRIAL,
                      trialPeriod: r,
                      trialEnd: i,
                  }
                : {};
        return {
            fractionalPremiumBannerMessage: (0, s.NQ)(
                _(
                    {
                        fractionalPremiumInfo: t,
                    },
                    a,
                ),
            ),
        };
    },
    b = (e) => {
        let { fractionalPremiumInfo: t, isEligibleForTrial: n, trialPeriodCopy: a, subscriptionPeriodEnd: o } = e,
            { fractionalPremiumBannerMessage: s } = y({
                fractionalPremiumInfo: t,
                isEligibleForTrial: n,
                trialPeriodCopy: a,
                subscriptionPeriodEnd: o,
            });
        return null != s && "" !== s
            ? (0, r.jsx)(i.wx6, {
                  type: "info",
                  children: s,
              })
            : null;
    };
