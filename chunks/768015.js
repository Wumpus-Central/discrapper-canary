n.d(t, { Z: () => l });
var a = n(626135),
    i = n(981631);
function l(e) {
    let { problem: t, channel: n, feedback: l, activityApplication: r, analyticsData: o, location: c, rating: s = null } = e;
    a.default.track(
        i.rMx.ACTIVITY_REPORT_PROBLEM,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })(
            {
                reason: t,
                guild_id: n.getGuildId(),
                channel_id: n.id,
                application_id: null == r ? void 0 : r.id,
                application_name: null == r ? void 0 : r.name,
                location: c,
                rating: s,
                feedback: l
            },
            o
        )
    );
}
