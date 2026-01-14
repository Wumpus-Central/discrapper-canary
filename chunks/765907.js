n.d(t, {
    Q: () => f,
    Z: () => d,
}),
    n(472816),
    n(794429),
    n(388685);
var r = n(473749),
    i = n(931847),
    a = n(836197),
    o = n(687158),
    s = n(823379),
    l = n(699955),
    c = n(812797),
    u = n(582113);
function d(e) {
    let { displayProfile: t, location: n } = e,
        o = (0, l.cZ)({ location: n }),
        d = r.useMemo(() => ((null == t ? void 0 : t.userId) != null ? [t.userId] : []), [t]),
        f = (0, c.VO)({
            gameIds: u.RI,
            userIds: d,
        }),
        p = (0, c.zc)({
            gameIds: u.RI,
            userIds: d,
        }),
        _ = (0, c.MM)({
            userIds: d,
            guildIdsWithGameStores: u.$Y,
        }),
        m = r.useMemo(() => {
            if ((null == t ? void 0 : t.widgets) == null) return !1;
            let e = new Set(
                null == t
                    ? void 0
                    : t.widgets
                          .map((e) =>
                              e instanceof a.zy
                                  ? e.games.map((e) => e.applicationId)
                                  : e instanceof i.q
                                    ? e.applicationId
                                    : void 0,
                          )
                          .filter(s.lm)
                          .flat(),
            );
            for (let t of u.RI) if (e.has(t)) return !0;
            return !1;
        }, [null == t ? void 0 : t.widgets]);
    return (null == t ? void 0 : t.application) == null && o && (f || p || _ || m);
}
function f(e) {
    let { userId: t, location: n } = e;
    return d({
        displayProfile: (0, o.ZP)(t),
        location: n,
    });
}
