n.d(t, { Z: () => s });
var r = n(149765),
    i = n(131704),
    o = n(700785),
    a = n(231338);
function s(e) {
    if (null == e) return !1;
    let { type: t } = e;
    if (null == e.guild_id || !i.zS.has(t)) return !1;
    if (e.isGuildVocal() && !o.Uu(a.Pl.CONNECT, e)) return !0;
    let n = e.permissionOverwrites[e.guild_id];
    return null != n && r.e$(n.deny, a.Pl.VIEW_CHANNEL);
}
