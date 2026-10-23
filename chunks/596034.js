l.d(t, { I: () => E, _: () => N });
var n,
    a = l(477900);
l(582128);
var r = l(834730),
    s = l(150934),
    i = l(118982),
    o = l(403362),
    c = l(975571),
    d = l(927578),
    u = l(580630),
    m = l(652215),
    x = l(202541),
    f = l(583741),
    p = l(105292),
    h = l(484742);
function j(e) {
    let { value: t, onChange: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(f.default["5dmUS+"]),
            }),
            (0, a.jsx)(s.S, { label: p.intl.string(f.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let v = { [x.WT.DAY]: f.default.iPorlt, [x.WT.MONTH]: f.default["8CYJ8Y"], [x.WT.YEAR]: f.default.gvaGGA };
function g(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: n,
            currency: a,
            interval: r,
            intervalCount: s,
            startDate: i,
            multiPeriodDiscountAttributes: o,
        } = e,
        x = (0, u.$g)(l, a),
        f = (0, u.$g)(n, a),
        h = m.X7G.PAID_TERMS,
        j = m.qF7.CONTACT_US,
        g = c.A.getArticleURL(m.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: x,
        renewalPrice: f,
        interval: p.intl.formatToPlainString(v[r], { intervalCount: s }),
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
        })({ multiPeriodDiscountAttributes: o, currency: a }),
        paidServicesTermsUrl: h,
        contactUsUrl: j,
        subscriptionsFaqUrl: g,
    };
}
var E =
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
function N(e) {
    return (0, a.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, a.jsx)(j, { ...e.immediateDelivery }),
            (0, a.jsx)(r.E, {
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
                                    trialDuration: a,
                                } = n.multiPeriodDiscountAttributes;
                                return p.intl.format(f.default["A+qfZ+"], {
                                    purchaseButtonText: n.purchaseButtonText,
                                    totalDue: n.totalDue,
                                    trialOrDiscountPrice: t,
                                    trialDuration: a,
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
                            let { applicationId: a, applicationName: r, shouldAppendDisclaimer: s } = e,
                                c = r ?? "",
                                d = (0, i.k3)(null != a ? { id: a, name: c } : void 0);
                            if (s)
                                return p.intl.format(9 === e.type ? f.default["0Zl+Xt"] : f.default["5fbNBX"], {
                                    ...e,
                                    applicationName: c,
                                    paidServicesTermsUrl: t,
                                    platformInfo: d,
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
                (0, a.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
            e.paymentSourceType === m.hes.SOFORT &&
                (0, a.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t["UYy1/h"]),
                }),
        ],
    });
}
