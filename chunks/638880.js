r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(115911),
    a = r(812206),
    o = r(592125),
    s = r(944486),
    l = r(594174),
    u = r(595519),
    c = r(636449),
    d = r(774226),
    f = r(566620),
    p = r(317381),
    h = r(672181),
    _ = r(882347),
    m = r(16609),
    g = r(224189),
    E = r(574952),
    v = r(917107),
    y = r(89425),
    b = r(197386),
    I = r(701488);
function T(e) {
    return (0, c.C)(() => S(e));
}
async function S(e) {
    let n,
        { applicationId: r, activityChannelId: c, locationObject: T, analyticsLocations: S, componentId: A, sectionName: C, source: N, partyId: R, joinUserId: O, joinSessionId: D, joinSecret: L, inviterUserId: x, isContextlessActivity: w } = e,
        P = (0, E.Z)(),
        M = o.Z.getChannel(c),
        k = null == M ? void 0 : M.getGuildId(),
        U = null == k || '' === k,
        B = l.default.getCurrentUser();
    if (null == B) return !1;
    let G = (0, d.sq)();
    if (!G && (null == M || (U && !M.isPrivate()) || null == c)) return Promise.resolve(!1);
    let Z = p.ZP.getCurrentEmbeddedActivity();
    (null == Z ? void 0 : Z.applicationId) != null && (n = a.Z.getApplication(null == Z ? void 0 : Z.applicationId));
    let F = (null == Z ? void 0 : Z.location.kind) === i.X.CONTEXTLESS;
    if ((F || s.Z.getVoiceChannelId() === c) && null != Z && Z.applicationId === r && (F || (0, m.p)(Z.location) === s.Z.getVoiceChannelId())) return (0, b.Z)(k, Z.location), Promise.resolve(!0);
    if (
        !(await (0, _.p)({
            applicationId: r,
            application: await (0, g.Z)(r, c),
            channel: M,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: P,
            user: B
        }))
    )
        return !1;
    if (null != M) {
        let e = (0, v.Z)(M.id),
            r = I.wP.includes(M.type);
        if (e) {
            if (
                !(await (0, y.Z)({
                    channelId: M.id,
                    bypassChangeModal: null != n
                }))
            )
                return !1;
        } else if (!(0, u.WS)(M) || !r) return !1;
    } else if (null == M && !G) return !1;
    return (
        null != c && (0, h.Z)(c),
        null != Z && (0, f.cG)(Z.location),
        await (0, f.af)({
            channelId: c,
            applicationId: r,
            isStart: !1,
            embeddedActivitiesManager: P,
            analyticsLocations: S,
            locationObject: T,
            componentId: A,
            sectionName: C,
            source: N,
            partyId: R,
            joinUserId: O,
            joinSessionId: D,
            joinSecret: L,
            inviterUserId: x,
            isContextlessActivity: w
        })
    );
}
