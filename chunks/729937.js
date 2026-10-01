i.d(e, { OH: () => s, ZH: () => a, yb: () => c });
var r = i(636537),
    n = i(73153),
    o = i(981616),
    u = i(290863),
    l = i(652215);
function s(t, e) {
    n.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: e });
}
function a(t, e) {
    (0, o.LI)(t, e)
        .then((i) => n.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: e, metadata: i }))
        .catch(() => n.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: e }));
}
async function c(t, e) {
    let i = t.metadata;
    if (null != i && Object.keys(i).length > 0) return i;
    let o = u.A.getActivityMetadata(e);
    if (null != o) return o;
    if (null == t.session_id) throw Error("null/undefined session_id");
    let { body: s } = await r.Bo.get({
        url: l.Rsh.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
        oldFormErrors: !0,
        rejectWithError: (0, r.fT)(),
    });
    return (n.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: s, userId: e }), s);
}
