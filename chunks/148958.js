(t.d(n, { h: () => s }), t(388685), t(539854), t(642613));
var o = t(73800),
    r = t(442837),
    a = t(581364),
    i = t(675478),
    c = t(709054),
    l = t(822245),
    d = t(526761);
function s(e, n) {
    o.useEffect(() => {
        i.DZ.loadIfUncached(d.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, r.e7)([l.Z], () => l.Z.getApplicationFrecencyWithoutLoadingLatest()),
        s = o.useMemo(
            () =>
                null == n || 0 === n.length
                    ? e
                    : e.map((e) => {
                          var t, o, r;
                          return (
                              (o = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          o = Object.keys(t);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (o = o.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              })
                                          )),
                                          o.forEach(function (n) {
                                              var o;
                                              ((o = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: o,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[n] = o));
                                          }));
                                  }
                                  return e;
                              })({}, e)),
                              (r = r = { isUserApp: null != (t = null == n ? void 0 : n.some((n) => n.application.id === e.id)) && t }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, o);
                                        }
                                        return t;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              o
                          );
                      }),
            [e, n]
        ),
        p = o.useMemo(() => (null == n ? void 0 : n.filter((n) => !e.some((e) => e.id === n.application.id))), [e, n]),
        u = o.useMemo(() => {
            var e;
            (null == p ||
                p.forEach((e) => {
                    let n = c.default.extractTimestamp(e.id);
                    null == t.getEntry(e.application.id) && t.track(e.application.id, n);
                }),
                t.compute());
            let n = null != (e = null == p ? void 0 : p.map((e) => (0, a.X0)(e.application, !0))) ? e : [],
                o = [...s];
            return (
                o.push(...n),
                o.sort((e, n) => {
                    var o, r;
                    let a = (null != (o = t.getScore(n.id)) ? o : 0) - (null != (r = t.getScore(e.id)) ? r : 0);
                    return 0 !== a ? a : e.name.localeCompare(n.name);
                }),
                o
            );
        }, [s, t, p]);
    return o.useMemo(() => {
        var e, o;
        let r, a;
        (null == n ||
            n.forEach((e) => {
                let n = c.default.extractTimestamp(e.id);
                (null == a || n > a) && ((r = e), (a = n));
            }),
            s.forEach((e) => {
                var n, o;
                let i = Math.max(...(null != (o = null == (n = t.getEntry(e.id)) ? void 0 : n.recentUses) ? o : []));
                (null == a || i > a) && ((r = e), (a = i));
            }));
        let i = null != (o = null == r || null == (e = r.application) ? void 0 : e.id) ? o : '';
        return [...u.filter((e) => e.id === i), ...u.filter((e) => e.id !== i)];
    }, [u, s, t, n]);
}
