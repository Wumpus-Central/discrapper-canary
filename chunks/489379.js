n.d(t, { A: () => l });
var r = n(311907),
    i = n(765379),
    a = n(714114),
    s = n(290863),
    o = n(977997);
function l(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: l, voiceChannel: c } = (0, a.A)({
            userId: t,
            guildId: n,
        }),
        u = null == c ? void 0 : c.id;
    return {
        voiceState: l,
        voiceChannel: c,
        voiceActivity: (0, r.bG)([s.A, o.A], () => {
            if (null == t || null == u) return;
            let e = s.A.findActivity(t, (e) => {
                if (!(0, i.A)(e)) return !1;
                let n = o.A.getVoiceStateForSession(t, e.session_id);
                return (null == n ? void 0 : n.channelId) === u;
            });
            return null != e ? e : void 0;
        }),
    };
}
