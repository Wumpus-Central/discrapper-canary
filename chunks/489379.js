"use strict";
n.d(t, { A: () => u, c: () => l });
var i = n(17928),
    r = n(765379),
    s = n(714114),
    a = n(290863),
    o = n(977997);
function l(e) {
    let { activity: t, voiceChannelId: n, voiceStateForSession: i } = e;
    return (0, r.A)(t) && i?.channelId === n;
}
function u(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: r, voiceChannel: u } = (0, s.Ay)({ userId: t, guildId: n }),
        c = u?.id;
    return {
        voiceState: r,
        voiceChannel: u,
        voiceActivity: (0, i.bG)([a.A, o.A], () => {
            if (null != t && null != c)
                return (
                    a.A.findActivity(t, (e) =>
                        l({
                            activity: e,
                            voiceChannelId: c,
                            voiceStateForSession: o.A.getVoiceStateForSession(t, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
