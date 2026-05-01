e.d(n, { OH: () => c, ZH: () => d, yb: () => s });
var i = e(636537),
    l = e(228366),
    r = e(981616),
    a = e(290863),
    u = e(652215);
function c(t, n) {
    l.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: n });
}
function d(t, n) {
    (0, r.LI)(t, n)
        .then((e) => l.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: n, metadata: e }))
        .catch(() => l.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: n }));
}
async function s(t, n) {
    let e = t.metadata;
    if (null != e && Object.keys(e).length > 0) return e;
    let r = a.A.getActivityMetadata(n);
    if (null != r) return r;
    if (null == t.session_id) throw Error("null/undefined session_id");
    let { body: c } = await i.Bo.get({
        url: u.Rsh.USER_ACTIVITY_METADATA(n, t.session_id, t.application_id),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return l.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: c, userId: n }), c;
}
