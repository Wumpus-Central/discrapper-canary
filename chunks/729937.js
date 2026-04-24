i.d(e, { OH: () => o, ZH: () => c, yb: () => d });
var l = i(636537),
    a = i(228366),
    n = i(981616),
    r = i(290863),
    s = i(652215);
function o(t, e) {
    a.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: e });
}
function c(t, e) {
    (0, n.LI)(t, e)
        .then((i) => a.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: e, metadata: i }))
        .catch(() => a.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: e }));
}
async function d(t, e) {
    let i = t.metadata;
    if (null != i && Object.keys(i).length > 0) return i;
    let n = r.A.getActivityMetadata(e);
    if (null != n) return n;
    if (null == t.session_id) throw Error("null/undefined session_id");
    let { body: o } = await l.Bo.get({
        url: s.Rsh.USER_ACTIVITY_METADATA(e, t.session_id, t.application_id),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return a.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: o, userId: e }), o;
}
