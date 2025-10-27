n.d(t, { Z: () => d });
var r = n(442837),
    i = n(570140),
    l = n(749210);
let a = {},
    s = 0;
function o(e) {
    var t, n;
    return null != (n = null == (t = a[e]) ? void 0 : t.fetchState) ? n : 0;
}
function c() {
    a = {};
}
class u extends r.ZP.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === o(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === o(e) &&
            ((a[e] = {
                fetchState: 1,
                foundMembers: 0,
                notFoundMembers: 0,
            }),
            (s = t.length),
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
        1 === o(i) &&
            ((a[i].foundMembers += r.members.length),
            (a[i].notFoundMembers += null != (n = null == (t = r.notFound) ? void 0 : t.length) ? n : 0),
            a[i].foundMembers + a[i].notFoundMembers >= s && (a[i].fetchState = 2));
    },
});
