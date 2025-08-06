n.d(t, {
    b: () => c,
    q: () => l,
}),
    n(388685);
var i = n(73800),
    r = n(626135),
    a = n(74538),
    s = n(45474),
    o = n(981631);
let l = (e, t, n) => {
    let [a, l] = i.useState(e),
        [u, d] = i.useState(Date.now()),
        [m] = i.useState(Date.now()),
        p = i.useCallback(
            (e) => {
                r.default.track(
                    o.rMx.CANCELLATION_FLOW_STEP,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            from_step: s.O[a],
                            to_step: s.O[e],
                            step_duration_ms: Date.now() - u,
                            flow_duration_ms: Date.now() - m,
                            location_stack: n,
                        },
                        c(t),
                    ),
                ),
                    l(e),
                    d(Date.now());
            },
            [n, m, u, a, t],
        );
    return [a, p, u, m];
};
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
