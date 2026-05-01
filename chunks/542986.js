"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(66834);
let a = {},
    o = 0;
function l(e) {
    return a[e]?.fetchState ?? 0;
}
function u() {
    a = {};
}
class c extends i.Ay.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === l(e);
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === l(e) &&
            ((a[e] = { fetchState: 1, foundMembers: 0, notFoundMembers: 0 }),
            (o = t.length),
            s.A.requestMembersById(e, t, !1));
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: u,
    LOGOUT: u,
    RELATIONSHIP_ADD: u,
    RELATIONSHIP_REMOVE: u,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let t = e.chunks[0],
            { guildId: n } = t;
        1 === l(n) &&
            ((a[n].foundMembers += t.members.length),
            (a[n].notFoundMembers += t.notFound?.length ?? 0),
            a[n].foundMembers + a[n].notFoundMembers >= o && (a[n].fetchState = 2));
    },
});
