n.d(t, { Z: () => O });
var r = n(115911),
    i = n(812206),
    o = n(592125),
    a = n(944486),
    s = n(594174),
    l = n(595519),
    c = n(636449),
    u = n(774226),
    d = n(566620),
    f = n(317381),
    p = n(672181),
    _ = n(882347),
    h = n(16609),
    m = n(224189),
    g = n(574952),
    E = n(917107),
    v = n(89425),
    b = n(197386),
    y = n(701488);
function O(e) {
    return (0, c.C)(() => S(e));
}
async function S(e) {
    let t,
        { applicationId: n, activityChannelId: c, locationObject: O, analyticsLocations: S, componentId: I, sectionName: T, source: N, partyId: A, joinUserId: C, joinSessionId: R, joinSecret: P, inviterUserId: w, isContextlessActivity: D, customId: x, referrerId: L } = e,
        M = (0, g.Z)(),
        k = o.Z.getChannel(c),
        j = null == k ? void 0 : k.getGuildId(),
        U = null == j || '' === j,
        G = s.default.getCurrentUser();
    if (null == G) return !1;
    let B = (0, u.sq)();
    if (!B && (null == k || (U && !k.isPrivate()) || null == c)) return Promise.resolve(!1);
    let Z = f.ZP.getCurrentEmbeddedActivity();
    (null == Z ? void 0 : Z.applicationId) != null && (t = i.Z.getApplication(null == Z ? void 0 : Z.applicationId));
    let F = (null == Z ? void 0 : Z.location.kind) === r.X.CONTEXTLESS;
    if ((F || a.Z.getVoiceChannelId() === c) && null != Z && Z.applicationId === n && (F || (0, h.pY)(Z.location) === a.Z.getVoiceChannelId())) return (0, b.Z)(j, Z.location), Promise.resolve(!0);
    if (
        !(await (0, _.p)({
            applicationId: n,
            application: await (0, m.Z)(n, c),
            channel: k,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: M,
            user: G
        }))
    )
        return !1;
    if (null != k) {
        let e = (0, E.Z)(k.id),
            n = y.wP.includes(k.type);
        if (e) {
            if (
                !(await (0, v.Z)({
                    channelId: k.id,
                    bypassChangeModal: null != t
                }))
            )
                return !1;
        } else if (!(0, l.WS)(k) || !n) return !1;
    } else if (null == k && !B) return !1;
    return (
        null != c && (0, p.Z)(c),
        null != Z && (0, d.cG)(Z.location),
        await (0, d.af)({
            channelId: c,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: M,
            analyticsLocations: S,
            locationObject: O,
            componentId: I,
            sectionName: T,
            source: N,
            partyId: A,
            joinUserId: C,
            joinSessionId: R,
            joinSecret: P,
            inviterUserId: w,
            isContextlessActivity: D,
            customId: x,
            referrerId: L
        })
    );
}
