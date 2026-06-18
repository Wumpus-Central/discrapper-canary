"use strict";
n.d(t, { I: () => A, _: () => I });
var i,
    r = n(627968);
n(64700);
var s = n(834730),
    a = n(150934),
    o = n(578942),
    l = n(403362),
    u = n(975571),
    c = n(580630),
    d = n(652215),
    _ = n(788868),
    h = n(327105),
    f = n(375708),
    p = n(24535);
function E(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: f.intl.string(h.default["5dmUS+"]),
            }),
            (0, r.jsx)(a.S, { label: f.intl.string(h.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let m = { [_.WT.DAY]: h.default.iPorlt, [_.WT.MONTH]: h.default["8CYJ8Y"], [_.WT.YEAR]: h.default.gvaGGA };
function g(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: i,
            currency: r,
            interval: s,
            intervalCount: a,
            startDate: o,
            multiPeriodDiscountAttributes: l,
        } = e,
        _ = (0, c.$g)(n, r),
        h = (0, c.$g)(i, r),
        p = d.X7G.PAID_TERMS,
        E = d.qF7.CONTACT_US,
        g = u.A.getArticleURL(d.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: _,
        renewalPrice: h,
        interval: f.intl.formatToPlainString(m[s], { intervalCount: a }),
        startDate: o,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: n } = e;
            if (null != n)
                return {
                    discountedRenewalPrice: (0, c.$g)(n.discountedRenewalPrice, t),
                    discountEndDate: n.discountEndDate,
                    priceWithoutDiscount: (0, c.$g)(n.priceWithoutDiscount, t),
                };
        })({ multiPeriodDiscountAttributes: l, currency: r }),
        paidServicesTermsUrl: p,
        contactUsUrl: E,
        subscriptionsFaqUrl: g,
    };
}
var A =
    (((i = {})[(i.Subscription = 0)] = "Subscription"),
    (i[(i.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (i[(i.OrbsRedemption = 2)] = "OrbsRedemption"),
    (i[(i.Shop = 3)] = "Shop"),
    (i[(i.GiftNitro = 4)] = "GiftNitro"),
    (i[(i.GiftShop = 5)] = "GiftShop"),
    (i[(i.GiftGameShop = 6)] = "GiftGameShop"),
    i);
function I(e) {
    return (0, r.jsxs)("div", {
        className: p.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(E, { ...e.immediateDelivery }),
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = d.X7G.PAID_TERMS,
                        n = d.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            let i = g(e);
                            if (null != i.multiPeriodDiscountAttributes) {
                                let { discountEndDate: e, priceWithoutDiscount: t } = i.multiPeriodDiscountAttributes,
                                    n = { ...i, startDate: e, renewalPrice: t };
                                return f.intl.format(h.default["2pNIbI"], n);
                            }
                            return f.intl.format(h.default.OH1Evm, i);
                        case 1:
                            return f.intl.format(h.default["2pNIbI"], g(e));
                        case 2:
                            return f.intl.format(h.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 3:
                            return f.intl.format(h.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 4:
                            return f.intl.format(h.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 5:
                            return f.intl.format(h.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 6:
                            let { applicationId: r, applicationName: s, shouldAppendDisclaimer: a } = e,
                                u = s ?? "game's",
                                c = (0, o.k3)(null != r ? { id: r, name: u } : void 0);
                            if (a)
                                return f.intl.format(h.default["0Zl+Xt"], {
                                    ...e,
                                    applicationName: u,
                                    paidServicesTermsUrl: t,
                                    platformInfo: c,
                                });
                            return f.intl.format(h.default.OVhTE7, {
                                ...e,
                                applicationName: u,
                                paidServicesTermsUrl: t,
                            });
                        default:
                            (0, l.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === d.hes.PAYSAFE_CARD &&
                (0, r.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: f.intl.string(f.t.kj9VLI),
                }),
        ],
    });
}
