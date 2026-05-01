n.d(t, { A: () => o });
var i = n(734057),
    a = n(576705),
    r = n(287809),
    s = n(927578);
n(980504);
var l = n(818348);
function o(e, t, n) {
    let o = i.A.getChannel(n);
    if (e?.guildId === "0" || e?.guildId === o?.guild_id || e?.guildId === t) return !0;
    let d = s.Ay.canUseSoundboardEverywhere(r.default.getCurrentUser());
    return (null == o || null == o.guild_id || a.A.can(l.xB.USE_EXTERNAL_SOUNDS, o)) && d;
}
