n.d(t, {
    P: function () {
        return s;
    }
});
var i = n(442837),
    l = n(372460),
    r = n(621853),
    a = n(981631);
function s(e) {
    let { userId: t, relationshipType: n, gameFriends: s, pendingIncomingGameRelationships: o } = e,
        c = (0, l.wn)({ location: 'UserProfilePanelBody' }),
        { hasFetchedProfile: d, fetchError: u } = (0, i.cj)([r.Z], () => {
            var e;
            let n = r.Z.getUserProfile(t);
            return {
                hasFetchedProfile: (null !== (e = null == n ? void 0 : n.lastFetched) && void 0 !== e ? e : 0) !== 0,
                fetchError: null == n ? void 0 : n.fetchError
            };
        });
    return n !== a.OGo.FRIEND && c && (s.length > 0 || o.length > 0) && d && null != u;
}
