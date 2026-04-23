n.d(t, { I: () => g, _: () => E });
var r,
    l = n(627968);
n(64700);
var i = n(834730),
    a = n(150934),
    s = n(403362),
    o = n(975571),
    u = n(580630),
    d = n(652215),
    c = n(788868),
    _ = n(327105),
    p = n(985018),
    h = n(24535);
function m(e) {
    let { value: t, onChange: n } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(_.default["5dmUS+"]),
            }),
            (0, l.jsx)(a.S, { label: p.intl.string(_.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let f = { [c.WT.DAY]: _.default.iPorlt, [c.WT.MONTH]: _.default["8CYJ8Y"], [c.WT.YEAR]: _.default.gvaGGA };
function A(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: r,
            currency: l,
            interval: i,
            intervalCount: a,
            startDate: s,
        } = e,
        c = (0, u.$g)(n, l),
        _ = (0, u.$g)(r, l),
        h = d.X7G.PAID_TERMS,
        m = d.qF7.CONTACT_US,
        A = o.A.getArticleURL(d.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: c,
        renewalPrice: _,
        interval: p.intl.formatToPlainString(f[i], { intervalCount: a }),
        startDate: s,
        paidServicesTermsUrl: h,
        contactUsUrl: m,
        subscriptionsFaqUrl: A,
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
function E(e) {
    return (0, l.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, l.jsx)(m, { ...e.immediateDelivery }),
            (0, l.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = d.X7G.PAID_TERMS,
                        n = d.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            return p.intl.format(_.default.OH1Evm, A(e));
                        case 1:
                            return p.intl.format(_.default["2pNIbI"], A(e));
                        case 2:
                            return p.intl.format(_.default.IP93kX, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 3:
                            return p.intl.format(_.default.ITY3j6, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 4:
                            return p.intl.format(_.default.P5KfYx, { ...e, paidServicesTermsUrl: t });
                        case 5:
                            return p.intl.format(_.default.BkYev7, {
                                ...e,
                                paidServicesTermsUrl: t,
                                virtualGoodsTermsUrl: n,
                            });
                        case 6:
                            return p.intl.format(_.default.OVhTE7, { ...e, paidServicesTermsUrl: t });
                        default:
                            (0, s.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === d.hes.PAYSAFE_CARD &&
                (0, l.jsx)(i.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
        ],
    });
}
