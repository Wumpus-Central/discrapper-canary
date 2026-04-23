"use strict";
n.d(t, { OH: () => l, ZH: () => u, yb: () => c });
var r = n(562465),
    i = n(73153),
    s = n(981616),
    a = n(290863),
    o = n(652215);
function l(e, t) {
    i.h.dispatch({ type: "ACTIVITY_SYNC", activity: e, userId: t });
}
function u(e, t) {
    (0, s.LI)(e, t)
        .then((n) => i.h.dispatch({ type: "ACTIVITY_PLAY", activity: e, userId: t, metadata: n }))
        .catch(() => i.h.dispatch({ type: "ACTIVITY_PLAY", activity: e, userId: t }));
}
async function c(e, t) {
    let n = e.metadata;
    if (null != n && Object.keys(n).length > 0) return n;
    let s = a.A.getActivityMetadata(t);
    if (null != s) return s;
    if (null == e.session_id) throw Error("null/undefined session_id");
    let { body: l } = await r.Bo.get({
        url: o.Rsh.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return i.h.dispatch({ type: "ACTIVITY_METADATA_UPDATE", metadata: l, userId: t }), l;
}
