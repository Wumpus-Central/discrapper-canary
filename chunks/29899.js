n.d(t, { Z: () => l });
var r = n(442837),
    i = n(841784),
    o = n(956221),
    a = n(158776),
    s = n(979651);
function l(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: l, voiceChannel: c } = (0, o.Z)({
            userId: t,
            guildId: n
        }),
        u = null == c ? void 0 : c.id;
    return {
        voiceState: l,
        voiceChannel: c,
        voiceActivity: (0, r.e7)([a.Z, s.Z], () => {
            if (null == t || null == u) return;
            let e = a.Z.findActivity(t, (e) => {
                if (!(0, i.Z)(e)) return !1;
                let n = s.Z.getVoiceStateForSession(t, e.session_id);
                return (null == n ? void 0 : n.channelId) === u;
            });
            return null != e ? e : void 0;
        })
    };
}
