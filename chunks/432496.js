n.d(t, { Z: () => u });
var i = n(442837),
    l = n(570140),
    r = n(749210);
let a = {},
    s = 0;
function o(e) {
    var t, n;
    return null !== (n = null === (t = a[e]) || void 0 === t ? void 0 : t.fetchState) && void 0 !== n ? n : 0;
}
function d() {
    a = {};
}
class c extends i.ZP.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === o(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === o(e) &&
            ((a[e] = {
                fetchState: 1,
                foundMembers: 0,
                notFoundMembers: 0
            }),
            (s = t.length),
            r.Z.requestMembersById(e, t, !1));
    }
}
let u = new c(l.Z, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    RELATIONSHIP_ADD: d,
    RELATIONSHIP_REMOVE: d,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        var t, n;
        let i = e.chunks[0],
            { guildId: l } = i;
        1 === o(l) && ((a[l].foundMembers += i.members.length), (a[l].notFoundMembers += null !== (n = null === (t = i.notFound) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0), a[l].foundMembers + a[l].notFoundMembers >= s && (a[l].fetchState = 2));
    }
});
