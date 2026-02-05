"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(765379),
    a = n(714114),
    s = n(290863),
    o = n(977997);
function l(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: l, voiceChannel: u } = (0, a.A)({ userId: t, guildId: n }),
        c = u?.id;
    return {
        voiceState: l,
        voiceChannel: u,
        voiceActivity: (0, r.bG)([s.A, o.A], () => {
            if (null != t && null != c)
                return (
                    s.A.findActivity(t, (e) => {
                        if (!(0, i.A)(e)) return !1;
                        let n = o.A.getVoiceStateForSession(t, e.session_id);
                        return n?.channelId === c;
                    }) ?? void 0
                );
        }),
    };
}
