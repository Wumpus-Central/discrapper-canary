n.d(t, { Z: () => s });
var r = n(271383),
    i = n(5192),
    a = n(354459),
    o = n(388032);
function s(e, t, n) {
    var s, l;
    if (t.type === a.fO.ACTIVITY) return null != (l = null == n ? void 0 : n.name) ? l : null;
    let c = r.ZP.isGuestOrLurker(e.guild_id, null == (s = t.user) ? void 0 : s.id);
    return i.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? ' '.concat(o.intl.string(o.t['pFO/Pj'])) : '');
}
