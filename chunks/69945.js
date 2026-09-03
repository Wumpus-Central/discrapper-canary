n.d(t, { A: () => o });
var i = n(734057),
    r = n(576705),
    a = n(287809),
    s = n(158045);
n(980504);
var l = n(818348);
function o(e, t, n) {
    let o = i.A.getChannel(n);
    if (e?.guildId === "0" || e?.guildId === o?.guild_id || e?.guildId === t) return !0;
    let d = s.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser());
    return (null == o || null == o.guild_id || r.A.can(l.xB.USE_EXTERNAL_SOUNDS, o)) && d;
}
