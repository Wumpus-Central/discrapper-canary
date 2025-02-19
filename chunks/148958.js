n.d(t, { h: () => u }), n(47120), n(653041), n(230036);
var i = n(192379),
    l = n(442837),
    r = n(581364),
    o = n(675478),
    a = n(709054),
    s = n(822245),
    c = n(526761);
function u(e, t) {
    i.useEffect(() => {
        o.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, l.e7)([s.Z], () => s.Z.getApplicationFrecencyWithoutLoadingLatest()),
        u = i.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => {
                          var n, i, l;
                          return (
                              (i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, e)),
                              (l = l = { isUserApp: null !== (n = null == t ? void 0 : t.some((t) => t.application.id === e.id)) && void 0 !== n && n }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i
                          );
                      }),
            [e, t]
        ),
        d = i.useMemo(() => (null == t ? void 0 : t.filter((t) => !e.some((e) => e.id === t.application.id))), [e, t]),
        m = i.useMemo(() => {
            var e;
            null == d ||
                d.forEach((e) => {
                    let t = a.default.extractTimestamp(e.id);
                    null == n.getEntry(e.application.id) && n.track(e.application.id, t);
                }),
                n.compute();
            let t = null !== (e = null == d ? void 0 : d.map((e) => (0, r.X0)(e.application, !0))) && void 0 !== e ? e : [],
                i = [...u];
            return (
                i.push(...t),
                i.sort((e, t) => {
                    var i, l;
                    let r = (null !== (i = n.getScore(t.id)) && void 0 !== i ? i : 0) - (null !== (l = n.getScore(e.id)) && void 0 !== l ? l : 0);
                    return 0 !== r ? r : e.name.localeCompare(t.name);
                }),
                i
            );
        }, [u, n, d]);
    return i.useMemo(() => {
        var e, i;
        let l, r;
        null == t ||
            t.forEach((e) => {
                let t = a.default.extractTimestamp(e.id);
                (null == r || t > r) && ((l = e), (r = t));
            }),
            u.forEach((e) => {
                var t, i;
                let o = Math.max(...(null !== (i = null === (t = n.getEntry(e.id)) || void 0 === t ? void 0 : t.recentUses) && void 0 !== i ? i : []));
                (null == r || o > r) && ((l = e), (r = o));
            });
        let o = null !== (i = null == l ? void 0 : null === (e = l.application) || void 0 === e ? void 0 : e.id) && void 0 !== i ? i : '';
        return [...m.filter((e) => e.id === o), ...m.filter((e) => e.id !== o)];
    }, [m, u, n, t]);
}
