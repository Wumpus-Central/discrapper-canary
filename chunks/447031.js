"use strict";
n.d(t, { A: () => I });
var r = n(587895),
    i = n(734057),
    s = n(309010),
    a = n(287809),
    o = n(811024),
    l = n(646865),
    u = n(795816),
    c = n(933958),
    d = n(945634),
    _ = n(383497),
    f = n(969151),
    p = n(817636),
    h = n(574152),
    E = n(108959),
    m = n(90804),
    g = n(748975),
    A = n(360469);
function I(e) {
    return (0, l.w)((0, l.f)(), () => T(e));
}
async function T(e) {
    let t,
        {
            applicationId: n,
            activityChannelId: l,
            locationObject: I,
            analyticsLocations: T,
            componentId: S,
            sectionName: y,
            source: N,
            inviterUserId: v,
            customId: C,
            referrerId: O,
        } = e,
        R = (0, h.A)(),
        b = i.A.getChannel(l),
        D = b?.getGuildId(),
        L = null == D || "" === D,
        w = a.default.getCurrentUser();
    if (null == w) return !1;
    if (null == b || (L && !b.isPrivate()) || null == l) return Promise.resolve(!1);
    let M = c.Ay.getCurrentEmbeddedActivity();
    if (
        (M?.applicationId != null && (t = r.A.getApplication(M?.applicationId)),
        s.A.getVoiceChannelId() === l &&
            null != M &&
            M.applicationId === n &&
            (0, f.H)(M.location) === s.A.getVoiceChannelId())
    )
        return (0, g.A)(D, M.location), Promise.resolve(!0);
    let P = await (0, p.A)(n, l);
    if (
        !(await (0, _.O)({
            applicationId: n,
            application: P,
            channel: b,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: R,
            user: w,
        }))
    )
        return !1;
    if (null != b) {
        let e = (0, E.A)(b.id),
            n = A.lk.includes(b.type);
        if (e) {
            if (!(await (0, m.A)({ channelId: b.id, bypassChangeModal: null != t }))) return !1;
        } else if (!(0, o.pE)(b) || !n) return !1;
    } else if (null == b) return !1;
    return (
        null != l && (0, d.A)(l),
        null != M && (0, u.rW)(M.location),
        await (0, u.su)({
            channelId: l,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: R,
            analyticsLocations: T,
            locationObject: I,
            componentId: S,
            sectionName: y,
            source: N,
            inviterUserId: v,
            customId: C,
            referrerId: O,
        })
    );
}
