n.d(e, { OH: () => a, ZH: () => c, yb: () => s });
var i = n(636537),
    r = n(228366),
    l = n(981616),
    o = n(290863),
    u = n(652215);
function a(t, e) {
    r.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: e });
}
function c(t, e) {
    (0, l.LI)(t, e)
        .then((n) => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: e, metadata: n }))
        .catch(() => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: e }));
}
async function s(t, e) {
    let n = t.metadata;
    if (null != n && Object.keys(n).length > 0) return n;
    let l = o.A.getActivityMetadata(e);
    if (null != l) return l;
    if (null == t.session_id) throw Error("null/undefined session_id");
    let { body: a } = await i.Bo.get({
        url: u.Rsh.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return r.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: a, userId: e }), a;
}
