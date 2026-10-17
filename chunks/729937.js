n.d(t, { OH: () => l, ZH: () => o, yb: () => d });
var i = n(636537),
    r = n(73153),
    a = n(290863),
    s = n(652215);
function l(e, t) {
    r.h.dispatch({ type: "ACTIVITY_SYNC", activity: e, userId: t });
}
function o(e, t) {
    n.e("61129")
        .then(n.bind(n, 981616))
        .then((n) => {
            let { getSpotifyMetadataFromActivity: i } = n;
            return i(e, t);
        })
        .then((n) => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: e, userId: t, metadata: n }))
        .catch(() => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: e, userId: t }));
}
async function d(e, t) {
    let n = e.metadata;
    if (null != n && Object.keys(n).length > 0) return n;
    let l = a.A.getActivityMetadata(t);
    if (null != l) return l;
    if (null == e.session_id) throw Error("null/undefined session_id");
    let { body: o } = await i.Bo.get({
        url: s.Rsh.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    });
    return (r.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: o, userId: t }), o);
}
