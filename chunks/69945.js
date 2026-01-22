n.d(t, {
    A: () => c,
});
var r = n(734057),
    i = n(576705),
    a = n(287809),
    s = n(927578),
    o = n(980504),
    l = n(818348);

function c(e, t, n) {
    let c = r.A.getChannel(n);
    if (
        (null == e ? void 0 : e.guildId) === o.mV ||
        (null == e ? void 0 : e.guildId) === (null == c ? void 0 : c.guild_id) ||
        (null == e ? void 0 : e.guildId) === t
    )
        return !0;
    let u = s.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser());
    return (null == c || null == c.guild_id || i.A.can(l.xB.USE_EXTERNAL_SOUNDS, c)) && u;
}
