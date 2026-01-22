n.d(t, { A: () => l });
var r = n(311907),
    i = n(734057),
    a = n(576705),
    s = n(977997),
    o = n(818348);
function l(e) {
    let { userId: t, guildId: n } = e,
        l = (0, r.bG)([s.A], () =>
            null != n && null != t
                ? s.A.getDiscoverableVoiceState(n, t)
                : null != t
                  ? s.A.getDiscoverableVoiceStateForUser(t)
                  : void 0,
        ),
        c = null == l ? void 0 : l.channelId,
        u = (0, r.bG)([i.A], () => {
            if (null != c) return i.A.getChannel(c);
        });
    return (0, r.bG)([a.A], () => (null == u ? void 0 : u.isPrivate()) || a.A.can(o.xB.VIEW_CHANNEL, u))
        ? {
              voiceState: l,
              voiceChannel: u,
          }
        : {};
}
