n.d(t, { A: () => m });
var i = n(582128),
    l = n(17928),
    s = n(71393),
    a = n(576705),
    r = n(935208),
    o = n(624458),
    d = n(844944),
    c = n(212455),
    u = n(652215);
function m(e) {
    let [t, n] = i.useState(!1),
        [m, h] = i.useState(!1),
        g = r.default.cast(e),
        { joinRequest: p, guild: A } = (0, l.cf)([d.A, c.A, s.A, a.A], () => {
            let e = d.A.getRequest(g);
            if (null == e) return { joinRequest: null, isModmin: !1, guild: null };
            let t = s.A.getGuild(e.guildId) ?? c.A.getJoinRequestGuild(e.guildId);
            return { joinRequest: e, isModmin: null != t && a.A.can(u.xBc.KICK_MEMBERS, t), guild: t };
        });
    return (
        i.useEffect(() => {
            null != A || m || (h(!0), o.A.fetchRequestToJoinGuilds());
        }, [A, m]),
        i.useEffect(() => {
            null == p &&
                (n(!0),
                o.A.fetchJoinRequestForInterview(g).finally(() => {
                    n(!1);
                }));
        }, [p, g]),
        { loading: t, joinRequest: p, joinRequestGuild: A }
    );
}
