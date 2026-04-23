n.d(t, { EZ: () => E, HU: () => _, KX: () => h, Kd: () => g, L7: () => A, fJ: () => f }), n(938796);
var i = n(665260),
    l = n(17928),
    a = n(696451),
    r = n(71393),
    o = n(576705),
    d = n(287809),
    u = n(935208),
    s = n(340837),
    c = n(652215);
let _ = (e, t) => {
    var n;
    let o = (0, l.bG)([a.Ay], () => (0, i.Lt)(a.Ay.getMember(e, t)?.flags ?? 0, s.D.DID_REJOIN)),
        c = (0, l.bG)([r.A], () => {
            let t = r.A.getGuild(e);
            return (
                null != t &&
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                        n = u.default.extractTimestamp(e.id);
                    return Date.now() - n < 864e5 * t;
                })(t)
            );
        }),
        _ = (0, l.bG)([d.default], () => d.default.getUser(t)?.bot);
    return (
        (n = { maxDaysOld: 7 }),
        (0, l.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: i, minDaysOld: l = 0 } = t,
                        o = r.A.getGuild(e),
                        d = o?.joinedAt;
                    if (null != n) {
                        let t = a.Ay.getMember(e, n);
                        d = t?.joinedAt == null ? null : new Date(t.joinedAt);
                    }
                    if (null == d) return !1;
                    let u = Date.now() - d.getTime();
                    return (null == i || u <= 864e5 * i) && u >= 864e5 * l;
                })(e, n, t),
            [n, e, t],
        ) &&
            !c &&
            !_ &&
            !o
    );
};
function A(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && h(e, t, [n]) && !e.isProvisional;
}
function h(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(c.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && f(e, t, [n]) && !e.isProvisional;
}
function f(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(c.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && null != t && n.canManageUser(c.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
