"use strict";
n.d(t, { Ml: () => _, O6: () => m, Ph: () => g, Y0: () => E, fw: () => f, vA: () => p });
var i = n(136722),
    r = n(17928),
    s = n(71393),
    a = n(576705),
    o = n(287809),
    l = n(488926),
    u = n(402655),
    c = n(652215);
let d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
            [n, i] = t,
            r = n.getGuild(e);
        return { user: i.getCurrentUser(), guild: r };
    },
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
            n = d(e, t);
        return null != n && i.X8(l.cc({ user: n.user, context: n.guild, checkElevated: !1 }), u.M);
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
            n = d(e, t);
        return null != n && a.A.can(c.xBc.MANAGE_GUILD, n.guild) && a.A.can(c.xBc.BAN_MEMBERS, n.guild);
    };
function f(e) {
    return (0, r.bG)([s.A, o.default], () => _(e, [s.A, o.default]), [e]);
}
function p(e) {
    let t = f(e),
        n = (0, r.bG)([s.A, o.default], () => h(e, [s.A, o.default]), [e]);
    return t && n;
}
function E(e) {
    return (0, r.bG)([s.A, a.A], () => {
        let t = s.A.getGuild(e);
        return null != t && a.A.can(c.xBc.MANAGE_GUILD, t);
    }, [e]);
}
function m(e, t, n) {
    return (0, r.bG)([a.A, s.A], () => {
        let i = s.A.getGuild(e);
        return null != i && t && a.A.canManageUser(c.xBc.BAN_MEMBERS, n, i);
    }, [t, e, n]);
}
function g(e, t, n) {
    let i = s.A.getGuild(e);
    return null != i && t && a.A.canManageUser(c.xBc.BAN_MEMBERS, n, i);
}
