n.d(t, { Z: () => p }), n(388685), n(457542);
var r = n(647438),
    i = n(442837),
    l = n(430824),
    o = n(496675),
    a = n(709054),
    s = n(693546),
    c = n(826581),
    u = n(937111),
    d = n(981631);
function p(e) {
    let [t, n] = r.useState(!1),
        [p, m] = r.useState(!1),
        f = a.default.cast(e),
        { joinRequest: g, guild: _ } = (0, i.cj)([c.Z, u.Z, l.Z, o.Z], () => {
            var e;
            let t = c.Z.getRequest(f);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null,
                };
            let n = null != (e = l.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && o.Z.can(d.Plq.KICK_MEMBERS, n),
                guild: n,
            };
        });
    return (
        r.useEffect(() => {
            null != _ || p || (m(!0), s.Z.fetchRequestToJoinGuilds());
        }, [_, p]),
        r.useEffect(() => {
            null == g &&
                (n(!0),
                s.Z.fetchGuildJoinRequest(f).finally(() => {
                    n(!1);
                }));
        }, [g, f]),
        {
            loading: t,
            joinRequest: g,
            joinRequestGuild: _,
        }
    );
}
