r.d(t, { Z: () => l });
var n = r(570140),
    i = r(149071),
    o = r(9156);
let l = {
    update(e) {
        n.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        i.Z.saveUserGuildSettings(e, { hide_muted_channels: !o.ZP.isGuildCollapsed(e) }),
            n.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            });
    }
};
