n.d(t, { h: () => c });
var r = n(442837),
    i = n(570140),
    a = n(703047),
    l = n(649256),
    o = n(981631);
async function s(e, t) {
    if (null == e || null == t) return Promise.reject('appId or linkId null');
    let n = await (0, l.JE)(e, t);
    if (null == n) return Promise.reject('fetchCustomActivityLink body is null');
    i.Z.dispatch({
        type: 'CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS',
        applicationId: e,
        link: n
    });
}
let c = (0, r.Kb)(a.Z, {
    queryId: (e, t) => o.McO.CUSTOM_ACTIVITY_LINK(e, t),
    get: (e, t) => (null == e || null == t ? null : a.Z.getOne(e, t)),
    load: (e, t, n) => s(t, n),
    useStateHook: r.e7
});
