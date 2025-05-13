n.d(t, { Z: () => O });
var r = n(252258),
    i = n(812206),
    a = n(592125),
    o = n(944486),
    s = n(594174),
    l = n(595519),
    c = n(636449),
    u = n(566620),
    d = n(317381),
    f = n(672181),
    _ = n(882347),
    p = n(16609),
    h = n(224189),
    m = n(574952),
    g = n(917107),
    E = n(89425),
    b = n(197386),
    y = n(701488);
function O(e) {
    return (0, c.C)((0, c.R)(), () => v(e));
}
async function v(e) {
    let t,
        { applicationId: n, activityChannelId: c, locationObject: O, analyticsLocations: v, componentId: I, sectionName: S, source: T, inviterUserId: A, customId: N, referrerId: C } = e,
        P = (0, m.Z)(),
        R = a.Z.getChannel(c),
        w = null == R ? void 0 : R.getGuildId(),
        D = null == w || '' === w,
        L = s.default.getCurrentUser();
    if (null == L) return !1;
    if (null == R || (D && !R.isPrivate()) || null == c) return Promise.resolve(!1);
    let x = d.ZP.getCurrentEmbeddedActivity();
    (null == x ? void 0 : x.applicationId) != null && (t = i.Z.getApplication(null == x ? void 0 : x.applicationId));
    let k = (null == x ? void 0 : x.location.kind) === r.E.CONTEXTLESS;
    if ((k || o.Z.getVoiceChannelId() === c) && null != x && x.applicationId === n && (k || (0, p.pY)(x.location) === o.Z.getVoiceChannelId())) return (0, b.Z)(w, x.location), Promise.resolve(!0);
    let M = await (0, h.Z)(n, c);
    if (
        !(await (0, _.p)({
            applicationId: n,
            application: M,
            channel: R,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: P,
            user: L
        }))
    )
        return !1;
    if (null != R) {
        let e = (0, g.Z)(R.id),
            n = y.wP.includes(R.type);
        if (e) {
            if (
                !(await (0, E.Z)({
                    channelId: R.id,
                    bypassChangeModal: null != t
                }))
            )
                return !1;
        } else if (!(0, l.WS)(R) || !n) return !1;
    } else if (null == R) return !1;
    return (
        null != c && (0, f.Z)(c),
        null != x && (0, u.cG)(x.location),
        await (0, u.G6)({
            channelId: c,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: P,
            analyticsLocations: v,
            locationObject: O,
            componentId: I,
            sectionName: S,
            source: T,
            inviterUserId: A,
            customId: N,
            referrerId: C
        })
    );
}
