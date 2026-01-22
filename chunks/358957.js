n.d(t, { e: () => o }), n(747238);
var r = n(734057),
    i = n(977997),
    a = n(140547);
let s = [null, null];
function o(e, t) {
    var n, o;
    if (null == t) return s;
    let l =
            null == (n = r.A.getChannel(null == (o = i.A.getVoiceStateForUser(e)) ? void 0 : o.channelId))
                ? void 0
                : n.guild_id,
        { defaultStatusVariant: c } = (0, a.ko)({
            guildId: l,
            location: "parseHangStatus",
        }),
        u = t.split(":");
    return u.length > 1 && u[1] !== c ? [u[0], c] : u;
}
