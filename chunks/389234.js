n.d(t, { H: () => l });
var r = n(643501),
    i = n(964404),
    a = n(961350),
    s = n(71393),
    o = n(977997);
function l(e) {
    if (i.Ay.disableVoiceChannelChangeAlert) return !1;
    let t = r.default.getRemoteSessionId();
    if (
        null != o.A.getVoiceStateForSession(a.default.getId(), t) ||
        !o.A.isCurrentClientInVoiceChannel() ||
        o.A.isInChannel(e.id)
    )
        return !1;
    let n = s.A.getGuild(e.getGuildId());
    return !((null == n ? void 0 : n.afkChannelId) != null && o.A.isInChannel(n.afkChannelId));
}
