n.d(t, { Z: () => l });
var i = n(442837),
    r = n(841784),
    a = n(956221),
    s = n(158776),
    o = n(979651);
function l(e) {
    let { userId: t, guildId: n } = e,
        { voiceState: l, voiceChannel: u } = (0, a.Z)({
            userId: t,
            guildId: n
        }),
        c = null == u ? void 0 : u.id;
    return {
        voiceState: l,
        voiceChannel: u,
        voiceActivity: (0, i.e7)([s.Z, o.Z], () => {
            if (null == t || null == c) return;
            let e = s.Z.findActivity(t, (e) => {
                if (!(0, r.Z)(e)) return !1;
                let n = o.Z.getVoiceStateForSession(t, e.session_id);
                return (null == n ? void 0 : n.channelId) === c;
            });
            return null != e ? e : void 0;
        })
    };
}
