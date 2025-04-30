n.d(t, { Z: () => o });
var r = n(570140),
    i = n(149071),
    l = n(9156);
let o = {
    update(e) {
        r.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        i.Z.saveUserGuildSettings(e, { hide_muted_channels: !l.ZP.isGuildCollapsed(e) }),
            r.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            });
    }
};
