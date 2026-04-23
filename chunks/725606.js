"use strict";
n.d(t, { t: () => l, w: () => o });
var r = n(311907),
    i = n(933958),
    s = n(782091),
    a = n(309010);
function o(e) {
    let t = (0, r.bG)([a.A], () => a.A.getChannelId()),
        n = (0, r.bG)([i.Ay], () => {
            if (null == t) return null;
            let n = i.Ay.getEmbeddedActivitiesForChannel(t).filter((t) => t.applicationId === e);
            return n.length > 0 ? n[0] : void 0;
        }),
        o = n?.compositeInstanceId,
        l = n?.location,
        u = (0, r.bG)([i.Ay], () => i.Ay.getCurrentEmbeddedActivity()),
        c = (0, s.et)(t) === s.xy.CAN_LAUNCH;
    return {
        currentChannelId: t,
        instanceId: o,
        instanceLocation: l,
        isCurrentlyInInstance: null != o && u?.compositeInstanceId === o,
        canLaunchInChannel: c,
    };
}
function l(e, t) {
    let n = t ?? a.A.getChannelId();
    if (null == n)
        return {
            currentChannelId: null,
            instanceId: null,
            instanceLocation: null,
            isCurrentlyInInstance: !1,
            canLaunchInChannel: !1,
        };
    let r = (null != n ? (0, s.J4)(n) : s.xy.NO_CHANNEL) === s.xy.CAN_LAUNCH,
        o = i.Ay.getEmbeddedActivitiesForChannel(n).filter((t) => t.applicationId === e),
        l = o.length > 0 ? o[0] : void 0,
        u = l?.compositeInstanceId,
        c = l?.location,
        d = i.Ay.getCurrentEmbeddedActivity();
    return {
        currentChannelId: n,
        instanceId: u,
        instanceLocation: c,
        isCurrentlyInInstance: null != u && d?.compositeInstanceId === u,
        canLaunchInChannel: r,
    };
}
