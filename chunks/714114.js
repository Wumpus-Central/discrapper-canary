n.d(e, { A: () => u });
var i = n(17928),
    r = n(734057),
    l = n(576705),
    o = n(977997),
    a = n(818348);
function u(t) {
    let { userId: e, guildId: n } = t,
        u = (0, i.bG)([o.A], () =>
            null != n && null != e
                ? o.A.getDiscoverableVoiceState(n, e)
                : null != e
                  ? o.A.getDiscoverableVoiceStateForUser(e)
                  : void 0,
        ),
        c = u?.channelId,
        s = (0, i.bG)([r.A], () => {
            if (null != c) return r.A.getChannel(c);
        });
    return (0, i.bG)([l.A], () => s?.isPrivate() || l.A.can(a.xB.VIEW_CHANNEL, s))
        ? { voiceState: u, voiceChannel: s }
        : {};
}
