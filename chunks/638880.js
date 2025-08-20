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
    _ = n(16609),
    p = n(224189),
    h = n(574952),
    m = n(917107),
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
            sectionName: I,
            source: T,
            inviterUserId: S,
            customId: A,
            referrerId: C,
        } = e,
        N = (0, h.Z)(),
        R = i.Z.getChannel(l),
        P = null == R ? void 0 : R.getGuildId(),
        w = null == P || "" === P,
        D = o.default.getCurrentUser();
    if (null == D) return !1;
    if (null == R || (w && !R.isPrivate()) || null == l) return Promise.resolve(!1);
    let x = u.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == x ? void 0 : x.applicationId) != null &&
            (t = r.Z.getApplication(null == x ? void 0 : x.applicationId)),
        a.Z.getVoiceChannelId() === l &&
            null != x &&
            x.applicationId === n &&
            (0, _.p)(x.location) === a.Z.getVoiceChannelId())
    )
        return (0, E.Z)(P, x.location), Promise.resolve(!0);
    let L = await (0, p.Z)(n, l);
    if (
        !(await (0, f.p)({
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
        let e = (0, m.Z)(R.id),
            n = b.wP.includes(R.type);
        if (e) {
            if (
                !(await (0, g.Z)({
                    channelId: R.id,
                    bypassChangeModal: null != t,
                }))
            )
                return !1;
        } else if (!(0, s.WS)(R) || !n) return !1;
    } else if (null == R) return !1;
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
            sectionName: I,
            source: T,
            inviterUserId: S,
            customId: A,
            referrerId: C,
        })
    );
}
