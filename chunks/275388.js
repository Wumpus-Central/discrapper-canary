n.d(t, {
    qA: () => b,
    r9: () => g,
});
var r = n(54381),
    i = n(772848);
n(952265);
var a = n(481060),
    o = n(570140),
    s = n(844718),
    l = n(762853),
    c = n(301167),
    u = n(887505),
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
n(602091);
let h = "orb-checkout-payment-modal-key",
    g = () => (0, a.VXO)(h);
function E() {
    o.Z.wait(() => {
        o.Z.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
}
let b = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: r = [],
                analyticsSourceLocation: o,
                onCloseCallback: l,
                rentalDuration: f,
            } = e,
            { enabled: p } = (0, s.VL)({ location: "openOrbCheckoutPaymentModal" }),
            _ = (0, i.Z)(),
            m = !1,
            g = () => {
                m ||
                    (0, u._)(d.rMx.PAYMENT_FLOW_CANCELED, {
                        loadId: _,
                        skuId: t,
                        analyticsLocations: r,
                        analyticsSourceLocation: o,
                    }),
                    (0, a.Mr3)(h);
            },
            E = {
                loadId: _,
                skuId: t,
                onCheckoutSuccess: (e) => {
                    m || n(e), (m = !0);
                },
                analyticsLocations: r,
                analyticsSourceLocation: o,
                onCloseCallback: () => {
                    (0, c.x)({ checkoutSucceeded: m }), null == l || l();
                },
                rentalDuration: f,
                onCloseRequest: g,
            };
        return p ? y(E) : O(E);
    },
    y = (e) => {
        let {
            loadId: t,
            skuId: n,
            onCheckoutSuccess: r,
            analyticsLocations: i = [],
            analyticsSourceLocation: a,
            onCloseCallback: o,
            rentalDuration: s,
            onCloseRequest: c,
        } = e;
        return (
            E(),
            (0, l.wO)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: i,
                analyticsSourceLocation: a,
                flowSpecificOptions: {
                    rentalDuration: s,
                    onCheckoutSuccess: r,
                },
                openModalOptions: {
                    onCloseCallback: o,
                    modalKey: h,
                    onCloseRequest: c,
                },
            })
        );
    },
    O = (e) => {
        let {
            skuId: t,
            onCheckoutSuccess: i,
            onCloseRequest: o,
            loadId: s,
            analyticsLocations: l = [],
            analyticsSourceLocation: c,
            onCloseCallback: u,
            rentalDuration: d,
        } = e;
        return (
            E(),
            (0, a.ZDy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 922987));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            m(
                                p(
                                    {
                                        skuId: t,
                                        analyticsLocations: l,
                                        analyticsSourceLocation: c,
                                        onCheckoutSuccess: i,
                                        rentalDuration: d,
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
                    modalKey: h,
                },
            )
        );
    };
