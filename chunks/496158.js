n.d(t, { D: () => l });
var i = n(192379),
    r = n(430824);
function l(e) {
    return i.useMemo(
        () =>
            'contextless' === e.type
                ? {
                      channel: void 0,
                      guild: void 0
                  }
                : {
                      channel: e.channel,
                      guild: r.Z.getGuild(e.channel.guild_id)
                  },
        [e]
    );
}
