(n.d(t, { Z: () => f }), n(388685), n(457542));
var r = n(73800),
    i = n(442837),
    o = n(430824),
    a = n(496675),
    s = n(709054),
    l = n(693546),
    c = n(826581),
    u = n(937111),
    d = n(981631);
function f(e) {
    let [t, n] = r.useState(!1),
        [f, _] = r.useState(!1),
        p = s.default.cast(e),
        { joinRequest: h, guild: m } = (0, i.cj)([c.Z, u.Z, o.Z, a.Z], () => {
            var e;
            let t = c.Z.getRequest(p);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null != (e = o.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && a.Z.can(d.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        r.useEffect(() => {
            null != m || f || (_(!0), l.Z.fetchRequestToJoinGuilds());
        }, [m, f]),
        r.useEffect(() => {
            null == h &&
                (n(!0),
                l.Z.fetchGuildJoinRequest(p).finally(() => {
                    n(!1);
                }));
        }, [h, p]),
        {
            loading: t,
            joinRequest: h,
            joinRequestGuild: m
        }
    );
}
