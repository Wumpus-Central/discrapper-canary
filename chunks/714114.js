i.d(e, { A: () => o });
var l = i(17928),
    a = i(734057),
    n = i(576705),
    r = i(977997),
    s = i(818348);
function o(t) {
    let { userId: e, guildId: i } = t,
        o = (0, l.bG)([r.A], () =>
            null != i && null != e
                ? r.A.getDiscoverableVoiceState(i, e)
                : null != e
                  ? r.A.getDiscoverableVoiceStateForUser(e)
                  : void 0,
        ),
        c = o?.channelId,
        d = (0, l.bG)([a.A], () => {
            if (null != c) return a.A.getChannel(c);
        });
    return (0, l.bG)([n.A], () => d?.isPrivate() || n.A.can(s.xB.VIEW_CHANNEL, d))
        ? { voiceState: o, voiceChannel: d }
        : {};
}
