n.d(t, { D: () => r });
var i = n(192379),
    l = n(430824);
function r(e) {
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
