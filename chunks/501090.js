(n.d(t, {
    b: () => c,
    q: () => l
}),
    n(388685));
var r = n(73800),
    i = n(626135),
    o = n(74538),
    a = n(45474),
    s = n(981631);
let l = (e, t, n) => {
    let [o, l] = r.useState(e),
        [u, d] = r.useState(Date.now()),
        [m] = r.useState(Date.now()),
        _ = r.useCallback(
            (e) => {
                (i.default.track(
                    s.rMx.CANCELLATION_FLOW_STEP,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })(
                        {
                            from_step: a.O[o],
                            to_step: a.O[e],
                            step_duration_ms: Date.now() - u,
                            flow_duration_ms: Date.now() - m,
                            location_stack: n
                        },
                        c(t)
                    )
                ),
                    l(e),
                    d(Date.now()));
            },
            [n, m, u, o, t]
        );
    return [o, _, u, m];
};
function c(e) {
    var t;
    return {
        subscription_id: e.id,
        subscription_type: e.type,
        subscription_plan_id: null == (t = (0, o.Af)(e)) ? void 0 : t.id,
        subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
        subscription_status: e.status
    };
}
