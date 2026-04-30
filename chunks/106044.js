n.d(t, { A: () => o });
var i = n(495544),
    a = n(63995),
    r = n(69407),
    s = n(312006),
    l = n(446600);
function o(e) {
    if (!e.isGuildStageVoice() || !l.A.isLive(e.id)) return !1;
    let t = i.default.getId();
    return (
        !!s.Ay.isModerator(t, e.id) &&
        !!s.Ay.isSpeaker(t, e.id) &&
        (null == a.A.getMutableParticipants(e.id).find((n) => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id)) ||
            null ==
                a.A.getMutableParticipants(e.id, r.ip.SPEAKER).find(
                    (n) => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id),
                ))
    );
}
