i.d(e, { Tx: () => u, q9: () => _ });
var n = i(17928),
    r = i(71393),
    s = i(22385),
    l = i(652215);
function u() {
    return (0, s.xk)().selectedGuildId;
}
function _() {
    let t = u(),
        e = (0, n.bG)([r.A], () => r.A.getGuild(t));
    return e?.features.has(l.GuildFeatures.HUB) ?? !1;
}
