n.d(e, { q: () => s }), n(388685);
var a = n(473749),
    r = n(626135),
    i = n(323321),
    l = n(45474),
    o = n(981631);
let s = (t, e, n) => {
    let [s, u] = a.useState(t),
        [c, d] = a.useState(Date.now()),
        [_] = a.useState(Date.now()),
        m = a.useCallback(
            (t) => {
                r.default.track(
                    o.rMx.CANCELLATION_FLOW_STEP,
                    (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                a = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                    }),
                                )),
                                a.forEach(function (e) {
                                    var a;
                                    (a = n[e]),
                                        e in t
                                            ? Object.defineProperty(t, e, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (t[e] = a);
                                });
                        }
                        return t;
                    })(
                        {
                            from_step: l.O[s],
                            to_step: l.O[t],
                            step_duration_ms: Date.now() - c,
                            flow_duration_ms: Date.now() - _,
                            location_stack: n,
                        },
                        (0, i.v)(e),
                    ),
                ),
                    u(t),
                    d(Date.now());
            },
            [n, _, c, s, e],
        );
    return [s, m, c, _];
};
