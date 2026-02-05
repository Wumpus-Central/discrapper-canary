n.d(t, { A: () => p, U: () => m });
var r = n(64700),
    l = n(311907),
    i = n(923408),
    s = n(80682),
    o = n(859241),
    a = n(256587),
    u = n(696451),
    d = n(71393),
    c = n(661191);
function p(e, t) {
    let n = (0, l.yK)([o.A], () => o.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
        p = r.useMemo(
            () =>
                [...n]
                    .sort((e, t) => (c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : -1))
                    .slice(0, t),
            [n, t],
        ),
        m = (0, l.yK)([u.Ay], () => {
            let t = new Set();
            return (
                p.forEach((n) => {
                    null == u.Ay.getMember(e, n.userId) && t.add(n.userId);
                }),
                Array.from(t)
            );
        }, [e, p]);
    r.useEffect(() => {
        m.length > 0 && m.forEach((t) => a.A.requestMember(e, t));
    }, [e, m]);
    let A = r.useMemo(() => (m.length > 0 ? { [e]: m } : {}), [e, m]);
    (0, s.E)(A, "GuildPowerupsRecentActivity");
    let _ = (0, l.bG)([d.A], () => d.A.getGuild(e)?.premiumSubscriberCount);
    return (
        r.useEffect(() => {
            _ !== n.length && (0, i.VU)(e);
        }, [e, _, n.length]),
        p
    );
}
function m(e) {
    let t = new Date(c.default.extractTimestamp(e.id)),
        {
            username: n,
            roleColor: r,
            roleColorStrings: i,
        } = (0, l.cf)([u.Ay], () => {
            let t = u.Ay.getMember(e.guildId, e.userId);
            return {
                username: u.Ay.getNick(e.guildId, e.userId) ?? e.user?.username,
                roleColor: t?.colorString ?? null,
                roleColorStrings: t?.colorStrings ?? null,
            };
        }, [e]);
    return { timestamp: t, username: n, roleColor: r, roleColorStrings: i };
}
