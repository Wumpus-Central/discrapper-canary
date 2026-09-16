s.d(t, { I: () => g, _: () => E });
var n,
    r = s(477900);
s(582128);
var a = s(834730),
    i = s(150934),
    l = s(331329),
    c = s(403362),
    u = s(975571),
    o = s(158045),
    d = s(580630),
    m = s(652215),
    p = s(202541),
    x = s(583741),
    f = s(375708),
    C = s(484742);
function h(e) {
    let { value: t, onChange: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: f.intl.string(x.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.S, { label: f.intl.string(x.default.XBtSMa), checked: t, onChange: s }),
        ],
    });
}
let L = { [p.WT.DAY]: x.default.iPorlt, [p.WT.MONTH]: x.default["8CYJ8Y"], [p.WT.YEAR]: x.default.gvaGGA };
function v(e) {
    let {
            purchaseButtonText: t,
            totalDue: s,
            renewalPrice: n,
            currency: r,
            interval: a,
            intervalCount: i,
            startDate: l,
            multiPeriodDiscountAttributes: c,
        } = e,
        p = (0, d.$g)(s, r),
        x = (0, d.$g)(n, r),
        C = m.X7G.PAID_TERMS,
        h = m.qF7.CONTACT_US,
        v = u.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: p,
        renewalPrice: x,
        interval: f.intl.formatToPlainString(L[a], { intervalCount: i }),
        startDate: l,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: s } = e;
            if (null != s)
                return {
                    discountedRenewalPrice: (0, d.$g)(s.discountedRenewalPrice, t),
                    discountEndDate: s.discountEndDate,
                    priceWithoutDiscount: (0, d.$g)(s.priceWithoutDiscount, t),
                    trialDuration: (0, o.re)({ intervalType: s.intervalType, intervalCount: s.intervalCount }),
                };
        })({ multiPeriodDiscountAttributes: c, currency: r }),
        paidServicesTermsUrl: C,
        contactUsUrl: h,
        subscriptionsFaqUrl: v,
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
function E(e) {
    return (0, r.jsxs)("div", {
        className: C.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(h, { ...e.immediateDelivery }),
            (0, r.jsx)(a.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = m.X7G.PAID_TERMS,
                        s = m.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                        case 1:
                            let n = v(e);
                            if (null != n.multiPeriodDiscountAttributes) {
                                let {
                                    discountEndDate: e,
                                    discountedRenewalPrice: t,
                                    priceWithoutDiscount: s,
                                    trialDuration: r,
                                } = n.multiPeriodDiscountAttributes;
                                return f.intl.format(x.default["A+qfZ+"], {
                                    purchaseButtonText: n.purchaseButtonText,
                                    totalDue: n.totalDue,
                                    trialOrDiscountPrice: t,
                                    trialDuration: r,
                                    trialOrDiscountEndDate: e,
                                    fullRenewalPrice: s,
                                    interval: n.interval,
                                    subscriptionsFaqUrl: n.subscriptionsFaqUrl,
                                    paidServicesTermsUrl: n.paidServicesTermsUrl,
                                    contactUsUrl: n.contactUsUrl,
                                });
                            }
                            if (1 === e.type) return f.intl.format(x.default["2pNIbI"], n);
                            return f.intl.format(x.default.OH1Evm, n);
                        case 2:
                            return f.intl.format(x.default.bbgJdE, v(e));
                        case 4:
                            return f.intl.format(x.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: s,
                            });
                        case 5:
                            return f.intl.format(x.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: s,
                            });
                        case 3:
                            return f.intl.format(x.default.EOOWpo, { ...e, paidServicesTermsUrl: t });
                        case 6:
                            return f.intl.format(x.default.G0nk6B, { ...e, paidServicesTermsUrl: t });
                        case 7:
                            return f.intl.format(x.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 8:
                            return f.intl.format(x.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: s,
                            });
                        case 9:
                        case 10:
                            let { applicationId: r, applicationName: a, shouldAppendDisclaimer: i } = e,
                                u = a ?? "",
                                o = (0, l.k3)(null != r ? { id: r, name: u } : void 0);
                            if (i)
                                return f.intl.format(9 === e.type ? x.default["0Zl+Xt"] : x.default["5fbNBX"], {
                                    ...e,
                                    applicationName: u,
                                    paidServicesTermsUrl: t,
                                    platformInfo: o,
                                    virtualGoodsTermsUrl: m.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return f.intl.format(9 === e.type ? x.default.OVhTE7 : x.default.cwuBkH, {
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
                (0, r.jsx)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: f.intl.string(f.t.kj9VLI),
                }),
            e.paymentSourceType === m.hes.SOFORT &&
                (0, r.jsx)(a.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: f.intl.string(f.t["UYy1/h"]),
                }),
        ],
    });
}
