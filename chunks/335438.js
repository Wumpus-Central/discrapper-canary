n.d(t, { l: () => o });
var r = n(54381);
n(473749);
var i = n(793030),
    l = n(578053),
    a = n(715224),
    s = n(388032);
function o(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)(i.C3N, {
        label: s.intl.string(s.t["Cv6AN/"]),
        description: s.intl.string(s.t.qxIcrT),
        children: [
            (0, r.jsx)(a.W, {
                canManageGuild: t,
                guild: n,
            }),
            (0, r.jsx)(l.u, {
                layout: "horizontal",
                label: s.intl.string(s.t.NASFnq),
                description: s.intl.string(s.t.ZhOdpR),
                canManageGuild: t,
                guildId: n.id,
                systemChannelId: n.systemChannelId,
            }),
        ],
    });
}
