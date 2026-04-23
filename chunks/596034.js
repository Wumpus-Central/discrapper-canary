n.d(t, { I: () => A, _: () => I });
var r,
    a = n(627968);
n(64700);
var i = n(834730),
    o = n(150934),
    l = n(403362),
    s = n(975571),
    d = n(580630),
    u = n(652215),
    c = n(788868),
    _ = n(327105),
    p = n(985018),
    C = n(24535);
function h(e) {
    let { value: t, onChange: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: p.intl.string(_.default["5dmUS+"]),
            }),
            (0, a.jsx)(o.S, { label: p.intl.string(_.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
let E = { [c.WT.DAY]: _.default.iPorlt, [c.WT.MONTH]: _.default["8CYJ8Y"], [c.WT.YEAR]: _.default.gvaGGA };
function m(e) {
    let {
            purchaseButtonText: t,
            totalDue: n,
            renewalPrice: r,
            currency: a,
            interval: i,
            intervalCount: o,
            startDate: l,
        } = e,
        c = (0, d.$g)(n, a),
        _ = (0, d.$g)(r, a),
        C = u.X7G.PAID_TERMS,
        h = u.qF7.CONTACT_US,
        m = s.A.getArticleURL(u.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: c,
        renewalPrice: _,
        interval: p.intl.formatToPlainString(E[i], { intervalCount: o }),
        startDate: l,
        paidServicesTermsUrl: C,
        contactUsUrl: h,
        subscriptionsFaqUrl: m,
    };
}
var A =
    (((r = {})[(r.Subscription = 0)] = "Subscription"),
    (r[(r.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (r[(r.OrbsRedemption = 2)] = "OrbsRedemption"),
    (r[(r.Shop = 3)] = "Shop"),
    (r[(r.GiftNitro = 4)] = "GiftNitro"),
    (r[(r.GiftShop = 5)] = "GiftShop"),
    (r[(r.GiftGameShop = 6)] = "GiftGameShop"),
    r);
function I(e) {
    return (0, a.jsxs)("div", {
        className: C.k,
        children: [
            null != e.immediateDelivery && (0, a.jsx)(h, { ...e.immediateDelivery }),
            (0, a.jsx)(i.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = u.X7G.PAID_TERMS,
                        n = u.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            return p.intl.format(_.default.OH1Evm, m(e));
                        case 1:
                            return p.intl.format(_.default["2pNIbI"], m(e));
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
                            (0, l.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === u.hes.PAYSAFE_CARD &&
                (0, a.jsx)(i.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: p.intl.string(p.t.kj9VLI),
                }),
        ],
    });
}
