r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(149765),
    a = r(131704),
    o = r(700785),
    s = r(231338);
function l(e) {
    if (null == e) return !1;
    let { type: n } = e;
    if (null == e.guild_id || !a.zS.has(n)) return !1;
    if (e.isGuildVocal() && !o.Uu(s.Pl.CONNECT, e)) return !0;
    let r = e.permissionOverwrites[e.guild_id];
    return null != r && i.e$(r.deny, s.Pl.VIEW_CHANNEL);
}
