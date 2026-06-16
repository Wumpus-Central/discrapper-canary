n.d(t, { A: () => m });
var i = n(64700),
    s = n(17928),
    l = n(71393),
    a = n(576705),
    r = n(935208),
    o = n(624458),
    c = n(844944),
    d = n(212455),
    u = n(652215);
function m(e) {
    let [t, n] = i.useState(!1),
        [m, x] = i.useState(!1),
        h = r.default.cast(e),
        { joinRequest: g, guild: _ } = (0, s.cf)([c.A, d.A, l.A, a.A], () => {
            let e = c.A.getRequest(h);
            if (null == e) return { joinRequest: null, isModmin: !1, guild: null };
            let t = l.A.getGuild(e.guildId) ?? d.A.getJoinRequestGuild(e.guildId);
            return { joinRequest: e, isModmin: null != t && a.A.can(u.xBc.KICK_MEMBERS, t), guild: t };
        });
    return (
        i.useEffect(() => {
            null != _ || m || (x(!0), o.A.fetchRequestToJoinGuilds());
        }, [_, m]),
        i.useEffect(() => {
            null == g &&
                (n(!0),
                o.A.fetchJoinRequestForInterview(h).finally(() => {
                    n(!1);
                }));
        }, [g, h]),
        { loading: t, joinRequest: g, joinRequestGuild: _ }
    );
}
