n.d(t, { A: () => o });
var r = n(64700),
    i = n(105917),
    l = n(969379),
    s = n(300233),
    a = n(22491),
    c = n(311750);
function o(e, t) {
    let n = null == t ? void 0 : t.team,
        { payoutsByPeriod: o, loading: d } = (0, l.A)(null == t ? void 0 : t.id, {
            groupType: c.x1.SERVER_ROLE_SUBSCRIPTION,
            teamId: null == n ? void 0 : n.id,
        }),
        u = (0, s.X)("useEarningMetrics"),
        f = (0, a.A)(e),
        {
            currentPeriod: g,
            previousPeriods: b,
            metrics: m,
        } = r.useMemo(() => {
            var e, t;
            let { currentPeriod: n, previousPeriods: r } = (0, i.dc)(o),
                l = (0, i.El)(n, r[0]);
            return {
                currentPeriod: n,
                previousPeriods: r,
                metrics:
                    ((e = (function (e) {
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
                    })({}, l)),
                    (t = t =
                        {
                            subscribers: f,
                            subscriberChange: l.paymentsCountChange,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e),
            };
        }, [o, f]);
    return {
        loading: d || !u,
        team: n,
        currentPeriod: g,
        previousPeriods: b,
        allPeriods: o,
        metrics: m,
    };
}
