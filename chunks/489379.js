n.d(t, { A: () => o, c: () => E });
var i = n(17928),
    s = n(765379),
    a = n(714114),
    l = n(290863),
    r = n(977997);
function E(e) {
    let { activity: t, voiceChannelId: n, voiceStateForSession: i } = e;
    return (0, s.A)(t) && i?.channelId === n;
}
function o(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: s, voiceChannel: o } = (0, a.Ay)({ userId: t, guildId: n }),
        c = o?.id;
    return {
        voiceState: s,
        voiceChannel: o,
        voiceActivity: (0, i.bG)([l.A, r.A], () => {
            if (null != t && null != c)
                return (
                    l.A.findActivity(t, (e) =>
                        E({
                            activity: e,
                            voiceChannelId: c,
                            voiceStateForSession: r.A.getVoiceStateForSession(t, e.session_id),
                        }),
                    ) ?? void 0
                );
        }),
    };
}
