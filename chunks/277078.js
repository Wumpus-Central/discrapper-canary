r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(592125),
    a = r(496675),
    s = r(594174),
    o = r(74538),
    l = r(710111),
    u = r(231338);
function c(e, n, r) {
    let c = i.Z.getChannel(r);
    if ((null == e ? void 0 : e.guildId) === l.X8 || (null == e ? void 0 : e.guildId) === (null == c ? void 0 : c.guild_id) || (null == e ? void 0 : e.guildId) === n) return !0;
    let d = o.ZP.canUseSoundboardEverywhere(s.default.getCurrentUser());
    return (null == c || null == c.guild_id || a.Z.can(u.Pl.USE_EXTERNAL_SOUNDS, c)) && d;
}
