n.d(t, {
    A: () => y,
}),
    n(896048),
    n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(546885),
    o = n(734057),
    l = n(696451);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = new s.A(l.Ay.isMember, (e, t) => {
    a.h.dispatch({
        type: "GUILD_MEMBERS_REQUEST",
        guildIds: [e],
        userIds: t,
    });
});

function d() {
    u.reset();
}

function f(e) {
    let { chunks: t } = e;
    for (let e of t)
        e.members.forEach((t) => {
            u.acknowledge(e.guildId, t.user.id);
        }),
            null != e.notFound && e.notFound.forEach((t) => u.acknowledge(e.guildId, t));
    return !1;
}

function p() {
    return u.requestUnacknowledged(), !1;
}

function _(e, t) {
    return u.request(e, t), !1;
}

function h(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            null != n && _(e, n.id), null == r || r.forEach((t) => _(e, t.id));
        }),
        !1
    );
}

function m(e) {
    let { channelId: t, messages: n } = e,
        r = o.A.getChannel(t);
    return null != r && null != r.guild_id && h(r.guild_id, n);
}

function g(e) {
    let { pins: t, channelId: n } = e,
        r = o.A.getChannel(n);
    return (
        null != r &&
        null != r.guild_id &&
        h(
            r.guild_id,
            t.map((e) => {
                let { message: t } = e;
                return t;
            }),
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
class b extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.A, l.Ay);
    }
    requestMember(e, t) {
        _(e, t);
    }
    getDebugState(e) {
        return u.getDebugState(e);
    }
}
c(b, "displayName", "GuildMemberRequesterStore");
let y = new b(a.h, {
    CONNECTION_CLOSED: d,
    CONNECTION_OPEN: d,
    CONNECTION_RESUMED: p,
    GUILD_MEMBERS_CHUNK_BATCH: f,
    SEARCH_MESSAGES_SUCCESS: E,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: E,
    LOCAL_MESSAGES_LOADED: m,
    LOAD_MESSAGES_SUCCESS: m,
    LOAD_MESSAGES_AROUND_SUCCESS: m,
    LOAD_RECENT_MENTIONS_SUCCESS: m,
    LOAD_PINNED_MESSAGES_SUCCESS: g,
});
