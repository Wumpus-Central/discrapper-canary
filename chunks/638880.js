n.d(t, { Z: () => y });
var r = n(812206),
    i = n(592125),
    a = n(944486),
    o = n(594174),
    s = n(595519),
    l = n(636449),
    c = n(566620),
    u = n(317381),
    d = n(672181),
    f = n(882347),
    p = n(16609),
    _ = n(224189),
    m = n(574952),
    h = n(917107),
    g = n(89425),
    E = n(197386),
    b = n(701488);
function y(e) {
    return (0, l.C)((0, l.R)(), () => O(e));
}
async function O(e) {
    let t,
        {
            applicationId: n,
            activityChannelId: l,
            locationObject: y,
            analyticsLocations: O,
            componentId: v,
            sectionName: S,
            source: I,
            inviterUserId: T,
            customId: C,
            referrerId: A,
        } = e,
        N = (0, m.Z)(),
        P = i.Z.getChannel(l),
        R = null == P ? void 0 : P.getGuildId(),
        D = null == R || "" === R,
        w = o.default.getCurrentUser();
    if (null == w) return !1;
    if (null == P || (D && !P.isPrivate()) || null == l) return Promise.resolve(!1);
    let x = u.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == x ? void 0 : x.applicationId) != null &&
            (t = r.Z.getApplication(null == x ? void 0 : x.applicationId)),
        a.Z.getVoiceChannelId() === l &&
            null != x &&
            x.applicationId === n &&
            (0, p.p)(x.location) === a.Z.getVoiceChannelId())
    )
        return (0, E.Z)(R, x.location), Promise.resolve(!0);
    let L = await (0, _.Z)(n, l);
    if (
        !(await (0, f.p)({
            applicationId: n,
            application: L,
            channel: P,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: N,
            user: w,
        }))
    )
        return !1;
    if (null != P) {
        let e = (0, h.Z)(P.id),
            n = b.wP.includes(P.type);
        if (e) {
            if (
                !(await (0, g.Z)({
                    channelId: P.id,
                    bypassChangeModal: null != t,
                }))
            )
                return !1;
        } else if (!(0, s.WS)(P) || !n) return !1;
    } else if (null == P) return !1;
    return (
        null != l && (0, d.Z)(l),
        null != x && (0, c.cG)(x.location),
        await (0, c.G6)({
            channelId: l,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: N,
            analyticsLocations: O,
            locationObject: y,
            componentId: v,
            sectionName: S,
            source: I,
            inviterUserId: T,
            customId: C,
            referrerId: A,
        })
    );
}
