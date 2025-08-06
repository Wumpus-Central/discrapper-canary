(n.d(t, { h: () => p }), n(388685), n(539854), n(642613));
var r = n(73800),
    i = n(442837),
    o = n(581364),
    a = n(675478),
    s = n(709054),
    l = n(822245),
    c = n(526761);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    r.useEffect(() => {
        a.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, i.e7)([l.Z], () => l.Z.getApplicationFrecencyWithoutLoadingLatest()),
        u = r.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => {
                          var n;
                          return _(d({}, e), { isUserApp: null != (n = null == t ? void 0 : t.some((t) => t.application.id === e.id)) && n });
                      }),
            [e, t]
        ),
        f = r.useMemo(() => (null == t ? void 0 : t.filter((t) => !e.some((e) => e.id === t.application.id))), [e, t]),
        p = r.useMemo(() => {
            var e;
            (null == f ||
                f.forEach((e) => {
                    let t = s.default.extractTimestamp(e.id);
                    null == n.getEntry(e.application.id) && n.track(e.application.id, t);
                }),
                n.compute());
            let t = null != (e = null == f ? void 0 : f.map((e) => (0, o.X0)(e.application, !0))) ? e : [],
                r = [...u];
            return (
                r.push(...t),
                r.sort((e, t) => {
                    var r, i;
                    let o = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (i = n.getScore(e.id)) ? i : 0);
                    return 0 !== o ? o : e.name.localeCompare(t.name);
                }),
                r
            );
        }, [u, n, f]);
    return r.useMemo(() => {
        var e, r;
        let i, o;
        (null == t ||
            t.forEach((e) => {
                let t = s.default.extractTimestamp(e.id);
                (null == o || t > o) && ((i = e), (o = t));
            }),
            u.forEach((e) => {
                var t, r;
                let a = Math.max(...(null != (r = null == (t = n.getEntry(e.id)) ? void 0 : t.recentUses) ? r : []));
                (null == o || a > o) && ((i = e), (o = a));
            }));
        let a = null != (r = null == i || null == (e = i.application) ? void 0 : e.id) ? r : '';
        return [...p.filter((e) => e.id === a), ...p.filter((e) => e.id !== a)];
    }, [p, u, n, t]);
}
