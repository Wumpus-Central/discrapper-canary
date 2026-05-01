e.d(n, { A: () => c });
var i = e(17928),
    l = e(734057),
    r = e(576705),
    a = e(977997),
    u = e(818348);
function c(t) {
    let { userId: n, guildId: e } = t,
        c = (0, i.bG)([a.A], () =>
            null != e && null != n
                ? a.A.getDiscoverableVoiceState(e, n)
                : null != n
                  ? a.A.getDiscoverableVoiceStateForUser(n)
                  : void 0,
        ),
        d = c?.channelId,
        s = (0, i.bG)([l.A], () => {
            if (null != d) return l.A.getChannel(d);
        });
    return (0, i.bG)([r.A], () => s?.isPrivate() || r.A.can(u.xB.VIEW_CHANNEL, s))
        ? { voiceState: c, voiceChannel: s }
        : {};
}
