n.d(t, {
    _: () => M,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(637141),
    a = n(854354),
    o = n(69882),
    s = n(93159),
    l = n(270537),
    c = n(241989),
    u = n(669510),
    d = n(234419),
    f = n(446929),
    p = n(692440),
    _ = n(815545),
    h = n(494230),
    m = n(299301),
    g = n(927578),
    E = n(580630),
    y = n(427262),
    b = n(788868),
    O = n(985018),
    v = n(756366);

function A(e, t, n) {
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

function I(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}

function S(e, t) {
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

function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e, t, n) => {
        var r;
        return {
            id: null != (r = e.discount_id) ? r : t,
            label: n,
            amount: -e.amount,
        };
    },
    N = (e) => {
        let { interval: t } = e,
            n = (0, g.m6)(e.id);
        switch (t) {
            case b.WT.MONTH:
                let r = O.intl.string(v.default.ZnoRKt);
                return n === b.PremiumTypes.TIER_0
                    ? O.intl.formatToPlainString(v.default.Z9mu9q, {
                          timeInterval: r,
                      })
                    : O.intl.formatToPlainString(v.default["8Jt4Dw"], {
                          timeInterval: r,
                      });
            case b.WT.YEAR:
                let i = O.intl.string(v.default.Xrg8aC);
                return n === b.PremiumTypes.TIER_0
                    ? O.intl.formatToPlainString(v.default.Z9mu9q, {
                          timeInterval: i,
                      })
                    : O.intl.formatToPlainString(v.default["8Jt4Dw"], {
                          timeInterval: i,
                      });
            case b.WT.DAY:
                let a = O.intl.string(v.default.WmjxYl);
                return n === b.PremiumTypes.TIER_0
                    ? O.intl.formatToPlainString(v.default.Z9mu9q, {
                          timeInterval: a,
                      })
                    : O.intl.formatToPlainString(v.default["8Jt4Dw"], {
                          timeInterval: a,
                      });
        }
    },
    w = (e, t) => {
        let {
                isPrepaidPaymentSource: n,
                invoiceSummaryTypeWithPreview: r,
                subscriptionPlan: i,
                premiumTrialOffer: a,
            } = t,
            { newPlanInvoiceItem: o, basePlanFullAmount: s, invoiceAdjustmentDisplayItems: l } = (0, _.qi)(e, i),
            c = r.type === m.N$.PREMIUM_DEFAULT ? s : void 0,
            {
                label: u,
                amount: d,
                amountWithoutDiscount: f,
                subscriptionDiscount: p,
                entitlementDiscount: h,
                trialDiscount: g,
            } = (0, _.Ol)(o, {
                overrideAmount: c,
                subscriptionPlan: i,
                premiumTrialOffer: a,
                isPrepaidPaymentSource: n,
                currency: e.currency,
            }),
            E = null != p || null != h || null != g,
            y = [
                {
                    id: o.id,
                    label: u,
                    amount: E ? f : d,
                },
                ...l.map((e) => ({
                    id: e.id,
                    label: e.label,
                    amount: e.amount,
                })),
            ];
        return (
            null != g
                ? y.push(C(g, "trial-discount", O.intl.string(v.default["7LeLN4"])))
                : (null != p && y.push(C(p, "subscription-discount", O.intl.string(v.default["9yHcmL"]))),
                  null != h && y.push(C(h, "entitlement-discount", O.intl.string(O.t.A7Hpfs)))),
            y
        );
    },
    R = (e, t) => {
        let { isCustomGift: n, isPrepaidPaymentSource: r, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, p.Lw)(i, {
                    isCustomGift: n,
                    isPrepaidPaymentSource: r,
                }),
                amount: e.total - e.tax,
            },
        ];
    },
    P = (e) => {
        let {
                isPrepaidPaymentSource: t,
                invoiceSummaryTypeWithPreview: n,
                subscriptionPlan: i,
                premiumTrialOffer: o,
                isCustomGift: s,
            } = e,
            { invoicePreview: c } = n,
            u =
                n.type === m.N$.PREMIUM_GIFT
                    ? R(c, {
                          isCustomGift: s,
                          isPrepaidPaymentSource: t,
                          subscriptionPlan: i,
                      })
                    : w(c, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          premiumTrialOffer: o,
                      }),
            d = (0, a.l)(c, {
                manualLineItems: u,
                addTaxLineItem: !0,
            });
        return (0, r.jsx)(l.V, {
            label: O.intl.string(v.default.eoXh7B),
            lineItems: d,
            currency: c.currency,
            totalDueLabel: O.intl.string(v.default.R0cZsM),
        });
    },
    D = (e, t, n) => {
        let r = (0, _.Q8)(t, e),
            { intervalType: i, intervalCount: a } = (0, g.Ge)(t),
            o = t.currency;
        return {
            lineItems: r.map((e) => {
                let { subscriptionPlanPrice: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, _.Ol)(e, {
                        premiumTrialOffer: n,
                        currency: o,
                    }),
                    a = r ? O.intl.format(O.t.UDop9c, {}) : void 0;
                return {
                    id: e.id,
                    label: i,
                    amount: t,
                    tooltip: a,
                };
            }),
            intervalType: i,
            intervalCount: a,
            currency: o,
            label: O.intl.format(v.default["57B1ks"], {
                renewalDate: t.subscriptionPeriodEnd,
            }),
            totalLineItemLabel: x(i, a),
        };
    },
    L = (e, t, n) => {
        var i;
        let { isPrepaidPaymentSource: a, giftRecipient: o } = n,
            l = e.type === m.N$.PREMIUM_GIFT,
            { invoicePreview: c } = e,
            u = l ? N(t) : (0, g.Mn)(t.id, !1, a),
            d =
                l && null != o
                    ? {
                          username: y.Ay.getUserTag(o, {
                              identifiable: "never",
                          }),
                          avatarUrl: o.getAvatarURL(void 0, 16),
                          nickname: y.Ay.getName(o),
                      }
                    : void 0,
            f = null == o ? O.intl.string(v.default.AM9XGb) : "",
            p = l ? f : O.intl.string(v.default["2zUa6I"]),
            h = (0, g.m6)(t.id) === b.PremiumTypes.TIER_0 ? (0, r.jsx)(s.DH, {}) : (0, r.jsx)(s.JW, {}),
            { subscriptionPlanInvoiceItem: A } = (0, _.Sb)(c, t),
            I =
                null != (i = l ? (null == A ? void 0 : A.amount) : null == A ? void 0 : A.subscriptionPlanPrice)
                    ? i
                    : 0,
            S = (0, E.$g)(I, c.currency);
        return {
            label: u,
            description: p,
            price: e.type === m.N$.PREMIUM_GIFT ? S : (0, E.CE)(S, t.interval, t.intervalCount),
            gift: d,
            graphic: h,
        };
    },
    x = (e, t) => {
        if (1 === t)
            switch (e) {
                case b.WT.MONTH:
                    return O.intl.string(v.default.ajn5LL);
                case b.WT.YEAR:
                    return O.intl.string(v.default.FNijW7);
            }
        return O.intl.string(v.default.jxUJkZ);
    },
    M = (e) => {
        let {
                referralTrialOfferId: t,
                selectedPlanId: n,
                priceOptions: a,
                paymentSources: s,
                onPaymentSourceChange: l,
                handlePaymentSourceAdd: p,
                isTrial: _,
            } = e,
            {
                error: g,
                isGift: E,
                giftRecipient: y,
                oneTimePurchaseNitroGiftInvoicePreview: b,
                subscriptionPeriodEnd: v,
                trialInvoicePreview: A,
                proratedInvoicePreview: S,
                renewalInvoicePreview: C,
                planSwitchLoading: N,
                plan: w,
                isPrepaid: R,
                discountInvoiceItems: x,
                premiumPlanOptions: M,
                shouldAllowPlanSelect: j,
                isCustomGift: k,
                hidePersonalInformation: U,
                hasEntitlements: G,
                paymentSourceId: F,
                eligiblePaymentGateways: V,
            } = (0, h.L)(e),
            B = (0, r.jsx)(i.A, {
                shouldUseUnifiedCheckoutUI: !0,
                paymentSources: Object.values(s),
                selectedPaymentSourceId: F,
                newPaymentMethodOptionLabel: G && !_ ? O.intl.string(O.t.IGU7El) : null,
                onChange: l,
                onPaymentSourceAdd: p,
                hidePersonalInformation: U,
                isTrial: _,
                paymentGatewayRestrictions: V,
            }),
            H = (0, m.yf)({
                error: g,
                isGift: E,
                oneTimePurchaseNitroGiftInvoicePreview: b,
                trialInvoicePreview: A,
                proratedInvoicePreview: S,
                renewalInvoicePreview: C,
                planSwitchLoading: N,
            }),
            Y = (0, d.V)(t),
            W = (0, f.RO)({
                selectedPlanId: n,
                priceOptions: a,
                planOptions: M,
                eligibleForMultiMonthPlans: !1,
                subscriptionPeriodEnd: v,
                discountInvoiceItems: x,
            });
        if (null == H || H.type === m.N$.LOADING) return (0, r.jsx)(o.Ed, {});
        let K = (0, r.jsx)(P, {
                invoiceSummaryTypeWithPreview: H,
                subscriptionPlan: w,
                isPrepaidPaymentSource: R,
                premiumTrialOffer: Y,
                isCustomGift: k,
            }),
            z = null;
        if (
            !R &&
            (H.type === m.N$.PREMIUM_DEFAULT || H.type === m.N$.PREMIUM_WITH_TRIAL) &&
            null != H.renewalInvoicePreview
        ) {
            let e = D(H.invoicePreview, H.renewalInvoicePreview, Y);
            z = (0, r.jsx)(u._, I({}, e));
        }
        let q = L(H, w, {
                isPrepaidPaymentSource: R,
                giftRecipient: y,
            }),
            Z = j
                ? (0, r.jsx)(
                      f.fJ,
                      T(
                          I(
                              {
                                  planOptions: M,
                              },
                              W,
                          ),
                          {
                              shouldUseUnifiedCheckoutUI: !0,
                          },
                      ),
                  )
                : void 0,
            Q = j ? void 0 : (0, r.jsx)(c.f7, I({}, q));
        return (0, r.jsx)(o.rg, {
            planSelectContent: Z,
            purchaseItemContent: Q,
            subscriptionDetailsContent: z,
            paymentSelectContent: B,
            invoiceSummaryContent: K,
        });
    };
