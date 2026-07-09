n.d(t, { I: () => h, _: () => _ });
var a,
    r = n(627968);
n(64700);
var l = n(834730),
    i = n(150934),
    s = n(331329),
    u = n(403362),
    o = n(975571),
    c = n(580630),
    d = n(652215),
    m = n(202541),
    f = n(982772),
    p = n(375708),
    b = n(628823);
function A(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(f.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.S, { label: p.intl.string(f.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let g = { [m.WT.DAY]: f.default.iPorlt, [m.WT.MONTH]: f.default["8CYJ8Y"], [m.WT.YEAR]: f.default.gvaGGA };
function v(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: a,
            currency: r,
            interval: l,
            intervalCount: i,
            startDate: s,
            multiPeriodDiscountAttributes: u,
        } = e,
        m = (0, c.$g)(n, r),
        f = (0, c.$g)(a, r),
        b = d.X7G.PAID_TERMS,
        A = d.qF7.CONTACT_US,
        v = o.A.getArticleURL(d.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: m,
        renewalPrice: f,
        interval: p.intl.formatToPlainString(g[l], { intervalCount: i }),
        startDate: s,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: n } = e;
            if (null != n)
                return {
                    discountedRenewalPrice: (0, c.$g)(n.discountedRenewalPrice, t),
                    discountEndDate: n.discountEndDate,
                    priceWithoutDiscount: (0, c.$g)(n.priceWithoutDiscount, t),
                };
        })({ multiPeriodDiscountAttributes: u, currency: r }),
        paidServicesTermsUrl: b,
        contactUsUrl: A,
        subscriptionsFaqUrl: v,
    };
}
var h =
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
function _(e) {
    return (0, r.jsxs)("div", {
        className: b.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(A, { ...e.immediateDelivery }),
            (0, r.jsx)(l.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = d.X7G.PAID_TERMS,
                        n = d.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            let a = v(e);
                            if (null != a.multiPeriodDiscountAttributes) {
                                let { discountEndDate: e, priceWithoutDiscount: t } = a.multiPeriodDiscountAttributes,
                                    n = { ...a, startDate: e, renewalPrice: t };
                                return p.intl.format(f.default["2pNIbI"], n);
                            }
                            return p.intl.format(f.default.OH1Evm, a);
                        case 1:
                            return p.intl.format(f.default["2pNIbI"], v(e));
                        case 2:
                            return p.intl.format(f.default.bbgJdE, v(e));
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
                            let { applicationId: r, applicationName: l, shouldAppendDisclaimer: i } = e,
                                o = l ?? "",
                                c = (0, s.k3)(null != r ? { id: r, name: o } : void 0);
                            if (i)
                                return p.intl.format(9 === e.type ? f.default["0Zl+Xt"] : f.default["5fbNBX"], {
                                    ...e,
                                    applicationName: o,
                                    paidServicesTermsUrl: t,
                                    platformInfo: c,
                                    virtualGoodsTermsUrl: d.X7G.PAID_TERMS_VIRTUAL_GOODS,
                                });
                            return p.intl.format(9 === e.type ? f.default.OVhTE7 : f.default.cwuBkH, {
                                ...e,
                                applicationName: o,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: d.X7G.PAID_TERMS_VIRTUAL_GOODS,
                            });
                        default:
                            (0, u.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === d.hes.PAYSAFE_CARD &&
                (0, r.jsx)(l.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
            e.paymentSourceType === d.hes.SOFORT &&
                (0, r.jsx)(l.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t["UYy1/h"]),
                }),
        ],
    });
}
