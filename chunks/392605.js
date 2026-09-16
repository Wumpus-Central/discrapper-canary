n.d(t, { i: () => c });
var l = n(228366),
    i = n(976860),
    s = n(696451),
    r = n(317525),
    a = n(71393),
    o = n(652215),
    u = n(746080);
function c(e, t, n) {
    let c = a.A.getGuild(e);
    if (null != e && null != c)
        switch (t) {
            case "home":
            case "guide":
                d(u.VV.GUILD_HOME);
                break;
            case "browse":
                d(u.VV.CHANNEL_BROWSER);
                break;
            case "customize":
                d(u.VV.CUSTOMIZE_COMMUNITY);
                break;
            case "linked-roles":
                if (null != n) {
                    let t = s.Ay.getSelfMember(e);
                    if (null == t) return;
                    let i = r.A.getRole(e, n);
                    null == i || t.roles.includes(i.id)
                        ? l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e })
                        : l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e, role: i });
                } else l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
        }
    function d(t) {
        null != e && null != c && c.features.has(o.GuildFeatures.COMMUNITY) && (0, i.pX)(o.BVt.CHANNEL(e, t));
    }
}
