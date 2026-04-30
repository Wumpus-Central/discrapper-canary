"use strict";
n.d(t, { A: () => u });
var i = n(495544),
    r = n(576705),
    s = n(607567),
    a = n(488926),
    o = n(698441),
    l = n(219935);
function u(e) {
    if (
        !e.isGuildVoice() ||
        o.Ay.getGuildScheduledEventsByIndex(o.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !r.A.can(l.EN, e)
    )
        return !1;
    let t = new Set(s.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = i.default.getId();
    for (let i of t) if (i !== n && a.$3({ permission: l.EN, user: i, context: e })) return !1;
    return !0;
}
