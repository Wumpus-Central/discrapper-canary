n.d(t, { I: () => E, _: () => N });
var l,
    a = n(477900);
n(582128);
var r = n(834730),
    s = n(150934),
    i = n(118982),
    o = n(403362),
    c = n(975571),
    d = n(158045),
    u = n(580630),
    m = n(652215),
    x = n(202541),
    f = n(583741),
    h = n(375708),
    p = n(484742);
function j(e) {
    let { value: t, onChange: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: h.intl.string(f.default["5dmUS+"]),
            }),
            (0, a.jsx)(s.S, { label: h.intl.string(f.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let v = { [x.WT.DAY]: f.default.iPorlt, [x.WT.MONTH]: f.default["8CYJ8Y"], [x.WT.YEAR]: f.default.gvaGGA };
function g(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: l,
            currency: a,
            interval: r,
            intervalCount: s,
            startDate: i,
            multiPeriodDiscountAttributes: o,
        } = e,
        x = (0, u.$g)(n, a),
        f = (0, u.$g)(l, a),
        p = m.X7G.PAID_TERMS,
        j = m.qF7.CONTACT_US,
        g = c.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: f,
        interval: h.intl.formatToPlainString(v[r], { intervalCount: s }),
        startDate: i,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: n } = e;
            if (null != n)
                return {
                    discountedRenewalPrice: (0, u.$g)(n.discountedRenewalPrice, t),
                    discountEndDate: n.discountEndDate,
                    priceWithoutDiscount: (0, u.$g)(n.priceWithoutDiscount, t),
                    trialDuration: (0, d.re)({ intervalType: n.intervalType, intervalCount: n.intervalCount }),
                };
        })({ multiPeriodDiscountAttributes: o, currency: a }),
        paidServicesTermsUrl: p,
        contactUsUrl: j,
        subscriptionsFaqUrl: g,
    };
}
var E =
    (((l = {})[(l.Subscription = 0)] = "Subscription"),
    (l[(l.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (l[(l.SubscriptionApplication = 2)] = "SubscriptionApplication"),
    (l[(l.GuildProductOneTimePurchase = 3)] = "GuildProductOneTimePurchase"),
    (l[(l.OrbsRedemption = 4)] = "OrbsRedemption"),
    (l[(l.Shop = 5)] = "Shop"),
    (l[(l.PremiumAppsOneTimePurchase = 6)] = "PremiumAppsOneTimePurchase"),
    (l[(l.GiftNitro = 7)] = "GiftNitro"),
    (l[(l.GiftShop = 8)] = "GiftShop"),
    (l[(l.GiftGameShop = 9)] = "GiftGameShop"),
    (l[(l.OrbsGameShop = 10)] = "OrbsGameShop"),
    l);
function N(e) {
    return (0, a.jsxs)("div", {
        className: p.k,
        children: [
            null != e.immediateDelivery && (0, a.jsx)(j, { ...e.immediateDelivery }),
            (0, a.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = m.X7G.PAID_TERMS,
                        n = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                        case 1:
                            let l = g(e);
                            if (null != l.multiPeriodDiscountAttributes) {
                                let {
                                    discountEndDate: e,
                                    discountedRenewalPrice: t,
                                    priceWithoutDiscount: n,
                                    trialDuration: a,
                                } = l.multiPeriodDiscountAttributes;
                                return h.intl.format(f.default["A+qfZ+"], {
                                    purchaseButtonText: l.purchaseButtonText,
                                    totalDue: l.totalDue,
                                    trialOrDiscountPrice: t,
                                    trialDuration: a,
                                    trialOrDiscountEndDate: e,
                                    fullRenewalPrice: n,
                                    interval: l.interval,
                                    subscriptionsFaqUrl: l.subscriptionsFaqUrl,
                                    paidServicesTermsUrl: l.paidServicesTermsUrl,
                                    contactUsUrl: l.contactUsUrl,
                                });
                            }
                            if (1 === e.type) return h.intl.format(f.default["2pNIbI"], l);
                            return h.intl.format(f.default.OH1Evm, l);
                        case 2:
                            return h.intl.format(f.default.bbgJdE, g(e));
                        case 4:
                            return h.intl.format(f.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 5:
                            return h.intl.format(f.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 3:
                            return h.intl.format(f.default.EOOWpo, { ...e, paidServicesTermsUrl: t });
                        case 6:
                            return h.intl.format(f.default.G0nk6B, { ...e, paidServicesTermsUrl: t });
                        case 7:
                            return h.intl.format(f.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 8:
                            return h.intl.format(f.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 9:
                        case 10:
                            let { applicationId: a, applicationName: r, shouldAppendDisclaimer: s } = e,
                                c = r ?? "",
                                d = (0, i.k3)(null != a ? { id: a, name: c } : void 0);
                            if (s)
                                return h.intl.format(9 === e.type ? f.default["0Zl+Xt"] : f.default["5fbNBX"], {
                                    ...e,
                                    applicationName: c,
                                    paidServicesTermsUrl: t,
                                    platformInfo: d,
                                    virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return h.intl.format(9 === e.type ? f.default.OVhTE7 : f.default.cwuBkH, {
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
                (0, a.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: h.intl.string(h.t.kj9VLI),
                }),
            e.paymentSourceType === m.hes.SOFORT &&
                (0, a.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: h.intl.string(h.t["UYy1/h"]),
                }),
        ],
    });
}
