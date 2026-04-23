n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(686956);
let l = {},
    s = 0;
function o(e) {
    return l[e]?.fetchState ?? 0;
}
function d() {
    l = {};
}
class u extends i.Ay.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === o(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === o(e) &&
            ((l[e] = { fetchState: 1, foundMembers: 0, notFoundMembers: 0 }),
            (s = t.length),
            a.A.requestMembersById(e, t, !1));
    }
}
let c = new u(r.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    RELATIONSHIP_ADD: d,
    RELATIONSHIP_REMOVE: d,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = e.chunks[0],
            { guildId: n } = t;
        1 === o(n) &&
            ((l[n].foundMembers += t.members.length),
            (l[n].notFoundMembers += t.notFound?.length ?? 0),
            l[n].foundMembers + l[n].notFoundMembers >= s && (l[n].fetchState = 2));
    },
});
