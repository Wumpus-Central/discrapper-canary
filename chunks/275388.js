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
                analyticsSourceLocation: i,
                onCloseCallback: a,
                isRental: s,
            } = e,
            { enabled: l } = (0, o.VL)({ location: "openOrbCheckoutPaymentModal" }),
            c = {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: r,
                analyticsSourceLocation: i,
                onCloseCallback: a,
                isRental: s,
            };
        return l ? g(c) : E(c);
    },
    g = (e) => {
        let {
            skuId: t,
            onCheckoutSuccess: n,
            analyticsLocations: r = [],
            analyticsSourceLocation: i,
            onCloseCallback: a,
            isRental: o,
        } = e;
        return s.F4.openCheckoutModal({
            skuId: t,
            analyticsLocations: r,
            analyticsSourceLocation: i,
            onCheckoutSuccess: n,
            flowSpecificOptions: { isRental: o },
            modalOptions: {
                onCloseCallback: a,
                modalKey: _,
                onCloseRequest: (e, n) => {
                    e ||
                        (0, l._)(c.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: n,
                            skuId: t,
                            analyticsLocations: r,
                            analyticsSourceLocation: i,
                        });
                },
            },
        });
    },
    E = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: o,
                analyticsLocations: s = [],
                analyticsSourceLocation: u,
                onCloseCallback: f,
                isRental: m,
            } = e,
            h = !1,
            g = (0, i.Z)();
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
                                    analyticsLocations: s,
                                    analyticsSourceLocation: u,
                                    onCheckoutSuccess: (e) => {
                                        h || o(e), (h = !0);
                                    },
                                    isRental: m,
                                },
                                n,
                            ),
                            { loadId: g },
                        ),
                    );
            },
            {
                onCloseCallback: f,
                onCloseRequest() {
                    h ||
                        (0, l._)(c.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: g,
                            skuId: t,
                            analyticsLocations: s,
                            analyticsSourceLocation: u,
                        }),
                        (0, a.Mr3)(_);
                },
                modalKey: _,
            },
        );
    };
