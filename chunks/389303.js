n.d(t, { Z: () => c }), n(47120);
var i = n(314897),
    l = n(496675),
    a = n(938475),
    r = n(700785),
    s = n(924301),
    o = n(85243);
function c(e) {
    if (!e.isGuildVoice() || s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !l.Z.can(o.AN, e)) return !1;
    let t = new Set(a.ZP.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = i.default.getId();
    for (let i of t)
        if (
            i !== n &&
            r.BT({
                permission: o.AN,
                user: i,
                context: e
            })
        )
            return !1;
    return !0;
}
