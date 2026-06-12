l.d(t, { I: () => g, _: () => f });
var s,
    a = l(627968);
l(64700);
var n = l(834730),
    i = l(150934),
    r = l(403362),
    d = l(975571),
    c = l(580630),
    u = l(652215),
    o = l(788868),
    m = l(327105),
    x = l(375708),
    h = l(24535);
function j(e) {
    let { value: t, onChange: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.string(m.default["5dmUS+"]),
            }),
            (0, a.jsx)(i.S, { label: x.intl.string(m.default.XBtSMa), checked: t, onChange: l }),
        ],
    });
}
let v = { [o.WT.DAY]: m.default.iPorlt, [o.WT.MONTH]: m.default["8CYJ8Y"], [o.WT.YEAR]: m.default.gvaGGA };
function p(e) {
    let {
            purchaseButtonText: t,
            totalDue: l,
            renewalPrice: s,
            currency: a,
            interval: n,
            intervalCount: i,
            startDate: r,
            multiPeriodDiscountAttributes: o,
        } = e,
        m = (0, c.$g)(l, a),
        h = (0, c.$g)(s, a),
        j = u.X7G.PAID_TERMS,
        p = u.qF7.CONTACT_US,
        g = d.A.getArticleURL(u.MVz.BILLING);
    return {
        purchaseButtonText: t,
        totalDue: m,
        renewalPrice: h,
        interval: x.intl.formatToPlainString(v[n], { intervalCount: i }),
        startDate: r,
        multiPeriodDiscountAttributes: (function (e) {
            let { currency: t, multiPeriodDiscountAttributes: l } = e;
            if (null != l)
                return {
                    discountedRenewalPrice: (0, c.$g)(l.discountedRenewalPrice, t),
                    discountEndDate: l.discountEndDate,
                    priceWithoutDiscount: (0, c.$g)(l.priceWithoutDiscount, t),
                };
        })({ multiPeriodDiscountAttributes: o, currency: a }),
        paidServicesTermsUrl: j,
        contactUsUrl: p,
        subscriptionsFaqUrl: g,
    };
}
var g =
    (((s = {})[(s.Subscription = 0)] = "Subscription"),
    (s[(s.SubscriptionTrial = 1)] = "SubscriptionTrial"),
    (s[(s.OrbsRedemption = 2)] = "OrbsRedemption"),
    (s[(s.Shop = 3)] = "Shop"),
    (s[(s.GiftNitro = 4)] = "GiftNitro"),
    (s[(s.GiftShop = 5)] = "GiftShop"),
    (s[(s.GiftGameShop = 6)] = "GiftGameShop"),
    s);
function f(e) {
    return (0, a.jsxs)("div", {
        className: h.k,
        children: [
            null != e.immediateDelivery && (0, a.jsx)(j, { ...e.immediateDelivery }),
            (0, a.jsx)(n.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: (function (e) {
                    let t = u.X7G.PAID_TERMS,
                        l = u.X7G.PAID_TERMS_VIRTUAL_GOODS;
                    switch (e.type) {
                        case 0:
                            let s = p(e);
                            if (null != s.multiPeriodDiscountAttributes) {
                                let { discountEndDate: e, priceWithoutDiscount: t } = s.multiPeriodDiscountAttributes,
                                    l = { ...s, startDate: e, renewalPrice: t };
                                return x.intl.format(m.default["2pNIbI"], l);
                            }
                            return x.intl.format(m.default.OH1Evm, s);
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
                            (0, r.xb)(e);
                    }
                })(e.variant),
            }),
            e.paymentSourceType === u.hes.PAYSAFE_CARD &&
                (0, a.jsx)(n.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: x.intl.string(x.t.kj9VLI),
                }),
        ],
    });
}
