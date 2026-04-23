n.d(t, { $b: () => u, Ni: () => T, pC: () => S, pF: () => I, qd: () => A });
var i = n(136722),
    r = n(17928),
    a = n(857071);
n(260509), n(495544);
var s = n(734057),
    _ = n(71393),
    l = n(576705),
    o = n(488926),
    E = n(233993),
    d = n(446600),
    c = n(652215);
function u(e, t, n) {
    let r = n?.permissionOverwrites[e];
    return { id: e, type: t, deny: r?.deny ?? o.x3, allow: i.TF(r?.allow ?? o.x3, E.QY) };
}
function I(e) {
    let { allow: t, deny: n } = e;
    return i.aI(t, o.x3) && i.aI(n, o.x3);
}
function A(e) {
    return (0, r.bG)([l.A, _.A, s.A], () => {
        let t = s.A.getChannel(e),
            n = _.A.getGuild(t?.getGuildId());
        return !!(
            l.A.can(c.xBc.ADMINISTRATOR, n) ||
            l.A.can(c.xBc.MANAGE_ROLES, t, void 0, void 0, !0) ||
            l.A.can(E.Kn, t)
        );
    }, [e]);
}
function T(e) {
    return (0, r.bG)([s.A, l.A], () => null != e && l.A.can(c.xBc.MUTE_MEMBERS, s.A.getChannel(e)), [e]);
}
function S(e) {
    return (
        null != e && !!e.isGuildStageVoice() && !!a.A.isLurking(e.guild_id) && !!d.A.isPublic(e.id) && l.A.can(E.Gk, e)
    );
}
