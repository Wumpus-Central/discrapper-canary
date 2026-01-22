t.d(n, {
    default: () => b,
}),
    t(896048);
var l = t(627968);
t(64700);
var i = t(793574),
    r = t(688810),
    a = t(937008),
    c = t(156312),
    s = t(491057),
    o = t(546042),
    d = t(721252),
    u = t(674223),
    p = t(818348);

function f(e) {
    let { onClose: n, onComplete: t, transitionState: i, applicationId: a, analyticsLocationObject: s, skuId: d } = e,
        {} = (0, c.P5)(),
        { analyticsLocations: u } = (0, r.Ay)();
    return (0, l.jsx)(o.PaymentModal, {
        onClose: n,
        onComplete: t,
        applicationId: a,
        skuId: d,
        initialPlanId: null,
        analyticsObject: s,
        analyticsLocations: u,
        transitionState: i,
    });
}

function b(e) {
    let { loadId: n, applicationId: t, skuId: o, analyticsLocations: b, isGift: g = !1 } = e,
        { analyticsLocations: j } = (0, r.Ay)(b, i.A.PREMIUM_PAYMENT_MODAL);
    return (0, l.jsx)(r.f5, {
        value: j,
        children: (0, l.jsx)(c.PaymentContextProvider, {
            loadId: n,
            stepConfigs: (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return [d.kJ, ...(e ? [u.K_] : []), d.zK, ...d.hh, d.r2, d.zX];
            })(g),
            applicationId: t,
            skuIDs: [o],
            activeSubscription: null,
            purchaseType: p.VV.ONE_TIME,
            isGift: g,
            children: (0, l.jsx)(s.Qt, {
                children: (0, l.jsx)(a.dX, {
                    isGift: g,
                    children: (0, l.jsx)(
                        f,
                        (function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var t = null != arguments[n] ? arguments[n] : {},
                                    l = Object.keys(t);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(t).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (n) {
                                        var l;
                                        (l = t[n]),
                                            n in e
                                                ? Object.defineProperty(e, n, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[n] = l);
                                    });
                            }
                            return e;
                        })({}, e),
                    ),
                }),
            }),
        }),
    });
}
