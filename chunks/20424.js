n.d(t, {
    A: () => d,
    c: () => f,
}),
    n(864466),
    n(443073),
    n(896048);
var r = n(64700),
    i = n(633075),
    a = n(289173),
    s = n(950191),
    o = n(403362),
    l = n(916023),
    c = n(501838),
    u = n(188275);
function d(e) {
    let { displayProfile: t, location: n } = e,
        s = (0, l.kt)({ location: n }),
        d = r.useMemo(() => ((null == t ? void 0 : t.userId) != null ? [t.userId] : []), [t]),
        f = (0, c.gT)({
            gameIds: u.sQ,
            userIds: d,
        }),
        p = (0, c.K6)({
            gameIds: u.sQ,
            userIds: d,
        }),
        _ = (0, c.l1)({
            userIds: d,
            guildIdsWithGameStores: u.tC,
        }),
        h = r.useMemo(() => {
            if ((null == t ? void 0 : t.widgets) == null) return !1;
            let e = new Set(
                null == t
                    ? void 0
                    : t.widgets
                          .map((e) =>
                              e instanceof a.Yy
                                  ? e.games.map((e) => e.applicationId)
                                  : e instanceof i.R
                                    ? e.applicationId
                                    : void 0,
                          )
                          .filter(o.Vq)
                          .flat(),
            );
            for (let t of u.sQ) if (e.has(t)) return !0;
            return !1;
        }, [null == t ? void 0 : t.widgets]);
    return (null == t ? void 0 : t.application) == null && s && (f || p || _ || h);
}
function f(e) {
    let { userId: t, location: n } = e;
    return d({
        displayProfile: (0, s.Ay)(t),
        location: n,
    });
}
