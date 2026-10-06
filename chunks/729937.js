n.d(i, { OH: () => u, ZH: () => d, yb: () => p });
var e = n(636537),
    r = n(73153),
    a = n(290863),
    l = n(652215);
function u(t, i) {
    r.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: i });
}
function d(t, i) {
    n.e("61129")
        .then(n.bind(n, 981616))
        .then((n) => {
            let { getSpotifyMetadataFromActivity: e } = n;
            return e(t, i);
        })
        .then((n) => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: i, metadata: n }))
        .catch(() => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: i }));
}
async function p(t, i) {
    let n = t.metadata;
    if (null != n && Object.keys(n).length > 0) return n;
    let u = a.A.getActivityMetadata(i);
    if (null != u) return u;
    if (null == t.session_id) throw Error("null/undefined session_id");
    let { body: d } = await e.Bo.get({
        url: l.Rsh.USER_ACTIVITY_METADATA(i, t.session_id, t.application_id),
        oldFormErrors: !0,
        rejectWithError: (0, e.fT)(),
    });
    return (r.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: d, userId: i }), d);
}
