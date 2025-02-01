n.d(t, { Z: () => I }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(537986),
    u = n(592125),
    c = n(271383);
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
let f = new l.Z(c.ZP.isMember, (e, t) => {
    o.Z.dispatch({
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
            let { author: n, mentions: i } = t;
            null != n && m(e, n.id), null == i || i.forEach((t) => m(e, t.id));
        }),
        !1
    );
}
function E(e) {
    let { channelId: t, messages: n } = e,
        i = u.Z.getChannel(t);
    return null != i && null != i.guild_id && g(i.guild_id, n);
}
function v(e) {
    let { guildId: t, messages: n } = e;
    return null != t && g(t, a().flatten(n));
}
class y extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.ZP);
    }
    requestMember(e, t) {
        m(e, t);
    }
}
d(y, 'displayName', 'GuildMemberRequesterStore');
let I = new y(o.Z, {
    CONNECTION_CLOSED: _,
    CONNECTION_OPEN: _,
    CONNECTION_RESUMED: h,
    GUILD_MEMBERS_CHUNK_BATCH: p,
    SEARCH_FINISH: v,
    MOD_VIEW_SEARCH_FINISH: v,
    LOCAL_MESSAGES_LOADED: E,
    LOAD_MESSAGES_SUCCESS: E,
    LOAD_MESSAGES_AROUND_SUCCESS: E,
    LOAD_PINNED_MESSAGES_SUCCESS: E,
    LOAD_RECENT_MENTIONS_SUCCESS: E
});
