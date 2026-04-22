n.d(t, { e: () => a });
var l = n(64700),
    i = n(71393);
function a(e) {
    return l.useMemo(
        () =>
            "contextless" === e.type
                ? { channel: void 0, guild: void 0 }
                : { channel: e.channel, guild: i.A.getGuild(e.channel.guild_id) },
        [e],
    );
}
