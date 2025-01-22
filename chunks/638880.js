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
        { applicationId: r, activityChannelId: c, locationObject: T, analyticsLocations: S, componentId: A, sectionName: C, source: N, partyId: R, joinUserId: O, joinSessionId: D, joinSecret: x, inviterUserId: L } = e,
        w = (0, E.Z)(),
        P = o.Z.getChannel(c),
        M = null == P ? void 0 : P.getGuildId(),
        k = null == M || '' === M,
        U = l.default.getCurrentUser();
    if (null == U) return !1;
    let B = (0, d.s)();
    if (!B && (null == P || (k && !P.isPrivate()) || null == c)) return Promise.resolve(!1);
    let G = p.ZP.getCurrentEmbeddedActivity();
    (null == G ? void 0 : G.applicationId) != null && (n = a.Z.getApplication(null == G ? void 0 : G.applicationId));
    let Z = (null == G ? void 0 : G.location.kind) === i.X.CONTEXTLESS;
    if ((Z || s.Z.getVoiceChannelId() === c) && null != G && G.applicationId === r && (Z || (0, m.p)(G.location) === s.Z.getVoiceChannelId())) return (0, b.Z)(M, G.location), Promise.resolve(!0);
    if (
        !(await (0, _.p)({
            applicationId: r,
            application: await (0, g.Z)(r, c),
            channel: P,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: w,
            user: U
        }))
    )
        return !1;
    if (null != P) {
        let e = (0, v.Z)(P.id),
            r = I.wP.includes(P.type);
        if (e) {
            if (
                !(await (0, y.Z)({
                    channelId: P.id,
                    bypassChangeModal: null != n
                }))
            )
                return !1;
        } else if (!(0, u.WS)(P) || !r) return !1;
    } else if (null == P && !B) return !1;
    return (
        null != c && (0, h.Z)(c),
        null != G && (0, f.cG)(G.location),
        await (0, f.af)({
            channelId: c,
            applicationId: r,
            isStart: !1,
            embeddedActivitiesManager: w,
            analyticsLocations: S,
            locationObject: T,
            componentId: A,
            sectionName: C,
            source: N,
            partyId: R,
            joinUserId: O,
            joinSessionId: D,
            joinSecret: x,
            inviterUserId: L
        })
    );
}
