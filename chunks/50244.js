n.d(t, { P: () => f }), n(997841);
var r = n(95015),
    i = n(592125),
    a = n(271383),
    o = n(430824),
    s = n(563534),
    l = n(846121),
    c = n(199689),
    u = n(981631),
    d = n(372897);
function f(e, t) {
    var n, f;
    let _ = o.Z.getGuild(e),
        p = i.Z.getChannel(t);
    return (
        null != _ &&
        null != p &&
        (0, c.Z)(_) &&
        _.features.has(u.GuildFeatures.GUILD_SERVER_GUIDE) &&
        !r.yE(
            null != (f = null == (n = a.ZP.getSelfMember(_.id)) ? void 0 : n.flags) ? f : 0,
            d.q.COMPLETED_HOME_ACTIONS,
        ) &&
        s.Z.hasMemberAction(_.id, p.id) &&
        !l.Z.hasCompletedActionForChannel(_.id, p.id)
    );
}
