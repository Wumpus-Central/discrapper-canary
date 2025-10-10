n.d(t, { Z: () => c }), n(388685);
var i = n(314897),
    r = n(496675),
    l = n(938475),
    a = n(700785),
    o = n(924301),
    s = n(85243);
function c(e) {
    if (
        !e.isGuildVoice() ||
        o.ZP.getGuildScheduledEventsByIndex(o.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 ||
        !r.Z.can(s.AN, e)
    )
        return !1;
    let t = new Set(l.ZP.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = i.default.getId();
    for (let i of t)
        if (
            i !== n &&
            a.BT({
                permission: s.AN,
                user: i,
                context: e,
            })
        )
            return !1;
    return !0;
}
