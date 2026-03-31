n.d(t, { A: () => c });
var i = n(961350),
    l = n(576705),
    s = n(607567),
    a = n(488926),
    r = n(698441),
    o = n(219935);
function c(e) {
    if (
        !e.isGuildVoice() ||
        r.Ay.getGuildScheduledEventsByIndex(r.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !l.A.can(o.EN, e)
    )
        return !1;
    let t = new Set(s.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = i.default.getId();
    for (let i of t) if (i !== n && a.$3({ permission: o.EN, user: i, context: e })) return !1;
    return !0;
}
