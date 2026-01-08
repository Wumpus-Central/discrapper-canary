n.d(t, {
    P: () => g,
    b: () => y,
});
var r = n(54381),
    i = n(772848),
    a = n(481060),
    o = n(159351),
    s = n(667),
    l = n(844718),
    c = n(762853),
    u = n(626135),
    d = n(981631);
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
function m(e, t) {
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
let h = "slayer-payment-modal";
function g(e, t) {
    let { isGift: n, giftRecipient: r, giftingOrigin: a, additionalUserIds: c } = t,
        { analyticsLocations: f } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        p = !1,
        _ = (0, i.Z)(),
        { enabled: m } = (0, l.VL)({ location: "openCollectiblesPaymentModal" }),
        g = () => {
            p ||
                u.default.track(d.rMx.PAYMENT_FLOW_CANCELED, {
                    load_id: _,
                    payment_type: d.Zuq[d.GZQ.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: f,
                    sku_product_line: e.productLine,
                }),
                (0, o.fw)(),
                (0, s.p)();
        },
        y = () => {
            p = !0;
        },
        O = {
            loadId: _,
            skuId: e.id,
            applicationId: e.applicationId,
            analyticsLocations: null != f ? f : [],
            isGift: n,
            giftRecipient: r,
            giftingOrigin: a,
            additionalUserIds: c,
            onCloseCallback: g,
            onComplete: y,
            modalKey: h,
        };
    if (m) return void E(O);
    b(O);
}
let E = (e) => {
        let {
            loadId: t,
            applicationId: n,
            skuId: r,
            analyticsLocations: i,
            isGift: a,
            giftRecipient: o,
            giftingOrigin: s,
            onCloseCallback: l,
            onComplete: u,
            modalKey: d,
        } = e;
        return (0, c.s2)().openCheckoutModal({
            loadId: t,
            applicationId: n,
            skuId: r,
            analyticsLocations: i,
            onComplete: u,
            giftContextProps: {
                isGift: a,
                giftRecipient: o,
                giftingOrigin: s,
            },
            openModalOptions: {
                modalKey: d,
                onCloseCallback: l,
            },
        });
    },
    b = (e) => {
        let {
            loadId: t,
            applicationId: i,
            skuId: o,
            analyticsLocations: s,
            isGift: l,
            giftRecipient: c,
            giftingOrigin: u,
            additionalUserIds: d,
            onCloseCallback: f,
            onComplete: _,
            modalKey: h,
        } = e;
        return (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 556266));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        m(p({}, n), {
                            loadId: t,
                            applicationId: i,
                            skuId: o,
                            analyticsLocations: s,
                            isGift: l,
                            giftRecipient: c,
                            additionalUserIds: d,
                            giftingOrigin: u,
                            onComplete: _,
                        }),
                    );
            },
            {
                onCloseCallback: f,
                modalKey: h,
            },
        );
    };
function y() {
    (0, a.ZDy)(
        async () => {
            let { default: e } = await n.e("21854").then(n.bind(n, 211912));
            return (t) => (0, r.jsx)(e, p({}, t));
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
