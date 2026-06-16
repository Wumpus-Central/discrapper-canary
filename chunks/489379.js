"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(765379),
    s = n(714114),
    a = n(290863),
    o = n(977997);
function l(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: l, voiceChannel: u } = (0, s.A)({ userId: t, guildId: n }),
        c = u?.id;
    return {
        voiceState: l,
        voiceChannel: u,
        voiceActivity: (0, i.bG)([a.A, o.A], () => {
            if (null != t && null != c)
                return (
                    a.A.findActivity(t, (e) => {
                        if (!(0, r.A)(e)) return !1;
                        let n = o.A.getVoiceStateForSession(t, e.session_id);
                        return n?.channelId === c;
                    }) ?? void 0
                );
        }),
    };
}
