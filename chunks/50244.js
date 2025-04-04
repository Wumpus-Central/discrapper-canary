n.d(t, { P: () => f }), n(789020);
var r = n(592125),
    i = n(271383),
    o = n(430824),
    a = n(630388),
    s = n(563534),
    l = n(846121),
    c = n(199689),
    u = n(981631),
    d = n(372897);
function f(e, t) {
    var n, f;
    let _ = o.Z.getGuild(e),
        p = r.Z.getChannel(t);
    return null != _ && null != p && (0, c.Z)(_) && _.hasFeature(u.oNc.GUILD_SERVER_GUIDE) && !a.yE(null != (f = null == (n = i.ZP.getSelfMember(_.id)) ? void 0 : n.flags) ? f : 0, d.q.COMPLETED_HOME_ACTIONS) && s.Z.hasMemberAction(_.id, p.id) && !l.Z.hasCompletedActionForChannel(_.id, p.id);
}
