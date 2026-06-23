t.d(n, { EZ: () => h, HU: () => A, KX: () => f, Kd: () => b, L7: () => g, fJ: () => M }), t(938796);
var l = t(665260),
    u = t(17928),
    i = t(696451),
    r = t(71393),
    o = t(576705),
    a = t(287809),
    s = t(935208),
    d = t(340837),
    c = t(652215);
function A(e, n) {
    var t;
    let o = (0, u.bG)([i.Ay], () => (0, l.Lt)(i.Ay.getMember(e, n)?.flags ?? 0, d.D.DID_REJOIN)),
        c = (0, u.bG)([r.A], () => {
            let n = r.A.getGuild(e);
            return (
                null != n &&
                (function (e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                        t = s.default.extractTimestamp(e.id);
                    return Date.now() - t < 864e5 * n;
                })(n)
            );
        }),
        A = (0, u.bG)([a.default], () => a.default.getUser(n)?.bot);
    return (
        (t = { maxDaysOld: 7 }),
        (0, u.bG)(
            [],
            () =>
                (function (e, n, t) {
                    let { maxDaysOld: l, minDaysOld: u = 0 } = n,
                        o = r.A.getGuild(e),
                        a = o?.joinedAt;
                    if (null != t) {
                        let n = i.Ay.getMember(e, t);
                        a = n?.joinedAt == null ? null : new Date(n.joinedAt);
                    }
                    if (null == a) return !1;
                    let s = Date.now() - a.getTime();
                    return (null == l || s <= 864e5 * l) && s >= 864e5 * u;
                })(e, t, n),
            [t, e, n],
        ) &&
            !c &&
            !A &&
            !o
    );
}
function g(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != n && f(e, n, [t]) && !e.isProvisional;
}
function f(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != n && t.canManageUser(c.xBc.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function h(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != n && M(e, n, [t]) && !e.isProvisional;
}
function M(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != n && t.canManageUser(c.xBc.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
function b(e, n) {
    let [t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && null != n && t.canManageUser(c.xBc.MANAGE_MESSAGES, e, n) && !e.isNonUserBot();
}
