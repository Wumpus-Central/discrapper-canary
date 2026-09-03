n.d(t, { H: () => o });
var i = n(643501),
    r = n(742023),
    a = n(280450),
    s = n(71393),
    l = n(977997);
function o(e) {
    if (r.Ay.disableVoiceChannelChangeAlert) return !1;
    let t = i.default.getRemoteSessionId();
    if (
        null != l.A.getVoiceStateForSession(a.default.getId(), t) ||
        !l.A.isCurrentClientInVoiceChannel() ||
        l.A.isInChannel(e.id)
    )
        return !1;
    let n = s.A.getGuild(e.getGuildId());
    return !(n?.afkChannelId != null && l.A.isInChannel(n.afkChannelId));
}
