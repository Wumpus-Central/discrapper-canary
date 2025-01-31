n.d(t, { Z: () => o });
var i = n(314897),
    l = n(565799),
    a = n(501655),
    r = n(88751),
    s = n(427679);
function o(e) {
    if (!e.isGuildStageVoice() || !s.Z.isLive(e.id)) return !1;
    let t = i.default.getId();
    return !!(r.ZP.isModerator(t, e.id) && r.ZP.isSpeaker(t, e.id)) && (null == l.Z.getMutableParticipants(e.id).find((n) => n.user.id !== t && r.ZP.isModerator(n.user.id, e.id)) || null == l.Z.getMutableParticipants(e.id, a.pV.SPEAKER).find((n) => n.user.id !== t && r.ZP.isModerator(n.user.id, e.id)));
}
