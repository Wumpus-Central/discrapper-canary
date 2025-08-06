(n.d(t, { Z: () => c }), n(388685));
var r = n(314897),
    i = n(496675),
    o = n(938475),
    a = n(700785),
    s = n(924301),
    l = n(85243);
function c(e) {
    if (!e.isGuildVoice() || s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !i.Z.can(l.AN, e)) return !1;
    let t = new Set(o.ZP.getVoiceStatesForChannel(e).map((e) => e.user.id)),
        n = r.default.getId();
    for (let r of t)
        if (
            r !== n &&
            a.BT({
                permission: l.AN,
                user: r,
                context: e
            })
        )
            return !1;
    return !0;
}
