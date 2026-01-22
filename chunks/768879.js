n.d(t, {
    I: () => _,
}),
    n(896048),
    n(321073),
    n(638769);
var r = n(64700),
    i = n(311907),
    a = n(168186),
    s = n(594061),
    o = n(661191),
    l = n(630248),
    c = n(355097);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
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

function _(e, t) {
    r.useEffect(() => {
        s.bW.loadIfUncached(c.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, i.bG)([l.A], () => l.A.getApplicationFrecencyWithoutLoadingLatest()),
        u = r.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => {
                          var n;
                          return p(d({}, e), {
                              isUserApp:
                                  null != (n = null == t ? void 0 : t.some((t) => t.application.id === e.id)) && n,
                          });
                      }),
            [e, t],
        ),
        f = r.useMemo(() => (null == t ? void 0 : t.filter((t) => !e.some((e) => e.id === t.application.id))), [e, t]),
        _ = r.useMemo(() => {
            var e;
            null == f ||
                f.forEach((e) => {
                    let t = o.default.extractTimestamp(e.id);
                    null == n.getEntry(e.application.id) &&
                        n.track(e.application.id, {
                            timestamp: t,
                        });
                }),
                n.compute();
            let t = null != (e = null == f ? void 0 : f.map((e) => (0, a.bq)(e.application, !0))) ? e : [],
                r = [...u];
            return (
                r.push(...t),
                r.sort((e, t) => {
                    var r, i;
                    let a = (null != (r = n.getScore(t.id)) ? r : 0) - (null != (i = n.getScore(e.id)) ? i : 0);
                    return 0 !== a ? a : e.name.localeCompare(t.name);
                }),
                r
            );
        }, [u, n, f]);
    return r.useMemo(() => {
        var e, r;
        let i, a;
        null == t ||
            t.forEach((e) => {
                let t = o.default.extractTimestamp(e.id);
                (null == a || t > a) && ((i = e), (a = t));
            }),
            u.forEach((e) => {
                var t, r;
                let s = Math.max(...(null != (t = null == (r = n.getEntry(e.id)) ? void 0 : r.recentUses) ? t : []));
                (null == a || s > a) && ((i = e), (a = s));
            });
        let s = null != (e = null == i || null == (r = i.application) ? void 0 : r.id) ? e : "";
        return [..._.filter((e) => e.id === s), ..._.filter((e) => e.id !== s)];
    }, [_, u, n, t]);
}
