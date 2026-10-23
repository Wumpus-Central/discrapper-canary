t.d(n, { i: () => u });
var l = t(73153),
    a = t(976860),
    i = t(696451),
    r = t(317525),
    s = t(71393),
    o = t(652215),
    c = t(746080);
function u(e, n, t) {
    let u = s.A.getGuild(e);
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
                    let n = i.Ay.getSelfMember(e);
                    if (null == n) return;
                    let a = r.A.getRole(e, t);
                    null == a || n.roles.includes(a.id)
                        ? l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e })
                        : l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e, role: a });
                } else l.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
        }
    function d(n) {
        null != e && null != u && u.features.has(o.GuildFeatures.COMMUNITY) && (0, a.pX)(o.BVt.CHANNEL(e, n));
    }
}
