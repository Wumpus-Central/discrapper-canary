n.d(t, { Z: () => o });
var i = n(149765),
    r = n(131704),
    a = n(700785),
    s = n(231338);
function o(e) {
    if (null == e) return !1;
    let { type: t } = e;
    if (null == e.guild_id || !r.zS.has(t)) return !1;
    if (e.isGuildVocal() && !a.Uu(s.Pl.CONNECT, e)) return !0;
    let n = e.permissionOverwrites[e.guild_id];
    return null != n && i.e$(n.deny, s.Pl.VIEW_CHANNEL);
}
