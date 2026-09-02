i.d(t, { A: () => o, c: () => c });
var s = i(17928),
    n = i(765379),
    r = i(714114),
    a = i(290863),
    l = i(977997);
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
        voiceActivity: (0, s.bG)([a.A, l.A], () => {
            if (null != t && null != d)
                return (
                    a.A.findActivity(t, (e) =>
                        c({
                            activity: e,
                            voiceChannelId: d,
                            voiceStateForSession: l.A.getVoiceStateForSession(t, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
