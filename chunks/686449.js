e.d(t, { A: () => r });
var i = e(73153),
    l = e(931260),
    a = e(543465);
let r = {
    update(n) {
        i.h.dispatch({ type: "CHANNEL_COLLAPSE", channelId: n });
    },
    toggleCollapseGuild(n) {
        l.A.saveUserGuildSettings(n, { hide_muted_channels: !a.Ay.isGuildCollapsed(n) }),
            i.h.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: n });
    },
};
