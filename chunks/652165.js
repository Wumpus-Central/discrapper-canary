n.d(t, {
    B4: () => b,
    o6: () => g,
});
var r = n(627968),
    i = n(835245);
n(192308);
var a = n(397927),
    s = n(73153),
    o = n(769315),
    l = n(589078),
    c = n(301518),
    u = n(373856),
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
n(231723);
let m = "orb-checkout-payment-modal-key",
    g = () => (0, a.Ry6)(m);
function E() {
    s.h.wait(() => {
        s.h.dispatch({ type: "PAYMENT_MODAL_OPEN" });
    });
}
let b = (e) => {
        let {
                skuId: t,
                onCheckoutSuccess: n,
                analyticsLocations: r = [],
                analyticsSourceLocation: s,
                onCloseCallback: l,
                rentalDuration: f,
            } = e,
            { enabled: p } = (0, o.ik)({ location: "openOrbCheckoutPaymentModal" }),
            _ = (0, i.A)(),
            h = !1,
            g = () => {
                h ||
                    (0, u.g)(d.HAw.PAYMENT_FLOW_CANCELED, {
                        loadId: _,
                        skuId: t,
                        analyticsLocations: r,
                        analyticsSourceLocation: s,
                    }),
                    (0, a.OoC)(m);
            },
            E = {
                loadId: _,
                skuId: t,
                onCheckoutSuccess: (e) => {
                    h || n(e), (h = !0);
                },
                analyticsLocations: r,
                analyticsSourceLocation: s,
                onCloseCallback: () => {
                    (0, c.S)({ checkoutSucceeded: h }), null == l || l();
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
            onCloseCallback: s,
            rentalDuration: o,
            onCloseRequest: c,
        } = e;
        return (
            E(),
            (0, l.Tt)().openCheckoutModal({
                loadId: t,
                skuId: n,
                analyticsLocations: i,
                analyticsSourceLocation: a,
                flowSpecificOptions: {
                    rentalDuration: o,
                    onCheckoutSuccess: r,
                },
                openModalOptions: {
                    onCloseCallback: s,
                    modalKey: m,
                    onCloseRequest: c,
                },
            })
        );
    },
    O = (e) => {
        let {
            skuId: t,
            onCheckoutSuccess: i,
            onCloseRequest: s,
            loadId: o,
            analyticsLocations: l = [],
            analyticsSourceLocation: c,
            onCloseCallback: u,
            rentalDuration: d,
        } = e;
        return (
            E(),
            (0, a.mMO)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 440612));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            h(
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
                                { loadId: o },
                            ),
                        );
                },
                {
                    onCloseCallback: u,
                    onCloseRequest: s,
                    modalKey: m,
                },
            )
        );
    };
