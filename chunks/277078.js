n.d(t, { Z: () => c });
var r = n(592125),
    i = n(496675),
    o = n(594174),
    a = n(74538),
    s = n(710111),
    l = n(231338);
function c(e, t, n) {
    let c = r.Z.getChannel(n);
    if ((null == e ? void 0 : e.guildId) === s.X8 || (null == e ? void 0 : e.guildId) === (null == c ? void 0 : c.guild_id) || (null == e ? void 0 : e.guildId) === t) return !0;
    let u = a.ZP.canUseSoundboardEverywhere(o.default.getCurrentUser());
    return (null == c || null == c.guild_id || i.Z.can(l.Pl.USE_EXTERNAL_SOUNDS, c)) && u;
}
