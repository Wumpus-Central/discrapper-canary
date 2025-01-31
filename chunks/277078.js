n.d(t, { Z: () => u });
var i = n(592125),
    r = n(496675),
    a = n(594174),
    s = n(74538),
    o = n(710111),
    l = n(231338);
function u(e, t, n) {
    let u = i.Z.getChannel(n);
    if ((null == e ? void 0 : e.guildId) === o.X8 || (null == e ? void 0 : e.guildId) === (null == u ? void 0 : u.guild_id) || (null == e ? void 0 : e.guildId) === t) return !0;
    let c = s.ZP.canUseSoundboardEverywhere(a.default.getCurrentUser());
    return (null == u || null == u.guild_id || r.Z.can(l.Pl.USE_EXTERNAL_SOUNDS, u)) && c;
}
