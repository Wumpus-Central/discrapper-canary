"use strict";
n.d(t, { Ml: () => h, O6: () => A, Ph: () => I, Y0: () => g, dQ: () => p, fw: () => E, vA: () => m });
var i = n(136722),
    r = n(17928),
    s = n(260509),
    a = n(71393),
    o = n(576705),
    l = n(287809),
    u = n(488926),
    c = n(402655),
    d = n(652215);
let _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, l.default],
            [n, i] = t,
            r = n.getGuild(e);
        return { user: i.getCurrentUser(), guild: r };
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, l.default],
            n = _(e, t);
        return null != n && i.X8(u.cc({ user: n.user, context: n.guild, checkElevated: !1 }), c.M);
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, l.default],
            n = _(e, t);
        return null != n && o.A.can(d.xBc.MANAGE_GUILD, n.guild) && o.A.can(d.xBc.BAN_MEMBERS, n.guild);
    };
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.A;
    return e.features.has(d.GuildFeatures.PRUNE_REQUIRES_ADMIN)
        ? (0, s.bM)(e, t) || n.can(d.xBc.ADMINISTRATOR, e)
        : n.can(i.kg(d.xBc.MANAGE_GUILD, d.xBc.KICK_MEMBERS), e);
}
function E(e) {
    return (0, r.bG)([a.A, l.default], () => h(e, [a.A, l.default]), [e]);
}
function m(e) {
    let t = E(e),
        n = (0, r.bG)([a.A, l.default], () => f(e, [a.A, l.default]), [e]);
    return t && n;
}
function g(e) {
    return (0, r.bG)([a.A, o.A], () => {
        let t = a.A.getGuild(e);
        return null != t && o.A.can(d.xBc.MANAGE_GUILD, t);
    }, [e]);
}
function A(e, t, n) {
    return (0, r.bG)([o.A, a.A], () => {
        let i = a.A.getGuild(e);
        return null != i && t && o.A.canManageUser(d.xBc.BAN_MEMBERS, n, i);
    }, [t, e, n]);
}
function I(e, t, n) {
    let i = a.A.getGuild(e);
    return null != i && t && o.A.canManageUser(d.xBc.BAN_MEMBERS, n, i);
}
