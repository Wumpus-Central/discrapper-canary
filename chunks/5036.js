n.d(t, { Z: () => c });
var r = n(570140),
    l = n(149071),
    i = n(9156);
let c = {
    update(e) {
        r.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        l.Z.saveUserGuildSettings(e, { hide_muted_channels: !i.ZP.isGuildCollapsed(e) }),
            r.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            });
    }
};
