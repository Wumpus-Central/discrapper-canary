n.d(t, { Z: () => c }), n(47120);
var r = n(314897),
    i = n(496675),
    l = n(938475),
    o = n(700785),
    a = n(924301),
    s = n(85243);
function c(e) {
    if (!e.isGuildVoice() || a.ZP.getGuildScheduledEventsByIndex(a.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !i.Z.can(s.AN, e)) return !1;
    let t = new Set(l.ZP.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = r.default.getId();
    for (let r of t)
        if (
            r !== n &&
            o.BT({
                permission: s.AN,
                user: r,
                context: e
            })
        )
            return !1;
    return !0;
}
