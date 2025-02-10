n.d(t, {
    Cj: () => p,
    M$: () => m,
    Zw: () => h
}),
    n(789020);
var i = n(570140),
    l = n(728345),
    r = n(812206),
    a = n(973616),
    s = n(314897),
    o = n(630388),
    c = n(774226),
    d = n(317381),
    u = n(981631);
async function h(e) {
    var t, n;
    let { applicationId: h, socketId: g } = e,
        _ = d.ZP.getCurrentEmbeddedActivity();
    if ((null == _ ? void 0 : _.applicationId) !== h) return;
    let f = _.compositeInstanceId,
        E = null !== (t = r.Z.getApplication(h)) && void 0 !== t ? t : a.ZP.createFromServer(await l.ZP.fetchApplication(h));
    if (!(0, c.Kb)(E) || null == f || null == E || !(0, o.yE)(E.flags, u.udG.EMBEDDED)) return;
    let I = {
        type: 0,
        session_id: null !== (n = s.default.getSessionId()) && void 0 !== n ? n : void 0,
        name: E.name,
        application_id: h,
        secrets: { join: f },
        party: { size: m },
        flags: p
    };
    i.Z.dispatch({
        type: 'LOCAL_ACTIVITY_UPDATE',
        socketId: g,
        activity: I
    });
}
let m = [1, 100],
    p = u.xjy.JOIN | u.xjy.PARTY_PRIVACY_FRIENDS | u.xjy.PARTY_PRIVACY_VOICE_CHANNEL | u.xjy.EMBEDDED | u.xjy.CONTEXTLESS;
