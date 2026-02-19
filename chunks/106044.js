"use strict";
n.d(t, { A: () => o });
var i = n(961350),
    s = n(63995),
    l = n(69407),
    r = n(312006),
    a = n(446600);
function o(e) {
    if (!e.isGuildStageVoice() || !a.A.isLive(e.id)) return !1;
    let t = i.default.getId();
    return (
        !!r.Ay.isModerator(t, e.id) &&
        !!r.Ay.isSpeaker(t, e.id) &&
        (null == s.A.getMutableParticipants(e.id).find((n) => n.user.id !== t && r.Ay.isModerator(n.user.id, e.id)) ||
            null ==
                s.A.getMutableParticipants(e.id, l.ip.SPEAKER).find(
                    (n) => n.user.id !== t && r.Ay.isModerator(n.user.id, e.id),
                ))
    );
}
