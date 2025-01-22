r.d(n, {
    P: function () {
        return h;
    }
});
var i = r(789020);
var a = r(592125),
    o = r(271383),
    s = r(430824),
    l = r(630388),
    u = r(563534),
    c = r(846121),
    d = r(199689),
    f = r(981631),
    p = r(372897);
function h(e, n) {
    var r, i;
    let h = s.Z.getGuild(e),
        _ = a.Z.getChannel(n);
    return null != h && null != _ && (0, d.Z)(h) && h.hasFeature(f.oNc.GUILD_SERVER_GUIDE) && !l.yE(null !== (i = null === (r = o.ZP.getSelfMember(h.id)) || void 0 === r ? void 0 : r.flags) && void 0 !== i ? i : 0, p.q.COMPLETED_HOME_ACTIONS) && u.Z.hasMemberAction(h.id, _.id) && !c.Z.hasCompletedActionForChannel(h.id, _.id);
}
