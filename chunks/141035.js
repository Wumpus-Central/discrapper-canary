n.d(t, {
    A: () => s,
});
var l = n(696451),
    r = n(562153),
    i = n(806931),
    a = n(985018);

function s(e, t, n) {
    var s, o;
    if (t.type === i.lp.ACTIVITY) return null != (o = null == n ? void 0 : n.name) ? o : null;
    let c = l.Ay.isGuestOrLurker(e.guild_id, null == (s = t.user) ? void 0 : s.id);
    return r.Ay.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "");
}
