"use strict";
n.d(t, { A: () => c });
var i = n(961350),
    s = n(576705),
    l = n(607567),
    r = n(488926),
    a = n(698441),
    o = n(219935);
function c(e) {
    if (
        !e.isGuildVoice() ||
        a.Ay.getGuildScheduledEventsByIndex(a.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !s.A.can(o.EN, e)
    )
        return !1;
    let t = new Set(l.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = i.default.getId();
    for (let i of t) if (i !== n && r.$3({ permission: o.EN, user: i, context: e })) return !1;
    return !0;
}
