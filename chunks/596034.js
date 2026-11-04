var n,
    r = l(477900);
l(582128);
var a = l(834730),
    s = l(150934),
    i = l(118982),
    o = l(403362),
    c = l(975571),
    d = l(879610),
    u = l(580630),
    m = l(652215),
    x = l(682901),
    h = l(379912),
    p = l(792996),
    f = l(484742);
function j(e) {
    let { value: t, onChange: l, disabled: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: p.intl.string(h.default["5dmUS+"]),
            }),
            (0, r.jsx)(s.S, { disabled: n, label: p.intl.string(h.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let v = { [x.WT.DAY]: h.default.iPorlt, [x.WT.MONTH]: h.default["8CYJ8Y"], [x.WT.YEAR]: h.default.gvaGGA };
function b(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: n,
            currency: r,
            interval: a,
            intervalCount: s,
            startDate: i,
            multiPeriodDiscountAttributes: o,
        } = e,
        x = (0, u.$g)(l, r),
        h = (0, u.$g)(n, r),
        f = m.X7G.PAID_TERMS,
        j = m.qF7.CONTACT_US,
        b = c.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: h,
        interval: p.intl.formatToPlainString(v[a], { intervalCount: s }),
        startDate: i,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: l } = e;
            if (null != l)
                return {
                    discountedRenewalPrice: (0, u.$g)(l.discountedRenewalPrice, t),
                    discountEndDate: l.discountEndDate,
                    priceWithoutDiscount: (0, u.$g)(l.priceWithoutDiscount, t),
                    trialDuration: (0, d.re)({ intervalType: l.intervalType, intervalCount: l.intervalCount }),
                };
        })({ multiPeriodDiscountAttributes: o, currency: r }),
        paidServicesTermsUrl: f,
        contactUsUrl: j,
        subscriptionsFaqUrl: b,
    };
}
var g =
    (((n = {})[(n.Subscription = 0)] = "Subscription"),
    (n[(n.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (n[(n.SubscriptionApplication = 2)] = "SubscriptionApplication"),
    (n[(n.GuildProductOneTimePurchase = 3)] = "GuildProductOneTimePurchase"),
    (n[(n.OrbsRedemption = 4)] = "OrbsRedemption"),
    (n[(n.Shop = 5)] = "Shop"),
    (n[(n.PremiumAppsOneTimePurchase = 6)] = "PremiumAppsOneTimePurchase"),
    (n[(n.GiftNitro = 7)] = "GiftNitro"),
    (n[(n.GiftShop = 8)] = "GiftShop"),
    (n[(n.GiftGameShop = 9)] = "GiftGameShop"),
    (n[(n.OrbsGameShop = 10)] = "OrbsGameShop"),
    n);
l.d(
    t,
    {},
    {
        I: g,
        _: function (e) {
            return (0, r.jsxs)("div", {
                className: f.k,
                children: [
                    null != e.immediateDelivery && (0, r.jsx)(j, { ...e.immediateDelivery }),
                    (0, r.jsx)(a.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: (function (e) {
                            let { variant: t, isExpressCheckout: l } = e,
                                n = m.X7G.PAID_TERMS,
                                r = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                            switch (t.type) {
                                case 0:
                                case 1:
                                    let a = b(t);
                                    if (null != a.multiPeriodDiscountAttributes) {
                                        let {
                                                discountEndDate: e,
                                                discountedRenewalPrice: t,
                                                priceWithoutDiscount: n,
                                                trialDuration: r,
                                            } = a.multiPeriodDiscountAttributes,
                                            s = {
                                                totalDue: a.totalDue,
                                                trialOrDiscountPrice: t,
                                                trialDuration: r,
                                                trialOrDiscountEndDate: e,
                                                fullRenewalPrice: n,
                                                interval: a.interval,
                                                subscriptionsFaqUrl: a.subscriptionsFaqUrl,
                                                paidServicesTermsUrl: a.paidServicesTermsUrl,
                                                contactUsUrl: a.contactUsUrl,
                                            };
                                        return p.intl.format(l ? h.default.R85gcN : h.default["A+qfZ+"], {
                                            ...s,
                                            purchaseButtonText: a.purchaseButtonText,
                                        });
                                    }
                                    if (1 === t.type) return p.intl.format(h.default["2pNIbI"], a);
                                    return p.intl.format(l ? h.default.FqlTCu : h.default.OH1Evm, a);
                                case 2:
                                    return p.intl.format(h.default.bbgJdE, b(t));
                                case 4:
                                    return p.intl.format(h.default.IP93kX, {
                                        ...t,
                                        paidServicesTermsUrl: n,
                                        virtualGoodsTermsUrl: r,
                                    });
                                case 5:
                                    return p.intl.format(l ? h.default["ztU/1y"] : h.default.ITY3j6, {
                                        ...t,
                                        paidServicesTermsUrl: n,
                                        virtualGoodsTermsUrl: r,
                                    });
                                case 3:
                                    return p.intl.format(h.default.EOOWpo, { ...t, paidServicesTermsUrl: n });
                                case 6:
                                    return p.intl.format(h.default.G0nk6B, { ...t, paidServicesTermsUrl: n });
                                case 7:
                                    return p.intl.format(h.default.P5KfYx, { ...t, paidServicesTermsUrl: n });
                                case 8:
                                    return p.intl.format(l ? h.default["4EZ0L7"] : h.default.BkYev7, {
                                        ...t,
                                        paidServicesTermsUrl: n,
                                        virtualGoodsTermsUrl: r,
                                    });
                                case 9:
                                case 10:
                                    let { applicationId: s, applicationName: c, shouldAppendDisclaimer: d } = t,
                                        u = c ?? "",
                                        x = (0, i.k3)(null != s ? { id: s, name: u } : void 0);
                                    if (d)
                                        return p.intl.format(9 === t.type ? h.default["0Zl+Xt"] : h.default["5fbNBX"], {
                                            ...t,
                                            applicationName: u,
                                            paidServicesTermsUrl: n,
                                            platformInfo: x,
                                            virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                        });
                                    return p.intl.format(9 === t.type ? h.default.OVhTE7 : h.default.cwuBkH, {
                                        ...t,
                                        applicationName: u,
                                        paidServicesTermsUrl: n,
                                        virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                    });
                                default:
                                    (0, o.xb)(t);
                            }
                        })({ variant: e.variant, isExpressCheckout: e.isExpressCheckout ?? !1 }),
                    }),
                    e.paymentSourceType === m.hes.PAYSAFE_CARD &&
                        (0, r.jsx)(a.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: p.intl.string(p.t.kj9VLI),
                        }),
                    e.paymentSourceType === m.hes.SOFORT &&
                        (0, r.jsx)(a.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: p.intl.string(p.t["UYy1/h"]),
                        }),
                ],
            });
        },
    },
);
