r.d(t, {
    Cc: () => m,
    E8: () => p,
    L_: () => h
});
var n = r(192379),
    l = r(359959),
    i = r(993192),
    a = r(731965),
    s = r(881052),
    o = r(931240);
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let d = {},
    f = (0, i.F)((e, t) => ({
        clans: {},
        isFetchingGuild: (e) => null != t().fetchPromises[e],
        error: null,
        fetchPromises: {},
        fetchClanInfo: async (r) => {
            let n = t().fetchPromises[r];
            if (
                !(function (e) {
                    var t;
                    let r = Date.now();
                    return r - (null != (t = d[e]) ? t : 0) > 60000;
                })(r)
            ) {
                var l;
                return null != n ? await n : Promise.resolve(null != (l = t().clans[r]) ? l : null);
            }
            d[r] = Date.now();
            try {
                if (null != n) return await n;
                {
                    let n = (async () => {
                        let n = await (0, o.WJ)(r),
                            l = t().clans,
                            i = t().fetchPromises;
                        return (
                            null == i[r] ||
                                (delete i[r],
                                (0, a.j)(() => {
                                    e({
                                        clans: u(c({}, l), { [r]: n }),
                                        error: null,
                                        fetchPromises: i
                                    });
                                })),
                            n
                        );
                    })();
                    return (
                        (0, a.j)(() => {
                            e({ fetchPromises: u(c({}, t().fetchPromises), { [r]: n }) });
                        }),
                        await n
                    );
                }
            } catch (i) {
                let n = new s.Hx(i),
                    l = t().fetchPromises;
                null != l[r] && delete l[r],
                    (0, a.j)(() => {
                        e({
                            error: n,
                            fetchPromises: l
                        });
                    });
            }
            return null;
        }
    }));
function m(e) {
    return f((t) => (null != e ? t.clans[e] : null));
}
function p(e) {
    return f((t) => null != e && t.isFetchingGuild(e));
}
function h(e) {
    let t = f((e) => e.fetchClanInfo, l.X);
    return [
        p(e),
        n.useCallback(async () => {
            if (null == e) return null;
            try {
                return await t(e);
            } catch (e) {
                return null;
            }
        }, [e, t])
    ];
}
