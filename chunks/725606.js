n.d(t, {
    t: () => l,
    w: () => o,
});
var r = n(311907),
    i = n(933958),
    a = n(782091),
    s = n(309010);
function o(e) {
    let t = (0, r.bG)([s.A], () => s.A.getChannelId()),
        n = (0, r.bG)([i.Ay], () => {
            if (null == t) return null;
            let n = i.Ay.getEmbeddedActivitiesForChannel(t).filter((t) => t.applicationId === e);
            return n.length > 0 ? n[0] : void 0;
        }),
        o = null == n ? void 0 : n.compositeInstanceId,
        l = null == n ? void 0 : n.location,
        c = (0, r.bG)([i.Ay], () => i.Ay.getCurrentEmbeddedActivity()),
        u = (0, a.et)(t) === a.xy.CAN_LAUNCH;
    return {
        currentChannelId: t,
        instanceId: o,
        instanceLocation: l,
        isCurrentlyInInstance: null != o && (null == c ? void 0 : c.compositeInstanceId) === o,
        canLaunchInChannel: u,
    };
}
function l(e, t) {
    let n = null != t ? t : s.A.getChannelId();
    if (null == n)
        return {
            currentChannelId: null,
            instanceId: null,
            instanceLocation: null,
            isCurrentlyInInstance: !1,
            canLaunchInChannel: !1,
        };
    let r = (null != n ? (0, a.J4)(n) : a.xy.NO_CHANNEL) === a.xy.CAN_LAUNCH,
        o = i.Ay.getEmbeddedActivitiesForChannel(n).filter((t) => t.applicationId === e),
        l = o.length > 0 ? o[0] : void 0,
        c = null == l ? void 0 : l.compositeInstanceId,
        u = null == l ? void 0 : l.location,
        d = i.Ay.getCurrentEmbeddedActivity();
    return {
        currentChannelId: n,
        instanceId: c,
        instanceLocation: u,
        isCurrentlyInInstance: null != c && (null == d ? void 0 : d.compositeInstanceId) === c,
        canLaunchInChannel: r,
    };
}
