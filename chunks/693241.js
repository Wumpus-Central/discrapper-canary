var e = i(734057),
    t = i(576705),
    u = i(652215);
function a(n, l) {
    return null != n && n.type === u.rbe.GUILD_APP && n.application_id === l && t.A.can(u.xBc.VIEW_CHANNEL, n);
}
i.d(
    l,
    {},
    {
        A: function (n, l, i) {
            let t = e.A.getChannel(i);
            if (t?.guild_id === n && a(t, l)) return { guildId: n, channelId: t.id };
            let u = null;
            for (let i of Object.values(e.A.getMutableGuildChannelsForGuild(n)))
                (null == u || i.position < u.position) && a(i, l) && (u = i);
            return null != u ? { guildId: n, channelId: u.id } : null;
        },
    },
);
