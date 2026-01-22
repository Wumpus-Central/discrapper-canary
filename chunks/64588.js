n.d(e, { U: () => u }), n(896048);
var a = n(64700),
    r = n(954571),
    i = n(501957),
    l = n(473702),
    s = n(652215);
let u = (t, e, n) => {
    let [u, o] = a.useState(t),
        [c, d] = a.useState(Date.now()),
        [m] = a.useState(Date.now()),
        f = a.useCallback(
            (t) => {
                r.default.track(
                    s.HAw.CANCELLATION_FLOW_STEP,
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
                            from_step: l.T[u],
                            to_step: l.T[t],
                            step_duration_ms: Date.now() - c,
                            flow_duration_ms: Date.now() - m,
                            location_stack: n,
                        },
                        (0, i.j)(e),
                    ),
                ),
                    o(t),
                    d(Date.now());
            },
            [n, m, c, u, e],
        );
    return [u, f, c, m];
};
