n.d(t, {
    EZ: () => b,
    HU: () => m,
    KX: () => E,
    Kd: () => O,
    L7: () => g,
    fJ: () => y,
}),
    n(938796),
    n(896048);
var r = n(665260),
    i = n(311907),
    a = n(696451),
    s = n(71393),
    o = n(576705),
    l = n(287809),
    c = n(661191),
    u = n(340837),
    d = n(652215);
let f = 86400000;
function p(e, t, n) {
    let { maxDaysOld: r, minDaysOld: i = 0 } = t,
        o = s.A.getGuild(e),
        l = null == o ? void 0 : o.joinedAt;
    if (null != n) {
        let t = a.Ay.getMember(e, n);
        l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
    }
    if (null == l) return !1;
    let c = Date.now() - l.getTime(),
        u = null == r || c <= f * r,
        d = c >= f * i;
    return u && d;
}
function _(e, t, n) {
    return (0, i.bG)([], () => p(e, t, n), [t, e, n]);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
        n = c.default.extractTimestamp(e.id);
    return Date.now() - n < 86400000 * t;
}
let m = (e, t) => {
    let n = (0, i.bG)([a.Ay], () => {
            var n, i;
            return (0, r.Lt)(
                null != (n = null == (i = a.Ay.getMember(e, t)) ? void 0 : i.flags) ? n : 0,
                u.D.DID_REJOIN,
            );
        }),
        o = (0, i.bG)([s.A], () => {
            let t = s.A.getGuild(e);
            return null != t && h(t);
        }),
        c = (0, i.bG)([l.default], () => {
            var e;
            return null == (e = l.default.getUser(t)) ? void 0 : e.bot;
        });
    return _(e, { maxDaysOld: 7 }, t) && !o && !c && !n;
};
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && E(e, t, [n]) && !e.isProvisional;
}
function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(d.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function b(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && y(e, t, [n]) && !e.isProvisional;
}
function y(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(d.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function O(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && null != t && n.canManageUser(d.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
