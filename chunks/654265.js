n.d(t, { A: () => m });
var i = n(64700),
    l = n(311907),
    a = n(71393),
    r = n(576705),
    s = n(661191),
    o = n(624458),
    d = n(844944),
    c = n(212455),
    u = n(652215);
function m(e) {
    let [t, n] = i.useState(!1),
        [m, _] = i.useState(!1),
        h = s.default.cast(e),
        { joinRequest: p, guild: g } = (0, l.cf)([d.A, c.A, a.A, r.A], () => {
            let e = d.A.getRequest(h);
            if (null == e) return { joinRequest: null, isModmin: !1, guild: null };
            let t = a.A.getGuild(e.guildId) ?? c.A.getJoinRequestGuild(e.guildId);
            return { joinRequest: e, isModmin: null != t && r.A.can(u.xBc.KICK_MEMBERS, t), guild: t };
        });
    return (
        i.useEffect(() => {
            null != g || m || (_(!0), o.A.fetchRequestToJoinGuilds());
        }, [g, m]),
        i.useEffect(() => {
            null == p &&
                (n(!0),
                o.A.fetchGuildJoinRequest(h).finally(() => {
                    n(!1);
                }));
        }, [p, h]),
        { loading: t, joinRequest: p, joinRequestGuild: g }
    );
}
