n.d(t, { D: () => a });
var i = n(192379),
    l = n(430824);
function a(e) {
    return i.useMemo(
        () =>
            'contextless' === e.type
                ? {
                      channel: void 0,
                      guild: void 0
                  }
                : {
                      channel: e.channel,
                      guild: l.Z.getGuild(e.channel.guild_id)
                  },
        [e]
    );
}
