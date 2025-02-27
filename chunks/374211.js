n.d(t, { h: () => d });
var r = n(442837),
    i = n(544891),
    a = n(570140),
    o = n(850240),
    l = n(214647),
    s = n(981631);
async function c(e, t) {
    if (null == e || null == t) return Promise.reject();
    if (t.type === o.e.MANAGED) {
        let { body: n } = await i.tn.get({
            url: s.ANM.APPLICATION_MANAGED_ACTIVITY_LINK(e, t.decodedLinkId),
            oldFormErrors: !0,
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'MANAGED_ACTIVITY_LINK_FETCH_SUCCESS',
            applicationId: e,
            link: n
        });
        return;
    }
    return Promise.reject();
}
let d = (0, r.Kb)(l.Z, {
    queryId: (e, t) => (null != e && null != t ? ['custom-activity-links', e, t.encodedLinkId] : null),
    get: (e, t) => (null == e || null == t ? null : t.type === o.e.MANAGED ? l.Z.getOne(e, t.encodedLinkId) : null),
    load: (e, t, n) => c(t, n),
    useStateHook: r.e7
});
