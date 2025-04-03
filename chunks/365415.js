n.d(t, { h: () => u });
var r = n(666572),
    i = n(442837),
    a = n(544891),
    l = n(570140),
    o = n(612673),
    s = n(981631);
async function c(e, t) {
    if (null == e || null == t) return Promise.reject();
    if (t.type === r.e.MANAGED) {
        let { body: n } = await a.tn.get({
            url: s.ANM.APPLICATION_MANAGED_ACTIVITY_LINK(e, t.decodedLinkId),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        l.Z.dispatch({
            type: 'MANAGED_ACTIVITY_LINK_FETCH_SUCCESS',
            applicationId: e,
            link: n
        });
        return;
    }
    return Promise.reject();
}
let u = (0, i.Kb)(o.Z, {
    queryId: (e, t) => (null == t ? null : s.McO.CUSTOM_ACTIVITY_LINK(e, t.encodedLinkId)),
    get: (e, t) => (null == e || null == t ? null : t.type === r.e.MANAGED ? o.Z.getOne(e, t.encodedLinkId) : null),
    load: (e, t, n) => c(t, n),
    useStateHook: i.e7
});
