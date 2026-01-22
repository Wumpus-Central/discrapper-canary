n.d(t, {
    A: () => f,
}),
    n(896048),
    n(492834);
var r = n(64700),
    i = n(311907),
    a = n(71393),
    s = n(576705),
    o = n(661191),
    l = n(624458),
    c = n(844944),
    u = n(212455),
    d = n(652215);

function f(e) {
    let [t, n] = r.useState(!1),
        [f, p] = r.useState(!1),
        _ = o.default.cast(e),
        { joinRequest: h, guild: m } = (0, i.cf)([c.A, u.A, a.A, s.A], () => {
            var e;
            let t = c.A.getRequest(_);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null,
                };
            let n = null != (e = a.A.getGuild(t.guildId)) ? e : u.A.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && s.A.can(d.xBc.KICK_MEMBERS, n),
                guild: n,
            };
        });
    return (
        r.useEffect(() => {
            null != m || f || (p(!0), l.A.fetchRequestToJoinGuilds());
        }, [m, f]),
        r.useEffect(() => {
            null == h &&
                (n(!0),
                l.A.fetchGuildJoinRequest(_).finally(() => {
                    n(!1);
                }));
        }, [h, _]),
        {
            loading: t,
            joinRequest: h,
            joinRequestGuild: m,
        }
    );
}
