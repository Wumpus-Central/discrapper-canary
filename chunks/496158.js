n.d(t, { D: () => r });
var l = n(73800),
    i = n(430824);
function r(e) {
    return l.useMemo(
        () =>
            'contextless' === e.type
                ? {
                      channel: void 0,
                      guild: void 0
                  }
                : {
                      channel: e.channel,
                      guild: i.Z.getGuild(e.channel.guild_id)
                  },
        [e]
    );
}
