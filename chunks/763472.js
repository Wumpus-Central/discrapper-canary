n.d(t, {
    Z_: () => l,
    hY: () => c,
    sd: () => u
}),
    n(411104);
var r = n(544891),
    i = n(570140),
    o = n(647162),
    a = n(158776),
    s = n(981631);
function l(e, t) {
    i.Z.dispatch({
        type: 'ACTIVITY_SYNC',
        activity: e,
        userId: t
    });
}
function c(e, t) {
    (0, o.iy)(e, t)
        .then((n) =>
            i.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: t,
                metadata: n
            })
        )
        .catch(() =>
            i.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: t
            })
        );
}
async function u(e, t) {
    let n = e.metadata;
    if (null != n) return n;
    let o = a.Z.getActivityMetadata(t);
    if (null != o) return o;
    if (null == e.session_id) throw Error('null/undefined session_id');
    let { body: l } = await r.tn.get({
        url: s.ANM.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return (
        i.Z.dispatch({
            type: 'ACTIVITY_METADATA_UPDATE',
            metadata: l,
            userId: t
        }),
        l
    );
}
