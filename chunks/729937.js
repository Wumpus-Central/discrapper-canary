i.d(n, { OH: () => u, ZH: () => c, yb: () => d });
var e = i(636537),
    l = i(228366),
    r = i(981616),
    a = i(290863),
    o = i(652215);
function u(t, n) {
    l.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: n });
}
function c(t, n) {
    (0, r.LI)(t, n)
        .then((i) => l.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: n, metadata: i }))
        .catch(() => l.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: n }));
}
async function d(t, n) {
    let i = t.metadata;
    if (null != i && Object.keys(i).length > 0) return i;
    let r = a.A.getActivityMetadata(n);
    if (null != r) return r;
    if (null == t.session_id) throw Error("null/undefined session_id");
    let { body: u } = await e.Bo.get({
        url: o.Rsh.USER_ACTIVITY_METADATA(n, t.session_id, t.application_id),
        oldFormErrors: !0,
        rejectWithError: (0, e.fT)(),
    });
    return l.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: u, userId: n }), u;
}
