n.d(t, { A: () => p }), n(896048);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    a = n(311907),
    s = n(568598),
    o = n(313961),
    c = n(916023),
    u = n(501838),
    d = n(188275),
    f = n(806931);
function p(e) {
    let { location: t, channelId: n } = e,
        l = (0, c.kt)({ location: t }),
        [p] = (0, a.bG)(
            [o.A],
            () => (null != n ? [o.A.getParticipants(n), o.A.getParticipantsVersion(n)] : [[], 0]),
            [n],
            s.hS,
        ),
        h = r.useMemo(() => i().uniq(p.filter((e) => (0, f.Xw)(e) || (0, f.Ay)(e)).map((e) => e.user.id)), [p]),
        b = (0, u.gT)({
            gameIds: d.sQ,
            userIds: h,
        }),
        g = (0, u.hJ)({ gameIds: d.sQ });
    return l && (g || b);
}
