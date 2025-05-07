r.d(t, { Z: () => o });
var n = r(570140),
    i = r(149071),
    l = r(9156);
let o = {
    update(e) {
        n.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        i.Z.saveUserGuildSettings(e, { hide_muted_channels: !l.ZP.isGuildCollapsed(e) }),
            n.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            });
    }
};
