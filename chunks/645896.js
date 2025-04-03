l.d(n, {
    Cc: () => f,
    E8: () => h,
    L_: () => x
});
var t = l(192379),
    r = l(788347),
    a = l(372793),
    i = l(731965),
    s = l(881052),
    o = l(931240);
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            t.forEach(function (n) {
                var t;
                (t = l[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = t);
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
                      var t = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, t);
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
            let t = n().fetchPromises[l];
            if (
                !(function (e) {
                    var n;
                    let l = Date.now();
                    return l - (null != (n = d[e]) ? n : 0) > 60000;
                })(l)
            ) {
                var r;
                return null != t ? await t : Promise.resolve(null != (r = n().clans[l]) ? r : null);
            }
            d[l] = Date.now();
            try {
                if (null != t) return await t;
                {
                    let t = (async () => {
                        let t = await (0, o.WJ)(l),
                            r = n().clans,
                            a = n().fetchPromises;
                        return (
                            null == a[l] ||
                                (delete a[l],
                                (0, i.j)(() => {
                                    e({
                                        clans: u(c({}, r), { [l]: t }),
                                        error: null,
                                        fetchPromises: a
                                    });
                                })),
                            t
                        );
                    })();
                    return (
                        (0, i.j)(() => {
                            e({ fetchPromises: u(c({}, n().fetchPromises), { [l]: t }) });
                        }),
                        await t
                    );
                }
            } catch (a) {
                let t = new s.Hx(a),
                    r = n().fetchPromises;
                null != r[l] && delete r[l],
                    (0, i.j)(() => {
                        e({
                            error: t,
                            fetchPromises: r
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
function x(e) {
    let n = m((e) => e.fetchClanInfo, r.X);
    return [
        h(e),
        t.useCallback(async () => {
            if (null == e) return null;
            try {
                return await n(e);
            } catch (e) {
                return null;
            }
        }, [e, n])
    ];
}
