n.d(t, { A: () => p });
var i = n(587895),
    r = n(734057),
    a = n(309010),
    s = n(287809),
    l = n(811024),
    o = n(646865),
    d = n(795816),
    c = n(933958),
    u = n(799061),
    _ = n(969151),
    E = n(817636),
    A = n(108959),
    h = n(90804),
    f = n(748975),
    I = n(818023);
function p(e) {
    return (0, o.w)((0, o.f)(), () => T(e));
}
async function T(e) {
    let t,
        {
            applicationId: n,
            activityChannelId: o,
            locationObject: p,
            analyticsLocations: T,
            componentId: m,
            sectionName: g,
            source: S,
            inviterUserId: N,
            customId: C,
            referrerId: O,
        } = e,
        R = r.A.getChannel(o),
        L = R?.getGuildId(),
        y = null == L || "" === L,
        D = s.default.getCurrentUser();
    if (null == D) return !1;
    if (null == R || (y && !R.isPrivate()) || null == o) return Promise.resolve(!1);
    let v = c.Ay.getCurrentEmbeddedActivity();
    if (
        (v?.applicationId != null && (t = i.A.getApplication(v?.applicationId)),
        a.Ay.getVoiceChannelId() === o &&
            null != v &&
            v.applicationId === n &&
            (0, _.H)(v.location) === a.Ay.getVoiceChannelId())
    )
        return ((0, f.A)(L, v.location), Promise.resolve(!0));
    let b = await (0, E.A)(n, o);
    if (!(await (0, u.O)({ applicationId: n, application: b, channel: R, currentEmbeddedApplication: t, user: D })))
        return !1;
    if (null != R) {
        let e = (0, A.A)(R.id),
            n = I.lk.includes(R.type);
        if (e) {
            if (!(await (0, h.A)({ channelId: R.id, bypassChangeModal: null != t }))) return !1;
        } else if (!(0, l.pE)(R) || !n) return !1;
    } else if (null == R) return !1;
    return (
        null != v && (0, d.rW)(v.location),
        await (0, d.su)({
            channelId: o,
            applicationId: n,
            isStart: !1,
            analyticsLocations: T,
            locationObject: p,
            componentId: m,
            sectionName: g,
            source: S,
            inviterUserId: N,
            customId: C,
            referrerId: O,
        })
    );
}
