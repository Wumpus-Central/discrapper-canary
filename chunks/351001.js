"use strict";
n.d(t, { EZ: () => p, HU: () => m, KX: () => g, Kd: () => f, L7: () => h, fJ: () => A }), n(938796);
var l = n(665260),
    s = n(311907),
    i = n(696451),
    r = n(71393),
    a = n(576705),
    o = n(287809),
    u = n(661191),
    c = n(340837),
    d = n(652215);
let m = (e, t) => {
    var n;
    let a = (0, s.bG)([i.Ay], () => (0, l.Lt)(i.Ay.getMember(e, t)?.flags ?? 0, c.D.DID_REJOIN)),
        d = (0, s.bG)([r.A], () => {
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
        m = (0, s.bG)([o.default], () => o.default.getUser(t)?.bot);
    return (
        (n = { maxDaysOld: 7 }),
        (0, s.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: l, minDaysOld: s = 0 } = t,
                        a = r.A.getGuild(e),
                        o = a?.joinedAt;
                    if (null != n) {
                        let t = i.Ay.getMember(e, n);
                        o = t?.joinedAt == null ? null : new Date(t.joinedAt);
                    }
                    if (null == o) return !1;
                    let u = Date.now() - o.getTime();
                    return (null == l || u <= 864e5 * l) && u >= 864e5 * s;
                })(e, n, t),
            [n, e, t],
        ) &&
            !d &&
            !m &&
            !a
    );
};
function h(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A];
    return null != t && g(e, t, [n]) && !e.isProvisional;
}
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A];
    return null != t && n.canManageUser(d.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function p(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A];
    return null != t && A(e, t, [n]) && !e.isProvisional;
}
function A(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A];
    return null != t && n.canManageUser(d.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function f(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A];
    return null != e && null != t && n.canManageUser(d.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
