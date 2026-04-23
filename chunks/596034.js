"use strict";
n.d(t, { I: () => g, _: () => A });
var r,
    i = n(627968);
n(64700);
var s = n(834730),
    a = n(150934),
    o = n(403362),
    l = n(975571),
    u = n(580630),
    c = n(652215),
    d = n(788868),
    _ = n(327105),
    f = n(985018),
    p = n(24535);
function h(e) {
    let { value: t, onChange: n } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: f.intl.string(_.default["5dmUS+"]),
            }),
            (0, i.jsx)(a.S, { label: f.intl.string(_.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let E = { [d.WT.DAY]: _.default.iPorlt, [d.WT.MONTH]: _.default["8CYJ8Y"], [d.WT.YEAR]: _.default.gvaGGA };
function m(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: r,
            currency: i,
            interval: s,
            intervalCount: a,
            startDate: o,
        } = e,
        d = (0, u.$g)(n, i),
        _ = (0, u.$g)(r, i),
        p = c.X7G.PAID_TERMS,
        h = c.qF7.CONTACT_US,
        m = l.A.getArticleURL(c.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: d,
        renewalPrice: _,
        interval: f.intl.formatToPlainString(E[s], { intervalCount: a }),
        startDate: o,
        paidServicesTermsUrl: p,
        contactUsUrl: h,
        subscriptionsFaqUrl: m,
    };
}
var g =
    (((r = {})[(r.Subscription = 0)] = "Subscription"),
    (r[(r.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (r[(r.OrbsRedemption = 2)] = "OrbsRedemption"),
    (r[(r.Shop = 3)] = "Shop"),
    (r[(r.GiftNitro = 4)] = "GiftNitro"),
    (r[(r.GiftShop = 5)] = "GiftShop"),
    (r[(r.GiftGameShop = 6)] = "GiftGameShop"),
    r);
function A(e) {
    return (0, i.jsxs)("div", {
        className: p.k,
        children: [
            null != e.immediateDelivery && (0, i.jsx)(h, { ...e.immediateDelivery }),
            (0, i.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = c.X7G.PAID_TERMS,
                        n = c.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            return f.intl.format(_.default.OH1Evm, m(e));
                        case 1:
                            return f.intl.format(_.default["2pNIbI"], m(e));
                        case 2:
                            return f.intl.format(_.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 3:
                            return f.intl.format(_.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 4:
                            return f.intl.format(_.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 5:
                            return f.intl.format(_.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 6:
                            return f.intl.format(_.default.OVhTE7, { ...e, paidServicesTermsUrl: t });
                        default:
                            (0, o.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === c.hes.PAYSAFE_CARD &&
                (0, i.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: f.intl.string(f.t.kj9VLI),
                }),
        ],
    });
}
