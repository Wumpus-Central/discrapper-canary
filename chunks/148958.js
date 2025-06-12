n.d(t, { h: () => s }), n(388685), n(539854), n(642613);
var r = n(73800),
    o = n(442837),
    l = n(581364),
    i = n(675478),
    c = n(709054),
    a = n(822245),
    u = n(526761);
function s(e, t) {
    r.useEffect(() => {
        i.DZ.loadIfUncached(u.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, o.e7)([a.Z], () => a.Z.getApplicationFrecencyWithoutLoadingLatest()),
        s = r.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => {
                          var n, r, o;
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
                              (o = o = { isUserApp: null != (n = null == t ? void 0 : t.some((t) => t.application.id === e.id)) && n }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              r
                          );
                      }),
            [e, t]
        ),
        p = r.useMemo(() => (null == t ? void 0 : t.filter((t) => !e.some((e) => e.id === t.application.id))), [e, t]),
        d = r.useMemo(() => {
            var e;
            null == p ||
                p.forEach((e) => {
                    let t = c.default.extractTimestamp(e.id);
                    null == n.getEntry(e.application.id) && n.track(e.application.id, t);
                }),
                n.compute();
            let t = null != (e = null == p ? void 0 : p.map((e) => (0, l.X0)(e.application, !0))) ? e : [],
                r = [...s];
            return (
                r.push(...t),
                r.sort((e, t) => {
                    var r, o;
                    let l = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (o = n.getScore(e.id)) ? o : 0);
                    return 0 !== l ? l : e.name.localeCompare(t.name);
                }),
                r
            );
        }, [s, n, p]);
    return r.useMemo(() => {
        var e, r;
        let o, l;
        null == t ||
            t.forEach((e) => {
                let t = c.default.extractTimestamp(e.id);
                (null == l || t > l) && ((o = e), (l = t));
            }),
            s.forEach((e) => {
                var t, r;
                let i = Math.max(...(null != (r = null == (t = n.getEntry(e.id)) ? void 0 : t.recentUses) ? r : []));
                (null == l || i > l) && ((o = e), (l = i));
            });
        let i = null != (r = null == o || null == (e = o.application) ? void 0 : e.id) ? r : '';
        return [...d.filter((e) => e.id === i), ...d.filter((e) => e.id !== i)];
    }, [d, s, n, t]);
}
