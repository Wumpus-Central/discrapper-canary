n.d(t, {
    Cj: () => f,
    M$: () => h,
    Zw: () => p
}),
    n(789020);
var r = n(570140),
    i = n(728345),
    l = n(812206),
    o = n(973616),
    a = n(314897),
    s = n(630388),
    c = n(774226),
    u = n(317381),
    d = n(981631);
async function p(e) {
    var t, n;
    let { applicationId: p, socketId: g } = e,
        m = u.ZP.getCurrentEmbeddedActivity();
    if ((null == m ? void 0 : m.applicationId) !== p) return;
    let b = m.compositeInstanceId,
        _ = null !== (t = l.Z.getApplication(p)) && void 0 !== t ? t : o.ZP.createFromServer(await i.ZP.fetchApplication(p));
    if (!(0, c.Kb)(_) || null == b || null == _ || !(0, s.yE)(_.flags, d.udG.EMBEDDED)) return;
    let E = {
        type: 0,
        session_id: null !== (n = a.default.getSessionId()) && void 0 !== n ? n : void 0,
        name: _.name,
        application_id: p,
        secrets: { join: b },
        party: { size: h },
        flags: f
    };
    r.Z.dispatch({
        type: 'LOCAL_ACTIVITY_UPDATE',
        socketId: g,
        activity: E
    });
}
let h = [1, 100],
    f = d.xjy.JOIN | d.xjy.PARTY_PRIVACY_FRIENDS | d.xjy.PARTY_PRIVACY_VOICE_CHANNEL | d.xjy.EMBEDDED | d.xjy.CONTEXTLESS;
