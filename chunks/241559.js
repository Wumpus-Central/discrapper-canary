n.d(t, {
    hB: () => g,
    lv: () => f,
    n2: () => p,
    nX: () => m,
    rX: () => E,
    xC: () => h
}),
    n(47120);
var i = n(149765),
    r = n(442837),
    a = n(430824),
    s = n(496675),
    o = n(594174),
    l = n(700785),
    u = n(478743),
    c = n(981631);
let d = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
            [n, i] = t,
            r = n.getGuild(e);
        return {
            user: i.getCurrentUser(),
            guild: r
        };
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
            n = d(e, t);
        return (
            null != n &&
            i.Db(
                l.uB({
                    user: n.user,
                    context: n.guild,
                    checkElevated: !1
                }),
                u.N
            )
        );
    },
    _ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, o.default],
            n = d(e, t);
        return null != n && s.Z.can(c.Plq.MANAGE_GUILD, n.guild) && s.Z.can(c.Plq.BAN_MEMBERS, n.guild);
    };
function p(e) {
    return (0, r.e7)([a.Z, o.default], () => f(e, [a.Z, o.default]), [e]);
}
function h(e) {
    let t = p(e),
        n = (0, r.e7)([a.Z, o.default], () => _(e, [a.Z, o.default]), [e]);
    return t && n;
}
function m(e) {
    return (0, r.e7)(
        [a.Z, s.Z],
        () => {
            let t = a.Z.getGuild(e);
            return null != t && s.Z.can(c.Plq.MANAGE_GUILD, t);
        },
        [e]
    );
}
function g(e, t, n) {
    return (0, r.e7)(
        [s.Z, a.Z],
        () => {
            let i = a.Z.getGuild(e);
            return null != i && t && s.Z.canManageUser(c.Plq.BAN_MEMBERS, n, i);
        },
        [t, e, n]
    );
}
function E(e, t, n) {
    let i = a.Z.getGuild(e);
    return null != i && t && s.Z.canManageUser(c.Plq.BAN_MEMBERS, n, i);
}
