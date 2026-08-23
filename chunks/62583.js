"use strict";
n.d(t, { A: () => T });
var i = n(587895),
    r = n(734057),
    a = n(309010),
    s = n(287809),
    l = n(811024),
    o = n(646865),
    d = n(795816),
    c = n(933958),
    u = n(799061),
    _ = n(969151),
    E = n(817636),
    A = n(574152),
    h = n(108959),
    I = n(90804),
    f = n(748975),
    p = n(360469);
function T(e) {
    return (0, o.w)((0, o.f)(), () => m(e));
}
async function m(e) {
    let t,
        {
            applicationId: n,
            activityChannelId: o,
            locationObject: T,
            analyticsLocations: m,
            componentId: g,
            sectionName: S,
            source: N,
            inviterUserId: C,
            customId: R,
            referrerId: O,
        } = e,
        L = (0, A.A)(),
        y = r.A.getChannel(o),
        D = y?.getGuildId(),
        v = null == D || "" === D,
        b = s.default.getCurrentUser();
    if (null == b) return !1;
    if (null == y || (v && !y.isPrivate()) || null == o) return Promise.resolve(!1);
    let M = c.Ay.getCurrentEmbeddedActivity();
    if (
        (M?.applicationId != null && (t = i.A.getApplication(M?.applicationId)),
        a.Ay.getVoiceChannelId() === o &&
            null != M &&
            M.applicationId === n &&
            (0, _.H)(M.location) === a.Ay.getVoiceChannelId())
    )
        return (0, f.A)(D, M.location), Promise.resolve(!0);
    let P = await (0, E.A)(n, o);
    if (
        !(await (0, u.O)({
            applicationId: n,
            application: P,
            channel: y,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: L,
            user: b,
        }))
    )
        return !1;
    if (null != y) {
        let e = (0, h.A)(y.id),
            n = p.lk.includes(y.type);
        if (e) {
            if (!(await (0, I.A)({ channelId: y.id, bypassChangeModal: null != t }))) return !1;
        } else if (!(0, l.pE)(y) || !n) return !1;
    } else if (null == y) return !1;
    return (
        null != M && (0, d.rW)(M.location),
        await (0, d.su)({
            channelId: o,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: L,
            analyticsLocations: m,
            locationObject: T,
            componentId: g,
            sectionName: S,
            source: N,
            inviterUserId: C,
            customId: R,
            referrerId: O,
        })
    );
}
