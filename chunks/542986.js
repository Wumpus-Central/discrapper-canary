n.d(t, {
    A: () => d,
});
var r = n(311907),
    i = n(73153),
    l = n(686956);
let a = {},
    s = 0;

function o(e) {
    var t, n;
    return null != (t = null == (n = a[e]) ? void 0 : n.fetchState) ? t : 0;
}

function c() {
    a = {};
}
class u extends r.Ay.Store {
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
            l.A.requestMembersById(e, t, !1));
    }
}
let d = new u(i.h, {
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
            (a[i].notFoundMembers += null != (t = null == (n = r.notFound) ? void 0 : n.length) ? t : 0),
            a[i].foundMembers + a[i].notFoundMembers >= s && (a[i].fetchState = 2));
    },
});
