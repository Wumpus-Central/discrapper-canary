t.d(n, { i: () => u });
var l = t(73153),
    r = t(976860),
    a = t(696451),
    i = t(317525),
    o = t(71393),
    s = t(652215),
    c = t(746080);
function u(e, n, t) {
    let u = o.A.getGuild(e);
    if (null != e && null != u)
        switch (n) {
            case "home":
            case "guide":
                d(c.VV.GUILD_HOME);
                break;
            case "browse":
                d(c.VV.CHANNEL_BROWSER);
                break;
            case "customize":
                d(c.VV.CUSTOMIZE_COMMUNITY);
                break;
            case "linked-roles":
                if (null != t) {
                    let n = a.Ay.getSelfMember(e);
                    if (null == n) return;
                    let r = i.A.getRole(e, t);
                    null == r || n.roles.includes(r.id)
                        ? l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e })
                        : l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e, role: r });
                } else l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
        }
    function d(n) {
        null != e && null != u && u.features.has(s.GuildFeatures.COMMUNITY) && (0, r.pX)(s.BVt.CHANNEL(e, n));
    }
}
