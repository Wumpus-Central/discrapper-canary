n.d(t, { A: () => o });
var i = n(961350),
    l = n(63995),
    s = n(69407),
    a = n(312006),
    r = n(446600);
function o(e) {
    if (!e.isGuildStageVoice() || !r.A.isLive(e.id)) return !1;
    let t = i.default.getId();
    return (
        !!a.Ay.isModerator(t, e.id) &&
        !!a.Ay.isSpeaker(t, e.id) &&
        (null == l.A.getMutableParticipants(e.id).find((n) => n.user.id !== t && a.Ay.isModerator(n.user.id, e.id)) ||
            null ==
                l.A.getMutableParticipants(e.id, s.ip.SPEAKER).find(
                    (n) => n.user.id !== t && a.Ay.isModerator(n.user.id, e.id),
                ))
    );
}
