n.d(t, {
    B: () => y,
    a: () => g,
});
var r = n(627968),
    i = n(835245),
    a = n(397927),
    s = n(391048),
    o = n(636099),
    l = n(769315),
    c = n(589078),
    u = n(954571),
    d = n(652215);

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
let m = "slayer-payment-modal";

function g(e, t) {
    let { isGift: n, giftRecipient: r, giftingOrigin: a, additionalUserIds: c } = t,
        { analyticsLocations: f } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        p = !1,
        _ = (0, i.A)(),
        { enabled: h } = (0, l.ik)({
            location: "openCollectiblesPaymentModal",
        }),
        g = () => {
            p ||
                u.default.track(d.HAw.PAYMENT_FLOW_CANCELED, {
                    load_id: _,
                    payment_type: d.frM[d.VVm.ONE_TIME],
                    is_gift: n,
                    sku_id: e.id,
                    application_id: e.applicationId,
                    location_stack: f,
                    sku_product_line: e.productLine,
                }),
                (0, s.ET)(),
                (0, o.z)();
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
            modalKey: m,
        };
    h ? E(O) : b(O);
}
let E = (e) => {
        let {
            loadId: t,
            applicationId: n,
            skuId: r,
            analyticsLocations: i,
            isGift: a,
            giftRecipient: s,
            giftingOrigin: o,
            onCloseCallback: l,
            onComplete: u,
            modalKey: d,
        } = e;
        return (0, c.KY)().openCheckoutModal({
            loadId: t,
            applicationId: n,
            skuId: r,
            analyticsLocations: i,
            onComplete: u,
            giftContextProps: {
                isGift: a,
                giftRecipient: s,
                giftingOrigin: o,
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
            skuId: s,
            analyticsLocations: o,
            isGift: l,
            giftRecipient: c,
            giftingOrigin: u,
            additionalUserIds: d,
            onCloseCallback: f,
            onComplete: _,
            modalKey: m,
        } = e;
        return (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 317042));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        h(p({}, n), {
                            loadId: t,
                            applicationId: i,
                            skuId: s,
                            analyticsLocations: o,
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
                modalKey: m,
            },
        );
    };

function y() {
    (0, a.mMO)(
        async () => {
            let { default: e } = await n.e("1218").then(n.bind(n, 839225));
            return (t) => (0, r.jsx)(e, p({}, t));
        },
        {
            modalKey: "slayer-storefront-announcement-modal",
        },
    );
}
