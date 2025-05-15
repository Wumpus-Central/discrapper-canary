n.d(t, { _: () => l });
var r = n(258609),
    i = n(740492),
    a = n(314897),
    o = n(430824),
    s = n(979651);
function l(e) {
    if (i.ZP.disableVoiceChannelChangeAlert) return !1;
    let t = r.Z.getRemoteSessionId();
    if (null != s.Z.getVoiceStateForSession(a.default.getId(), t) || !s.Z.isCurrentClientInVoiceChannel() || s.Z.isInChannel(e.id)) return !1;
    let n = o.Z.getGuild(e.getGuildId());
    return !((null == n ? void 0 : n.afkChannelId) != null && s.Z.isInChannel(n.afkChannelId));
}
