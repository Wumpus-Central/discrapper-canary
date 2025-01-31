n.d(t, {
    Z_: () => l,
    hY: () => u,
    sd: () => c
}),
    n(411104);
var i = n(544891),
    r = n(570140),
    a = n(647162),
    s = n(158776),
    o = n(981631);
function l(e, t) {
    r.Z.dispatch({
        type: 'ACTIVITY_SYNC',
        activity: e,
        userId: t
    });
}
function u(e, t) {
    (0, a.iy)(e, t)
        .then((n) =>
            r.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: t,
                metadata: n
            })
        )
        .catch(() =>
            r.Z.dispatch({
                type: 'ACTIVITY_PLAY',
                activity: e,
                userId: t
            })
        );
}
async function c(e, t) {
    let n = e.metadata;
    if (null != n) return n;
    let a = s.Z.getActivityMetadata(t);
    if (null != a) return a;
    if (null == e.session_id) throw Error('null/undefined session_id');
    let { body: l } = await i.tn.get({
        url: o.ANM.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
        oldFormErrors: !0,
        rejectWithError: !1
    });
    return (
        r.Z.dispatch({
            type: 'ACTIVITY_METADATA_UPDATE',
            metadata: l,
            userId: t
        }),
        l
    );
}
