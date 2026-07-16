"use strict";
n.d(t, { t: () => o, w: () => l });
var i = n(17928),
    r = n(933958),
    a = n(782091),
    s = n(309010);
function l(e) {
    let t = (0, i.bG)([s.Ay], () => s.Ay.getChannelId()),
        n = (0, i.bG)([r.Ay], () => {
            if (null == t) return null;
            let n = r.Ay.getEmbeddedActivitiesForChannel(t).filter((t) => t.applicationId === e);
            return n.length > 0 ? n[0] : void 0;
        }),
        l = n?.compositeInstanceId,
        o = n?.location,
        d = (0, i.bG)([r.Ay], () => r.Ay.getCurrentEmbeddedActivity()),
        c = (0, a.et)(t) === a.xy.CAN_LAUNCH;
    return {
        currentChannelId: t,
        instanceId: l,
        instanceLocation: o,
        isCurrentlyInInstance: null != l && d?.compositeInstanceId === l,
        canLaunchInChannel: c,
    };
}
function o(e, t) {
    let n = t ?? s.Ay.getChannelId();
    if (null == n)
        return {
            currentChannelId: null,
            instanceId: null,
            instanceLocation: null,
            isCurrentlyInInstance: !1,
            canLaunchInChannel: !1,
        };
    let i = (null != n ? (0, a.J4)(n) : a.xy.NO_CHANNEL) === a.xy.CAN_LAUNCH,
        l = r.Ay.getEmbeddedActivitiesForChannel(n).filter((t) => t.applicationId === e),
        o = l.length > 0 ? l[0] : void 0,
        d = o?.compositeInstanceId,
        c = o?.location,
        u = r.Ay.getCurrentEmbeddedActivity();
    return {
        currentChannelId: n,
        instanceId: d,
        instanceLocation: c,
        isCurrentlyInInstance: null != d && u?.compositeInstanceId === d,
        canLaunchInChannel: i,
    };
}
