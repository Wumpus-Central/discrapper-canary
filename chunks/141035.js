n.d(t, { A: () => r });
var i = n(696451),
    l = n(562153),
    a = n(806931),
    s = n(985018);
function r(e, t, n) {
    if (t.type === a.lp.ACTIVITY) return n?.name ?? null;
    let r = i.Ay.isGuestOrLurker(e.guild_id, t.user?.id);
    return l.Ay.getName(e.getGuildId(), e.id, t.user) + (r ? ` ${s.intl.string(s.t["pFO/Ph"])}` : "");
}
