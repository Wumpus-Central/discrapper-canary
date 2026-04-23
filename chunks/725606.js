"use strict";
n.d(t, { t: () => l, w: () => o });
var i = n(17928),
    r = n(933958),
    s = n(782091),
    a = n(309010);
function o(e) {
    let t = (0, i.bG)([a.A], () => a.A.getChannelId()),
        n = (0, i.bG)([r.Ay], () => {
            if (null == t) return null;
            let n = r.Ay.getEmbeddedActivitiesForChannel(t).filter((t) => t.applicationId === e);
            return n.length > 0 ? n[0] : void 0;
        }),
        o = n?.compositeInstanceId,
        l = n?.location,
        d = (0, i.bG)([r.Ay], () => r.Ay.getCurrentEmbeddedActivity()),
        _ = (0, s.et)(t) === s.xy.CAN_LAUNCH;
    return {
        currentChannelId: t,
        instanceId: o,
        instanceLocation: l,
        isCurrentlyInInstance: null != o && d?.compositeInstanceId === o,
        canLaunchInChannel: _,
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
    let i = (null != n ? (0, s.J4)(n) : s.xy.NO_CHANNEL) === s.xy.CAN_LAUNCH,
        o = r.Ay.getEmbeddedActivitiesForChannel(n).filter((t) => t.applicationId === e),
        l = o.length > 0 ? o[0] : void 0,
        d = l?.compositeInstanceId,
        _ = l?.location,
        u = r.Ay.getCurrentEmbeddedActivity();
    return {
        currentChannelId: n,
        instanceId: d,
        instanceLocation: _,
        isCurrentlyInInstance: null != d && u?.compositeInstanceId === d,
        canLaunchInChannel: i,
    };
}
