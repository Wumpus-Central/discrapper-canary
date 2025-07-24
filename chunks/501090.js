(n.d(e, {
    b: () => c,
    q: () => l
}),
    n(388685));
var r = n(73800),
    i = n(626135),
    o = n(74538),
    a = n(45474),
    s = n(981631);
let l = (t, e, n) => {
    let [o, l] = r.useState(t),
        [u, d] = r.useState(Date.now()),
        [m] = r.useState(Date.now()),
        _ = r.useCallback(
            (t) => {
                (i.default.track(
                    s.rMx.CANCELLATION_FLOW_STEP,
                    (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    })
                                )),
                                r.forEach(function (e) {
                                    var r;
                                    ((r = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (t[e] = r));
                                }));
                        }
                        return t;
                    })(
                        {
                            from_step: a.O[o],
                            to_step: a.O[t],
                            step_duration_ms: Date.now() - u,
                            flow_duration_ms: Date.now() - m,
                            location_stack: n
                        },
                        c(e)
                    )
                ),
                    l(t),
                    d(Date.now()));
            },
            [n, m, u, o, e]
        );
    return [o, _, u, m];
};
function c(t) {
    var e;
    return {
        subscription_id: t.id,
        subscription_type: t.type,
        subscription_plan_id: null == (e = (0, o.Af)(t)) ? void 0 : e.id,
        subscription_plan_gateway_plan_id: t.paymentGatewayPlanId,
        subscription_status: t.status
    };
}
