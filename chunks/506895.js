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
function l(e) {
    let t = a.Z.getChannelId();
    if (null == t)
        return {
            currentChannelId: null,
            instanceId: null,
            instanceLocation: null,
            isCurrentlyInInstance: !1,
            canLaunchInChannel: !1
        };
    let n = (null != t ? (0, o.Hn)(t) : o.jy.NO_CHANNEL) === o.jy.CAN_LAUNCH,
        r = i.ZP.getEmbeddedActivitiesForChannel(t).filter((t) => t.applicationId === e),
        s = r.length > 0 ? r[0] : void 0,
        l = null == s ? void 0 : s.compositeInstanceId,
        c = null == s ? void 0 : s.location,
        u = i.ZP.getCurrentEmbeddedActivity();
    return {
        currentChannelId: t,
        instanceId: l,
        instanceLocation: c,
        isCurrentlyInInstance: null != l && (null == u ? void 0 : u.compositeInstanceId) === l,
        canLaunchInChannel: n
    };
}
