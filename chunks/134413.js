n.d(t, { Ml: () => E, O6: () => p, Ph: () => T, Y0: () => f, dQ: () => A, fw: () => h, vA: () => I });
var i = n(136722),
    r = n(17928),
    a = n(260509),
    s = n(71393),
    l = n(576705),
    o = n(287809),
    d = n(488926),
    c = n(402655),
    u = n(652215);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
        [n, i] = t,
        r = n.getGuild(e);
    return { user: i.getCurrentUser(), guild: r };
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
        n = _(e, t);
    return null != n && i.X8(d.cc({ user: n.user, context: n.guild, checkElevated: !1 }), c.M);
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A;
    return e.features.has(u.GuildFeatures.PRUNE_REQUIRES_ADMIN)
        ? (0, a.bM)(e, t) || n.can(u.xBc.ADMINISTRATOR, e)
        : n.can(i.kg(u.xBc.MANAGE_GUILD, u.xBc.KICK_MEMBERS), e);
}
function h(e) {
    return (0, r.bG)([s.A, o.default], () => E(e, [s.A, o.default]), [e]);
}
function I(e) {
    let t = h(e),
        n = (0, r.bG)(
            [s.A, o.default],
            () =>
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
                        n = _(e, t);
                    return null != n && l.A.can(u.xBc.MANAGE_GUILD, n.guild) && l.A.can(u.xBc.BAN_MEMBERS, n.guild);
                })(e, [s.A, o.default]),
            [e],
        );
    return t && n;
}
function f(e) {
    return (0, r.bG)([s.A, l.A], () => {
        let t = s.A.getGuild(e);
        return null != t && l.A.can(u.xBc.MANAGE_GUILD, t);
    }, [e]);
}
function p(e, t, n) {
    return (0, r.bG)([l.A, s.A], () => {
        let i = s.A.getGuild(e);
        return null != i && t && l.A.canManageUser(u.xBc.BAN_MEMBERS, n, i);
    }, [t, e, n]);
}
function T(e, t, n) {
    let i = s.A.getGuild(e);
    return null != i && t && l.A.canManageUser(u.xBc.BAN_MEMBERS, n, i);
}
