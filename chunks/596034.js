"use strict";
n.d(t, { I0: () => h, _P: () => g });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(403362),
    s = n(975571),
    o = n(580630),
    l = n(652215),
    u = n(756366),
    c = n(985018),
    d = n(235376);
function _(e) {
    let { immediateDelivery: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: d.k,
        children: [
            null != t && (0, r.jsx)(f, { ...t }),
            (0, r.jsx)(i.Text, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function f(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: c.intl.string(u.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.Checkbox, { label: c.intl.string(u.default.XBtSMa), checked: t, onChange: n }),
        ],
    });
}
function p(e) {
    let { purchaseButtonText: t, totalDue: n, renewalPrice: r, currency: i, period: a, startDate: u } = e,
        c = (0, o.$g)(n, i),
        d = (0, o.$g)(r, i),
        _ = l.qF7.PAID_SERVICES_TERMS;
    return {
        purchaseButtonText: t,
        totalDue: c,
        renewalPrice: d,
        period: a,
        startDate: u,
        paidServicesTermsUrl: _,
        contactUsUrl: l.qF7.CONTACT_US,
        subscriptionsFaqUrl: s.A.getArticleURL(0x53d2ba0c4c),
    };
}
var h = (function (e) {
    return (
        (e[(e.Subscription = 0)] = "Subscription"),
        (e[(e.SubscriptionTrial = 1)] = "SubscriptionTrial"),
        (e[(e.OrbsRedemption = 2)] = "OrbsRedemption"),
        (e[(e.OTP = 3)] = "OTP"),
        e
    );
})({});
function m(e) {
    let { type: t, props: n } = e,
        r = l.qF7.PAID_SERVICES_TERMS,
        i = l.qF7.VIRTUAL_GOODS_TERMS;
    switch (t) {
        case 0:
            return c.intl.format(u.default.OH1Evm, p(n));
        case 1:
            return c.intl.format(u.default["2pNIbI"], p(n));
        case 2:
            return c.intl.format(u.default.IP93kX, { ...n, paidServicesTermsUrl: r, virtualGoodsTermsUrl: i });
        case 3:
            return c.intl.format(u.default.X0zwiC, { ...n, paidServicesTermsUrl: r, virtualGoodsTermsUrl: i });
        default:
            (0, a.xb)(t);
    }
}
function g(e) {
    return (0, r.jsx)(_, { immediateDelivery: e.immediateDelivery, children: m(e) });
}
