s.d(t, { A: () => u });
var i = s(961350),
    n = s(576705),
    r = s(607567),
    l = s(488926),
    o = s(698441),
    a = s(219935);
function u(e) {
    if (
        !e.isGuildVoice() ||
        o.Ay.getGuildScheduledEventsByIndex(o.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !n.A.can(a.EN, e)
    )
        return !1;
    let t = new Set(r.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        s = i.default.getId();
    for (let i of t) if (i !== s && l.$3({ permission: a.EN, user: i, context: e })) return !1;
    return !0;
}
