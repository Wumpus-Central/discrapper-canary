n.d(t, { Z: () => u });
var r = n(271383),
    l = n(5192),
    i = n(354459),
    a = n(388032);
function u(e, t, n) {
    var u, o;
    if (t.type === i.fO.ACTIVITY) return null != (o = null == n ? void 0 : n.name) ? o : null;
    let s = r.ZP.isGuestOrLurker(e.guild_id, null == (u = t.user) ? void 0 : u.id);
    return l.ZP.getName(e.getGuildId(), e.id, t.user) + (s ? ' '.concat(a.intl.string(a.t['pFO/Pj'])) : '');
}
