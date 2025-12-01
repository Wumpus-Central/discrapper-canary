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
    let p = o.Z.getGuild(e),
        _ = i.Z.getChannel(t);
    return (
        null != p &&
        null != _ &&
        (0, c.Z)(p) &&
        p.features.has(u.GuildFeatures.GUILD_SERVER_GUIDE) &&
        !r.yE(
            null != (f = null == (n = a.ZP.getSelfMember(p.id)) ? void 0 : n.flags) ? f : 0,
            d.q.COMPLETED_HOME_ACTIONS,
        ) &&
        s.Z.hasMemberAction(p.id, _.id) &&
        !l.Z.hasCompletedActionForChannel(p.id, _.id)
    );
}
