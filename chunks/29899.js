n.d(t, { Z: () => l });
var i = n(442837),
    r = n(841784),
    a = n(956221),
    s = n(158776),
    o = n(979651);
function l(e) {
    let { userId: t, guildId: n, surface: l } = e,
        { voiceState: u, voiceChannel: c } = (0, a.Z)({
            userId: t,
            guildId: n,
            surface: l
        }),
        d = null == c ? void 0 : c.id;
    return {
        voiceState: u,
        voiceChannel: c,
        voiceActivity: (0, i.e7)([s.Z, o.Z], () => {
            if (null == t || null == d) return;
            let e = s.Z.findActivity(t, (e) => {
                if (!(0, r.Z)(e)) return !1;
                let n = o.Z.getVoiceStateForSession(t, e.session_id);
                return (null == n ? void 0 : n.channelId) === d;
            });
            return null != e ? e : void 0;
        })
    };
}
