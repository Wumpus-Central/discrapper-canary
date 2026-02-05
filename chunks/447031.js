"use strict";
n.d(t, { A: () => I });
var r = n(587895),
    i = n(734057),
    a = n(309010),
    s = n(287809),
    o = n(811024),
    l = n(646865),
    u = n(795816),
    c = n(933958),
    d = n(945634),
    _ = n(383497),
    f = n(969151),
    p = n(817636),
    h = n(574152),
    m = n(108959),
    g = n(90804),
    E = n(748975),
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
            componentId: y,
            sectionName: S,
            source: v,
            inviterUserId: C,
            customId: b,
            referrerId: N,
        } = e,
        R = (0, h.A)(),
        O = i.A.getChannel(l),
        D = O?.getGuildId(),
        L = null == D || "" === D,
        w = s.default.getCurrentUser();
    if (null == w) return !1;
    if (null == O || (L && !O.isPrivate()) || null == l) return Promise.resolve(!1);
    let x = c.Ay.getCurrentEmbeddedActivity();
    if (
        (x?.applicationId != null && (t = r.A.getApplication(x?.applicationId)),
        a.A.getVoiceChannelId() === l &&
            null != x &&
            x.applicationId === n &&
            (0, f.H)(x.location) === a.A.getVoiceChannelId())
    )
        return (0, E.A)(D, x.location), Promise.resolve(!0);
    let P = await (0, p.A)(n, l);
    if (
        !(await (0, _.O)({
            applicationId: n,
            application: P,
            channel: O,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: R,
            user: w,
        }))
    )
        return !1;
    if (null != O) {
        let e = (0, m.A)(O.id),
            n = A.lk.includes(O.type);
        if (e) {
            if (!(await (0, g.A)({ channelId: O.id, bypassChangeModal: null != t }))) return !1;
        } else if (!(0, o.pE)(O) || !n) return !1;
    } else if (null == O) return !1;
    return (
        null != l && (0, d.A)(l),
        null != x && (0, u.rW)(x.location),
        await (0, u.su)({
            channelId: l,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: R,
            analyticsLocations: T,
            locationObject: I,
            componentId: y,
            sectionName: S,
            source: v,
            inviterUserId: C,
            customId: b,
            referrerId: N,
        })
    );
}
