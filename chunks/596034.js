n.d(t, { I: () => g, _: () => E });
var r,
    l = n(627968);
n(64700);
var i = n(834730),
    a = n(150934),
    s = n(403362),
    o = n(975571),
    u = n(580630),
    c = n(652215),
    d = n(788868),
    _ = n(982772),
    p = n(985018),
    h = n(628823);
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
let A = { [d.WT.DAY]: _.default.iPorlt, [d.WT.MONTH]: _.default["8CYJ8Y"], [d.WT.YEAR]: _.default.gvaGGA };
function f(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: r,
            currency: l,
            interval: i,
            intervalCount: a,
            startDate: s,
        } = e,
        d = (0, u.$g)(n, l),
        _ = (0, u.$g)(r, l),
        h = c.X7G.PAID_TERMS,
        m = c.qF7.CONTACT_US,
        f = o.A.getArticleURL(c.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: d,
        renewalPrice: _,
        interval: p.intl.formatToPlainString(A[i], { intervalCount: a }),
        startDate: s,
        paidServicesTermsUrl: h,
        contactUsUrl: m,
        subscriptionsFaqUrl: f,
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
                    let t = c.X7G.PAID_TERMS,
                        n = c.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            return p.intl.format(_.default.OH1Evm, f(e));
                        case 1:
                            return p.intl.format(_.default["2pNIbI"], f(e));
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
            e.paymentSourceType === c.hes.PAYSAFE_CARD &&
                (0, l.jsx)(i.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
        ],
    });
}
