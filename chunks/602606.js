n.d(t, { Z: () => p }), n(388685), n(457542);
var r = n(192379),
    i = n(442837),
    l = n(430824),
    a = n(496675),
    o = n(709054),
    s = n(693546),
    c = n(826581),
    u = n(937111),
    d = n(981631);
function p(e) {
    let [t, n] = r.useState(!1),
        [p, m] = r.useState(!1),
        f = o.default.cast(e),
        { joinRequest: h, guild: g } = (0, i.cj)([c.Z, u.Z, l.Z, a.Z], () => {
            var e;
            let t = c.Z.getRequest(f);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null != (e = l.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && a.Z.can(d.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        r.useEffect(() => {
            null != g || p || (m(!0), s.Z.fetchRequestToJoinGuilds());
        }, [g, p]),
        r.useEffect(() => {
            null == h &&
                (n(!0),
                s.Z.fetchGuildJoinRequest(f).finally(() => {
                    n(!1);
                }));
        }, [h, f]),
        {
            loading: t,
            joinRequest: h,
            joinRequestGuild: g
        }
    );
}
