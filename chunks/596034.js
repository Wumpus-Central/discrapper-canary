l.d(t, { I: () => N, _: () => g });
var a,
    n = l(477900);
l(582128);
var r = l(834730),
    s = l(150934),
    i = l(118982),
    o = l(403362),
    c = l(975571),
    d = l(24482),
    u = l(580630),
    m = l(652215),
    x = l(202541),
    f = l(758476),
    p = l(105292),
    h = l(484742);
function v(e) {
    let { value: t, onChange: l, disabled: a } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(f.default["5dmUS+"]),
            }),
            (0, n.jsx)(s.S, { disabled: a, label: p.intl.string(f.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let j = { [x.WT.DAY]: f.default.iPorlt, [x.WT.MONTH]: f.default["8CYJ8Y"], [x.WT.YEAR]: f.default.gvaGGA };
function E(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: a,
            currency: n,
            interval: r,
            intervalCount: s,
            startDate: i,
            multiPeriodDiscountAttributes: o,
        } = e,
        x = (0, u.$g)(l, n),
        f = (0, u.$g)(a, n),
        h = m.X7G.PAID_TERMS,
        v = m.qF7.CONTACT_US,
        E = c.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: f,
        interval: p.intl.formatToPlainString(j[r], { intervalCount: s }),
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
        })({ multiPeriodDiscountAttributes: o, currency: n }),
        paidServicesTermsUrl: h,
        contactUsUrl: v,
        subscriptionsFaqUrl: E,
    };
}
var N =
    (((a = {})[(a.Subscription = 0)] = "Subscription"),
    (a[(a.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (a[(a.SubscriptionApplication = 2)] = "SubscriptionApplication"),
    (a[(a.GuildProductOneTimePurchase = 3)] = "GuildProductOneTimePurchase"),
    (a[(a.OrbsRedemption = 4)] = "OrbsRedemption"),
    (a[(a.Shop = 5)] = "Shop"),
    (a[(a.PremiumAppsOneTimePurchase = 6)] = "PremiumAppsOneTimePurchase"),
    (a[(a.GiftNitro = 7)] = "GiftNitro"),
    (a[(a.GiftShop = 8)] = "GiftShop"),
    (a[(a.GiftGameShop = 9)] = "GiftGameShop"),
    (a[(a.OrbsGameShop = 10)] = "OrbsGameShop"),
    a);
function g(e) {
    return (0, n.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, n.jsx)(v, { ...e.immediateDelivery }),
            (0, n.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let { variant: t, isExpressCheckout: l } = e,
                        a = m.X7G.PAID_TERMS,
                        n = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (t.type) {
                        case 0:
                        case 1:
                            let r = E(t);
                            if (null != r.multiPeriodDiscountAttributes) {
                                let {
                                        discountEndDate: e,
                                        discountedRenewalPrice: t,
                                        priceWithoutDiscount: a,
                                        trialDuration: n,
                                    } = r.multiPeriodDiscountAttributes,
                                    s = {
                                        totalDue: r.totalDue,
                                        trialOrDiscountPrice: t,
                                        trialDuration: n,
                                        trialOrDiscountEndDate: e,
                                        fullRenewalPrice: a,
                                        interval: r.interval,
                                        subscriptionsFaqUrl: r.subscriptionsFaqUrl,
                                        paidServicesTermsUrl: r.paidServicesTermsUrl,
                                        contactUsUrl: r.contactUsUrl,
                                    };
                                return p.intl.format(l ? f.default.R85gcN : f.default["A+qfZ+"], {
                                    ...s,
                                    purchaseButtonText: r.purchaseButtonText,
                                });
                            }
                            if (1 === t.type) return p.intl.format(f.default["2pNIbI"], r);
                            return p.intl.format(l ? f.default.FqlTCu : f.default.OH1Evm, r);
                        case 2:
                            return p.intl.format(f.default.bbgJdE, E(t));
                        case 4:
                            return p.intl.format(f.default.IP93kX, {
                                ...t,
                                paidServicesTermsUrl: a,
                                virtualGoodsTermsUrl: n,
                            });
                        case 5:
                            return p.intl.format(l ? f.default["ztU/1y"] : f.default.ITY3j6, {
                                ...t,
                                paidServicesTermsUrl: a,
                                virtualGoodsTermsUrl: n,
                            });
                        case 3:
                            return p.intl.format(f.default.EOOWpo, { ...t, paidServicesTermsUrl: a });
                        case 6:
                            return p.intl.format(f.default.G0nk6B, { ...t, paidServicesTermsUrl: a });
                        case 7:
                            return p.intl.format(f.default.P5KfYx, { ...t, paidServicesTermsUrl: a });
                        case 8:
                            return p.intl.format(l ? f.default["4EZ0L7"] : f.default.BkYev7, {
                                ...t,
                                paidServicesTermsUrl: a,
                                virtualGoodsTermsUrl: n,
                            });
                        case 9:
                        case 10:
                            let { applicationId: s, applicationName: c, shouldAppendDisclaimer: d } = t,
                                u = c ?? "",
                                x = (0, i.k3)(null != s ? { id: s, name: u } : void 0);
                            if (d)
                                return p.intl.format(9 === t.type ? f.default["0Zl+Xt"] : f.default["5fbNBX"], {
                                    ...t,
                                    applicationName: u,
                                    paidServicesTermsUrl: a,
                                    platformInfo: x,
                                    virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return p.intl.format(9 === t.type ? f.default.OVhTE7 : f.default.cwuBkH, {
                                ...t,
                                applicationName: u,
                                paidServicesTermsUrl: a,
                                virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                            });
                        default:
                            (0, o.xb)(t);
                    }
                })({ variant: e.variant, isExpressCheckout: e.isExpressCheckout ?? !1 }),
            }),
            e.paymentSourceType === m.hes.PAYSAFE_CARD &&
                (0, n.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
            e.paymentSourceType === m.hes.SOFORT &&
                (0, n.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t["UYy1/h"]),
                }),
        ],
    });
}
