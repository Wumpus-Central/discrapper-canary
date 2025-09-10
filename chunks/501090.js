n.d(t, { q: () => c }), n(388685);
var r = n(647438),
    a = n(626135),
    o = n(323321),
    l = n(45474),
    u = n(981631);
let c = (e, t, n) => {
    let [c, i] = r.useState(e),
        [s, _] = r.useState(Date.now()),
        [f] = r.useState(Date.now()),
        O = r.useCallback(
            (e) => {
                a.default.track(
                    u.rMx.CANCELLATION_FLOW_STEP,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            from_step: l.O[c],
                            to_step: l.O[e],
                            step_duration_ms: Date.now() - s,
                            flow_duration_ms: Date.now() - f,
                            location_stack: n,
                        },
                        (0, o.v)(t),
                    ),
                ),
                    i(e),
                    _(Date.now());
            },
            [n, f, s, c, t],
        );
    return [c, O, s, f];
};
