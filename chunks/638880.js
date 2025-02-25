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
        { applicationId: n, activityChannelId: c, locationObject: O, analyticsLocations: S, componentId: I, sectionName: T, source: N, partyId: A, joinUserId: C, joinSessionId: R, secret: P, inviterUserId: D, instanceId: w, isContextlessActivity: L, customId: x, referrerId: M } = e,
        j = (0, g.Z)(),
        k = o.Z.getChannel(c),
        U = null == k ? void 0 : k.getGuildId(),
        G = null == U || '' === U,
        B = s.default.getCurrentUser();
    if (null == B) return !1;
    if (!(0, u.sq)() && (null == k || (G && !k.isPrivate()) || null == c)) return Promise.resolve(!1);
    let F = f.ZP.getCurrentEmbeddedActivity();
    (null == F ? void 0 : F.applicationId) != null && (t = i.Z.getApplication(null == F ? void 0 : F.applicationId));
    let V = (null == F ? void 0 : F.location.kind) === r.X.CONTEXTLESS;
    if ((V || a.Z.getVoiceChannelId() === c) && null != F && F.applicationId === n && (V || (0, h.pY)(F.location) === a.Z.getVoiceChannelId())) return (0, b.Z)(U, F.location), Promise.resolve(!0);
    let Z = await (0, m.Z)(n, c),
        H = (0, u.Kb)(Z);
    if (
        (L && (H ? (c = void 0) : (L = !1)),
        !(await (0, _.p)({
            applicationId: n,
            application: Z,
            channel: k,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: j,
            user: B
        })))
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
    } else if (null == k && !H) return !1;
    return (
        null != c && (0, p.Z)(c),
        null != F && (0, d.cG)(F.location),
        await (0, d.G6)({
            channelId: c,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: j,
            analyticsLocations: S,
            locationObject: O,
            componentId: I,
            sectionName: T,
            source: N,
            partyId: A,
            joinUserId: C,
            joinSessionId: R,
            secret: P,
            inviterUserId: D,
            isContextlessActivity: L,
            customId: x,
            instanceId: w,
            referrerId: M
        })
    );
}
