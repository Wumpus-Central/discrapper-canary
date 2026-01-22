e.d(t, { A: () => a });
var i = e(73153),
    l = e(931260),
    r = e(543465);
let a = {
    update(n) {
        i.h.dispatch({
            type: "CHANNEL_COLLAPSE",
            channelId: n,
        });
    },
    toggleCollapseGuild(n) {
        l.A.saveUserGuildSettings(n, { hide_muted_channels: !r.Ay.isGuildCollapsed(n) }),
            i.h.dispatch({
                type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                guildId: n,
            });
    },
};
