n.d(t, { Z: () => s });
var l = n(271383),
    i = n(5192),
    r = n(354459),
    a = n(388032);
function s(e, t, n) {
    var s, o;
    if (t.type === r.fO.ACTIVITY) return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
    let u = l.ZP.isGuestOrLurker(e.guild_id, null === (s = t.user) || void 0 === s ? void 0 : s.id);
    return i.ZP.getName(e.getGuildId(), e.id, t.user) + (u ? ' '.concat(a.intl.string(a.t['pFO/Pj'])) : '');
}
