"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(734057),
    s = n(576705),
    a = n(977997),
    o = n(818348);
function l(e) {
    let { userId: t, guildId: n } = e,
        l = (0, i.bG)([a.A], () =>
            null != n && null != t
                ? a.A.getDiscoverableVoiceState(n, t)
                : null != t
                  ? a.A.getDiscoverableVoiceStateForUser(t)
                  : void 0,
        ),
        u = l?.channelId,
        c = (0, i.bG)([r.A], () => {
            if (null != u) return r.A.getChannel(u);
        });
    return (0, i.bG)([s.A], () => c?.isPrivate() || s.A.can(o.xB.VIEW_CHANNEL, c))
        ? { voiceState: l, voiceChannel: c }
        : {};
}
