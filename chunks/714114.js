r.d(t, { A: () => s });
var n = r(17928),
    l = r(734057),
    i = r(576705),
    o = r(977997),
    a = r(818348);
function s(e) {
    let { userId: t, guildId: r } = e,
        s = (0, n.bG)([o.A], () =>
            null != r && null != t
                ? o.A.getDiscoverableVoiceState(r, t)
                : null != t
                  ? o.A.getDiscoverableVoiceStateForUser(t)
                  : void 0,
        ),
        u = s?.channelId,
        E = (0, n.bG)([l.A], () => {
            if (null != u) return l.A.getChannel(u);
        });
    return (0, n.bG)([i.A], () => E?.isPrivate() || i.A.can(a.xB.VIEW_CHANNEL, E))
        ? { voiceState: s, voiceChannel: E }
        : {};
}
