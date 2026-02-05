"use strict";
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
        u = l?.channelId,
        c = (0, r.bG)([i.A], () => {
            if (null != u) return i.A.getChannel(u);
        });
    return (0, r.bG)([a.A], () => c?.isPrivate() || a.A.can(o.xB.VIEW_CHANNEL, c))
        ? { voiceState: l, voiceChannel: c }
        : {};
}
