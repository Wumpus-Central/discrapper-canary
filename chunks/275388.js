n.d(t, {
    qA: () => m,
    r9: () => h,
});
var r = n(951288),
    i = n(772848);
n(952265);
var a = n(481060),
    o = n(922987),
    s = n(981631);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(602091);
let p = "orb-checkout-payment-modal-key",
    h = () => (0, a.VXO)(p),
    m = (e) => {
        var {
                skuId: t,
                analyticsLocations: l = [],
                analyticsSourceLocation: u,
                onCloseCallback: _,
                onCheckoutSuccess: h,
            } = e,
            m = f(e, [
                "skuId",
                "analyticsLocations",
                "analyticsSourceLocation",
                "onCloseCallback",
                "onCheckoutSuccess",
            ]);
        let g = !1,
            E = (0, i.Z)();
        return (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 922987));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        d(
                            c(
                                {
                                    skuId: t,
                                    analyticsLocations: l,
                                    analyticsSourceLocation: u,
                                    onCheckoutSuccess: (e) => {
                                        g || h(e), (g = !0);
                                    },
                                },
                                m,
                                n,
                            ),
                            { loadId: E },
                        ),
                    );
            },
            {
                onCloseCallback: _,
                onCloseRequest() {
                    g ||
                        (0, o._Y)(s.rMx.PAYMENT_FLOW_CANCELED, {
                            loadId: E,
                            skuId: t,
                            analyticsLocations: l,
                            analyticsSourceLocation: u,
                        }),
                        (0, a.Mr3)(p);
                },
                modalKey: p,
            },
        );
    };
