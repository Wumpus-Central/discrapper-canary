n.d(t, {
    _: () => j,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(397927),
    a = n(854354),
    s = n(93159),
    o = n(270537),
    l = n(241989),
    c = n(669510),
    u = n(234419),
    d = n(446929),
    f = n(692440),
    p = n(815545),
    _ = n(494230),
    h = n(299301),
    m = n(927578),
    g = n(580630),
    E = n(427262),
    y = n(788868),
    b = n(985018),
    O = n(756366),
    v = n(220264);

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
            n = (0, m.m6)(e.id);
        switch (t) {
            case y.WT.MONTH:
                let r = b.intl.string(O.default.ZnoRKt);
                return n === y.PremiumTypes.TIER_0
                    ? b.intl.formatToPlainString(O.default.Z9mu9q, {
                          timeInterval: r,
                      })
                    : b.intl.formatToPlainString(O.default["8Jt4Dw"], {
                          timeInterval: r,
                      });
            case y.WT.YEAR:
                let i = b.intl.string(O.default.Xrg8aC);
                return n === y.PremiumTypes.TIER_0
                    ? b.intl.formatToPlainString(O.default.Z9mu9q, {
                          timeInterval: i,
                      })
                    : b.intl.formatToPlainString(O.default["8Jt4Dw"], {
                          timeInterval: i,
                      });
            case y.WT.DAY:
                let a = b.intl.string(O.default.WmjxYl);
                return n === y.PremiumTypes.TIER_0
                    ? b.intl.formatToPlainString(O.default.Z9mu9q, {
                          timeInterval: a,
                      })
                    : b.intl.formatToPlainString(O.default["8Jt4Dw"], {
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
            { newPlanInvoiceItem: s, basePlanFullAmount: o, invoiceAdjustmentDisplayItems: l } = (0, p.qi)(e, i),
            c = r.type === h.N$.PREMIUM_DEFAULT ? o : void 0,
            {
                label: u,
                amount: d,
                amountWithoutDiscount: f,
                subscriptionDiscount: _,
                entitlementDiscount: m,
                trialDiscount: g,
            } = (0, p.Ol)(s, {
                overrideAmount: c,
                subscriptionPlan: i,
                premiumTrialOffer: a,
                isPrepaidPaymentSource: n,
                currency: e.currency,
            }),
            E = null != _ || null != m || null != g,
            y = [
                {
                    id: s.id,
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
                ? y.push(C(g, "trial-discount", b.intl.string(O.default["7LeLN4"])))
                : (null != _ && y.push(C(_, "subscription-discount", b.intl.string(O.default["9yHcmL"]))),
                  null != m && y.push(C(m, "entitlement-discount", b.intl.string(b.t.A7Hpfs)))),
            y
        );
    },
    R = (e, t) => {
        let { isCustomGift: n, isPrepaidPaymentSource: r, subscriptionPlan: i } = t;
        return [
            {
                id: "premium-gift-line-item",
                label: (0, f.Lw)(i, {
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
                premiumTrialOffer: s,
                isCustomGift: l,
            } = e,
            { invoicePreview: c } = n,
            u =
                n.type === h.N$.PREMIUM_GIFT
                    ? R(c, {
                          isCustomGift: l,
                          isPrepaidPaymentSource: t,
                          subscriptionPlan: i,
                      })
                    : w(c, {
                          isPrepaidPaymentSource: t,
                          invoiceSummaryTypeWithPreview: n,
                          subscriptionPlan: i,
                          premiumTrialOffer: s,
                      }),
            d = (0, a.l)(c, {
                manualLineItems: u,
                addTaxLineItem: !0,
            });
        return (0, r.jsx)(o.V, {
            label: b.intl.string(O.default.eoXh7B),
            lineItems: d,
            currency: c.currency,
            totalDueLabel: b.intl.string(O.default.R0cZsM),
        });
    },
    D = (e, t, n) => {
        let r = (0, p.Q8)(t, e),
            { intervalType: i, intervalCount: a } = (0, m.Ge)(t),
            s = t.currency;
        return {
            lineItems: r.map((e) => {
                let { subscriptionPlanPrice: t, showGuildSubscriptionAdjustmentTooltip: r } = e,
                    { label: i } = (0, p.Ol)(e, {
                        premiumTrialOffer: n,
                        currency: s,
                    }),
                    a = r ? b.intl.format(b.t.UDop9c, {}) : void 0;
                return {
                    id: e.id,
                    label: i,
                    amount: t,
                    tooltip: a,
                };
            }),
            intervalType: i,
            intervalCount: a,
            currency: s,
            label: b.intl.format(O.default["57B1ks"], {
                renewalDate: t.subscriptionPeriodEnd,
            }),
            totalLineItemLabel: L(i, a),
        };
    },
    x = (e, t, n) => {
        var i;
        let { isPrepaidPaymentSource: a, giftRecipient: o } = n,
            l = e.type === h.N$.PREMIUM_GIFT,
            { invoicePreview: c } = e,
            u = l ? N(t) : (0, m.Mn)(t.id, !1, a),
            d =
                l && null != o
                    ? {
                          username: E.Ay.getUserTag(o, {
                              identifiable: "never",
                          }),
                          avatarUrl: o.getAvatarURL(void 0, 16),
                          nickname: E.Ay.getName(o),
                      }
                    : void 0,
            f = null == o ? b.intl.string(O.default.AM9XGb) : "",
            _ = l ? f : b.intl.string(O.default["2zUa6I"]),
            v = (0, m.m6)(t.id) === y.PremiumTypes.TIER_0 ? (0, r.jsx)(s.DH, {}) : (0, r.jsx)(s.JW, {}),
            { subscriptionPlanInvoiceItem: A } = (0, p.Sb)(c, t),
            I =
                null != (i = l ? (null == A ? void 0 : A.amount) : null == A ? void 0 : A.subscriptionPlanPrice)
                    ? i
                    : 0,
            S = (0, g.$g)(I, c.currency);
        return {
            label: u,
            description: _,
            price: e.type === h.N$.PREMIUM_GIFT ? S : (0, g.CE)(S, t.interval, t.intervalCount),
            gift: d,
            graphic: v,
        };
    },
    L = (e, t) => {
        if (1 === t)
            switch (e) {
                case y.WT.MONTH:
                    return b.intl.string(O.default.ajn5LL);
                case y.WT.YEAR:
                    return b.intl.string(O.default.FNijW7);
            }
        return b.intl.string(O.default.jxUJkZ);
    },
    j = (e) => {
        let { referralTrialOfferId: t, selectedPlanId: n, priceOptions: a } = e,
            {
                error: s,
                isGift: o,
                giftRecipient: f,
                oneTimePurchaseNitroGiftInvoicePreview: p,
                subscriptionPeriodEnd: m,
                trialInvoicePreview: g,
                proratedInvoicePreview: E,
                renewalInvoicePreview: y,
                planSwitchLoading: O,
                plan: A,
                isPrepaid: S,
                discountInvoiceItems: C,
                premiumPlanOptions: N,
                shouldAllowPlanSelect: w,
                isCustomGift: R,
            } = (0, _.L)(e),
            L = (0, h.yf)({
                error: s,
                isGift: o,
                oneTimePurchaseNitroGiftInvoicePreview: p,
                trialInvoicePreview: g,
                proratedInvoicePreview: E,
                renewalInvoicePreview: y,
                planSwitchLoading: O,
            }),
            j = (0, u.V)(t),
            M = (0, d.RO)({
                selectedPlanId: n,
                priceOptions: a,
                planOptions: N,
                eligibleForMultiMonthPlans: !1,
                subscriptionPeriodEnd: m,
                discountInvoiceItems: C,
            }),
            k = (0, r.jsx)(
                d.fJ,
                T(
                    I(
                        {
                            planOptions: N,
                        },
                        M,
                    ),
                    {
                        shouldUseUnifiedCheckoutUI: !0,
                    },
                ),
            );
        if (null == L || L.type === h.N$.LOADING) return null;
        let U = (0, r.jsx)(P, {
                invoiceSummaryTypeWithPreview: L,
                subscriptionPlan: A,
                isPrepaidPaymentSource: S,
                premiumTrialOffer: j,
                isCustomGift: R,
            }),
            G = null;
        if (
            !S &&
            (L.type === h.N$.PREMIUM_DEFAULT || L.type === h.N$.PREMIUM_WITH_TRIAL) &&
            null != L.renewalInvoicePreview
        ) {
            let e = D(L.invoicePreview, L.renewalInvoicePreview, j);
            G = (0, r.jsx)(c._, I({}, e));
        }
        let V = x(L, A, {
                isPrepaidPaymentSource: S,
                giftRecipient: f,
            }),
            F = w ? k : (0, r.jsx)(l.f7, I({}, V));
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", {
                    style: {
                        height: 24,
                    },
                }),
                F,
                (0, r.jsx)("div", {
                    style: {
                        height: 12,
                    },
                }),
                G,
                (0, r.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    className: v.S,
                    children: b.intl.string(b.t["YH7B+D"]),
                }),
                (0, r.jsx)("div", {
                    style: {
                        height: 24,
                    },
                }),
                U,
                (0, r.jsx)("div", {
                    style: {
                        height: 12,
                    },
                }),
            ],
        });
    };
