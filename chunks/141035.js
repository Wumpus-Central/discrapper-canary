n.d(t, { A: () => r });
var i = n(550946),
    l = n(562153),
    s = n(806931),
    a = n(985018);
function r(e, t, n) {
    if (t.type === s.lp.ACTIVITY) return n?.name ?? null;
    let r = (0, i.t)(e.guild_id, t.user?.id);
    return l.Ay.getName(e.getGuildId(), e.id, t.user) + (r ? ` ${a.intl.string(a.t["pFO/Ph"])}` : "");
}
