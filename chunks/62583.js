"use strict";
n.d(t, { A: () => A });
var i = n(587895),
    r = n(734057),
    s = n(309010),
    a = n(287809),
    o = n(811024),
    l = n(646865),
    d = n(795816),
    _ = n(933958),
    u = n(799061),
    c = n(969151),
    E = n(817636),
    h = n(574152),
    m = n(108959),
    f = n(90804),
    g = n(748975),
    p = n(360469);
function A(e) {
    return (0, l.w)((0, l.f)(), () => I(e));
}
async function I(e) {
    let t,
        {
            applicationId: n,
            activityChannelId: l,
            locationObject: A,
            analyticsLocations: I,
            componentId: T,
            sectionName: S,
            source: N,
            inviterUserId: C,
            customId: R,
            referrerId: O,
        } = e,
        y = (0, h.A)(),
        v = r.A.getChannel(l),
        D = v?.getGuildId(),
        L = null == D || "" === D,
        b = a.default.getCurrentUser();
    if (null == b) return !1;
    if (null == v || (L && !v.isPrivate()) || null == l) return Promise.resolve(!1);
    let w = _.Ay.getCurrentEmbeddedActivity();
    if (
        (w?.applicationId != null && (t = i.A.getApplication(w?.applicationId)),
        s.A.getVoiceChannelId() === l &&
            null != w &&
            w.applicationId === n &&
            (0, c.H)(w.location) === s.A.getVoiceChannelId())
    )
        return (0, g.A)(D, w.location), Promise.resolve(!0);
    let P = await (0, E.A)(n, l);
    if (
        !(await (0, u.O)({
            applicationId: n,
            application: P,
            channel: v,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: y,
            user: b,
        }))
    )
        return !1;
    if (null != v) {
        let e = (0, m.A)(v.id),
            n = p.lk.includes(v.type);
        if (e) {
            if (!(await (0, f.A)({ channelId: v.id, bypassChangeModal: null != t }))) return !1;
        } else if (!(0, o.pE)(v) || !n) return !1;
    } else if (null == v) return !1;
    return (
        null != w && (0, d.rW)(w.location),
        await (0, d.su)({
            channelId: l,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: y,
            analyticsLocations: I,
            locationObject: A,
            componentId: T,
            sectionName: S,
            source: N,
            inviterUserId: C,
            customId: R,
            referrerId: O,
        })
    );
}
