n.d(t, { A: () => A });
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(311907),
    r = n(568598),
    o = n(313961),
    d = n(916023),
    c = n(501838),
    u = n(188275),
    h = n(806931);
function A(e) {
    let { location: t, channelId: n } = e,
        l = (0, d.kt)({ location: t }),
        [A] = (0, a.bG)(
            [o.A],
            () => (null != n ? [o.A.getParticipants(n), o.A.getParticipantsVersion(n)] : [[], 0]),
            [n],
            r.hS,
        ),
        g = i.useMemo(() => s().uniq(A.filter((e) => (0, h.Xw)(e) || (0, h.Ay)(e)).map((e) => e.user.id)), [A]),
        m = (0, c.gT)({ gameIds: u.sQ, userIds: g }),
        p = (0, c.hJ)({ gameIds: u.sQ });
    return l && (p || m);
}
