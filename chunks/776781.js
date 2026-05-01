n.d(t, { $b: () => u, Ni: () => T, pC: () => h, pF: () => A, qd: () => I });
var i = n(136722),
    a = n(17928),
    r = n(857071);
n(260509), n(495544);
var s = n(734057),
    l = n(71393),
    o = n(576705),
    d = n(488926),
    c = n(233993),
    _ = n(446600),
    E = n(652215);
function u(e, t, n) {
    let a = n?.permissionOverwrites[e];
    return { id: e, type: t, deny: a?.deny ?? d.x3, allow: i.TF(a?.allow ?? d.x3, c.QY) };
}
function A(e) {
    let { allow: t, deny: n } = e;
    return i.aI(t, d.x3) && i.aI(n, d.x3);
}
function I(e) {
    return (0, a.bG)([o.A, l.A, s.A], () => {
        let t = s.A.getChannel(e),
            n = l.A.getGuild(t?.getGuildId());
        return !!(
            o.A.can(E.xBc.ADMINISTRATOR, n) ||
            o.A.can(E.xBc.MANAGE_ROLES, t, void 0, void 0, !0) ||
            o.A.can(c.Kn, t)
        );
    }, [e]);
}
function T(e) {
    return (0, a.bG)([s.A, o.A], () => null != e && o.A.can(E.xBc.MUTE_MEMBERS, s.A.getChannel(e)), [e]);
}
function h(e) {
    return (
        null != e && !!e.isGuildStageVoice() && !!r.A.isLurking(e.guild_id) && !!_.A.isPublic(e.id) && o.A.can(c.Gk, e)
    );
}
