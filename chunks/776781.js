"use strict";
n.d(t, { $b: () => f, Ni: () => m, pC: () => g, pF: () => p, qd: () => h });
var r = n(136722),
    i = n(311907),
    a = n(857071);
n(260509), n(961350);
var s = n(734057),
    o = n(71393),
    l = n(576705),
    u = n(488926),
    c = n(233993),
    d = n(446600),
    _ = n(652215);
function f(e, t, n) {
    let i = n?.permissionOverwrites[e];
    return { id: e, type: t, deny: i?.deny ?? u.x3, allow: r.TF(i?.allow ?? u.x3, c.QY) };
}
function p(e) {
    let { allow: t, deny: n } = e;
    return r.aI(t, u.x3) && r.aI(n, u.x3);
}
function h(e) {
    return (0, i.bG)([l.A, o.A, s.A], () => {
        let t = s.A.getChannel(e),
            n = o.A.getGuild(t?.getGuildId());
        return !!(
            l.A.can(_.xBc.ADMINISTRATOR, n) ||
            l.A.can(_.xBc.MANAGE_ROLES, t, void 0, void 0, !0) ||
            l.A.can(c.Kn, t)
        );
    }, [e]);
}
function m(e) {
    return (0, i.bG)([s.A, l.A], () => null != e && l.A.can(_.xBc.MUTE_MEMBERS, s.A.getChannel(e)), [e]);
}
function g(e) {
    return (
        null != e && !!e.isGuildStageVoice() && !!a.A.isLurking(e.guild_id) && !!d.A.isPublic(e.id) && l.A.can(c.Gk, e)
    );
}
