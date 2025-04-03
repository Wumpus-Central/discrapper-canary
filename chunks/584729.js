n.d(t, { Z: () => o });
var r = n(271383),
    l = n(5192),
    i = n(354459),
    a = n(388032);
function o(e, t, n) {
    var o, s;
    if (t.type === i.fO.ACTIVITY) return null != (s = null == n ? void 0 : n.name) ? s : null;
    let u = r.ZP.isGuestOrLurker(e.guild_id, null == (o = t.user) ? void 0 : o.id);
    return l.ZP.getName(e.getGuildId(), e.id, t.user) + (u ? ' '.concat(a.NW.string(a.t['pFO/Pj'])) : '');
}
