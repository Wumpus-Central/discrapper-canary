n.d(t, { A: () => s });
var i = n(550946),
    l = n(562153),
    a = n(806931),
    r = n(985018);
function s(e, t, n) {
    if (t.type === a.lp.ACTIVITY) return n?.name ?? null;
    let s = (0, i.t)(e.guild_id, t.user?.id);
    return l.Ay.getName(e.getGuildId(), e.id, t.user) + (s ? ` ${r.intl.string(r.t["pFO/Ph"])}` : "");
}
