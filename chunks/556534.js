_.d(t, { Tx: () => l, q9: () => d });
var u = _(17928),
    i = _(71393),
    s = _(22385),
    r = _(652215);
function l() {
    return (0, s.xk)().selectedGuildId;
}
function d() {
    let e = l(),
        t = (0, u.bG)([i.A], () => i.A.getGuild(e));
    return t?.features.has(r.GuildFeatures.HUB) ?? !1;
}
