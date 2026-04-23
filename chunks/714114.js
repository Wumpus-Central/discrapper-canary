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
        d = l?.channelId,
        _ = (0, i.bG)([r.A], () => {
            if (null != d) return r.A.getChannel(d);
        });
    return (0, i.bG)([s.A], () => _?.isPrivate() || s.A.can(o.xB.VIEW_CHANNEL, _))
        ? { voiceState: l, voiceChannel: _ }
        : {};
}
