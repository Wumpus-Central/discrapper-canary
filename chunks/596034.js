l.d(t, { I: () => N, _: () => E });
var n,
    r = l(477900);
l(582128);
var a = l(834730),
    i = l(150934),
    s = l(118982),
    o = l(403362),
    c = l(975571),
    u = l(158045),
    d = l(580630),
    m = l(652215),
    x = l(202541),
    f = l(327105),
    p = l(375708),
    v = l(589855);
function h(e) {
    let { value: t, onChange: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(f.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.S, { label: p.intl.string(f.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let j = { [x.WT.DAY]: f.default.iPorlt, [x.WT.MONTH]: f.default["8CYJ8Y"], [x.WT.YEAR]: f.default.gvaGGA };
function g(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: n,
            currency: r,
            interval: a,
            intervalCount: i,
            startDate: s,
            multiPeriodDiscountAttributes: o,
        } = e,
        x = (0, d.$g)(l, r),
        f = (0, d.$g)(n, r),
        v = m.X7G.PAID_TERMS,
        h = m.qF7.CONTACT_US,
        g = c.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: f,
        interval: p.intl.formatToPlainString(j[a], { intervalCount: i }),
        startDate: s,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: l } = e;
            if (null != l)
                return {
                    discountedRenewalPrice: (0, d.$g)(l.discountedRenewalPrice, t),
                    discountEndDate: l.discountEndDate,
                    priceWithoutDiscount: (0, d.$g)(l.priceWithoutDiscount, t),
                    trialDuration: (0, u.re)({ intervalType: l.intervalType, intervalCount: l.intervalCount }),
                };
        })({ multiPeriodDiscountAttributes: o, currency: r }),
        paidServicesTermsUrl: v,
        contactUsUrl: h,
        subscriptionsFaqUrl: g,
    };
}
var N =
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
function E(e) {
    return (0, r.jsxs)("div", {
        className: v.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(h, { ...e.immediateDelivery }),
            (0, r.jsx)(a.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = m.X7G.PAID_TERMS,
                        l = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                        case 1:
                            let n = g(e);
                            if (null != n.multiPeriodDiscountAttributes) {
                                let {
                                    discountEndDate: e,
                                    discountedRenewalPrice: t,
                                    priceWithoutDiscount: l,
                                    trialDuration: r,
                                } = n.multiPeriodDiscountAttributes;
                                return p.intl.format(f.default["A+qfZ+"], {
                                    purchaseButtonText: n.purchaseButtonText,
                                    totalDue: n.totalDue,
                                    trialOrDiscountPrice: t,
                                    trialDuration: r,
                                    trialOrDiscountEndDate: e,
                                    fullRenewalPrice: l,
                                    interval: n.interval,
                                    subscriptionsFaqUrl: n.subscriptionsFaqUrl,
                                    paidServicesTermsUrl: n.paidServicesTermsUrl,
                                    contactUsUrl: n.contactUsUrl,
                                });
                            }
                            if (1 === e.type) return p.intl.format(f.default["2pNIbI"], n);
                            return p.intl.format(f.default.OH1Evm, n);
                        case 2:
                            return p.intl.format(f.default.bbgJdE, g(e));
                        case 4:
                            return p.intl.format(f.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 5:
                            return p.intl.format(f.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 3:
                            return p.intl.format(f.default.EOOWpo, { ...e, paidServicesTermsUrl: t });
                        case 6:
                            return p.intl.format(f.default.G0nk6B, { ...e, paidServicesTermsUrl: t });
                        case 7:
                            return p.intl.format(f.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 8:
                            return p.intl.format(f.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 9:
                        case 10:
                            let { applicationId: r, applicationName: a, shouldAppendDisclaimer: i } = e,
                                c = a ?? "",
                                u = (0, s.k3)(null != r ? { id: r, name: c } : void 0);
                            if (i)
                                return p.intl.format(9 === e.type ? f.default["0Zl+Xt"] : f.default["5fbNBX"], {
                                    ...e,
                                    applicationName: c,
                                    paidServicesTermsUrl: t,
                                    platformInfo: u,
                                    virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return p.intl.format(9 === e.type ? f.default.OVhTE7 : f.default.cwuBkH, {
                                ...e,
                                applicationName: c,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                            });
                        default:
                            (0, o.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === m.hes.PAYSAFE_CARD &&
                (0, r.jsx)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
            e.paymentSourceType === m.hes.SOFORT &&
                (0, r.jsx)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t["UYy1/h"]),
                }),
        ],
    });
}
