n.d(t, { Z: () => f }), n(388685);
var r = n(473749),
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(413523),
    s = n(358221),
    c = n(699955),
    u = n(812797),
    d = n(582113),
    p = n(354459);
function f(e) {
    let { location: t, channelId: n } = e,
        i = (0, c.cZ)({ location: t }),
        [f] = (0, a.e7)(
            [s.Z],
            () => (null != n ? [s.Z.getParticipants(n), s.Z.getParticipantsVersion(n)] : [[], 0]),
            [n],
            o.Lc,
        ),
        h = r.useMemo(() => l().uniq(f.filter((e) => (0, p.Io)(e) || (0, p._5)(e)).map((e) => e.user.id)), [f]),
        g = (0, u.VO)({
            gameIds: d.RI,
            userIds: h,
        }),
        m = (0, u.fR)({ gameIds: d.RI });
    return i && (m || g);
}
