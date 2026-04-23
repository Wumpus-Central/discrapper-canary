"use strict";
n.d(t, { Ml: () => c, O6: () => g, Ph: () => p, Y0: () => f, fw: () => h, vA: () => m });
var i = n(136722),
    r = n(17928),
    s = n(71393),
    a = n(576705),
    o = n(287809),
    l = n(488926),
    d = n(402655),
    _ = n(652215);
let u = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
            [n, i] = t,
            r = n.getGuild(e);
        return { user: i.getCurrentUser(), guild: r };
    },
    c = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
            n = u(e, t);
        return null != n && i.X8(l.cc({ user: n.user, context: n.guild, checkElevated: !1 }), d.M);
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
            n = u(e, t);
        return null != n && a.A.can(_.xBc.MANAGE_GUILD, n.guild) && a.A.can(_.xBc.BAN_MEMBERS, n.guild);
    };
function h(e) {
    return (0, r.bG)([s.A, o.default], () => c(e, [s.A, o.default]), [e]);
}
function m(e) {
    let t = h(e),
        n = (0, r.bG)([s.A, o.default], () => E(e, [s.A, o.default]), [e]);
    return t && n;
}
function f(e) {
    return (0, r.bG)([s.A, a.A], () => {
        let t = s.A.getGuild(e);
        return null != t && a.A.can(_.xBc.MANAGE_GUILD, t);
    }, [e]);
}
function g(e, t, n) {
    return (0, r.bG)([a.A, s.A], () => {
        let i = s.A.getGuild(e);
        return null != i && t && a.A.canManageUser(_.xBc.BAN_MEMBERS, n, i);
    }, [t, e, n]);
}
function p(e, t, n) {
    let i = s.A.getGuild(e);
    return null != i && t && a.A.canManageUser(_.xBc.BAN_MEMBERS, n, i);
}
