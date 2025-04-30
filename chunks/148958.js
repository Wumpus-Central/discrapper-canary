n.d(t, { h: () => u }), n(388685), n(539854), n(642613);
var r = n(192379),
    i = n(442837),
    l = n(581364),
    o = n(675478),
    s = n(709054),
    a = n(822245),
    c = n(526761);
function u(e, t) {
    r.useEffect(() => {
        o.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, i.e7)([a.Z], () => a.Z.getApplicationFrecencyWithoutLoadingLatest()),
        u = r.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => {
                          var n, r, i;
                          return (
                              (r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (i = i = { isUserApp: null != (n = null == t ? void 0 : t.some((t) => t.application.id === e.id)) && n }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              r
                          );
                      }),
            [e, t]
        ),
        d = r.useMemo(() => (null == t ? void 0 : t.filter((t) => !e.some((e) => e.id === t.application.id))), [e, t]),
        h = r.useMemo(() => {
            var e;
            null == d ||
                d.forEach((e) => {
                    let t = s.default.extractTimestamp(e.id);
                    null == n.getEntry(e.application.id) && n.track(e.application.id, t);
                }),
                n.compute();
            let t = null != (e = null == d ? void 0 : d.map((e) => (0, l.X0)(e.application, !0))) ? e : [],
                r = [...u];
            return (
                r.push(...t),
                r.sort((e, t) => {
                    var r, i;
                    let l = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (i = n.getScore(e.id)) ? i : 0);
                    return 0 !== l ? l : e.name.localeCompare(t.name);
                }),
                r
            );
        }, [u, n, d]);
    return r.useMemo(() => {
        var e, r;
        let i, l;
        null == t ||
            t.forEach((e) => {
                let t = s.default.extractTimestamp(e.id);
                (null == l || t > l) && ((i = e), (l = t));
            }),
            u.forEach((e) => {
                var t, r;
                let o = Math.max(...(null != (r = null == (t = n.getEntry(e.id)) ? void 0 : t.recentUses) ? r : []));
                (null == l || o > l) && ((i = e), (l = o));
            });
        let o = null != (r = null == i || null == (e = i.application) ? void 0 : e.id) ? r : '';
        return [...h.filter((e) => e.id === o), ...h.filter((e) => e.id !== o)];
    }, [h, u, n, t]);
}
