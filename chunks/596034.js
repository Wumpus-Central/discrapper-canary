n.d(t, {
    I0: () => y,
    _P: () => O,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(403362),
    o = n(975571),
    s = n(580630),
    l = n(652215),
    c = n(756366),
    u = n(985018),
    d = n(235376);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e) {
    let { immediateDelivery: t, children: n } = e;
    return (0, r.jsxs)("div", {
        className: d.k,
        children: [
            null != t && (0, r.jsx)(g, p({}, t)),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: n,
            }),
        ],
    });
}

function g(e) {
    let { value: t, onChange: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: u.intl.string(c.default["5dmUS+"]),
            }),
            (0, r.jsx)(i.Checkbox, {
                label: u.intl.string(c.default.XBtSMa),
                checked: t,
                onChange: n,
            }),
        ],
    });
}

function E(e) {
    let { purchaseButtonText: t, totalDue: n, renewalPrice: r, currency: i, period: a, startDate: c } = e,
        u = (0, s.$g)(n, i),
        d = (0, s.$g)(r, i),
        f = l.qF7.PAID_SERVICES_TERMS;
    return {
        purchaseButtonText: t,
        totalDue: u,
        renewalPrice: d,
        period: a,
        startDate: c,
        paidServicesTermsUrl: f,
        contactUsUrl: l.qF7.CONTACT_US,
        subscriptionsFaqUrl: o.A.getArticleURL(0x53d2ba0c4c),
    };
}
var y = (function (e) {
    return (
        (e[(e.Subscription = 0)] = "Subscription"),
        (e[(e.SubscriptionTrial = 1)] = "SubscriptionTrial"),
        (e[(e.OrbsRedemption = 2)] = "OrbsRedemption"),
        (e[(e.OTP = 3)] = "OTP"),
        e
    );
})({});

function b(e) {
    let { type: t, props: n } = e,
        r = l.qF7.PAID_SERVICES_TERMS,
        i = l.qF7.VIRTUAL_GOODS_TERMS;
    switch (t) {
        case 0:
            return u.intl.format(c.default.OH1Evm, E(n));
        case 1:
            return u.intl.format(c.default["2pNIbI"], E(n));
        case 2:
            return u.intl.format(
                c.default.IP93kX,
                h(p({}, n), {
                    paidServicesTermsUrl: r,
                    virtualGoodsTermsUrl: i,
                }),
            );
        case 3:
            return u.intl.format(
                c.default.X0zwiC,
                h(p({}, n), {
                    paidServicesTermsUrl: r,
                    virtualGoodsTermsUrl: i,
                }),
            );
        default:
            (0, a.xb)(t);
    }
}

function O(e) {
    return (0, r.jsx)(m, {
        immediateDelivery: e.immediateDelivery,
        children: b(e),
    });
}
