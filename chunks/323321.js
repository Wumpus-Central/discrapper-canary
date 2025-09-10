n.d(t, {
    V: () => u,
    v: () => c,
});
var r = n(845220),
    i = n(626135),
    a = n(74538),
    o = n(981631);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, a.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status,
    };
}
function u(e, t, n) {
    let a = null != n ? n : (0, r.b)();
    i.default.track(
        o.rMx.PREMIUM_RESUBSCRIBE_COMPLETED,
        l(
            {
                location_stack: t,
                load_id: a,
            },
            c(e),
        ),
    );
}
