n.d(t, { Z: () => c });
var i = n(442837),
    r = n(841784),
    a = n(592125),
    s = n(496675),
    o = n(158776),
    l = n(979651),
    u = n(231338);
function c(e) {
    let { userId: t, guildId: n } = e,
        {
            voiceState: c,
            voiceChannel: d,
            isInVoiceChannel: f
        } = (0, i.cj)([a.Z, s.Z, l.Z], () => {
            let e = null != n ? l.Z.getVoiceState(n, t) : l.Z.getVoiceStateForUser(t),
                i = a.Z.getChannel(null == e ? void 0 : e.channelId);
            return (null == i ? void 0 : i.isPrivate())
                ? {
                      voiceState: e,
                      voiceChannel: i,
                      isInVoiceChannel: l.Z.isCurrentClientInVoiceChannel()
                  }
                : s.Z.can(u.Pl.VIEW_CHANNEL, i)
                  ? {
                        voiceState: e,
                        voiceChannel: i,
                        isInVoiceChannel: l.Z.isInChannel(null == i ? void 0 : i.id)
                    }
                  : {
                        voiceState: void 0,
                        voiceChannel: void 0,
                        isInVoiceChannel: !1
                    };
        }),
        _ = (0, i.e7)([o.Z, l.Z], () => {
            if (null == d) return;
            let e = o.Z.findActivity(t, (e) => {
                if (!(0, r.Z)(e)) return !1;
                let n = l.Z.getVoiceStateForSession(t, e.session_id);
                return (null == n ? void 0 : n.channelId) === d.id;
            });
            return null != e ? e : void 0;
        });
    return {
        voiceState: c,
        voiceChannel: d,
        voiceActivity: _,
        isInVoiceChannel: f
    };
}
