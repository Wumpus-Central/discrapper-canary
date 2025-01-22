r.d(n, {
    _: function () {
        return u;
    }
});
var i = r(258609),
    a = r(740492),
    o = r(314897),
    s = r(430824),
    l = r(979651);
function u(e) {
    if (a.ZP.disableVoiceChannelChangeAlert) return !1;
    let n = i.Z.getRemoteSessionId();
    if (null != l.Z.getVoiceStateForSession(o.default.getId(), n) || !l.Z.isCurrentClientInVoiceChannel() || l.Z.isInChannel(e.id)) return !1;
    let r = s.Z.getGuild(e.getGuildId());
    return !((null == r ? void 0 : r.afkChannelId) != null && l.Z.isInChannel(r.afkChannelId)) && !0;
}
