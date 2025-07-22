(n.d(t, { Z: () => v }), n(388685));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
let _ = new l.Z(u.ZP.isMember, (e, t) => {
    s.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: t
    });
});
function f() {
    _.reset();
}
function p(e) {
    let { chunks: t } = e;
    for (let e of t)
        (e.members.forEach((t) => {
            _.acknowledge(e.guildId, t.user.id);
        }),
            null != e.notFound && e.notFound.forEach((t) => _.acknowledge(e.guildId, t)));
    return !1;
}
function h() {
    return (_.requestUnacknowledged(), !1);
}
function m(e, t) {
    return (_.request(e, t), !1);
}
function g(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            (null != n && m(e, n.id), null == r || r.forEach((t) => m(e, t.id)));
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
    let { pins: t, channelId: n } = e,
        r = c.Z.getChannel(n);
    return (
        null != r &&
        null != r.guild_id &&
        g(
            r.guild_id,
            t.map((e) => {
                let { message: t } = e;
                return t;
            })
        )
    );
}
function y(e) {
    let { guildId: t, messages: n } = e;
    return null != t && g(t, a().flatten(n));
}
class O extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.ZP);
    }
    requestMember(e, t) {
        m(e, t);
    }
}
d(O, 'displayName', 'GuildMemberRequesterStore');
let v = new O(s.Z, {
    CONNECTION_CLOSED: f,
    CONNECTION_OPEN: f,
    CONNECTION_RESUMED: h,
    GUILD_MEMBERS_CHUNK_BATCH: p,
    SEARCH_FINISH: y,
    MOD_VIEW_SEARCH_FINISH: y,
    LOCAL_MESSAGES_LOADED: E,
    LOAD_MESSAGES_SUCCESS: E,
    LOAD_MESSAGES_AROUND_SUCCESS: E,
    LOAD_RECENT_MENTIONS_SUCCESS: E,
    LOAD_PINNED_MESSAGES_SUCCESS: b
});
