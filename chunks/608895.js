n.d(t, { A: () => r });
var i = n(991690);
function r(e) {
    switch (e.type) {
        case i.U.MAIN:
            return {};
        case i.U.APP_CHANNEL:
        case i.U.VOICE_CHANNEL:
            let t = { channel_id: e.channelId };
            return (null != e.guildId && (t.guild_id = e.guildId), t);
        default:
            return {};
    }
}
