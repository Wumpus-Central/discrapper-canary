n.d(t, { Z: () => o });
var r = n(271383),
    i = n(5192),
    l = n(354459),
    a = n(388032);
function o(e, t, n) {
    var o, c;
    if (t.type === l.fO.ACTIVITY) return null != (c = null == n ? void 0 : n.name) ? c : null;
    let s = r.ZP.isGuestOrLurker(e.guild_id, null == (o = t.user) ? void 0 : o.id);
    return i.ZP.getName(e.getGuildId(), e.id, t.user) + (s ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "");
}
