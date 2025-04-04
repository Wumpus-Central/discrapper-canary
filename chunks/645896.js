l.d(n, {
    Cc: () => f,
    E8: () => h,
    L_: () => g
});
var r = l(192379),
    t = l(788347),
    a = l(372793),
    i = l(731965),
    o = l(881052),
    s = l(931240);
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = l[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function u(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, r);
                  }
                  return l;
              })(Object(n)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
              }),
        e
    );
}
let d = {},
    m = (0, a.F)((e, n) => ({
        clans: {},
        isFetchingGuild: (e) => null != n().fetchPromises[e],
        error: null,
        fetchPromises: {},
        fetchClanInfo: async (l) => {
            let r = n().fetchPromises[l];
            if (
                !(function (e) {
                    var n;
                    let l = Date.now();
                    return l - (null != (n = d[e]) ? n : 0) > 60000;
                })(l)
            ) {
                var t;
                return null != r ? await r : Promise.resolve(null != (t = n().clans[l]) ? t : null);
            }
            d[l] = Date.now();
            try {
                if (null != r) return await r;
                {
                    let r = (async () => {
                        let r = await (0, s.WJ)(l),
                            t = n().clans,
                            a = n().fetchPromises;
                        return (
                            null == a[l] ||
                                (delete a[l],
                                (0, i.j)(() => {
                                    e({
                                        clans: u(c({}, t), { [l]: r }),
                                        error: null,
                                        fetchPromises: a
                                    });
                                })),
                            r
                        );
                    })();
                    return (
                        (0, i.j)(() => {
                            e({ fetchPromises: u(c({}, n().fetchPromises), { [l]: r }) });
                        }),
                        await r
                    );
                }
            } catch (a) {
                let r = new o.Hx(a),
                    t = n().fetchPromises;
                null != t[l] && delete t[l],
                    (0, i.j)(() => {
                        e({
                            error: r,
                            fetchPromises: t
                        });
                    });
            }
            return null;
        }
    }));
function f(e) {
    return m((n) => (null != e ? n.clans[e] : null));
}
function h(e) {
    return m((n) => null != e && n.isFetchingGuild(e));
}
function g(e) {
    let n = m((e) => e.fetchClanInfo, t.X);
    return [
        h(e),
        r.useCallback(async () => {
            if (null == e) return null;
            try {
                return await n(e);
            } catch (e) {
                return null;
            }
        }, [e, n])
    ];
}
