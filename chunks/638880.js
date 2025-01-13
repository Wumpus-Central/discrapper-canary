r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(115911),
    a = r(812206),
    s = r(592125),
    o = r(944486),
    l = r(594174),
    u = r(595519),
    c = r(636449),
    d = r(774226),
    f = r(566620),
    _ = r(317381),
    h = r(672181),
    p = r(882347),
    m = r(16609),
    g = r(224189),
    E = r(574952),
    v = r(917107),
    I = r(89425),
    T = r(197386),
    b = r(701488);
function y(e) {
    return (0, c.C)(() => S(e));
}
async function S(e) {
    let n,
        { applicationId: r, activityChannelId: c, locationObject: y, analyticsLocations: S, componentId: A, sectionName: N, source: C, partyId: R, joinUserId: O, joinSessionId: D, joinSecret: L } = e,
        x = (0, E.Z)(),
        w = s.Z.getChannel(c),
        P = null == w ? void 0 : w.getGuildId(),
        M = null == P || '' === P,
        k = l.default.getCurrentUser();
    if (null == k) return !1;
    let U = (0, d.s)();
    if (!U && (null == w || (M && !w.isPrivate()) || null == c)) return Promise.resolve(!1);
    let B = _.ZP.getCurrentEmbeddedActivity();
    (null == B ? void 0 : B.applicationId) != null && (n = a.Z.getApplication(null == B ? void 0 : B.applicationId));
    let G = (null == B ? void 0 : B.location.kind) === i.X.CONTEXTLESS;
    if ((G || o.Z.getVoiceChannelId() === c) && null != B && B.applicationId === r && (G || (0, m.p)(B.location) === o.Z.getVoiceChannelId())) return (0, T.Z)(P, B.location), Promise.resolve(!0);
    if (
        !(await (0, p.p)({
            applicationId: r,
            application: await (0, g.Z)(r, c),
            channel: w,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: x,
            user: k
        }))
    )
        return !1;
    if (null != w) {
        let e = (0, v.Z)(w.id),
            r = b.wP.includes(w.type);
        if (e) {
            if (
                !(await (0, I.Z)({
                    channelId: w.id,
                    bypassChangeModal: null != n
                }))
            )
                return !1;
        } else if (!(0, u.WS)(w) || !r) return !1;
    } else if (null == w && !U) return !1;
    return (
        null != c && (0, h.Z)(c),
        null != B && (0, f.cG)(B.location),
        await (0, f.af)({
            channelId: c,
            applicationId: r,
            isStart: !1,
            embeddedActivitiesManager: x,
            analyticsLocations: S,
            locationObject: y,
            componentId: A,
            sectionName: N,
            source: C,
            partyId: R,
            joinUserId: O,
            joinSessionId: D,
            joinSecret: L
        })
    );
}
