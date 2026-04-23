i.d(t, { A: () => r });
var l = i(17928),
    n = i(765379),
    s = i(714114),
    a = i(290863),
    d = i(977997);
function r(e) {
    let { userId: t, guildId: i } = e,
        { voiceState: r, voiceChannel: o } = (0, s.A)({ userId: t, guildId: i }),
        c = o?.id;
    return {
        voiceState: r,
        voiceChannel: o,
        voiceActivity: (0, l.bG)([a.A, d.A], () => {
            if (null != t && null != c)
                return (
                    a.A.findActivity(t, (e) => {
                        if (!(0, n.A)(e)) return !1;
                        let i = d.A.getVoiceStateForSession(t, e.session_id);
                        return i?.channelId === c;
                    }) ?? void 0
                );
        }),
    };
}
