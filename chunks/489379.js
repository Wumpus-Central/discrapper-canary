t.d(i, { A: () => d, c: () => c });
var s = t(17928),
    n = t(765379),
    r = t(714114),
    l = t(290863),
    a = t(977997);
function c(e) {
    let { activity: i, voiceChannelId: t, voiceStateForSession: s } = e;
    return (0, n.A)(i) && s?.channelId === t;
}
function d(e) {
    let { userId: i, guildId: t } = e,
        { voiceState: n, voiceChannel: d } = (0, r.Ay)({ userId: i, guildId: t }),
        o = d?.id;
    return {
        voiceState: n,
        voiceChannel: d,
        voiceActivity: (0, s.bG)([l.A, a.A], () => {
            if (null != i && null != o)
                return (
                    l.A.findActivity(i, (e) =>
                        c({
                            activity: e,
                            voiceChannelId: o,
                            voiceStateForSession: a.A.getVoiceStateForSession(i, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
