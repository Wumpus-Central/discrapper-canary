n.d(t, { e: () => a });
var i = n(64700),
    l = n(71393);
function a(e) {
    return i.useMemo(
        () =>
            "contextless" === e.type
                ? { channel: void 0, guild: void 0 }
                : { channel: e.channel, guild: l.A.getGuild(e.channel.guild_id) },
        [e],
    );
}
