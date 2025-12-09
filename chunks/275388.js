n.d(t, {
    qA: () => h,
    r9: () => m,
});
var r = n(54381),
    i = n(772848);
n(952265);
var a = n(481060),
    o = n(844718),
    s = n(762853),
    l = n(887505),
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
n(602091);
let _ = "orb-checkout-payment-modal-key",
    m = () => (0, a.VXO)(_),
    h = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: r = [],
                analyticsSourceLocation: s,
                onCloseCallback: u,
                rentalDuration: d,
            } = e,
            { enabled: f } = (0, o.VL)({ location: "openOrbCheckoutPaymentModal" }),
            p = (0, i.Z)(),
            m = !1,
            h = () => {
                m ||
                    (0, l._)(c.rMx.PAYMENT_FLOW_CANCELED, {
                        loadId: p,
                        skuId: t,
                        analyticsLocations: r,
                        analyticsSourceLocation: s,
                    }),
                    (0, a.Mr3)(_);
            },
            b = {
                loadId: p,
                skuId: t,
                onCheckoutSuccess: (e) => {
                    m || n(e), (m = !0);
                },
                analyticsLocations: r,
                analyticsSourceLocation: s,
                onCloseCallback: u,
                rentalDuration: d,
                onCloseRequest: h,
            };
        return f ? g(b) : E(b);
    },
    g = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: i = [],
            analyticsSourceLocation: a,
            onCloseCallback: o,
            rentalDuration: l,
            onCloseRequest: c,
        } = e;
        return s.F4.openCheckoutModal({
            loadId: t,
            skuId: n,
            analyticsLocations: i,
            analyticsSourceLocation: a,
            flowSpecificOptions: {
                rentalDuration: l,
                onCheckoutSuccess: r,
            },
            openModalOptions: {
                onCloseCallback: o,
                modalKey: _,
                onCloseRequest: c,
            },
        });
    },
    E = (e) => {
        let {
            skuId: t,
            onCheckoutSuccess: i,
            onCloseRequest: o,
            loadId: s,
            analyticsLocations: l = [],
            analyticsSourceLocation: c,
            onCloseCallback: u,
            rentalDuration: f,
        } = e;
        return (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 922987));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        p(
                            d(
                                {
                                    skuId: t,
                                    analyticsLocations: l,
                                    analyticsSourceLocation: c,
                                    onCheckoutSuccess: i,
                                    rentalDuration: f,
                                },
                                n,
                            ),
                            { loadId: s },
                        ),
                    );
            },
            {
                onCloseCallback: u,
                onCloseRequest: o,
                modalKey: _,
            },
        );
    };
