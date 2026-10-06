n.d(t, { A: () => s });
var i = n(284009),
    r = n.n(i),
    a = n(991690);
function s(e) {
    let t = String(e.type);
    switch (e.type) {
        case a.U.MAIN:
            return { surface: t };
        case a.U.APP_CHANNEL:
        case a.U.VOICE_CHANNEL:
            let n = { surface: t, channel_id: e.channelId };
            return (null != e.guildId && (n.guild_id = e.guildId), n);
        case a.U.INTERACTION_MODAL:
            return (r()(!1, "A Frame cannot be launched at an INTERACTION_MODAL surface"), { surface: t });
        default:
            return { surface: t };
    }
}
