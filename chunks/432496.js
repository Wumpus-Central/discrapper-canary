n.d(t, { Z: () => d });
var r = n(442837),
    i = n(570140),
    l = n(749210);
let o = {},
    a = 0;
function s(e) {
    var t, n;
    return null !== (n = null === (t = o[e]) || void 0 === t ? void 0 : t.fetchState) && void 0 !== n ? n : 0;
}
function c() {
    o = {};
}
class u extends r.ZP.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === s(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === s(e) &&
            ((o[e] = {
                fetchState: 1,
                foundMembers: 0,
                notFoundMembers: 0
            }),
            (a = t.length),
            l.Z.requestMembersById(e, t, !1));
    }
}
let d = new u(i.Z, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    RELATIONSHIP_ADD: c,
    RELATIONSHIP_REMOVE: c,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        var t, n;
        let r = e.chunks[0],
            { guildId: i } = r;
        1 === s(i) && ((o[i].foundMembers += r.members.length), (o[i].notFoundMembers += null !== (n = null === (t = r.notFound) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0), o[i].foundMembers + o[i].notFoundMembers >= a && (o[i].fetchState = 2));
    }
});
