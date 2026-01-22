n.d(t, {
    Ml: () => f,
    O6: () => g,
    Ph: () => E,
    Y0: () => m,
    fw: () => _,
    vA: () => h,
}),
    n(896048);
var r = n(136722),
    i = n(311907),
    a = n(71393),
    s = n(576705),
    o = n(287809),
    l = n(488926),
    c = n(402655),
    u = n(652215);
let d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, o.default],
            [n, r] = t,
            i = n.getGuild(e);
        return {
            user: r.getCurrentUser(),
            guild: i,
        };
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, o.default],
            n = d(e, t);
        return (
            null != n &&
            r.X8(
                l.cc({
                    user: n.user,
                    context: n.guild,
                    checkElevated: !1,
                }),
                c.M,
            )
        );
    },
    p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, o.default],
            n = d(e, t);
        return null != n && s.A.can(u.xBc.MANAGE_GUILD, n.guild) && s.A.can(u.xBc.BAN_MEMBERS, n.guild);
    };
function _(e) {
    return (0, i.bG)([a.A, o.default], () => f(e, [a.A, o.default]), [e]);
}
function h(e) {
    let t = _(e),
        n = (0, i.bG)([a.A, o.default], () => p(e, [a.A, o.default]), [e]);
    return t && n;
}
function m(e) {
    return (0, i.bG)([a.A, s.A], () => {
        let t = a.A.getGuild(e);
        return null != t && s.A.can(u.xBc.MANAGE_GUILD, t);
    }, [e]);
}
function g(e, t, n) {
    return (0, i.bG)([s.A, a.A], () => {
        let r = a.A.getGuild(e);
        return null != r && t && s.A.canManageUser(u.xBc.BAN_MEMBERS, n, r);
    }, [t, e, n]);
}
function E(e, t, n) {
    let r = a.A.getGuild(e);
    return null != r && t && s.A.canManageUser(u.xBc.BAN_MEMBERS, n, r);
}
