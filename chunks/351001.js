"use strict";
n.d(t, { EZ: () => p, HU: () => m, KX: () => h, Kd: () => _, L7: () => g, fJ: () => A }), n(938796);
var l = n(665260),
    a = n(311907),
    s = n(696451),
    i = n(71393),
    r = n(576705),
    o = n(287809),
    c = n(661191),
    u = n(340837),
    d = n(652215);
let m = (e, t) => {
    var n;
    let r = (0, a.bG)([s.Ay], () => (0, l.Lt)(s.Ay.getMember(e, t)?.flags ?? 0, u.D.DID_REJOIN)),
        d = (0, a.bG)([i.A], () => {
            let t = i.A.getGuild(e);
            return (
                null != t &&
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                        n = c.default.extractTimestamp(e.id);
                    return Date.now() - n < 864e5 * t;
                })(t)
            );
        }),
        m = (0, a.bG)([o.default], () => o.default.getUser(t)?.bot);
    return (
        (n = { maxDaysOld: 7 }),
        (0, a.bG)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: l, minDaysOld: a = 0 } = t,
                        r = i.A.getGuild(e),
                        o = r?.joinedAt;
                    if (null != n) {
                        let t = s.Ay.getMember(e, n);
                        o = t?.joinedAt == null ? null : new Date(t.joinedAt);
                    }
                    if (null == o) return !1;
                    let c = Date.now() - o.getTime();
                    return (null == l || c <= 864e5 * l) && c >= 864e5 * a;
                })(e, n, t),
            [n, e, t],
        ) &&
            !d &&
            !m &&
            !r
    );
};
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A];
    return null != t && h(e, t, [n]) && !e.isProvisional;
}
function h(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A];
    return null != t && n.canManageUser(d.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function p(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A];
    return null != t && A(e, t, [n]) && !e.isProvisional;
}
function A(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A];
    return null != t && n.canManageUser(d.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function _(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A];
    return null != e && null != t && n.canManageUser(d.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
