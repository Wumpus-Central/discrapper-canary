l.d(t, { I: () => p, _: () => f });
var n,
    a = l(627968);
l(64700);
var r = l(834730),
    s = l(150934),
    i = l(403362),
    c = l(975571),
    o = l(580630),
    u = l(652215),
    d = l(788868),
    m = l(327105),
    x = l(985018),
    h = l(24535);
function g(e) {
    let { value: t, onChange: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.string(m.default["5dmUS+"]),
            }),
            (0, a.jsx)(s.S, { label: x.intl.string(m.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let v = { [d.WT.DAY]: m.default.iPorlt, [d.WT.MONTH]: m.default["8CYJ8Y"], [d.WT.YEAR]: m.default.gvaGGA };
function j(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: n,
            currency: a,
            interval: r,
            intervalCount: s,
            startDate: i,
        } = e,
        d = (0, o.$g)(l, a),
        m = (0, o.$g)(n, a),
        h = u.X7G.PAID_TERMS,
        g = u.qF7.CONTACT_US,
        j = c.A.getArticleURL(u.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: d,
        renewalPrice: m,
        interval: x.intl.formatToPlainString(v[r], { intervalCount: s }),
        startDate: i,
        paidServicesTermsUrl: h,
        contactUsUrl: g,
        subscriptionsFaqUrl: j,
    };
}
var p =
    (((n = {})[(n.Subscription = 0)] = "Subscription"),
    (n[(n.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (n[(n.OrbsRedemption = 2)] = "OrbsRedemption"),
    (n[(n.Shop = 3)] = "Shop"),
    (n[(n.GiftNitro = 4)] = "GiftNitro"),
    (n[(n.GiftShop = 5)] = "GiftShop"),
    (n[(n.GiftGameShop = 6)] = "GiftGameShop"),
    n);
function f(e) {
    return (0, a.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, a.jsx)(g, { ...e.immediateDelivery }),
            (0, a.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = u.X7G.PAID_TERMS,
                        l = u.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            return x.intl.format(m.default.OH1Evm, j(e));
                        case 1:
                            return x.intl.format(m.default["2pNIbI"], j(e));
                        case 2:
                            return x.intl.format(m.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 3:
                            return x.intl.format(m.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 4:
                            return x.intl.format(m.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 5:
                            return x.intl.format(m.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: l,
                            });
                        case 6:
                            return x.intl.format(m.default.OVhTE7, { ...e, paidServicesTermsUrl: t });
                        default:
                            (0, i.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === u.hes.PAYSAFE_CARD &&
                (0, a.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: x.intl.string(x.t.kj9VLI),
                }),
        ],
    });
}
