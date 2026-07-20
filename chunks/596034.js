n.d(t, { I: () => N, _: () => b });
var l,
    r = n(627968);
n(64700);
var a = n(834730),
    i = n(150934),
    s = n(118982),
    u = n(403362),
    o = n(975571),
    c = n(428262),
    d = n(580630),
    m = n(652215),
    x = n(202541),
    f = n(982772),
    p = n(375708),
    h = n(628823);
function v(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(f.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.S, { label: p.intl.string(f.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let j = { [x.WT.DAY]: f.default.iPorlt, [x.WT.MONTH]: f.default["8CYJ8Y"], [x.WT.YEAR]: f.default.gvaGGA };
function g(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: l,
            currency: r,
            interval: a,
            intervalCount: i,
            startDate: s,
            multiPeriodDiscountAttributes: u,
        } = e,
        x = (0, d.$g)(n, r),
        f = (0, d.$g)(l, r),
        h = m.X7G.PAID_TERMS,
        v = m.qF7.CONTACT_US,
        g = o.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: f,
        interval: p.intl.formatToPlainString(j[a], { intervalCount: i }),
        startDate: s,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: n } = e;
            if (null != n)
                return {
                    discountedRenewalPrice: (0, d.$g)(n.discountedRenewalPrice, t),
                    discountEndDate: n.discountEndDate,
                    priceWithoutDiscount: (0, d.$g)(n.priceWithoutDiscount, t),
                    trialDuration: (0, c.re)({ intervalType: n.intervalType, intervalCount: n.intervalCount }),
                };
        })({ multiPeriodDiscountAttributes: u, currency: r }),
        paidServicesTermsUrl: h,
        contactUsUrl: v,
        subscriptionsFaqUrl: g,
    };
}
var N =
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
function b(e) {
    return (0, r.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(v, { ...e.immediateDelivery }),
            (0, r.jsx)(a.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = m.X7G.PAID_TERMS,
                        n = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            let l = g(e);
                            if (null != l.multiPeriodDiscountAttributes) {
                                let {
                                    discountEndDate: e,
                                    discountedRenewalPrice: t,
                                    priceWithoutDiscount: n,
                                    trialDuration: r,
                                } = l.multiPeriodDiscountAttributes;
                                return p.intl.format(f.default["A+qfZ+"], {
                                    purchaseButtonText: l.purchaseButtonText,
                                    totalDue: l.totalDue,
                                    trialOrDiscountPrice: t,
                                    trialDuration: r,
                                    trialOrDiscountEndDate: e,
                                    fullRenewalPrice: n,
                                    interval: l.interval,
                                    subscriptionsFaqUrl: l.subscriptionsFaqUrl,
                                    paidServicesTermsUrl: l.paidServicesTermsUrl,
                                    contactUsUrl: l.contactUsUrl,
                                });
                            }
                            return p.intl.format(f.default.OH1Evm, l);
                        case 1:
                            return p.intl.format(f.default["2pNIbI"], g(e));
                        case 2:
                            return p.intl.format(f.default.bbgJdE, g(e));
                        case 4:
                            return p.intl.format(f.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 5:
                            return p.intl.format(f.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
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
                                virtualGoodsTermsUrl: n,
                            });
                        case 9:
                        case 10:
                            let { applicationId: r, applicationName: a, shouldAppendDisclaimer: i } = e,
                                o = a ?? "",
                                c = (0, s.k3)(null != r ? { id: r, name: o } : void 0);
                            if (i)
                                return p.intl.format(9 === e.type ? f.default["0Zl+Xt"] : f.default["5fbNBX"], {
                                    ...e,
                                    applicationName: o,
                                    paidServicesTermsUrl: t,
                                    platformInfo: c,
                                    virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return p.intl.format(9 === e.type ? f.default.OVhTE7 : f.default.cwuBkH, {
                                ...e,
                                applicationName: o,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                            });
                        default:
                            (0, u.xb)(e);
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
