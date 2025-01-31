n.d(t, { Z: () => d });
var l = n(570140),
    i = n(149071),
    a = n(9156);
let d = {
    update(e) {
        l.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        i.Z.saveUserGuildSettings(e, { hide_muted_channels: !a.ZP.isGuildCollapsed(e) }),
            l.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            });
    }
};
