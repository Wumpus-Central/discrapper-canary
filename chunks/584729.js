n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(271383),
    l = n(5192),
    r = n(354459),
    a = n(388032);
function s(e, t, n) {
    var s, o;
    if (t.type === r.fO.ACTIVITY) return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
    let c = i.ZP.isGuestOrLurker(e.guild_id, null === (s = t.user) || void 0 === s ? void 0 : s.id);
    return l.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? ' '.concat(a.intl.string(a.t['pFO/Pj'])) : '');
}
