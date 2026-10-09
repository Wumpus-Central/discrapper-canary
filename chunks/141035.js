n.d(t, { A: () => a });
var i = n(550946),
    l = n(562153),
    s = n(806931),
    r = n(660183);
function a(e, t, n) {
    if (t.type === s.lp.ACTIVITY) return n?.name ?? null;
    let a = (0, i.t)(e.guild_id, t.user?.id);
    return l.Ay.getName(e.getGuildId(), e.id, t.user) + (a ? ` ${r.intl.string(r.t["pFO/Ph"])}` : "");
}
