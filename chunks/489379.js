i.d(t, { A: () => d, c: () => c });
var s = i(17928),
    n = i(765379),
    r = i(714114),
    l = i(290863),
    a = i(977997);
function c(e) {
    let { activity: t, voiceChannelId: i, voiceStateForSession: s } = e;
    return (0, n.A)(t) && s?.channelId === i;
}
function d(e) {
    let { userId: t, guildId: i } = e,
        { voiceState: n, voiceChannel: d } = (0, r.Ay)({ userId: t, guildId: i }),
        o = d?.id;
    return {
        voiceState: n,
        voiceChannel: d,
        voiceActivity: (0, s.bG)([l.A, a.A], () => {
            if (null != t && null != o)
                return (
                    l.A.findActivity(t, (e) =>
                        c({
                            activity: e,
                            voiceChannelId: o,
                            voiceStateForSession: a.A.getVoiceStateForSession(t, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
