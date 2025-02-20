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
    let p = o.Z.getGuild(e),
        _ = r.Z.getChannel(t);
    return null != p && null != _ && (0, c.Z)(p) && p.hasFeature(u.oNc.GUILD_SERVER_GUIDE) && !a.yE(null !== (f = null === (n = i.ZP.getSelfMember(p.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== f ? f : 0, d.q.COMPLETED_HOME_ACTIONS) && s.Z.hasMemberAction(p.id, _.id) && !l.Z.hasCompletedActionForChannel(p.id, _.id);
}
