i.d(t, { A: () => o, c: () => c });
var s = i(17928),
    n = i(765379),
    r = i(714114),
    l = i(290863),
    a = i(977997);
function c(e) {
    let { activity: t, voiceChannelId: i, voiceStateForSession: s } = e;
    return (0, n.A)(t) && s?.channelId === i;
}
function o(e) {
    let { userId: t, guildId: i } = e,
        { voiceState: n, voiceChannel: o } = (0, r.Ay)({ userId: t, guildId: i }),
        d = o?.id;
    return {
        voiceState: n,
        voiceChannel: o,
        voiceActivity: (0, s.bG)([l.A, a.A], () => {
            if (null != t && null != d)
                return (
                    l.A.findActivity(t, (e) =>
                        c({
                            activity: e,
                            voiceChannelId: d,
                            voiceStateForSession: a.A.getVoiceStateForSession(t, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
