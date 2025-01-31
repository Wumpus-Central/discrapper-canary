n.d(t, {
    Cc: () => _,
    E8: () => p,
    L_: () => h
});
var i = n(192379),
    r = n(232713),
    a = n(65400),
    s = n(731965),
    o = n(881052),
    l = n(931240);
let u = {},
    c = 60000;
function d(e) {
    var t;
    return Date.now() - (null !== (t = u[e]) && void 0 !== t ? t : 0) > c;
}
let f = (0, a.F)((e, t) => ({
    clans: {},
    isFetchingGuild: (e) => null != t().fetchPromises[e],
    error: null,
    fetchPromises: {},
    fetchClanInfo: async (n) => {
        let i = t().fetchPromises[n];
        if (!d(n)) {
            var r;
            return null != i ? await i : Promise.resolve(null !== (r = t().clans[n]) && void 0 !== r ? r : null);
        }
        u[n] = Date.now();
        try {
            if (null != i) return await i;
            {
                let i = (async () => {
                    let i = await (0, l.WJ)(n),
                        r = t().clans,
                        a = t().fetchPromises;
                    return (
                        null == a[n] ||
                            (delete a[n],
                            (0, s.j)(() => {
                                e({
                                    clans: {
                                        ...r,
                                        [n]: i
                                    },
                                    error: null,
                                    fetchPromises: a
                                });
                            })),
                        i
                    );
                })();
                return (
                    (0, s.j)(() => {
                        e({
                            fetchPromises: {
                                ...t().fetchPromises,
                                [n]: i
                            }
                        });
                    }),
                    await i
                );
            }
        } catch (a) {
            let i = new o.Hx(a),
                r = t().fetchPromises;
            null != r[n] && delete r[n],
                (0, s.j)(() => {
                    e({
                        error: i,
                        fetchPromises: r
                    });
                });
        }
        return null;
    }
}));
function _(e) {
    return f((t) => (null != e ? t.clans[e] : null));
}
function p(e) {
    return f((t) => null != e && t.isFetchingGuild(e));
}
function h(e) {
    let t = f((e) => e.fetchClanInfo, r.X);
    return [
        p(e),
        i.useCallback(async () => {
            if (null == e) return null;
            try {
                return await t(e);
            } catch (e) {
                return null;
            }
        }, [e, t])
    ];
}
