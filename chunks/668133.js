n.d(t, { h: () => o });
var i = n(627968);
n(64700);
var l = n(270003),
    s = n(863598),
    r = n(308889),
    a = n(985018);
function o(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, i.jsxs)(l.n, {
        label: a.intl.string(a.t["Cv6AN/"]),
        description: a.intl.string(a.t.qxIcrT),
        children: [
            (0, i.jsx)(r.l, { canManageGuild: t, guild: n }),
            (0, i.jsx)(s.h, {
                layout: "horizontal",
                label: a.intl.string(a.t.NASFnq),
                description: a.intl.string(a.t.ZhOdpR),
                canManageGuild: t,
                guildId: n.id,
                systemChannelId: n.systemChannelId,
            }),
        ],
    });
}
