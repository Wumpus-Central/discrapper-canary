n.d(t, { A: () => c }), n(896048);
var r = n(961350),
    l = n(576705),
    i = n(607567),
    a = n(488926),
    s = n(698441),
    o = n(219935);
function c(e) {
    if (
        !e.isGuildVoice() ||
        s.Ay.getGuildScheduledEventsByIndex(s.ej.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !l.A.can(o.EN, e)
    )
        return !1;
    let t = new Set(i.Ay.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = r.default.getId();
    for (let r of t)
        if (
            r !== n &&
            a.$3({
                permission: o.EN,
                user: r,
                context: e,
            })
        )
            return !1;
    return !0;
}
