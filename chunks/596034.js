l.d(t, { I: () => g, _: () => j });
var n,
    s = l(627968);
l(64700);
var r = l(834730),
    a = l(150934),
    i = l(403362),
    c = l(975571),
    d = l(580630),
    u = l(652215),
    o = l(788868),
    m = l(982772),
    x = l(375708),
    h = l(628823);
function C(e) {
    let { value: t, onChange: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.string(m.default["5dmUS+"]),
            }),
            (0, s.jsx)(a.S, { label: x.intl.string(m.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let v = { [o.WT.DAY]: m.default.iPorlt, [o.WT.MONTH]: m.default["8CYJ8Y"], [o.WT.YEAR]: m.default.gvaGGA };
function p(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: n,
            currency: s,
            interval: r,
            intervalCount: a,
            startDate: i,
        } = e,
        o = (0, d.$g)(l, s),
        m = (0, d.$g)(n, s),
        h = u.X7G.PAID_TERMS,
        C = u.qF7.CONTACT_US,
        p = c.A.getArticleURL(u.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: o,
        renewalPrice: m,
        interval: x.intl.formatToPlainString(v[r], { intervalCount: a }),
        startDate: i,
        paidServicesTermsUrl: h,
        contactUsUrl: C,
        subscriptionsFaqUrl: p,
    };
}
var g =
    (((n = {})[(n.Subscription = 0)] = "Subscription"),
    (n[(n.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (n[(n.OrbsRedemption = 2)] = "OrbsRedemption"),
    (n[(n.Shop = 3)] = "Shop"),
    (n[(n.GiftNitro = 4)] = "GiftNitro"),
    (n[(n.GiftShop = 5)] = "GiftShop"),
    (n[(n.GiftGameShop = 6)] = "GiftGameShop"),
    n);
function j(e) {
    return (0, s.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, s.jsx)(C, { ...e.immediateDelivery }),
            (0, s.jsx)(r.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = u.X7G.PAID_TERMS,
                        l = u.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            return x.intl.format(m.default.OH1Evm, p(e));
                        case 1:
                            return x.intl.format(m.default["2pNIbI"], p(e));
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
                (0, s.jsx)(r.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: x.intl.string(x.t.kj9VLI),
                }),
        ],
    });
}
