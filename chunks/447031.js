n.d(t, {
    A: () => y,
});
var r = n(587895),
    i = n(734057),
    a = n(309010),
    s = n(287809),
    o = n(811024),
    l = n(646865),
    c = n(795816),
    u = n(933958),
    d = n(945634),
    f = n(383497),
    p = n(969151),
    _ = n(817636),
    h = n(574152),
    m = n(108959),
    g = n(90804),
    E = n(748975),
    b = n(360469);

function y(e) {
    return (0, l.w)((0, l.f)(), () => O(e));
}
async function O(e) {
    let t,
        {
            applicationId: n,
            activityChannelId: l,
            locationObject: y,
            analyticsLocations: O,
            componentId: A,
            sectionName: v,
            source: S,
            inviterUserId: I,
            customId: T,
            referrerId: C,
        } = e,
        N = (0, h.A)(),
        R = i.A.getChannel(l),
        w = null == R ? void 0 : R.getGuildId(),
        P = null == w || "" === w,
        D = s.default.getCurrentUser();
    if (null == D) return !1;
    if (null == R || (P && !R.isPrivate()) || null == l) return Promise.resolve(!1);
    let x = u.Ay.getCurrentEmbeddedActivity();
    if (
        ((null == x ? void 0 : x.applicationId) != null &&
            (t = r.A.getApplication(null == x ? void 0 : x.applicationId)),
        a.A.getVoiceChannelId() === l &&
            null != x &&
            x.applicationId === n &&
            (0, p.H)(x.location) === a.A.getVoiceChannelId())
    )
        return (0, E.A)(w, x.location), Promise.resolve(!0);
    let L = await (0, _.A)(n, l);
    if (
        !(await (0, f.O)({
            applicationId: n,
            application: L,
            channel: R,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: N,
            user: D,
        }))
    )
        return !1;
    if (null != R) {
        let e = (0, m.A)(R.id),
            n = b.lk.includes(R.type);
        if (e) {
            if (
                !(await (0, g.A)({
                    channelId: R.id,
                    bypassChangeModal: null != t,
                }))
            )
                return !1;
        } else if (!(0, o.pE)(R) || !n) return !1;
    } else if (null == R) return !1;
    return (
        null != l && (0, d.A)(l),
        null != x && (0, c.rW)(x.location),
        await (0, c.su)({
            channelId: l,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: N,
            analyticsLocations: O,
            locationObject: y,
            componentId: A,
            sectionName: v,
            source: S,
            inviterUserId: I,
            customId: T,
            referrerId: C,
        })
    );
}
