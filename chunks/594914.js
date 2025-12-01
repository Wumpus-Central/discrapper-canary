n.d(t, {
    P: () => _,
    b: () => m,
});
var r = n(54381),
    i = n(772848),
    a = n(481060),
    o = n(159351),
    s = n(667),
    l = n(626135),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    let { isGift: u, giftRecipient: f, giftingOrigin: _ } = t,
        { analyticsLocations: m } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        h = !1,
        g = (0, i.Z)();
    (0, a.ZDy)(
        async () => {
            let { default: t } = await n.e("45227").then(n.bind(n, 556266));
            return (n) =>
                (0, r.jsx)(
                    t,
                    p(d({}, n), {
                        loadId: g,
                        applicationId: e.applicationId,
                        skuId: e.id,
                        analyticsLocations: null != m ? m : [],
                        isGift: u,
                        giftRecipient: f,
                        giftingOrigin: _,
                        onComplete: () => {
                            h = !0;
                        },
                    }),
                );
        },
        {
            onCloseCallback: () => {
                h ||
                    l.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: g,
                        payment_type: c.Zuq[c.GZQ.ONE_TIME],
                        is_gift: u,
                        sku_id: e.id,
                        application_id: e.applicationId,
                        location_stack: m,
                        sku_product_line: e.productLine,
                    }),
                    (0, o.fw)(),
                    (0, s.p)();
            },
            modalKey: "slayer-payment-modal",
        },
    );
}
function m() {
    (0, a.ZDy)(
        async () => {
            let { default: e } = await n.e("21854").then(n.bind(n, 211912));
            return (t) => (0, r.jsx)(e, d({}, t));
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
