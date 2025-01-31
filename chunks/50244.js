n.d(t, { P: () => f }), n(789020);
var i = n(592125),
    r = n(271383),
    a = n(430824),
    s = n(630388),
    o = n(563534),
    l = n(846121),
    u = n(199689),
    c = n(981631),
    d = n(372897);
function f(e, t) {
    var n, f;
    let _ = a.Z.getGuild(e),
        p = i.Z.getChannel(t);
    return null != _ && null != p && (0, u.Z)(_) && _.hasFeature(c.oNc.GUILD_SERVER_GUIDE) && !s.yE(null !== (f = null === (n = r.ZP.getSelfMember(_.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== f ? f : 0, d.q.COMPLETED_HOME_ACTIONS) && o.Z.hasMemberAction(_.id, p.id) && !l.Z.hasCompletedActionForChannel(_.id, p.id);
}
