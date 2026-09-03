n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(66834);
let s = {},
    l = 0;
function o(e) {
    return s[e]?.fetchState ?? 0;
}
function d() {
    s = {};
}
class c extends i.Ay.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === o(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === o(e) &&
            ((s[e] = { fetchState: 1, foundMembers: 0, notFoundMembers: 0 }),
            (l = t.length),
            a.A.requestMembersById(e, t, !1));
    }
}
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    RELATIONSHIP_ADD: d,
    RELATIONSHIP_REMOVE: d,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = e.chunks[0],
            { guildId: n } = t;
        1 === o(n) &&
            ((s[n].foundMembers += t.members.length),
            (s[n].notFoundMembers += t.notFound?.length ?? 0),
            s[n].foundMembers + s[n].notFoundMembers >= l && (s[n].fetchState = 2));
    },
});
