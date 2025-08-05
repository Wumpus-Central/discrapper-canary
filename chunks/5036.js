n.d(t, { Z: () => a });
var i = n(570140),
    r = n(149071),
    l = n(9156);
let a = {
    update(e) {
        i.Z.dispatch({
            type: 'CHANNEL_COLLAPSE',
            channelId: e
        });
    },
    toggleCollapseGuild(e) {
        (r.Z.saveUserGuildSettings(e, { hide_muted_channels: !l.ZP.isGuildCollapsed(e) }),
            i.Z.dispatch({
                type: 'GUILD_TOGGLE_COLLAPSE_MUTED',
                guildId: e
            }));
    }
};
