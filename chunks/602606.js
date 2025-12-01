n.d(t, { Z: () => f }), n(388685), n(457542);
var r = n(473749),
    i = n(442837),
    a = n(430824),
    o = n(496675),
    s = n(709054),
    l = n(693546),
    c = n(826581),
    u = n(937111),
    d = n(981631);
function f(e) {
    let [t, n] = r.useState(!1),
        [f, p] = r.useState(!1),
        _ = s.default.cast(e),
        { joinRequest: m, guild: h } = (0, i.cj)([c.Z, u.Z, a.Z, o.Z], () => {
            var e;
            let t = c.Z.getRequest(_);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null,
                };
            let n = null != (e = a.Z.getGuild(t.guildId)) ? e : u.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && o.Z.can(d.Plq.KICK_MEMBERS, n),
                guild: n,
            };
        });
    return (
        r.useEffect(() => {
            null != h || f || (p(!0), l.Z.fetchRequestToJoinGuilds());
        }, [h, f]),
        r.useEffect(() => {
            null == m &&
                (n(!0),
                l.Z.fetchGuildJoinRequest(_).finally(() => {
                    n(!1);
                }));
        }, [m, _]),
        {
            loading: t,
            joinRequest: m,
            joinRequestGuild: h,
        }
    );
}
