n.d(t, { l: () => o });
var r = n(951288);
n(647438);
var i = n(793030),
    l = n(578053),
    s = n(715224),
    a = n(388032);
function o(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)(i.C3N, {
        label: a.intl.string(a.t.Cv6ANz),
        description: a.intl.string(a.t.qxIcra),
        children: [
            (0, r.jsx)(s.W, {
                canManageGuild: t,
                guild: n,
            }),
            (0, r.jsx)(l.u, {
                layout: "horizontal",
                label: a.intl.string(a.t.NASFnp),
                description: a.intl.string(a.t.ZhOdpa),
                canManageGuild: t,
                guildId: n.id,
                systemChannelId: n.systemChannelId,
            }),
        ],
    });
}
