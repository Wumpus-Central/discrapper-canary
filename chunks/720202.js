(n.d(t, { Z: () => y }), n(388685), n(539854));
var r,
    i = n(442837),
    a = n(570140),
    o = n(537986),
    s = n(592125),
    l = n(271383);
function c(e, t, n) {
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
let u = new o.Z(l.ZP.isMember, (e, t) => {
    a.Z.dispatch({
        type: 'GUILD_MEMBERS_REQUEST',
        guildIds: [e],
        userIds: t
    });
});
function d() {
    u.reset();
}
function _(e) {
    let { chunks: t } = e;
    for (let e of t)
        (e.members.forEach((t) => {
            u.acknowledge(e.guildId, t.user.id);
        }),
            null != e.notFound && e.notFound.forEach((t) => u.acknowledge(e.guildId, t)));
    return !1;
}
function f() {
    return (u.requestUnacknowledged(), !1);
}
function p(e, t) {
    return (u.request(e, t), !1);
}
function h(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            (null != n && p(e, n.id), null == r || r.forEach((t) => p(e, t.id)));
        }),
        !1
    );
}
function m(e) {
    let { channelId: t, messages: n } = e,
        r = s.Z.getChannel(t);
    return null != r && null != r.guild_id && h(r.guild_id, n);
}
function g(e) {
    let { pins: t, channelId: n } = e,
        r = s.Z.getChannel(n);
    return (
        null != r &&
        null != r.guild_id &&
        h(
            r.guild_id,
            t.map((e) => {
                let { message: t } = e;
                return t;
            })
        )
    );
}
function E(e) {
    let { guildId: t, data: n } = e;
    if (null == t) return !1;
    let r = [];
    return (
        n.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    r.push(e);
                });
            });
        }),
        h(t, r)
    );
}
class b extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.ZP);
    }
    requestMember(e, t) {
        p(e, t);
    }
}
c(b, 'displayName', 'GuildMemberRequesterStore');
let y = new b(a.Z, {
    CONNECTION_CLOSED: d,
    CONNECTION_OPEN: d,
    CONNECTION_RESUMED: f,
    GUILD_MEMBERS_CHUNK_BATCH: _,
    SEARCH_MESSAGES_SUCCESS: E,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: E,
    LOCAL_MESSAGES_LOADED: m,
    LOAD_MESSAGES_SUCCESS: m,
    LOAD_MESSAGES_AROUND_SUCCESS: m,
    LOAD_RECENT_MENTIONS_SUCCESS: m,
    LOAD_PINNED_MESSAGES_SUCCESS: g
});
