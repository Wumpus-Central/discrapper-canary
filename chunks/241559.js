n.d(t, {
    hB: () => g,
    lv: () => f,
    n2: () => p,
    nX: () => m,
    rX: () => E,
    xC: () => h
}),
    n(388685);
var r = n(149765),
    i = n(442837),
    a = n(430824),
    o = n(496675),
    s = n(594174),
    l = n(700785),
    c = n(478743),
    u = n(981631);
let d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.default],
            [n, r] = t,
            i = n.getGuild(e);
        return {
            user: r.getCurrentUser(),
            guild: i
        };
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.default],
            n = d(e, t);
        return (
            null != n &&
            r.Db(
                l.uB({
                    user: n.user,
                    context: n.guild,
                    checkElevated: !1
                }),
                c.N
            )
        );
    },
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.default],
            n = d(e, t);
        return null != n && o.Z.can(u.Plq.MANAGE_GUILD, n.guild) && o.Z.can(u.Plq.BAN_MEMBERS, n.guild);
    };
function p(e) {
    return (0, i.e7)([a.Z, s.default], () => f(e, [a.Z, s.default]), [e]);
}
function h(e) {
    let t = p(e),
        n = (0, i.e7)([a.Z, s.default], () => _(e, [a.Z, s.default]), [e]);
    return t && n;
}
function m(e) {
    return (0, i.e7)(
        [a.Z, o.Z],
        () => {
            let t = a.Z.getGuild(e);
            return null != t && o.Z.can(u.Plq.MANAGE_GUILD, t);
        },
        [e]
    );
}
function g(e, t, n) {
    return (0, i.e7)(
        [o.Z, a.Z],
        () => {
            let r = a.Z.getGuild(e);
            return null != r && t && o.Z.canManageUser(u.Plq.BAN_MEMBERS, n, r);
        },
        [t, e, n]
    );
}
function E(e, t, n) {
    let r = a.Z.getGuild(e);
    return null != r && t && o.Z.canManageUser(u.Plq.BAN_MEMBERS, n, r);
}
