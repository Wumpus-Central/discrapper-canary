l.d(i, { A: () => o });
var t = l(17928),
    n = l(765379),
    s = l(714114),
    a = l(290863),
    d = l(977997);
function o(e) {
    let { userId: i, guildId: l } = e,
        { voiceState: o, voiceChannel: r } = (0, s.A)({ userId: i, guildId: l }),
        c = r?.id;
    return {
        voiceState: o,
        voiceChannel: r,
        voiceActivity: (0, t.bG)([a.A, d.A], () => {
            if (null != i && null != c)
                return (
                    a.A.findActivity(i, (e) => {
                        if (!(0, n.A)(e)) return !1;
                        let l = d.A.getVoiceStateForSession(i, e.session_id);
                        return l?.channelId === c;
                    }) ?? void 0
                );
        }),
    };
}
