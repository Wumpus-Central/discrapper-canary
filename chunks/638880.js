n.d(t, { Z: () => b });
var i = n(115911),
    r = n(812206),
    a = n(592125),
    s = n(944486),
    o = n(594174),
    l = n(595519),
    u = n(636449),
    c = n(774226),
    d = n(566620),
    f = n(317381),
    _ = n(672181),
    p = n(882347),
    h = n(16609),
    m = n(224189),
    g = n(574952),
    E = n(917107),
    v = n(89425),
    y = n(197386),
    I = n(701488);
function b(e) {
    return (0, u.C)(() => T(e));
}
async function T(e) {
    let t,
        { applicationId: n, activityChannelId: u, locationObject: b, analyticsLocations: T, componentId: S, sectionName: A, source: N, partyId: C, joinUserId: R, joinSessionId: O, joinSecret: D, inviterUserId: x, isContextlessActivity: L, customId: P, referrerId: w } = e,
        M = (0, g.Z)(),
        k = a.Z.getChannel(u),
        U = null == k ? void 0 : k.getGuildId(),
        G = null == U || '' === U,
        B = o.default.getCurrentUser();
    if (null == B) return !1;
    let Z = (0, c.sq)();
    if (!Z && (null == k || (G && !k.isPrivate()) || null == u)) return Promise.resolve(!1);
    let F = f.ZP.getCurrentEmbeddedActivity();
    (null == F ? void 0 : F.applicationId) != null && (t = r.Z.getApplication(null == F ? void 0 : F.applicationId));
    let V = (null == F ? void 0 : F.location.kind) === i.X.CONTEXTLESS;
    if ((V || s.Z.getVoiceChannelId() === u) && null != F && F.applicationId === n && (V || (0, h.p)(F.location) === s.Z.getVoiceChannelId())) return (0, y.Z)(U, F.location), Promise.resolve(!0);
    if (
        !(await (0, p.p)({
            applicationId: n,
            application: await (0, m.Z)(n, u),
            channel: k,
            currentEmbeddedApplication: t,
            embeddedActivitiesManager: M,
            user: B
        }))
    )
        return !1;
    if (null != k) {
        let e = (0, E.Z)(k.id),
            n = I.wP.includes(k.type);
        if (e) {
            if (
                !(await (0, v.Z)({
                    channelId: k.id,
                    bypassChangeModal: null != t
                }))
            )
                return !1;
        } else if (!(0, l.WS)(k) || !n) return !1;
    } else if (null == k && !Z) return !1;
    return (
        null != u && (0, _.Z)(u),
        null != F && (0, d.cG)(F.location),
        await (0, d.af)({
            channelId: u,
            applicationId: n,
            isStart: !1,
            embeddedActivitiesManager: M,
            analyticsLocations: T,
            locationObject: b,
            componentId: S,
            sectionName: A,
            source: N,
            partyId: C,
            joinUserId: R,
            joinSessionId: O,
            joinSecret: D,
            inviterUserId: x,
            isContextlessActivity: L,
            customId: P,
            referrerId: w
        })
    );
}
