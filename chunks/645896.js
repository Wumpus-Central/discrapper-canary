n.d(t, {
    Cc: () => g,
    E8: () => E,
    L_: () => v
});
var r = n(192379),
    i = n(232713),
    o = n(65400),
    a = n(731965),
    s = n(881052),
    l = n(931240);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = {},
    p = 60000;
function h(e) {
    var t;
    return Date.now() - (null !== (t = _[e]) && void 0 !== t ? t : 0) > p;
}
let m = (0, o.F)((e, t) => ({
    clans: {},
    isFetchingGuild: (e) => null != t().fetchPromises[e],
    error: null,
    fetchPromises: {},
    fetchClanInfo: async (n) => {
        let r = t().fetchPromises[n];
        if (!h(n)) {
            var i;
            return null != r ? await r : Promise.resolve(null !== (i = t().clans[n]) && void 0 !== i ? i : null);
        }
        _[n] = Date.now();
        try {
            if (null != r) return await r;
            {
                let r = (async () => {
                    let r = await (0, l.WJ)(n),
                        i = t().clans,
                        o = t().fetchPromises;
                    return (
                        null == o[n] ||
                            (delete o[n],
                            (0, a.j)(() => {
                                e({
                                    clans: f(u({}, i), { [n]: r }),
                                    error: null,
                                    fetchPromises: o
                                });
                            })),
                        r
                    );
                })();
                return (
                    (0, a.j)(() => {
                        e({ fetchPromises: f(u({}, t().fetchPromises), { [n]: r }) });
                    }),
                    await r
                );
            }
        } catch (o) {
            let r = new s.Hx(o),
                i = t().fetchPromises;
            null != i[n] && delete i[n],
                (0, a.j)(() => {
                    e({
                        error: r,
                        fetchPromises: i
                    });
                });
        }
        return null;
    }
}));
function g(e) {
    return m((t) => (null != e ? t.clans[e] : null));
}
function E(e) {
    return m((t) => null != e && t.isFetchingGuild(e));
}
function v(e) {
    let t = m((e) => e.fetchClanInfo, i.X);
    return [
        E(e),
        r.useCallback(async () => {
            if (null == e) return null;
            try {
                return await t(e);
            } catch (e) {
                return null;
            }
        }, [e, t])
    ];
}
