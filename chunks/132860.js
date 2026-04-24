n.d(t, { A: () => u });
var s = n(495544),
    i = n(576705),
    l = n(607567),
    r = n(488926),
    o = n(698441),
    a = n(219935);
function u(e) {
    if (
        !e.isGuildVoice() ||
        o.Ay.getGuildScheduledEventsByIndex(o.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !i.A.can(a.EN, e)
    )
        return !1;
    let t = new Set(l.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = s.default.getId();
    for (let s of t) if (s !== n && r.$3({ permission: a.EN, user: s, context: e })) return !1;
    return !0;
}
