"use strict";
n.d(t, { A: () => l });
var i = n(495544),
    r = n(63995),
    s = n(518769),
    a = n(312006),
    o = n(446600);
function l(e) {
    if (!e.isGuildStageVoice() || !o.A.isLive(e.id)) return !1;
    let t = i.default.getId();
    return (
        !!a.Ay.isModerator(t, e.id) &&
        !!a.Ay.isSpeaker(t, e.id) &&
        (null == r.A.getMutableParticipants(e.id).find((n) => n.user.id !== t && a.Ay.isModerator(n.user.id, e.id)) ||
            null ==
                r.A.getMutableParticipants(e.id, s.ip.SPEAKER).find(
                    (n) => n.user.id !== t && a.Ay.isModerator(n.user.id, e.id),
                ))
    );
}
