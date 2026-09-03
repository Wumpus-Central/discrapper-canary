n.d(t, { $b: () => E, Ni: () => I, pC: () => f, pF: () => A, qd: () => h });
var i = n(136722),
    r = n(17928),
    a = n(857071);
n(260509), n(280450);
var s = n(734057),
    l = n(71393),
    o = n(576705),
    d = n(488926),
    c = n(233993),
    u = n(446600),
    _ = n(652215);
function E(e, t, n) {
    let r = n?.permissionOverwrites[e];
    return { id: e, type: t, deny: r?.deny ?? d.x3, allow: i.TF(r?.allow ?? d.x3, c.QY) };
}
function A(e) {
    let { allow: t, deny: n } = e;
    return i.aI(t, d.x3) && i.aI(n, d.x3);
}
function h(e) {
    return (0, r.bG)([o.A, l.A, s.A], () => {
        let t = s.A.getChannel(e),
            n = l.A.getGuild(t?.getGuildId());
        return !!(
            o.A.can(_.xBc.ADMINISTRATOR, n) ||
            o.A.can(_.xBc.MANAGE_ROLES, t, void 0, void 0, !0) ||
            o.A.can(c.Kn, t)
        );
    }, [e]);
}
function I(e) {
    return (0, r.bG)([s.A, o.A], () => null != e && o.A.can(_.xBc.MUTE_MEMBERS, s.A.getChannel(e)), [e]);
}
function f(e) {
    return (
        null != e && !!e.isGuildStageVoice() && !!a.A.isLurking(e.guild_id) && !!u.A.isPublic(e.id) && o.A.can(c.Gk, e)
    );
}
