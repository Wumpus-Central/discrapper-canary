n.d(t, {
    c: () => s,
    v: () => l
});
var r = n(442837),
    i = n(317381),
    o = n(374065),
    a = n(944486);
function s(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.getChannelId()),
        n = (0, r.e7)([i.ZP], () => {
            if (null == t) return null;
            let n = i.ZP.getEmbeddedActivitiesForChannel(t).filter((t) => t.applicationId === e);
            return n.length > 0 ? n[0] : void 0;
        }),
        s = null == n ? void 0 : n.compositeInstanceId,
        l = null == n ? void 0 : n.location,
        c = (0, r.e7)([i.ZP], () => i.ZP.getCurrentEmbeddedActivity()),
        u = (0, o.KF)(t) === o.jy.CAN_LAUNCH;
    return {
        currentChannelId: t,
        instanceId: s,
        instanceLocation: l,
        isCurrentlyInInstance: null != s && (null == c ? void 0 : c.compositeInstanceId) === s,
        canLaunchInChannel: u
    };
}
function l(e, t) {
    let n = null != t ? t : a.Z.getChannelId();
    if (null == n)
        return {
            currentChannelId: null,
            instanceId: null,
            instanceLocation: null,
            isCurrentlyInInstance: !1,
            canLaunchInChannel: !1
        };
    let r = (null != n ? (0, o.Hn)(n) : o.jy.NO_CHANNEL) === o.jy.CAN_LAUNCH,
        s = i.ZP.getEmbeddedActivitiesForChannel(n).filter((t) => t.applicationId === e),
        l = s.length > 0 ? s[0] : void 0,
        c = null == l ? void 0 : l.compositeInstanceId,
        u = null == l ? void 0 : l.location,
        d = i.ZP.getCurrentEmbeddedActivity();
    return {
        currentChannelId: n,
        instanceId: c,
        instanceLocation: u,
        isCurrentlyInInstance: null != c && (null == d ? void 0 : d.compositeInstanceId) === c,
        canLaunchInChannel: r
    };
}
