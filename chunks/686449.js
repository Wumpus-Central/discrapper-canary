i.d(t, { A: () => r });
var n = i(73153),
    l = i(931260),
    s = i(543465);
let r = {
    update(e) {
        n.h.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
    },
    toggleCollapseGuild(e) {
        l.A.saveUserGuildSettings(e, { hide_muted_channels: !s.Ay.isGuildCollapsed(e) }),
            n.h.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
    },
};
