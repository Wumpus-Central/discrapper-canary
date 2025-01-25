n.d(t, {
    Cj: function () {
        return p;
    },
    M$: function () {
        return m;
    },
    Zw: function () {
        return h;
    }
}),
    n(789020);
var i = n(570140),
    r = n(728345),
    l = n(812206),
    a = n(973616),
    s = n(314897),
    o = n(630388),
    c = n(774226),
    d = n(317381),
    u = n(981631);
async function h(e) {
    var t, n;
    let { applicationId: h, socketId: g } = e;
    if (!(0, c.Kb)(h)) return;
    let f = d.ZP.getCurrentEmbeddedActivity();
    if ((null == f ? void 0 : f.applicationId) !== h) return;
    let _ = f.compositeInstanceId,
        E = null !== (t = l.Z.getApplication(h)) && void 0 !== t ? t : a.ZP.createFromServer(await r.ZP.fetchApplication(h));
    if (null == _ || null == E || !(0, o.yE)(E.flags, u.udG.EMBEDDED)) return;
    let I = {
        type: 0,
        session_id: null !== (n = s.default.getSessionId()) && void 0 !== n ? n : void 0,
        name: E.name,
        application_id: h,
        secrets: { join: _ },
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
