r.d(n, {
    Cc: function () {
        return h;
    },
    E8: function () {
        return _;
    },
    L_: function () {
        return m;
    }
});
var i = r(192379),
    a = r(232713),
    o = r(65400),
    s = r(731965),
    l = r(881052),
    u = r(931240);
let c = {},
    d = 60000;
function f(e) {
    var n;
    let r = Date.now();
    return r - (null !== (n = c[e]) && void 0 !== n ? n : 0) > d;
}
let p = (0, o.F)((e, n) => ({
    clans: {},
    isFetchingGuild: (e) => null != n().fetchPromises[e],
    error: null,
    fetchPromises: {},
    fetchClanInfo: async (r) => {
        let i = n().fetchPromises[r];
        if (!f(r)) {
            var a;
            return null != i ? await i : Promise.resolve(null !== (a = n().clans[r]) && void 0 !== a ? a : null);
        }
        c[r] = Date.now();
        try {
            if (null != i) return await i;
            {
                let i = (async () => {
                    let i = await (0, u.WJ)(r),
                        a = n().clans,
                        o = n().fetchPromises;
                    return null == o[r]
                        ? i
                        : (delete o[r],
                          (0, s.j)(() => {
                              e({
                                  clans: {
                                      ...a,
                                      [r]: i
                                  },
                                  error: null,
                                  fetchPromises: o
                              });
                          }),
                          i);
                })();
                return (
                    (0, s.j)(() => {
                        e({
                            fetchPromises: {
                                ...n().fetchPromises,
                                [r]: i
                            }
                        });
                    }),
                    await i
                );
            }
        } catch (o) {
            let i = new l.Hx(o),
                a = n().fetchPromises;
            null != a[r] && delete a[r],
                (0, s.j)(() => {
                    e({
                        error: i,
                        fetchPromises: a
                    });
                });
        }
        return null;
    }
}));
function h(e) {
    return p((n) => (null != e ? n.clans[e] : null));
}
function _(e) {
    return p((n) => null != e && n.isFetchingGuild(e));
}
function m(e) {
    let n = p((e) => e.fetchClanInfo, a.X),
        r = _(e);
    return [
        r,
        i.useCallback(async () => {
            if (null == e) return null;
            try {
                return await n(e);
            } catch (e) {
                return null;
            }
        }, [e, n])
    ];
}
