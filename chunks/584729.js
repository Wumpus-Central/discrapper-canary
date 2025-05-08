n.d(t, { Z: () => o });
var r = n(271383),
    l = n(5192),
    i = n(354459),
    a = n(388032);
function o(e, t, n) {
    var o, u;
    if (t.type === i.fO.ACTIVITY) return null != (u = null == n ? void 0 : n.name) ? u : null;
    let s = r.ZP.isGuestOrLurker(e.guild_id, null == (o = t.user) ? void 0 : o.id);
    return l.ZP.getName(e.getGuildId(), e.id, t.user) + (s ? ' '.concat(a.intl.string(a.t['pFO/Pj'])) : '');
}
