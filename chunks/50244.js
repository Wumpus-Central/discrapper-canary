n.d(t, { P: () => _ }), n(997841);
var r = n(592125),
    i = n(271383),
    a = n(430824),
    o = n(630388),
    s = n(563534),
    l = n(846121),
    c = n(199689),
    u = n(981631),
    d = n(372897);
function _(e, t) {
    var n, _;
    let f = a.Z.getGuild(e),
        p = r.Z.getChannel(t);
    return null != f && null != p && (0, c.Z)(f) && f.hasFeature(u.oNc.GUILD_SERVER_GUIDE) && !o.yE(null != (_ = null == (n = i.ZP.getSelfMember(f.id)) ? void 0 : n.flags) ? _ : 0, d.q.COMPLETED_HOME_ACTIONS) && s.Z.hasMemberAction(f.id, p.id) && !l.Z.hasCompletedActionForChannel(f.id, p.id);
}
