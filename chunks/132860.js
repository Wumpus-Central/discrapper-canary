n.d(t, { A: () => d });
var i = n(495544),
    l = n(576705),
    a = n(607567),
    r = n(488926),
    s = n(698441),
    o = n(219935);
function d(e) {
    if (
        !e.isGuildVoice() ||
        s.Ay.getGuildScheduledEventsByIndex(s.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !l.A.can(o.EN, e)
    )
        return !1;
    let t = new Set(a.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = i.default.getId();
    for (let i of t) if (i !== n && r.$3({ permission: o.EN, user: i, context: e })) return !1;
    return !0;
}
