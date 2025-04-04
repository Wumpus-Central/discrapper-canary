n.d(t, { Z: () => v }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(537986),
    c = n(592125),
    u = n(271383);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = new l.Z(u.ZP.isMember, (e, t) => {
    s.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: t
    });
});
function _() {
    f.reset();
}
function p(e) {
    let { chunks: t } = e;
    for (let e of t)
        e.members.forEach((t) => {
            f.acknowledge(e.guildId, t.user.id);
        }),
            null != e.notFound && e.notFound.forEach((t) => f.acknowledge(e.guildId, t));
    return !1;
}
function h() {
    return f.requestUnacknowledged(), !1;
}
function m(e, t) {
    return f.request(e, t), !1;
}
function g(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && m(e, n.id), null == r || r.forEach((t) => m(e, t.id));
        }),
        !1
    );
}
function E(e) {
    let { channelId: t, messages: n } = e,
        r = c.Z.getChannel(t);
    return null != r && null != r.guild_id && g(r.guild_id, n);
}
function b(e) {
    let { guildId: t, messages: n } = e;
    return null != t && g(t, o().flatten(n));
}
class y extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.ZP);
    }
    requestMember(e, t) {
        m(e, t);
    }
}
d(y, 'displayName', 'GuildMemberRequesterStore');
let v = new y(s.Z, {
    CONNECTION_CLOSED: _,
    CONNECTION_OPEN: _,
    CONNECTION_RESUMED: h,
    GUILD_MEMBERS_CHUNK_BATCH: p,
    SEARCH_FINISH: b,
    MOD_VIEW_SEARCH_FINISH: b,
    LOCAL_MESSAGES_LOADED: E,
    LOAD_MESSAGES_SUCCESS: E,
    LOAD_MESSAGES_AROUND_SUCCESS: E,
    LOAD_PINNED_MESSAGES_SUCCESS: E,
    LOAD_RECENT_MENTIONS_SUCCESS: E
});
