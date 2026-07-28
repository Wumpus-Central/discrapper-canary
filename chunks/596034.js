l.d(t, { I: () => N, _: () => b });
var n,
    r = l(477900);
l(582128);
var s = l(834730),
    i = l(150934),
    a = l(118982),
    c = l(403362),
    u = l(975571),
    o = l(428262),
    d = l(580630),
    m = l(652215),
    x = l(202541),
    h = l(327105),
    p = l(375708),
    v = l(589855);
function j(e) {
    let { value: t, onChange: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(h.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.S, { label: p.intl.string(h.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let f = { [x.WT.DAY]: h.default.iPorlt, [x.WT.MONTH]: h.default["8CYJ8Y"], [x.WT.YEAR]: h.default.gvaGGA };
function g(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: n,
            currency: r,
            interval: s,
            intervalCount: i,
            startDate: a,
            multiPeriodDiscountAttributes: c,
        } = e,
        x = (0, d.$g)(l, r),
        h = (0, d.$g)(n, r),
        v = m.X7G.PAID_TERMS,
        j = m.qF7.CONTACT_US,
        g = u.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: h,
        interval: p.intl.formatToPlainString(f[s], { intervalCount: i }),
        startDate: a,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: l } = e;
            if (null != l)
                return {
                    discountedRenewalPrice: (0, d.$g)(l.discountedRenewalPrice, t),
                    discountEndDate: l.discountEndDate,
                    priceWithoutDiscount: (0, d.$g)(l.priceWithoutDiscount, t),
                    trialDuration: (0, o.re)({ intervalType: l.intervalType, intervalCount: l.intervalCount }),
                };
        })({ multiPeriodDiscountAttributes: c, currency: r }),
        paidServicesTermsUrl: v,
        contactUsUrl: j,
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
function b(e) {
    return (0, r.jsxs)("div", {
        className: v.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(j, { ...e.immediateDelivery }),
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = m.X7G.PAID_TERMS,
                        l = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            let n = g(e);
                            if (null != n.multiPeriodDiscountAttributes) {
                                let {
                                    discountEndDate: e,
                                    discountedRenewalPrice: t,
                                    priceWithoutDiscount: l,
                                    trialDuration: r,
                                } = n.multiPeriodDiscountAttributes;
                                return p.intl.format(h.default["A+qfZ+"], {
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
                            return p.intl.format(h.default.OH1Evm, n);
                        case 1:
                            return p.intl.format(h.default["2pNIbI"], g(e));
                        case 2:
                            return p.intl.format(h.default.bbgJdE, g(e));
                        case 4:
                            return p.intl.format(h.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 5:
                            return p.intl.format(h.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 3:
                            return p.intl.format(h.default.EOOWpo, { ...e, paidServicesTermsUrl: t });
                        case 6:
                            return p.intl.format(h.default.G0nk6B, { ...e, paidServicesTermsUrl: t });
                        case 7:
                            return p.intl.format(h.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 8:
                            return p.intl.format(h.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 9:
                        case 10:
                            let { applicationId: r, applicationName: s, shouldAppendDisclaimer: i } = e,
                                u = s ?? "",
                                o = (0, a.k3)(null != r ? { id: r, name: u } : void 0);
                            if (i)
                                return p.intl.format(9 === e.type ? h.default["0Zl+Xt"] : h.default["5fbNBX"], {
                                    ...e,
                                    applicationName: u,
                                    paidServicesTermsUrl: t,
                                    platformInfo: o,
                                    virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return p.intl.format(9 === e.type ? h.default.OVhTE7 : h.default.cwuBkH, {
                                ...e,
                                applicationName: u,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                            });
                        default:
                            (0, c.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === m.hes.PAYSAFE_CARD &&
                (0, r.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
            e.paymentSourceType === m.hes.SOFORT &&
                (0, r.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t["UYy1/h"]),
                }),
        ],
    });
}
