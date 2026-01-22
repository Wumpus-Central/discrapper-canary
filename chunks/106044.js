n.d(t, {
    A: () => o,
});
var r = n(961350),
    l = n(63995),
    i = n(69407),
    a = n(312006),
    s = n(446600);

function o(e) {
    if (!e.isGuildStageVoice() || !s.A.isLive(e.id)) return !1;
    let t = r.default.getId();
    return (
        !!a.Ay.isModerator(t, e.id) &&
        !!a.Ay.isSpeaker(t, e.id) &&
        (null == l.A.getMutableParticipants(e.id).find((n) => n.user.id !== t && a.Ay.isModerator(n.user.id, e.id)) ||
            null ==
                l.A.getMutableParticipants(e.id, i.ip.SPEAKER).find(
                    (n) => n.user.id !== t && a.Ay.isModerator(n.user.id, e.id),
                ))
    );
}
