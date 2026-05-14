u.d(t, { A: () => h, M: () => n });
var s = u(17928),
    i = u(71393),
    r = u(383272),
    a = u(414133),
    d = u(652215);
function h(e, t) {
    let u = (0, s.bG)([i.A], () => i.A.getGuild(e)?.features.has(d.GuildFeatures.GUILD_THEME) === !0, [e]),
        h = (0, r.DD)(e ?? void 0, t),
        n = (0, a.OS)(t);
    return u && h && n;
}
function n(e, t) {
    let u = i.A.getGuild(e);
    return u?.features.has(d.GuildFeatures.GUILD_THEME) === !0 && (0, r.Qs)(e ?? void 0, t) && (0, a.ht)(t);
}
