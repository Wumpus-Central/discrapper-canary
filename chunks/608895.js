n.d(t, { A: () => r });
var i = n(991690);
function r(e) {
    let t = String(e.type);
    switch (e.type) {
        case i.U.MAIN:
            return { surface: t };
        case i.U.APP_CHANNEL:
        case i.U.VOICE_CHANNEL:
            let n = { surface: t, channel_id: e.channelId };
            return (null != e.guildId && (n.guild_id = e.guildId), n);
        default:
            return { surface: t };
    }
}
