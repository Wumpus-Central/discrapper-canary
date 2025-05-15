n.d(t, { Z: () => s });
var r = n(314897),
    i = n(565799),
    l = n(501655),
    a = n(88751),
    o = n(427679);
function s(e) {
    if (!e.isGuildStageVoice() || !o.Z.isLive(e.id)) return !1;
    let t = r.default.getId();
    return !!a.ZP.isModerator(t, e.id) && !!a.ZP.isSpeaker(t, e.id) && (null == i.Z.getMutableParticipants(e.id).find((n) => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)) || null == i.Z.getMutableParticipants(e.id, l.pV.SPEAKER).find((n) => n.user.id !== t && a.ZP.isModerator(n.user.id, e.id)));
}
