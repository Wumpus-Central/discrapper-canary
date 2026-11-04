var p = d(73153),
    i = d(931260),
    t = d(543465);
d.d(
    e,
    {},
    {
        A: {
            update(s) {
                p.h.dispatch({ type: "CHANNEL_COLLAPSE", channelId: s });
            },
            toggleCollapseGuild(s) {
                (i.A.saveUserGuildSettings(s, { hide_muted_channels: !t.Ay.isGuildCollapsed(s) }),
                    p.h.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: s }));
            },
        },
    },
);
