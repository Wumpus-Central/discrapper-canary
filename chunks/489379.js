i.d(t, { A: () => _, c: () => a });
var E = i(17928),
    s = i(765379),
    n = i(714114),
    r = i(290863),
    l = i(977997);
function a(e) {
    let { activity: t, voiceChannelId: i, voiceStateForSession: E } = e;
    return (0, s.A)(t) && E?.channelId === i;
}
function _(e) {
    let { userId: t, guildId: i } = e,
        { voiceState: s, voiceChannel: _ } = (0, n.Ay)({ userId: t, guildId: i }),
        S = _?.id;
    return {
        voiceState: s,
        voiceChannel: _,
        voiceActivity: (0, E.bG)([r.A, l.A], () => {
            if (null != t && null != S)
                return (
                    r.A.findActivity(t, (e) =>
                        a({
                            activity: e,
                            voiceChannelId: S,
                            voiceStateForSession: l.A.getVoiceStateForSession(t, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
