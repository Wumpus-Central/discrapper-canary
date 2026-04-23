t.d(n, { A: () => r });
var l = t(228366),
    i = t(931260),
    a = t(543465);
let r = {
    update(e) {
        l.h.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
    },
    toggleCollapseGuild(e) {
        i.A.saveUserGuildSettings(e, { hide_muted_channels: !a.Ay.isGuildCollapsed(e) }),
            l.h.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
    },
};
