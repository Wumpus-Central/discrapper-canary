n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(271383),
    l = n(5192),
    a = n(354459),
    r = n(388032);
function s(e, t, n) {
    var s, o;
    if (t.type === a.fO.ACTIVITY) return null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : null;
    let c = i.ZP.isGuestOrLurker(e.guild_id, null === (s = t.user) || void 0 === s ? void 0 : s.id);
    return l.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? ' '.concat(r.intl.string(r.t['pFO/Pj'])) : '');
}
