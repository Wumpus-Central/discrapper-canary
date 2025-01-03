var i,
    r,
    l = n(442837),
    a = n(570140),
    s = n(749210);
((i = r || (r = {}))[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED');
let o = {},
    c = 0;
function d(e) {
    var t, n;
    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.fetchState) && void 0 !== n ? n : 0;
}
function u() {
    o = {};
}
class h extends l.ZP.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === d(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === d(e) &&
            ((o[e] = {
                fetchState: 1,
                foundMembers: 0,
                notFoundMembers: 0
            }),
            (c = t.length),
            s.Z.requestMembersById(e, t, !1));
    }
}
t.Z = new h(a.Z, {
    CONNECTION_OPEN: u,
    LOGOUT: u,
    RELATIONSHIP_ADD: u,
    RELATIONSHIP_REMOVE: u,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        var t, n;
        let i = e.chunks[0],
            { guildId: r } = i;
        1 === d(r) && ((o[r].foundMembers += i.members.length), (o[r].notFoundMembers += null !== (n = null === (t = i.notFound) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0), o[r].foundMembers + o[r].notFoundMembers >= c && (o[r].fetchState = 2));
    }
});
