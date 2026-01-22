n.d(t, {
    OH: () => l,
    ZH: () => c,
    yb: () => u,
}),
    n(65821);
var r = n(562465),
    i = n(73153),
    a = n(981616),
    s = n(290863),
    o = n(652215);

function l(e, t) {
    i.h.dispatch({
        type: "ACTIVITY_SYNC",
        activity: e,
        userId: t,
    });
}

function c(e, t) {
    (0, a.LI)(e, t)
        .then((n) =>
            i.h.dispatch({
                type: "ACTIVITY_PLAY",
                activity: e,
                userId: t,
                metadata: n,
            }),
        )
        .catch(() =>
            i.h.dispatch({
                type: "ACTIVITY_PLAY",
                activity: e,
                userId: t,
            }),
        );
}
async function u(e, t) {
    let n = e.metadata;
    if (null != n && Object.keys(n).length > 0) return n;
    let a = s.A.getActivityMetadata(t);
    if (null != a) return a;
    if (null == e.session_id) throw Error("null/undefined session_id");
    let { body: l } = await r.Bo.get({
        url: o.Rsh.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    return (
        i.h.dispatch({
            type: "ACTIVITY_METADATA_UPDATE",
            metadata: l,
            userId: t,
        }),
        l
    );
}
