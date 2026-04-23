n.d(t, { A: () => _, U: () => m });
var r = n(64700),
    i = n(311907),
    l = n(923408),
    s = n(80682),
    a = n(859241),
    o = n(256587),
    d = n(696451),
    u = n(71393),
    c = n(661191);
function _(e, t) {
    let n = (0, i.yK)([a.A], () => a.A.getAppliedGuildBoostsForGuild(e) ?? [], [e]),
        _ = r.useMemo(
            () =>
                [...n]
                    .sort((e, t) => (c.default.extractTimestamp(e.id) < c.default.extractTimestamp(t.id) ? 1 : -1))
                    .slice(0, t),
            [n, t],
        ),
        m = (0, i.yK)([d.Ay], () => {
            let t = new Set();
            return (
                _.forEach((n) => {
                    null == d.Ay.getMember(e, n.userId) && t.add(n.userId);
                }),
                Array.from(t)
            );
        }, [e, _]);
    r.useEffect(() => {
        m.length > 0 && m.forEach((t) => o.A.requestMember(e, t));
    }, [e, m]);
    let p = r.useMemo(() => {
        let t = m.slice(0, s.JM / 2);
        return t.length > 0 ? { [e]: t } : {};
    }, [e, m]);
    (0, s.Eq)(p, "GuildPowerupsRecentActivity");
    let A = (0, i.bG)([u.A], () => u.A.getGuild(e)?.premiumSubscriberCount);
    return (
        r.useEffect(() => {
            A !== n.length && (0, l.VU)(e);
        }, [e, A, n.length]),
        _
    );
}
function m(e) {
    let t = new Date(c.default.extractTimestamp(e.id)),
        {
            username: n,
            roleColor: r,
            roleColorStrings: l,
        } = (0, i.cf)([d.Ay], () => {
            let t = d.Ay.getMember(e.guildId, e.userId);
            return {
                username: d.Ay.getNick(e.guildId, e.userId) ?? e.user?.username,
                roleColor: t?.colorString ?? null,
                roleColorStrings: t?.colorStrings ?? null,
            };
        }, [e]);
    return { timestamp: t, username: n, roleColor: r, roleColorStrings: l };
}
