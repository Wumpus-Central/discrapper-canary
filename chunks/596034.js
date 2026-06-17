"use strict";
n.d(t, { I: () => g, _: () => A });
var i,
    r = n(627968);
n(64700);
var s = n(834730),
    a = n(150934),
    o = n(403362),
    l = n(975571),
    u = n(580630),
    c = n(652215),
    d = n(788868),
    _ = n(982772),
    h = n(375708),
    f = n(628823);
function p(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: h.intl.string(_.default["5dmUS+"]),
            }),
            (0, r.jsx)(a.S, { label: h.intl.string(_.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let E = { [d.WT.DAY]: _.default.iPorlt, [d.WT.MONTH]: _.default["8CYJ8Y"], [d.WT.YEAR]: _.default.gvaGGA };
function m(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: i,
            currency: r,
            interval: s,
            intervalCount: a,
            startDate: o,
            multiPeriodDiscountAttributes: d,
        } = e,
        _ = (0, u.$g)(n, r),
        f = (0, u.$g)(i, r),
        p = c.X7G.PAID_TERMS,
        m = c.qF7.CONTACT_US,
        g = l.A.getArticleURL(c.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: _,
        renewalPrice: f,
        interval: h.intl.formatToPlainString(E[s], { intervalCount: a }),
        startDate: o,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: n } = e;
            if (null != n)
                return {
                    discountedRenewalPrice: (0, u.$g)(n.discountedRenewalPrice, t),
                    discountEndDate: n.discountEndDate,
                    priceWithoutDiscount: (0, u.$g)(n.priceWithoutDiscount, t),
                };
        })({ multiPeriodDiscountAttributes: d, currency: r }),
        paidServicesTermsUrl: p,
        contactUsUrl: m,
        subscriptionsFaqUrl: g,
    };
}
var g =
    (((i = {})[(i.Subscription = 0)] = "Subscription"),
    (i[(i.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (i[(i.OrbsRedemption = 2)] = "OrbsRedemption"),
    (i[(i.Shop = 3)] = "Shop"),
    (i[(i.GiftNitro = 4)] = "GiftNitro"),
    (i[(i.GiftShop = 5)] = "GiftShop"),
    (i[(i.GiftGameShop = 6)] = "GiftGameShop"),
    i);
function A(e) {
    return (0, r.jsxs)("div", {
        className: f.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(p, { ...e.immediateDelivery }),
            (0, r.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = c.X7G.PAID_TERMS,
                        n = c.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            let i = m(e);
                            if (null != i.multiPeriodDiscountAttributes) {
                                let { discountEndDate: e, priceWithoutDiscount: t } = i.multiPeriodDiscountAttributes,
                                    n = { ...i, startDate: e, renewalPrice: t };
                                return h.intl.format(_.default["2pNIbI"], n);
                            }
                            return h.intl.format(_.default.OH1Evm, i);
                        case 1:
                            return h.intl.format(_.default["2pNIbI"], m(e));
                        case 2:
                            return h.intl.format(_.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 3:
                            return h.intl.format(_.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 4:
                            return h.intl.format(_.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 5:
                            return h.intl.format(_.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 6:
                            return h.intl.format(_.default.OVhTE7, { ...e, paidServicesTermsUrl: t });
                        default:
                            (0, o.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === c.hes.PAYSAFE_CARD &&
                (0, r.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: h.intl.string(h.t.kj9VLI),
                }),
        ],
    });
}
