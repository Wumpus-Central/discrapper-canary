"use strict";
n.d(t, { I: () => m, _: () => g });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(403362),
    a = n(975571),
    o = n(580630),
    l = n(652215),
    u = n(788868),
    c = n(327105),
    d = n(985018),
    _ = n(24535);
function f(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: d.intl.string(c.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.Checkbox, { label: d.intl.string(c.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let p = { [u.WT.DAY]: c.default.iPorlt, [u.WT.MONTH]: c.default["8CYJ8Y"], [u.WT.YEAR]: c.default.gvaGGA };
function h(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: r,
            currency: i,
            interval: s,
            intervalCount: u,
            startDate: c,
        } = e,
        _ = (0, o.$g)(n, i),
        f = (0, o.$g)(r, i),
        h = l.X7G.PAID_TERMS,
        m = l.qF7.CONTACT_US,
        E = a.A.getArticleURL(l.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: _,
        renewalPrice: f,
        interval: d.intl.formatToPlainString(p[s], { intervalCount: u }),
        startDate: c,
        paidServicesTermsUrl: h,
        contactUsUrl: m,
        subscriptionsFaqUrl: E,
    };
}
var m = (function (e) {
    return (
        (e[(e.Subscription = 0)] = "Subscription"),
        (e[(e.SubscriptionTrial = 1)] = "SubscriptionTrial"),
        (e[(e.OrbsRedemption = 2)] = "OrbsRedemption"),
        (e[(e.Shop = 3)] = "Shop"),
        (e[(e.GiftNitro = 4)] = "GiftNitro"),
        (e[(e.GiftShop = 5)] = "GiftShop"),
        (e[(e.GiftGameShop = 6)] = "GiftGameShop"),
        e
    );
})({});
function E(e) {
    let t = l.X7G.PAID_TERMS,
        n = l.X7G.PAID_TERMS_VIRTUAL_GOODS;
    switch (e.type) {
        case 0:
            return d.intl.format(c.default.OH1Evm, h(e));
        case 1:
            return d.intl.format(c.default["2pNIbI"], h(e));
        case 2:
            return d.intl.format(c.default.IP93kX, { ...e, paidServicesTermsUrl: t, virtualGoodsTermsUrl: n });
        case 3:
            return d.intl.format(c.default.ITY3j6, { ...e, paidServicesTermsUrl: t, virtualGoodsTermsUrl: n });
        case 4:
            return d.intl.format(c.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
        case 5:
            return d.intl.format(c.default.BkYev7, { ...e, paidServicesTermsUrl: t, virtualGoodsTermsUrl: n });
        case 6:
            return d.intl.format(c.default.OVhTE7, { ...e, paidServicesTermsUrl: t });
        default:
            (0, s.xb)(e);
    }
}
function g(e) {
    return (0, r.jsxs)("div", {
        className: _.k,
        children: [
            null != e.immediateDelivery && (0, r.jsx)(f, { ...e.immediateDelivery }),
            (0, r.jsx)(i.Text, { variant: "text-xs/normal", color: "text-muted", children: E(e.variant) }),
            e.paymentSourceType === l.hes.PAYSAFE_CARD &&
                (0, r.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: d.intl.string(d.t.kj9VLI),
                }),
        ],
    });
}
