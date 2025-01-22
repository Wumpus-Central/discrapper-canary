var i,
    a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(537986),
    d = r(592125),
    f = r(271383);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = new c.Z(f.ZP.isMember, (e, n) => {
    u.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: n
    });
});
function _() {
    h.reset();
}
function m(e) {
    let { chunks: n } = e;
    for (let e of n)
        e.members.forEach((n) => {
            h.acknowledge(e.guildId, n.user.id);
        }),
            null != e.notFound && e.notFound.forEach((n) => h.acknowledge(e.guildId, n));
    return !1;
}
function g() {
    return h.requestUnacknowledged(), !1;
}
function E(e, n) {
    return h.request(e, n), !1;
}
function v(e, n) {
    return (
        n.forEach((n) => {
            let { author: r, mentions: i } = n;
            null != r && E(e, r.id), null == i || i.forEach((n) => E(e, n.id));
        }),
        !1
    );
}
function y(e) {
    let { channelId: n, messages: r } = e,
        i = d.Z.getChannel(n);
    return null != i && null != i.guild_id && v(i.guild_id, r);
}
function b(e) {
    let { guildId: n, messages: r } = e;
    return null != n && v(n, s().flatten(r));
}
class I extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, f.ZP);
    }
    requestMember(e, n) {
        E(e, n);
    }
}
p(I, 'displayName', 'GuildMemberRequesterStore'),
    (n.Z = new I(u.Z, {
        CONNECTION_CLOSED: _,
        CONNECTION_OPEN: _,
        CONNECTION_RESUMED: g,
        GUILD_MEMBERS_CHUNK_BATCH: m,
        SEARCH_FINISH: b,
        MOD_VIEW_SEARCH_FINISH: b,
        LOCAL_MESSAGES_LOADED: y,
        LOAD_MESSAGES_SUCCESS: y,
        LOAD_MESSAGES_AROUND_SUCCESS: y,
        LOAD_PINNED_MESSAGES_SUCCESS: y,
        LOAD_RECENT_MENTIONS_SUCCESS: y
    }));
