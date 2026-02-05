"use strict";
n.d(t, { EZ: () => A, HU: () => m, KX: () => E, Kd: () => T, L7: () => g, fJ: () => I }), n(938796);
var r = n(665260),
    i = n(311907),
    a = n(696451),
    s = n(71393),
    o = n(576705),
    l = n(287809),
    u = n(661191),
    c = n(340837),
    d = n(652215);
let _ = 864e5;
function f(e, t, n) {
    let { maxDaysOld: r, minDaysOld: i = 0 } = t,
        o = s.A.getGuild(e),
        l = o?.joinedAt;
    if (null != n) {
        let t = a.Ay.getMember(e, n);
        l = t?.joinedAt == null ? null : new Date(t.joinedAt);
    }
    if (null == l) return !1;
    let u = Date.now() - l.getTime(),
        c = null == r || u <= _ * r,
        d = u >= _ * i;
    return c && d;
}
function p(e, t, n) {
    return (0, i.bG)([], () => f(e, t, n), [t, e, n]);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
        n = u.default.extractTimestamp(e.id);
    return Date.now() - n < 864e5 * t;
}
let m = (e, t) => {
    let n = (0, i.bG)([a.Ay], () => (0, r.Lt)(a.Ay.getMember(e, t)?.flags ?? 0, c.D.DID_REJOIN)),
        o = (0, i.bG)([s.A], () => {
            let t = s.A.getGuild(e);
            return null != t && h(t);
        }),
        u = (0, i.bG)([l.default], () => l.default.getUser(t)?.bot);
    return p(e, { maxDaysOld: 7 }, t) && !o && !u && !n;
};
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && E(e, t, [n]) && !e.isProvisional;
}
function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(d.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function A(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && I(e, t, [n]) && !e.isProvisional;
}
function I(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(d.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function T(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && null != t && n.canManageUser(d.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
