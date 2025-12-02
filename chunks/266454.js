n.d(t, {
    Nj: () => _,
    Ob: () => h,
    Q3: () => m,
    wE: () => g,
    zu: () => p,
});
var r = n(442837),
    i = n(675478),
    a = n(581883),
    o = n(914010),
    s = n(70956),
    l = n(709054),
    c = n(915486),
    u = n(428967),
    d = n(605236),
    f = n(57207);
function p(e) {
    let {
        bypassNewUserCheck: t = !1,
        cooldownDurationMs: n = s.Z.Millis.WEEK,
        guildId: r,
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t && (0, f.Bh)(e)) return !0;
    if ((0, u.lg)(e)) return (0, d.H4)(e).isDismissed;
    {
        var i;
        if ((0, u.I0)(e)) return h(e, l.default.fromTimestamp(Date.now())).isDismissed;
        if ((0, u.OQ)(e)) return (0, d.Fo)(e, { cooldownDurationMs: n }).isDismissed;
        if ((0, u.Vc)(e)) return (0, d.XY)(e, r);
        if ((0, u.ms)(e)) return (0, d.oK)(e, r);
        let t = null == (i = a.Z.settings.userContent) ? void 0 : i.dismissedContents;
        return null != t && (0, c.jl)(t, e);
    }
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, r.e7)([a.Z, o.Z], () => p(e, t));
}
async function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    p(e, { bypassNewUserCheck: !0 }) || ((0, d.u9)(e, t), await (0, i.nm)(e), (0, d.ME)(e, t));
}
function h(e, t) {
    var n, r;
    if ((0, f.Bh)(e))
        return {
            isDismissed: !0,
            lastDismissedSnowflakeId: null,
        };
    let i =
        null == (r = a.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e])
            ? void 0
            : n.lastDismissedObjectId;
    return {
        isDismissed: null != i && 1 !== l.default.compare(t, i),
        lastDismissedSnowflakeId: i,
    };
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, d.u9)(e, n), await (0, d.XM)(e, t, 1), (0, d.ME)(e, n);
}
