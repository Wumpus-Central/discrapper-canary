i.d(e, { Tx: () => d, q9: () => u });
var n = i(17928),
    r = i(71393),
    s = i(22385),
    l = i(652215);
function d() {
    return (0, s.xk)().selectedGuildId;
}
function u() {
    let t = d(),
        e = (0, n.bG)([r.A], () => r.A.getGuild(t));
    return e?.features.has(l.GuildFeatures.HUB) ?? !1;
}
