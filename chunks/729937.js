"use strict";
n.d(t, { OH: () => o, ZH: () => d, yb: () => c });
var i = n(636537),
    r = n(228366),
    a = n(981616),
    s = n(290863),
    l = n(652215);
function o(e, t) {
    r.h.dispatch({ type: "ACTIVITY_SYNC", activity: e, userId: t });
}
function d(e, t) {
    (0, a.LI)(e, t)
        .then((n) => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: e, userId: t, metadata: n }))
        .catch(() => r.h.dispatch({ type: "ACTIVITY_PLAY", activity: e, userId: t }));
}
async function c(e, t) {
    let n = e.metadata;
    if (null != n && Object.keys(n).length > 0) return n;
    let a = s.A.getActivityMetadata(t);
    if (null != a) return a;
    if (null == e.session_id) throw Error("null/undefined session_id");
    let { body: o } = await i.Bo.get({
        url: l.Rsh.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    });
    return r.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: o, userId: t }), o;
}
